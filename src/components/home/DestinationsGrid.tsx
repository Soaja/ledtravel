import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: "Istanbul",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2000&auto=format&fit=crop",
    count: "45 Tours",
    size: "large" // spans 2 cols
  },
  {
    id: 2,
    name: "Cappadocia",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2000&auto=format&fit=crop",
    count: "28 Tours",
    size: "normal"
  },
  {
    id: 3,
    name: "Antalya",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2000&auto=format&fit=crop",
    count: "15 Tours",
    size: "normal"
  },
  {
    id: 4,
    name: "Ephesus",
    image: "https://images.unsplash.com/photo-1566133757306-037415494462?q=80&w=2000&auto=format&fit=crop",
    count: "12 Tours",
    size: "normal"
  },
  {
    id: 5,
    name: "Pamukkale",
    image: "https://images.unsplash.com/photo-1650367316317-640103768406?q=80&w=2000&auto=format&fit=crop",
    count: "8 Tours",
    size: "normal"
  }
];

export default function DestinationsGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular Destinations</h2>
            <p className="text-slate-600 max-w-xl">Explore the most iconic locations in Turkey, from the historic streets of Istanbul to the magical valleys of Cappadocia.</p>
          </div>
          <Link to="/destinations" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors">
            View all destinations <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {destinations.map((dest, index) => (
            <Link 
              key={dest.id} 
              to={`/tours/${dest.name.toLowerCase()}`}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 border border-white/30">
                  {dest.count}
                </span>
                <h3 className={`font-bold text-white mb-2 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                  {dest.name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span>View tours</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link to="/destinations" className="inline-flex items-center gap-2 text-primary font-bold">
            View all destinations <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
