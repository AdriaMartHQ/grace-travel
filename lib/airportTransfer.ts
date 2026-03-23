import {
  popularTransferSuggestions,
  transferDestinationsByCountry,
  transferAirportsByCountry,
  type SupportedCountryCode,
  type TransferAirport,
  type TransferDestination,
} from '../data/turkeyAirports';

export type TransferDirection = 'pickup' | 'dropoff';
export type PreferredContact = 'whatsapp' | 'email';

export interface TransferFormValues {
  direction: TransferDirection;
  airportCode: string;
  address: string;
  dateTime: string;
  passengers: number;
  contactName: string;
  whatsapp: string;
  email: string;
  preferredContact: PreferredContact;
}

export interface TransferQuoteResponse {
  price: number | null;
  currency: 'USD';
  distance_km: number | null;
  airport: TransferAirport | null;
  matched_destination: string | null;
  is_custom_quote: boolean;
  pricing_note: string;
}

const CHARACTER_MAP: Record<string, string> = {
  ı: 'i',
  İ: 'i',
  ş: 's',
  Ş: 's',
  ğ: 'g',
  Ğ: 'g',
  ü: 'u',
  Ü: 'u',
  ö: 'o',
  Ö: 'o',
  ç: 'c',
  Ç: 'c',
};

const normalizeText = (value: string) =>
  value
    .split('')
    .map((char) => CHARACTER_MAP[char] || char)
    .join('')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const haversineKm = (startLat: number, startLng: number, endLat: number, endLng: number) => {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(endLat - startLat);
  const dLng = toRad(endLng - startLng);
  const lat1 = toRad(startLat);
  const lat2 = toRad(endLat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export const calculateTransferPrice = (distanceKm: number) => {
  if (distanceKm < 20) return 50;
  if (distanceKm <= 50) return 70;
  if (distanceKm <= 100) return 100;
  return null;
};

const findAirport = (airportCode: string, country: SupportedCountryCode) =>
  transferAirportsByCountry[country].find((airport) => airport.code === airportCode) || null;

const findMatchedDestination = (
  address: string,
  airportCode: string,
  country: SupportedCountryCode,
): TransferDestination | null => {
  const normalizedAddress = normalizeText(address);
  if (!normalizedAddress) return null;

  const destinations = transferDestinationsByCountry[country];
  const matches = destinations
    .filter((destination) => {
      const airportMatch =
        !destination.airportCodes || destination.airportCodes.includes(airportCode);
      const keywordMatch = destination.keywords.some((keyword) =>
        normalizedAddress.includes(normalizeText(keyword)),
      );

      return airportMatch && keywordMatch;
    })
    .sort((left, right) => {
      const leftScore = Math.max(...left.keywords.map((keyword) => normalizeText(keyword).length));
      const rightScore = Math.max(
        ...right.keywords.map((keyword) => normalizeText(keyword).length),
      );
      return rightScore - leftScore;
    });

  return matches[0] || null;
};

const fallbackCityCenterDistance = (
  address: string,
  airport: TransferAirport,
  country: SupportedCountryCode,
) => {
  const normalizedAddress = normalizeText(address);
  const knownCities = transferAirportsByCountry[country];
  const matchedCity = knownCities.find((item) =>
    normalizedAddress.includes(normalizeText(item.city)),
  );

  if (!matchedCity) {
    return null;
  }

  return {
    label: `${matchedCity.city} City Center`,
    distanceKm: haversineKm(
      airport.lat,
      airport.lng,
      matchedCity.cityCenterLat,
      matchedCity.cityCenterLng,
    ),
  };
};

export const getTransferQuote = (
  airportCode: string,
  address: string,
  country: SupportedCountryCode = 'tr',
): TransferQuoteResponse => {
  const airport = findAirport(airportCode, country);

  if (!airport) {
    return {
      price: null,
      currency: 'USD',
      distance_km: null,
      airport: null,
      matched_destination: null,
      is_custom_quote: true,
      pricing_note: 'Airport not found',
    };
  }

  const matchedDestination = findMatchedDestination(address, airportCode, country);
  const distanceKm = matchedDestination
    ? haversineKm(airport.lat, airport.lng, matchedDestination.lat, matchedDestination.lng)
    : fallbackCityCenterDistance(address, airport, country)?.distanceKm ?? null;

  if (distanceKm === null) {
    return {
      price: null,
      currency: 'USD',
      distance_km: null,
      airport,
      matched_destination: null,
      is_custom_quote: true,
      pricing_note: 'Please confirm the address on WhatsApp for a custom quote',
    };
  }

  const roundedDistance = Number(distanceKm.toFixed(1));
  const price = calculateTransferPrice(roundedDistance);

  if (price === null) {
    return {
      price: null,
      currency: 'USD',
      distance_km: roundedDistance,
      airport,
      matched_destination:
        matchedDestination?.label || `${airport.city} City Center`,
      is_custom_quote: true,
      pricing_note: 'Distance is over 100 km, custom quote required',
    };
  }

  return {
    price,
    currency: 'USD',
    distance_km: roundedDistance,
    airport,
    matched_destination:
      matchedDestination?.label || `${airport.city} City Center`,
    is_custom_quote: false,
    pricing_note: 'Fixed price, no hidden fees',
  };
};

export const getPopularSuggestions = () => popularTransferSuggestions;

export const buildTransferWhatsAppUrl = ({
  form,
  quote,
  language,
}: {
  form: TransferFormValues;
  quote: TransferQuoteResponse;
  language: 'zh' | 'en' | 'tr';
}) => {
  const labels =
    language === 'zh'
      ? {
          title: '土耳其接送机预约',
          direction: '服务类型',
          pickup: '接机',
          dropoff: '送机',
          airport: '机场',
          address: '地址',
          dateTime: '日期时间',
          passengers: '人数',
          name: '联系人',
          whatsapp: 'WhatsApp',
          email: 'Email',
          quote: '预估报价',
          distance: '预估距离',
          custom: '请按此行程提供自定义报价',
        }
      : language === 'tr'
      ? {
          title: 'Turkiye Havalimani Transfer Talebi',
          direction: 'Hizmet Tipi',
          pickup: 'Karsilama',
          dropoff: 'Havalimanina Birakma',
          airport: 'Havalimani',
          address: 'Adres',
          dateTime: 'Tarih Saat',
          passengers: 'Yolcu',
          name: 'Iletisim Adi',
          whatsapp: 'WhatsApp',
          email: 'Email',
          quote: 'Tahmini Fiyat',
          distance: 'Tahmini Mesafe',
          custom: 'Bu rota icin ozel fiyat rica ederim',
        }
      : {
          title: 'Turkey Airport Transfer Request',
          direction: 'Service',
          pickup: 'Airport Pickup',
          dropoff: 'Airport Drop-off',
          airport: 'Airport',
          address: 'Address',
          dateTime: 'Date & Time',
          passengers: 'Passengers',
          name: 'Contact Name',
          whatsapp: 'WhatsApp',
          email: 'Email',
          quote: 'Estimated Fare',
          distance: 'Estimated Distance',
          custom: 'Please send a custom quote for this route',
        };

  const lines = [
    labels.title,
    `- ${labels.direction}: ${form.direction === 'pickup' ? labels.pickup : labels.dropoff}`,
    `- ${labels.airport}: ${quote.airport?.name || form.airportCode}`,
    `- ${labels.address}: ${form.address}`,
    `- ${labels.dateTime}: ${form.dateTime.replace('T', ' ')}`,
    `- ${labels.passengers}: ${form.passengers}`,
    `- ${labels.name}: ${form.contactName}`,
    form.whatsapp ? `- ${labels.whatsapp}: ${form.whatsapp}` : null,
    form.email ? `- ${labels.email}: ${form.email}` : null,
    quote.distance_km ? `- ${labels.distance}: ${quote.distance_km} km` : null,
    quote.price
      ? `- ${labels.quote}: $${quote.price} ${quote.currency}`
      : `- ${labels.quote}: ${labels.custom}`,
  ].filter(Boolean);

  return `https://wa.me/905064972026?text=${encodeURIComponent(lines.join('\n'))}`;
};
