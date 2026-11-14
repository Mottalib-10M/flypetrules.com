/**
 * The calculators of the site, rendered by components/calc/SpecTool.tsx (full tool) and MiniSim.tsx (mini-simulator).
 * Every rule, fee and delay comes from the engine (lib/engine/pets.ts), which reads params-2026.json: CDC and USDA APHIS
 * pages and the pet rules of five US airlines, read on November 13, 2026. This file ships to the browser.
 */
import type { ToolSpec, V, Input, ToolOut } from './tool-types';
import { formatMoney, formatNumber } from './format';
import {
  AIRLINES, AIRLINE_IDS, REGIONS, regionLabel, cabinFee, tripFee, carrierCheck, endorsementFee, HIGH_RISK, CDC, cdcPathway,
  timeline, DEST, type Dest, iataContainer, commonCarrier, fitsBox, IATA,
} from './engine/pets';
import P from '../data/params-2026.json';

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
const AIR = (def: string = EX.airline): Input => ({ kind: 'select', id: 'airline', label: 'Airline', def, options: AIRLINE_OPTIONS, help: 'United, JetBlue and Allegiant are not covered yet: check their own pet page' });
const ROUTE = (def: string = EX.region): Input => ({ kind: 'select', id: 'region', label: 'Where you fly', def, options: REGIONS, wide: true });
const LEGS = (def: number = EX.legs): Input => ({ kind: 'choice', id: 'legs', label: 'Trip', def: String(def), options: [{ value: '1', label: 'One way' }, { value: '2', label: 'Round trip' }] });

function spec(inputs: Input[], arg: Record<string, number | string>, run: (v: V) => ToolOut): ToolSpec {
  return {
    inputs: inputs.map((i) => (arg[i.id] === undefined ? i : { ...i, def: (i.kind === 'choice' || i.kind === 'select') ? String(arg[i.id]) : Number(arg[i.id]) } as Input)),
    run,
  };
}
/** A route label inside a sentence: "within the mainland US", "US to or from Mexico" (never "us to or from mexico"). */
export const routeInText = (r: string) => { const l = regionLabel(r); return /^(Within|Mainland|Between) /.test(l) ? l[0].toLowerCase() + l.slice(1) : l; };
const tripWord = (legs: number) => (legs === 2 ? 'round trip' : 'one way');
const plural = (x: number, one: string, many = `${one}s`) => `${formatNumber(x, Number.isInteger(x) ? 0 : 1)} ${x === 1 ? one : many}`;
/** The cheapest airline with an in-cabin fee on a route (the "Cheapest within the US" profile selects it). */
export const cheapestOn = (r: string) => [...AIRLINE_IDS].filter((id) => cabinFee(id, r).status === 'yes').sort((a, b) => (cabinFee(a, r) as { fee: number }).fee - (cabinFee(b, r) as { fee: number }).fee)[0];
/*
 * Examples (naive testers of 2026-11-14): every "Example: …" line is written from the values on screen, never typed
 * as a fixed sentence, so that the yellow line and the result under it always describe the same case, whatever
 * values a page sets. tests/exemple-coherence.test.ts checks it for every calculator and every mini of every page.
 */
const READ = 'Read on the airline’s own pet page or official rules (contract of carriage) on November 13, 2026. Airlines change fees without notice: the booking screen is the price.';

/** Fee for one pet in the cabin, on one airline and one route, with every airline side by side. */
function fee(v: V): ToolOut {
  const a = s(v, 'airline'), r = s(v, 'region'), legs = Number(s(v, 'legs')) || 1;
  const c = cabinFee(a, r), A = AIRLINES[a];
  const all = AIRLINE_IDS.map((id) => { const x = cabinFee(id, r); return [AIRLINES[id].name, x.status === 'yes' ? `${usd(x.fee)} each way` : x.status === 'no' ? 'No pet in the cabin' : 'Fee not published', x.status === 'yes' ? usd(tripFee(x.fee, legs)) : x.status === 'no' ? 'No' : 'Ask the airline'] as string[]; });
  const example = `Example: a small dog in the cabin on ${A.name}, ${tripWord(legs)}, ${routeInText(r)}`;
  const table = { caption: `In-cabin pet fee, ${routeInText(r)}`, headers: ['Airline', 'Fee', legs === 2 ? 'Round trip' : 'One way'], rows: all, align: ['l', 'l', 'r'] as Array<'l' | 'r'> };
  if (c.status === 'no') return { label: `${A.name}: pet in the cabin`, value: 'Not allowed', example, sub: `${A.name} takes no pet in the cabin on this route`, rows: [['Checked or cargo', A.checked]], table, note: READ };
  if (c.status === 'unknown') return { label: `${A.name}: pet in the cabin`, value: 'Not published', example, sub: 'We found no fee for this route on the pages we could read', rows: [['Checked or cargo', A.checked]], table, note: READ };
  return {
    label: `${A.name} in-cabin pet fee`, value: usd(tripFee(c.fee, legs)), example,
    sub: `${usd(c.fee)} each way, per pet carrier${legs === 2 ? ', charged on both flights, going and coming back' : ''}`,
    rows: [['Pets accepted in the cabin', A.species], ['Carriers per passenger', A.perPassenger], ['Carrier limit', A.carrier?.soft ? `soft ${inches(A.carrier.soft)}${A.carrier.hard ? `, hard ${inches(A.carrier.hard)}` : ''}${A.maxLb ? `, ${A.maxLb} lb` : ''}` : A.carrierRec ? `under the seat; ${inches(A.carrierRec)} soft recommended` : 'must fit under the seat in front']],
    table, note: READ,
  };
}

/** Does this carrier fit? Dimensions and weight against the published limits. */
const list = (x: string[]) => (x.length <= 1 ? x.join('') : `${x.slice(0, -1).join(', ')} and ${x[x.length - 1]}`);
/** A line of the carrier checker is "accepted" when it starts with "Fits" (the headline counts exactly these lines). */
export const CARRIER_ACCEPTED = /^Fits\b/;
function carrier(v: V): ToolOut {
  const dims = [n(v, 'l'), n(v, 'w'), n(v, 'h')], soft = s(v, 'type') === 'soft', lb = n(v, 'lb'), focus = s(v, 'air');
  const res = AIRLINE_IDS.map((id) => ({ id, ...carrierCheck(id, dims, soft, lb) }));
  /*
   * Naive testers of 2026-11-14, 2nd round (all three): the headline "2 of 5 airlines" counted only the airlines with a
   * published maximum the carrier meets, while the list under it showed Delta and Southwest as accepting it (no maximum
   * published) and only Alaska as "Too big". The headline now counts every airline whose line says the carrier is
   * accepted, and names those that refuse it; tests/carrier-count.test.ts checks headline = accepted lines.
   */
  const accepted = (x: typeof res[number]) => x.verdict === 'fits' || x.verdict === 'no limit published';
  const word: Record<string, string> = { fits: 'Fits: within its published limit', 'too big': 'No: too big', 'too heavy': 'No: too heavy', 'no limit published': 'Fits if it slides under the seat: this airline gives no size, only that rule', 'soft only': 'No: soft carriers only' };
  /** Delta publishes no maximum but recommends a size: say whether the carrier fits the recommendation. */
  const verdict = (x: typeof res[number]) => {
    const rec = AIRLINES[x.id].carrierRec;
    if (x.verdict !== 'no limit published' || !rec || !soft) return word[x.verdict];
    return fitsBox(dims, rec) ? `Fits: no hard limit set, and within the ${inches(rec)} it recommends` : `Fits if it slides under the seat: no hard limit set, but larger than the ${inches(rec)} it recommends`;
  };
  const why: Record<string, string> = { 'too big': 'too big', 'too heavy': 'too heavy', 'soft only': 'soft carriers only' };
  const ok = res.filter(accepted), no = res.filter((x) => !accepted(x));
  const sure = ok.filter((x) => x.verdict === 'fits' || (AIRLINES[x.id].carrierRec && soft && fitsBox(dims, AIRLINES[x.id].carrierRec!))).map((x) => AIRLINES[x.id].name);
  const open = ok.map((x) => AIRLINES[x.id].name).filter((x) => !sure.includes(x));
  const total = AIRLINE_IDS.length;
  const count = ok.length === total ? `Fits on all ${total} airlines` : ok.length === 0 ? `Fits on none of the ${total} airlines` : `Fits on ${ok.length} of ${total} airlines`;
  const refusedTxt = no.length ? `${no.map((x) => `${why[x.verdict]} for ${AIRLINES[x.id].name}`).join('; ')}${no.length === 1 ? ' only' : ''}` : '';
  const detail = [sure.length ? `${list(sure)}: within the published or recommended size` : '', open.length ? `${list(open)}: no size given, it must slide under the seat` : ''].filter(Boolean).join('; ');
  const sub = [refusedTxt, detail].filter(Boolean).join('. ').replace(/^./, (c) => c.toUpperCase());
  const lbTxt = formatNumber(lb, Number.isInteger(lb) ? 0 : 1);
  const desc = `A ${soft ? 'soft' : 'hard'} carrier of ${inches(dims)}, ${lbTxt} lb`;
  const f = res.find((x) => x.id === focus);
  const fName = f ? AIRLINES[f.id].name : '';
  const value = !f ? count : accepted(f) ? (sure.includes(fName) ? `Fits on ${fName}` : `No size limit on ${fName}`) : `${why[f.verdict][0].toUpperCase()}${why[f.verdict].slice(1)} for ${fName}`;
  return {
    label: f ? `${desc}: ${fName}` : `${desc}: airlines where it fits`, value,
    example: `Example: a ${soft ? 'soft' : 'hard'} carrier of ${inches(dims)}, ${lbTxt} lb with the pet inside, ${f ? `on ${fName}` : 'on any of the five airlines'}`,
    sub: f ? `${count}${refusedTxt ? `: ${refusedTxt}` : ''}` : sub,
    rows: res.map((x) => [AIRLINES[x.id].name, verdict(x)] as [string, string]),
    table: { caption: 'Published carrier limits, read November 13, 2026', headers: ['Airline', 'Your carrier', 'Limit'], rows: res.map((x) => [AIRLINES[x.id].name, verdict(x), x.limit]), align: ['l', 'l', 'l'] },
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
const DEST_IN_TEXT: Record<string, string> = { none: 'no entry certificate', canada: 'entry rules of Canada', mexico: 'entry rules of Mexico', eu: 'entry rules of a European Union country', uk: 'entry rules of Great Britain', japan: 'entry rules of Japan' };
/** APHIS endorsement needed by destination, and the number of laboratory tests on the certificate. */
const ENDORSE: Record<string, { endorse: boolean; tests: number }> = { none: { endorse: false, tests: 0 }, canada: { endorse: false, tests: 0 }, mexico: { endorse: false, tests: 0 }, eu: { endorse: true, tests: 0 }, uk: { endorse: true, tests: 0 }, japan: { endorse: true, tests: 1 } };

/** Total out-of-pocket of a trip: airline fees, USDA endorsement, the vet's bill the reader enters. */
function cost(v: V): ToolOut {
  const a = s(v, 'airline'), r = s(v, 'region'), legs = Number(s(v, 'legs')) || 1, d = s(v, 'dest'), vet = n(v, 'vet');
  const c = cabinFee(a, r), A = AIRLINES[a], e = ENDORSE[d] ?? ENDORSE.none;
  const air = c.status === 'yes' ? tripFee(c.fee, legs) : 0, usda = e.endorse ? endorsementFee(e.tests, 1) : 0;
  return {
    label: 'What the trip costs you in fees', value: usd(air + usda + vet),
    example: `Example: one dog on ${A.name}, ${tripWord(legs)}, ${routeInText(r)}, ${DEST_IN_TEXT[d] ?? DEST_IN_TEXT.none}, ${vet ? `vet bill ${usd(vet)}` : 'vet bill not entered'}`,
    exampleAide: 'enter your vet’s price to complete the total',
    sub: c.status === 'yes' ? `${usd(c.fee)} airline fee each way${usda ? `, ${usd(usda)} for the USDA stamp on the certificate` : ''}` : c.status === 'no' ? `${A.name} takes no pet in the cabin here: airline fee not counted` : 'No airline fee published for this route: not counted',
    rows: [['Airline in-cabin fee', c.status === 'yes' ? usd(air) : 'not counted', air], ['USDA stamp on the certificate (APHIS)', e.endorse ? usd(usda) : 'none needed', usda], ['Your vet (exam, certificate)', vet ? usd(vet) : 'enter your vet’s price', vet], ['CDC Dog Import Form', '$0, no fee listed by CDC']],
    note: 'Lab fees for a titer test, travel crates, pet shippers and quarantine stays are not included. The USDA fee is the one listed by APHIS on June 18, 2026 for one pet on one certificate.',
  };
}

/** Option labels stay within two lines at 320 px (SelectField keeps 48 px up to two lines): longer ones made the field 61 px high (check-layout, 2026-11-14). */
const HR_OPTIONS = [{ value: 'low', label: 'US or low-risk only (Canada, EU…)' }, ...HIGH_RISK.map((c) => ({ value: c, label: c }))];
/** CDC rules for a dog entering the United States. */
function cdc(v: V): ToolOut {
  const where = s(v, 'country'), hr = where !== 'low', vax = s(v, 'vax') as 'us' | 'abroad' | 'none', age = n(v, 'age');
  const p = cdcPathway(hr, vax);
  const young = age < CDC.minAgeMonths;
  const rows: Array<[string, string]> = [['CDC Dog Import Form', 'needed for every dog: online, no fee listed by CDC; keep the receipt'], ['Age', young ? `too young: ${CDC.minAgeMonths} months minimum` : `${formatNumber(age, 0)} months: meets the ${CDC.minAgeMonths}-month minimum`], ['Microchip', 'needed, readable by a universal scanner']];
  let value = 'CDC form only', sub = 'fill in the CDC Dog Import Form online and keep the receipt; plus the general rules: healthy, microchipped, 6 months or older';
  if (p === 'usvax') { value = 'CDC form + US rabies paper'; sub = 'the CDC Dog Import Form, plus the CDC rabies form for a dog vaccinated in the US (“Certification of U.S.-issued Rabies Vaccination”), signed by your vet and stamped by USDA before the dog left the US'; rows.push(['Ports of entry', 'any port, as named on the receipt'], ['First vaccine', `${CDC.vaxBeforeLeaveDays} days at least before leaving the US`]); }
  if (p === 'foreignvax') { value = 'CDC form + foreign rabies paper + facility'; sub = 'the CDC Dog Import Form, the CDC rabies form for a dog vaccinated abroad (“Certification of Foreign Rabies Vaccination and Microchip”), and a booking at a CDC-registered animal care facility at the arrival airport'; rows.push(['Ports of entry', `by air only, at one of ${CDC.acf.length} airports with a facility`], ['Quarantine', `${CDC.quarantineDays} days at the facility unless the shortened protocol applies`]); }
  if (p === 'none') { value = 'Entry refused'; sub = 'A dog that was in a high-risk country in the last 6 months must be vaccinated against rabies'; }
  if (p === 'low') rows.push(['Ports of entry', 'any airport, seaport or land border']);
  return {
    label: 'What your dog needs to enter the US', value: young && p !== 'none' ? 'Not yet: under 6 months' : value,
    example: `Example: a dog that was ${hr ? `in ${where}` : 'only in the US or low-risk countries'} in the last 6 months, ${vax === 'us' ? 'vaccinated against rabies in the US' : vax === 'abroad' ? 'vaccinated against rabies abroad' : 'not vaccinated against rabies'}, ${plural(age, 'month')} old`, sub, rows,
    note: `CDC rules in force on November 13, 2026 (FAQ updated August 27, 2026; high-risk list of April 15, 2026, ${HIGH_RISK.length} countries). Cats need no CDC form.`,
  };
}

/** Validity of a CDC Dog Import Form receipt. */
function form(v: V): ToolOut {
  const hr = s(v, 'risk') === 'high', m = n(v, 'months');
  const left = CDC.receiptLowRiskMonths - m;
  return {
    label: 'Your CDC receipt', value: hr ? 'One entry' : left > 0 ? `${formatNumber(left, 0)} month${left === 1 ? '' : 's'} left` : 'Expired: file a new form',
    example: `Example: a receipt issued ${plural(m, 'month')} ago, dog coming from a ${hr ? 'high' : 'low'}-risk country`,
    sub: hr ? 'From a high-risk country, a receipt covers one entry only' : `Valid ${CDC.receiptLowRiskMonths} months from issue, for the same dog entering from the same country`,
    rows: [['Fee', 'none listed by CDC'], ['Another dog', 'its own form and receipt'], ['Another departure country', 'a new form'], ['Show it to', 'the airline before boarding, then US Customs and Border Protection']],
  };
}

/** USDA APHIS endorsement fee. */
function endorse(v: V): ToolOut {
  const t = n(v, 'tests'), p = Math.max(1, n(v, 'pets'));
  const f = endorsementFee(t, p);
  return {
    label: 'USDA fee to stamp (endorse) one health certificate', value: usd(f), example: `Example: ${plural(p, 'pet')} on one certificate, ${t <= 0 ? 'no laboratory test' : plural(t, 'laboratory test')}`,
    sub: t <= 0 ? 'same fee whatever the number of pets on the certificate' : `${formatNumber(t, 0)} laboratory test${t === 1 ? '' : 's'}, ${formatNumber(p, 0)} pet${p === 1 ? '' : 's'}`,
    rows: [['No laboratory test', usd(endorsementFee(0, p))], ['1 or 2 tests', usd(endorsementFee(1, p))], ['3 to 6 tests', usd(endorsementFee(3, p))], ['7 tests or more', usd(endorsementFee(7, p))]],
    note: 'APHIS fee schedule of June 18, 2026. Vaccines are not tests. The vet’s own charges come on top. No fee for a service dog as defined by the ADA (Americans with Disabilities Act).',
  };
}

const TL_OPTIONS: Array<{ value: Dest; label: string }> = [
  { value: 'eu', label: 'European Union (France, Italy…)' },
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
  const label0 = (TL_OPTIONS.find((o) => o.value === d)?.label ?? d).split(' (')[0];
  const name = d === 'eu' ? 'the European Union' : label0;
  const late = days < t.minDays;
  return {
    label: `${dog ? 'Dog' : 'Cat'} to ${name}`, value: late ? `Too soon: ${formatNumber(t.minDays - days, 0)} more days needed` : 'Feasible on these dates',
    example: `Example: a ${dog ? 'dog' : 'cat'} going to ${name}, flight in ${plural(days, 'day')}, rabies vaccine ${vaxOk ? 'already valid' : 'not yet given'}`,
    sub: late ? `the shortest lead time is ${formatNumber(t.minDays, 0)} days from the first step` : `${formatNumber(days, 0)} days before your flight`,
    rows: t.steps.map((x) => [x.label, x.day === null ? (x.note ?? 'any time before') : `${x.day === 0 ? 'on arrival' : `last ${formatNumber(x.day, 0)} days`}${x.note ? ` · ${x.note}` : ''}`] as [string, string]),
    note: 'Formalities read on the USDA APHIS page of each destination. Rules change: your USDA-approved vet checks them again before signing.',
  };
}


/** Pet carrier: the largest carrier that every airline of the trip accepts in the cabin. */
const LEG_OPTIONS = [{ value: 'none', label: 'No other airline' }, ...AIRLINE_OPTIONS];
function common(v: V): ToolOut {
  const ids = [s(v, 'a1'), s(v, 'a2')].filter((x) => x !== 'none'), soft = s(v, 'type') === 'soft';
  const r = commonCarrier(ids, soft), names = [...new Set(ids)].map((id) => AIRLINES[id].name);
  const trip = names.join(' and ');
  const example = `Example: a ${soft ? 'soft' : 'hard'} carrier, ${ids[0] ? `${AIRLINES[ids[0]].name} out` : 'no airline out'}${ids[1] ? ` and ${AIRLINES[ids[1]].name} ${s(v, 'a1') === 'none' ? 'only' : 'back'}` : ', no other airline'}`;
  const rows: Array<[string, string]> = ids.length ? [...new Set(ids)].map((id) => {
    const a = AIRLINES[id];
    if (!soft && a.softOnly) return [a.name, 'soft carriers only in the cabin'];
    const m = a.carrier ? (soft ? a.carrier.soft : a.carrier.hardRegional ?? a.carrier.hard) : undefined;
    return [a.name, m ? `${inches(m)}${a.maxLb ? `, ${a.maxLb} lb with the pet` : ''}${!soft && a.carrier?.hardRegional ? ' (fits its regional jets too)' : ''}` : a.carrierRec ? `no maximum; ${inches(a.carrierRec)} soft recommended` : 'no maximum published: under the seat'];
  }) : [];
  if (r.refused.length && r.refused.length === ids.length) return { label: `A hard carrier on ${trip}`, value: 'Not accepted', example, sub: `${names.join(', ')} take${names.length === 1 ? 's' : ''} only soft carriers in the cabin`, rows, note: READ };
  const value = r.box ? inches(r.box) : 'No published maximum';
  return {
    label: `Largest ${soft ? 'soft' : 'hard'} carrier for ${trip}`, value,
    example,
    sub: r.refused.length ? `${r.refused.map((id) => AIRLINES[id].name).join(', ')} take${r.refused.length === 1 ? 's' : ''} no hard carrier: switch to soft` : r.box ? `length x width x height, outside, any order${r.maxLb ? `; ${r.maxLb} lb at most with the pet` : ''}` : 'these airlines only ask that it fits under the seat in front',
    rows,
    note: `${READ} Each side is the smallest of the airlines’ limits, compared largest side to largest side.`,
  };
}

/** Dog carrier: the IATA minimum inside size for a dog, and whether a carrier that size meets each cabin limit. */
function kennel(v: V): ToolOut {
  const a = n(v, 'a'), b = n(v, 'b'), c = n(v, 'c'), d = n(v, 'd'), snub = s(v, 'snub') === 'yes', bed = n(v, 'bed');
  const box = iataContainer(a, b, c, d, 1, snub, bed).map((x) => Math.ceil(x * 2) / 2);
  const rows = AIRLINE_IDS.map((id) => {
    const A = AIRLINES[id], m = A.carrier?.soft;
    return [A.name, m ? (fitsBox(box, m) ? `inside size fits within ${inches(m)}` : `larger than ${inches(m)}`) : A.carrierRec ? `no hard limit; ${inches(A.carrierRec)} recommended${fitsBox(box, A.carrierRec) ? ', fits' : ', larger'}` : 'no maximum published'] as [string, string];
  });
  const fit = AIRLINE_IDS.filter((id) => { const m = AIRLINES[id].carrier?.soft; return m && fitsBox(box, m); }).map((id) => AIRLINES[id].name);
  return {
    label: 'Smallest inside size for this dog (IATA formula)', value: inches(box),
    example: `Example: a dog ${inches([a])} from nose to tail root, ${inches([b])} to the elbow, ${inches([c])} at the shoulders, ${inches([d])} tall, ${snub ? 'snub-nosed' : 'not snub-nosed'}${bed ? `, ${inches([bed])} of bedding` : ', no bedding'}`,
    sub: fit.length ? `a soft carrier this size inside can meet the published cabin limit of ${fit.join(', ')}` : 'no published cabin limit is that large: think cargo-size crate, or an airline that takes pets in the hold',
    rows: [['Length = A + half of B', inches([box[0]])], ['Width = 2 x C', inches([box[1]])], ['Height = D + bedding', inches([box[2]])], ...rows],
    note: `IATA Live Animals Regulations, Container Requirement 1, read on iata.org on November 14, 2026${snub ? `; ${IATA.snubPct} % added for a snub-nosed breed` : ''}. It sets inside sizes for crates in the hold; airline cabin limits are outside sizes, so a carrier needs a little more than this.`,
  };
}

/** APHIS pet travel: which agency, which papers and which USDA fee, by direction, animal and destination. */
const AP = (P as unknown as { aphis: { birdsMaxAsPets: number } }).aphis;
const APHIS_DEST = [{ value: 'canada', label: 'Canada' }, { value: 'mexico', label: 'Mexico' }, { value: 'eu', label: 'European Union country' }, { value: 'uk', label: 'Great Britain' }, { value: 'japan', label: 'Japan' }, { value: 'other', label: 'Another country' }];
function aphis(v: V): ToolOut {
  const dir = s(v, 'dir'), sp = s(v, 'species'), d = s(v, 'dest'), pets = Math.max(1, n(v, 'pets'));
  const destName = d === 'eu' ? 'the European Union' : d === 'other' ? 'another country' : APHIS_DEST.find((o) => o.value === d)?.label ?? d;
  const SP: Record<string, [string, string]> = { dog: ['dog', 'dogs'], cat: ['cat', 'cats'], bird: ['pet bird', 'pet birds'], other: ['small pet (ferret, rabbit, rodent or reptile)', 'small pets (ferrets, rabbits, rodents or reptiles)'], poultry: ['chicken or other poultry bird', 'chickens or other poultry birds'] };
  const who = `${formatNumber(pets, 0)} ${(SP[sp] ?? SP.dog)[pets === 1 ? 0 : 1]}`;
  const example = `Example: ${who} ${dir === 'in' ? 'entering the US' : `leaving the US for ${destName}`}`;
  if (sp === 'poultry') return { label: 'APHIS pet travel', value: 'Not a pet for APHIS', example, sub: 'Chickens, ducks, geese, pigeons, quail, turkeys and other poultry follow the APHIS rules for live poultry, not pet travel', rows: [['Pet travel rules', 'do not apply'], ['Where to look', 'APHIS live animal import and export pages']], note: 'APHIS, Travel with a pet, last modified March 20, 2026.' };
  if (sp === 'bird' && pets > AP.birdsMaxAsPets) return { label: 'APHIS pet travel', value: 'Not pets any more', example, sub: `APHIS treats ${AP.birdsMaxAsPets + 1} or more birds as a shipment, not as pets`, rows: [['Pet travel rules', 'do not apply'], ['Other agency', 'U.S. Fish and Wildlife Service, for some species']], note: 'APHIS, Pet travel from another country to the United States, last modified March 19, 2026.' };
  if (dir === 'in') {
    const dog = sp === 'dog';
    return {
      label: `${dog ? 'A dog' : sp === 'cat' ? 'A cat' : 'A pet'} entering the United States`, value: dog ? 'CDC first, then APHIS' : 'APHIS and your state',
      example, sub: dog ? 'CDC is the primary authority for dogs: every dog needs a CDC Dog Import Form receipt' : 'No CDC form: APHIS publishes the import page for this animal, and the destination state may add rules',
      rows: [['Lead agency', dog ? 'CDC' : 'USDA APHIS'], ['CDC Dog Import Form', dog ? 'needed, no fee listed by CDC' : 'not needed'], ['Other agency', sp === 'bird' || sp === 'other' ? 'U.S. Fish and Wildlife Service, for some species' : 'none named by APHIS'], ['State rules', 'yes: the owner meets federal and state rules']],
      note: 'APHIS, Pet travel from another country to the United States, last modified March 19, 2026; CDC dog FAQ updated August 27, 2026.',
    };
  }
  const e = ENDORSE[d], endorse = e ? e.endorse : null, tests = e?.tests ?? 0;
  const catMx = d === 'mexico' && sp !== 'dog';
  const fee = endorse ? endorsementFee(tests, pets) : 0;
  return {
    label: `${sp === 'dog' ? 'Dog' : sp === 'cat' ? 'Cat' : 'Pet'} from the US to ${destName}`,
    value: endorse === null ? 'Check the APHIS country page' : endorse ? `USDA stamp: ${usd(fee)}` : catMx ? 'No certificate' : 'No USDA endorsement',
    example,
    sub: endorse === null ? 'APHIS keeps one page per country; a vet approved by USDA for travel papers reads it with you' : endorse ? `the USDA fee to stamp (“endorse”) the health certificate your vet signs${tests ? `, with ${tests} laboratory test on it` : ''}; the vet’s own bill comes on top` : catMx ? 'Mexico has asked no health certificate for cats since 2019' : d === 'mexico' ? 'a screwworm inspection certificate signed by a USDA-approved vet within 5 days of entry' : 'a rabies certificate from a licensed vet is enough',
    rows: [['First step', 'a USDA-accredited veterinarian, as soon as the trip is decided'], ['How USDA stamps it', endorse ? 'your vet sends it to USDA online, or you mail it; not both' : 'no USDA stamp needed'], ['Paper that travels', 'the original signed or endorsed paperwork'], ['Coming back', sp === 'dog' ? 'CDC Dog Import Form receipt' : 'no CDC form for this animal']],
    note: 'APHIS pet travel process overview and fee schedule, both updated June 18, 2026. No USDA fee for a service dog under the ADA (Americans with Disabilities Act).',
  };
}

type Arg = Record<string, number | string>;
const SPECS: Record<string, (arg?: Arg) => ToolSpec> = {
  /** Home: fee of one pet in the cabin, every airline side by side. */
  all: (arg = {}) => ({
    ...spec([AIR(), ROUTE(), LEGS()], arg, fee),
    profiles: [
      { label: 'Cheapest within the US', set: { region: 'us', airline: cheapestOn('us') } },
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
    { kind: 'select', id: 'air', label: 'Your airline', def: 'any', options: [{ value: 'any', label: 'Any of the five airlines' }, ...AIRLINE_OPTIONS] },
  ], arg, carrier),
  cost: (arg = {}) => spec([AIR(), ROUTE(), LEGS(), { kind: 'select', id: 'dest', label: 'Entry rules of the destination', def: 'none', options: DEST_OPTIONS, wide: true }, { id: 'vet', label: 'Your vet’s price (exam and certificate)', def: 0, unit: '$', max: 5000, help: 'Ask your vet: we publish no vet price', adv: true, short: 'vet' }], arg, cost),
  cdc: (arg = {}) => spec([
    { kind: 'select', id: 'country', label: 'Countries the dog was in during the last 6 months', def: 'low', options: HR_OPTIONS, wide: true, help: `High risk for dog rabies: the CDC lists ${HIGH_RISK.length} countries (Brazil, Dominican Republic, Turkey…). Pick one if the dog was in any of them` },
    { kind: 'select', id: 'vax', label: 'Rabies vaccine given', def: 'us', options: [{ value: 'us', label: 'In the United States' }, { value: 'abroad', label: 'Abroad' }, { value: 'none', label: 'Not vaccinated' }] },
    { id: 'age', label: 'Age of the dog', def: 36, unit: 'months', max: 300 },
  ], arg, cdc),
  form: (arg = {}) => spec([
    { kind: 'choice', id: 'risk', label: 'Country the dog comes from', def: 'low', options: [{ value: 'low', label: 'Low-risk' }, { value: 'high', label: 'High-risk' }], help: 'Risk of dog rabies, by the CDC list: Canada, Mexico and the EU are low-risk; Brazil, Dominican Republic, Turkey are high-risk' },
    { id: 'months', label: 'Already have a receipt? Months since it was issued', def: 2, unit: 'months', max: 24 },
  ], arg, form),
  endorse: (arg = {}) => spec([
    { id: 'tests', label: 'Laboratory tests on the certificate', def: 0, max: 20, help: 'A rabies titer is one test; vaccines do not count' },
    { id: 'pets', label: 'Pets on the certificate', def: 1, max: 20 },
  ], arg, endorse),
  common: (arg = {}) => spec([
    { kind: 'select', id: 'a1', label: 'Airline out', def: 'delta', options: AIRLINE_OPTIONS },
    { kind: 'select', id: 'a2', label: 'Airline back or on a connection', def: 'alaska', options: LEG_OPTIONS },
    { kind: 'choice', id: 'type', label: 'Carrier type', def: 'soft', options: [{ value: 'soft', label: 'Soft-sided' }, { value: 'hard', label: 'Hard-sided' }], wide: true },
  ], arg, common),
  kennel: (arg = {}) => spec([
    { id: 'a', label: 'A: nose to the root of the tail', def: 14, unit: 'in', max: 60, decimals: 1 },
    { id: 'b', label: 'B: floor to the elbow', def: 5, unit: 'in', max: 30, decimals: 1 },
    { id: 'c', label: 'C: width at the shoulders', def: 5, unit: 'in', max: 30, decimals: 1 },
    { id: 'd', label: 'D: standing height, top of head or ears', def: 10, unit: 'in', max: 50, decimals: 1 },
    { kind: 'choice', id: 'snub', label: 'Snub-nosed breed (pug, bulldog…)', def: 'no', options: [{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }] },
    { id: 'bed', label: 'Bedding thickness', def: 0, unit: 'in', max: 5, decimals: 1, adv: true, short: 'bedding' },
  ], arg, kennel),
  aphis: (arg = {}) => spec([
    { kind: 'choice', id: 'dir', label: 'Direction', def: 'out', options: [{ value: 'out', label: 'Leaving the US' }, { value: 'in', label: 'Entering the US' }], wide: true },
    { kind: 'select', id: 'species', label: 'Animal', def: 'dog', options: [{ value: 'dog', label: 'Dog' }, { value: 'cat', label: 'Cat' }, { value: 'bird', label: 'Pet bird' }, { value: 'other', label: 'Ferret, rabbit, rodent, reptile' }, { value: 'poultry', label: 'Chicken, duck or other poultry' }] },
    { kind: 'select', id: 'dest', label: 'Country you fly to', def: 'eu', options: APHIS_DEST },
    { id: 'pets', label: 'Animals on the trip', def: 1, max: 20 },
  ], arg, aphis),
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
