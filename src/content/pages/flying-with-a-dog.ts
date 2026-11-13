import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const dl = K.feeOr('delta', 'us'), as = K.feeOr('alaska', 'us');

export default definePage({
  id: 'flying-with-a-dog', group: 'airlines', order: 9, slug: 'flying-with-a-dog',
  nav: 'Flying with a dog', card: 'The day of the flight with a dog in the cabin: booking, check-in, security, the gate and the landing.',
  title: 'Flying With a Dog in 2026: Booking, Check-In and the Cabin',
  description: `Flying with a dog in 2026: book the pet with your ticket, ${K.usd(as)} to ${K.usd(dl)} each way, check in at the counter, the security screening, the carrier rules on board.`,
  h1: 'Flying with a dog: from booking to landing',
  intro: 'Flying with a dog in the cabin within the US, step by step, with the rules of the five airlines we read on November 13, 2026.',
  resume: `Flying with a dog in the cabin of a US airline means a small dog in a carrier under the seat in front of you, booked with your ticket and paid each way: ${K.usd(as)} on Alaska up to ${K.usd(dl)} on Delta and American within the mainland. The steps are the same on the five airlines read here. Book the dog as soon as you have your seat, because each flight takes only a few pets, first come first served: six carriers at most on Southwest, two in Delta First and four in its main cabin. On the day, check the dog in at the ticket counter; American weighs the dog and carrier against its ${K.A('american').maxLb}-pound limit there, and Delta and Southwest collect the fee. At security the dog comes out of the carrier and you carry it through the scanner while the carrier is screened. After that it stays in the carrier, closed, in the terminal and for the whole flight. Exit rows and bulkhead seats are not for passengers with pets.`,
  faqs: [
    { q: 'Do I take my dog out of the carrier at airport security?', a: 'Yes. Delta writes that you remove your pet from its kennel at the security checkpoint; the empty carrier goes through the X-ray and you take the dog through the checkpoint with you. After security, the dog goes back in the carrier and stays there in the terminal.', open: true },
    { q: 'Can I buy a seat for my dog?', a: 'Not to let the dog sit on it: on the five airlines read here the dog stays in its carrier under the seat in front of you. Southwest writes that it may require an extra seat for a passenger with unique seating needs and a pet, at its discretion. Ask the airline before buying one.' },
    { q: 'Where can my dog relieve itself at the airport?', a: 'Most large US airports have animal relief areas, often one after security; Delta mentions them on its pet page and Alaska publishes a list for its airports. Plan a stop before check-in, since the dog must stay in the carrier once it is past the counter, except at the relief area.' },
  ],
  body: (h) => `
<h2>Flying with a dog: before you book</h2>
<p>Check three things first. The dog must fit in a carrier that fits under the seat: the ${h.a('dog-carrier-size-airline', 'carrier checker')} compares your carrier with each airline’s published limit. The airline must accept pets on your route: Southwest and Frontier fly no pets abroad and none of the five takes a cabin pet to the United Kingdom. And the dog must be old enough: 8 weeks within the US on the four airlines that state an age, and ${K.CDC.minAgeMonths} months for any dog entering the United States from abroad, under the CDC rules.</p>
${h.mini('fee', { t: 'Fee for your dog on your route', p: ['airline', 'region'] })}
<h2>Booking the dog</h2>
<p>Book your own ticket, then add the dog right away: pets are accepted per flight in small numbers, first come first served. Southwest and Delta book pets by phone; Frontier lets you add a cabin pet while booking or in Manage Trip. If your trip has a long stopover, ask how the fee applies: American charges per destination when a stopover lasts four hours or more.</p>
<h2>At the airport</h2>
<p>Go to the ticket counter, not the kiosk. Southwest and Alaska write that a passenger with a pet checks it in at the counter before going to the gate; that is where Southwest collects its fare, where Delta collects its fee and hands over the cabin pet tag, and where American weighs the dog with its carrier. Allow extra time. Then security: the dog comes out of the carrier and passes with you while the carrier is screened (${h.src('delta_pets', 'Delta pet travel page')}).</p>
${h.table(['Step', 'What happens', 'Who writes it'], [['Ticket counter', 'pet checked in, fee paid, pet tag', 'Southwest, Alaska, Delta'], ['Weighing', `pet and carrier, ${K.A('american').maxLb} lb limit`, 'American'], ['Security', 'dog out of the carrier, carrier screened', 'Delta'], ['Gate and boarding', 'dog in the closed carrier, head and tail inside', 'Southwest, Alaska'], ['On board', 'carrier under the seat for the whole flight', 'all five']], 'The day of the flight with a dog in the cabin', ['l', 'l', 'l'])}
<h2>On board</h2>
<p>The carrier goes under the seat in front of you before the doors close and stays there until you reach the gate. Passengers with pets cannot sit in an exit row or in a seat with no space under the seat ahead, which rules out most bulkhead rows; American also lists some First and Business seats. The dog does not come out during the flight, and Alaska’s contract lets the captain remove a pet that causes a disturbance at the first stop.</p>
<h2>Flying with a dog abroad</h2>
<p>A trip out of the country adds the destination’s papers and the return into the United States. Every dog needs a ${h.a('cdc-dog-import-form', 'CDC Dog Import Form receipt')} to come back, and the airline asks to see it before boarding. For the outbound leg, the ${h.a('traveling-to-europe-with-a-dog', 'Europe')}, ${h.a('traveling-to-mexico-with-a-dog', 'Mexico')} and ${h.a('traveling-to-canada-with-a-dog', 'Canada')} pages count the days.</p>
${h.mini('cdc', { t: 'What your dog needs to come home', p: ['country'] })}
<h2>Between security and the gate</h2>
<p>After security the dog goes back in its carrier and stays there in the terminal. Delta writes that the only exception is a designated pet relief area, which most US airports now have for pets and service animals, and that the same rule holds in its Sky Club lounges. Plan a last walk before the terminal, and on a connection ask the gate agent where the nearest relief area is, since it may be on the other side of security.</p>
<h2>A dog too big for the cabin</h2>
<p>If the dog cannot fit in a carrier under the seat, the choice shrinks. Among the five airlines read here, only Alaska takes pets of ordinary travelers in its baggage compartment, for ${K.usd(K.A('alaska').checkedFee!)} per kennel each way, with weather and breed limits. Delta and American carry checked or cargo pets only for military and State Department staff on orders. The other route is a pet shipper, whose prices are private and not covered here.</p>
`,
  tool: 'fee', toolArg: { airline: 'alaska', region: 'us', legs: 2 },
  related: ['dog-carrier-size-airline', 'airline-pet-policy', 'cdc-dog-import-rules', 'flying-with-a-cat'],
  sources: ['delta_pets', 'aa_pets', 'wn_coc', 'as_coc', 'f9_faq', 'cdc_faq'],
});
