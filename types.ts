
export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  /** Fixed price in CNY. Omit for inquiry-only itineraries — see lib/pricing.ts. */
  price?: number;
  image: string;
  category: 'classic' | 'luxury' | 'family' | 'balkan';
  highlights: string[];
  path?: string;
}

export interface Ticket {
  id: string;
  title: string;
  price: number;
  includes: string[];
  image: string;
  category: 'entry' | 'activity' | 'daytrip';
}

export interface FAQItem {
  question: string;
  answer: string;
}
