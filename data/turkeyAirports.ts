export type SupportedCountryCode = 'tr';

export interface TransferAirport {
  name: string;
  code: string;
  city: string;
  country: SupportedCountryCode;
  lat: number;
  lng: number;
  cityCenterLat: number;
  cityCenterLng: number;
}

export interface TransferDestination {
  id: string;
  label: string;
  city: string;
  region: string;
  country: SupportedCountryCode;
  lat: number;
  lng: number;
  keywords: string[];
  airportCodes?: string[];
}

export interface PopularTransferSuggestion {
  id: string;
  label: string;
  address: string;
}

export const turkeyAirports: TransferAirport[] = [
  {
    name: 'Istanbul Airport',
    code: 'IST',
    city: 'Istanbul',
    country: 'tr',
    lat: 41.2753,
    lng: 28.7519,
    cityCenterLat: 41.0082,
    cityCenterLng: 28.9784,
  },
  {
    name: 'Sabiha Gokcen Airport',
    code: 'SAW',
    city: 'Istanbul',
    country: 'tr',
    lat: 40.8986,
    lng: 29.3092,
    cityCenterLat: 41.0082,
    cityCenterLng: 28.9784,
  },
  {
    name: 'Antalya Airport',
    code: 'AYT',
    city: 'Antalya',
    country: 'tr',
    lat: 36.8987,
    lng: 30.8006,
    cityCenterLat: 36.8841,
    cityCenterLng: 30.7056,
  },
  {
    name: 'Ankara Esenboga Airport',
    code: 'ESB',
    city: 'Ankara',
    country: 'tr',
    lat: 40.1281,
    lng: 32.9951,
    cityCenterLat: 39.9334,
    cityCenterLng: 32.8597,
  },
  {
    name: 'Izmir Adnan Menderes Airport',
    code: 'ADB',
    city: 'Izmir',
    country: 'tr',
    lat: 38.2924,
    lng: 27.157,
    cityCenterLat: 38.4237,
    cityCenterLng: 27.1428,
  },
  {
    name: 'Dalaman Airport',
    code: 'DLM',
    city: 'Dalaman',
    country: 'tr',
    lat: 36.7131,
    lng: 28.7925,
    cityCenterLat: 36.7654,
    cityCenterLng: 28.8044,
  },
  {
    name: 'Bodrum Milas Airport',
    code: 'BJV',
    city: 'Bodrum',
    country: 'tr',
    lat: 37.2506,
    lng: 27.6643,
    cityCenterLat: 37.0344,
    cityCenterLng: 27.4305,
  },
  {
    name: 'Trabzon Airport',
    code: 'TZX',
    city: 'Trabzon',
    country: 'tr',
    lat: 40.9951,
    lng: 39.7897,
    cityCenterLat: 41.0015,
    cityCenterLng: 39.7178,
  },
  {
    name: 'Kayseri Airport',
    code: 'ASR',
    city: 'Kayseri',
    country: 'tr',
    lat: 38.7704,
    lng: 35.4954,
    cityCenterLat: 38.7225,
    cityCenterLng: 35.4875,
  },
  {
    name: 'Gaziantep Airport',
    code: 'GZT',
    city: 'Gaziantep',
    country: 'tr',
    lat: 36.9472,
    lng: 37.4787,
    cityCenterLat: 37.0662,
    cityCenterLng: 37.3833,
  },
];

export const turkeyTransferDestinations: TransferDestination[] = [
  {
    id: 'istanbul-sultanahmet',
    label: 'Sultanahmet, Istanbul',
    city: 'Istanbul',
    region: 'Old City',
    country: 'tr',
    lat: 41.0054,
    lng: 28.9768,
    keywords: ['sultanahmet', 'old city', 'fatih'],
    airportCodes: ['IST', 'SAW'],
  },
  {
    id: 'istanbul-taksim',
    label: 'Taksim, Istanbul',
    city: 'Istanbul',
    region: 'Beyoglu',
    country: 'tr',
    lat: 41.0369,
    lng: 28.985,
    keywords: ['taksim', 'beyoglu', 'istiklal'],
    airportCodes: ['IST', 'SAW'],
  },
  {
    id: 'istanbul-galata',
    label: 'Galata / Karakoy, Istanbul',
    city: 'Istanbul',
    region: 'Galata',
    country: 'tr',
    lat: 41.0256,
    lng: 28.9739,
    keywords: ['galata', 'karakoy', 'galataport'],
    airportCodes: ['IST', 'SAW'],
  },
  {
    id: 'istanbul-kadikoy',
    label: 'Kadikoy, Istanbul',
    city: 'Istanbul',
    region: 'Kadikoy',
    country: 'tr',
    lat: 40.9917,
    lng: 29.0277,
    keywords: ['kadikoy', 'kadiköy'],
    airportCodes: ['IST', 'SAW'],
  },
  {
    id: 'antalya-center',
    label: 'Antalya City Center',
    city: 'Antalya',
    region: 'City Center',
    country: 'tr',
    lat: 36.8841,
    lng: 30.7056,
    keywords: ['antalya', 'city center', 'downtown', 'center'],
    airportCodes: ['AYT'],
  },
  {
    id: 'antalya-lara',
    label: 'Lara Beach, Antalya',
    city: 'Antalya',
    region: 'Lara',
    country: 'tr',
    lat: 36.8583,
    lng: 30.8456,
    keywords: ['lara', 'lara beach', 'kundu'],
    airportCodes: ['AYT'],
  },
  {
    id: 'antalya-belek',
    label: 'Belek, Antalya',
    city: 'Antalya',
    region: 'Belek',
    country: 'tr',
    lat: 36.8628,
    lng: 31.0568,
    keywords: ['belek'],
    airportCodes: ['AYT'],
  },
  {
    id: 'cappadocia-goreme',
    label: 'Goreme, Cappadocia',
    city: 'Cappadocia',
    region: 'Goreme',
    country: 'tr',
    lat: 38.6431,
    lng: 34.8284,
    keywords: ['cappadocia', 'goreme', 'göreme'],
    airportCodes: ['ASR'],
  },
  {
    id: 'cappadocia-uchisar',
    label: 'Uchisar, Cappadocia',
    city: 'Cappadocia',
    region: 'Uchisar',
    country: 'tr',
    lat: 38.6312,
    lng: 34.8063,
    keywords: ['uchisar', 'uçhisar'],
    airportCodes: ['ASR'],
  },
  {
    id: 'cappadocia-urgup',
    label: 'Urgup, Cappadocia',
    city: 'Cappadocia',
    region: 'Urgup',
    country: 'tr',
    lat: 38.6307,
    lng: 34.9115,
    keywords: ['urgup', 'ürgüp'],
    airportCodes: ['ASR'],
  },
  {
    id: 'izmir-konak',
    label: 'Konak, Izmir',
    city: 'Izmir',
    region: 'Konak',
    country: 'tr',
    lat: 38.4192,
    lng: 27.1287,
    keywords: ['izmir', 'konak'],
    airportCodes: ['ADB'],
  },
  {
    id: 'izmir-alsancak',
    label: 'Alsancak, Izmir',
    city: 'Izmir',
    region: 'Alsancak',
    country: 'tr',
    lat: 38.4381,
    lng: 27.1434,
    keywords: ['alsancak'],
    airportCodes: ['ADB'],
  },
  {
    id: 'bodrum-center',
    label: 'Bodrum Center',
    city: 'Bodrum',
    region: 'City Center',
    country: 'tr',
    lat: 37.0344,
    lng: 27.4305,
    keywords: ['bodrum', 'city center', 'marina'],
    airportCodes: ['BJV'],
  },
  {
    id: 'fethiye-oludeniz',
    label: 'Oludeniz / Fethiye',
    city: 'Fethiye',
    region: 'Oludeniz',
    country: 'tr',
    lat: 36.5498,
    lng: 29.1273,
    keywords: ['fethiye', 'oludeniz', 'ölüdeniz'],
    airportCodes: ['DLM'],
  },
  {
    id: 'gocek-marina',
    label: 'Gocek Marina',
    city: 'Gocek',
    region: 'Gocek',
    country: 'tr',
    lat: 36.7585,
    lng: 28.9413,
    keywords: ['gocek', 'göcek'],
    airportCodes: ['DLM'],
  },
  {
    id: 'ankara-center',
    label: 'Ankara City Center',
    city: 'Ankara',
    region: 'City Center',
    country: 'tr',
    lat: 39.9334,
    lng: 32.8597,
    keywords: ['ankara', 'kizilay', 'kızılay', 'cankaya', 'çankaya'],
    airportCodes: ['ESB'],
  },
  {
    id: 'trabzon-center',
    label: 'Trabzon City Center',
    city: 'Trabzon',
    region: 'City Center',
    country: 'tr',
    lat: 41.0015,
    lng: 39.7178,
    keywords: ['trabzon', 'meydan'],
    airportCodes: ['TZX'],
  },
  {
    id: 'gaziantep-center',
    label: 'Gaziantep City Center',
    city: 'Gaziantep',
    region: 'City Center',
    country: 'tr',
    lat: 37.0662,
    lng: 37.3833,
    keywords: ['gaziantep', 'sahinbey', 'şahinbey'],
    airportCodes: ['GZT'],
  },
];

export const popularTransferSuggestions: PopularTransferSuggestion[] = [
  { id: 'hot-istanbul', label: 'Istanbul', address: 'Sultanahmet, Istanbul' },
  { id: 'hot-antalya', label: 'Antalya', address: 'Lara Beach, Antalya' },
  { id: 'hot-cappadocia', label: 'Cappadocia', address: 'Goreme, Cappadocia' },
];

export const transferAirportsByCountry: Record<SupportedCountryCode, TransferAirport[]> = {
  tr: turkeyAirports,
};

export const transferDestinationsByCountry: Record<SupportedCountryCode, TransferDestination[]> = {
  tr: turkeyTransferDestinations,
};
