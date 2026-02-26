import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, Clock, MapPin, Users, Calendar, Check, X, ShieldCheck, MessageCircle } from 'lucide-react';

export default function TourDetail() {
  const { id } = useParams();
  // In a real app, fetch tour data based on ID
  const tour = {
    title: "Istanbul Classics: Full Day Old City Tour",
    price: 85,
    rating: 4.9,
    reviews: 124,
    location: "Istanbul",
    duration: "8 hours",
    images: [
      "https://images.unsplash.com/photo-1565060169382-359982a88466?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2000&auto=format&fit=crop"
    ],
    highlights: [
      "Visit the Hagia Sophia, Blue Mosque, and Topkapi Palace",
      "Explore the Grand Bazaar with a local guide",
      "Enjoy a traditional Turkish lunch included in the price"
    ],
    included: [
      "Professional licensed guide",
      "Entrance fees to museums",
      "Lunch at a local restaurant",
      "Hotel pickup and drop-off"
    ],
    excluded: [
      "Drinks at lunch",
      "Personal expenses",
      "Tips for the guide"
    ]
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Header Spacer */}
      <div className="h-20 bg-slate-900"></div>

      <main className="flex-grow pb-20">
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-[400px] md:h-[500px]">
          <div className="md:col-span-2 h-full">
            <img src={tour.images[0]} alt="Main" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-2 h-full">
            <img src={tour.images[1]} alt="Thumb 1" className="w-full h-full object-cover" />
            <img src={tour.images[2]} alt="Thumb 2" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content */}
            <div className="flex-grow">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <MapPin className="w-4 h-4" /> {tour.location}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{tour.title}</h1>
              
              <div className="flex items-center gap-6 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-slate-900">{tour.rating}</span>
                  <span>({tour.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Small Group</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Highlights</h2>
                <ul className="space-y-3">
                  {tour.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-slate-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                <p className="text-slate-600 leading-relaxed">
                  Immerse yourself in the history of Istanbul on this full-day tour of the Sultanahmet district. 
                  Visit iconic landmarks including the Hagia Sophia, Blue Mosque, and Topkapi Palace. 
                  Wander through the vibrant Grand Bazaar and enjoy a delicious Turkish lunch. 
                  Your expert guide will bring the city's rich past to life with fascinating stories and insights.
                </p>
              </div>

              {/* Included/Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 bg-slate-50 rounded-2xl">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <Check className="w-4 h-4 text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {tour.excluded.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <X className="w-4 h-4 text-red-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Itinerary Placeholder */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Itinerary</h2>
                <div className="border-l-2 border-slate-200 pl-8 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-primary border-4 border-white"></div>
                    <h3 className="font-bold text-lg">09:00 AM - Pickup</h3>
                    <p className="text-slate-600">Pickup from your hotel in Sultanahmet or Taksim.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-slate-300 border-4 border-white"></div>
                    <h3 className="font-bold text-lg">09:30 AM - Hagia Sophia</h3>
                    <p className="text-slate-600">Guided tour of the magnificent Hagia Sophia.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-slate-300 border-4 border-white"></div>
                    <h3 className="font-bold text-lg">12:30 PM - Lunch</h3>
                    <p className="text-slate-600">Traditional Turkish lunch at a local restaurant.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-slate-300 border-4 border-white"></div>
                    <h3 className="font-bold text-lg">05:00 PM - Drop-off</h3>
                    <p className="text-slate-600">Return to your hotel.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar (Desktop) */}
            <div className="hidden lg:block lg:w-96 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-sm text-slate-500">From</span>
                    <div className="text-3xl font-bold text-slate-900">€{tour.price}</div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-yellow-500" /> {tour.rating}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                      <Calendar className="absolute right-3 top-3 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Participants</label>
                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200">
                      <button 
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"
                      >
                        -
                      </button>
                      <span className="font-bold">{guests} Adults</span>
                      <button 
                        onClick={() => setGuests(guests + 1)}
                        className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 pt-4 border-t border-slate-100">
                  <span className="font-bold text-slate-700">Total</span>
                  <span className="text-2xl font-bold text-primary">€{tour.price * guests}</span>
                </div>

                <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all mb-4">
                  Reserve Now
                </button>

                <button className="w-full flex items-center justify-center gap-2 text-slate-600 font-bold py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </button>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span>Free cancellation up to 24h before</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Instant confirmation</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Mobile Sticky Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <span className="text-xs text-slate-500 block">From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-slate-900">€{tour.price}</span>
              <span className="text-xs text-slate-500">/ person</span>
            </div>
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/20">
            Reserve
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
