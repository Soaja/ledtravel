import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import DestinationsGrid from '@/components/home/DestinationsGrid';
import FeaturedTours from '@/components/home/FeaturedTours';
import USPSection from '@/components/home/USPSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <DestinationsGrid />
        <FeaturedTours />
        <USPSection />
        
        {/* Lead Magnet Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get your free 3-day Istanbul Itinerary</h2>
            <p className="text-slate-600 mb-8">Sign up for our newsletter and receive a perfectly curated 72-hour plan for Istanbul, including hidden gems and food recommendations.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-colors">
                Get It Free
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
