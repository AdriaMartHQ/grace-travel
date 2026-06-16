export type Language = 'en' | 'zh' | 'tr';

// 基础翻译结构：为常用访问点提供类型约束，其余字段保持灵活
import type { Tour, Ticket } from './types';

export interface BaseTranslations {
  nav: {
    home: string;
    tours: string;
    faith: string;
    about: string;
    tickets: string;
    contact: string;
    enquire: string;
    closeMenu?: string;
    // dropdown nav additions
    itineraries?: string;      // dropdown trigger label
    turkeySection?: string;    // dropdown section header
    turkeyClassic?: string;    // S-series label
    turkeyClassicDesc?: string;
    faithPilgrimage?: string;  // Z-series label
    faithPilgrimageDesc?: string;
    otherDest?: string;        // second section header
    balkans?: string;
    balkansDesc?: string;
    holyland?: string;
    holylandDesc?: string;
    routesSection?: string;    // mobile section header
    servicesSection?: string;  // mobile section header
  };
  seo?: Record<
    string,
    {
      title: string;
      description: string;
      keywords: string;
    }
  >;
  toursData?: Tour[];
  ticketsData?: Ticket[];
  faqs?: { q: string; a: string }[];
  footer?: {
    brandEn?: string;
    brandZh?: string;
    lead?: string;
    statement?: string;
    explore?: string;
    about?: string;
    contact?: string;
    compliance?: string;
    istanbulOffice?: string;
    address?: string;
    licensedAGroup?: string;
    officialLicensed?: string;
    langSupport?: string;
    emailLabel?: string;
    licenseInfo?: string;
    rights?: string;
    tursabText?: string;
    tursabBacklink?: string;
  };
  [key: string]: any;
}
