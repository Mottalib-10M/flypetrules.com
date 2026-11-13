import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const A = K.A('delta');
const US = K.feeOr('delta', 'us'), INTL = K.feeOr('delta', 'europe');

export default definePage({
  id: 'delta-pet-policy', group: 'airlines', order: 2, slug: 'delta-pet-policy',
  nav: 'Delta pet policy', card: 'Delta’s in-cabin fee by route, the kennel that fits, the routes closed to pets and the cargo rule.',
  title: 'Delta Pet Policy 2026: Cabin Fee, Kennel Size and Routes',
  description: `Delta pet policy in 2026: ${K.usd(US)} each way in the cabin within the US, ${K.usd(INTL)} abroad, the kennel Delta recommends, 13 places closed to cabin pets, and cargo.`,
  h1: 'Delta pet policy: fees, kennel and routes',
  intro: 'The Delta pet policy as Delta’s own pet travel page stated it on November 13, 2026, with the fee for your trip computed above.',
  resume: `The Delta pet policy lets small dogs, cats and household birds travel in the cabin, in a kennel that fits fully under the seat in front of you, for a one-way fee collected at check-in. For tickets issued on or after ${K.day(A.feeDate!)}, the fee is ${K.usd(US)} each way within the United States and to or from Canada, Puerto Rico and the US Virgin Islands, and ${K.usd(INTL)} on international trips, Brazil included; older tickets kept the earlier ${K.usd(A.oldFee!)}. A round trip with one dog inside the US therefore costs ${K.usd(US * 2)}. Delta sets no fixed kennel size because under-seat space varies by aircraft, recommends a soft kennel of ${K.in(A.carrierRec!)}, and accepts one kennel per passenger. Pets are not allowed in the cabin to Hawaii, the United Kingdom, Australia, New Zealand and nine other places, nor in Delta One, Delta Premium or international business class. Delta Cargo ships pets only for active military and State Department staff with transfer orders.`,
  faqs: [
    { q: 'How much is Delta’s pet fee?', a: `${K.usd(US)} each way per kennel within the US and to or from Canada, Puerto Rico and the US Virgin Islands, and ${K.usd(INTL)} on international trips, for tickets issued on or after ${K.day(A.feeDate!)}. The fee is collected at check-in. Delta’s page says the Canadian amount is charged in Canadian dollars when leaving Canada and in euros when leaving Europe.`, open: true },
    { q: 'What size kennel does Delta allow in the cabin?', a: `Delta publishes no single maximum: the kennel must fit fully under the seat in front of you, and that space depends on the aircraft. Delta recommends a soft-sided kennel of ${K.in(A.carrierRec!)}, which fits most of its aircraft. Ask Delta for the under-seat size of your flight when you book the pet.` },
    { q: 'Can two pets share one kennel on Delta?', a: 'Only young ones. Delta allows two pets of the same breed and size, between 8 weeks and 6 months old, in one kennel, charged as one pet, and a mother dog or cat with an unweaned litter of that age. Otherwise it is one pet per kennel and one kennel per passenger.' },
    { q: 'Can my dog fly in cargo on Delta?', a: 'Not as a regular traveler. Delta Cargo currently ships pets only for active US military and US State Department Foreign Service staff with permanent change of station orders. A large dog that does not fit under the seat cannot fly with other passengers on Delta.' },
  ],
  body: (h) => `
<h2>Delta pet policy in the cabin</h2>
<p>A pet flies in the cabin on Delta when it meets the age, health, size and kennel rules and its owner has booked it. Booking is by phone with Delta Reservations, first come first served, because each flight has a cap: 2 kennels in Delta First and 4 in Delta Comfort and Delta Main. Pets are never accepted in Delta One, Delta Premium or international business class, and not in cabins with flat-bed seats (${h.src('delta_pets', 'Delta pet travel page')}).</p>
<p>The minimum age is 8 weeks within the US. Delta lists higher minimums at the border: 15 weeks for travel to the European Union, 16 weeks for a cat entering the United States and ${K.CDC.minAgeMonths} months for a dog, the CDC’s own minimum.</p>
${h.table(['Route', 'Fee each way', 'Round trip'], [['Within the US, Canada, Puerto Rico, US Virgin Islands', K.usd(US), K.usd(US * 2)], ['International, Brazil included', K.usd(INTL), K.usd(INTL * 2)], ['Hawaii', 'no pets', ''], ['United Kingdom', 'no cabin pets', '']], 'Delta in-cabin pet fees for tickets issued on or after April 8, 2025', ['l', 'r', 'r'])}
<h2>The kennel Delta accepts</h2>
<p>The kennel must be leak-proof and ventilated on three sides within the US, four sides on international flights, and your pet must be able to move inside without pressing against the sides. It counts apart from your bag allowance: you keep one personal item or one carry-on besides the kennel. At the security checkpoint the pet comes out of the kennel; after that it stays inside at the airport and on board.</p>
${h.mini('carrier', { t: 'Is your kennel within Delta’s recommended size?', p: ['l', 'w', 'h'] })}
<p>Because Delta writes no hard maximum, the checker marks Delta as “no size published” and shows the recommended size. A kennel slightly larger may still fit on a wide aircraft; it is Delta’s gate agent who decides.</p>
<h2>Routes where Delta refuses pets in the cabin</h2>
<p>Delta lists these destinations: Australia, Barbados, Hawaii, Hong Kong, Iceland, Jamaica, New Zealand, South Africa, the United Kingdom and the United Arab Emirates, plus Brazil, Colombia and the Dominican Republic for pets that start their trip there. Hawaii is closed to pet travel entirely on Delta. For the United Kingdom, the restriction comes on top of the British rules; a dog can still reach Britain by another way that the British authorities accept.</p>
<h2>Travel abroad with Delta</h2>
<p>Outside the contiguous US, Delta lets a dog or cat fly only if the owner holds every document the destination requires and the documents to come home. Delta checks at the counter. Since ${K.day(K.D.mexico.nwsSince)}, a dog flying to Mexico needs a screwworm inspection certificate issued no more than ${K.D.mexico.nwsDays} days before arrival, and Delta writes that it verifies it at check-in. A dog flying back to the US needs its ${h.a('cdc-dog-import-form', 'CDC Dog Import Form receipt')}.</p>
${h.mini('fee', { t: 'Delta fee for your trip', p: ['region', 'legs'], d: { airline: 'delta' } })}
<p>For Europe, plan the certificate and the USDA endorsement with the ${h.a('traveling-to-europe-with-a-dog', 'Europe page')}; Delta’s fee is the small part of that trip. To compare with American’s fee on the same route, use the ${h.a('airline-pet-policy', 'airline comparison')}.</p>
<h2>Large dogs and Delta Cargo</h2>
<p>Delta Cargo takes pets only for active-duty US military and Foreign Service officers moving on permanent change of station orders, bookable with Delta Cargo no earlier than 14 days before the flight, dropped at a cargo facility 4 to 6 hours before a domestic departure (${h.src('delta_cargo', 'Delta Cargo page')}). For everyone else, a dog that does not fit under the seat cannot travel on a Delta passenger flight. Families moving a large dog abroad turn to a pet shipper; Delta asks international cargo customers to use one approved by the International Pet and Animal Transportation Association.</p>
`,
  tool: 'fee', toolArg: { airline: 'delta', region: 'us', legs: 2 },
  related: ['airline-pet-policy', 'dog-carrier-size-airline', 'american-airlines-pet-policy', 'how-much-does-it-cost-to-fly-a-dog'],
  sources: ['delta_pets', 'delta_cargo', 'cdc_faq', 'aphis_mexico'],
});
