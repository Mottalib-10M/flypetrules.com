import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.D.eu, T = K.D.tapeworm;
const eu = K.feeOr('delta', 'europe');

export default definePage({
  id: 'traveling-to-europe-with-a-dog', group: 'abroad', order: 17, slug: 'traveling-to-europe-with-a-dog',
  nav: 'Traveling to Europe with a dog', card: 'Microchip, rabies vaccine, 21 days, the EU certificate and the USDA stamp within 10 days, counted for your date.',
  title: 'Traveling to Europe With a Dog 2026: Chip, Rabies, 21 Days',
  description: `Traveling to Europe with a dog in 2026: chip then rabies vaccine, ${E.waitDays} days of wait, EU certificate endorsed by USDA within ${E.endorseWithinDays} days of arrival for ${K.usd(K.F.none)}, tapeworm.`,
  h1: 'Traveling to Europe with a dog: the EU rules in order',
  intro: 'Traveling to Europe with a dog or cat from the US, under the APHIS page for France updated September 1, 2026: enter your date above.',
  resume: `Traveling to Europe with a dog follows one order that cannot be changed. First a microchip, ISO standard with 15 digits, scanned by the veterinarian before the rabies vaccine; a vaccine given before the chip does not count. Then the rabies vaccine, and a wait of at least ${E.waitDays} days after a first vaccine, longer if the manufacturer says so; a booster given before the previous vaccine lapses counts at once. Then the non-commercial EU health certificate, filled in by a vet approved by USDA for travel papers (USDA-accredited), valid ${E.certValidDays} days after signature, and endorsed by USDA APHIS within ${E.endorseWithinDays} days of the pet’s arrival in the EU, for ${K.usd(K.F.none)}. The certificate covers up to five pets traveling with the owner, or with a person the owner designates within five days, and then allows travel between EU countries for up to ${E.onwardMonths} months while the vaccine stays valid. No blood test is required for a pet from the US. Dogs going to ${T.countries.join(', ')} also need a tapeworm dose given ${T.minDays} to ${T.maxDays} days before entry. New certificate models apply since ${K.day(E.newCertSince)}.`,
  faqs: [
    { q: 'How far in advance should I prepare to take my dog to Europe?', a: `If the dog has no valid rabies vaccine given after its microchip, at least ${E.waitDays} days plus the time to see the vet, so a month is a safe minimum. If the vaccine is valid, the work happens in the last ${E.endorseWithinDays} days: the certificate is signed and endorsed by USDA within that window before arrival.`, open: true },
    { q: 'Does my dog need a rabies titer test for Europe?', a: 'Not when it travels from the United States. The APHIS page for France mentions no titer test or other blood test for dogs or cats coming from the US. The titer becomes necessary for pets coming from countries the EU does not list, which is not the case of the US.' },
    { q: 'Can my dog fly in the cabin to Europe?', a: `On Delta, yes, for ${K.usd(eu)} each way, subject to Delta’s cabin limits and except to the United Kingdom and Iceland. American takes no carry-on pet across the Atlantic, and Southwest and Frontier fly no pets abroad. European airlines set their own rules, not covered here.` },
  ],
  body: (h) => `
<h2>Traveling to Europe with a dog: four steps in order</h2>
<p>The rules below are those of the APHIS page for France, which applies the EU model (${h.src('aphis_france', 'APHIS France page, September 1, 2026')}). The other EU countries use the same certificate; check your country’s own APHIS page, because a few add rules.</p>
${h.table(['Step', 'Rule', 'When'], [['1. Microchip', 'ISO, usually 15 digits, scanned before the vaccine', 'before or on the day of the vaccine'], ['2. Rabies vaccine', `wait ${E.waitDays} days after a first vaccine`, `at least ${E.waitDays} days before travel`], ['3. Health certificate', `non-commercial EU model, valid ${E.certValidDays} days`, 'signed by a USDA-accredited vet'], ['4. USDA endorsement', `ink signature and seal, ${K.usd(K.F.none)}`, `within ${E.endorseWithinDays} days before arrival`]], 'Dog or cat from the US to the European Union', ['l', 'l', 'l'])}
<p>If the existing chip is not ISO standard, carry a reader that can read it or have a second, ISO chip implanted, with both numbers on the certificate. The owner signs the declaration page, which travels with the pet with the printed, endorsed certificate.</p>
<h2>The tapeworm countries</h2>
<p>Dogs entering ${T.countries.join(', ')} need a tapeworm dose, given ${T.minDays} to ${T.maxDays} days (24 to 120 hours) before arrival and recorded on the certificate (${h.src('aphis_tapeworm', 'APHIS page, September 3, 2026')}). The APHIS page names a USDA-accredited vet in one place and an EU vet in another, so ask your vet which applies to your route. France, Italy, Spain and Germany do not ask it.</p>
${h.mini('plan', { t: 'Countdown to Ireland or Finland', p: ['days'], d: { dest: 'tapeworm', days: 10 } })}
<h2>The flight</h2>
<p>Delta flies pets in the cabin to most of Europe for ${K.usd(eu)} each way; its list of refused destinations includes the United Kingdom and Iceland. American refuses carry-on pets on trans-Atlantic trips. A round trip to Paris with one dog on Delta costs ${K.usd(eu * 2)} in airline fees and ${K.usd(K.F.none)} of USDA endorsement, before the vet.</p>
${h.mini('cost', { t: 'Fees for your trip to Europe', p: ['airline', 'legs'], d: { region: 'europe', dest: 'eu' } })}
<h2>Coming back</h2>
<p>The EU countries are low risk for the CDC, so a dog that spent the last six months only there and in the US needs its CDC Dog Import Form receipt, a microchip and an age of ${K.CDC.minAgeMonths} months. Families staying long can ask an EU vet for a ${h.a('pet-passport', 'pet passport')}. Great Britain has separate rules: see the ${h.a('taking-a-dog-to-the-uk', 'Great Britain page')}.</p>
<h2>A December trip to Paris, counted</h2>
<p>Take a dog landing in Paris on Friday, December 18, 2026, with no rabies vaccine yet. The chip and the vaccine must be done by Friday, November 27, to leave the ${E.waitDays} days. The accredited vet fills in the certificate on December 8 or later, and USDA endorses it within the same ${E.endorseWithinDays} days before arrival. Over the holidays, endorsement offices and mail are slower, so ask the vet to submit online as soon as the certificate is signed. Once in France, the same certificate carries the dog to Italy or Spain until mid-June 2027, as long as the vaccine stays valid.</p>
<h2>Who travels with the pet</h2>
<p>The non-commercial certificate assumes a family trip: five pets at most, with the owner on the same journey, or with a person the owner names in writing, traveling within five days of the pet. A dog flying alone as cargo weeks after its owners, or a sixth pet, falls under the commercial rules, which use other forms and are not covered here. USDA’s ink signature and embossed seal are required on that printed certificate even when the vet submitted it online, so allow time for the paper to come back before the flight, by mail or at an office.</p>
`,
  tool: 'plan', toolArg: { dest: 'eu', pet: 'dog', vax: 'no', days: 30 },
  related: ['pet-passport', 'pet-health-certificate', 'taking-a-dog-to-the-uk', 'delta-pet-policy'],
  sources: ['aphis_france', 'aphis_tapeworm', 'aphis_fees', 'aphis_passport', 'delta_pets', 'aa_pets', 'cdc_faq'],
});
