import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const J = K.D.japan;
const jp = K.feeOr('delta', 'japan');

export default definePage({
  id: 'taking-a-dog-to-japan', group: 'abroad', order: 19, slug: 'taking-a-dog-to-japan',
  nav: 'Taking a dog to Japan', card: 'Two rabies vaccines, a titer test, 180 days of wait, notice 40 days ahead and Form AC: the longest trip to plan.',
  title: 'Taking a Dog to Japan 2026: Titer Test and the 180-Day Wait',
  description: `Taking a dog to Japan in 2026: chip, two rabies vaccines, titer of ${J.titer} IU/ml, ${J.waitDays} days before arrival, notice ${J.notifyDays} days ahead, Form AC endorsed by USDA for ${K.usd(K.F.t1_2)}.`,
  h1: 'Taking a dog to Japan: seven months of planning',
  intro: 'Taking a dog to Japan from the US under the APHIS page for Japan updated July 30, 2025: the countdown above gives the earliest possible arrival.',
  resume: `Taking a dog to Japan is the longest pet trip to plan from the United States: about seven months for a dog that starts from zero. The APHIS page for Japan, updated July 30, 2025, sets the order. An ISO microchip on or before the first rabies vaccine; a first vaccine at ${J.firstVaxDays} days of age or older; a second vaccine more than ${J.secondAfterDays} days after the first. Then a blood sample for the rabies titer test, analysed by an approved laboratory, with a result of at least ${J.titer} IU/ml; the result stays valid ${J.titerYears} years. The dog must then wait at least ${J.waitDays} days between the blood sample and the arrival in Japan; if it arrives earlier, it stays in quarantine for the missing days. The owner notifies Japan’s Animal Quarantine Service at least ${J.notifyDays} days before arrival. Shortly before the flight, a USDA-accredited veterinarian examines the dog and fills in Form AC, which USDA APHIS endorses; since the certificate lists the titer test, the fee is ${K.usd(K.F.t1_2)}. The same rules apply to cats.`,
  faqs: [
    { q: 'How long before the trip should I start preparing my dog for Japan?', a: `At least seven months for a dog without vaccines: a second vaccine more than ${J.secondAfterDays} days after the first, then a blood sample, then ${J.waitDays} days of wait before arrival. With two valid vaccines already given after the chip, the blood sample starts the ${J.waitDays}-day count, so six months.`, open: true },
    { q: 'What happens if my dog arrives in Japan before the 180 days?', a: `APHIS writes that the dog then stays in quarantine in Japan for the remaining days. Count ${J.waitDays} days from the day the blood sample was taken, not from the day the result came back, and keep a margin for a delayed flight.` },
    { q: 'Can my dog fly in the cabin to Japan?', a: `Delta takes pets in the cabin to Japan for ${K.usd(jp)} each way, subject to its cabin limits. American, Southwest, Alaska and Frontier do not fly pets to Japan in the cabin. Japanese carriers set their own rules, not read here.` },
  ],
  body: (h) => `
<h2>Taking a dog to Japan: the order of the steps</h2>
<p>The steps below follow the APHIS page for Japan (${h.src('aphis_japan', 'APHIS Japan page, July 30, 2025')}). Each one depends on the previous: a vaccine given before the chip does not count, and a blood sample taken before the second vaccine does not either.</p>
${h.table(['Step', 'Rule', 'When'], [['1. Microchip', 'ISO standard', 'on or before the first vaccine'], ['2. First rabies vaccine', `pet ${J.firstVaxDays} days old or more`, 'start'], ['3. Second rabies vaccine', `more than ${J.secondAfterDays} days after the first`, 'about a month later'], ['4. Titer test', `at least ${J.titer} IU/ml, approved lab, valid ${J.titerYears} years`, 'after the second vaccine'], ['5. Wait', `${J.waitDays} days from the blood sample`, 'before arrival'], ['6. Advance notice', 'to the Animal Quarantine Service', `${J.notifyDays} days before arrival at least`], ['7. Form AC', `USDA-accredited vet, endorsed by APHIS, ${K.usd(K.F.t1_2)}`, 'shortly before the flight']], 'Dog or cat from the US to Japan', ['l', 'l', 'l'])}
<h2>The titer test and the 180 days</h2>
<p>The rabies titer test measures the antibodies left by the vaccines. APHIS names the approved laboratories, Kansas State University and a Department of Defense laboratory. The ${J.waitDays}-day count starts on the day the blood is drawn. Arriving even one day early means quarantine for the missing days, so plan the flight with a margin.</p>
${h.mini('plan', { t: 'Earliest arrival in Japan', p: ['vax'], d: { dest: 'japan', vax: 'no' } })}
<h2>The USDA fee</h2>
<p>Because Form AC lists the titer test, USDA charges the one-to-two-test rate: ${K.usd(K.F.t1_2)} per certificate, plus ${K.usd(K.F.t1_2_extra)} per extra pet (${h.src('aphis_fees', 'APHIS fee schedule')}). Two dogs on one certificate cost ${K.usd(K.endorse(1, 2))}.</p>
${h.mini('endorse', { t: 'USDA fee for Japan', p: ['pets'], d: { tests: 1, pets: 1 } })}
<h2>The flight</h2>
<p>Delta flies pets in the cabin to Japan for ${K.usd(jp)} each way (${h.src('delta_pets', 'Delta pet page')}). A round trip with one dog costs ${K.usd(jp * 2)} in airline fees and ${K.usd(K.F.t1_2)} for the endorsement, before the vet, the vaccines and the laboratory.</p>
${h.mini('cost', { t: 'Fees for Japan', p: ['legs'], d: { airline: 'delta', region: 'japan', dest: 'japan' } })}
<h2>Coming back to the US</h2>
<p>Japan is low risk for the CDC, so a dog that spent the last six months only there and in the US needs its CDC Dog Import Form receipt, a microchip and an age of ${K.CDC.minAgeMonths} months (${h.src('cdc_faq', 'CDC FAQ')}). See the ${h.a('cdc-dog-import-rules', 'CDC rules page')}.</p>
<h2>A move to Tokyo, counted</h2>
<p>Take a dog with no rabies vaccine whose family wants to land in Tokyo as early as possible. The chip and the first vaccine on Monday, January 4, 2027. The second vaccine more than ${J.secondAfterDays} days later, on Monday, February 8. The blood sample a week later, on Monday, February 15, sent to an approved laboratory. Counting ${J.waitDays} days from that sample, the earliest arrival without quarantine is Saturday, August 14, 2027. The advance notice to the Animal Quarantine Service is due by Monday, July 5, ${J.notifyDays} days before. Then, in the last days, the exam, Form AC and the USDA endorsement. Seven months from the first vaccine to the flight.</p>
<h2>The titer result for later trips</h2>
<p>The APHIS page gives the titer result a validity of ${J.titerYears} years. A family that goes home on leave and returns to Japan within that time should ask the Animal Quarantine Service, when it sends the advance notice, how the earlier result counts for the new entry. Each entry still needs the notice ${J.notifyDays} days ahead, a new Form AC and a new USDA endorsement.</p>
<h2>Leaving Japan</h2>
<p>Japan also inspects pets on the way out. American’s pet page asks passengers leaving Japan with a pet to notify the Animal Quarantine Service at least 7 days before departure to arrange the inspection. The dog then needs its CDC receipt to enter the United States.</p>
<h2>Cats to Japan</h2>
<p>Cats follow the same steps as dogs on the APHIS page: chip, two vaccines, titer test, ${J.waitDays} days, notice and Form AC. Only the CDC receipt on the way home is for dogs alone.</p>
`,
  tool: 'plan', toolArg: { dest: 'japan', pet: 'dog', vax: 'no', days: 200 },
  related: ['pet-health-certificate', 'delta-pet-policy', 'traveling-to-europe-with-a-dog', 'cdc-dog-import-rules'],
  sources: ['aphis_japan', 'aphis_fees', 'delta_pets', 'cdc_faq'],
});
