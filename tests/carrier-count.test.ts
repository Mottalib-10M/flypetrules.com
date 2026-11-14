/**
 * Carrier checker: the big number says exactly what the list under it shows (naive testers of 2026-11-14, 2nd round:
 * "2 of 5 airlines" above a list where only Alaska was "Too big", Delta "fits" and Southwest had no published limit).
 *
 * For many carriers (sizes, weights, soft and hard) and every focus (any airline, or one airline):
 * - the count "Fits on N of 5 airlines" (headline, or the line under it when one airline is picked) equals the number
 *   of lines of the list that start with "Fits";
 * - every airline whose line starts with "No" is named in the line under the result, and no accepted airline is;
 * - with one airline picked, the headline agrees with that airline's line;
 * - the mini-simulator shows the same five lines as the full calculator.
 */
import { describe, expect, it } from 'vitest';
import { getTool, CARRIER_ACCEPTED } from '../src/lib/tool-specs';
import { getSpec } from '../src/lib/mini-specs';
import { AIRLINE_IDS, AIRLINES } from '../src/lib/engine/pets';

const t = getTool('carrier');
const SIZES: number[][] = [[17, 11, 10], [17, 11, 9], [18, 11, 11], [18, 14, 11], [19, 13, 9], [16, 10, 8], [22, 15, 12], [17, 12, 9.5], [30, 20, 15]];
const LBS = [8, 15, 20, 25];
const TYPES = ['soft', 'hard'];
const FOCUS = ['any', ...AIRLINE_IDS];

function countIn(text: string): number | null {
  const all = /Fits on all (\d+) airlines/.exec(text);
  if (all) return Number(all[1]);
  if (/Fits on none of the \d+ airlines/.test(text)) return 0;
  const m = /Fits on (\d+) of (\d+) airlines/.exec(text);
  return m ? Number(m[1]) : null;
}

describe('carrier checker: headline count = accepted lines of the list', () => {
  for (const [l, w, h] of SIZES) for (const lb of LBS) for (const type of TYPES) for (const air of FOCUS) {
    const v = { l, w, h, lb, type, air };
    it(`${l} x ${w} x ${h} in, ${lb} lb, ${type}, ${air}`, () => {
      const o = t.run(v);
      const ok = o.rows.filter(([, x]) => CARRIER_ACCEPTED.test(x));
      const no = o.rows.filter(([, x]) => !CARRIER_ACCEPTED.test(x));
      for (const [, x] of no) expect(x).toMatch(/^No\b/);
      expect(o.rows).toHaveLength(AIRLINE_IDS.length);
      const counted = countIn(air === 'any' ? o.value : o.sub ?? '');
      expect(counted, `${o.value} / ${o.sub}`).toBe(ok.length);
      const sub = o.sub ?? '';
      for (const [name] of no) expect(sub).toContain(name);
      if (air === 'any') for (const [name] of ok) expect(sub.split('.')[0].includes(`for ${name}`)).toBe(false);
      if (air !== 'any') {
        const line = o.rows.find(([name]) => name === AIRLINES[air].name)![1];
        if (CARRIER_ACCEPTED.test(line)) expect(o.value).toMatch(/^(Fits on|No size limit on) /);
        else expect(o.value).toMatch(new RegExp(`for ${AIRLINES[air].name}$`));
      }
    });
  }

  it('the case of the testers: 17 x 11 x 10 in soft, 15 lb fits on 4 of 5, too big for Alaska only', () => {
    const o = t.run({ l: 17, w: 11, h: 10, lb: 15, type: 'soft', air: 'any' });
    expect(o.value).toBe('Fits on 4 of 5 airlines');
    expect(o.sub).toMatch(/^Too big for Alaska only\./);
  });

  it('the mini shows the same five lines and the same count', () => {
    const spec = getSpec('carrier', 'en');
    const ranks = Object.fromEntries(spec.inputs.map((i) => [i.id, i.def]));
    const out = spec.run(ranks);
    expect(out.rows).toHaveLength(AIRLINE_IDS.length);
    expect(countIn(out.head[1])).toBe(out.rows.filter(([, x]) => CARRIER_ACCEPTED.test(x)).length);
  });
});
