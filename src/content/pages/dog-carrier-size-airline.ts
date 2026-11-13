import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const AA = K.A('american'), AS = K.A('alaska'), F9 = K.A('frontier'), DL = K.A('delta');

export default definePage({
  id: 'dog-carrier-size-airline', group: 'airlines', order: 7, slug: 'dog-carrier-size-airline',
  nav: 'Dog carrier size by airline', card: 'Enter your carrier’s three sides and weight: which airlines’ published limits it meets.',
  title: 'Airline Dog Carrier Size 2026: Will Your Carrier Fit Here?',
  description: `Dog carrier size by airline in 2026: the limits of Delta, American, Southwest, Alaska and Frontier, soft and hard, the ${AA.maxLb} lb weight rule, checked in one click.`,
  h1: 'Dog carrier size by airline: will yours fit under the seat?',
  intro: 'Dog carrier size by airline for in-cabin pets: enter the length, width, height and weight of your carrier with the pet inside.',
  resume: `Dog carrier size by airline is the rule that sends the most pets home from the gate, because the limit is the space under the seat in front, and that space differs by aircraft. Of the five airlines read on November 13, 2026, three publish a maximum. American allows ${K.in(AA.carrier!.soft!)} for a soft carrier on every flight, ${K.in(AA.carrier!.hard!)} for a hard carrier on its own jets and ${K.in(AA.carrier!.hardRegional!)} on American Eagle regional jets, and ${AA.maxLb} pounds for pet and carrier together. Frontier allows ${K.in(F9.carrier!.soft!)} soft and ${K.in(F9.carrier!.hard!)} hard. Alaska accepts only soft carriers, at most ${K.in(AS.carrier!.soft!)}. Delta publishes no maximum and recommends ${K.in(DL.carrierRec!)} soft; Southwest’s contract gives none. A soft carrier of ${K.in([17, 11, 9.5])} therefore passes every published limit, and one of ${K.in(DL.carrierRec!)} passes all but Alaska. Whatever the size, the pet must have room to move inside.`,
  faqs: [
    { q: 'What carrier size fits every US airline?', a: `Among the published limits read here, a soft carrier no larger than ${K.in(AS.carrier!.soft!)} meets them all, since Alaska’s limit is the smallest and the others are larger. It must still hold your pet standing and turning around; a pet too big for it is too big for the cabin of that airline.`, open: true },
    { q: 'Do airlines measure the pet carrier at the gate?', a: 'They can. American weighs the pet and the carrier at check-in against its 20-pound limit, and every airline can refuse a carrier that does not fit under the seat in front. Bring the carrier to the counter with the pet already inside, so the agent sees it as it will fly.' },
    { q: 'Is a soft or a hard carrier better for the cabin?', a: 'Soft, for most trips. American, Delta and Frontier recommend it, Alaska accepts nothing else in the cabin, and a soft carrier can give a little to slide under a seat. Hard carriers are needed in a baggage compartment, where Alaska inspects them against live animal rules.' },
  ],
  body: (h) => `
<h2>Dog carrier size by airline: the published limits</h2>
<p>The table gives what each airline writes, read on its own page or contract on November 13, 2026. The checker above compares your carrier with each limit, side by side from the largest to the smallest, so the order in which you enter the sides does not change the result.</p>
${h.table(['Airline', 'Soft carrier', 'Hard carrier', 'Weight'], [
    [DL.name, `no maximum; ${K.in(DL.carrierRec!)} recommended`, 'fits under the seat', 'none published'],
    [AA.name, K.in(AA.carrier!.soft!), `${K.in(AA.carrier!.hard!)} (mainline), ${K.in(AA.carrier!.hardRegional!)} (Eagle)`, `${AA.maxLb} lb with the carrier`],
    [K.A('southwest').name, 'fits under the seat', 'fits under the seat', 'none published'],
    [AS.name, K.in(AS.carrier!.soft!), 'not in the cabin', 'none published'],
    [F9.name, K.in(F9.carrier!.soft!), K.in(F9.carrier!.hard!), 'none published'],
  ], 'Published carrier limits for pets in the cabin', ['l', 'l', 'l', 'l'])}
<p>Sources: ${h.src('delta_pets', 'Delta')}, ${h.src('aa_pets', 'American')}, ${h.src('wn_coc', 'Southwest contract of carriage')}, ${h.src('as_coc', 'Alaska contract of carriage')}, ${h.src('f9_faq', 'Frontier')}.</p>
<h2>How to measure a carrier</h2>
<p>Measure the outside of the carrier, not the inside, with any pockets, frames and wheels included, and measure the height with the top zipped as it will travel. A soft carrier with a sagging top is still measured at its full height. Then weigh yourself holding the carrier with the pet inside and subtract your own weight: that is the figure American checks.</p>
<p>The height is where most carriers fail. Alaska allows 9.5 inches and Frontier’s hard carrier 8, against 11 on most soft limits. A dog that needs 11 inches to stand cannot fly with Alaska in the cabin.</p>
${h.mini('carrier', { t: 'Test a hard carrier', p: ['type', 'h'], d: { type: 'hard', l: 18, w: 13, h: 9 } })}
<h2>The room your pet needs inside</h2>
<p>Delta, Southwest and Frontier write the same rule in their own words: the pet must be able to move around, stand, turn and lie down naturally inside. Delta adds that it must not touch or stick out from the sides, and Alaska that no body part may protrude. A carrier within the size limit but too small for the pet is refused like an oversized one. Size the carrier on the pet first, then check it against the airline.</p>
<h2>What the limit does not tell you</h2>
<p>Under-seat space varies by aircraft and by seat. American lists the seats where a carrier cannot go: bulkheads, exit rows and certain First and Business seats. Delta tells passengers to ask Reservations for the space of their flight. A published maximum is the airline’s promise for its whole fleet; a smaller carrier is safer when a trip mixes regional jets and larger aircraft.</p>
<p>Once the carrier fits, the ${h.a('airline-pet-policy', 'airline comparison')} gives the fee of each airline on your route.</p>
<h2>Soft or hard</h2>
<p>Every airline that states a preference prefers soft. American writes that a soft, collapsible carrier may be slightly larger than its hard maximum, as long as it slides under the seat without being crushed, and asks for a padded, water-repellent carrier with mesh ventilation on three sides or more. Delta asks for a leak-proof soft kennel ventilated on three sides within the US and on four sides on international flights. Alaska accepts nothing but soft in the cabin. A hard carrier still makes sense for a nervous cat on Frontier, which publishes a hard size, but it leaves no margin.</p>
<h2>Two pets in one carrier</h2>
<p>The rules differ more than the sizes. Southwest and Alaska accept two animals of the same species in one carrier, for one fee, and Alaska adds that they must be of similar size. Delta accepts two pets of the same breed and size aged 8 weeks to 6 months in one kennel, charged as one, and a mother cat or dog with her unweaned litter. Frontier allows one adult dog or cat per container. A larger carrier for two pets must still meet the size limit, which is why two adult cats rarely share one.</p>
`,
  tool: 'carrier',
  related: ['airline-pet-policy', 'american-airlines-pet-policy', 'alaska-airlines-pet-policy', 'flying-with-a-dog'],
  sources: ['delta_pets', 'aa_pets', 'wn_coc', 'as_coc', 'f9_faq'],
});
