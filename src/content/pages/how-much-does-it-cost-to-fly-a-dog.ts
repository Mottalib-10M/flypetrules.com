import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const dl = K.feeOr('delta', 'us'), as = K.feeOr('alaska', 'us'), eu = K.feeOr('delta', 'europe'), mx = K.feeOr('american', 'mexico');

export default definePage({
  id: 'how-much-does-it-cost-to-fly-a-dog', group: 'airlines', order: 8, slug: 'how-much-does-it-cost-to-fly-a-dog',
  nav: 'Cost of flying a dog', card: 'Airline fee, USDA endorsement and your vet’s bill added up for a trip within the US or abroad.',
  title: 'Cost to Fly a Dog in 2026: Airline Fee, USDA and Vet Bill',
  description: `How much it costs to fly a dog in 2026: airline fees from ${K.usd(as)} to ${K.usd(dl)} each way in the US, ${K.usd(K.F.none)} or more of USDA endorsement abroad, and your vet’s bill.`,
  h1: 'How much does it cost to fly a dog?',
  intro: 'The cost to fly a dog in the cabin, line by line: pick the airline, the route and the destination’s paperwork, then add your vet’s price.',
  resume: `The cost to fly a dog in the cabin within the mainland United States is the airline fee and nothing else on the government side: ${K.usd(as)} each way on Alaska up to ${K.usd(dl)} on Delta and American, so ${K.usd(as * 2)} to ${K.usd(dl * 2)} for a round trip, on the fees read November 13, 2026. A trip abroad adds three lines. The airline fee is often higher: Delta charges ${K.usd(eu)} each way on international trips. The destination usually wants a health certificate from a vet approved by USDA for travel papers (USDA-accredited), at the clinic’s price. And for the European Union, Great Britain or Japan, USDA must endorse that certificate: ${K.usd(K.F.none)} when it lists no laboratory test, ${K.usd(K.F.t1_2)} with one or two tests, such as Japan’s rabies titer. A round trip to France with one small dog on Delta therefore costs ${K.usd(eu * 2 + K.F.none)} in airline and USDA fees before the vet. The CDC Dog Import Form for the return lists no fee. Mexico and Canada ask no USDA endorsement.`,
  faqs: [
    { q: 'How much does it cost to fly a dog within the US?', a: `In the cabin, ${K.usd(as)} to ${K.usd(dl)} each way on the five airlines we checked, so ${K.usd(as * 2)} to ${K.usd(dl * 2)} round trip. No government fee applies within the mainland. A large dog that cannot ride under the seat is accepted in the baggage compartment by Alaska alone among these airlines, for ${K.usd(K.A('alaska').checkedFee!)} each way.`, open: true },
    { q: 'Does the CDC charge for the Dog Import Form?', a: 'The CDC lists no fee in the form instructions we read, updated April 28, 2026. You fill it in online and keep the receipt, to show the airline before boarding and US Customs and Border Protection on arrival. Beware of sites that charge to file it for you.' },
    { q: 'Why does a trip to Japan cost more in paperwork?', a: `Japan requires a rabies antibody test from an approved laboratory, and a certificate with a laboratory test costs ${K.usd(K.F.t1_2)} to endorse at USDA instead of ${K.usd(K.F.none)}. The laboratory’s own fee comes on top, as do the two vaccines and the advance notice Japan wants ${K.D.japan.notifyDays} days before arrival.` },
  ],
  body: (h) => `
<h2>The cost to fly a dog, line by line</h2>
<p>The calculator above adds what is public: the airline’s in-cabin fee for your route, and the USDA endorsement fee when the destination needs one. The vet’s exam and certificate are priced by each clinic, so the site publishes no figure: enter your vet’s quote in the optional field and the total includes it.</p>
${h.table(['Line', 'Within the US', 'To Mexico', 'To France'], [['Airline fee, round trip', `${K.usd(as * 2)} to ${K.usd(dl * 2)}`, `${K.usd(mx * 2)} on American`, `${K.usd(eu * 2)} on Delta`], ['USDA endorsement', 'none', 'none', K.usd(K.F.none)], ['Vet certificate', 'not required', 'screwworm inspection, clinic price', 'EU certificate, clinic price'], ['CDC form for the return', 'none', '$0', '$0']], 'What one small dog in the cabin costs, fees read November 13, 2026', ['l', 'r', 'r', 'r'])}
<h2>The airline fee</h2>
<p>It is charged per carrier and per direction. Within the US: Alaska ${K.usd(as)}, Southwest ${K.usd(K.feeOr('southwest', 'us'))}, Frontier ${K.usd(K.feeOr('frontier', 'us'))}, Delta and American ${K.usd(dl)}. Two cats in one carrier on Southwest or Alaska pay one fee. The ${h.a('airline-pet-policy', 'airline comparison')} lists each route.</p>
<h2>The USDA endorsement</h2>
<p>When a country wants its health certificate endorsed by USDA APHIS, the fee depends on the number of laboratory tests on the certificate, and vaccines do not count as tests (${h.src('aphis_fees', 'APHIS fee schedule, June 18, 2026')}). The fee is per certificate: with no test, ${K.usd(K.F.none)} whatever the number of pets on it.</p>
${h.mini('endorse', { t: 'USDA fee for your certificate', p: ['tests', 'pets'] })}
<h2>Costs this calculator leaves out</h2>
<p>A pet shipper for a large dog, whose quotes are private; the laboratory fee of a titer test; a hotel night when a flight time does not suit the deadlines; the 28-day stay at a CDC-registered facility that a dog vaccinated abroad and coming from a high-risk country may face on return, billed by the facility. The ${h.a('cdc-dog-import-rules', 'CDC rules page')} tells you whether that last case applies to your dog.</p>
<p>The biggest avoidable cost is a refused boarding: a carrier too large, a missing certificate or a screwworm inspection signed six days before entry to Mexico instead of five. The ${h.a('dog-carrier-size-airline', 'carrier checker')} and the ${h.a('traveling-to-mexico-with-a-dog', 'Mexico countdown')} are there for that.</p>
<h2>Three trips, counted</h2>
<p>A cat flying Seattle to Los Angeles and back on Alaska pays ${K.usd(as * 2)} in pet fees, nothing else official. A small dog flying to Cancun and back on American pays ${K.usd(mx * 2)} to the airline, plus the clinic’s price for the screwworm inspection, with no USDA fee since Mexico wants no endorsement. Two dogs going to Italy on Delta need two passengers, since Delta allows one kennel per passenger: four legs at ${K.usd(eu)} make ${K.usd(eu * 4)}, and one EU certificate listing both dogs costs ${K.usd(K.F.none)} to endorse. A dog going to Japan on Delta pays ${K.usd(K.feeOr('delta', 'japan') * 2)} in airline fees and ${K.usd(K.F.t1_2)} of endorsement, because Japan’s form lists the titer test.</p>
<h2>When and where the fee is paid</h2>
<p>The fee is rarely paid with the ticket. Delta collects it at check-in, at the Special Service Counter; American and Southwest at the ticket counter, after checking the pet and carrier; Alaska before the flight, and its fee is not refundable; Frontier when the pet is added online, during or after booking. Plan the time at the counter on the day.</p>
<p>Delta applies the fee in force when the ticket was issued: within the US and Canada, ${K.usd(dl)} for tickets issued since April 8, 2025, and $95 for older ones. A ticket bought long ago for a trip next spring may therefore carry the lower fee.</p>
`,
  tool: 'cost', toolArg: { airline: 'delta', region: 'europe', legs: 2, dest: 'eu' },
  related: ['airline-pet-policy', 'pet-health-certificate', 'traveling-to-europe-with-a-dog', 'dog-carrier-size-airline'],
  sources: ['aphis_fees', 'cdc_form', 'delta_pets', 'aa_pets', 'as_dogs'],
});
