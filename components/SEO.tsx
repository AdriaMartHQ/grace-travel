import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update Title
    if (title) {
      document.title = `${title} | Grace Way Travel`;
    }

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    if (keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.href);
    }

    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [title, description, keywords, language]);

  return null;
};

export default SEO;
