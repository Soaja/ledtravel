import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';

export default function TourFilters() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 font-bold text-lg text-slate-900 pb-4 border-b border-slate-200">
        <Filter className="w-5 h-5" />
        Filters
      </div>

      {/* Destinations */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Destinations</h3>
        <div className="space-y-2">
          {['Istanbul', 'Cappadocia', 'Antalya', 'Ephesus', 'Pamukkale'].map((city) => (
            <label key={city} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
              <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{city}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <input type="range" min="0" max="500" className="w-full accent-primary" />
          <div className="flex justify-between text-sm text-slate-600">
            <span>€0</span>
            <span>€500+</span>
          </div>
        </div>
      </div>

      {/* Duration */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Duration</h3>
        <div className="space-y-2">
          {['Up to 4 hours', '4-8 hours', 'Full day', 'Multi-day'].map((duration) => (
            <label key={duration} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
              <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{duration}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tour Type */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Tour Type</h3>
        <div className="space-y-2">
          {['Walking Tour', 'Bus Tour', 'Boat Cruise', 'Food Tour', 'Private Tour'].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
              <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
