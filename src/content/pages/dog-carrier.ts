import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';
import { iataContainer, fitsBox } from '../../lib/engine/pets';

const AA = K.A('american'), AS = K.A('alaska'), F9 = K.A('frontier'), DL = K.A('delta');
const I = K.P.iata;
/** The example dog of the calculator: A 14, B 5, C 5, D 10 inches. */
const EXD = iataContainer(14, 5, 5, 10).map((x) => Math.ceil(x * 2) / 2);
const BIG = iataContainer(22, 8, 7, 18).map((x) => Math.ceil(x * 2) / 2);
const fitsAS = fitsBox(EXD, AS.carrier!.soft!), fitsAA = fitsBox(EXD, AA.carrier!.soft!);

export default definePage({
  id: 'dog-carrier', group: 'airlines', order: 0, slug: 'dog-carrier',
  nav: 'Dog carrier: the size your dog needs', card: 'Four measurements of your dog give the smallest carrier by the IATA formula, checked against each airline’s cabin limit.',
  title: 'Dog Carrier 2026: Size It to Your Dog With the IATA Formula',
  description: `Dog carrier sizing in 2026: measure your dog four times, get the IATA minimum inside size, and see which airline cabin limits a carrier that size can meet.`,
  h1: 'Dog carrier: size it to your dog, then to the airline',
  intro: 'Dog carrier sizing starts from the dog: enter four measurements and the calculator applies the IATA container formula, then compares the result with each airline’s cabin limit.',
  resume: `A dog carrier has two rules to meet: the airline’s outside limit, and the room the dog needs inside. Airlines describe that room in words: the dog must stand, turn around and lie down. The International Air Transport Association, whose Live Animals Regulations the airlines follow for animals in the hold, turns it into a formula, published on iata.org and read on November 14, 2026. Measure A, the length from the nose to the root of the tail; B, from the floor to the elbow; C, the width across the shoulders; D, the standing height to the top of the head or the ear tips. The inside length is A plus half of B, the width twice C, the height D plus the bedding, and ${I.snubPct} % more on each side for a snub-nosed breed. A dog measuring 14, 5, 5 and 10 inches needs ${K.in(EXD)} inside. That fits within American’s soft limit of ${K.in(AA.carrier!.soft!)} but is taller than Alaska’s ${K.num(AS.carrier!.soft![2])} inches, which is why the height decides most cabin trips.`,
  faqs: [
    { q: 'How do I measure my dog for a carrier?', a: 'With the dog standing on a flat floor and a soft tape. Measure from the tip of the nose to the root of the tail, not the tip; from the floor to the elbow; across the widest point of the shoulders; and from the floor to the top of the head or the ear tips, whichever is higher. Round each figure up to the half inch.', open: true },
    { q: 'What size dog fits in an airline carrier under the seat?', a: `The airlines give no weight or breed, only the carrier: up to ${K.in(AA.carrier!.soft!)} soft on American, ${K.in(F9.carrier!.soft!)} on Frontier and ${K.in(AS.carrier!.soft!)} on Alaska. By the IATA formula, a dog needs a standing height a little under those heights once the bedding is added. Enter your own measurements above to see which limits a carrier for your dog can meet.` },
    { q: 'Does the IATA formula apply to a carrier in the cabin?', a: 'It is written for containers in the hold, and airlines apply it there. For the cabin they use their own words: the pet stands, turns and lies down without touching the sides. The formula is the most precise public way to turn those words into inches, so it is a sound minimum for a cabin carrier as well.' },
    { q: 'What if my dog is too big for any cabin carrier?', a: 'Then it cannot fly in the cabin on these airlines. Delta and American carry larger dogs in the hold only for military and State Department staff on orders, Southwest and Frontier not at all; Alaska still accepts pets in its baggage compartment in a hard kennel. Otherwise families turn to a pet shipper, whose quotes are private.' },
  ],
  body: (h) => `
<h2>Dog carrier sizing in four measurements</h2>
<p>The IATA page gives the four measurements and the formula for a single animal, and the same formula is printed in Container Requirement 1 of the Live Animals Regulations, the rule book airlines follow for animals in the hold (${h.src('iata_pets', 'IATA, pets and container requirements')}). The sizes it gives are inside sizes. A carrier’s outside is larger by the thickness of its walls, frame and padding, so a dog whose inside size only just fits an airline’s outside limit will not fit in practice.</p>
${h.table(['Side', 'IATA formula', 'Example dog', 'Result'], [
    ['Length', 'A + ½ B', 'A 14 in, B 5 in', K.in([EXD[0]])],
    ['Width', '2 x C', 'C 5 in', K.in([EXD[1]])],
    ['Height', 'D + bedding', 'D 10 in, no bedding', K.in([EXD[2]])],
  ], 'IATA minimum inside size of a dog carrier, rounded up to the half inch', ['l', 'l', 'l', 'r'])}
<p>For two animals sharing a container the width becomes three times C, and four times C for three, measured on the largest animal. A snub-nosed breed, such as a pug, a French bulldog or a Boston terrier, gets ${I.snubPct} % more on every side under the same IATA rule.</p>
<h2>From the dog to the airline</h2>
<p>Once you know the inside size, compare it with the cabin limits, which are outside sizes. Our example dog needs ${K.in(EXD)} inside. American’s soft limit of ${K.in(AA.carrier!.soft!)} ${fitsAA ? 'leaves about an inch on most sides for the walls' : 'is too small'}, Frontier’s ${K.in(F9.carrier!.soft!)} leaves more, and Delta recommends ${K.in(DL.carrierRec!)}. Alaska ${fitsAS ? 'also fits' : `stops at ${K.num(AS.carrier!.soft![2])} inches of height, half an inch under what this dog needs`}. A dog of 22, 8, 7 and 18 inches needs ${K.in(BIG)} inside: no cabin limit published by the five airlines comes close.</p>
${h.mini('kennel', { t: 'A taller dog', p: ['d', 'snub'], d: { d: 11 } })}
<h2>Why the height decides</h2>
<p>Cabin limits are generous in length and tight in height: 9.5 inches on Alaska, 11 on American, Frontier and Delta’s recommendation. A dog’s standing height to the ears is the measurement owners underestimate, because ears lie flat when the dog sits. Measure with the dog standing and alert. A soft carrier gives a little at the top, which is why American lets a soft carrier be slightly larger than its hard limit, but an agent who sees a dog crouched with its head pressed against the mesh can refuse it.</p>
<h2>Choosing the dog carrier itself</h2>
<p>For the cabin, the airlines ask for a leak-proof carrier with ventilation on at least three sides, a secure closure and no part of the dog sticking out. A padded floor is part of the height: an inch of bedding is an inch less for the dog. For the hold, the carrier must be a rigid kennel with the features the airline lists. Delta and American no longer take pets in the hold for ordinary travelers, and Southwest and Frontier never did, so for most families the question is only the cabin. The ${h.a('pet-carrier', 'pet carrier page')} gives the largest carrier that two airlines of a trip both accept.</p>
<h2>Puppies and growing dogs</h2>
<p>The four airlines that state a minimum age for the cabin set it at 8 weeks within the US. A puppy that fits a carrier at 10 weeks may not fit it a few months later, and a dog coming back into the United States from abroad must be at least ${K.CDC.minAgeMonths} months old under the CDC rules. Measure again before every trip, not only when buying the carrier.</p>
<h2>Checking the dog carrier you already have</h2>
<p>If you own a carrier, measure its outside, frame and pockets included, and enter it in the ${h.a('dog-carrier-size-airline', 'carrier size checker by airline')}. Then compare its inside with the result above: if the inside is smaller than the IATA minimum, the dog is cramped even when the carrier passes the airline’s outside limit.</p>
`,
  tool: 'kennel',
  related: ['pet-carrier', 'dog-carrier-size-airline', 'flying-with-a-dog', 'how-much-does-it-cost-to-fly-a-dog'],
  sources: ['iata_pets', 'aa_pets', 'as_coc', 'f9_faq', 'delta_pets'],
});
