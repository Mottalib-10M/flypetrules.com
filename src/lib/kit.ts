/**
 * Writing kit: every figure written in a page comes from here, never typed by hand.
 *   K.A(id)                 airline rules { name, cabin fees by route, carrier limits, … } (params-2026.json)
 *   K.fee(id, region)       in-cabin fee one way, or null when not allowed or not published
 *   K.CDC, K.HR, K.isHR     CDC rules and the 111 high-risk countries
 *   K.D                     destination rules (APHIS), K.F fees of USDA endorsement, K.endorse(tests, pets)
 *   K.EX                    the one example case of the whole site
 *   formats                 K.usd, K.num, K.day, K.in
 */
import P from '../data/params-2026.json';
import { usd, longDate, inches, EX } from './tool-specs';
import { formatNumber } from './format';
import * as E from './engine/pets';

export const KIT = {
  P, EX, CDC: E.CDC, HR: E.HIGH_RISK, isHR: E.isHighRisk, D: E.DEST, F: P.aphisFees, NOT_READ: E.NOT_READ, IDS: E.AIRLINE_IDS,
  A: (id: string) => { const a = E.AIRLINES[id]; if (!a) throw new Error(`no airline ${id}`); return a; },
  fee: (id: string, region: string) => { const c = E.cabinFee(id, region); return c.status === 'yes' ? c.fee : null; },
  feeOr: (id: string, region: string) => { const c = E.cabinFee(id, region); if (c.status !== 'yes') throw new Error(`no fee ${id} ${region}`); return c.fee; },
  endorse: E.endorsementFee, timeline: E.timeline, region: E.regionLabel,
  usd, num: (x: number) => formatNumber(x, 0), day: longDate, in: inches,
};
export type Kit = typeof KIT;
