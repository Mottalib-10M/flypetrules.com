import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';
import { commonCarrier } from '../../lib/engine/pets';

const AA = K.A('american'), AS = K.A('alaska'), F9 = K.A('frontier'), DL = K.A('delta'), WN = K.A('southwest');
const ALL3 = commonCarrier(['american', 'alaska', 'frontier'], true).box!;
const HARD2 = commonCarrier(['american', 'frontier'], false).box!;

export default definePage({
  id: 'pet-carrier', group: 'airlines', order: 0, slug: 'pet-carrier',
  nav: 'One carrier for two airlines', card: 'Pick the airlines of your trip: the largest pet carrier that every one of them accepts in the cabin.',
  title: 'Pet Carrier 2026: The Airline-Approved Size for Every Leg',
  description: `Pet carrier sizes approved by Delta, American, Southwest, Alaska and Frontier in 2026: the largest soft or hard carrier that every airline of your trip accepts.`,
  h1: 'Pet carrier: the airline-approved size for every leg of your trip',
  intro: 'Pet carrier sizing for a trip on one or two airlines: pick them and the carrier type, and the calculator gives the largest carrier that meets all their published cabin limits.',
  resume: `A pet carrier is “airline approved” only in the sense that it meets the limit an airline publishes, and no US airline certifies a brand or a model. The label on a box in a store is a seller’s claim. What counts is the outside size of the carrier against the limit of each airline you fly, read on November 13, 2026. American allows a soft carrier of ${K.in(AA.carrier!.soft!)}, a hard one of ${K.in(AA.carrier!.hard!)} on its own jets and ${K.in(AA.carrier!.hardRegional!)} on regional jets, and ${AA.maxLb} pounds with the pet. Frontier allows ${K.in(F9.carrier!.soft!)} soft and ${K.in(F9.carrier!.hard!)} hard. Alaska accepts soft carriers only, up to ${K.in(AS.carrier!.soft!)}. Delta publishes no maximum and recommends ${K.in(DL.carrierRec!)}; Southwest writes only that the carrier must fit under the seat. A trip on two airlines needs a carrier within both limits at once, so a soft carrier of ${K.in(ALL3)} is the one size that meets every published soft limit of the five.`,
  faqs: [
    { q: 'Is there an official list of airline approved pet carriers?', a: 'No. None of the five airlines read here approves a brand or a model. Each publishes a size, or only the rule that the carrier fits under the seat in front, plus the conditions on ventilation and leaks. A carrier sold as airline approved is approved by its maker, and the agent at the counter judges it against the airline’s own rule.', open: true },
    { q: 'Which pet carrier fits on every US airline?', a: `Among the published limits, a soft carrier no larger than ${K.in(ALL3)} meets American, Frontier and Alaska, and also sits within the size Delta recommends. Southwest publishes no size. The carrier must still hold your pet standing and turning, so for a larger pet the choice of airline matters more than the carrier.` },
    { q: 'Does the pet carrier count as my carry-on bag?', a: 'In practice it takes the place of one of your cabin items, since it rides under the seat in front where a personal item would go. Delta and American then let you bring one more item, a personal item or a carry-on bag but not both, and Frontier applies the same rule with its usual carry-on price. Read your fare rules before packing.' },
    { q: 'Should I buy a soft or a hard pet carrier?', a: `Soft for the cabin on most trips. Alaska takes only soft carriers on board, and the hard limits are lower: ${K.in(AA.carrier!.hardRegional!)} on American regional jets and ${K.in(F9.carrier!.hard!)} on Frontier. A hard carrier is needed when the pet travels in a baggage compartment, which only Alaska still offers among the five.` },
  ],
  body: (h) => `
<h2>Pet carrier limits of the five airlines</h2>
<p>Each figure below was read on the airline’s own pet page or in its contract of carriage on November 13, 2026. Sizes are the outside of the carrier, in inches; the calculator above compares them side by side, the longest with the longest, so the order of the three numbers does not matter.</p>
${h.table(['Airline', 'Soft pet carrier', 'Hard pet carrier', 'Weight with the pet'], [
    [DL.name, `no maximum; ${K.in(DL.carrierRec!)} recommended`, 'no maximum; fits under the seat', 'none published'],
    [AA.name, K.in(AA.carrier!.soft!), `${K.in(AA.carrier!.hard!)}; ${K.in(AA.carrier!.hardRegional!)} on regional jets`, `${AA.maxLb} lb`],
    [WN.name, 'fits under the seat', 'fits under the seat', 'none published'],
    [AS.name, K.in(AS.carrier!.soft!), 'not accepted in the cabin', 'none published'],
    [F9.name, K.in(F9.carrier!.soft!), K.in(F9.carrier!.hard!), 'none published'],
  ], 'Pet carrier limits for the cabin, read November 13, 2026', ['l', 'l', 'l', 'l'])}
<p>Sources: ${h.src('delta_pets', 'Delta pet travel')}, ${h.src('aa_pets', 'American, traveling with pets')}, ${h.src('wn_coc', 'Southwest contract of carriage')}, ${h.src('as_coc', 'Alaska contract of carriage, Rule 15')}, ${h.src('f9_faq', 'Frontier, pets onboard')}. United, JetBlue and Allegiant refused our reading or did not answer, so they are left out rather than copied from a third party.</p>
<h2>One pet carrier for a trip on two airlines</h2>
<p>A trip out on one airline and back on another, or a connection onto a partner, is where a carrier bought for one airline fails. The size that works is the smallest of the limits on each side. Out on Delta and back on Alaska, the soft carrier must stay within Alaska’s ${K.in(AS.carrier!.soft!)}, since Delta adds no maximum of its own. On American and Frontier with a hard carrier, it is ${K.in(HARD2)}, because American’s regional jets set the lowest height and Frontier the lowest on the other sides.</p>
${h.mini('common', { t: 'Another pair of airlines', p: ['a1', 'a2'], d: { a1: 'american', a2: 'frontier', type: 'soft' } })}
<h2>What makes a pet carrier acceptable besides its size</h2>
<p>The airlines write the same few conditions in their own words. The carrier must be leak-proof and well ventilated: Delta asks for ventilation on three sides within the US and on four sides on international flights, and American for mesh on three sides or more. It must close securely, with no part of the pet sticking out; Alaska writes that no body part may protrude. And the pet must be able to stand, turn around and lie down inside. A carrier within the size limit but too small for the pet is refused like an oversized one, which is why the ${h.a('dog-carrier', 'dog carrier page')} starts from the dog’s measurements.</p>
<h2>Soft, hard, backpack or on wheels</h2>
<p>For the cabin, soft-sided carriers win on every airline that states a preference. American writes that a soft, collapsible carrier may be a little larger than its hard maximum if it slides under the seat without being crushed. Backpack and wheeled carriers are judged like any other: by outside size, frame and wheels included, and by whether they fit under the seat in front. Wheels and a rigid frame add height, the side that fails most often: Alaska’s limit is ${K.num(AS.carrier!.soft![2])} inches high and Frontier’s hard limit ${K.num(F9.carrier!.hard![2])}.</p>
<h2>Weight</h2>
<p>American is the only one of the five airlines that publishes a weight: ${AA.maxLb} pounds for the pet and the carrier together, weighed at check-in. Weigh the empty carrier at home: every pound of it comes off what is left for the pet. The other four publish no weight but still need the carrier under the seat for the whole flight, so a heavy pet in a small carrier is a problem of comfort before it is one of rules.</p>
<h2>Before you buy a pet carrier</h2>
<p>Choose the seat with the carrier in mind: all five airlines keep pets out of exit rows, and Delta, American and Alaska also out of bulkhead rows with no seat in front, while regional jets leave less room under every seat. Then measure the pet, buy the carrier, and check it once more against the airline in the ${h.a('dog-carrier-size-airline', 'carrier size checker')}. The fee for the pet itself is in the ${h.a('airline-pet-policy', 'airline comparison')}.</p>
`,
  tool: 'common',
  related: ['dog-carrier', 'dog-carrier-size-airline', 'airline-pet-policy', 'flying-with-a-cat'],
  sources: ['delta_pets', 'aa_pets', 'wn_coc', 'as_coc', 'f9_faq'],
});
