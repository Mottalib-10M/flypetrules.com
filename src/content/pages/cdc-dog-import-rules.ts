import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const C = K.CDC;

export default definePage({
  id: 'cdc-dog-import-rules', group: 'usentry', order: 11, slug: 'cdc-dog-import-rules',
  nav: 'CDC dog import rules', card: 'Bringing a dog into or back to the US: the four CDC cases, the 111 high-risk countries, airports and quarantine.',
  title: 'CDC Dog Import Rules 2026: Bringing a Dog Back to the US',
  description: `CDC dog import rules in 2026: every dog needs the Dog Import Form receipt, a microchip and ${C.minAgeMonths} months of age; extra papers after one of ${K.HR.length} high-risk countries.`,
  h1: 'CDC dog import rules: bringing a dog into the United States',
  intro: 'The CDC dog import rules in force on November 13, 2026: pick where the dog has been and where it was vaccinated to see what it needs.',
  resume: `The CDC dog import rules apply to every dog that enters the United States, including a family dog coming home from a week in Mexico. All dogs must look healthy, carry a microchip readable by a universal scanner, be at least ${C.minAgeMonths} months old, and travel with the receipt of the CDC Dog Import Form, one receipt per dog. What comes next depends on the last six months. A dog that was only in the United States or in countries the CDC counts as low risk or free of dog rabies, such as Canada, Mexico, the European Union countries, the United Kingdom or Japan, needs nothing more and may enter at any airport, seaport or land border. A dog that was in one of the ${K.HR.length} high-risk countries on the CDC list of April 15, 2026, such as Brazil, Colombia, the Dominican Republic, India or the Philippines, needs a rabies vaccination form. If it was vaccinated in the US, that form must be endorsed by USDA before the dog left. If it was vaccinated abroad, it must land at one of ${C.acf.length} airports with a CDC-registered animal care facility, booked in advance.`,
  faqs: [
    { q: 'Does my dog need the CDC form if it only went to Canada?', a: `Yes. Every dog entering the US needs a CDC Dog Import Form receipt, whatever the country. For a dog that was only in Canada, Mexico and the US, the receipt is valid for multiple entries during ${C.receiptLowRiskMonths} months as long as the departure country stays the same, which suits frequent border crossings by car.`, open: true },
    { q: 'Can a puppy under 6 months enter the United States?', a: `No. The CDC requires every dog entering the United States to be at least ${C.minAgeMonths} months old, whatever the country it comes from. A puppy bought or adopted abroad must stay there until it reaches that age, and a family abroad with a young puppy has to plan its return date around it.` },
    { q: 'Which airports accept dogs vaccinated abroad from high-risk countries?', a: `Only airports with a CDC-registered animal care facility: on the CDC list of September 1, 2026, Atlanta, Dallas Fort Worth, Los Angeles, Miami, New York JFK, Philadelphia, Seattle (cargo only) and Washington Dulles. The dog must land at that airport, not a nearby one, and cannot enter by land or through Alaska, Hawaii or a territory.` },
    { q: 'Do service dogs follow the CDC import rules?', a: 'Yes. CDC rules apply to service dogs too, as defined in federal airline rules: emotional support animals are not service dogs. A few differences apply to service dogs arriving by sea with the person they assist, who may skip the animal care facility with a valid rabies titer from a CDC-approved laboratory.' },
  ],
  body: (h) => `
<h2>CDC dog import rules for every dog</h2>
<p>Four conditions apply to all dogs, from any country, by any port (${h.src('cdc_faq', 'CDC FAQ, updated August 27, 2026')}): the dog appears healthy on arrival, it has a microchip, it is at least ${C.minAgeMonths} months old, and it travels with a CDC Dog Import Form receipt, which you get by filling in the form online from the ${h.src('cdc_dogs', 'CDC page on bringing a dog in')}. The microchip can be any brand but must be readable by a universal scanner; if the number does not start with 9, the CDC asks you to confirm with a veterinarian that it can be read. For a dog from a high-risk country, an unreadable chip can mean refusal and a return flight at the owner’s cost.</p>
<h2>The four cases</h2>
${h.table(['The dog in the last 6 months', 'Papers beyond the receipt', 'Where it can enter'], [['Only in the US or low-risk countries', 'none', 'any airport, seaport or land border'], ['In a high-risk country, vaccinated in the US', 'Certification of U.S.-issued Rabies Vaccination, endorsed by USDA before leaving', 'any port named on the receipt'], ['In a high-risk country, vaccinated abroad', 'Certification of Foreign Rabies Vaccination and Microchip, and a facility reservation', `by air, at one of ${C.acf.length} airports`], ['In a high-risk country, not vaccinated', 'entry refused', 'none']], 'CDC rules for dogs entering the United States, November 13, 2026', ['l', 'l', 'l'])}
<p>The list of high-risk countries is the CDC’s (${h.src('cdc_highrisk', 'list of April 15, 2026')}); a country not on it is not considered high risk. Among destinations Americans often visit, Brazil, Colombia, Peru, the Dominican Republic, Egypt, Morocco, Turkey, India, Thailand, Vietnam, the Philippines and the United Arab Emirates are on it. Mexico, Canada, Costa Rica, Jamaica, the Bahamas, the European Union countries, the United Kingdom, Japan, South Korea and Australia are not.</p>
<h2>A US dog going to a high-risk country</h2>
<p>Plan before you leave: the CDC wants the first rabies vaccine given at least ${C.vaxBeforeLeaveDays} days before the dog leaves the United States, and the Certification of U.S.-issued Rabies Vaccination completed by a USDA-accredited veterinarian at least ${C.formAfterVaxDays} days after that vaccine, then endorsed by USDA, all before departure. It cannot be done afterwards from abroad. A booster given before the previous vaccine expires counts at once.</p>
${h.mini('cdc', { t: 'Check another case', p: ['country', 'vax', 'age'], d: { country: 'Brazil' } })}
<h2>A dog vaccinated abroad, from a high-risk country</h2>
<p>This is the hardest case: an adopted dog or one bought abroad. It flies into one of the ${C.acf.length} airports with a CDC-registered animal care facility, reserved in advance, where it is examined and vaccinated again (${h.src('cdc_acf', 'CDC list of facilities, September 1, 2026')}). Without a valid titer, it stays ${C.quarantineDays} days at the facility. A shortened protocol exists for personal pets with two vaccines on record; the owner pays for all of it. A vaccine given before 12 weeks of age is not counted.</p>
<h2>Cats and other pets</h2>
<p>These rules are for dogs. A cat needs no CDC receipt, as the ${h.a('flying-with-a-cat', 'cat page')} explains. The form itself is explained on the ${h.a('cdc-dog-import-form', 'CDC Dog Import Form page')}.</p>
<h2>Service dogs and returning pets</h2>
<p>No dog is exempt. The CDC rules apply to pets that left the United States a week earlier, to dogs of US citizens, and to service dogs, which fly in the cabin under the Department of Transportation’s definition. An emotional support animal is not a service dog under that definition and travels as a pet. American writes the same on its pet page: its customers, whatever their citizenship, must meet the CDC requirements.</p>
<h2>By land, by air, by sea</h2>
<p>A dog that was only in low-risk countries may cross at any land border, airport or seaport. A dog vaccinated abroad and coming from a high-risk country may enter only by air, at an airport with a registered facility; it cannot use a land border and cannot land first in Alaska, Hawaii or a US territory. The airline checks before boarding: American refuses as carry-on pets the dogs that were in a high-risk country in the six months before the flight, service dogs aside.</p>
`,
  tool: 'cdc',
  related: ['cdc-dog-import-form', 'pet-health-certificate', 'traveling-to-mexico-with-a-dog', 'flying-with-a-dog'],
  sources: ['cdc_faq', 'cdc_dogs', 'cdc_highrisk', 'cdc_acf', 'cdc_usvax', 'cdc_foreignvax', 'ecfr_382'],
});
