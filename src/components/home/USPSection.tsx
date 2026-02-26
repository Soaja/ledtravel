import React from 'react';
import { ShieldCheck, Users, Heart, Award } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "Licensed Guides",
    description: "Expert local guides with official licenses and deep historical knowledge."
  },
  {
    icon: Heart,
    title: "Handpicked Experiences",
    description: "We personally vet every tour to ensure it meets our high quality standards."
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate group sizes or private options for a more personalized experience."
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% secure payment processing and transparent pricing with no hidden fees."
  }
];

export default function USPSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Experience Turkey like a local, not just a tourist.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              At Led Travel, we believe travel is about connection. We connect you with the authentic culture, history, and people of Turkey through carefully crafted experiences that go beyond the guidebook.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1998&auto=format&fit=crop" 
              alt="Happy travelers in Turkey" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                </div>
                <div className="text-slate-900 font-bold">
                  10k+ <br />
                  <span className="text-slate-500 text-xs font-normal">Happy Travelers</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic">"The best travel decision we made. The guide was incredible!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
