import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const U = K.D.uk;

export default definePage({
  id: 'taking-a-dog-to-the-uk', group: 'abroad', order: 18, slug: 'taking-a-dog-to-the-uk',
  nav: 'Taking a dog to the UK', card: 'The Great Britain certificate, the 15-week vaccine age, the tapeworm dose 24 to 120 hours before arrival, and the cabin problem.',
  title: 'Taking a Dog to the UK 2026: Certificate, Tapeworm, Timing',
  description: `Taking a dog to the UK in 2026: chip, rabies vaccine at ${U.minVaxWeeks} weeks or older, ${U.waitDays} days of wait, certificate endorsed by USDA, tapeworm dose ${U.tapeMinH} to ${U.tapeMaxH} hours before.`,
  h1: 'Taking a dog to the UK: the Great Britain rules from the US',
  intro: 'Taking a dog to the UK from the US, under the APHIS page for Great Britain updated October 6, 2026: the planner above counts back from your date.',
  resume: `Taking a dog to the UK from the United States means meeting the Great Britain rules that APHIS published on October 6, 2026. The dog needs an ISO microchip, implanted on or before the day of the rabies vaccine, and a rabies vaccine given at ${U.minVaxWeeks} weeks of age or older. After a first vaccine, the dog waits at least ${U.waitDays} days, counting the day of the vaccine as day zero. A vet approved by USDA for travel papers (USDA-accredited) then fills in the non-commercial certificate for Great Britain, valid ${U.certValidDays} days after signature, and USDA APHIS endorses it within ${U.endorseWithinDays} days of arrival, for ${K.usd(K.F.none)} when no laboratory test is listed. Dogs, not cats, also need a tapeworm dose against Echinococcus multilocularis, given by the accredited vet between ${U.tapeMinH} and ${U.tapeMaxH} hours before arrival and recorded on the certificate. No titer test is asked for a pet from the US. The hard part is the flight: none of the five US airlines we checked offers a pet in the cabin to the United Kingdom, and APHIS notes that each airline sets its own rules.`,
  faqs: [
    { q: 'When must the tapeworm dose be given before a flight to the UK?', a: `Between ${U.tapeMinH} and ${U.tapeMaxH} hours before the dog arrives in Great Britain, that is one to five days, by a USDA-accredited veterinarian who records it on the certificate. Too early or too late and the certificate fails. Cats do not need it. For a long layover, count from the arrival time, not the departure.`, open: true },
    { q: 'Can my dog fly in the cabin from the US to London?', a: 'Not on Delta, American, Southwest, Alaska or Frontier. Delta lists the United Kingdom among the destinations closed to pets in the cabin; American takes no carry-on pets across the Atlantic; the other three fly no pets abroad. Other carriers and cargo services set their own rules, which this site has not read.' },
    { q: 'How old must a puppy be to travel to the UK?', a: `Old enough to have had its rabies vaccine at ${U.minVaxWeeks} weeks or older and then waited ${U.waitDays} days, so about four months at the earliest. Remember the way back: the CDC admits no dog under ${K.CDC.minAgeMonths} months into the US, so a young puppy taken to Britain cannot return before that age.` },
  ],
  body: (h) => `
<h2>Taking a dog to the UK: the five steps</h2>
<p>The rules below come from the APHIS page for Great Britain, which covers England, Scotland and Wales (${h.src('aphis_uk', 'APHIS Great Britain page, October 6, 2026')}). Northern Ireland follows the EU tapeworm rule; see the ${h.a('traveling-to-europe-with-a-dog', 'Europe page')}.</p>
${h.table(['Step', 'Rule', 'When'], [['1. Microchip', 'ISO, 15 digits', 'on or before the vaccine day'], ['2. Rabies vaccine', `pet ${U.minVaxWeeks} weeks old or more`, `${U.waitDays} days before arrival at least`], ['3. Certificate', `Great Britain non-commercial model, valid ${U.certValidDays} days`, 'signed by a USDA-accredited vet'], ['4. USDA endorsement', `ink signature and seal, ${K.usd(K.F.none)}`, `within ${U.endorseWithinDays} days before arrival`], ['5. Tapeworm dose, dogs', 'recorded on the certificate', `${U.tapeMinH} to ${U.tapeMaxH} hours before arrival`]], 'Dog from the US to Great Britain, APHIS page of October 6, 2026', ['l', 'l', 'l'])}
<p>A booster given before the previous rabies vaccine expires counts at once; a lapsed vaccine starts the ${U.waitDays}-day wait again. The certificate travels in print with the dog, with the owner’s declaration.</p>
<h2>Timing the vet visit</h2>
<p>The windows overlap: the certificate is endorsed within ${U.endorseWithinDays} days of arrival and the tapeworm dose falls in the last five days. One visit two to four days before the flight can cover both, leaving time to send the certificate to USDA. Many owners use the online route, through the vet, to save mail delays.</p>
${h.mini('plan', { t: 'Countdown to Great Britain', p: ['vax', 'days'], d: { dest: 'uk', vax: 'yes', days: 8 } })}
<h2>The flight: the real obstacle</h2>
<p>Delta’s list of destinations closed to cabin pets includes the United Kingdom (${h.src('delta_pets', 'Delta pet page')}). American refuses carry-on pets on trans-Atlantic flights (${h.src('aa_pets', 'American pet page')}). Southwest, Alaska and Frontier fly no pets outside the United States. Owners therefore look at cargo services and at other carriers, whose rules and prices are not covered here; check them before booking. Assistance dogs follow separate airline rules.</p>
<h2>The cost on paper</h2>
<p>With a valid vaccine, the official costs are the USDA endorsement, ${K.usd(K.F.none)} for a certificate without laboratory test, plus the vet visits. Two dogs on one certificate still pay ${K.usd(K.endorse(0, 2))}.</p>
${h.mini('endorse', { t: 'USDA fee for the UK certificate', p: ['pets'], d: { tests: 0, pets: 1 } })}
<h2>Coming back to the US</h2>
<p>The United Kingdom is low risk for the CDC. A dog that spent the last six months only in Britain and the US needs its CDC Dog Import Form receipt, a microchip and an age of ${K.CDC.minAgeMonths} months (${h.src('cdc_faq', 'CDC FAQ')}). The ${h.a('cdc-dog-import-form', 'form page')} explains it.</p>
<h2>A London trip, counted</h2>
<p>Take a dog arriving at London on Saturday, December 12, 2026, already vaccinated. The certificate can be endorsed from December 2, ten days before arrival. The tapeworm dose must be given 24 to 120 hours before landing, so between Monday, December 7 and Friday, December 11 for a morning landing; an overnight flight that leaves on Friday evening moves those hours, so count from the landing time. A single vet visit on Tuesday, December 8 can cover the dose and the certificate, which then goes to USDA. If the flight is delayed by more than a day, the dose may fall out of its window.</p>
<h2>Cats to Great Britain</h2>
<p>A cat follows the same chip, vaccine, ${U.waitDays}-day and certificate rules, without the tapeworm dose. Cats face the same flight problem as dogs: none of the five US airlines we checked carries them in the cabin to the United Kingdom.</p>
<h2>Three checks before the airport</h2>
<p>Read the printed certificate once more before leaving home. The date of the rabies vaccine must be on or after the date the chip was implanted. The tapeworm dose must show a date and a time that fall ${U.tapeMinH} to ${U.tapeMaxH} hours before your landing. USDA’s endorsement must be dated within ${U.endorseWithinDays} days of arrival, with the ink signature and the seal. Each of these is printed on the document; a mistake found at home can still be fixed by your vet, one found at arrival cannot.</p>
`,
  tool: 'plan', toolArg: { dest: 'uk', pet: 'dog', vax: 'no', days: 30 },
  related: ['traveling-to-europe-with-a-dog', 'pet-health-certificate', 'pet-passport', 'cdc-dog-import-form'],
  sources: ['aphis_uk', 'aphis_fees', 'delta_pets', 'aa_pets', 'cdc_faq'],
});
