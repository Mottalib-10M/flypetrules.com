import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const C = K.CDC;

export default definePage({
  id: 'cdc-dog-import-form', group: 'usentry', order: 12, slug: 'cdc-dog-import-form',
  nav: 'CDC Dog Import Form', card: 'What the CDC Dog Import Form asks, how long the receipt lasts, and when you need a new one.',
  title: 'CDC Dog Import Form 2026: Receipt, Validity and What It Asks',
  description: `CDC Dog Import Form in 2026: three sections, a receipt valid ${C.receiptLowRiskMonths} months from low-risk countries or one entry from high-risk ones, no fee, shown to the airline.`,
  h1: 'CDC Dog Import Form: filling it in and keeping the receipt valid',
  intro: 'The CDC Dog Import Form as its instructions of April 28, 2026 describe it: check above how long your receipt stays valid.',
  resume: `The CDC Dog Import Form is the online form every dog needs before it enters the United States, and its receipt is the document the airline checks before boarding and US Customs and Border Protection on arrival, on paper or on your phone. The instructions updated April 28, 2026 list no fee. The form has three parts: the importer, with a date of birth, one identity number such as a passport or driver’s license, an e-mail and a phone; the dog, with its name, age, sex, breed, color and the purpose of the trip; and the travel, with the departure country, the arrival date and the flight number. Dogs from high-risk countries add the microchip number, a photo showing face and body, the vaccination documents and, if vaccinated abroad, the facility reservation. A receipt for a dog coming from a low-risk country is valid ${C.receiptLowRiskMonths} months from issue for multiple entries of the same dog from the same country. From a high-risk country, it covers one entry. A second dog needs its own form.`,
  faqs: [
    { q: 'How long is the CDC Dog Import Form receipt valid?', a: `For a dog arriving from a low-risk or rabies-free country, ${C.receiptLowRiskMonths} months from the day it is issued, for as many entries of that dog from that same country as you like. For a dog arriving from a high-risk country, one entry only: you file a new form for each later trip.`, open: true },
    { q: 'When should I fill in the CDC Dog Import Form?', a: 'Before you travel: the airline asks to see the receipt before boarding. The CDC instructions say that if you do not know the exact arrival date, you enter the earliest likely one. The CDC FAQ recommends filling it in well ahead of the travel dates, especially for dogs from high-risk countries.' },
    { q: 'Do I need a new form if I fly back from a different country?', a: 'Yes. A receipt covers one dog entering from one departure country. Coming back from Mexico in March and from Canada in May means two forms, even within six months. The same goes after six months, and for each new entry of a dog from a high-risk country.' },
  ],
  body: (h) => `
<h2>CDC Dog Import Form: the three sections</h2>
<p>The CDC instructions describe the form in three parts (${h.src('cdc_form', 'CDC form instructions, April 28, 2026')}). The CDC updated the form system on February 5, 2026.</p>
${h.table(['Section', 'Every dog', 'Added for a dog from a high-risk country'], [['A. Importer', 'date of birth, one ID (passport, driver’s license or air waybill number), e-mail, phone', 'a US physical address and the recipient’s details'], ['B. Dog', 'name, age, sex, breed, color and markings, purpose of import', 'microchip number and a photo of face and body (jpg or png, 10 MB at most)'], ['C. Travel', 'travel type, departure country, arrival date, flight number, plate or vessel', 'vaccination documents, and the facility reservation if vaccinated abroad']], 'What the CDC Dog Import Form asks', ['l', 'l', 'l'])}
<p>For a dog under one year old coming from a high-risk country, the photo should be taken within 15 days before arrival, as the instructions ask.</p>
<h2>How long the receipt lasts</h2>
<p>The receipt belongs to one dog and one departure country. From a low-risk country it is good for ${C.receiptLowRiskMonths} months of entries, which is why a family driving to Canada or Mexico several times a season files once. From a high-risk country it is good for one entry. The calculator above counts what is left of yours.</p>
${h.mini('form', { t: 'Is your receipt still valid?', p: ['months'] })}
<h2>Showing the receipt</h2>
<p>If the dog flies, show the receipt to the airline before boarding: Delta writes that every dog flying to the United States must be accompanied by it. On arrival, show it to US Customs and Border Protection. By car or bus from Canada or Mexico, the same receipt is required, even if the dog stays in the vehicle (${h.src('cdc_faq', 'CDC FAQ')}).</p>
<h2>Mistakes that cost a trip</h2>
<p>Entering the wrong port for a dog from a high-risk country: the dog must arrive at the port on the receipt. Filing one form for two dogs: each dog needs its own. Keeping last spring’s receipt after flying back from a different country: it covers only the country it names. And forgetting that the form does not replace the other papers a high-risk case requires, explained on the ${h.a('cdc-dog-import-rules', 'CDC rules page')}.</p>
${h.mini('cdc', { t: 'Which papers besides the receipt?', p: ['country', 'vax'] })}
<p>The CDC instructions list no fee for the form. A site that asks a fee to file it for you is a private service, not the CDC.</p>
<h2>What to have at hand before you start</h2>
<p>The form takes a few minutes when the papers are ready. For the importer, the person bringing the dog in: a date of birth, one identity document number, which can be a passport, a driver’s license or an air waybill for a dog flying as cargo, an e-mail address that works and a phone number. For the dog: its name, age, sex, breed and color, and why it comes in, a returning pet in most cases. For the trip: the departure country, the arrival date and the flight number, or the license plate when crossing by car. A dog from a high-risk country also needs its microchip number and two photos, face and body.</p>
<h2>Several dogs, one family</h2>
<p>Each dog gets its own form and its own receipt; the CDC sets no limit on the number of dogs a family brings, as long as each meets the rules. The receipt does not change the age rule: a dog under ${C.minAgeMonths} months is refused at the border even with a receipt, so a puppy born abroad waits until that age before flying.</p>
<h2>A winter in Mexico, a summer in Canada</h2>
<p>A family that spends a winter in Mexico and drives back and forth files once for Mexico, and the receipt covers its returns for ${C.receiptLowRiskMonths} months. The same family driving to Canada in the summer files a new form naming Canada, since a receipt names one departure country.</p>
`,
  tool: 'form',
  related: ['cdc-dog-import-rules', 'flying-with-a-dog', 'traveling-to-canada-with-a-dog', 'traveling-to-mexico-with-a-dog'],
  sources: ['cdc_form', 'cdc_faq', 'cdc_highrisk', 'delta_pets'],
});
