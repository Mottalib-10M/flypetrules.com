import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const M = K.D.mexico;

export default definePage({
  id: 'traveling-to-mexico-with-a-dog', group: 'abroad', order: 15, slug: 'traveling-to-mexico-with-a-dog',
  nav: 'Traveling to Mexico with a dog', card: 'The screwworm inspection certificate and its five-day window, the inspection on arrival, and the return to the US.',
  title: 'Traveling to Mexico With a Dog 2026: The 5-Day Certificate',
  description: `Traveling to Mexico with a dog in 2026: a screwworm certificate signed within ${M.nwsDays} days of entry, no USDA endorsement, inspection on arrival, CDC form to return.`,
  h1: 'Traveling to Mexico with a dog: the screwworm certificate',
  intro: 'Traveling to Mexico with a dog under the rules APHIS published on October 27, 2026: the countdown above places the vet visit.',
  resume: `Traveling to Mexico with a dog changed on ${K.day(M.nwsSince)}. Since that date Mexico requires a New World screwworm inspection certificate for every pet dog, signed by a vet approved by USDA for travel papers (USDA-accredited) and issued no more than ${M.nwsDays} days before the dog enters Mexico. The certificate is a USDA form for dogs only, it needs no APHIS endorsement, and APHIS warns that it cannot carry a digital signature and that listing a cat or a bird on it invalidates it. A missing or badly completed certificate can get the dog refused or held at the border. On arrival, an inspector of SENASICA, Mexico’s agricultural health service, checks that the dog shows no sign of contagious disease, carries no external parasites such as ticks and has no fresh or healing wounds; a dog with parasites is held until a vet of the owner’s choice clears them, at the owner’s expense. Cats need no paper at all since ${K.day(M.catsCertSince)}. Coming home, the dog needs its CDC Dog Import Form receipt; Mexico is a low-risk country for the CDC.`,
  faqs: [
    { q: 'How many days before entering Mexico must the dog be inspected?', a: `No more than ${M.nwsDays} days. The USDA-accredited veterinarian inspects the dog for screwworm and signs the certificate within the ${M.nwsDays} days before the dog enters Mexico. APHIS warns that a date outside that window can get the dog refused or held at the border until the document is validated.`, open: true },
    { q: 'Does my cat need a certificate for Mexico?', a: `No. APHIS writes that Mexico has required no health certificate for pet cats since ${K.day(M.catsCertSince)}, and the screwworm inspection applies to dogs only. The cat is still inspected on arrival by SENASICA for signs of disease, parasites and wounds, so travel with a clean carrier.` },
    { q: 'Can I bring dog food into Mexico?', a: 'Only the day’s ration is safe. APHIS writes that at the inspection, disposable bedding, toys and food beyond the portion for that day may be removed and destroyed, and the carrier may be disinfected. Plan to buy food after arrival rather than packing a supply.' },
  ],
  body: (h) => `
<h2>Traveling to Mexico with a dog: the certificate</h2>
<p>The document is the “NWS Inspection Certificate for Pet Dogs Moving (Exporting) From the United States to Mexico”, a PDF from USDA APHIS (${h.src('aphis_nws_pdf', 'the form')}). A USDA-accredited veterinarian inspects the dog for New World screwworm (NWS) and signs the form by hand. Three rules sink travelers: a date more than ${M.nwsDays} days before entry, a digital signature, and another animal listed on the dog’s form (${h.src('aphis_mexico', 'APHIS Mexico page, October 27, 2026')}).</p>
${h.table(['Item', 'Dog', 'Cat'], [['Certificate', `screwworm inspection, ${M.nwsDays} days before entry at most`, 'none'], ['USDA endorsement', 'no', 'no'], ['Inspection on arrival', 'yes, by SENASICA', 'yes, by SENASICA'], ['Back to the US', 'CDC Dog Import Form receipt', 'no CDC form']], 'Mexico with a dog or a cat, rules read November 13, 2026', ['l', 'l', 'l'])}
<h2>Timing the vet visit</h2>
<p>Count back from the day the dog enters Mexico, not from the departure. For a Saturday flight, the visit falls between the Monday and the Saturday of the same week. The countdown above shows the window for your date. Airlines check: Delta writes that it verifies the screwworm certificate at check-in for dogs flying to Mexico.</p>
<h2>On arrival in Mexico</h2>
<p>SENASICA inspects the dog at the airport or the border crossing: no sign of infectious disease, no ticks, no fresh wounds, the certificate in order. If ticks are found, they are sampled, a vet of your choice must deal with them, and the dog can be held until then, the costs on the owner. The carrier must be clean; bedding, toys and extra food may be removed.</p>
<h2>Flying to Mexico with a dog</h2>
<p>American and Delta fly pets in the cabin to Mexico; Southwest and Frontier fly none abroad. The fee is ${K.usd(K.feeOr('american', 'mexico'))} each way on American and ${K.usd(K.feeOr('delta', 'mexico'))} on Delta.</p>
${h.mini('fee', { t: 'Fee to Mexico', p: ['airline', 'legs'], d: { airline: 'american', region: 'mexico' } })}
<h2>Coming back to the US</h2>
<p>Mexico is not on the CDC list of high-risk countries, so a dog that was only in Mexico and the US needs its CDC Dog Import Form receipt and the general rules: a microchip, ${K.CDC.minAgeMonths} months of age, a healthy look. Driving back and forth, one receipt covers ${K.CDC.receiptLowRiskMonths} months of entries from Mexico (${h.src('cdc_faq', 'CDC FAQ')}). Details on the ${h.a('cdc-dog-import-form', 'CDC form page')}.</p>
${h.mini('form', { t: 'Your receipt for Mexico trips', p: ['months'] })}
<h2>Screwworm on the way back</h2>
<p>The screwworm rule also works in the other direction. Delta’s pet page notes that USDA APHIS requires dogs arriving in the United States from countries affected by New World screwworm to carry a document, issued no more than ${M.nwsDays} days before arrival, stating that the dog was inspected and found free of it. The list of affected countries is kept by USDA and changes with the outbreak; check it for your return date, and if Mexico is on it, book a vet in Mexico for the last days of the stay. That inspection is separate from the CDC receipt.</p>
<h2>Service dogs and driving</h2>
<p>American writes that the screwworm certificate applies to service dogs too. Families driving across the border need the same certificate as those who fly: the rule is about the dog entering Mexico, not about the airline. At a land crossing, SENASICA inspects the dog as at an airport, and a long drive to the border should leave the vet visit as late as the five-day window allows, counting the day you cross.</p>
<h2>A countdown, worked out</h2>
<p>For a flight that lands in Mexico on Saturday, December 19, 2026, the certificate may be signed from Monday, December 14, and no earlier. A vet visit on Friday the 18th leaves a day of margin if the vet is late with the paperwork.</p>
`,
  tool: 'plan', toolArg: { dest: 'mexico', pet: 'dog', vax: 'yes', days: 5 },
  related: ['cdc-dog-import-form', 'american-airlines-pet-policy', 'traveling-to-canada-with-a-dog', 'pet-health-certificate'],
  sources: ['aphis_mexico', 'aphis_nws_pdf', 'cdc_faq', 'delta_pets', 'aa_pets'],
});
