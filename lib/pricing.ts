import type { Language } from '../translations';

/**
 * The ONE place that decides what an itinerary's price shows — on its own page, on the
 * /tours list and on the home page cards.
 *
 * Since 2026-08-31 every itinerary is "inquiry only". That rule used to be copied as a
 * `price` string into each itinerary's data in all three locales plus three pages' local
 * data — about twenty copies — and the switch missed two of them: Z5 and Z6 rendered
 * "¥询价定制" for weeks. Those strings are gone; itinerary data no longer carries a price.
 *
 * To publish a real price again, give that itinerary's entry in `toursData` a numeric
 * `price` (the cards already format numbers with the currency symbol) and extend this
 * function to take the itinerary into account. The last published prices are kept in
 * gracetravel-odoo/data/tours_catalog.json.
 */
const INQUIRY_ONLY: Record<Language, string> = {
  zh: '询价定制',
  en: 'Request a Custom Quote',
  tr: 'Size Özel Teklif Alın',
};

export const itineraryPrice = (language: Language): string => INQUIRY_ONLY[language];
