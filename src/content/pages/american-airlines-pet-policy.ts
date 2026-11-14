import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const A = K.A('american');
const US = K.feeOr('american', 'us');
const C = A.carrier!;

export default definePage({
  id: 'american-airlines-pet-policy', group: 'airlines', order: 4, slug: 'american-airlines-pet-policy',
  nav: 'American Airlines pet policy', card: 'American’s carry-on pet fee, its three carrier sizes, the 20-pound limit and the routes closed to pets.',
  title: 'Pet Policy of American Airlines 2026: Fee, Carrier, Weight',
  description: `American Airlines pet policy in 2026: ${K.usd(US)} per kennel each way, soft carrier ${K.in(C.soft!)}, ${A.maxLb} lb with the carrier, no cabin pets to Europe or Hawaii.`,
  h1: 'American Airlines pet policy: fee, carrier and routes',
  intro: 'The American Airlines pet policy as its pets page stated it on November 13, 2026, with the fee for your trip computed below.',
  resume: `The American Airlines pet policy accepts cats and dogs as carry-on pets for ${K.usd(US)} per kennel each way, within and between the United States and Canada, Mexico, Central America and the Caribbean. It is the only one of the five airlines read here with a weight limit: ${A.maxLb} pounds for the pet and its carrier together, weighed at check-in. The carrier has three published maximums: ${K.in(C.soft!)} for a soft carrier on all flights, ${K.in(C.hard!)} for a hard carrier on American mainline flights and ${K.in(C.hardRegional!)} on American Eagle regional flights. With the carrier you may bring one more item, a personal item or a carry-on, not both. Pets must be at least 8 weeks old within the US. American takes no carry-on pet on trans-Atlantic trips, to or from Hawaii, to Jamaica, or to Argentina, Brazil, Chile, Colombia and Uruguay. Checked pets are reserved for active-duty military and State Department staff on official orders.`,
  faqs: [
    { q: 'How much does American charge for a pet in the cabin?', a: `${K.usd(US)} per kennel each way, on routes within and between the US and Canada, Mexico, Central America and the Caribbean. American writes that its fees apply to each destination without a stopover or connection of four hours or more, so a long stopover can add a second fee.`, open: true },
    { q: 'What is the weight limit for a pet on American?', a: `${A.maxLb} pounds, or 9.07 kilograms, for the pet and its carrier together, and American weighs them at check-in. None of the other four airlines read here publishes a weight limit for a pet in the cabin, only a carrier size or the rule that it fits under the seat.` },
    { q: 'Can I take my dog to Europe on American?', a: 'Not in the cabin: American takes no carry-on pet on trans-Atlantic trips. Checked pets are accepted only for active-duty US military and State Department staff traveling on official orders. Other travelers flying to Europe with a small dog look at airlines that allow it, such as Delta.' },
    { q: 'Which seats can I not take with a pet on American?', a: 'Bulkhead seats, exit rows and some First and Business seats on wide-body aircraft, because there is no space under the seat in front or for safety rules. On the three-cabin A321T, the carrier goes in a dedicated compartment at the front in First and Business. Choose your seat after adding the pet.' },
  ],
  body: (h) => `
<h2>American Airlines pet policy in the cabin</h2>
<p>American’s carry-on pets are cats and dogs only (${h.src('aa_pets', 'American Airlines pets page')}). The pet stays in its carrier, under the seat in front of you, for the whole flight. You add the pet to your trip and pay the carry-on pet fee; space is limited per flight, up to 20 carriers across all cabins on most mainline aircraft, and on regional jets 1 or 5 depending on the aircraft type, which the booking screen shows.</p>
<p>American does not accept a pet that has been sedated or tranquilized, following the American Veterinary Medical Association, as it writes on the same page.</p>
${h.table(['Carrier', 'Flights', 'Maximum'], [['Soft-sided (recommended)', 'all flights', K.in(C.soft!)], ['Hard-sided', 'American mainline', K.in(C.hard!)], ['Hard-sided', 'American Eagle (regional)', K.in(C.hardRegional!)], ['Pet and carrier together', 'all flights', `${A.maxLb} lb`]], 'American Airlines carry-on pet carrier limits, read November 13, 2026', ['l', 'l', 'r'])}
<h2>Carrier size and weight on American</h2>
<p>The soft size is the safe one, since it fits every American flight; a hard carrier must match the smaller Eagle size if any leg is regional. The weight counts the carrier too: a 4-pound carrier leaves 16 pounds for the pet. The checker below tests both size and weight.</p>
${h.mini('carrier', { t: 'Does your carrier pass American’s limits?', p: ['air', 'l', 'w', 'h', 'lb', 'type'], d: { air: 'american' } })}
<p>A pet stroller is not a carrier: American checks it at the counter as a bag, with its usual bag fee.</p>
<h2>Routes and destinations</h2>
<p>The carry-on fee covers trips within the US and to Canada, Mexico, Central America and the Caribbean, with exceptions. American takes no carry-on pet to or from Hawaii; there, only checked pets on official orders, connecting through Honolulu. It refuses carry-on pets to Jamaica and on trips to or from Argentina, Brazil, Chile, Colombia and Uruguay. To Trinidad and Tobago, a flight with a pet must land between 8 a.m. and 4 p.m. Across the Atlantic, no carry-on pets at all.</p>
${h.mini('fee', { t: 'American fee for your route', p: ['region', 'legs'], d: { airline: 'american' } })}
<p>For Mexico, the dog also needs its screwworm inspection certificate, issued no more than ${K.D.mexico.nwsDays} days before entry; the ${h.a('traveling-to-mexico-with-a-dog', 'Mexico page')} has the countdown.</p>
<h2>Checked pets and cargo</h2>
<p>American accepts checked pets only from active-duty US military and State Department Foreign Service personnel on official orders: up to 2 pets, booked by phone at least 48 hours ahead, ${K.usd(A.checkedFee!)} per kennel on most routes. Snub-nosed dogs and cats are refused as checked pets. Everyone else shipping a large animal deals with American Airlines Cargo, whose fees are quoted at booking.</p>
<h2>Booking a carry-on pet with American</h2>
<p>The pet is added after the ticket: in the trip on the American website or app, the Additional Services section offers to add a carry-on pet, asks you to accept the requirements and to choose the flights where the pet travels. Nothing is paid at that stage. At the airport, you go to the ticket counter, where an agent checks the pet and the carrier, weighs them together and collects the fee. Within the United States and Puerto Rico, the pet must be at least 8 weeks old.</p>
<p>With the carrier you keep one more item on board, a personal item or a carry-on bag, not both. That is the rule that surprises travelers most often: the pet carrier takes the place of one of your two bags.</p>
<h2>Where you can sit</h2>
<p>American lists seats closed to carry-on pets, for safety rules or lack of space under the seat: bulkhead rows, exit rows, the First and Business seats of its Boeing 777 and 787, and seat 13D on the Airbus A321neo. Choose the seat once the pet is on the booking, and check it again if the aircraft changes.</p>
<h2>Dogs that come from a high-risk country</h2>
<p>American refuses as carry-on pets the dogs that started their trip in, or visited, a country the CDC lists as high risk for rabies in the six months before the flight. Service dogs that meet the CDC rules are not affected. A family returning from such a country should read the ${h.a('cdc-dog-import-rules', 'CDC rules page')} before booking, because another airline will be needed.</p>
`,
  tool: 'fee', toolArg: { airline: 'american', region: 'mexico', legs: 2 },
  related: ['airline-pet-policy', 'dog-carrier-size-airline', 'delta-pet-policy', 'traveling-to-mexico-with-a-dog'],
  sources: ['aa_pets', 'aphis_mexico'],
});
