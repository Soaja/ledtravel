import React from 'react';
import { Star, Clock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const tours = [
  {
    id: 1,
    title: "Istanbul Classics: Full Day Old City Tour",
    image: "https://images.unsplash.com/photo-1565060169382-359982a88466?q=80&w=2000&auto=format&fit=crop",
    price: 85,
    duration: "8 hours",
    rating: 4.9,
    reviews: 124,
    badge: "Best Seller"
  },
  {
    id: 2,
    title: "Cappadocia Hot Air Balloon Flight at Sunrise",
    image: "https://images.unsplash.com/photo-1570535384666-897d26645362?q=80&w=2000&auto=format&fit=crop",
    price: 180,
    duration: "3 hours",
    rating: 5.0,
    reviews: 89,
    badge: "Bucket List"
  },
  {
    id: 3,
    title: "Bosphorus Sunset Cruise on Luxury Yacht",
    image: "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?q=80&w=2000&auto=format&fit=crop",
    price: 65,
    duration: "2.5 hours",
    rating: 4.8,
    reviews: 210,
    badge: "Popular"
  },
  {
    id: 4,
    title: "Taste of Two Continents: Istanbul Food Tour",
    image: "https://images.unsplash.com/photo-1604160450925-077763c88696?q=80&w=2000&auto=format&fit=crop",
    price: 95,
    duration: "6 hours",
    rating: 4.9,
    reviews: 56,
    badge: "Foodie Choice"
  }
];

export default function FeaturedTours() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Top Rated Experiences</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Best Selling Tours</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Don't miss out on these guest favorites. Handpicked experiences that deliver unforgettable memories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {tour.badge}
                  </span>
                </div>
                <button className="absolute bottom-4 right-4 bg-white text-slate-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                  <Star className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                  <Clock className="w-3 h-3" />
                  <span>{tour.duration}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-green-600 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Free cancellation
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
                </h3>
                
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-slate-900">{tour.rating}</span>
                  <span className="text-slate-400 text-sm">({tour.reviews})</span>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">From</span>
                    <span className="text-xl font-bold text-slate-900">€{tour.price}</span>
                  </div>
                  <Link 
                    to={`/tours/${tour.id}`}
                    className="text-primary font-bold text-sm hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/tours" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary border border-transparent rounded-full hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
