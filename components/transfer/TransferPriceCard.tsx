import React from 'react';
import { BadgeDollarSign, CarFront, Languages, MapPinned, ShieldCheck } from 'lucide-react';
import type { TransferQuoteResponse } from '../../lib/airportTransfer';

interface TransferPriceCardProps {
  quote: TransferQuoteResponse;
  labels: {
    quoteTitle: string;
    startingFrom: string;
    majorAirports: string;
    noAddress: string;
    distance: string;
    route: string;
    customQuote: string;
    fixedPrice: string;
    noHiddenFees: string;
    englishDriver: string;
    liveEstimate: string;
    contactToConfirm: string;
  };
}

const TransferPriceCard: React.FC<TransferPriceCardProps> = ({ quote, labels }) => {
  const hasDistance = typeof quote.distance_km === 'number';
  const hasFixedPrice = typeof quote.price === 'number';

  return (
    <aside className="rounded-[2.5rem] border border-slate-100 bg-slate-950 p-6 text-white shadow-sm md:sticky md:top-28 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#FF9D00]">
            {labels.quoteTitle}
          </div>
          <div className="mt-2 text-4xl font-black tracking-tight">
            {hasFixedPrice ? `$${quote.price}` : labels.customQuote}
          </div>
        </div>
        <div className="rounded-full bg-white/10 p-4">
          <BadgeDollarSign className="h-7 w-7 text-[#FF9D00]" />
        </div>
      </div>

      <div className="mt-5 rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
          {labels.startingFrom}
        </div>
        <div className="mt-2 text-lg font-black text-white">$50</div>
        <div className="mt-2 text-sm leading-relaxed text-white/65">
          {hasDistance ? labels.liveEstimate : labels.noAddress}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <MapPinned className="mt-0.5 h-5 w-5 text-[#FF9D00]" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
              {labels.route}
            </div>
            <div className="mt-1 text-sm leading-relaxed text-white/80">
              {quote.airport?.name || labels.majorAirports}
              {quote.matched_destination ? ` → ${quote.matched_destination}` : ''}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CarFront className="mt-0.5 h-5 w-5 text-[#FF9D00]" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
              {labels.distance}
            </div>
            <div className="mt-1 text-sm leading-relaxed text-white/80">
              {hasDistance ? `${quote.distance_km} km` : labels.contactToConfirm}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-3">
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-white/80">
          <ShieldCheck className="h-4 w-4 text-[#FF9D00]" />
          {labels.fixedPrice}
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-white/80">
          <BadgeDollarSign className="h-4 w-4 text-[#FF9D00]" />
          {labels.noHiddenFees}
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-white/80">
          <Languages className="h-4 w-4 text-[#FF9D00]" />
          {labels.englishDriver}
        </div>
      </div>
    </aside>
  );
};

export default TransferPriceCard;
