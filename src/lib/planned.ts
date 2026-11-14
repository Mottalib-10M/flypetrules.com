/** Every page id the site is meant to have. Content tests accept links to these ids while pages are being
 *  written; the "all planned pages exist" test fails until each has its file. */
export const PLANNED_GUIDES = [
  'airline-pet-policy', 'delta-pet-policy', 'southwest-pet-policy', 'american-airlines-pet-policy', 'alaska-airlines-pet-policy', 'frontier-pet-policy',
  'pet-carrier', 'dog-carrier', 'dog-carrier-size-airline', 'how-much-does-it-cost-to-fly-a-dog', 'flying-with-a-dog', 'flying-with-a-cat',
  'cdc-dog-import-rules', 'cdc-dog-import-form',
  'aphis-pet-travel', 'pet-health-certificate', 'pet-passport', 'traveling-to-mexico-with-a-dog', 'traveling-to-canada-with-a-dog', 'traveling-to-europe-with-a-dog', 'taking-a-dog-to-the-uk', 'taking-a-dog-to-japan',
];
export const PLANNED_IDS = new Set<string>(PLANNED_GUIDES);
