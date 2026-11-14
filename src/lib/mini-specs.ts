/** Mini-simulateurs du site (RECETTE §9.3), au format de la trame (lib/mini-types.ts).
 *  flypetrules.com : chaque mini reprend un calculateur déclaratif de lib/tool-specs.ts (même moteur, mêmes chiffres).
 *  Les listes (compagnie, trajet, destination) ont des valeurs en mots ; la trame veut des nombres : chaque option
 *  devient son rang (« 0 », « 1 »…) et `back` rend la valeur en mots au moteur. */
import type { MiniInput, MiniSpec } from './mini-types';
import { getTool, TOOL_KINDS } from './tool-specs';
import type { Input, V } from './tool-types';

type Opt = { value: string; label: string };
const opts = (i: Input): Opt[] | undefined => (i.kind === 'choice' || i.kind === 'select' ? i.options : undefined);
const rank = (i: Input, x: number | string) => { const o = opts(i)!; const k = o.findIndex((y) => y.value === String(x)); return k < 0 ? 0 : k; };

function adapt(kind: string): MiniSpec {
  const t = getTool(kind);
  const back = (v: Record<string, number>): V => Object.fromEntries(t.inputs.map((i) => {
    const o = opts(i); const x = v[i.id] ?? (o ? rank(i, i.def) : Number(i.def));
    return [i.id, o ? (o[x]?.value ?? String(i.def)) : x];
  }));
  const inputs: MiniInput[] = t.inputs.map((i) => {
    const o = opts(i);
    return o
      ? { id: i.id, label: i.label, def: rank(i, i.def), help: i.help, avance: i.adv, options: o.map((y, k) => ({ value: String(k), label: y.label })) }
      : { id: i.id, label: i.label, def: Number(i.def), unit: (i as { unit?: string }).unit, max: (i as { max?: number }).max, decimals: (i as { decimals?: number }).decimals, help: i.help, avance: i.adv };
  });
  return {
    title: '', cta: 'Open the full calculator', inputs,
    exemple: (v) => t.run(back(v)).example ?? '',
    run: (v) => {
      // Five rows, not four: the carrier checker lists the five airlines (naive testers of 2026-11-14: Frontier was cut off).
      const o = t.run(back(v));
      return { head: [o.label, o.value], alert: o.sub, rows: o.rows.slice(0, 5).map(([l, x]) => [l, x] as [string, string]) };
    },
  };
}

const SPECS: Record<string, (lang: string) => MiniSpec> = Object.fromEntries(TOOL_KINDS.map((k) => [k, () => adapt(k)]));

export function getSpec(kind: string, lang: string): MiniSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`mini-specs : aucun mini-simulateur « ${kind} » — à décrire dans src/lib/mini-specs.ts`);
  return f(lang);
}

/** Props of a mini placed in a page by h.mini(kind, { t, p, d, c }): `p` = fields the reader changes, the other
 *  fields are set by the page and put in the editable "More about your case" fold (`replies`); `d` = the page's values, in words, turned into ranks. */
export function miniProps(kind: string, arg?: { t?: string; p?: string[]; d?: Record<string, number | string>; c?: string }) {
  const t = getTool(kind), a = arg ?? {};
  const shown = a.p ?? [t.inputs[0].id];
  const defaults: Record<string, number> = {};
  for (const i of t.inputs) if (a.d?.[i.id] !== undefined) defaults[i.id] = opts(i) ? rank(i, a.d[i.id]) : Number(a.d[i.id]);
  // Naive testers of 2026-11-14, 2nd round: "Set by this page: Age of the dog: 36 months" read as a frozen field under a
  // line saying "change any figure". The fields the page sets now sit in the "More about your case" fold, editable.
  return { title: a.t, defaults, locked: [] as string[], replies: t.inputs.filter((i) => !shown.includes(i.id) && !i.adv).map((i) => i.id), cta: a.c };
}
