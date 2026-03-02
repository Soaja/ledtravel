import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, Clock, MapPin, Users, Calendar, Check, X, ShieldCheck, MessageCircle, ChevronRight, Camera, Info } from 'lucide-react';

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
      "Enjoy a traditional Turkish lunch included in the price",
      "Skip-the-line access to museums"
    ],
    included: [
      "Professional licensed guide",
      "Entrance fees to museums",
      "Lunch at a local restaurant",
      "Hotel pickup and drop-off",
      "Air-conditioned transportation"
    ],
    excluded: [
      "Drinks at lunch",
      "Personal expenses",
      "Tips for the guide"
    ],
    itinerary: [
      { time: "09:00 AM", title: "Hotel Pickup", description: "Pickup from your hotel in Sultanahmet or Taksim districts." },
      { time: "09:30 AM", title: "Hagia Sophia", description: "Guided tour of the magnificent Hagia Sophia, a masterpiece of Byzantine architecture." },
      { time: "11:00 AM", title: "Blue Mosque", description: "Visit the Sultan Ahmed Mosque, known as the Blue Mosque for its blue tiles." },
      { time: "12:30 PM", title: "Lunch", description: "Enjoy a delicious traditional Turkish lunch at a local restaurant." },
      { time: "01:30 PM", title: "Topkapi Palace", description: "Explore the opulent residence of the Ottoman Sultans." },
      { time: "03:30 PM", title: "Grand Bazaar", description: "Free time to shop and explore one of the largest and oldest covered markets in the world." },
      { time: "05:00 PM", title: "Drop-off", description: "Return transfer to your hotel." }
    ]
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={tour.images[0]} 
              alt={tour.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 pb-12 pt-24">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-2 text-primary-400 font-bold text-sm mb-3 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" /> {tour.location}
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  {tour.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium">
                  <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-white">{tour.rating}</span>
                    <span className="text-white/70">({tour.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <Users className="w-4 h-4" />
                    <span>Small Group</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content */}
            <div className="flex-grow max-w-4xl">
              
              {/* Photo Grid (Secondary Images) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {tour.images.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                ))}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer bg-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <span className="text-sm font-bold text-slate-600">View All Photos</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Immerse yourself in the history of Istanbul on this full-day tour of the Sultanahmet district. 
                  Visit iconic landmarks including the Hagia Sophia, Blue Mosque, and Topkapi Palace. 
                  Wander through the vibrant Grand Bazaar and enjoy a delicious Turkish lunch. 
                  Your expert guide will bring the city's rich past to life with fascinating stories and insights.
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-12 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Itinerary</h2>
                <div className="relative border-l-2 border-slate-200 ml-3.5 space-y-10 pb-4">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="relative pl-10">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-sm"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                          {item.time}
                        </span>
                        <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included/Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" /> What's Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" /> Not Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar (Desktop) */}
            <div className="hidden lg:block lg:w-96 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-sm text-slate-500 font-medium">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-slate-900">€{tour.price}</span>
                      <span className="text-slate-500">/ person</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-700 font-bold text-sm bg-slate-50 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {tour.rating}
                  </div>
                </div>

                <div className="space-y-5 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Date</label>
                    <div className="relative group">
                      <input 
                        type="date" 
                        className="w-full p-3.5 pl-11 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none font-medium text-slate-700"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                      <Calendar className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Participants</label>
                    <div className="flex items-center justify-between p-2 rounded-xl border border-slate-200 bg-slate-50">
                      <button 
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all"
                      >
                        -
                      </button>
                      <span className="font-bold text-lg text-slate-900">{guests} Adults</span>
                      <button 
                        onClick={() => setGuests(guests + 1)}
                        className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 pt-6 border-t border-slate-100">
                  <span className="font-bold text-slate-700 text-lg">Total Price</span>
                  <span className="text-3xl font-extrabold text-primary">€{tour.price * guests}</span>
                </div>

                <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all mb-4 transform hover:-translate-y-0.5 active:translate-y-0">
                  Reserve Now
                </button>

                <button className="w-full flex items-center justify-center gap-2 text-slate-700 font-bold py-3.5 rounded-xl border-2 border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </button>

                <div className="mt-6 space-y-3 bg-slate-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span>Free cancellation up to 24h before</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Mobile voucher accepted</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Mobile Sticky Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] pb-safe">
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <span className="text-xs text-slate-500 font-medium block mb-0.5">Total for {guests} guests</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-primary">€{tour.price * guests}</span>
            </div>
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-primary/20">
            Reserve
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
