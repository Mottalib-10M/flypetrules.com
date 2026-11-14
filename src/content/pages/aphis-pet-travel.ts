import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const F = K.F;
const AP = (K.P as unknown as { aphis: { poultry: string[]; birdsMaxAsPets: number; pets: string[] } }).aphis;

export default definePage({
  id: 'aphis-pet-travel', group: 'abroad', order: 13, slug: 'aphis-pet-travel',
  nav: 'USDA stamp on a pet health certificate (APHIS)', card: 'Leaving or entering the US with a pet: which agency is in charge, which paper USDA endorses and what it costs.',
  title: 'APHIS Pet Travel 2026: What USDA Checks, Signs and Charges',
  description: `APHIS pet travel in 2026: USDA endorses health certificates for a pet leaving the US (${K.usd(F.none)} without lab test), CDC handles dogs coming in, and when each applies.`,
  h1: 'APHIS pet travel: the USDA office that stamps your pet’s health certificate',
  intro: 'APHIS pet travel is the US Department of Agriculture (USDA) office that stamps, or “endorses”, the health certificate your vet fills in for a trip abroad. Pick the direction, the animal and the country below: the checker says who is in charge and what the stamp costs.',
  resume: `APHIS pet travel is the part of the US Department of Agriculture’s Animal and Plant Health Inspection Service that deals with privately owned companion animals crossing a border. Its role depends on the direction. For a pet leaving the United States, APHIS does not write the rules: the destination country does, and APHIS publishes them country by country, accredits the veterinarians who fill in the health certificates, and endorses the certificates that a country asks to see endorsed, online through the Veterinary Export Health Certification System or by mail. The endorsement costs ${K.usd(F.none)} for a certificate without a laboratory test and ${K.usd(F.t1_2)} with one or two tests, on the schedule of June 18, 2026. For a dog entering the United States, the CDC is the primary authority and asks a Dog Import Form receipt for every dog; APHIS handles other pets and points to the U.S. Fish and Wildlife Service for some birds and exotic animals. Poultry, and six or more birds, are not pets for APHIS. Pages read on November 14, 2026.`,
  faqs: [
    { q: 'What is APHIS pet travel?', a: 'It is the pet travel service of USDA APHIS, the Animal and Plant Health Inspection Service. For a pet leaving the US it publishes each country’s requirements, accredits veterinarians and endorses health certificates. For pets entering the US it gives the import rules of the animals it covers and sends dog owners to the CDC.', open: true },
    { q: 'Does APHIS issue the pet health certificate?', a: 'No. A USDA-accredited veterinarian issues and signs it; APHIS writes that an accredited vet must issue every live animal export certificate. APHIS then endorses it, when the destination requires an endorsement, which adds a USDA signature and seal to the vet’s. The original endorsed paper travels with the pet.' },
    { q: 'How do I find a USDA-accredited veterinarian?', a: 'APHIS links a search tool, part of its Veterinary Services Process Streamlining system, from its pet travel pages. Many clinics have an accredited vet, but not all, and the accreditation is personal to the vet. Call before booking the appointment and say which country the pet is going to.' },
    { q: 'Do I need APHIS to fly my pet within the United States?', a: 'Not for a USDA endorsement: endorsements are for certificates going abroad. Within the US, the airline’s own rules apply, and the destination state may set entry rules; APHIS reminds owners that they must meet both federal and state requirements. Hawaii sets its own rules for dogs and cats.' },
  ],
  body: (h) => `
<h2>APHIS pet travel: what counts as a pet</h2>
<p>APHIS defines a pet as a privately owned companion animal not intended for research or resale. Its list covers ${AP.pets.join(', ')} (${h.src('aphis_pettravel', 'APHIS, Travel with a pet, March 20, 2026')}). Poultry is not on it: chickens, ducks, geese, turkeys and other farm birds follow the rules for live poultry even when they live in a family home. On the import side APHIS adds that ${AP.birdsMaxAsPets + 1} or more pet birds no longer travel as pets (${h.src('aphis_import', 'APHIS import page, March 19, 2026')}).</p>
<h2>Leaving the US: the five steps APHIS describes</h2>
<p>APHIS sets the same order for every destination in its process overview (${h.src('aphis_process', 'APHIS process overview, June 18, 2026')}).</p>
${h.table(['Step', 'What happens', 'Who does it'], [
    ['1', 'Contact a USDA-accredited veterinarian as soon as the trip is decided', 'you'],
    ['2', 'Check the destination’s requirements, every trip, on its APHIS country page', 'you and the vet'],
    ['3', 'Fill in and sign the health certificate', 'the accredited vet'],
    ['4', 'Have USDA stamp it: your vet sends it online, or it is mailed to a USDA office; never both', 'the vet sends it, USDA stamps it'],
    ['5', 'Carry the original signed or endorsed paperwork with the pet', 'you'],
  ], 'APHIS pet travel process for a pet leaving the United States', ['l', 'l', 'l'])}
<p>For a mailed submission, APHIS strongly recommends an overnight express service and a shipper that gives a tracking number, and leaves the tracking record to the owner. Online, the vet pays from a USDA account; by mail, you pay by card on the APHIS payment form. A country missing from the APHIS list has its own case, which APHIS covers on a page about unknown requirements.</p>
<h2>When APHIS endorsement is needed</h2>
<p>The endorsement is the destination’s demand, not a US one. Among the countries this site covers, the European Union, Great Britain and Japan require it; Canada and Mexico do not. Canada asks a rabies certificate from a licensed vet; Mexico asks a screwworm inspection certificate for dogs, signed by a USDA-accredited vet within ${K.D.mexico.nwsDays} days of entry, and nothing for cats.</p>
${h.mini('aphis', { t: 'Another destination', p: ['dest', 'species'], d: { dest: 'japan' } })}
<h2>The APHIS fee</h2>
<p>APHIS charges per certificate, by the number of laboratory tests listed on it: ${K.usd(F.none)} without a test whatever the number of pets, ${K.usd(F.t1_2)} with one or two tests, ${K.usd(F.t3_6)} with three to six and ${K.usd(F.t7)} with seven or more, plus a small amount per additional pet when tests are listed (${h.src('aphis_fees', 'APHIS fee schedule')}). A rabies titer counts as a test; vaccines do not. There is no endorsement fee for a service dog that meets the definition of the ADA, the Americans with Disabilities Act. The veterinarian’s exam and paperwork are billed by the clinic, on top. The ${h.a('pet-health-certificate', 'health certificate page')} has the fee calculator by number of tests and pets.</p>
<h2>Entering the US: APHIS, CDC and the states</h2>
<p>For dogs, the CDC comes first: it is the primary authority for every dog entering or returning to the United States, and a dog that was recently in a high-risk country for rabies needs a Certification of U.S.-Issued Rabies Vaccination, submitted by a USDA-accredited vet before the dog leaves the country. Every dog also needs the receipt of the CDC Dog Import Form, for which CDC lists no fee; the ${h.a('cdc-dog-import-rules', 'CDC rules page')} goes through each case. Cats, ferrets and other pets follow the APHIS import page of their species, birds and exotic animals may also involve the U.S. Fish and Wildlife Service, and the destination state can add its own entry rules.</p>
<h2>The APHIS tools you will meet</h2>
<p>Three online tools come up on the APHIS pet travel pages. The Veterinary Export Health Certification System, VEHCS, is where an accredited vet submits a certificate for endorsement. The Veterinary Services Process Streamlining system, VSPS, carries the search for an accredited veterinarian. And the country pages, under pet travel from the United States to another country, give each destination’s forms. The owner uses the vet search and reads the country page; the submission itself is the veterinarian’s work, which is why choosing an accredited vet early is the step that decides the rest of the calendar.</p>
<h2>Planning around APHIS</h2>
<p>The tight deadlines come from the destination: for the European Union and Great Britain, the certificate is endorsed within ${K.D.eu.endorseWithinDays} days of arrival; for Japan, the blood sample is taken ${K.D.japan.waitDays} days at least before arrival. The ${h.a('traveling-to-europe-with-a-dog', 'Europe page')} counts the days for the EU.</p>
`,
  tool: 'aphis',
  related: ['pet-health-certificate', 'cdc-dog-import-rules', 'pet-passport', 'taking-a-dog-to-japan'],
  sources: ['aphis_pettravel', 'aphis_import', 'aphis_process', 'aphis_fees', 'aphis_export', 'aphis_mexico', 'aphis_canada', 'cdc_faq'],
});
