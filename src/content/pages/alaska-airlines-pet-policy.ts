import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const A = K.A('alaska');
const US = K.feeOr('alaska', 'us'), HI = K.feeOr('alaska', 'hawaiiInter');
const S = A.carrier!.soft!;

export default definePage({
  id: 'alaska-airlines-pet-policy', group: 'airlines', order: 5, slug: 'alaska-airlines-pet-policy',
  nav: 'Alaska Airlines pet policy', card: 'Alaska’s cabin and baggage-compartment fees, the soft carrier limit, breeds refused and the Hawaii rules.',
  title: 'Alaska Airlines Pet Policy 2026: Cabin Fee, Carrier, Cargo',
  description: `Alaska Airlines pet policy in 2026: ${K.usd(US)} per carrier in the cabin, soft carrier ${K.in(S)}, ${K.usd(A.checkedFee!)} in the baggage compartment, Hawaii rules, breeds refused.`,
  h1: 'Alaska Airlines pet policy: cabin, cargo hold and Hawaii',
  intro: 'The Alaska Airlines pet policy, checked on November 13, 2026 on Alaska’s own rules and pet guide (both dated August 2026), with the fee for your trip computed below.',
  resume: `The Alaska Airlines pet policy is the last of the five read here that still flies pets in the baggage compartment for any traveler. In the cabin, Alaska takes only cats and dogs, in a soft-sided carrier no larger than ${K.in(S)}, one carrier per passenger, holding up to two animals of the same species and similar size. Its newsroom guide of August 26, 2026 gives the cabin fee as ${K.usd(US)} per carrier each way, or ${K.usd(HI)} for travel entirely within Hawaii, and ${K.usd(A.checkedFee!)} each way per kennel in the baggage compartment; its own pet page says fees run from $100 to $200 depending on the route. In the compartment, Alaska refuses short-nosed breeds such as pugs, boxers, bulldogs, Persians and Himalayans, except on direct flights between Hawaii and the mainland and between the islands. It carries no pet in the hold internationally except to Canada, Mexico and Costa Rica, and does not transfer a pet to another airline.`,
  faqs: [
    { q: 'How much does Alaska charge for a pet in the cabin?', a: `${K.usd(US)} per carrier each way, or ${K.usd(HI)} when the whole trip is within Hawaii, according to Alaska’s newsroom guide of August 26, 2026. Alaska’s pet page gives a range of $100 to $200 depending on the travel type and route, so check the amount when you book the pet.`, open: true },
    { q: 'Does Alaska Airlines accept hard-sided carriers in the cabin?', a: `No. Alaska’s contract of carriage accepts only soft-sided carriers in the cabin, no larger than ${K.in(S)}, leak-proof and ventilated, whose shape does not change with the pet inside. A hard kennel can travel only in the baggage compartment, where the airline inspects it before acceptance.` },
    { q: 'Which breeds does Alaska refuse in the baggage compartment?', a: 'Short-nosed dogs such as Boston terriers, boxers, bulldogs, pugs, shih tzus, Pekingese, mastiffs and pit bulls, and short-nosed cats such as Burmese, Exotic Shorthair, Himalayan and Persian, or any mix. The exception is direct flights between Hawaii and the mainland and flights between the islands.' },
    { q: 'Can my pet connect from Alaska to another airline?', a: 'Not as a transfer. Alaska accepts animals only on its own flights and those of Horizon or SkyWest operated for it. When you connect to another airline, you collect the pet at the connecting city and check it in again with the other carrier, under its own rules and fees.' },
  ],
  body: (h) => `
<h2>Alaska Airlines pet policy in the cabin</h2>
<p>In the passenger cabin, Alaska accepts domesticated cats and dogs only (${h.src('as_coc', 'contract of carriage, Rule 15')}). Each passenger brings one carrier, which may hold two animals of the same species and similar size if nothing sticks out and neither is in distress. An unaccompanied minor cannot travel with a pet. The carrier stays under the seat in front of you, and the pet stays inside, head and tail, at the gate and on board. Pit bulls are not accepted in the cabin unless they are service animals.</p>
${h.table(['Rule', 'Alaska Airlines'], [['Cabin fee, mainland', `${K.usd(US)} per carrier each way`], ['Cabin fee, within Hawaii', `${K.usd(HI)} per carrier each way`], ['Baggage compartment', `${K.usd(A.checkedFee!)} per kennel each way`], ['Cabin carrier', `soft-sided only, ${K.in(S)}`], ['Animals per carrier', 'up to 2, same species and similar size']], 'Alaska Airlines pet rules, contract of August 25, 2026 and guide of August 26, 2026', ['l', 'l'])}
<h2>The soft carrier limit</h2>
<p>Alaska’s ${K.in(S)} is the smallest of the five airlines read here, and the only one that refuses hard carriers in the cabin. A carrier bought for Delta or American at 18 inches long is one inch too long for Alaska.</p>
${h.mini('carrier', { t: 'Will your carrier pass Alaska’s soft limit?', p: ['air', 'l', 'w', 'h', 'lb', 'type'], d: { air: 'alaska', l: 17, w: 11, h: 9 } })}
<h2>The baggage compartment</h2>
<p>Alaska still flies cats, dogs and a few other animals in a climate-controlled compartment for ${K.usd(A.checkedFee!)} per kennel each way (${h.src('as_dogs', 'Alaska guide of August 26, 2026')}). The kennel must meet federal or IATA live animal rules and pass inspection at the counter. Alaska can refuse the compartment when the weather at either end poses a hazard, and does not fly muzzled, pregnant, injured or ill animals. Internationally, the compartment is open only on routes to Canada, Mexico and Costa Rica.</p>
${h.mini('fee', { t: 'Alaska cabin fee for your trip', p: ['region', 'legs'], d: { airline: 'alaska' } })}
<h2>Alaska and Hawaii</h2>
<p>Alaska flies cats and dogs to and from Hawaii, but the state has strict entry rules of its own, set by the Hawaii Department of Agriculture, and the passenger must meet them before departure. Cats and dogs arrive at Honolulu unless the owner holds a neighbor island inspection permit for direct release at Kona, Lihue or Kahului. Birds fly only between the islands. The short-nosed breeds refused elsewhere in the compartment are accepted on direct mainland to Hawaii flights and between islands.</p>
<p>Compare the cabin fee with the other airlines on the ${h.a('airline-pet-policy', 'comparison page')}, or check the ${h.a('dog-carrier-size-airline', 'carrier sizes')} of all five.</p>
<h2>Reserving and checking in on Alaska</h2>
<p>Space for a pet must be reserved in advance, in the cabin or in the compartment, and Alaska limits the number of carriers by aircraft and cabin. Pets with a reservation go first; a pet without one flies only if space is left. The fee is collected before the flight, it is not refundable, and an unused fee does not carry over to another trip. On the day, check the pet in at the ticket counter before going to the gate. With a pet under the seat, you cannot sit in a row right behind a bulkhead with no space under the seat in front, nor next to an emergency exit.</p>
<h2>Connections with another airline</h2>
<p>Alaska carries animals only on its own flights and those Horizon and SkyWest fly for it. A trip that continues on another carrier means collecting the pet at the connecting airport and checking it in again with the second airline, under that airline’s rules and fees. For a pet in the compartment, a connection of more than four hours means the animal is checked only to the connecting city. Book the whole trip with the pet in mind, not each flight on its own.</p>
<h2>Beyond cats and dogs</h2>
<p>In the compartment, Alaska’s contract lists more animals than cats and dogs: ferrets, guinea pigs, hamsters, household birds, non-poisonous reptiles, potbellied pigs, rabbits and tropical fish, at its discretion. In the cabin, only cats and dogs.</p>
`,
  tool: 'fee', toolArg: { airline: 'alaska', region: 'us', legs: 2 },
  related: ['airline-pet-policy', 'dog-carrier-size-airline', 'southwest-pet-policy', 'flying-with-a-dog'],
  sources: ['as_coc', 'as_dogs', 'as_pets'],
});
