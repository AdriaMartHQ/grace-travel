
import React from 'react';
import { Tour, Ticket, FAQItem } from './types';

export const COLORS = {
  blue: '#0f172a',
  cream: '#f8fafc',
  gold: '#d4af37',
  goldHover: '#b8962e',
};

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Istanbul Magic: Sultanahmet to Bosphorus',
    location: 'Istanbul',
    duration: '3 Days',
    price: 499,
    image: 'https://picsum.photos/seed/istanbul1/800/600',
    category: 'classic',
    highlights: ['Blue Mosque', 'Hagia Sophia', 'Bosphorus Cruise']
  },
  {
    id: '2',
    title: 'Cappadocia Dream: Fairy Chimneys & Balloons',
    location: 'Cappadocia',
    duration: '2 Days',
    price: 350,
    image: 'https://picsum.photos/seed/cap1/800/600',
    category: 'classic',
    highlights: ['Hot Air Balloon', 'Goreme Open Air Museum', 'Underground City']
  },
  {
    id: '3',
    title: 'Ephesus & Pamukkale Heritage',
    location: 'Kusadasi / Denizli',
    duration: '4 Days',
    price: 580,
    image: 'https://picsum.photos/seed/eph1/800/600',
    category: 'classic',
    highlights: ['Ephesus Ruins', 'Travertine Terraces', 'Hierapolis']
  },
  {
    id: '4',
    title: 'Luxury Turquoise Coast Sailing',
    location: 'Fethiye / Kas',
    duration: '7 Days',
    price: 1200,
    image: 'https://picsum.photos/seed/kas1/800/600',
    category: 'luxury',
    highlights: ['Gulet Cruise', 'Butterfly Valley', 'Private Coves']
  },
  {
    id: '5',
    title: 'Family Adventure in Antalya',
    location: 'Antalya',
    duration: '5 Days',
    price: 750,
    image: 'https://picsum.photos/seed/ant1/800/600',
    category: 'family',
    highlights: ['Land of Legends', 'Old Town Marina', 'Duden Waterfalls']
  },
  {
    id: '6',
    title: 'The Great Anatolian Loop',
    location: 'Multiple Cities',
    duration: '10 Days',
    price: 1800,
    image: 'https://picsum.photos/seed/ana1/800/600',
    category: 'classic',
    highlights: ['All Major Sites', 'Cultural Workshops', 'Deep Inland History']
  },
  {
    id: '7',
    title: 'Boutique Izmir & Vineyard Tour',
    location: 'Izmir',
    duration: '3 Days',
    price: 420,
    image: 'https://picsum.photos/seed/izm1/800/600',
    category: 'luxury',
    highlights: ['Urla Vineyards', 'Alsancak Waterfront', 'Cesme Breeze']
  },
  {
    id: '8',
    title: 'Troy & Gallipoli Remembrance',
    location: 'Canakkale',
    duration: '2 Days',
    price: 290,
    image: 'https://picsum.photos/seed/tro1/800/600',
    category: 'classic',
    highlights: ['Wooden Horse', 'Anzac Cove', 'War Memorials']
  }
];

export const TICKETS: Ticket[] = [
  {
    id: 't1',
    title: 'Topkapi Palace Skip-the-Line',
    price: 45,
    includes: ['Fast entry', 'Audio guide', 'Harem section'],
    image: 'https://picsum.photos/seed/top1/400/300',
    category: 'entry'
  },
  {
    id: 't2',
    title: 'Cappadocia Deluxe Balloon Flight',
    price: 220,
    includes: ['1-hour flight', 'Champagne toast', 'Certificate'],
    image: 'https://picsum.photos/seed/ball1/400/300',
    category: 'activity'
  },
  {
    id: 't3',
    title: 'Whirling Dervishes Ceremony',
    price: 35,
    includes: ['Live music', 'Tea service', 'Program booklet'],
    image: 'https://picsum.photos/seed/der1/400/300',
    category: 'activity'
  },
  {
    id: 't4',
    title: 'Bosphorus Dinner Cruise',
    price: 65,
    includes: ['Unlimited soft drinks', 'Cultural show', 'Dinner'],
    image: 'https://picsum.photos/seed/cru1/400/300',
    category: 'activity'
  },
  {
    id: 't5',
    title: 'Ephesus Full Day Private Guided Tour',
    price: 110,
    includes: ['Lunch', 'Private van', 'Expert guide'],
    image: 'https://picsum.photos/seed/epht1/400/300',
    category: 'daytrip'
  },
  {
    id: 't6',
    title: 'Traditional Turkish Bath Experience',
    price: 55,
    includes: ['Oil massage', 'Scrub', 'Sauna access'],
    image: 'https://picsum.photos/seed/ham1/400/300',
    category: 'activity'
  },
  {
    id: 't7',
    title: 'Hagia Sophia Guided Entry',
    price: 30,
    includes: ['Historian guide', 'Fast track', '30-min intro'],
    image: 'https://picsum.photos/seed/hag1/400/300',
    category: 'entry'
  },
  {
    id: 't8',
    title: 'Princes\' Island Bike & Boat',
    price: 40,
    includes: ['Roundtrip ferry', 'Bike rental', 'Map'],
    image: 'https://picsum.photos/seed/isl1/400/300',
    category: 'daytrip'
  },
  {
    id: 't9',
    title: 'Troy Day Trip from Istanbul',
    price: 130,
    includes: ['Hotel pickup', 'Lunch', 'Full entry fees'],
    image: 'https://picsum.photos/seed/trday1/400/300',
    category: 'daytrip'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book a tour with Grace Way?',
    answer: 'You can browse our tour list and click "Enquire Now". This will lead you to a contact form or WhatsApp button. Since we offer boutique services, we prefer to confirm availability and tailor details with you directly.'
  },
  {
    question: 'Is Grace Way a licensed travel agency?',
    answer: 'Yes, Grace Way is a fully licensed Turkish travel agency (TURSAB registered). We operate under strict local regulations to ensure your safety and quality of service.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Standard cancellations up to 7 days before the tour are fully refundable minus a small processing fee. Boutique and luxury packages may have specific terms clearly stated during booking.'
  },
  {
    question: 'Do you offer airport transfers?',
    answer: 'Yes, we provide private airport transfers across all major Turkish airports including IST, SAW, ADB, and AYT. Please contact us for a quote.'
  }
];
