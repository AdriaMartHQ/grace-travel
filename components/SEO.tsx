import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

// NOTE: JSON-LD structured data (TouristTrip / WebPage / BreadcrumbList / FAQPage)
// is injected as STATIC HTML at build time by scripts/apply-prerender.mjs, so that
// no-JS crawlers (Baiduspider, GPTBot…) actually see it. This component only handles
// client-side <head> updates for SPA navigation (title/description/canonical/og/lang).

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Title
    if (title) {
      // Avoid doubling the brand when the page title already contains it.
      document.title = title.includes('Grace Way Travel') ? title : `${title} | Grace Way Travel`;
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
    if (ogTitle && title) ogTitle.setAttribute('content', title.includes('Grace Way Travel') ? title : `${title} | Grace Way Travel`);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute('content', description);

    // 6. HTML lang (BCP 47)
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language === 'tr' ? 'tr-TR' : 'en';
  }, [title, description, keywords, language]);

  return null;
};

export default SEO;
