import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const ids = K.IDS;
const us = (id: string) => K.fee(id, 'us');
const cheapest = [...ids].sort((a, b) => (us(a) ?? 1e9) - (us(b) ?? 1e9));
const lo = K.A(cheapest[0]), hi = K.A(cheapest[cheapest.length - 1]);

export default definePage({
  id: 'airline-pet-policy', group: 'airlines', order: 1, slug: 'airline-pet-policy',
  nav: 'Airline pet policies compared', card: 'Five US airlines side by side: fee by route, carrier, animals, pets per flight and where pets are refused.',
  title: 'Airline Pet Policy 2026: Five US Airlines Compared by Route',
  description: `Airline pet policy in 2026: cabin fees of Delta, American, Southwest, Alaska and Frontier by route, carrier limits, which animals fly and routes with no pets.`,
  h1: 'Airline pet policies compared, route by route',
  intro: 'Airline pet policy of five US airlines, read on their own pages and contracts on November 13, 2026: pick a route to compare the fees.',
  resume: `Airline pet policy in the United States follows one model with five sets of numbers. Every airline read here takes small cats and dogs in the cabin, in a carrier under the seat in front of the owner, for a fee charged each way; none lets a pet out of the carrier on board. Within the mainland US the fee runs from ${K.usd(us(cheapest[0])!)} on ${lo.name} to ${K.usd(us(cheapest[cheapest.length - 1])!)} on ${hi.name}. The differences that decide a trip are elsewhere. Southwest and Frontier fly no pets abroad. American flies them to Canada, Mexico, Central America and the Caribbean but not across the Atlantic. Delta flies them to Europe and most of the world for ${K.usd(K.feeOr('delta', 'europe'))} each way, but not to the United Kingdom or Hawaii. Alaska is the only one still putting pets of ordinary travelers in the baggage compartment. American alone sets a weight limit, ${K.A('american').maxLb} pounds with the carrier, and Alaska alone refuses hard carriers in the cabin.`,
  faqs: [
    { q: 'What is the most pet-friendly airline in the US?', a: `It depends on the trip. For two small pets together, Southwest and Alaska accept two animals of the same species in one carrier for one fee. For a large dog, Alaska is the only one of the five that still flies pets in the baggage compartment for ordinary travelers. For Europe, Delta is the one that takes pets in the cabin.`, open: true },
    { q: 'Do airlines charge the pet fee for each flight of a connection?', a: 'The fees read here are per direction, not per flight. American adds a nuance: its fee applies to each destination without a stopover of four hours or more, so a long stopover can count as a new destination. Ask the airline when your connection is long.' },
    { q: 'Which airlines fly pets in cargo in 2026?', a: 'Among the five read here, only Alaska accepts pets of ordinary travelers in its baggage compartment. Delta and American take checked or cargo pets only for active US military and State Department staff on orders. Southwest and Frontier never carry pets in the hold.' },
    { q: 'Why is United not compared here?', a: 'Because its site did not answer our reading on November 13, 2026, and JetBlue’s and Allegiant’s refused it. This site shows only figures read on the airline’s own documents, so these airlines get no figure rather than one copied from a blog that may be out of date.' },
  ],
  body: (h) => `
<h2>Airline pet policy: the fee on each route</h2>
<p>The table below gives the in-cabin fee of one pet carrier, one way, for the routes most families fly. “No” means the airline writes that it refuses pets in the cabin on that route; “Not published” means we found no fee for it on the airline’s pages, so ask the airline.</p>
${h.table(['Route', ...ids.map((i) => K.A(i).name)], ['us', 'hawaii', 'hawaiiInter', 'canada', 'mexico', 'europe', 'uk'].map((r) => [K.region(r), ...ids.map((i) => { const f = K.fee(i, r); return f !== null ? K.usd(f) : K.A(i).cabinNo.includes(r) ? 'No' : 'Not published'; })]), 'In-cabin pet fee per carrier, one way, read November 13, 2026', ['l', 'r', 'r', 'r', 'r', 'r'])}
<p>Two cases stand out. Hawaii from the mainland: Delta, American and Southwest refuse cabin pets; Alaska flies them, under Hawaii’s own entry rules, but we found no fee for that route on its pages, so ask Alaska when you book. The United Kingdom: none of the five airlines read here offers a pet in the cabin there, a matter covered on the ${h.a('taking-a-dog-to-the-uk', 'Great Britain page')}.</p>
<h2>The carrier, the animals and the pets per flight</h2>
${h.table(['Airline', 'Animals in the cabin', 'Carrier', 'Per passenger', 'Per flight'], ids.map((i) => { const a = K.A(i); return [a.name, a.species, a.carrier?.soft ? `soft ${K.in(a.carrier.soft)}${a.softOnly ? ' only' : ''}` : 'fits under the seat', a.perPassenger, a.perFlight]; }), 'Pet rules in the cabin, five US airlines', ['l', 'l', 'l', 'l', 'l'])}
<p>The carrier rule is the one that turns people back at the gate. Delta and Southwest publish no maximum, only the rule that the carrier fits under the seat in front, and Delta recommends ${K.in(K.A('delta').carrierRec!)}. American, Alaska and Frontier publish sizes; the ${h.a('dog-carrier-size-airline', 'carrier checker')} tests yours against all of them.</p>
${h.mini('carrier', { t: 'Your carrier against the five airlines', p: ['l', 'w', 'h', 'lb', 'type'] })}
<h2>Large dogs: checked and cargo</h2>
<p>The days when a family checked a crated retriever at the counter are mostly over on US airlines. Delta ships pets only for active military and State Department staff with transfer orders (${h.src('delta_cargo', 'Delta Cargo page')}); American takes checked pets only from the same travelers (${h.src('aa_pets', 'American pets page')}); Southwest and Frontier never carry pets in the hold. Alaska still does, for ${K.usd(K.A('alaska').checkedFee!)} each way per kennel, with breed and weather limits (${h.src('as_coc', 'Alaska contract of carriage')}).</p>
<h2>Booking the pet</h2>
<p>Every airline caps the number of pets per flight and books them first come first served, so the pet should be added the day you buy your ticket. Southwest books pets only by phone and collects the fare at the ticket counter; Delta also takes pet bookings by phone; Frontier lets you add the pet online. On the day, allow time for the counter: Southwest and Alaska write that the pet must be checked in at the ticket counter before the gate.</p>
${h.mini('cost', { t: 'Fees of your whole trip', p: ['airline', 'region'] })}
<p>Each airline has its own page with the details we read: ${h.a('delta-pet-policy', 'Delta')}, ${h.a('american-airlines-pet-policy', 'American')}, ${h.a('southwest-pet-policy', 'Southwest')}, ${h.a('alaska-airlines-pet-policy', 'Alaska')} and ${h.a('frontier-pet-policy', 'Frontier')}.</p>
<h2>The carrier counts as a bag</h2>
<p>On all five airlines the carrier rides under the seat in front, which is where your personal item would have gone. Delta and American let you keep one more item, a personal item or a carry-on bag, not both. Frontier does the same, and its carry-on is paid at the usual rate. In practice, a family flying with a pet packs one bag fewer in the cabin, or checks it.</p>
<h2>Seats you cannot take</h2>
<p>The seat rules follow the same logic everywhere: the pet needs space under a seat in front and must not block an exit. All five refuse exit rows; Delta, American and Alaska also refuse bulkhead rows with no seat in front. Delta adds its flat-bed seats, Delta One and some rows of its Airbus A330, and American its First and Business seats on the Boeing 777 and 787. Pick the seat after the pet is on the booking.</p>
<h2>Airlines we could not read</h2>
<p>United, JetBlue and Allegiant also fly pets, but their pages refused our automated reading on November 13, 2026, so this site gives no figure for them rather than one copied from elsewhere. Check their own pages before booking.</p>
`,
  tool: 'fee', toolArg: { airline: 'delta', region: 'us', legs: 1 },
  related: ['dog-carrier-size-airline', 'how-much-does-it-cost-to-fly-a-dog', 'delta-pet-policy', 'southwest-pet-policy'],
  sources: ['delta_pets', 'delta_cargo', 'aa_pets', 'wn_coc', 'wn_fees', 'as_coc', 'as_dogs', 'f9_faq', 'f9_fees'],
});
