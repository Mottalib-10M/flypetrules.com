/**
 * Pure rules of the site, read from src/data/params-2026.json (CDC, USDA APHIS, airline pages and contracts of carriage,
 * read on 2026-11-13). No value is typed here: a rule that was not read at its source returns "unknown", never a guess.
 */
import P from '../../data/params-2026.json';

export type Region = 'us' | 'hawaii' | 'hawaiiInter' | 'canada' | 'mexico' | 'caribbean' | 'europe' | 'uk' | 'japan' | 'southamerica';
export const REGIONS: Array<{ value: Region; label: string }> = [
  { value: 'us', label: 'Within the mainland US' },
  { value: 'hawaii', label: 'Mainland US to or from Hawaii' },
  { value: 'hawaiiInter', label: 'Between the Hawaiian islands' },
  { value: 'canada', label: 'US to or from Canada' },
  { value: 'mexico', label: 'US to or from Mexico' },
  { value: 'caribbean', label: 'Caribbean or Central America' },
  { value: 'europe', label: 'Europe (across the Atlantic)' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'japan', label: 'Japan' },
  { value: 'southamerica', label: 'South America' },
];
export const regionLabel = (r: string) => REGIONS.find((x) => x.value === r)?.label ?? r;

export interface Airline {
  name: string; cabin: Record<string, number>; cabinNo: string[]; species: string; minWeeks: number | null;
  carrier: { soft?: number[]; hard?: number[]; hardRegional?: number[] } | null; carrierRec?: number[]; softOnly?: boolean;
  maxLb: number | null; perPassenger: string; perFlight: string; noCabinTo: string[]; checked: string; checkedFee?: number;
  sources: string[]; oldFee?: number; feeDate?: string;
}
export const AIRLINES = P.airlines as unknown as Record<string, Airline>;
export const AIRLINE_IDS = Object.keys(AIRLINES);
/** United, JetBlue, Allegiant: rules we could not read, linked to their own page (United: home page, its pet page address unconfirmed). */
export const NOT_READ = P.notRead as Array<{ name: string; url: string; page: string }>;

export type CabinStatus = { status: 'yes'; fee: number } | { status: 'no' } | { status: 'unknown' };
/** In-cabin fee for one pet, one way, on one airline and one kind of route. */
export function cabinFee(airline: string, region: string): CabinStatus {
  const a = AIRLINES[airline];
  if (!a) return { status: 'unknown' };
  if (a.cabin[region] !== undefined) return { status: 'yes', fee: a.cabin[region] };
  if (a.cabinNo.includes(region)) return { status: 'no' };
  return { status: 'unknown' };
}
/** Fee for a trip: one way or round trip (each way charged), per pet. */
export const tripFee = (oneWay: number, legs: number, pets = 1) => oneWay * legs * pets;

/** Carrier check: dimensions compared largest to largest, so the order the reader types them in does not matter. */
const sorted = (d: number[]) => [...d].sort((x, y) => y - x);
export const fitsBox = (d: number[], max: number[]) => { const a = sorted(d), b = sorted(max); return a.every((x, i) => x <= b[i] + 1e-9); };
export type CarrierVerdict = 'fits' | 'too big' | 'too heavy' | 'no limit published' | 'soft only';
export function carrierCheck(airline: string, dims: number[], soft: boolean, lb: number): { verdict: CarrierVerdict; limit: string } {
  const a = AIRLINES[airline];
  const box = (m: number[]) => `${m.join(' x ')} in`;
  if (a.maxLb !== null && lb > a.maxLb) return { verdict: 'too heavy', limit: `${a.maxLb} lb with the carrier` };
  if (!a.carrier) return { verdict: 'no limit published', limit: a.carrierRec ? `fits under the seat; ${box(a.carrierRec)} soft recommended` : 'must fit under the seat' };
  if (!soft && a.softOnly) return { verdict: 'soft only', limit: `soft-sided only, ${box(a.carrier.soft!)}` };
  const m = soft ? a.carrier.soft : a.carrier.hard;
  if (!m) return { verdict: 'no limit published', limit: 'must fit under the seat' };
  return { verdict: fitsBox(dims, m) ? 'fits' : 'too big', limit: `${soft ? 'soft' : 'hard'} ${box(m)}${a.maxLb ? `, ${a.maxLb} lb` : ''}` };
}

/** USDA APHIS endorsement fee of one health certificate (vaccines are not tests). */
export function endorsementFee(tests: number, pets: number): number {
  const f = P.aphisFees, n = Math.max(1, Math.round(pets));
  if (tests <= 0) return f.none;
  if (tests <= 2) return f.t1_2 + (n - 1) * f.t1_2_extra;
  if (tests <= 6) return f.t3_6 + (n - 1) * f.t3_6_extra;
  return f.t7 + (n - 1) * f.t7_extra;
}

/** CDC: high-risk list and the documents a dog needs to enter the United States. */
export const HIGH_RISK = P.cdc.highRisk as string[];
export const CDC = P.cdc;
export const isHighRisk = (country: string) => HIGH_RISK.includes(country);
export type Pathway = 'low' | 'usvax' | 'foreignvax' | 'none';
export function cdcPathway(highRisk: boolean, vaxWhere: 'us' | 'abroad' | 'none'): Pathway {
  if (!highRisk) return 'low';
  if (vaxWhere === 'us') return 'usvax';
  if (vaxWhere === 'abroad') return 'foreignvax';
  return 'none';
}

/** Destination rules (APHIS). */
export const DEST = P.destinations;
export type Dest = 'eu' | 'tapeworm' | 'uk' | 'japan' | 'mexico' | 'canada';
export interface Step { label: string; day: number | null; note?: string }
/**
 * Steps before the flight, counted in days before departure (day 0 = the flight). `vaxOk`: a rabies vaccine already
 * given after the microchip and still valid. Returns the steps and the shortest lead time from today.
 */
export function timeline(dest: Dest, dog: boolean, vaxOk: boolean): { steps: Step[]; minDays: number } {
  const E = DEST.eu, U = DEST.uk, J = DEST.japan, T = DEST.tapeworm;
  if (dest === 'mexico') {
    if (!dog) return { steps: [{ label: 'No health certificate for a cat since 2019; inspection on arrival', day: null }], minDays: 0 };
    return { steps: [{ label: 'NWS (screwworm) inspection certificate signed by a USDA-approved vet', day: DEST.mexico.nwsDays, note: `no earlier than ${DEST.mexico.nwsDays} days before entry` }, { label: 'Inspection by SENASICA on arrival', day: 0 }], minDays: 0 };
  }
  if (dest === 'canada') return { steps: [{ label: `Rabies certificate from a licensed vet, vaccine given within ${DEST.canada.rabiesYears} years`, day: null, note: `not needed under ${DEST.canada.noVaxUnderMonths} months of age, proof of age instead` }], minDays: 0 };
  if (dest === 'japan') {
    const wait = vaxOk ? J.waitDays : J.secondAfterDays + 1 + J.waitDays;
    return { steps: [
      { label: 'ISO microchip, then two rabies vaccines more than 30 days apart', day: vaxOk ? null : wait, note: `first vaccine at ${J.firstVaxDays} days of age or older` },
      { label: `Blood sample for the titer test (at least ${J.titer} IU/ml, approved lab)`, day: J.waitDays, note: `${J.waitDays} days at least before arrival` },
      { label: 'Advance notice to Japan’s Animal Quarantine Service', day: J.notifyDays, note: `${J.notifyDays} days at least before arrival` },
      { label: 'Exam by a USDA-approved vet, Form AC, APHIS endorsement', day: 2, note: 'shortly before departure' },
    ], minDays: wait };
  }
  const R = dest === 'uk' ? U : E;
  const steps: Step[] = [];
  if (!vaxOk) steps.push({ label: 'ISO microchip, then the rabies vaccine (chip first)', day: R.waitDays, note: `wait ${R.waitDays} days after a first vaccine${dest === 'uk' ? `; pet at least ${U.minVaxWeeks} weeks old when vaccinated` : ''}` });
  steps.push({ label: 'Health certificate by a USDA-approved vet', day: R.endorseWithinDays, note: `valid ${R.certValidDays} days from signature` });
  steps.push({ label: 'USDA APHIS endorsement of the certificate', day: R.endorseWithinDays, note: `within ${R.endorseWithinDays} days before arrival` });
  if (dog && (dest === 'uk' || dest === 'tapeworm')) steps.push({ label: dest === 'uk' ? 'Tapeworm dose given and recorded by a USDA-approved vet' : 'Tapeworm dose given and recorded by a vet (APHIS names both a USDA-accredited and an EU vet)', day: dest === 'uk' ? U.tapeMaxH / 24 : T.maxDays, note: `${dest === 'uk' ? `${U.tapeMinH} to ${U.tapeMaxH} hours` : `${T.minDays} to ${T.maxDays} days`} before arrival` });
  return { steps, minDays: vaxOk ? 0 : R.waitDays };
}

/**
 * IATA Live Animals Regulations, Container Requirement 1 (params-2026.json > iata, read on iata.org on 2026-11-14):
 * the smallest INTERNAL size of a container for a dog or cat, from four measurements of the largest animal.
 * A = nose to root of tail, B = floor to elbow, C = width at the shoulders or widest point, D = standing height
 * (top of head or ear tip). Height adds the bedding, which the reader enters. Snub-nosed breeds: 10 % larger.
 */
export const IATA = P.iata;
export function iataContainer(a: number, b: number, c: number, d: number, animals = 1, snub = false, bedding = 0): number[] {
  const k = IATA.widthC[String(Math.min(3, Math.max(1, Math.round(animals)))) as '1' | '2' | '3'];
  const f = snub ? 1 + IATA.snubPct / 100 : 1;
  return [(a + b * IATA.lengthB) * f, c * k * f, (d + bedding) * f];
}

/**
 * The largest carrier that meets the published in-cabin limit of every airline of a trip: side by side, largest
 * to largest, the smallest of the limits. Airlines that publish no maximum add no constraint and are listed apart.
 */
export function commonCarrier(ids: string[], soft: boolean): { box: number[] | null; maxLb: number | null; refused: string[]; noLimit: string[] } {
  let box: number[] | null = null, maxLb: number | null = null;
  const refused: string[] = [], noLimit: string[] = [];
  for (const id of [...new Set(ids)]) {
    const a = AIRLINES[id];
    if (!a) continue;
    if (a.maxLb !== null) maxLb = maxLb === null ? a.maxLb : Math.min(maxLb, a.maxLb);
    if (!soft && a.softOnly) { refused.push(id); continue; }
    const m = a.carrier ? (soft ? a.carrier.soft : a.carrier.hardRegional ?? a.carrier.hard) : undefined;
    if (!m) { noLimit.push(id); continue; }
    const s = sorted(m);
    box = box ? sorted(box).map((x, i) => Math.min(x, s[i])) : s;
  }
  return { box, maxLb, refused, noLimit };
}
