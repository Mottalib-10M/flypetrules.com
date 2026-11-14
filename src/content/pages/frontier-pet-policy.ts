import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const A = K.A('frontier');
const US = K.feeOr('frontier', 'us');
const C = A.carrier!;

export default definePage({
  id: 'frontier-pet-policy', group: 'airlines', order: 6, slug: 'frontier-pet-policy',
  nav: 'Frontier pet policy', card: 'Frontier’s pet charge, the animals it takes beyond cats and dogs, its carrier sizes and why it is domestic only.',
  title: 'Frontier Pet Policy 2026: Pet Charge, Carrier and Animals',
  description: `Frontier pet policy in 2026: ${K.usd(US)} per pet each way, soft carrier ${K.in(C.soft!)}, hard ${K.in(C.hard!)}, rabbits and hamsters allowed, US flights only, no cargo.`,
  h1: 'Frontier pet policy: the charge, the carrier, the animals',
  intro: 'The Frontier pet policy as its FAQ of September 17, 2026 and its optional services page stated it, with your charge computed above.',
  resume: `The Frontier pet policy is the widest on animals and the narrowest on routes. Frontier accepts domesticated dogs, cats, rabbits, guinea pigs, hamsters and small household birds in the cabin, on flights within the United States only, for a pet charge of ${K.usd(US)} per pet each way, non-refundable, on its optional services page read on November 13, 2026. A round trip costs ${K.usd(US * 2)}. Each passenger may bring one pet, one adult dog or cat per container, at least 8 weeks old. The carrier must fit under the seat in front of you, with published maximums of ${K.in(C.soft!)} for a soft carrier and ${K.in(C.hard!)} for a hard one; Frontier recommends soft. You may still bring a personal item or a carry-on besides the pet, with the usual bag fees. Frontier carries no pet in the cargo hold and no checked pet, and on international flights it accepts only service dogs that meet the CDC rules. Large birds, rodents such as mice and rats, ferrets, reptiles, amphibians, spiders and insects are refused.`,
  faqs: [
    { q: 'How much is Frontier’s pet fee?', a: `${K.usd(US)} per pet, per direction, non-refundable, on Frontier’s optional services page read on November 13, 2026. You can pay it while booking by choosing a cabin pet, or later in Manage Trip; otherwise it is paid at check-in. It is charged per pet, so two pets mean two charges, and each passenger may bring only one.`, open: true },
    { q: 'Can I take a rabbit or a hamster on Frontier?', a: 'Yes. Frontier is the only one of the five airlines read here that accepts rabbits, guinea pigs and hamsters in the cabin, with dogs, cats and small household birds, on flights within the US. Mice, rats, squirrels, ferrets, reptiles, amphibians, spiders, insects and large birds such as parrots are refused.' },
    { q: 'Can I fly Frontier to Mexico with my dog?', a: 'No, unless it is a trained service dog. Frontier allows only service dogs on international flights, and they must meet the CDC rules for dogs entering the United States. A pet dog flying to Mexico or the Caribbean needs an airline that carries pets on those routes, such as American or Delta.' },
  ],
  body: (h) => `
<h2>Frontier pet policy: the animals</h2>
<p>Frontier lists the animals it takes in the cabin: domesticated dogs, cats, rabbits, guinea pigs, hamsters and small household birds (${h.src('f9_faq', 'Frontier pet FAQ, September 17, 2026')}). The pet must be at least 8 weeks old and stay in its container at all times. One pet per passenger, and one adult dog or cat per container. A passenger with a trained service dog may also bring one pet, if both follow their rules.</p>
${h.table(['Rule', 'Frontier'], [['Pet charge', `${K.usd(US)} per pet each way`], ['Soft carrier', K.in(C.soft!)], ['Hard carrier', K.in(C.hard!)], ['Pets per passenger', '1'], ['Routes', 'within the US only'], ['Cargo or checked', 'never']], 'Frontier pet rules, read November 13, 2026', ['l', 'l'])}
<h2>The carrier on Frontier</h2>
<p>Frontier’s maximums are the roomiest of the five airlines on width: 14 inches, against 11 on Delta’s recommended size and on American’s soft carrier. The height is 11 inches soft and 8 hard. The pet must be able to stand, turn around and lie down naturally inside.</p>
${h.mini('carrier', { t: 'Does your carrier fit Frontier’s sizes?', p: ['air', 'l', 'w', 'h', 'lb', 'type'], d: { air: 'frontier', l: 18, w: 14, h: 11 } })}
<p>The pet does not use your bag allowance: you keep a personal item or a carry-on, paying Frontier’s usual bag fees for the carry-on.</p>
<h2>Booking and paying on Frontier</h2>
<p>Add the pet while booking, in the passenger information step, or afterwards in Manage Trip. The charge is ${K.usd(US)} per pet and per direction (${h.src('f9_fees', 'Frontier optional services')}), non-refundable. Frontier’s fee page also lists a carrier interface charge per passenger and flight segment, separate from the pet.</p>
${h.mini('fee', { t: 'Frontier charge for your trip', p: ['legs'], d: { airline: 'frontier', region: 'us' } })}
<h2>What Frontier does not do</h2>
<p>No checked pets, no pets in the cargo hold, and no pets on international flights. A dog that does not fit under the seat, or a trip abroad, means another airline: compare them on the ${h.a('airline-pet-policy', 'airline comparison')}. Within the US, Frontier’s ${K.usd(US)} is close to Southwest’s ${K.usd(K.feeOr('southwest', 'us'))} and above Alaska’s ${K.usd(K.feeOr('alaska', 'us'))}; its edge is the small animals no one else takes.</p>
<h2>The animals Frontier refuses</h2>
<p>Frontier’s list of refusals is as precise as its list of accepted animals. Large birds such as parrots and macaws stay home, and so do mice, rats, squirrels and other rodents outside the hamster and the guinea pig, ferrets, reptiles including snakes, amphibians, spiders and insects. A ferret owner who reads “small pets” on a forum should know that Frontier names the ferret among the refusals. Rabbits, on the other hand, are on the accepted list, which makes Frontier one of the rare US airlines that takes them in the cabin.</p>
<h2>A Frontier round trip, counted</h2>
<p>Take one small dog on a round trip within the mainland. The pet charge is ${K.usd(US)} on the way out and ${K.usd(US)} on the way back, so ${K.usd(US * 2)} for the trip. If you also want a carry-on bag, Frontier charges its usual bag fee, which depends on the fare and the date of booking; the pet carrier itself replaces no bag. The fee page read on November 13, 2026 adds a carrier interface charge of up to $23 per passenger and per flight segment, which applies to the ticket whether or not a pet travels. None of these charges is refundable.</p>
<h2>Service dogs and trips abroad</h2>
<p>On international flights, Frontier carries only trained service dogs, and they must meet the CDC rules to come back into the United States. A pet dog or cat going to Mexico, the Caribbean or Central America needs another airline. American and Delta take pets in the cabin to Mexico; the ${h.a('traveling-to-mexico-with-a-dog', 'Mexico page')} explains the screwworm certificate that every dog now needs there.</p>
`,
  tool: 'fee', toolArg: { airline: 'frontier', region: 'us', legs: 2 },
  related: ['airline-pet-policy', 'dog-carrier-size-airline', 'southwest-pet-policy', 'flying-with-a-cat'],
  sources: ['f9_faq', 'f9_fees'],
});
