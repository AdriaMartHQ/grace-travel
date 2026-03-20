import React from 'react';
import { Link } from 'react-router-dom';
import type { Journey } from '../chinaInboundContent';
import { getChinaFallbackImage } from '../chinaImageFallback';

interface JourneyCardProps {
  journey: Journey;
  ctaLabel: string;
  basePath: string;
  priority?: boolean;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ journey, ctaLabel, basePath, priority = false }) => {
  const href = `${basePath}/${journey.slug}`;
  const fallbackImage = getChinaFallbackImage(journey.title, journey.location);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = fallbackImage;
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      <Link to={href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={journey.image}
            alt={journey.title}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={handleImageError}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-900 shadow-lg backdrop-blur-md">
            {journey.badge}
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-7 md:p-8 text-left">
        <div className="text-[11px] font-black uppercase tracking-[0.14em] md:tracking-[0.18em] text-[#FF9D00]">
          {journey.location} • {journey.duration}
        </div>
        <Link to={href} className="mt-4 block">
          <h3 className="text-[1.3rem] md:text-[1.55rem] font-black text-slate-900 leading-[1.08] tracking-tight whitespace-nowrap transition-colors group-hover:text-[#FF9D00]">
            {journey.title}
          </h3>
        </Link>
        <p className="mt-4 text-slate-500 leading-relaxed [text-wrap:pretty] line-clamp-3 md:line-clamp-4">
          {journey.subtitle}
        </p>
        <ul className="mt-6 space-y-3">
          {journey.highlights.slice(0, 2).map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
              <span className="mt-1 text-[#FF9D00]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-slate-100">
          <Link
            to={href}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-[11px] font-black uppercase tracking-[0.14em] md:tracking-[0.18em] text-white transition-colors hover:bg-[#FF9D00]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default JourneyCard;
