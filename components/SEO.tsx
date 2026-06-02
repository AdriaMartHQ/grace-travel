import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  /** Optional override schema. If omitted, a schema is auto-generated from title/description. */
  schema?: Record<string, unknown>;
}

const AGENCY = {
  '@type': 'TravelAgency',
  name: 'Grace Way Travel Agency',
  alternateName: '恩途国际旅行社',
  url: 'https://grace.tr',
  telephone: '+90 506 497 20 26',
};

function injectPageSchema(data: Record<string, unknown>) {
  let el = document.querySelector('script[data-schema="page"]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-schema', 'page');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = `${title} | Grace Way Travel`;
    }

    // 2. Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute('content', description);

    // 3. Meta keywords
    let metaKw = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.setAttribute('name', 'keywords');
      document.head.appendChild(metaKw);
    }
    if (keywords) metaKw.setAttribute('content', keywords);

    // 4. Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const pageUrl = `${window.location.origin}${window.location.pathname}`;
    canonical.setAttribute('href', pageUrl);

    // 5. og:url + og:title + og:description per route
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', pageUrl);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) ogTitle.setAttribute('content', `${title} | Grace Way Travel`);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute('content', description);

    // 6. HTML lang (BCP 47)
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language === 'tr' ? 'tr-TR' : 'en';

    // 7. Auto JSON-LD schema
    const pathname = window.location.pathname;
    if (schema) {
      injectPageSchema(schema);
    } else if (pathname.startsWith('/itineraries/') && title) {
      injectPageSchema({
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: title,
        description: description ?? '',
        url: pageUrl,
        touristType: { '@type': 'Audience', audienceType: '华人旅行者' },
        provider: AGENCY,
      });
    } else if (title) {
      injectPageSchema({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description: description ?? '',
        url: pageUrl,
        isPartOf: { '@type': 'WebSite', name: 'Grace Way Travel Agency', url: 'https://grace.tr' },
      });
    }
  }, [title, description, keywords, schema, language]);

  return null;
};

export default SEO;
