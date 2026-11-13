/**
 * The calculators of the site, rendered by components/calc/SpecTool.tsx (full tool) and MiniSim.tsx (mini-simulator).
 * Every rule, fee and delay comes from the engine (lib/engine/pets.ts), which reads params-2026.json: CDC and USDA APHIS
 * pages and the pet rules of five US airlines, read on November 13, 2026. This file ships to the browser.
 */
import type { ToolSpec, V, Input, ToolOut } from './tool-types';
import { formatMoney, formatNumber } from './format';
import {
  AIRLINES, AIRLINE_IDS, REGIONS, regionLabel, cabinFee, tripFee, carrierCheck, endorsementFee, HIGH_RISK, CDC, cdcPathway,
  timeline, DEST, type Dest,
} from './engine/pets';

export const usd = (x: number) => `${x < -0.5 ? '-' : ''}${formatMoney(Math.abs(Math.round(x)), 0)}`;
const n = (v: V, k: string) => Number(v[k]) || 0;
const s = (v: V, k: string) => String(v[k]);
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const longDate = (iso: string) => `${MONTHS[Number(iso.slice(5, 7)) - 1]} ${Number(iso.slice(8, 10))}, ${iso.slice(0, 4)}`;
export const inches = (d: number[]) => `${d.map((x) => formatNumber(x, Number.isInteger(x) ? 0 : 1)).join(' x ')} in`;

/**
 * ONE example case for the whole site, so that a reader never sees two amounts for one case: a small dog flying
 * Delta in the cabin, round trip within the mainland US, in a soft carrier of 17 x 11 x 10 inches weighing 15 lb with the dog.
 */
export const EX = { airline: 'delta', region: 'us', legs: 2, dims: [17, 11, 10], lb: 15 } as const;

const AIRLINE_OPTIONS = AIRLINE_IDS.map((id) => ({ value: id, label: AIRLINES[id].name }));
const AIR = (def: string = EX.airline): Input => ({ kind: 'select', id: 'airline', label: 'Airline', def, options: AIRLINE_OPTIONS, help: 'The five US airlines whose pet rules we could read at the source' });
const ROUTE = (def: string = EX.region): Input => ({ kind: 'select', id: 'region', label: 'Where you fly', def, options: REGIONS, wide: true });
const LEGS = (def: number = EX.legs): Input => ({ kind: 'choice', id: 'legs', label: 'Trip', def: String(def), options: [{ value: '1', label: 'One way' }, { value: '2', label: 'Round trip' }] });

function spec(inputs: Input[], arg: Record<string, number | string>, run: (v: V) => ToolOut): ToolSpec {
  return {
    inputs: inputs.map((i) => (arg[i.id] === undefined ? i : { ...i, def: (i.kind === 'choice' || i.kind === 'select') ? String(arg[i.id]) : Number(arg[i.id]) } as Input)),
    run,
  };
}
const READ = 'Read on the airline’s own page or contract of carriage on November 13, 2026. Airlines change fees without notice: the booking screen is the price.';

/** Fee for one pet in the cabin, on one airline and one route, with every airline side by side. */
function fee(v: V): ToolOut {
  const a = s(v, 'airline'), r = s(v, 'region'), legs = Number(s(v, 'legs')) || 1;
  const c = cabinFee(a, r), A = AIRLINES[a];
  const all = AIRLINE_IDS.map((id) => { const x = cabinFee(id, r); return [AIRLINES[id].name, x.status === 'yes' ? `${usd(x.fee)} each way` : x.status === 'no' ? 'No pet in the cabin' : 'Not published where we read', x.status === 'yes' ? usd(tripFee(x.fee, legs)) : ''] as string[]; });
  const example = `Example: a small dog in the cabin, ${legs === 2 ? 'round trip' : 'one way'}, ${regionLabel(r).toLowerCase()}`;
  const table = { caption: `In-cabin pet fee, ${regionLabel(r).toLowerCase()}`, headers: ['Airline', 'Fee', legs === 2 ? 'Round trip' : 'One way'], rows: all, align: ['l', 'l', 'r'] as Array<'l' | 'r'> };
  if (c.status === 'no') return { label: `${A.name}: pet in the cabin`, value: 'Not allowed', example, sub: `${A.name} takes no pet in the cabin on this route`, rows: [['Checked or cargo', A.checked]], table, note: READ };
  if (c.status === 'unknown') return { label: `${A.name}: pet in the cabin`, value: 'Not published', example, sub: 'We found no fee for this route on the pages we could read', rows: [['Checked or cargo', A.checked]], table, note: READ };
  return {
    label: `${A.name} in-cabin pet fee`, value: usd(tripFee(c.fee, legs)), example,
    sub: `${usd(c.fee)} each way, per pet carrier${legs === 2 ? ', charged on both legs' : ''}`,
    rows: [['Pets accepted in the cabin', A.species], ['Carriers per passenger', A.perPassenger], ['Carrier limit', A.carrier?.soft ? `soft ${inches(A.carrier.soft)}${A.carrier.hard ? `, hard ${inches(A.carrier.hard)}` : ''}${A.maxLb ? `, ${A.maxLb} lb` : ''}` : A.carrierRec ? `under the seat; ${inches(A.carrierRec)} soft recommended` : 'must fit under the seat in front']],
    table, note: READ,
  };
}

/** Does this carrier fit? Dimensions and weight against the published limits. */
function carrier(v: V): ToolOut {
  const dims = [n(v, 'l'), n(v, 'w'), n(v, 'h')], soft = s(v, 'type') === 'soft', lb = n(v, 'lb');
  const res = AIRLINE_IDS.map((id) => ({ id, ...carrierCheck(id, dims, soft, lb) }));
  const ok = res.filter((x) => x.verdict === 'fits').map((x) => AIRLINES[x.id].name);
  const word: Record<string, string> = { fits: 'Within the limit', 'too big': 'Too big', 'too heavy': 'Too heavy', 'no limit published': 'No size published', 'soft only': 'Soft carriers only' };
  return {
    label: `A ${soft ? 'soft' : 'hard'} carrier of ${inches(dims)}, ${formatNumber(lb, 0)} lb`, value: `${ok.length} of ${AIRLINE_IDS.length}`,
    example: `Example: a soft carrier of ${inches([...EX.dims])}, ${EX.lb} lb with the dog`,
    sub: ok.length ? `airlines whose published maximum it meets: ${ok.join(', ')}` : 'within no published maximum',
    rows: res.map((x) => [AIRLINES[x.id].name, word[x.verdict]] as [string, string]),
    table: { caption: 'Published carrier limits, read November 13, 2026', headers: ['Airline', 'Your carrier', 'Limit'], rows: res.map((x) => [AIRLINES[x.id].name, word[x.verdict], x.limit]), align: ['l', 'l', 'l'] },
    note: 'We compare your largest side with the largest allowed side, and so on. Under-seat space varies by aircraft: an airline can refuse a carrier that does not fit under the seat in front of you.',
  };
}

const DEST_OPTIONS = [
  { value: 'none', label: 'Within the US: no certificate' },
  { value: 'canada', label: 'Canada: rabies certificate only' },
  { value: 'mexico', label: 'Mexico: screwworm inspection (dogs)' },
  { value: 'eu', label: 'European Union country' },
  { value: 'uk', label: 'Great Britain' },
  { value: 'japan', label: 'Japan (titer test)' },
];
/** APHIS endorsement needed by destination, and the number of laboratory tests on the certificate. */
const ENDORSE: Record<string, { endorse: boolean; tests: number }> = { none: { endorse: false, tests: 0 }, canada: { endorse: false, tests: 0 }, mexico: { endorse: false, tests: 0 }, eu: { endorse: true, tests: 0 }, uk: { endorse: true, tests: 0 }, japan: { endorse: true, tests: 1 } };

/** Total out-of-pocket of a trip: airline fees, USDA endorsement, the vet's bill the reader enters. */
function cost(v: V): ToolOut {
  const a = s(v, 'airline'), r = s(v, 'region'), legs = Number(s(v, 'legs')) || 1, d = s(v, 'dest'), vet = n(v, 'vet');
  const c = cabinFee(a, r), A = AIRLINES[a], e = ENDORSE[d] ?? ENDORSE.none;
  const air = c.status === 'yes' ? tripFee(c.fee, legs) : 0, usda = e.endorse ? endorsementFee(e.tests, 1) : 0;
  return {
    label: 'What the trip costs you in fees', value: usd(air + usda + vet),
    example: `Example: one dog on ${A.name}, ${legs === 2 ? 'round trip' : 'one way'}, ${regionLabel(r).toLowerCase()}, vet bill not entered`,
    exampleAide: 'enter your vet’s price to complete the total',
    sub: c.status === 'yes' ? `${usd(c.fee)} airline fee each way${usda ? `, ${usd(usda)} USDA endorsement` : ''}` : c.status === 'no' ? `${A.name} takes no pet in the cabin here: airline fee not counted` : 'No airline fee published for this route: not counted',
    rows: [['Airline in-cabin fee', c.status === 'yes' ? usd(air) : 'not counted', air], ['USDA APHIS endorsement', e.endorse ? usd(usda) : 'none needed', usda], ['Your vet (exam, certificate)', vet ? usd(vet) : 'enter your vet’s price', vet], ['CDC Dog Import Form', '$0, no fee listed by CDC']],
    note: 'Lab fees for a titer test, travel crates, pet shippers and quarantine stays are not included. The USDA fee is the one listed by APHIS on June 18, 2026 for one pet on one certificate.',
  };
}

const HR_OPTIONS = [{ value: 'low', label: 'Only low-risk countries (Canada, Mexico, EU…)' }, ...HIGH_RISK.map((c) => ({ value: c, label: c }))];
/** CDC rules for a dog entering the United States. */
function cdc(v: V): ToolOut {
  const where = s(v, 'country'), hr = where !== 'low', vax = s(v, 'vax') as 'us' | 'abroad' | 'none', age = n(v, 'age');
  const p = cdcPathway(hr, vax);
  const young = age < CDC.minAgeMonths;
  const rows: Array<[string, string]> = [['CDC Dog Import Form receipt', 'needed, for every dog'], ['Age', young ? `too young: ${CDC.minAgeMonths} months minimum` : `${formatNumber(age, 0)} months: meets the ${CDC.minAgeMonths}-month minimum`], ['Microchip', 'needed, readable by a universal scanner']];
  let value = 'Receipt only', sub = 'plus the general rules: healthy, microchipped, 6 months or older';
  if (p === 'usvax') { value = 'Receipt + US rabies form'; sub = 'Certification of U.S.-issued Rabies Vaccination, endorsed by USDA before the dog left the US'; rows.push(['Ports of entry', 'any port, as named on the receipt'], ['First vaccine', `${CDC.vaxBeforeLeaveDays} days at least before leaving the US`]); }
  if (p === 'foreignvax') { value = 'Receipt + foreign form + facility'; sub = 'Certification of Foreign Rabies Vaccination and Microchip, and a reservation at a CDC-registered animal care facility'; rows.push(['Ports of entry', `by air only, at one of ${CDC.acf.length} airports with a facility`], ['Quarantine', `${CDC.quarantineDays} days at the facility unless the shortened protocol applies`]); }
  if (p === 'none') { value = 'Entry refused'; sub = 'A dog that was in a high-risk country in the last 6 months must be vaccinated against rabies'; }
  if (p === 'low') rows.push(['Ports of entry', 'any airport, seaport or land border']);
  return {
    label: 'What your dog needs to enter the US', value: young && p !== 'none' ? 'Not yet: under 6 months' : value,
    example: 'Example: a dog coming back from a low-risk country, vaccinated in the US, 3 years old', sub, rows,
    note: `CDC rules in force on November 13, 2026 (FAQ updated August 27, 2026; high-risk list of April 15, 2026, ${HIGH_RISK.length} countries). Cats need no CDC form.`,
  };
}

/** Validity of a CDC Dog Import Form receipt. */
function form(v: V): ToolOut {
  const hr = s(v, 'risk') === 'high', m = n(v, 'months');
  const left = CDC.receiptLowRiskMonths - m;
  return {
    label: 'Your CDC receipt', value: hr ? 'One entry' : left > 0 ? `${formatNumber(left, 0)} month${left === 1 ? '' : 's'} left` : 'Expired: file a new form',
    example: 'Example: a receipt issued 2 months ago, dog coming from a low-risk country',
    sub: hr ? 'From a high-risk country, a receipt covers one entry only' : `Valid ${CDC.receiptLowRiskMonths} months from issue, for the same dog entering from the same country`,
    rows: [['Fee', 'none listed by CDC'], ['Another dog', 'its own form and receipt'], ['Another departure country', 'a new form'], ['Show it to', 'the airline before boarding, then US Customs and Border Protection']],
  };
}

/** USDA APHIS endorsement fee. */
function endorse(v: V): ToolOut {
  const t = n(v, 'tests'), p = Math.max(1, n(v, 'pets'));
  const f = endorsementFee(t, p);
  return {
    label: 'USDA endorsement fee for one certificate', value: usd(f), example: 'Example: one dog, a certificate without laboratory test (EU, Great Britain)',
    sub: t <= 0 ? 'same fee whatever the number of pets on the certificate' : `${formatNumber(t, 0)} laboratory test${t === 1 ? '' : 's'}, ${formatNumber(p, 0)} pet${p === 1 ? '' : 's'}`,
    rows: [['No laboratory test', usd(endorsementFee(0, p))], ['1 or 2 tests', usd(endorsementFee(1, p))], ['3 to 6 tests', usd(endorsementFee(3, p))], ['7 tests or more', usd(endorsementFee(7, p))]],
    note: 'APHIS fee schedule of June 18, 2026. Vaccines are not tests. The vet’s own charges come on top. No fee for a service dog as defined by the ADA.',
  };
}

const TL_OPTIONS: Array<{ value: Dest; label: string }> = [
  { value: 'eu', label: 'European Union (France, Italy, Spain, Germany…)' },
  { value: 'tapeworm', label: 'Ireland, Finland, Malta or Norway' },
  { value: 'uk', label: 'Great Britain' },
  { value: 'japan', label: 'Japan' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'canada', label: 'Canada' },
];
/** Countdown of the formalities to a destination, from the number of days left before the flight. */
function plan(v: V): ToolOut {
  const d = s(v, 'dest') as Dest, dog = s(v, 'pet') === 'dog', vaxOk = s(v, 'vax') === 'yes', days = n(v, 'days');
  const t = timeline(d, dog, vaxOk);
  const name = TL_OPTIONS.find((o) => o.value === d)?.label ?? d;
  const late = days < t.minDays;
  return {
    label: `${dog ? 'Dog' : 'Cat'} to ${name.split(' (')[0]}`, value: late ? `Too soon: ${formatNumber(t.minDays - days, 0)} more days needed` : 'Feasible on these dates',
    example: 'Example: a dog to the European Union, flight in 30 days, rabies vaccine already valid',
    sub: late ? `the shortest lead time is ${formatNumber(t.minDays, 0)} days from the first step` : `${formatNumber(days, 0)} days before your flight`,
    rows: t.steps.map((x) => [x.label, x.day === null ? (x.note ?? 'any time before') : `${x.day === 0 ? 'on arrival' : `last ${formatNumber(x.day, 0)} days`}${x.note ? ` · ${x.note}` : ''}`] as [string, string]),
    note: 'Formalities read on the USDA APHIS page of each destination. Rules change: your USDA-accredited veterinarian checks them again before signing.',
  };
}

type Arg = Record<string, number | string>;
const SPECS: Record<string, (arg?: Arg) => ToolSpec> = {
  /** Home: fee of one pet in the cabin, every airline side by side. */
  all: (arg = {}) => ({
    ...spec([AIR(), ROUTE(), LEGS()], arg, fee),
    profiles: [
      { label: 'Cheapest within the US', set: { region: 'us' } },
      { label: 'Flying to Mexico', set: { region: 'mexico' } },
      { label: 'Flying to Europe', set: { region: 'europe' } },
      { label: 'Hawaii', set: { region: 'hawaii' } },
    ],
  }),
  fee: (arg = {}) => spec([AIR(), ROUTE(), LEGS()], arg, fee),
  carrier: (arg = {}) => spec([
    { id: 'l', label: 'Length', def: EX.dims[0], unit: 'in', max: 40, decimals: 1 },
    { id: 'w', label: 'Width', def: EX.dims[1], unit: 'in', max: 40, decimals: 1 },
    { id: 'h', label: 'Height', def: EX.dims[2], unit: 'in', max: 40, decimals: 1 },
    { id: 'lb', label: 'Pet and carrier weight', def: EX.lb, unit: 'lb', max: 150, decimals: 1 },
    { kind: 'choice', id: 'type', label: 'Carrier type', def: 'soft', options: [{ value: 'soft', label: 'Soft-sided' }, { value: 'hard', label: 'Hard-sided' }], wide: true },
  ], arg, carrier),
  cost: (arg = {}) => spec([AIR(), ROUTE(), LEGS(), { kind: 'select', id: 'dest', label: 'Entry rules of the destination', def: 'none', options: DEST_OPTIONS, wide: true }, { id: 'vet', label: 'Your vet’s price (exam and certificate)', def: 0, unit: '$', max: 5000, help: 'Ask your vet: we publish no vet price', adv: true, short: 'vet' }], arg, cost),
  cdc: (arg = {}) => spec([
    { kind: 'select', id: 'country', label: 'Countries the dog was in during the last 6 months', def: 'low', options: HR_OPTIONS, wide: true, help: 'Pick a high-risk country if the dog was in any of them' },
    { kind: 'select', id: 'vax', label: 'Rabies vaccine given', def: 'us', options: [{ value: 'us', label: 'In the United States' }, { value: 'abroad', label: 'Abroad' }, { value: 'none', label: 'Not vaccinated' }] },
    { id: 'age', label: 'Age of the dog', def: 36, unit: 'months', max: 300 },
  ], arg, cdc),
  form: (arg = {}) => spec([
    { kind: 'choice', id: 'risk', label: 'Country the dog comes from', def: 'low', options: [{ value: 'low', label: 'Low-risk' }, { value: 'high', label: 'High-risk' }] },
    { id: 'months', label: 'Months since the receipt was issued', def: 2, unit: 'months', max: 24 },
  ], arg, form),
  endorse: (arg = {}) => spec([
    { id: 'tests', label: 'Laboratory tests on the certificate', def: 0, max: 20, help: 'A rabies titer is one test; vaccines do not count' },
    { id: 'pets', label: 'Pets on the certificate', def: 1, max: 20 },
  ], arg, endorse),
  plan: (arg = {}) => spec([
    { kind: 'select', id: 'dest', label: 'Destination', def: 'eu', options: TL_OPTIONS, wide: true },
    { kind: 'choice', id: 'pet', label: 'Pet', def: 'dog', options: [{ value: 'dog', label: 'Dog' }, { value: 'cat', label: 'Cat' }] },
    { kind: 'choice', id: 'vax', label: 'Rabies vaccine valid, given after the chip', def: 'yes', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }] },
    { id: 'days', label: 'Days until your flight', def: 30, unit: 'days', max: 730 },
  ], arg, plan),
};

export function getTool(kind: string, arg?: Arg): ToolSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`Unknown tool ${kind}`);
  return f(arg);
}
export const TOOL_KINDS = Object.keys(SPECS);
export { DEST, AIRLINES, REGIONS };
