# Test naïf du 2026-11-14, testeur 2 : flypetrules.com
**Persona :** Américain(e) de 24 ans, très à l'aise avec les apps, impatient(e) : s'il/si elle ne comprend pas en quelques secondes ce que la page lui apporte, il/elle ferme et retourne sur Google. Il/elle a cliqué sur le résultat « Pet Travel 2026: Airline Pet Fees, Dogs and Cats From the US » parce qu'il/elle a cette question. Découvre le site sur son téléphone.

## 1. Concept

**Après 5 s :** « OK, c'est le tarif pour prendre mon chien ou mon chat en cabine, compagnie par compagnie. » Le H1 « Pet travel: airline pet fees and rules for a dog or cat » et la phrase « run from $100 each way on Alaska to $150 on Delta and American » répondent tout de suite à la question du résultat Google. Les quatre gros boutons « Will my carrier fit under the seat? », « Bringing my dog back to the US », « Taking my dog to Europe », « Total cost of flying my dog » ressemblent à une vraie appli : je sais où taper. La mention « Independent site: not an airline, a veterinarian or a pet shipper. Nothing sold, no contact details asked. » rassure (pas un piège à leads).

**Après 2 min :** c'est un comparateur de frais d'animaux en cabine pour 5 compagnies US (Delta, American, Southwest, Alaska, Frontier) + des vérificateurs de taille de sac de transport, de papiers CDC pour revenir aux US et de certificats USDA pour partir à l'étranger. Pour qui : quelqu'un qui vole avec un petit chien/chat depuis ou vers les US. Bénéfice concret : le prix aller-retour en gros ($300 Delta), le tableau des 5 compagnies côte à côte, et « Receipt only » pour savoir ce qu'il faut pour rentrer.

Clair ? Oui sur le prix. Moins clair sur les papiers : on passe vite à du jargon d'administration (APHIS, VEHCS, endorsement, low-risk/high-risk).

## 2. « Tout le monde peut-il comprendre ? »

Verdict : **oui pour la partie tarifs**, **à moitié pour la partie papiers**. Ça décroche :
- dès que les sigles arrivent sans explication : « USDA APHIS », « VEHCS », « USDA endorsement: $101 », « CDC Dog Import Form receipt » (je ne savais pas qu'il y avait un formulaire CDC, le site suppose que je le sais) ;
- sur les incohérences de chiffres entre deux blocs de la même page (taille du sac Delta, voir §6) ;
- sur les textes très longs, phrasés comme des notes de juriste (« A connection does not double the fee on these airlines, but a long stopover can: American writes that its fees apply to each destination without a stopover of four hours or more »).

## 3. Parcours écran par écran

- **01-accueil-1** — Compris. H1 + prix en une phrase + 4 questions en boutons : parfait. Le bouton « Cheapest within the US » sélectionné intrigue (je ne sais pas encore ce qu'il fait).
- **01-accueil-suite1** — Coince un peu. J'ai choisi « Cheapest within the US »… et le résultat affiché est **Delta à $300**, la plus chère. Je m'attendais à Alaska ($200). Incohérence immédiate. Sinon le gros « $300 » + « $150 each way, per pet carrier, charged on both legs » est très lisible.
- **01-accueil-suite2** — Compris. Le tableau des 5 compagnies est ce que je voulais. Mais « In-cabin pet fee, within the mainland us » : « us » en minuscules, ça fait bug. Même chose dans le bandeau jaune « within the mainland us ».
- **01-accueil-suite3** — Compris. La source « Fees read on each airline's own page or contract of carriage on November 13, 2026 » = rassurant (c'est frais). Le paragraphe « how to read the result » explique « No pet in the cabin » / « Not published » : utile mais long.
- **01-accueil-suite4** — Coince. Pavé de texte dense ; trois liens « carrier size checker », « pet carrier page », « dog carrier page » qui se ressemblent, je ne sais pas lequel prendre.
- **01-accueil-suite5** — Compris dans l'ensemble. « Will your carrier fit? » avec 17 × 11 × 10 in → « 2 of 5 ». Le « 2 of 5 » seul est obscur jusqu'à lire la ligne en dessous. « Set by this page: Pet and carrier weight: 15 lb » : je ne comprends pas pourquoi je ne peux pas le changer ici.
- **01-accueil-suite6** — Coince. On annonce « 2 of 5 … American, Frontier » mais la liste en dessous ne montre que **4 compagnies** (Delta, American, Southwest, Alaska) : Frontier, justement l'une des deux qui passent, n'apparaît pas. Et Delta « No size published » alors que deux écrans plus haut Delta affichait « Carrier limit: under the seat; 18 × 11 × 11 in soft recommended ». Je ne sais plus quoi croire.
- **01-accueil-suite7 / suite8 / suite9** — Compris. Fiche par compagnie (cabine, taille, « Abroad »). Très utile : « Southwest… no pets on international trips », « Delta… $200; not to the UK or Hawaii ». La note sur United/JetBlue/Allegiant « their sites refused our reading » est honnête mais m'énerve un peu : je vole United, donc rien pour moi.
- **01-accueil-suite10** — Compris mais lourd. Explication CDC (« 111 high-risk countries », « 9 CDC-registered animal care facilities at 8 airports ») : c'est du texte administratif.
- **01-accueil-suite11 / suite12** — Compris. « What does your dog need to come back? » → « Receipt only » : clair et rassurant. « Set by this page: Age of the dog: 36 months » : encore une valeur que je ne peux pas modifier ici.
- **02-menu-1 / suite1** — Compris. Menu en 3 rubriques (« Airlines and fees », « Dogs entering the US », « Taking a pet abroad »). Mais deux entrées quasi identiques : « Dog carrier: size it to your dog » / « Pet carrier: airline-approved size » / « Dog carrier size by airline » : trois pages carrier, je ne vois pas la différence. Pas de lien « United » alors que c'est la compagnie que beaucoup cherchent.
- **03-en-about-1 à suite4** — Compris. Qui publie, sources, ce qui est exclu. Surprise : « Radif Partners, 49 rue du Ressort, 63000 Clermont-Ferrand, France » pour un site sur les règles US. Ça ne casse pas la confiance mais ça étonne un Américain.
- **04-en-airline-pet-policy-1 à suite2** — Compris. Même calculateur que l'accueil, en « One way » cette fois (l'accueil était en « Round trip » : petite incohérence d'un écran à l'autre). « within the mainland us » en minuscules encore.
- **04-en-airline-pet-policy-suite3 à suite5** — Compris, très utile : tableau route par route (Hawaii, Canada, Mexico, Europe, UK). Mais ici l'absence de tarif s'écrit « - » alors que le calculateur écrit « Not published where we read » : deux codes pour la même chose. Et Alaska « - » pour Hawaii alors que le texte juste en dessous dit « Alaska flies them under Hawaii's own entry rules » : je ne sais pas si Alaska accepte ou pas, ni à quel prix.
- **04-en-airline-pet-policy-suite6** — Compris. Règles par compagnie (« Per flight: 2 in Delta First, 4 in Comfort and Main »).
- **05-en-alaska-airlines-pet-policy-1** — Coince légèrement. L'intro dit « with your fee above » alors que le calculateur est **en dessous**.
- **05-…-suite1 / suite2** — Compris. $200 aller-retour Alaska, tableau des 5.
- **05-…-suite3 / suite4** — Compris : « Alaska's 17 × 11 × 9.5 in is the smallest… A carrier bought for Delta or American at 18 inches long is one inch too long for Alaska. » Excellent, concret.
- **05-…-suite5** — Coince. Le bandeau jaune dit « Example: a soft carrier of 17 × 11 × 10 in » mais les champs affichent **9** de hauteur et le résultat « A soft carrier of 17 × 11 × 9 in ». L'exemple ment sur ce qui est affiché.
- **05-…-suite6** — Même liste à 4 compagnies pour « 3 of 5 … American, Alaska, Frontier » : Frontier encore absente de la liste.
- **06-en-american-airlines-pet-policy-1 à suite2** — Compris. Préréglé Mexique, $300. « us to or from mexico » tout en minuscules dans le bandeau et le titre du tableau : ça fait vraiment négligé. Pour Southwest/Frontier, ligne « Round trip » vide sous « No pet in the cabin » : on dirait un trou.
- **06-…-suite3 / suite4** — Compris, très clair : tailles soft / hard / Eagle + « 20 lb ». « a 4-pound carrier leaves 16 pounds for the pet » : top.
- **06-…-suite5 / suite6** — Compris. Ici on peut changer le poids, mais plus les dimensions (« Set by this page: Length: 17 in… ») : la logique de ce qui est réglable ou pas change d'un mini-outil à l'autre.
- **07-en-aphis-pet-travel-1 à suite1** — Coince sur les mots. Titre « APHIS pet travel: what USDA does » : je ne sais pas ce qu'est APHIS en arrivant. Le résultat « USDA endorsement: $101 » est gros mais je ne sais pas ce qu'est un « endorsement » ni si c'est obligatoire pour moi. « online (VEHCS, by the vet) » : sigle inconnu.
- **07-…-suite2 / suite3** — Décroche : liste de volailles (« chickens, doves, ducks, geese, grouse, guinea fowl… ») — hors sujet pour moi qui ai un chien.
- **07-…-suite4** — Compris : les 5 étapes « What happens / Who does it » sont claires et actionnables.
- **07-…-suite5 / suite6** — Compris. Mais le second outil « Another destination » affiche Japan et un bandeau jaune « Example: one dog leaving the US for a European Union country » : faux, c'est le Japon à l'écran.
- **08-en-cdc-dog-import-form-1** — Coince. L'intro dit « check above how long your receipt stays valid » alors que l'outil est en dessous. Dans le champ, « 2months » : le chiffre et l'unité se chevauchent, illisible. « 4 months left » : clair.
- **08-…-suite1 à suite3** — Compris : les trois sections du formulaire (Importer / Dog / Travel). Pratique pour se préparer.
- **08-…-suite3 / suite4** — Le mini-outil « Is your receipt still valid? » refait exactement le même calcul que celui du haut (même 2 mois, même 4 months left) : doublon. Encore « 2months » collé.
- **08-…-suite6** — Coince visuellement : les accordéons « Mistakes that cost a trip », « What to have at hand before you start »… ont leur triangle ▶ sur une ligne seule, au-dessus du titre : ça ressemble à une mise en page cassée. Titres pourtant très tentants.
- **09-en-cdc-dog-import-rules-1 à suite1** — Compris : « Receipt only ». « 36months » collé dans le champ.
- **09-…-suite2 à suite4** — Compris, très utile : « The three cases » et la liste des pays à risque (Brazil, Colombia, Dominican Republic… sont high-risk ; Mexico, Canada, Jamaica, Bahamas non). C'est l'info qui peut sauver un voyage.
- **09-…-suite5 / suite6** — Coince. Outil « Check another case » réglé sur **Brazil** → « Receipt + US rabies form », mais bandeau jaune « Example: a dog coming back from a low-risk country » : contradiction directe.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Calculateur de frais cabine (compagnie / route / aller ou AR) | Oui, dès l'accueil | Oui | Très | 4/5 (le préréglage « Cheapest within the US » qui affiche Delta trouble) |
| Tableau comparatif des 5 compagnies sous le résultat | Oui | Oui | Très | 5/5 |
| Tableau route par route (Hawaii, Canada, Mexico, Europe, UK) | Oui (page comparée) | Oui, sauf « - » vs « No » | Très | 4/5 |
| Vérificateur de taille du sac (« Will your carrier fit? ») | Oui | Partiellement (« 2 of 5 », liste à 4, Delta « No size published ») | Oui | 3/5 |
| « What does your dog need to come back? » (règles CDC) | Oui | Oui pour « Receipt only » | Très | 4/5 |
| Validité du reçu CDC (« 4 months left ») | Oui | Oui | Moyen | 3/5 (« 2months », doublon) |
| Vérificateur APHIS / USDA (frais d'endorsement) | Oui via menu | Non sans connaître APHIS/endorsement/VEHCS | Oui si on part à l'étranger | 2/5 |
| Boutons « Start from your question » | Oui | Oui | Oui | 5/5 |
| Copy share link / Print / How this is computed | Oui | Oui | Moyen | 4/5 |
| Accordéons (Mistakes that cost a trip…) | Oui | Oui mais mise en page bizarre | Oui | 3/5 |

## 5. Enchaînement et navigation

- Bon : fil d'Ariane partout (« Home / Airlines and fees / … »), menu ☰ structuré en 3 rubriques, liens « Full calculator: … → » au bas des mini-outils.
- Moins bon : les pages répètent le même grand calculateur (accueil, page comparée, Alaska, American) avec des préréglages différents (Round trip / One way / Mexico) — ça donne une impression de déjà-vu sans que je comprenne ce que chaque page ajoute.
- Trois pages « carrier » dans le menu au nom presque identique.
- Les références « above » qui pointent vers le bas (Alaska, CDC form) désorientent.
- Pas de United, JetBlue, Allegiant : si c'est ma compagnie, je repars sur Google.
- Pas de bouton retour en haut / pas de saut vers la page suivante logique (« Next: get the CDC receipt »).

## 6. Difficultés classées

1. **Bandeaux « Example » faux** — 05-…-suite5 (« 17 × 11 × 10 in » alors que 9 est affiché), 07-…-suite6 (« European Union country » alors que Japan), 09-…-suite6 (« low-risk country » alors que Brazil). Vécu : je doute de tout le calcul. Reco : générer le texte du bandeau à partir des valeurs réellement affichées, ou ne pas mettre de bandeau sur les mini-outils préréglés différemment. Texte : « Example: one dog leaving the US for Japan — change any figure to see your own result ».
2. **Vérificateur de sac : 4 lignes pour « X of 5 », Frontier absente** — 01-accueil-suite6, 05-…-suite6, 06-…-suite6. Vécu : « 2 of 5… American, Frontier » mais je ne vois pas Frontier. Reco : afficher les 5 compagnies dans la liste.
3. **Taille Delta contradictoire** — 01-accueil-suite2 (« 18 × 11 × 11 in soft recommended ») vs 01-accueil-suite6 (« No size published »). Reco : écrire « Delta — No maximum published (18 × 11 × 11 in recommended): your carrier is within the recommendation » ou équivalent.
4. **Préréglage « Cheapest within the US » qui affiche Delta $300** — 01-accueil-suite1. Vécu : contradiction immédiate sur le tout premier outil. Reco : ce bouton doit sélectionner Alaska ($200), ou se renommer « Within the US ».
5. **Minuscules « us », « mexico »** — 01-accueil-suite1/2, 04, 05, 06 (« within the mainland us », « us to or from mexico »). Vécu : ça fait site bâclé. Reco : « within the mainland US », « US to or from Mexico ».
6. **Unité collée au nombre dans les champs** — 08-…-1 et suite3 (« 2months »), 09-…-1 et suite6 (« 36months »). Reco : réserver la place de l'unité (padding à droite) comme pour « in » et « lb ».
7. **Jargon administratif non expliqué** — 07 (« APHIS », « USDA endorsement », « VEHCS »), 01-accueil-suite10. Reco : une ligne d'explication sous le résultat. Texte : « USDA endorsement: the government stamp your vet's health certificate needs before you fly abroad — $101 for one pet. » ; titre de page : « Health certificate for flying abroad: USDA stamp and fee ».
8. **Renvois « above » qui sont en dessous + accordéons cassés** — 05-…-1 (« with your fee above »), 08-…-1 (« check above how long your receipt stays valid »), 08-…-suite6 (▶ sur sa propre ligne). Reco : « with your fee below » / « check below… » ; mettre le ▶ sur la même ligne que le titre de l'accordéon.

## 7. À garder

- Le H1 + la phrase-prix de l'accueil (« from $100 each way on Alaska to $150 on Delta and American ») : répond en 3 s à la recherche Google.
- Les 4 boutons « Start from your question ».
- Le gros chiffre ($300, « Receipt only », « 4 months left ») et le tableau des 5 compagnies juste en dessous.
- La date de lecture partout (« read on November 13, 2026 ») et l'honnêteté sur ce qui manque (United/JetBlue/Allegiant).
- Les phrases concrètes : « A carrier bought for Delta or American at 18 inches long is one inch too long for Alaska », « a 4-pound carrier leaves 16 pounds for the pet ».
- « The three cases » + la liste des pays à risque (Brazil, Dominican Republic… vs Mexico, Jamaica…).
- Les 5 étapes APHIS « What happens / Who does it ».
- « Nothing sold, no contact details asked. »

## 8. Notes

Clarté : 7/10
Facilité : 7/10
Utilité : 8/10
