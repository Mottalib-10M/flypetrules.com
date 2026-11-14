import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const wn = K.feeOr('southwest', 'us'), as = K.feeOr('alaska', 'us'), dl = K.feeOr('delta', 'us');

export default definePage({
  id: 'flying-with-a-cat', group: 'airlines', order: 10, slug: 'flying-with-a-cat',
  nav: 'Flying with a cat', card: 'Cat fees by airline, two cats in one carrier, and the papers a cat needs abroad and coming home.',
  title: 'Flying With a Cat in 2026: Fees, Two Cats, Papers Abroad',
  description: `Flying with a cat in 2026: ${K.usd(as)} to ${K.usd(dl)} each way in the cabin, two cats in one carrier on Southwest and Alaska, no CDC form, what Europe and Japan ask.`,
  h1: 'Flying with a cat: fees, carriers and papers',
  intro: 'Flying with a cat in the cabin of a US airline, and what changes from a dog: the fee, two cats in one carrier, and fewer papers.',
  resume: `Flying with a cat costs the same in-cabin fee as a dog on the five US airlines read on November 13, 2026: ${K.usd(as)} each way on Alaska, ${K.usd(wn)} on Southwest, ${K.usd(K.feeOr('frontier', 'us'))} on Frontier and ${K.usd(dl)} on Delta and American within the mainland. The rules on the carrier, the age and the seat are also the same. Two things differ. First, Southwest and Alaska accept two animals of the same species in one carrier for one fee, which halves the cost for two cats; Delta allows it only for two young pets of the same breed and size. Second, a cat needs far fewer papers. The CDC Dog Import Form is for dogs only, so a cat coming back into the United States needs no CDC receipt. Mexico has asked no health certificate for cats since ${K.day(K.D.mexico.catsCertSince)}, and Canada asks a rabies certificate. The European Union, Great Britain and Japan treat cats much like dogs: microchip, rabies vaccine, endorsed certificate, and for Japan a blood test and ${K.D.japan.waitDays} days of waiting.`,
  faqs: [
    { q: 'Can two cats travel in one carrier?', a: `On Southwest and Alaska, yes: both accept up to two animals of the same species in one carrier, for one fee, if they fit and can move. On Delta, only two young pets of the same breed and size, 8 weeks to 6 months old. Frontier writes one adult dog or cat per container.`, open: true },
    { q: 'Does a cat need the CDC form to enter the US?', a: 'No. The CDC Dog Import Form and its receipt are required for dogs only. The CDC FAQ covers dogs only. On the way out, it is the destination country that sets the rules for cats, and the APHIS page of each country lists them.' },
    { q: 'Does Great Britain ask the tapeworm dose for cats?', a: `No. On the APHIS page for Great Britain, updated October 6, 2026, the tapeworm dose ${K.D.uk.tapeMinH} to ${K.D.uk.tapeMaxH} hours before arrival applies to dogs only. Cats still need the microchip, the rabies vaccine after a wait of ${K.D.uk.waitDays} days and the endorsed health certificate.` },
  ],
  body: (h) => `
<h2>Flying with a cat on US airlines</h2>
<p>All five airlines we checked take cats in the cabin, under the same conditions as small dogs: a carrier under the seat in front, the cat inside it for the whole flight, a fee each way, a booking made early because pets per flight are limited. Southwest asks that cats be vaccinated, and Delta, American, Southwest and Frontier set a minimum age of 8 weeks within the US.</p>
${h.table(['Airline', 'Fee each way, within the US', 'Two cats in one carrier'], [['Alaska', K.usd(as), 'yes, one fee'], ['Southwest', K.usd(wn), 'yes, one fee'], ['Frontier', K.usd(K.feeOr('frontier', 'us')), 'no, one adult cat per container'], ['Delta', K.usd(dl), 'only two young pets, 8 weeks to 6 months'], ['American', K.usd(K.feeOr('american', 'us')), 'not stated']], 'Cats in the cabin, read November 13, 2026', ['l', 'r', 'l'])}
${h.mini('fee', { t: 'Fee for your cat', p: ['airline', 'legs'], d: { airline: 'southwest' } })}
<h2>Short-nosed cats</h2>
<p>Persian, Himalayan, Burmese and Exotic Shorthair cats, and their mixes, are refused as checked pets by American and in Alaska’s baggage compartment, except on Alaska’s direct flights between Hawaii and the mainland and between the islands (${h.src('as_coc', 'Alaska contract of carriage')}). In the cabin, the same cats fly like any other.</p>
<h2>The carrier for a cat</h2>
<p>Cats are often carried in hard plastic carriers at home; on Alaska that carrier is refused in the cabin, which takes soft carriers only, at most ${K.in(K.A('alaska').carrier!.soft!)}. American and Frontier accept hard carriers within their sizes. The ${h.a('dog-carrier-size-airline', 'carrier checker')} works the same for a cat.</p>
<h2>Papers for a cat abroad</h2>
<p>Mexico: nothing on paper since ${K.day(K.D.mexico.catsCertSince)}, and SENASICA inspects the cat on arrival for signs of disease, parasites and wounds (${h.src('aphis_mexico', 'APHIS Mexico page')}). Canada: a rabies certificate from a licensed vet, vaccine given within ${K.D.canada.rabiesYears} years, with kittens under ${K.D.canada.noVaxUnderMonths} months exempt (${h.src('aphis_canada', 'APHIS Canada page')}). European Union and Great Britain: microchip, then rabies vaccine, ${K.D.eu.waitDays} days, then a certificate endorsed by USDA within ${K.D.eu.endorseWithinDays} days of arrival. Japan: two vaccines, a titer test and ${K.D.japan.waitDays} days.</p>
${h.mini('plan', { t: 'Days needed for your cat', p: ['dest', 'days'], d: { pet: 'cat' } })}
<p>Coming home, a cat needs no CDC form. The ${h.a('pet-health-certificate', 'health certificate page')} explains the endorsement for the countries that want one.</p>
<h2>The security checkpoint with a cat</h2>
<p>At security the pet comes out of the carrier while the carrier goes through the scanner, as Delta writes for every cabin pet. For a cat this is the riskiest moment of the trip: an open terminal, noise, a carrier out of reach. A harness and leash put on at home, before the cat goes in the carrier, keep it in hand. Once past security, the cat goes back in the carrier and stays there until the destination.</p>
<h2>A cat to Hawaii</h2>
<p>Hawaii is the one US trip where the airline choice is made for you. Delta, American and Southwest take no cabin pet between the mainland and Hawaii. Alaska flies cats there, under the entry rules of the Hawaii Department of Agriculture, which the owner must meet before leaving; cats arrive at Honolulu unless the owner holds a neighbor island permit for Kona, Lihue or Kahului. Between the islands, Southwest and Alaska both charge ${K.usd(K.feeOr('alaska', 'hawaiiInter'))} each way.</p>
<h2>Two cats, one trip</h2>
<p>For two cats, the cheapest setup is one carrier on Southwest or Alaska, if both fit with room to stand and turn: one fee for both. On Delta, American or Frontier, two adult cats mean two carriers, and each passenger takes only one, so two travelers.</p>
`,
  tool: 'fee', toolArg: { airline: 'southwest', region: 'us', legs: 2 },
  related: ['southwest-pet-policy', 'alaska-airlines-pet-policy', 'pet-health-certificate', 'flying-with-a-dog'],
  sources: ['wn_coc', 'as_coc', 'aa_pets', 'delta_pets', 'f9_faq', 'aphis_mexico', 'aphis_canada', 'aphis_france', 'cdc_faq'],
});
