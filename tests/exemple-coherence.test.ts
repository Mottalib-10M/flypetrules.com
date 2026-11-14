/**
 * The yellow "Example: …" line and the pre-filled values always describe the same case (naive testers of 2026-11-14:
 * "17 x 11 x 10" written above a height of 9, "European Union country" above Japan, "low-risk country" above Brazil).
 *
 * For every calculator at the top of a page (tool + toolArg) and every mini-simulator placed in a page (h.mini, with
 * the page's own values), with the values the reader sees on arrival:
 * - every number the reader can see in a field is written in the example (0 aside, which is said in words);
 * - any change of one field that changes the result also changes the example (the example never stays behind);
 * - the three cases the testers reported read as they should.
 */
import { describe, expect, it } from 'vitest';
import { PAGES } from '../src/lib/pages';
import { helpers } from '../src/lib/helpers';
import { HOME } from '../src/content/home';
import { getTool, TOOL_KINDS } from '../src/lib/tool-specs';
import { getSpec, miniProps } from '../src/lib/mini-specs';
import { formatNumber } from '../src/lib/format';
import type { V } from '../src/lib/tool-types';

const h = helpers();
interface Case { where: string; kind: string; v: V }
const cases: Case[] = [];

/** A mini as the page shows it: its spec values in words, from the ranks MiniSim holds. */
function miniCase(where: string, kind: string, arg?: Record<string, unknown>) {
  const props = miniProps(kind, arg as never);
  const spec = getSpec(kind, 'en');
  const t = getTool(kind);
  const v: V = {};
  for (const i of t.inputs) {
    const m = spec.inputs.find((x) => x.id === i.id)!;
    const r = props.defaults[i.id] ?? m.def;
    v[i.id] = i.kind === 'choice' || i.kind === 'select' ? i.options[r].value : r;
  }
  // The mini's own example function must say the same as the tool's example for these values.
  const ranks = Object.fromEntries(spec.inputs.map((m) => [m.id, props.defaults[m.id] ?? m.def]));
  const viaMini = typeof spec.exemple === 'function' ? spec.exemple(ranks) : spec.exemple;
  expect(viaMini, where).toBe(t.run(v).example);
  cases.push({ where, kind, v });
}
function scan(where: string, html: string) {
  for (const m of html.matchAll(/<!--mini:([A-Za-z0-9_]+)(?:\|([A-Za-z0-9+/=]+))?-->/g)) {
    miniCase(`${where} mini ${m[1]}`, m[1], m[2] ? JSON.parse(Buffer.from(m[2], 'base64').toString('utf8')) : undefined);
  }
}
for (const p of PAGES) {
  const t = getTool(p.tool, p.toolArg);
  cases.push({ where: `${p.id} tool`, kind: p.tool, v: Object.fromEntries(t.inputs.map((i) => [i.id, i.def])) });
  scan(p.id, p.body(h));
}
{
  const t = getTool('all');
  cases.push({ where: 'home tool', kind: 'all', v: Object.fromEntries(t.inputs.map((i) => [i.id, i.def])) });
  scan('home start', HOME.start(h));
  scan('home guide', HOME.guide(h));
  for (const f of HOME.folds) scan(`home fold ${f.id}`, f.html(h));
}
for (const k of TOOL_KINDS) { const t = getTool(k); cases.push({ where: `${k} defaults`, kind: k, v: Object.fromEntries(t.inputs.map((i) => [i.id, i.def])) }); }

const result = (kind: string, v: V) => { const o = getTool(kind).run(v); return JSON.stringify([o.label, o.value, o.sub, o.rows]); };

describe('example line = values on screen', () => {
  it('finds the calculators and minis of the site', () => {
    expect(cases.filter((c) => c.where.includes(' mini ')).length).toBeGreaterThan(30);
  });
  for (const c of cases) {
    it(c.where, () => {
      const t = getTool(c.kind);
      const ex = t.run(c.v).example ?? '';
      expect(ex, c.where).toMatch(/^Example: /);
      for (const i of t.inputs) {
        if (i.kind === 'choice' || i.kind === 'select') {
          for (const o of i.options) {
            if (o.value === String(c.v[i.id])) continue;
            const w = { ...c.v, [i.id]: o.value };
            if (result(c.kind, w) !== result(c.kind, c.v)) expect(t.run(w).example, `${c.where}: ${i.id}=${o.value}`).not.toBe(ex);
          }
        } else {
          const x = Number(c.v[i.id]);
          if (x !== 0) expect(ex, `${c.where}: ${i.id}`).toContain(formatNumber(x, Number.isInteger(x) ? 0 : 1));
          for (const y of [x + 1, x * 2 + 3]) {
            const w = { ...c.v, [i.id]: y };
            if (result(c.kind, w) !== result(c.kind, c.v)) expect(t.run(w).example, `${c.where}: ${i.id}=${y}`).not.toBe(ex);
          }
        }
      }
    });
  }
  it('the three cases reported by the testers', () => {
    const ex = (where: string) => { const c = cases.find((x) => x.where === where)!; return getTool(c.kind).run(c.v).example ?? ''; };
    expect(ex('alaska-airlines-pet-policy mini carrier')).toContain('17 x 11 x 9 in');
    expect(ex('aphis-pet-travel mini aphis')).toContain('Japan');
    expect(ex('aphis-pet-travel mini aphis')).not.toContain('European Union');
    expect(ex('cdc-dog-import-rules mini cdc')).toContain('Brazil');
    expect(ex('cdc-dog-import-rules mini cdc')).not.toContain('low-risk');
  });
});
