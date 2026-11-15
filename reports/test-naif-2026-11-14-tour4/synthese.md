# Synthèse du test naïf du 2026-11-14, 4e tour (corrections du 5e et dernier tour) : flypetrules.com

Notes : testeur 1 8/7/8, testeur 2 8/7/8, testeur 3 8/7/9 (Clarté/Facilité/Utilité). Une ligne par difficulté ; (n) = nombre de testeurs qui la relèvent. Dernier tour : seule la correction validée par l'éditeur est faite (vraie contradiction de chiffres). Rien de ce qui a été corrigé aux tours 1 à 4 n'est défait.

| Difficulté | Testeurs | Décision | Raison / ce qui a été fait |
|---|---|---|---|
| Tarifs Delta contradictoires : accueil « Hawaii and abroad: $200; not to the UK or Hawaii » contre $150 vers le Canada dans le comparatif | 3 (+ éditeur) | **corrigé** | Source relue le 2026-11-15 (delta.com/us/en/pet-travel/overview, lisible) : « U.S./Canada/Puerto Rico/U.S. Virgin Islands $150 », « International $200 », pas d'animal en cabine vers Hawaii ni le Royaume-Uni (et 11 autres lieux). Les données (`params-2026.json`, canada 150, autres pays 200, cabinNo hawaii/uk) étaient justes ; la cause était le libellé de l'accueil, qui prenait le tarif Europe pour « abroad ». Cellule Delta de l'accueil : « Canada $150, most other countries $200; Hawaii and the UK: no pets in the cabin » (tarifs lus par `K.feeOr('delta', 'canada')` et `'europe'`). Résumé de l'accueil : « $150 each way to Canada and $200 on other international trips ». Derniers chiffres Delta écrits en dur remplacés par la donnée : « $95 » et « April 8, 2025 » de la page coût (`oldFee`, `feeDate`), date de la légende du tableau de la page Delta. Toutes les occurrences de Delta relues au grep : tous les tarifs viennent de `params-2026.json`. |
| Accueil trop long, prix répétés | 3 | **non retenu** | Dernier tour, hors correction validée ; structure de la factory, déjà non retenu aux tours 2 et 3. |
| Jargon (contract of carriage, endorsement, APHIS, USDA-accredited, air waybill, mainline, American Eagle, tenrecs, ports of entry) | 3 | **non retenu** | Dernier tour, hors correction validée ; une partie traitée au 3e tour. |
| Tableaux à deux colonnes difficiles à lire sur téléphone | 3 | **non retenu** | Dernier tour, hors correction validée ; composant de tableau de la trame (voir compte rendu). |
| « Fits » compté pour Southwest ; « no hard limit set » de Delta ambigu | 2 | **non retenu** | Dernier tour ; libellés revus au 3e tour, compte testé (`carrier-count`). |
| Pastilles « Or pick a common trip » en doublon des cinq boutons et des menus | 3 | **non retenu** | Dernier tour, hors correction validée. |
| Hawaii : la pastille laisse croire que c'est simple ; American ne parle pas de Hawaii | 1 | **non retenu** | La ligne Delta est corrigée ci-dessus ; le reste n'est pas une contradiction de chiffres. |
| Gros chien : rien depuis l'accueil | 1 | **non retenu** | Dernier tour ; la FAQ d'accueil « Is a large dog allowed to fly with me? » y répond. |
| « More about your case (optional, already filled in) » | 1 | **non retenu** | Libellé de la trame ; dernier tour. |
| Trois outils de sac au nom proche dans le menu | 1 | **non retenu** | Un seul testeur ; dernier tour. |
| Âge du chien en mois | 1 | **non retenu** | Unité de la règle CDC ; déjà non retenu au 3e tour. |
| « Cats need no CDC form » peu visible | 1 | **non retenu** | Dit dans la section repliée « Cats » de l'accueil ; dernier tour. |
| Mot « carrier » ambigu | 1 | **non retenu** | Un seul testeur ; dernier tour. |
| Adresse française de l'éditeur | 1 | **non retenu** | Identité légale obligatoire (Radif Partners). |
| Bouton « Entering the US » de la page APHIS | 1 | **non retenu** | Un seul testeur ; dernier tour. |
| Exemple « US to or from Mexico » sur la page American ; double titre « Fits on Alaska » / « Fits on all 5 airlines » | 1-2 | **non retenu** | Déjà non retenu au 3e tour ; le trajet est écrit dans le bandeau d'exemple. |
| Menu ouvert : la page dépasse en bas | 1 | **non retenu** | Composant de la trame (menu mobile). |

`npm run check` : exit 0 le 2026-11-15 (vitest 704/704, check-layout 0 défaut sur 25 pages × 4 largeurs, check-premier-ecran 0 page fautive, check-motcle 0/23 ; journal `logs/fly-t5-check.log`). Capture relue : accueil, tableau des compagnies (`logs/fly-t5-captures/01-accueil-suite8.png`), ligne Delta « Canada $150, most other countries $200; Hawaii and the UK: no pets in the cabin ».
