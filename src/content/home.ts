/** Text of the home page (the pillar). Every figure comes from the kit. */
import { KIT as K } from '../lib/kit';
import type { FAQ, Helpers } from '../lib/page-types';

const DL = K.A('delta'), AA = K.A('american'), WN = K.A('southwest'), AS = K.A('alaska'), F9 = K.A('frontier');
const dl = K.feeOr('delta', 'us'), aa = K.feeOr('american', 'us'), wn = K.feeOr('southwest', 'us'), as = K.feeOr('alaska', 'us'), f9 = K.feeOr('frontier', 'us');
const RT = dl * K.EX.legs;
const EU = K.D.eu, UK = K.D.uk, JP = K.D.japan, MX = K.D.mexico;

/** The value sentence (RECETTE §2.4), shown on the home page, the About page and the method page. */
export const VALUE = `Airline pet fees are scattered over five websites and copied, often wrong, by blogs paid per click on a pet carrier. Entry rules sit on two government sites written for veterinarians. This site reads both at the source, the CDC and USDA APHIS pages and each airline’s own pet page or contract of carriage, and puts them side by side: the fee for your route, whether your carrier fits, what the destination asks and how many days it takes, and what your dog needs to come back into the United States. Every figure carries its date.`;

export const HOME = {
  title: 'Pet Travel 2026: Airline Pet Fees, Dogs and Cats From the US',
  description: 'Airline pet fees in 2026 for Delta, American, Southwest, Alaska and Frontier by route, carrier limits, CDC rules to bring a dog back and USDA certificates.',
  h1: 'Pet travel: airline pet fees and rules for a dog or cat',
  answer: `Pet travel fees for a dog or cat in the cabin within the mainland US run from ${K.usd(as)} each way on Alaska to ${K.usd(dl)} on Delta and American. Abroad, the destination’s paperwork and the CDC rules for the return weigh more than the fee.`,
  intro: 'Pick the airline and the route: the calculator gives the in-cabin pet fee and compares the five airlines we read.',
  resume: `Airline pet fees on US airlines are charged each way, per pet carrier, and only for a small pet that rides in a carrier under the seat in front of you. On flights within the mainland United States, read on November 13, 2026, Alaska charges ${K.usd(as)}, Southwest ${K.usd(wn)}, Frontier ${K.usd(f9)}, and Delta and American ${K.usd(dl)}. A round trip with one dog on Delta therefore costs ${K.usd(RT)} in fees. Southwest and Frontier take no pet on international flights, American takes none in the cabin across the Atlantic, and Delta charges ${K.usd(K.feeOr('delta', 'europe'))} each way abroad but refuses pets in the cabin to the United Kingdom and Hawaii. Large dogs no longer fly as checked baggage on Delta or American unless the owner is on military or State Department orders. Leaving the country adds a health certificate and, for the European Union, Great Britain or Japan, a USDA endorsement that costs ${K.usd(K.F.none)} or more. Coming back, every dog needs a CDC Dog Import Form receipt and must be at least ${K.CDC.minAgeMonths} months old.`,
  faqs: [
    { q: 'Which airline is cheapest for a dog in the cabin?', a: `Within the mainland US, Alaska at ${K.usd(as)} each way per carrier, then Southwest at ${K.usd(wn)}, Frontier at ${K.usd(f9)}, Delta and American at ${K.usd(dl)}. Between the Hawaiian islands, Southwest and Alaska charge ${K.usd(K.feeOr('southwest', 'hawaiiInter'))}. These were the fees on each airline’s page or contract on November 13, 2026.`, open: true },
    { q: 'Can my dog sit on my lap during the flight?', a: 'No. On the five airlines read here, a pet in the cabin travels in a carrier that stays closed and under the seat in front of you for the whole flight, including taxi, takeoff and landing. Southwest and Alaska write that the head and tail must stay inside the carrier, also at the gate.' },
    { q: 'Is a large dog allowed to fly with me?', a: 'Only in the cabin if it fits a carrier under the seat. Delta ships pets by cargo only for active US military and State Department staff with transfer orders, and American takes checked pets only for the same travelers. Southwest and Frontier carry no pet in the hold. Alaska still accepts pets in the baggage compartment.' },
    { q: 'Does this site sell pet travel services?', a: 'No. Radif Partners publishes the site; it is not an airline, a veterinarian, a pet shipper or a government agency, receives nothing from any of them and carries no affiliate link. The calculators run in your browser and ask for no name, phone number or e-mail address.' },
    { q: 'Do I need a health certificate to fly within the US?', a: 'The five airlines read here wrote no general health certificate requirement for a pet in the cabin within the mainland. Alaska reserves the right to ask for one. Hawaii is the exception: the state has its own entry rules for dogs and cats, set by the Hawaii Department of Agriculture.' },
    { q: 'How far ahead should I book my pet on the flight?', a: `As soon as you have your own ticket: every airline caps the number of pets per flight, first come first served. Southwest may limit a flight to ${WN.perFlight.replace('up to ', '')}, and Delta to 2 in First and 4 in the main cabin. Southwest books pets only by phone; Frontier lets you add a pet online.` },
  ] as FAQ[],
  /** Right under the calculator. */
  start: (h: Helpers) => `
<h2>Airline pet fees on your route: how to read the result</h2>
<p>The example is a small dog flying Delta in the cabin, round trip within the mainland United States: ${K.usd(dl)} each way, ${K.usd(RT)} in all. Change the airline or the route and the table under the result compares the five airlines for the same trip. A fee shown as “No pet in the cabin” means the airline refuses pets on that route; “Not published” means we found no fee on the pages we could read, so the airline must tell you.</p>
<p>The fee is per carrier and per direction, not per ticket. Two pets in one carrier count as one fee on Southwest and Alaska, which accept two animals of the same species in a carrier; Delta allows it only for two young pets of the same breed. A connection does not double the fee on these airlines, but a long stopover can: American writes that its fees apply to each destination without a stopover of four hours or more.</p>
<p>Before you pay, measure the carrier. The ${h.a('dog-carrier-size-airline', 'carrier size checker')} compares it with the published maximum of each airline, the ${h.a('pet-carrier', 'pet carrier page')} gives the largest size two airlines of one trip both accept, and the ${h.a('dog-carrier', 'dog carrier page')} sizes a carrier from your dog’s measurements with the IATA formula.</p>
${h.mini('carrier', { t: 'Will your carrier fit?', p: ['l', 'w', 'h'] })}
`,
  /** Open sections. */
  guide: (h: Helpers) => `
<h2>Pet travel by air: what each airline allows in the cabin</h2>
<p>All five airlines carry small cats and dogs in the cabin; they differ on the other animals, the carrier and the routes. Delta also accepts household birds within the contiguous US, and Frontier rabbits, guinea pigs, hamsters and small birds. Alaska accepts only cats and dogs in the cabin and wants a soft carrier no larger than ${K.in(AS.carrier!.soft!)}. American publishes three sizes depending on the carrier and the aircraft, and a weight limit of ${AA.maxLb} pounds for the pet and the carrier together, the only weight limit among the five.</p>
${h.table(['Airline', 'In the cabin, within the US', 'Carrier limit', 'Abroad'], [
    [DL.name, `${K.usd(dl)} each way`, `under the seat; ${K.in(DL.carrierRec!)} soft recommended`, `${K.usd(K.feeOr('delta', 'europe'))}; not to the UK or Hawaii`],
    [AA.name, `${K.usd(aa)} each way`, `soft ${K.in(AA.carrier!.soft!)}, ${AA.maxLb} lb`, `${K.usd(K.feeOr('american', 'mexico'))} to Mexico, Canada, Caribbean; none across the Atlantic`],
    [WN.name, `${K.usd(wn)} each way`, 'under the seat; no size in its contract', 'no pets on international trips'],
    [AS.name, `${K.usd(as)} each way`, `soft only, ${K.in(AS.carrier!.soft!)}`, 'cargo to Canada, Mexico, Costa Rica'],
    [F9.name, `${K.usd(f9)} each way`, `soft ${K.in(F9.carrier!.soft!)}`, 'no pets on international flights'],
  ], 'Pet rules read on each airline’s page or contract of carriage, November 13, 2026', ['l', 'r', 'l', 'l'])}
<p>United, JetBlue and Allegiant also carry pets, but their sites refused our reading or did not answer, so this site gives no figure for them rather than one copied from a blog. The ${h.a('airline-pet-policy', 'airline comparison')} explains the rest of each policy, and each airline has its own page: ${h.a('delta-pet-policy', 'Delta')}, ${h.a('american-airlines-pet-policy', 'American')}, ${h.a('southwest-pet-policy', 'Southwest')}, ${h.a('alaska-airlines-pet-policy', 'Alaska')} and ${h.a('frontier-pet-policy', 'Frontier')}.</p>
<h2>Bringing a dog back into the United States</h2>
<p>Since August 2024 the CDC requires the same thing of every dog that enters the country, even one that left a week ago: a receipt from the CDC Dog Import Form, a microchip, an age of at least ${K.CDC.minAgeMonths} months, and a healthy look (${h.src('cdc_faq', 'CDC FAQ, updated August 27, 2026')}). The form asks for no fee in the instructions we read. For a dog that spent the last six months only in countries the CDC counts as low risk, such as Canada, Mexico, the countries of the European Union or Japan, that is all. The receipt then stays valid for ${K.CDC.receiptLowRiskMonths} months of entries from the same country.</p>
<p>A dog that was in one of the ${K.HR.length} high-risk countries needs more: a CDC rabies vaccination form completed by a USDA-accredited veterinarian and endorsed by USDA before the dog left the US, or, if it was vaccinated abroad, a reservation at one of ${K.CDC.acfCount} CDC-registered animal care facilities at ${K.CDC.acf.length} airports. The ${h.a('cdc-dog-import-rules', 'CDC rules page')} has the checker.</p>
${h.mini('cdc', { t: 'What does your dog need to come back?', p: ['country', 'vax'] })}
<h2>Taking a pet abroad: the deadlines that decide the date</h2>
<p>A foreign country sets its own rules, and USDA APHIS publishes them destination by destination. Three patterns cover most trips from the US. Mexico asks for a screwworm inspection certificate for dogs, signed by a USDA-accredited vet no more than ${MX.nwsDays} days before entry, since ${K.day(MX.nwsSince)}; cats need nothing. Canada wants proof of a rabies vaccine given within ${K.D.canada.rabiesYears} years. The European Union and Great Britain want a microchip, then a rabies vaccine, then ${EU.waitDays} days of waiting, then a health certificate that USDA endorses within ${EU.endorseWithinDays} days of arrival.</p>
<p>Japan is the long one: two vaccines, a blood test showing at least ${JP.titer} IU/ml, and ${JP.waitDays} days between the blood sample and arrival, or quarantine for the days missing. Great Britain adds a tapeworm dose given by a vet ${UK.tapeMinH} to ${UK.tapeMaxH} hours before a dog arrives. The planner counts these days for you.</p>
${h.mini('plan', { t: 'How many days do you need?', p: ['dest', 'days'] })}
`,
  /** Folded sections (<details>, content kept in the HTML). */
  folds: [
    { id: 'cost', title: 'What flying with a dog costs in all', html: (h: Helpers) => `
<p>The airline fee is the visible part. For a trip abroad, add the veterinarian’s exam and certificate, priced by each clinic, and the USDA endorsement: ${K.usd(K.F.none)} for a certificate without a laboratory test, ${K.usd(K.F.t1_2)} with one or two tests, such as the rabies titer that Japan requires (${h.src('aphis_fees', 'APHIS fee schedule')}). The CDC Dog Import Form has no fee listed. A trip to France with one dog on Delta, round trip, comes to ${K.usd(K.feeOr('delta', 'europe') * 2)} of airline fees and ${K.usd(K.F.none)} of USDA endorsement before the vet’s bill.</p>
<p>The ${h.a('how-much-does-it-cost-to-fly-a-dog', 'cost calculator')} adds these lines and lets you enter your vet’s price. It does not include a pet shipper, which some families use for a large dog now that most airlines refuse checked pets: those quotes are private.</p>
${h.mini('cost', { t: 'Fees for a trip abroad', p: ['dest'], d: { region: 'europe', dest: 'eu' } })}
` },
    { id: 'documents', title: 'Health certificates, USDA endorsement and the pet passport', html: (h: Helpers) => `
<p>The health certificate for a trip abroad is the destination’s own form, filled in by a USDA-accredited veterinarian, not by any vet. For the European Union and Great Britain it must then be endorsed by USDA APHIS, either online through the veterinarian’s account in the Veterinary Export Health Certification System or by mailing the original with a prepaid return label (${h.src('aphis_process', 'APHIS process overview')}). Canada and Mexico need no endorsement. The ${h.a('aphis-pet-travel', 'APHIS pet travel page')} explains what USDA does in each direction.</p>
<p>The EU pet passport is not available in the United States: APHIS states that only an official veterinarian in an EU member state can issue one (${h.src('aphis_passport', 'APHIS page on EU pet passports')}). A passport issued in Europe can replace the certificate for a return to the EU only while the rabies vaccine recorded in it by an EU vet is still valid. The ${h.a('pet-health-certificate', 'health certificate page')} and the ${h.a('pet-passport', 'pet passport page')} go through each case.</p>
` },
    { id: 'cats', title: 'Cats: fewer papers, the same airline rules', html: (h: Helpers) => `
<p>A cat pays the same in-cabin fee as a dog on the five airlines, goes in the same kind of carrier, and counts in the same pet limit per flight. The difference is the paperwork: the CDC Dog Import Form is for dogs only, so a cat coming home needs no CDC receipt, and Mexico has asked no health certificate for cats since ${K.day(MX.catsCertSince)}. The European Union, Great Britain and Japan treat cats like dogs, except that Great Britain asks the tapeworm dose of dogs only. The ${h.a('flying-with-a-cat', 'cat page')} has the details.</p>
` },
    { id: 'service', title: 'Service dogs and emotional support animals', html: (h: Helpers) => `
<p>Under the federal rule for airlines, a service animal is a dog trained to do work for a person with a disability; emotional support, comfort and companion animals are not service animals (${h.src('ecfr_382', '14 CFR 382.3')}). American and Alaska write that a trained service dog flies in the cabin at no charge. An emotional support animal travels as a pet, in a carrier and for the pet fee. CDC import rules apply to service dogs too, with a few exceptions for arrivals by sea.</p>
` },
  ],
  sources: ['delta_pets', 'aa_pets', 'wn_coc', 'wn_fees', 'as_coc', 'as_dogs', 'f9_faq', 'f9_fees', 'cdc_faq', 'cdc_highrisk', 'aphis_export', 'aphis_fees', 'aphis_mexico', 'aphis_france', 'aphis_uk', 'aphis_japan', 'ecfr_382'],
};
