import React from 'react';
import { CalendarDays, Mail, MapPin, MessageCircleMore, Plane, Users } from 'lucide-react';
import type { PopularTransferSuggestion, TransferAirport } from '../../data/turkeyAirports';
import type { TransferFormValues } from '../../lib/airportTransfer';

interface TransferBookingFormProps {
  airports: TransferAirport[];
  values: TransferFormValues;
  suggestions: PopularTransferSuggestion[];
  labels: {
    airport: string;
    address: string;
    dateTime: string;
    passengers: string;
    contactName: string;
    whatsapp: string;
    email: string;
    pickup: string;
    dropoff: string;
    hotPlaces: string;
    formHint: string;
    preferredContact: string;
    submitLabel: string;
  };
  onFieldChange: <Key extends keyof TransferFormValues>(
    field: Key,
    value: TransferFormValues[Key],
  ) => void;
  onSuggestionClick: (address: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const fieldShell =
  'flex items-center gap-3 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-4 transition-colors focus-within:border-[#FF9D00]';

const inputClass =
  'w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400 text-sm md:text-base';

const iconClass = 'h-5 w-5 text-slate-400';

const TransferBookingForm: React.FC<TransferBookingFormProps> = ({
  airports,
  values,
  suggestions,
  labels,
  onFieldChange,
  onSuggestionClick,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <button
          type="button"
          onClick={() => onFieldChange('direction', 'pickup')}
          className={`rounded-[1.4rem] border px-5 py-4 text-left transition-all ${
            values.direction === 'pickup'
              ? 'border-[#FF9D00] bg-orange-50 text-slate-900'
              : 'border-slate-200 bg-white text-slate-500'
          }`}
        >
          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FF9D00]">
            Airport
          </div>
          <div className="mt-2 text-lg font-black">{labels.pickup}</div>
        </button>

        <button
          type="button"
          onClick={() => onFieldChange('direction', 'dropoff')}
          className={`rounded-[1.4rem] border px-5 py-4 text-left transition-all ${
            values.direction === 'dropoff'
              ? 'border-[#FF9D00] bg-orange-50 text-slate-900'
              : 'border-slate-200 bg-white text-slate-500'
          }`}
        >
          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FF9D00]">
            Airport
          </div>
          <div className="mt-2 text-lg font-black">{labels.dropoff}</div>
        </button>
      </div>

      <div className="mt-5 space-y-4">
        <label className="block">
          <div className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
            {labels.airport}
          </div>
          <div className={fieldShell}>
            <Plane className={iconClass} />
            <select
              value={values.airportCode}
              onChange={(event) => onFieldChange('airportCode', event.target.value)}
              className={`${inputClass} appearance-none`}
            >
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name} ({airport.code}) · {airport.city}
                </option>
              ))}
            </select>
          </div>
        </label>

        <label className="block">
          <div className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
            {labels.address}
          </div>
          <div className={fieldShell}>
            <MapPin className={iconClass} />
            <input
              list="airport-transfer-hints"
              value={values.address}
              onChange={(event) => onFieldChange('address', event.target.value)}
              placeholder="Sultanahmet / Lara Beach / Goreme / hotel name"
              className={inputClass}
            />
          </div>
          <datalist id="airport-transfer-hints">
            {suggestions.map((suggestion) => (
              <option key={suggestion.id} value={suggestion.address} />
            ))}
          </datalist>
          <div className="mt-3">
            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              {labels.hotPlaces}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  type="button"
                  onClick={() => onSuggestionClick(suggestion.address)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black text-slate-600 transition-colors hover:border-[#FF9D00] hover:text-slate-900"
                >
                  {suggestion.label}
                </button>
              ))}
            </div>
          </div>
        </label>

        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <label className="block">
            <div className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              {labels.dateTime}
            </div>
            <div className={fieldShell}>
              <CalendarDays className={iconClass} />
              <input
                type="datetime-local"
                value={values.dateTime}
                onChange={(event) => onFieldChange('dateTime', event.target.value)}
                className={inputClass}
              />
            </div>
          </label>

          <label className="block">
            <div className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              {labels.passengers}
            </div>
            <div className={fieldShell}>
              <Users className={iconClass} />
              <select
                value={values.passengers}
                onChange={(event) => onFieldChange('passengers', Number(event.target.value))}
                className={`${inputClass} appearance-none`}
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <div className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              {labels.contactName}
            </div>
            <div className={fieldShell}>
              <Users className={iconClass} />
              <input
                value={values.contactName}
                onChange={(event) => onFieldChange('contactName', event.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
          </label>

          <label className="block">
            <div className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              {labels.preferredContact}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => onFieldChange('preferredContact', 'whatsapp')}
                className={`rounded-[1.4rem] border px-4 py-4 text-sm font-black transition-all ${
                  values.preferredContact === 'whatsapp'
                    ? 'border-[#FF9D00] bg-orange-50 text-slate-900'
                    : 'border-slate-200 bg-white text-slate-500'
                }`}
              >
                {labels.whatsapp}
              </button>
              <button
                type="button"
                onClick={() => onFieldChange('preferredContact', 'email')}
                className={`rounded-[1.4rem] border px-4 py-4 text-sm font-black transition-all ${
                  values.preferredContact === 'email'
                    ? 'border-[#FF9D00] bg-orange-50 text-slate-900'
                    : 'border-slate-200 bg-white text-slate-500'
                }`}
              >
                {labels.email}
              </button>
            </div>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <div className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              {labels.whatsapp}
            </div>
            <div className={fieldShell}>
              <MessageCircleMore className={iconClass} />
              <input
                value={values.whatsapp}
                onChange={(event) => onFieldChange('whatsapp', event.target.value)}
                placeholder="+90 ..."
                className={inputClass}
              />
            </div>
          </label>

          <label className="block">
            <div className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              {labels.email}
            </div>
            <div className={fieldShell}>
              <Mail className={iconClass} />
              <input
                type="email"
                value={values.email}
                onChange={(event) => onFieldChange('email', event.target.value)}
                placeholder="name@email.com"
                className={inputClass}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="mt-6 rounded-[1.6rem] border border-dashed border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-500">
        {labels.formHint}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#FF9D00] px-8 py-4 text-[12px] font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-orange-500/20 transition-transform active:scale-[0.99]"
      >
        {labels.submitLabel}
      </button>
    </form>
  );
};

export default TransferBookingForm;
