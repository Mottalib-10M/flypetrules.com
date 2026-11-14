import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const F = K.F;

export default definePage({
  id: 'pet-health-certificate', group: 'abroad', order: 13, slug: 'pet-health-certificate',
  nav: 'Pet health certificate: what your vet signs', card: 'Who signs an international health certificate, when USDA must endorse it, online or by mail, and the fee.',
  title: 'Pet Health Certificate 2026: USDA Endorsement and Its Fees',
  description: `Pet health certificate in 2026: signed by a USDA-accredited vet, endorsed by USDA APHIS for ${K.usd(F.none)} without lab test or ${K.usd(F.t1_2)} with one, and when it is needed.`,
  h1: 'Pet health certificate for international travel and the USDA stamp (endorsement)',
  intro: 'The international health certificate for a dog or cat leaving the US, and the USDA endorsement fee computed above from the APHIS schedule.',
  resume: `A pet health certificate for international travel is not a letter from your usual vet. It is the destination country’s own form, filled in and signed by a vet approved by USDA for travel papers (USDA-accredited), and for many countries endorsed afterwards by USDA APHIS, the Animal and Plant Health Inspection Service. The European Union, Great Britain and Japan require the endorsement; Canada and Mexico do not, and Mexico asks only a screwworm inspection certificate for dogs. The veterinarian sends the certificate for endorsement either online, through the Veterinary Export Health Certification System, or by mail with the original and a prepaid return label, not both. The APHIS fee, on the schedule of June 18, 2026, is ${K.usd(F.none)} per certificate when it lists no laboratory test, whatever the number of pets on it; ${K.usd(F.t1_2)} with one or two tests, plus ${K.usd(F.t1_2_extra)} per extra pet; ${K.usd(F.t3_6)} with three to six; ${K.usd(F.t7)} with seven or more. Vaccines are not tests. Service dogs under the ADA, the Americans with Disabilities Act, pay no endorsement fee. The vet’s own charge is separate.`,
  faqs: [
    { q: 'Who can sign an international health certificate for my pet?', a: 'A USDA-accredited veterinarian, and for some countries a military veterinarian. Many clinics have one; APHIS publishes a way to find one. Your usual vet may not be accredited, so ask early, because the certificate often has to be signed within days of the flight.', open: true },
    { q: 'How much does USDA charge to endorse a pet health certificate?', a: `${K.usd(F.none)} per certificate without a laboratory test, ${K.usd(F.t1_2)} with one or two tests, ${K.usd(F.t3_6)} with three to six and ${K.usd(F.t7)} with seven or more, plus a small amount per extra pet when there are tests. These are the amounts APHIS listed on June 18, 2026. No fee applies to a service dog under the ADA.` },
    { q: 'How long is a pet health certificate valid?', a: `It depends on the country. For the European Union and Great Britain, the certificate is valid ${K.D.eu.certValidDays} days after the vet signs it and USDA must endorse it within ${K.D.eu.endorseWithinDays} days before arrival. For a dog to Mexico, the screwworm certificate must be issued within ${K.D.mexico.nwsDays} days before entry.` },
  ],
  body: (h) => `
<h2>Pet health certificate: the three steps</h2>
<p>APHIS describes the process the same way for every destination (${h.src('aphis_export', 'APHIS pet travel page, August 14, 2026')}). First, find a USDA-accredited veterinarian as soon as the trip is decided and give the details: species, destination, transit countries, departure date, and whether the pet flies in the cabin, as baggage or as cargo. Second, the veterinarian checks the country’s requirements, which change, and fills in its certificate. Third, if the country requires it, the veterinarian submits it to APHIS for endorsement and keeps you informed.</p>
${h.table(['Destination', 'Certificate', 'USDA endorsement', 'Fee'], [['Canada', 'rabies certificate only', 'no', '$0'], ['Mexico', 'screwworm inspection, dogs only', 'no', '$0'], ['European Union', 'non-commercial EU certificate', 'yes', K.usd(F.none)], ['Great Britain', 'non-commercial GB certificate', 'yes', K.usd(F.none)], ['Japan', 'Form AC, with the titer result', 'yes', K.usd(F.t1_2)]], 'Certificate and USDA endorsement by destination, read November 13, 2026', ['l', 'l', 'l', 'r'])}
<h2>Online or by mail</h2>
<p>Online, the veterinarian submits through the Veterinary Export Health Certification System and pays from a deposit account or an APHIS user fee account. By mail, you send the original certificate to an endorsement office with a prepaid return label; APHIS recommends overnight express and accepts a user fee account or a card. Use one route, not both (${h.src('aphis_process', 'APHIS process overview, June 18, 2026')}). For the EU and Great Britain the endorsed certificate must carry USDA’s ink signature and embossed seal, even when submitted online, and the printed copy travels with the pet.</p>
<h2>The fee</h2>
<p>The fee is set per certificate by the number of laboratory tests it lists (${h.src('aphis_fees', 'APHIS fee schedule')}). A family taking two dogs to Italy on one certificate pays ${K.usd(K.endorse(0, 2))}; the same family going to Japan, where each certificate lists the titer test, pays ${K.usd(K.endorse(1, 2))} for two dogs on one certificate.</p>
${h.mini('endorse', { t: 'Fee for another certificate', p: ['tests', 'pets'], d: { tests: 1, pets: 2 } })}
<h2>Timing the certificate</h2>
<p>The deadlines are short and they come from the destination. For the European Union and Great Britain, the vet signs a certificate valid ${K.D.eu.certValidDays} days and USDA endorses it within ${K.D.eu.endorseWithinDays} days of arrival, so the vet visit falls in the last ten days or so before the flight. Book the appointment when you book the flight. The ${h.a('traveling-to-europe-with-a-dog', 'Europe')} and ${h.a('taking-a-dog-to-japan', 'Japan')} pages count the days.</p>
${h.mini('plan', { t: 'When to see the vet', p: ['dest', 'days'], d: { days: 20 } })}
<h2>One country, one form</h2>
<p>There is no universal pet health certificate. APHIS keeps a page for each of the 143 destinations it covers, with the form that country accepts, and the vet works from that page on the day the certificate is filled in, since countries change their rules. Give the vet every country on the route, including the transit ones: a connection in a country with its own rules may need papers too. The European Union replaced its non-commercial certificate models on ${K.day(K.D.eu.newCertSince)}, a reminder that a form printed last year may no longer be valid.</p>
<h2>Pet or commercial</h2>
<p>The EU and British non-commercial certificates cover a family move: five pets at most, traveling with the owner, or with a person the owner designates within five days of the pet. Beyond that, or when the pet is being sold or rehomed, the commercial rules apply, with other forms and other deadlines. This site covers the non-commercial case only.</p>
<h2>A second endorsed paper for some trips</h2>
<p>A dog leaving for a country on the CDC’s high-risk list needs, for its return, a Certification of U.S.-issued Rabies Vaccination completed by an accredited vet and endorsed by USDA before the dog leaves. It is a separate document from the destination’s certificate, and it cannot be obtained once abroad; see the ${h.a('cdc-dog-import-rules', 'CDC rules page')}.</p>
`,
  tool: 'endorse',
  related: ['pet-passport', 'traveling-to-europe-with-a-dog', 'how-much-does-it-cost-to-fly-a-dog', 'cdc-dog-import-rules'],
  sources: ['aphis_export', 'aphis_process', 'aphis_fees', 'aphis_france', 'aphis_uk', 'aphis_japan', 'aphis_canada', 'aphis_mexico'],
});
