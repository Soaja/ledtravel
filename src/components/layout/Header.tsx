import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Phone, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-slate-100" : "bg-transparent py-5 text-white"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <span className={cn("font-bold text-2xl tracking-tight", isScrolled ? "text-slate-900" : "text-white")}>
              Led Travel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className={cn("flex items-center gap-1 font-medium hover:text-primary transition-colors", isScrolled ? "text-slate-700" : "text-white")}>
                Tours <ChevronDown className="w-4 h-4" />
              </button>
              {/* Dropdown would go here */}
            </div>
            <Link to="/destinations" className={cn("font-medium hover:text-primary transition-colors", isScrolled ? "text-slate-700" : "text-white")}>
              Destinations
            </Link>
            <Link to="/blog" className={cn("font-medium hover:text-primary transition-colors", isScrolled ? "text-slate-700" : "text-white")}>
              Blog
            </Link>
            <Link to="/about" className={cn("font-medium hover:text-primary transition-colors", isScrolled ? "text-slate-700" : "text-white")}>
              About
            </Link>
            <Link to="/contact" className={cn("font-medium hover:text-primary transition-colors", isScrolled ? "text-slate-700" : "text-white")}>
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={cn("p-2 rounded-full hover:bg-black/5 transition-colors", isScrolled ? "text-slate-700" : "text-white")}>
              <Search className="w-5 h-5" />
            </button>
            <button className={cn("flex items-center gap-1 font-medium text-sm", isScrolled ? "text-slate-700" : "text-white")}>
              EUR <ChevronDown className="w-3 h-3" />
            </button>
            <a 
              href="https://wa.me/1234567890" 
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all",
                isScrolled 
                  ? "bg-green-500 text-white hover:bg-green-600 shadow-md" 
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <button className={cn("relative p-2", isScrolled ? "text-slate-700" : "text-white")}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full">0</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn("lg:hidden p-2 z-50", isScrolled ? "text-slate-900" : "text-white")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-slate-900">
              <Link to="/tours" onClick={() => setIsMobileMenuOpen(false)}>Tours</Link>
              <Link to="/destinations" onClick={() => setIsMobileMenuOpen(false)}>Destinations</Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <hr className="border-slate-100" />
              <div className="flex items-center justify-between">
                <span>Currency</span>
                <button className="flex items-center gap-1 text-slate-500">EUR <ChevronDown className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
