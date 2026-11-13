import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.D.eu;

export default definePage({
  id: 'pet-passport', group: 'abroad', order: 14, slug: 'pet-passport',
  nav: 'Pet passport', card: 'Why there is no US pet passport, what replaces it, and when an EU passport works for a return to Europe.',
  title: 'Pet Passport 2026: What US Travelers Get Instead of One',
  description: `Pet passport in 2026: the US issues none; a US pet enters the EU with a USDA-endorsed certificate valid ${E.certValidDays} days; an EU passport needs a valid EU vaccine.`,
  h1: 'Pet passport: what a US traveler actually needs',
  intro: 'A pet passport is a European document that no one can issue in the United States: here is what replaces it, counted in days above.',
  resume: `A pet passport, in the sense travelers mean, is the European Union pet passport: a booklet issued by an official veterinarian in an EU member state or another designated country, recording the microchip and the rabies vaccines. USDA APHIS answers the question directly: it cannot be obtained in the United States. A dog or cat leaving the US for the European Union travels instead with the non-commercial EU health certificate, filled in by a USDA-accredited veterinarian, valid ${E.certValidDays} days from signature and endorsed by USDA within ${E.endorseWithinDays} days of arrival, for ${K.usd(K.F.none)}. Once in the EU, that certificate also covers travel between member states for up to ${E.onwardMonths} months from entry, as long as the rabies vaccine stays valid. An American family living in Europe can get an EU passport there. It replaces the certificate for a return to the EU only if the rabies vaccine recorded in it by an EU veterinarian is still valid; a US vaccine or an expired one brings back the certificate. The EU passport does nothing for entry into the United States, which follows the CDC rules.`,
  faqs: [
    { q: 'Can I get a pet passport in the United States?', a: 'No. USDA APHIS states that an EU pet passport cannot be obtained in the United States; only an official veterinarian in an EU member state or another designated country issues one. What a US pet uses instead is the destination’s health certificate, signed by a USDA-accredited vet and, for the EU, endorsed by USDA.', open: true },
    { q: 'Can my dog return to Europe with its EU pet passport?', a: 'For a non-commercial move of five pets or fewer traveling with the owner, yes, if the passport records a rabies vaccine given by an EU veterinarian that is still valid. If the vaccine expired or was given in the US, the dog needs the EU health certificate again, endorsed by USDA.' },
    { q: 'How long can my dog travel in Europe on its US certificate?', a: `Up to ${E.onwardMonths} months from the day it entered the EU, between member states, as long as its rabies vaccine stays valid, according to the APHIS page for France updated September 1, 2026. Some countries add a tapeworm dose for dogs: Ireland, Finland, Malta and Norway.` },
  ],
  body: (h) => `
<h2>Pet passport: what exists and what does not</h2>
<p>The pet passport travelers ask about is the EU pet passport. APHIS explains it on a page of its own (${h.src('aphis_passport', 'APHIS page on EU pet passports, September 1, 2026')}): it is issued by an official veterinarian in an EU member state or another designated country, and it cannot be obtained in the United States.</p>
${h.table(['Situation', 'Document that works'], [['US pet going to the EU', 'non-commercial EU health certificate, endorsed by USDA'], ['US pet moving between EU countries after arrival', `the same certificate, up to ${E.onwardMonths} months from entry`], ['Pet with an EU passport returning to the EU', 'the passport, if the EU-recorded rabies vaccine is still valid'], ['Pet with an EU passport, US or expired vaccine', 'a new EU health certificate'], ['Any dog entering the US', 'CDC Dog Import Form receipt; the passport does not replace it']], 'Pet passport or certificate: which one for which trip', ['l', 'l'])}
<h2>The certificate that replaces it</h2>
<p>For a trip from the US, the certificate is the EU’s non-commercial model for dogs, cats and ferrets, used when the owner or a person the owner designates travels within five days of the pet and five pets or fewer move together. The European Union introduced new certificate models on ${K.day(E.newCertSince)}; certificates already in process could be endorsed until September 30, 2026 (${h.src('aphis_france', 'APHIS France page')}). Your accredited vet uses the current model.</p>
${h.mini('plan', { t: 'Days needed before the flight', p: ['vax', 'days'], d: { dest: 'eu' } })}
<h2>For Americans living in Europe</h2>
<p>A family settled in an EU country can ask an official vet there for a passport. It makes return trips to the EU simpler, as long as the rabies vaccine stays up to date with an EU vet. The trips to the US are another matter: a dog entering the United States needs the CDC receipt, a microchip and an age of ${K.CDC.minAgeMonths} months, and the European countries are low risk for the CDC, so nothing more. The ${h.a('cdc-dog-import-rules', 'CDC rules page')} has the details.</p>
<h2>Great Britain is not the EU</h2>
<p>Great Britain has its own certificate and its own tapeworm rule for dogs, and none of the five US airlines read here offers a pet in the cabin to the United Kingdom. The ${h.a('taking-a-dog-to-the-uk', 'Great Britain page')} covers it, and the ${h.a('traveling-to-europe-with-a-dog', 'Europe page')} the EU countries.</p>
<h2>A family moving to Europe, step by step</h2>
<p>Take a family flying to Lisbon on June 1 with a dog that has never had a rabies vaccine. The microchip goes in first, then the vaccine, by May 11 at the latest, to leave the ${E.waitDays} days the EU asks. The vet visit for the certificate falls in the last ${E.endorseWithinDays} days, from May 22, and the certificate goes to USDA for endorsement in the same window; with mail delays, the online route through the vet is the safer one. On June 1 the dog enters the EU with its endorsed certificate, which covers trips to other EU countries until early December, as long as the vaccine stays valid.</p>
<p>Settled in Portugal, the family asks an official vet there for an EU passport, ideally when the rabies vaccine is renewed by that vet. From then on, a summer trip home and back to Lisbon uses the passport for the return to the EU, instead of a new certificate and a new endorsement.</p>
<h2>Moving between EU countries</h2>
<p>Inside the EU, the certificate or the passport carries the dog across borders. Four countries add a tapeworm dose for dogs, given ${K.D.tapeworm.minDays} to ${K.D.tapeworm.maxDays} days before entry and recorded on the document: ${K.D.tapeworm.countries.join(', ')}. A road trip from France to Ireland needs a vet stop on the way.</p>
`,
  tool: 'plan', toolArg: { dest: 'eu', pet: 'dog', vax: 'yes', days: 30 },
  related: ['traveling-to-europe-with-a-dog', 'pet-health-certificate', 'taking-a-dog-to-the-uk', 'cdc-dog-import-rules'],
  sources: ['aphis_passport', 'aphis_france', 'cdc_faq'],
});
