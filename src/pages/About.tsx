import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Heart, Award, CheckCircle, Globe, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2000&auto=format&fit=crop" 
              alt="Cappadocia Balloons" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              We Are <span className="text-primary">Led Travel</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl mx-auto text-slate-200"
            >
              Your local experts in Turkey. Crafting unforgettable journeys since 2015.
            </motion.p>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2000&auto=format&fit=crop" 
                    alt="Istanbul Team" 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Award className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">10+ Years</div>
                        <div className="text-slate-500 text-sm">of Excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">Bridging Cultures, Creating Memories</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Founded in the heart of Istanbul, Led Travel began with a simple mission: to show the world the real Turkey. Not just the famous landmarks, but the hidden alleyways, the authentic flavors, and the warm hospitality that defines our culture.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  We are a team of passionate locals, historians, and travel enthusiasts who believe that travel is about connection. Whether you're watching the sunrise over Cappadocia or sipping tea in a bustling bazaar, we're here to ensure every moment is magical.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-slate-700">Licensed Agency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-slate-700">Local Experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-slate-700">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-slate-700">Best Price Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15k+</div>
                <div className="text-slate-400">Happy Travelers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-slate-400">Destinations</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">120+</div>
                <div className="text-slate-400">Unique Tours</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</div>
                <div className="text-slate-400">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Why Travel With Us?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We don't just sell tours; we craft experiences. Here is what sets Led Travel apart from the rest.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Authentic Experiences</h3>
                <p className="text-slate-600 leading-relaxed">
                  We take you off the beaten path to discover the hidden gems and local secrets that most tourists miss.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Small Groups</h3>
                <p className="text-slate-600 leading-relaxed">
                  We keep our groups small to ensure a personalized experience and deeper connection with your guide and destination.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Worry-Free Travel</h3>
                <p className="text-slate-600 leading-relaxed">
                  From airport pickups to skip-the-line tickets, we handle all the logistics so you can focus on enjoying your trip.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2000&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Explore Turkey?</h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto mb-10">
              Let us help you plan the perfect trip. Whether you want a pre-made tour or a custom itinerary, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tours" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1">
                View Our Tours
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
