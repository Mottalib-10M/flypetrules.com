# Synthèse du test naïf du 2026-11-14 : flypetrules.com

Notes : testeur 1 7/7/8, testeur 2 7/7/8, testeur 3 6/6/8. Une ligne par difficulté ; (n) = nombre de testeurs qui la relèvent.

| Difficulté | Testeurs | Décision | Raison / ce qui a été fait |
|---|---|---|---|
| Encadré jaune « Example: … » qui contredit les valeurs affichées (Alaska 17 × 11 × 10 au-dessus de 9, « European Union country » avec Japan, « low-risk country » avec Brazil) | 3 | **corrigé** | Cause : dans `src/lib/tool-specs.ts` (code du site, pas la trame), les phrases d'exemple étaient écrites en dur (constante `EX` ou texte fixe) au lieu d'être tirées des valeurs. Chaque calculateur écrit désormais son exemple à partir des valeurs à l'écran (y compris celles fixées par la page). Nouveau test `tests/exemple-coherence.test.ts` : pour chaque calculateur de page et chaque mini de chaque page (77 cas), chaque nombre affiché figure dans l'exemple et tout changement de champ qui change le résultat change aussi l'exemple ; il échoue sur l'ancien code (76 échecs). |
| Vérificateur de sac : « 2 of 5 » mais quatre compagnies listées, Frontier absent | 3 | **corrigé** | `mini-specs.ts` coupait le détail à 4 lignes : 5 lignes désormais (les cinq compagnies). |
| Delta « No size published » contre « 18 × 11 × 11 in soft recommended » | 3 | **corrigé** | Le vérificateur dit « No maximum; fits the 18 x 11 x 11 in it recommends » (ou « larger than »). |
| « 2 of 5 » seul, obscur | 3 | **corrigé** | « 2 of 5 airlines », titre « … airlines whose limit it meets », phrase « it meets the published maximum of American and Frontier ». |
| Pastille « Cheapest within the US » active avec Delta, la plus chère | 3 | **corrigé** | La pastille choisit la compagnie la moins chère calculée par le moteur (Alaska) ; elle n'est plus allumée sur l'exemple Delta. |
| « Set by this page » : taille figée ici, poids figé là | 3 | **corrigé** | Tous les mini-vérificateurs de sac laissent modifier longueur, largeur, hauteur, poids et type. |
| Sigles et jargon (APHIS, endorsement, VEHCS, IATA, ADA, CDC, contiguous, legs, kennel) | 3 | **corrigé** | Sigles traduits à leur première apparition (accueil, page APHIS, outils) ; « endorsement » dit « USDA stamp » ; H1 et menu APHIS en mots simples ; « lower 48 states », « both flights, going and coming back », « 1 carrier ». |
| Renvois « above » vers un outil placé en dessous (Alaska, American, CDC form) | 3 | **corrigé** | « below » dans les trois introductions. |
| Liste des volailles inutile (page APHIS) | 3 | **corrigé** | Réduite à « chickens, ducks, geese, turkeys and other farm birds ». |
| Doublon du calculateur de validité du reçu (page CDC form) | 3 | **corrigé** | Le second mini identique est retiré. |
| Trois entrées « carrier » du menu qui se ressemblent | 3 | **corrigé** | « Dog carrier: the size your dog needs », « Dog carrier size by airline: does yours fit? », « Pet carrier: one size for two airlines » ; liens de l'accueil réécrits de même. |
| Unité collée au nombre (« 2months », « 36months ») | 3 | **corrigé** | Marge droite du champ élargie selon la longueur de l'unité (`NumberField.tsx`). Défaut de trame. |
| Triangle des sections repliées sur sa propre ligne | 3 | **corrigé** | Styles `details.fold` ajoutés dans `global.css` : triangle sur la ligne du titre, qui tourne à l'ouverture. |
| Minuscules « within the mainland us », « us to or from mexico » | 3 | **corrigé** | `.toLowerCase()` remplacé par `routeInText` (seul le premier mot passe en minuscule). |
| Tiret « - » dans le tableau par trajet ; Alaska / Hawaï contradictoire | 3 | **corrigé** | « Not published » à la place du tiret ; le texte dit qu'Alaska accepte mais qu'aucun tarif n'est publié pour ce trajet (demander à Alaska). Aucun chiffre ajouté. |
| Pas de lien vers le formulaire officiel du CDC | 2 | **corrigé** | Lien vers la page officielle du CDC (source `cdc_dogs`, déjà citée par le site) sur l'accueil, la page CDC rules et la page CDC form. |
| Rubrique « Dogs entering the US » repliée dans le menu | 2 | **corrigé** | Les trois rubriques du menu mobile sont ouvertes d'office. |
| « Start from your question » et « Start from your case » se ressemblent | 2 | **corrigé** | Le second devient « Or pick a common trip ». |
| « The three cases » montre quatre cas | 2 | **corrigé** | « The four cases » (page, carte et page méthode). |
| Case vide « Round trip » pour Southwest / Frontier (tableau American) | 1 | **corrigé** | Défaut objectif : « No » ou « Ask the airline ». |
| « 1 or 5 on regional jets » | 2 | **corrigé** | Reformulé : 1 ou 5 selon l'avion, que montre l'écran de réservation (pas de chiffre ajouté). |
| Intro Alaska : deux dates d'août en plus du 13 novembre | 1 | **corrigé** | Intro simplifiée (« in August 2026 »). |
| United, JetBlue, Allegiant absents | 3 | **non retenu** | Leurs sites ont refusé la lecture : le site ne publie pas de chiffre non lu à la source (brief : ne rien inventer). |
| Adresse française de l'éditeur | 3 | **non retenu** | Identité légale obligatoire de l'éditeur (Radif Partners). |
| Accueil long, pages qui se ressemblent (même calculateur de prix) | 2 | **non retenu** | Structure de la factory (calculateur en tête de chaque page) ; les sections longues sont déjà repliées. |
| Tableau des 5 compagnies non trié par prix | 1 | **non retenu** | Ordre fixe des compagnies sur tout le site ; un seul testeur. |
| Calculateur American pré-réglé sur le Mexique | 1 | **non retenu** | Le trajet est affiché dans le champ, l'exemple et la légende du tableau. |
| Pas d'entrée « chat » sur l'accueil | 1 | **non retenu** | La page chat existe dans le menu ; un seul testeur. |
| « screwworm », « American Eagle » non expliqués | 1 | **non retenu** | Un seul testeur, termes officiels présents dans les sources. |
