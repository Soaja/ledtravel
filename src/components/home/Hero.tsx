import React from 'react';
import { Search, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop" 
          alt="Istanbul Sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Light up your holidays <br />
            <span className="text-primary">in Turkey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto"
          >
            Curated day tours & private experiences in Istanbul, Cappadocia & beyond.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/25">
              Explore Tours
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Build my itinerary
            </button>
          </motion.div>
        </div>

        {/* Search Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-4 max-w-5xl mx-auto hidden md:block"
        >
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="relative border-r border-slate-100 pr-4">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Destination</label>
              <div className="flex items-center gap-2 text-slate-800 font-semibold cursor-pointer">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Istanbul</span>
                <ChevronDown className="w-4 h-4 ml-auto text-slate-400" />
              </div>
            </div>
            
            <div className="relative border-r border-slate-100 px-4">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Date</label>
              <div className="flex items-center gap-2 text-slate-800 font-semibold cursor-pointer">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Any Date</span>
                <ChevronDown className="w-4 h-4 ml-auto text-slate-400" />
              </div>
            </div>

            <div className="relative px-4">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Type</label>
              <div className="flex items-center gap-2 text-slate-800 font-semibold cursor-pointer">
                <Search className="w-5 h-5 text-primary" />
                <span>All Tours</span>
                <ChevronDown className="w-4 h-4 ml-auto text-slate-400" />
              </div>
            </div>

            <button className="bg-slate-900 hover:bg-slate-800 text-white h-14 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
              Find Tours
            </button>
          </div>
        </motion.div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center gap-8 mt-12 text-white/80 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span>4.9/5 Average Rating</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>•</span>
            <span>10k+ Happy Guests</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>•</span>
            <span>Instant Confirmation</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
