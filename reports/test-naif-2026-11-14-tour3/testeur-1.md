# Test naïf du 2026-11-14 (tour3), testeur 1 : flypetrules.com
**Persona :** Américain(e) de 45 ans, salarié(e), à l'aise avec son téléphone, aucune connaissance particulière du sujet, ne lit pas les longs paragraphes. Il/elle a tapé sa question dans Google et a cliqué sur le résultat « Pet Travel 2026: Airline Pet Fees, Dogs and Cats From the US » parce qu'il/elle a vraiment cette question.

## 1. Concept

**Après 5 s :** « C'est un site qui me dit combien les compagnies américaines font payer pour mon chien ou mon chat en cabine, et quels papiers il faut. » Le titre « Pet travel: airline pet fees and rules for a dog or cat » colle exactement au résultat Google. La première phrase donne déjà la réponse chiffrée : « run from $100 each way on Alaska to $150 on Delta and American ». La mention « Independent site: not an airline, a veterinarian or a pet shipper. Nothing sold, no contact details asked. » rassure tout de suite.

**Après 2 min :** « C'est un comparateur des 5 compagnies (Delta, American, Southwest, Alaska, Frontier) avec des petits calculateurs : prix du billet de l'animal selon la route, test de la taille du sac de transport, papiers CDC pour revenir aux États-Unis avec le chien, tampon USDA pour partir à l'étranger. » Le concept est clair.

**Pour qui :** quelqu'un qui part en avion avec un petit chien ou un chat, surtout depuis les États-Unis ; très orienté chien (les 4 boutons d'accueil disent « my dog »).
**Bénéfice concret :** savoir en 10 secondes combien ça coûte aller-retour (« $300 » sur Delta), si mon sac passe sous le siège (« Fits on 4 of 5 airlines ») et quels papiers il faut pour revenir (« CDC form only »).

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'accueil et les pages compagnies ; ça décroche sur les pages administratives.**
Où ça décroche :
- Les noms d'administrations et de documents officiels : « APHIS », « endorse / endorsement », « contract of carriage », « Certification of U.S.-issued Rabies Vaccination », « Certification of Foreign Rabies Vaccination and Microchip, and a facility reservation », « air waybill ». Certains sont expliqués une fois, pas partout.
- Le toggle « Low-risk / High-risk » en haut de la page CDC Dog Import Form, sans la liste d'exemples juste à côté (elle existe sur l'accueil et la page CDC rules, pas visible ici).
- Le tableau « No » / « Not published » : la différence est expliquée dans un paragraphe au-dessus, mais dans le tableau seul, « Not published » pour Alaska vers Hawaï laisse croire que c'est inconnu ou interdit.
- Des tournures étranges pour un Américain : « the five airlines read here », « sites refused our reading », « rendered by script », « refused automated reading ».

## 3. Parcours écran par écran

- **01-accueil-1** — Compris. Titre + réponse chiffrée immédiate + « Start from your question » avec 4 boutons très parlants (« Will my carrier fit under the seat? », « Bringing my dog back to the US », « Taking my dog to Europe », « Total cost of flying my dog »). Seul regret : rien pour « my cat » alors que Google promettait « Dogs and Cats ».
- **01-accueil-suite1** — Compris. Puces « Cheapest within the US / Flying to Mexico / Flying to Europe / Hawaii » + menus Airline / Where you fly / Trip. Encadré jaune « Example: a small dog in the cabin on Delta… — change any figure to see your own result » : très clair. Gros « $300 » lisible. La phrase « United, JetBlue and Allegiant are not covered yet » est honnête mais déçoit si je vole United.
- **01-accueil-suite2** — Compris. Détails (animaux acceptés, 1 carrier, « 18 × 11 × 11 in soft recommended »), puis comparatif des 5 compagnies. « the booking screen is the price » : bonne mise en garde.
- **01-accueil-suite3** — Compris. Fin du comparatif ; paragraphe « how to read the result » qui explique « No » et « Not published » — utile mais en texte long, je l'aurais sauté.
- **01-accueil-suite4** — Compris. Section « Will your carrier fit under the seat? » ; le paragraphe d'intro avec trois liens soulignés et « IATA » est trop dense, je descends directement au formulaire.
- **01-accueil-suite5** — Compris. Longueur / largeur / hauteur / poids en pouces et livres, « Soft-sided ». « More about your case (optional, already filled in) — We assumed: Your airline: Any of the five airlines » : un peu bizarre, je ne vois pas pourquoi c'est caché.
- **01-accueil-suite6** — Coince légèrement. « Fits on 4 of 5 airlines » puis Southwest « Fits if it slides under the seat: no maximum published » : donc ce n'est pas un vrai oui, et pourtant compté dans les 4. Delta « Fits: no maximum, and within the 18 × 11 × 11 in it recommends » : « no maximum » puis « recommends » une taille, je ne sais plus s'il y a une limite.
- **01-accueil-suite7** — Compris. Lien « Full calculator… → », résumé des prix avec « Show the whole paragraph » (bien, le texte est replié).
- **01-accueil-suite8 / suite9** — Compris mais long. Fiches par compagnie : « Hawaii and abroad » mélange des infos très différentes (« $200; not to the UK or Hawaii », « none across the Atlantic », « cabin: fee not published, ask Alaska; cargo hold: Canada, Mexico, Costa Rica »). C'est la 2e fois que je vois les mêmes 5 prix.
- **01-accueil-suite10** — Compris. Explication honnête sur United/JetBlue/Allegiant. Section « Bringing a dog back into the United States » : paragraphe long mais l'essentiel (formulaire CDC, puce électronique, 6 mois, bonne santé) passe.
- **01-accueil-suite11** — Compris. Le passage sur les 111 pays à risque est lourd (« a booking at one of 9 CDC-registered animal care facilities at 8 airports »). Le calculateur « What does your dog need to come back? » arrive et sauve la mise.
- **01-accueil-suite12** — Compris. « CDC form only » en très gros, puis la liste. Clair et rassurant.
- **02-menu-1 / suite1** — Compris. 3 rubriques nettes : « Airlines and fees », « Dogs entering the US », « Taking a pet abroad ». « Flying with a cat » existe enfin, mais caché tout en bas de la 1re rubrique. Le menu est long ; à la fin de suite1 on voit le contenu de la page dépasser sous le menu (bandeau « Within the mainland US » coupé), effet un peu brouillon.
- **03-en-about-1 à suite4** — Compris. Qui est derrière, pourquoi le site existe (« blog lists that earn a commission »), contact. Ça inspire confiance. Mais : adresse à Clermont-Ferrand, France, pour un site sur les règles américaines — je me demande pourquoi. Et « rendered by script », « refused automated reading » : jargon technique.
- **04-en-airline-pet-policy-1 / suite1 / suite2** — Compris, mais c'est exactement le même calculateur et le même tableau qu'à l'accueil. Je me demande si j'ai bien changé de page.
- **04-en-airline-pet-policy-suite3 à suite5** — Compris et très utile : tableau par route (mainland, Hawaï, entre les îles, Canada, Mexique, Europe, Royaume-Uni). Le résumé « Two cases stand out » est bien. Seul frein : « No » vs « Not published » à décoder.
- **04-en-airline-pet-policy-suite6** — Compris. « Per flight: 2 in Delta First, 4 in Comfort and Main » ; « 1 or 5 on regional jets » (pourquoi 1 ou 5 ?) intrigue.
- **05-en-alaska-airlines-pet-policy-1 à suite2** — Compris. « $200 » aller-retour Alaska. Encore le tableau des 5 compagnies (3e fois).
- **05-en-alaska-airlines-pet-policy-suite3 / suite4** — Compris. Règles claires (pas de pit-bull sauf chien d'assistance, sac souple seulement). Phrase utile : « A carrier bought for Delta or American at 18 inches long is one inch too long for Alaska. » — excellent.
- **05-en-alaska-airlines-pet-policy-suite5 / suite6** — Compris. « Fits on Alaska » + « Fits on all 5 airlines ». Clair. Mais la phrase d'intro « the last of the five read here that still flies pets in the baggage compartment » : « read here » sonne faux.
- **06-en-american-airlines-pet-policy-1 à suite2** — Compris. Ici l'exemple est « US to or from Mexico » (ailleurs c'était mainland) : je risque de lire « $300 » comme le prix domestique (même montant par hasard). « No pet in the cabin » / « Fee not published — Ask the airline » : clair ici, mieux que « Not published » seul.
- **06-en-american-airlines-pet-policy-suite3 / suite4** — Compris. Tableau des 3 tailles, « American Eagle (regional) » : je ne sais pas toujours si mon vol est « Eagle ». L'exemple « a 4-pound carrier leaves 16 pounds for the pet » est très parlant.
- **06-en-american-airlines-pet-policy-suite5 / suite6** — Compris. « Fits on American » + « too big for Alaska only ».
- **07-en-aphis-pet-travel-1** — Coince au titre : « APHIS pet travel: the USDA office that stamps your pet's health certificate ». « APHIS » ne me dit rien ; heureusement le chapeau explique « stamps, or "endorses" ». Les choix Leaving / Entering, Dog, European Union country sont simples.
- **07-en-aphis-pet-travel-suite1 / suite2** — Compris. « USDA stamp: $101 » + « First step: a USDA-accredited veterinarian, as soon as the trip is decided » : très actionnable. « Coming back: CDC Dog Import Form receipt » : bon rappel.
- **07-en-aphis-pet-travel-suite3** — Décroche un peu : « hedgehogs and tenrecs », « live poultry », « 6 or more pet birds » : pas mon sujet, je zappe.
- **07-en-aphis-pet-travel-suite4** — Compris. Les 5 étapes numérotées avec « Who does it » : très bien.
- **07-en-aphis-pet-travel-suite5 / suite6** — Compris. « The endorsement is the destination's demand, not a US one » : clair. « screwworm » : mot inconnu. Deuxième calculateur Japan « $160 ».
- **08-en-cdc-dog-import-form-1** — Coince. Je viens chercher comment remplir ce formulaire ; la première chose demandée est « Months since the receipt was issued » et la réponse est « 4 months left ». Je n'ai pas encore de reçu. « Low-risk / High-risk » sans exemples sous les boutons.
- **08-en-cdc-dog-import-form-suite1** — Compris. « Fee: none listed by CDC », « Show it to the airline before boarding, then US Customs and Border Protection » : très utile.
- **08-en-cdc-dog-import-form-suite2 / suite3** — Compris mais technique. Les trois parties A/B/C avec « air waybill, the cargo shipping number », « plate or vessel ». Le lien pour aller remplir le formulaire n'est qu'un lien souligné dans le texte (« CDC page on bringing a dog into the United States »), pas un bouton.
- **08-en-cdc-dog-import-form-suite4** — Compris. « By car or bus from Canada or Mexico, the same receipt is required, even if the dog stays in the vehicle » : info qui m'aurait échappé, merci.
- **08-en-cdc-dog-import-form-suite5 / suite6** — Compris. Accordéons (« Mistakes that cost a trip », « What to have at hand before you start ») et FAQ « Tap a question to see the answer » : agréables. « Next steps » en cartes : bien.
- **09-en-cdc-dog-import-rules-1 / suite1 / suite2** — Compris. Même calculateur que sur l'accueil, résultat « CDC form only ». « Cats need no CDC form. » : enfin une info chat claire.
- **09-en-cdc-dog-import-rules-suite3 / suite4** — Compris sur le fond, lourd sur la forme : « Certification of U.S.-issued Rabies Vaccination, endorsed by USDA before leaving », « Certification of Foreign Rabies Vaccination and Microchip, and a facility reservation ». Le cas « not vaccinated: entry refused » est net.
- **09-en-cdc-dog-import-rules-suite5** — Compris. Liste des pays à risque courants (Brazil, Mexico non…) : très utile. « A US dog going to a high-risk country » : avertissement important (« It cannot be done afterwards from abroad »).
- **09-en-cdc-dog-import-rules-suite6** — Compris. « Check another case » avec Brazil pré-rempli : bonne idée.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Boutons « Start from your question » (accueil) | Oui, tout de suite | Oui | Oui | 5 |
| Puces « Or pick a common trip » | Oui | Oui | Oui | 4 |
| Calculateur de frais (compagnie / route / aller-retour) | Oui | Oui, gros chiffre clair | Très | 5 |
| Comparatif des 5 compagnies sous le résultat | Oui | Oui | Oui (mais répété partout) | 4 |
| Test « Will your carrier fit » | Oui | Oui, sauf « Fits if it slides » et « no maximum… recommends » | Très | 4 |
| « What does your dog need to come back? » | Oui | Oui (« CDC form only ») | Très | 4 |
| Tableau par route (page comparatif) | Oui | Oui, « No » vs « Not published » à décoder | Très | 4 |
| Calculateur tampon USDA (APHIS) | Oui | Oui, une fois le titre passé | Oui | 4 |
| Validité du reçu CDC | Oui | Oui | Moyen : ne sert qu'à qui a déjà un reçu | 3 |
| Liens « Copy share link / Print / How this is computed » | Oui, petits | Oui | Moyen | 3 |
| « Show the whole paragraph » / accordéons / FAQ | Oui | Oui | Oui | 5 |
| Menu ☰ | Oui | Oui | Oui, mais long | 4 |

## 5. Enchaînement et navigation

- Fil d'Ariane (« Home / Airlines and fees / … ») sur chaque page : je sais où je suis.
- Le menu est bien rangé en 3 rubriques, mais long sur téléphone ; « Flying with a cat » est noyé en bas.
- Les pages compagnies et comparatif répètent le même bloc calculateur + tableau des 5 compagnies : impression de tourner en rond. Une fois sur la page Alaska, j'attends Alaska en premier, pas une 3e fois les 5 prix.
- Les « Next steps » en fin de page CDC Dog Import Form donnent une bonne suite. Le lien vers le vrai formulaire CDC, lui, n'est pas mis en avant.
- L'accueil fait 13 écrans : tout y est, mais je n'irai pas au bout ; heureusement les 4 boutons du haut servent de sommaire.

## 6. Difficultés classées

1. **08-en-cdc-dog-import-form-1** — Vécu : je viens savoir comment remplir le formulaire CDC ; on me demande « Months since the receipt was issued » et on me répond « 4 months left ». Je n'ai pas de reçu, je ne vois pas de bouton pour aller le remplir. Recommandation : en haut de page, un bouton bien visible vers le formulaire officiel, puis une question de départ « Have you filled it in yet? ». Texte : bouton « Fill in the CDC Dog Import Form (free, about 10 min) → » ; libellé du calculateur « Already have a receipt? Check how long it stays valid ».
2. **01-accueil-suite6 (et 05/06)** — Vécu : « Fits on 4 of 5 airlines » alors que Southwest c'est « Fits if it slides under the seat » et Delta « no maximum, and within the 18 × 11 × 11 in it recommends ». Je ne sais pas si c'est un vrai oui. Recommandation : séparer les oui sûrs des oui probables. Texte : « Fits on 3 airlines, likely on Southwest (no size published), too big for Alaska » ; Delta : « Fits: Delta sets no hard limit; your carrier is within the 18 × 11 × 11 in it recommends ».
3. **07-en-aphis-pet-travel-1 et 09-…-suite4** — Vécu : « APHIS », « endorse », « Certification of U.S.-issued Rabies Vaccination », « facility reservation », « screwworm » : je décroche. Recommandation : titre en mots simples, sigle ensuite, et une parenthèse de traduction pour chaque nom de document. Texte du titre : « USDA stamp for your pet's health certificate (APHIS): cost and steps » ; « Certification of U.S.-issued Rabies Vaccination (the CDC rabies form your US vet fills in) ».
4. **04-en-airline-pet-policy-suite4 / suite5** — Vécu : dans le tableau, « Not published » ressemble à « interdit » ou « inconnu », et je ne relis pas le paragraphe au-dessus. Recommandation : employer partout la formule déjà présente sur la page American. Texte : « Not published » → « Allowed? Ask the airline » ; « No » → « No pets in cabin ».
5. **04, 05, 06 (suite1-suite2 de chaque)** — Vécu : le même calculateur et le même tableau des 5 compagnies reviennent sur l'accueil, la page comparatif, Alaska et American ; j'ai l'impression de ne pas avoir changé de page. Recommandation : sur une page compagnie, montrer d'abord la carte de cette compagnie (prix, taille, animaux, Hawaï/étranger) et replier le comparatif. Texte du repli : « Compare with the other four airlines ▾ ».
6. **01-accueil-1 / 02-menu-1** — Vécu : le résultat Google parlait de « Dogs and Cats » ; l'accueil ne propose que « my dog » et « Flying with a cat » est caché en bas du menu. Un propriétaire de chat se demande s'il est au bon endroit. Recommandation : ajouter un 5e bouton d'accueil. Texte : « Flying with my cat → ».
7. **06-en-american-airlines-pet-policy-1** — Vécu : l'exemple est « US to or from Mexico » alors que partout ailleurs c'est le domestique ; je lis « $300 » sans voir que c'est pour le Mexique. Recommandation : même route par défaut partout (mainland), ou mettre la route dans le grand chiffre. Texte : « $300 round trip to or from Mexico ».
8. **03-en-about-1 à suite3** — Vécu : « refused automated reading », « rendered by script », « the five airlines read here » : jargon de technicien ; et l'adresse française surprend sur un site de règles américaines sans une phrase d'explication. Recommandation : texte simple. Texte : « United, JetBlue and Allegiant: we could not check their pages, so we give no figure rather than guess. » ; remplacer « the five airlines read here » par « the five airlines we checked ».

## 7. À garder

- La première phrase de l'accueil qui donne la fourchette de prix tout de suite.
- « Independent site: not an airline, a veterinarian or a pet shipper. Nothing sold, no contact details asked. »
- Les 4 boutons « Start from your question ».
- Les encadrés jaunes « Example: … — change any figure to see your own result ».
- Les très gros résultats : « $300 », « Fits on 4 of 5 airlines », « CDC form only », « USDA stamp: $101 », « 4 months left ».
- « the booking screen is the price » et les dates de lecture partout : on sait que c'est à jour.
- « A carrier bought for Delta or American at 18 inches long is one inch too long for Alaska. »
- Les 5 étapes APHIS avec « Who does it ».
- « By car or bus from Canada or Mexico, the same receipt is required, even if the dog stays in the vehicle » et « Cats need no CDC form. »
- Les textes repliés (« Show the whole paragraph »), les accordéons et la FAQ « Tap a question to see the answer ».
- L'honnêteté sur United, JetBlue et Allegiant non couverts.

## 8. Notes

Clarté : 8/10
Facilité : 7/10
Utilité : 9/10
