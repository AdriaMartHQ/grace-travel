
export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  category: 'classic' | 'luxury' | 'family';
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
