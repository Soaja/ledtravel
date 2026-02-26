import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, MapPin, Check } from 'lucide-react';

export interface Tour {
  id: number;
  title: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  location: string;
  badge?: string;
  features?: string[];
}

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        
        {tour.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {tour.badge}
            </span>
          </div>
        )}
        
        <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white hover:text-red-500 transition-colors">
          <Star className="w-4 h-4" />
        </button>

        <div className="absolute bottom-4 left-4 text-white flex items-center gap-2 text-xs font-medium">
          <MapPin className="w-3 h-3" />
          <span>{tour.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{tour.duration}</span>
          </div>
          {tour.features?.includes('pickup') && (
            <div className="flex items-center gap-1 text-green-600">
              <Check className="w-3 h-3" />
              <span>Pickup</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
        </h3>
        
        <div className="flex items-center gap-1 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(tour.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200 fill-slate-200'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 ml-1">({tour.reviews} reviews)</span>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 block">From</span>
            <span className="text-lg font-bold text-slate-900">€{tour.price}</span>
          </div>
          <Link 
            to={`/tours/${tour.id}`}
            className="bg-slate-900 hover:bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
