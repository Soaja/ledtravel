import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check, MapPin, Calendar, Compass, Users, Wallet, Send, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type Step = 'destinations' | 'duration' | 'style' | 'companions' | 'budget' | 'contact' | 'success';

interface QuizState {
  destinations: string[];
  duration: string;
  style: string[];
  companions: string;
  budget: string;
  name: string;
  email: string;
  notes: Record<string, string>;
}

export default function BuildItinerary() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [formData, setFormData] = useState<QuizState>({
    destinations: [],
    duration: '',
    style: [],
    companions: '',
    budget: '',
    name: '',
    email: '',
    notes: {}
  });

  const steps = [
    { id: 'destinations', title: "Where do you want to go?", icon: MapPin },
    { id: 'duration', title: "How long is your trip?", icon: Calendar },
    { id: 'style', title: "What's your travel vibe?", icon: Compass },
    { id: 'companions', title: "Who are you traveling with?", icon: Users },
    { id: 'budget', title: "What is your budget?", icon: Wallet },
    { id: 'contact', title: "Where should we send it?", icon: Send },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit form
      setDirection(1);
      setCurrentStep(prev => prev + 1); // Move to success
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const toggleSelection = (field: keyof QuizState, value: string, multi: boolean = false) => {
    setFormData(prev => {
      if (multi) {
        const current = prev[field] as string[];
        return {
          ...prev,
          [field]: current.includes(value) 
            ? current.filter(item => item !== value)
            : [...current, value]
        };
      } else {
        return { ...prev, [field]: value };
      }
    });
  };

  const renderNoteInput = (stepId: string, placeholder: string = "Any specific requests or details?") => (
    <div className="mt-6">
      <label className="block text-sm font-bold text-slate-700 mb-2">Additional Notes (Optional)</label>
      <textarea
        value={formData.notes[stepId] || ''}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          notes: { ...prev.notes, [stepId]: e.target.value }
        }))}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none bg-slate-50 focus:bg-white"
        placeholder={placeholder}
        rows={2}
      />
    </div>
  );

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Destinations
        return (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Istanbul', 'Cappadocia', 'Ephesus', 'Pamukkale', 'Antalya', 'Fethiye'].map(dest => (
                <button
                  key={dest}
                  onClick={() => toggleSelection('destinations', dest, true)}
                  className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 text-center group ${
                    formData.destinations.includes(dest)
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    formData.destinations.includes(dest) ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-bold">{dest}</span>
                </button>
              ))}
            </div>
            {renderNoteInput('destinations', "e.g., I also want to visit Troy or Gallipoli...")}
          </div>
        );
      case 1: // Duration
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['1-3 Days', '4-7 Days', '8-14 Days', '14+ Days'].map(dur => (
                <button
                  key={dur}
                  onClick={() => toggleSelection('duration', dur)}
                  className={`p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                    formData.duration === dur
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-bold text-lg">{dur}</span>
                  {formData.duration === dur && <Check className="w-6 h-6" />}
                </button>
              ))}
            </div>
            {renderNoteInput('duration', "e.g., Flexible dates, specific month...")}
          </div>
        );
      case 2: // Style
        return (
          <div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'History', label: 'History Buff', icon: '🏛️' },
                { id: 'Food', label: 'Foodie', icon: '🥙' },
                { id: 'Adventure', label: 'Adventure', icon: '🪂' },
                { id: 'Relax', label: 'Relaxed', icon: '🧘' },
                { id: 'Luxury', label: 'Luxury', icon: '💎' },
                { id: 'Nature', label: 'Nature Lover', icon: '🌲' }
              ].map(style => (
                <button
                  key={style.id}
                  onClick={() => toggleSelection('style', style.id, true)}
                  className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 text-center group ${
                    formData.style.includes(style.id)
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-3xl">{style.icon}</span>
                  <span className="font-bold">{style.label}</span>
                </button>
              ))}
            </div>
            {renderNoteInput('style', "e.g., We love museums but hate crowds...")}
          </div>
        );
      case 3: // Companions
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Solo', 'Couple', 'Family (with kids)', 'Group of Friends'].map(comp => (
                <button
                  key={comp}
                  onClick={() => toggleSelection('companions', comp)}
                  className={`p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                    formData.companions === comp
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-bold text-lg">{comp}</span>
                  {formData.companions === comp && <Check className="w-6 h-6" />}
                </button>
              ))}
            </div>
            {renderNoteInput('companions', "e.g., Traveling with a baby, need accessibility...")}
          </div>
        );
      case 4: // Budget
        return (
          <div>
            <div className="space-y-4">
              {[
                { id: 'Economy', label: 'Economy', desc: 'Clean & comfortable basics' },
                { id: 'Comfort', label: 'Comfort', desc: 'Great value with extra perks' },
                { id: 'Luxury', label: 'Luxury', desc: 'Top-tier hotels & private transfers' }
              ].map(bud => (
                <button
                  key={bud.id}
                  onClick={() => toggleSelection('budget', bud.id)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all flex items-center justify-between text-left group ${
                    formData.budget === bud.id
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="font-bold text-lg">{bud.label}</div>
                    <div className={`text-sm ${formData.budget === bud.id ? 'text-primary/70' : 'text-slate-500'}`}>{bud.desc}</div>
                  </div>
                  {formData.budget === bud.id && <Check className="w-6 h-6" />}
                </button>
              ))}
            </div>
            {renderNoteInput('budget', "e.g., Max $2000 per person...")}
          </div>
        );
      case 5: // Contact
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            {renderNoteInput('contact', "Any final thoughts or questions?")}
            <p className="text-sm text-slate-500 text-center">
              We'll send your custom itinerary to this email within 24 hours.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  if (currentStep === steps.length) {
    return (
      <div className="min-h-screen flex flex-col bg-white font-sans">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center max-w-lg mx-auto"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8">
              <Sparkles className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">You're All Set!</h1>
            <p className="text-xl text-slate-600 mb-8">
              We've received your preferences. Our travel experts are already crafting your perfect Turkish adventure. Check your email soon!
            </p>
            <Link to="/" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-hover transition-colors shadow-lg">
              Back to Home
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const CurrentIcon = steps[currentStep].icon;
  const isNextDisabled = () => {
    switch (currentStep) {
      case 0: return formData.destinations.length === 0;
      case 1: return !formData.duration;
      case 2: return formData.style.length === 0;
      case 3: return !formData.companions;
      case 4: return !formData.budget;
      case 5: return !formData.name || !formData.email;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <span>Start</span>
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>Finish</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 min-h-[500px] flex flex-col">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                <CurrentIcon className="w-8 h-8" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                {steps[currentStep].title}
              </h1>
            </div>

            {/* Content Area */}
            <div className="flex-grow relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full"
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 font-bold transition-colors ${
                  currentStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>

              <button
                onClick={handleNext}
                disabled={isNextDisabled()}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
                  isNextDisabled()
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5'
                }`}
              >
                {currentStep === steps.length - 1 ? 'Submit Request' : 'Next Step'}
                {currentStep !== steps.length - 1 && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
