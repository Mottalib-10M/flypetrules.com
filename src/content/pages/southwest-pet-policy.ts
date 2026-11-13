import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const A = K.A('southwest');
const US = K.feeOr('southwest', 'us'), HI = K.feeOr('southwest', 'hawaiiInter');

export default definePage({
  id: 'southwest-pet-policy', group: 'airlines', order: 3, slug: 'southwest-pet-policy',
  nav: 'Southwest pet policy', card: 'Southwest’s pet fare, two pets in one carrier, the six-carrier cap and the routes with no pets.',
  title: 'Southwest Pet Policy 2026: Pet Fare, Carrier and Limits',
  description: `Southwest pet policy in 2026: ${K.usd(US)} each way per carrier on the mainland, ${K.usd(HI)} between Hawaiian islands, two pets per carrier, six per flight, none abroad.`,
  h1: 'Southwest pet policy: the pet fare and its limits',
  intro: 'The Southwest pet policy as its contract of carriage of November 6, 2026 and its fee page stated it, with the fare for your trip above.',
  resume: `The Southwest pet policy accepts small vaccinated domestic cats and dogs, at least 8 weeks old, in a carrier that stays under the seat in front of you, with a passenger on the same flight. The pet fare is ${K.usd(US)} per carrier each way on the US mainland and ${K.usd(HI)} per carrier between the Hawaiian islands, on the fee page we read on November 13, 2026; a mainland round trip costs ${K.usd(US * 2)}. One carrier is allowed per passenger, and it may hold two animals of the same species, which makes Southwest the cheapest option for two cats or two small dogs traveling together. Southwest may cap a flight at six pet carriers and books pets only by phone, first come first served. It carries no pet in the cargo hold, accepts no pet on an international itinerary and none between the continental United States and Hawaii. If you cancel the pet reservation, the contract says the pet fare is refundable.`,
  faqs: [
    { q: 'How much is the Southwest pet fare?', a: `${K.usd(US)} per pet carrier each way on the US mainland and ${K.usd(HI)} per carrier between the Hawaiian islands, on Southwest’s optional travel charges page read on November 13, 2026. It is paid at the airport ticket counter, where the pet must be checked in before you go to the gate.`, open: true },
    { q: 'Can I bring two cats in one carrier on Southwest?', a: 'Yes. Southwest’s contract of carriage allows up to two animals of the same species in one carrier, for one pet fare, as long as both can stand and move around with ease. A dog and a cat cannot share a carrier, and each passenger may bring only one carrier.' },
    { q: 'Can I fly Southwest to Hawaii with my dog?', a: `Not from the mainland: Southwest accepts no pets on itineraries between the continental United States and Hawaii. Between the Hawaiian islands it accepts them, for ${K.usd(HI)} per carrier each way. To bring a dog to Hawaii from the mainland, another airline and Hawaii’s own entry rules apply.` },
    { q: 'Does Southwest refund the pet fare?', a: 'Its contract of carriage says the passenger is eligible for a refund of the pet fare if the pet reservation is canceled. Pet reservations are made only by phone with Southwest, so call again to cancel and ask for a confirmation.' },
  ],
  body: (h) => `
<h2>Southwest pet policy: who can fly</h2>
<p>Southwest takes only cats and dogs, small enough to ride in a carrier under the seat, vaccinated, and at least 8 weeks old (${h.src('wn_coc', 'contract of carriage, section on pets')}). The pet must travel with a ticketed passenger: an unaccompanied minor cannot bring one. Southwest also keeps the right to refuse a pet that behaves aggressively or seems unfit for the flight at the gate.</p>
<p>The pet stays in its carrier at the gate, while boarding and on board, head and tail included, and the carrier stays under the seat for the whole flight. A passenger with a pet cannot sit in an exit row or in a seat with no space under the seat ahead.</p>
${h.table(['Rule', 'Southwest'], [['Pet fare, mainland', `${K.usd(US)} per carrier each way`], ['Pet fare, between Hawaiian islands', `${K.usd(HI)} per carrier each way`], ['Carriers per passenger', A.perPassenger], ['Carriers per flight', A.perFlight], ['Minimum age', `${A.minWeeks} weeks`], ['Cargo hold', 'never'], ['International', 'no pets']], 'Southwest pet rules, contract of carriage effective November 6, 2026', ['l', 'l'])}
<h2>The carrier on Southwest</h2>
<p>Southwest’s contract gives no dimensions: the carrier must be leak-proof, ventilated, roomy enough for the pet to stand up and move around with ease, and small enough to fit under the seat in front of you. Southwest sells its own carrier at the ticket counter for $58 on the fee page we read.  Under-seat space is fixed by the seat in front, so a soft carrier that gives a little is easier to slide in.</p>
${h.mini('carrier', { t: 'Check a carrier against the published limits', p: ['l', 'w', 'h'] })}
<p>Because Southwest publishes no maximum, the checker marks it “no size published”: measure the carrier against the limits of the other airlines as a guide, then ask Southwest.</p>
<h2>Booking a pet on Southwest</h2>
<p>Pets are booked by phone only. Southwest may limit a flight to six carriers and accepts pets first come first served, so book the pet as soon as you hold your own ticket. On the day, check the pet in at the ticket counter and pay the fare there before going through security (${h.src('wn_fees', 'Southwest fee page')}). The fee page states the fare one way, per carrier.</p>
${h.mini('fee', { t: 'Southwest fare for your trip', p: ['region', 'legs'], d: { airline: 'southwest' } })}
<h2>Where Southwest takes no pets</h2>
<p>No international itinerary takes a pet on Southwest, so a trip to Mexico or the Caribbean with a dog needs another airline: ${h.a('american-airlines-pet-policy', 'American')} and ${h.a('delta-pet-policy', 'Delta')} both fly pets to Mexico. Between the mainland and Hawaii, no pets either. And no pet ever travels in the hold: a dog too big for an under-seat carrier cannot fly Southwest at all.</p>
<h2>Southwest against the other airlines</h2>
<p>On a mainland trip, Southwest’s ${K.usd(US)} sits between Alaska’s ${K.usd(K.feeOr('alaska', 'us'))} and the ${K.usd(K.feeOr('delta', 'us'))} of Delta and American. Its real advantage is two animals in one carrier for one fare: two kittens on a round trip cost ${K.usd(US * 2)} on Southwest, against twice that on an airline that charges per pet. The ${h.a('airline-pet-policy', 'comparison of the five airlines')} lines up the other rules.</p>
<h2>What the contract leaves to you</h2>
<p>Southwest’s contract states that the pet must be healthy, harmless, odorless and need no attention during the flight, and that the crew gives no oxygen or first aid to a pet that becomes ill on board; in an emergency, no oxygen mask is available for it. The airline assumes no liability for the health of a carry-on pet. A passenger whose seating needs leave no room for the carrier may be asked to buy an extra seat. None of this is unusual, Alaska’s contract says much the same, but it is worth reading before a long flight with an older animal.</p>
`,
  tool: 'fee', toolArg: { airline: 'southwest', region: 'us', legs: 2 },
  related: ['airline-pet-policy', 'flying-with-a-cat', 'dog-carrier-size-airline', 'alaska-airlines-pet-policy'],
  sources: ['wn_coc', 'wn_fees'],
});
