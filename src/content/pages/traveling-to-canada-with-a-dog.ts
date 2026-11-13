import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const C = K.D.canada;

export default definePage({
  id: 'traveling-to-canada-with-a-dog', group: 'abroad', order: 16, slug: 'traveling-to-canada-with-a-dog',
  nav: 'Traveling to Canada with a dog', card: 'A rabies certificate under three years old, the puppy exceptions, and one CDC receipt for six months of crossings.',
  title: 'Traveling to Canada With a Dog 2026: Rabies Proof and Return',
  description: `Traveling to Canada with a dog in 2026: a rabies certificate within ${C.rabiesYears} years, no USDA endorsement, puppy rules under ${C.youngMonths} months, one CDC receipt for 6 months.`,
  h1: 'Traveling to Canada with a dog or cat',
  intro: 'Traveling to Canada with a dog is the simplest trip abroad: the planner above shows what the APHIS page for Canada asks.',
  resume: `Traveling to Canada with a dog takes one paper on the way in: a rabies vaccination certificate issued by a licensed veterinarian, showing a vaccine given within the ${C.rabiesYears} years before the dog enters Canada. That covers dogs older than ${C.youngMonths} months, assistance dogs with their user, up to two pet dogs traveling with their owner, and dogs entered in a show. No health certificate and no USDA endorsement are needed. A puppy under ${C.noVaxUnderMonths} months needs no rabies vaccine, only proof of age. A puppy under ${C.youngMonths} months traveling without its owner needs a health certificate from a licensed vet issued within ${C.youngUnaccHours} hours of arrival, still without endorsement. Cats need the same rabies certificate, with the vaccine date and type, and kittens under ${C.noVaxUnderMonths} months are exempt. Coming back, a dog that was only in Canada and the US needs its CDC Dog Import Form receipt, valid ${K.CDC.receiptLowRiskMonths} months for repeated crossings from Canada. These are the rules on the APHIS page for Canada, updated July 30, 2025.`,
  faqs: [
    { q: 'What does my dog need to cross into Canada by car?', a: `Proof of a rabies vaccine given within ${C.rabiesYears} years, on a certificate from a licensed veterinarian, for a dog older than ${C.noVaxUnderMonths} months. No health certificate and no USDA endorsement. To drive back into the US, the dog needs its CDC Dog Import Form receipt, even if it never leaves the car.`, open: true },
    { q: 'Can I bring a puppy to Canada?', a: `Yes. Under ${C.noVaxUnderMonths} months, no rabies vaccine is required, but you must be able to prove the age. Under ${C.youngMonths} months and traveling without you, the puppy needs a health certificate from a licensed vet issued within ${C.youngUnaccHours} hours of arrival. Remember the return: the CDC lets no dog under ${K.CDC.minAgeMonths} months into the US.` },
    { q: 'Do I need a new CDC receipt each time I drive back from Canada?', a: `No. For a dog that travels only between Canada, Mexico and the US, the receipt covers multiple entries for ${K.CDC.receiptLowRiskMonths} months, as long as the departure country stays the same. Returning from Mexico after a receipt issued for Canada needs a new form.` },
  ],
  body: (h) => `
<h2>Traveling to Canada with a dog: the rabies certificate</h2>
<p>The certificate must come from a licensed veterinarian and show the vaccination date within the ${C.rabiesYears} years before entry into Canada (${h.src('aphis_canada', 'APHIS Canada page, July 30, 2025')}). For dogs older than ${C.noVaxUnderMonths} months, it is the only paper. Canada’s own agency, the Canadian Food Inspection Agency, publishes the rules for importing pets (${h.src('cfia_dogs', 'CFIA pets page')}), and the officer at the border has the last word.</p>
${h.table(['Animal', 'What Canada asks', 'USDA endorsement'], [[`Dog older than ${C.youngMonths} months`, `rabies certificate, vaccine within ${C.rabiesYears} years`, 'no'], [`Puppy under ${C.noVaxUnderMonths} months`, 'proof of age, no vaccine', 'no'], [`Puppy under ${C.youngMonths} months, unaccompanied`, `health certificate within ${C.youngUnaccHours} hours of arrival`, 'no'], ['Cat', 'rabies certificate with date and vaccine type', 'no'], [`Kitten under ${C.noVaxUnderMonths} months`, 'no vaccine', 'no']], 'Pets entering Canada from the US, APHIS page of July 30, 2025', ['l', 'l', 'l'])}
<h2>By car or by air</h2>
<p>Most families drive. By air, Delta and American fly pets in the cabin to Canada for ${K.usd(K.feeOr('delta', 'canada'))} each way; Southwest and Frontier fly no pets abroad. Delta charges its Canadian fee in Canadian dollars when leaving Canada.</p>
${h.mini('fee', { t: 'Fee to Canada by air', p: ['airline', 'legs'], d: { region: 'canada' } })}
<h2>Coming back to the US</h2>
<p>Canada is low risk for the CDC. A dog returning from Canada needs the CDC receipt, a microchip and an age of ${K.CDC.minAgeMonths} months, and may enter at any land crossing, airport or seaport (${h.src('cdc_faq', 'CDC FAQ')}). The same rules apply in a car or a bus, even if the dog stays in the vehicle. One receipt covers six months of returns from Canada, which matters for cottages and ski weekends.</p>
${h.mini('form', { t: 'Months left on your receipt', p: ['months'], d: { months: 4 } })}
<h2>Puppies and the return trip</h2>
<p>The trap is the puppy. Canada admits a puppy under ${C.noVaxUnderMonths} months without a vaccine, but the CDC refuses any dog under ${K.CDC.minAgeMonths} months at the US border. A family that drives up with a four-month-old puppy cannot bring it home until it turns six months. The ${h.a('cdc-dog-import-rules', 'CDC rules page')} explains the age rule, and the ${h.a('cdc-dog-import-form', 'form page')} the receipt.</p>
<h2>What the rabies certificate should show</h2>
<p>Bring the certificate itself, not a clinic invoice or an app screenshot. It should name the dog, show the date of the vaccine and the licensed veterinarian who gave it, and for a cat the type of vaccine as well, as the APHIS page asks. If the vaccine is close to its three-year limit, check the date against your return: a certificate valid on the way up but past ${C.rabiesYears} years on a later trip will not be accepted then. Keep a copy in the car and one on your phone.</p>
<h2>More than two dogs, or a dog to be sold</h2>
<p>The simple rule covers up to two pet dogs traveling with their owner, dogs older than ${C.youngMonths} months, assistance dogs and show dogs. A family with a third dog, or a breeder taking puppies to new owners, falls under other Canadian rules; read the CFIA pages before the trip. American’s pet page also reports that the Canadian Food Inspection Agency has suspended imports of commercial dogs from countries at high risk for rabies. A pet dog born and raised in the US is not concerned.</p>
<h2>A weekend across the border, counted</h2>
<p>A family from Detroit spending a weekend in Ontario with a three-year-old dog vaccinated last year needs, going in, the rabies certificate; coming back, the CDC receipt filed online before the trip. Nothing to endorse, no fee to USDA, nothing to pay the CDC. The same receipt covers the next weekends for ${K.CDC.receiptLowRiskMonths} months.</p>
`,
  tool: 'plan', toolArg: { dest: 'canada', pet: 'dog', vax: 'yes', days: 10 },
  related: ['cdc-dog-import-form', 'cdc-dog-import-rules', 'traveling-to-mexico-with-a-dog', 'delta-pet-policy'],
  sources: ['aphis_canada', 'cfia_dogs', 'cdc_faq', 'delta_pets'],
});
