import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlidersHorizontal, ArrowUpDown, ChevronDown, ChevronUp, MapPin, Calendar, Users, Star } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TourCard, { Tour } from '@/components/tours/TourCard';
import TourFilters from '@/components/tours/TourFilters';

// Mock Data
const allTours: Tour[] = [
  {
    id: 1,
    title: "Istanbul Classics: Full Day Old City Tour",
    image: "https://images.unsplash.com/photo-1565060169382-359982a88466?q=80&w=2000&auto=format&fit=crop",
    price: 85,
    duration: "8 hours",
    rating: 4.9,
    reviews: 124,
    location: "Istanbul",
    badge: "Best Seller",
    features: ["pickup"]
  },
  {
    id: 2,
    title: "Cappadocia Hot Air Balloon Flight at Sunrise",
    image: "https://images.unsplash.com/photo-1570535384666-897d26645362?q=80&w=2000&auto=format&fit=crop",
    price: 180,
    duration: "3 hours",
    rating: 5.0,
    reviews: 89,
    location: "Cappadocia",
    badge: "Bucket List",
    features: ["pickup"]
  },
  {
    id: 3,
    title: "Bosphorus Sunset Cruise on Luxury Yacht",
    image: "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?q=80&w=2000&auto=format&fit=crop",
    price: 65,
    duration: "2.5 hours",
    rating: 4.8,
    reviews: 210,
    location: "Istanbul",
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
    location: "Istanbul",
    badge: "Foodie Choice"
  },
  {
    id: 5,
    title: "Ephesus Ancient City & Terrace Houses",
    image: "https://images.unsplash.com/photo-1566133757306-037415494462?q=80&w=2000&auto=format&fit=crop",
    price: 75,
    duration: "5 hours",
    rating: 4.7,
    reviews: 42,
    location: "Ephesus",
    features: ["pickup"]
  },
  {
    id: 6,
    title: "Pamukkale Thermal Pools & Hierapolis",
    image: "https://images.unsplash.com/photo-1650367316317-640103768406?q=80&w=2000&auto=format&fit=crop",
    price: 60,
    duration: "7 hours",
    rating: 4.6,
    reviews: 35,
    location: "Pamukkale"
  }
];

const faqs = [
  {
    question: "What is the cancellation policy?",
    answer: "You can cancel up to 24 hours in advance for a full refund. For cancellations made less than 24 hours before the start time, the amount you paid will not be refunded."
  },
  {
    question: "Are entrance fees included in the price?",
    answer: "Yes, all entrance fees to museums and historical sites mentioned in the itinerary are included in the tour price unless otherwise stated."
  },
  {
    question: "Is hotel pickup and drop-off included?",
    answer: "Most of our tours include hotel pickup and drop-off from centrally located hotels. Please check the specific tour details for confirmation."
  },
  {
    question: "Do you offer private tours?",
    answer: "Yes, we offer private tours for individuals, families, and groups. You can customize the itinerary, start time, and duration according to your preferences."
  },
  {
    question: "Is lunch included in full-day tours?",
    answer: "Yes, a delicious local lunch is included in all our full-day tours. We can accommodate dietary restrictions with advance notice."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ToursListing() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop" 
            alt="Turkey Tours" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Discover Turkey's <span className="text-primary-400">Hidden Gems</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-slate-200"
          >
            From the historic streets of Istanbul to the fairy chimneys of Cappadocia, experience the magic of Turkey with our expertly curated tours.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24">
                <TourFilters />
              </div>
            </aside>

            {/* Mobile Filter Bar */}
            <div className="lg:hidden flex gap-4 mb-6">
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="flex-1 bg-white border border-slate-200 rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <button className="flex-1 bg-white border border-slate-200 rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
                <ArrowUpDown className="w-4 h-4" /> Sort
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Available Tours <span className="text-slate-400 font-normal text-lg ml-2">({allTours.length})</span></h2>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {allTours.map((tour) => (
                  <motion.div key={tour.id} variants={itemVariants}>
                    <TourCard tour={tour} />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Pagination */}
              <div className="mt-16 flex justify-center gap-2">
                <button className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold shadow-lg hover:bg-slate-800 transition-colors">1</button>
                <button className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition-colors">2</button>
                <button className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition-colors">3</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                  {activeFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            Book your dream tour today and create memories that will last a lifetime. Our team is ready to help you plan the perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1">
              Book Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-xs bg-white h-full overflow-y-auto p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="text-slate-500 hover:text-slate-900">Close</button>
              </div>
              <TourFilters />
              <div className="mt-8 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg hover:bg-primary-hover transition-colors"
                >
                  Show Results
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
