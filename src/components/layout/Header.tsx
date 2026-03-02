import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Phone, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

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
          <Link to="/" className="flex items-center gap-2 z-50 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              L
            </div>
            <span className={cn("font-bold text-2xl tracking-tight transition-colors", isScrolled ? "text-slate-900" : "text-white")}>
              Led Travel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={cn(
                  "font-medium transition-colors relative group py-2", 
                  isScrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-primary-200",
                  location.pathname === link.path && (isScrolled ? "text-primary" : "text-white font-bold")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isScrolled ? "bg-primary" : "bg-white",
                  location.pathname === link.path && "w-full"
                )} />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={cn("p-2 rounded-full hover:bg-black/5 transition-colors", isScrolled ? "text-slate-700" : "text-white")}>
              <Search className="w-5 h-5" />
            </button>
            <button className={cn("flex items-center gap-1 font-medium text-sm hover:opacity-80 transition-opacity", isScrolled ? "text-slate-700" : "text-white")}>
              EUR <ChevronDown className="w-3 h-3" />
            </button>
            <a 
              href="https://wa.me/1234567890" 
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all transform hover:-translate-y-0.5",
                isScrolled 
                  ? "bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg" 
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/20"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <button className={cn("relative p-2 hover:opacity-80 transition-opacity", isScrolled ? "text-slate-700" : "text-white")}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">0</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn("lg:hidden p-2 z-50 transition-colors", isScrolled ? "text-slate-900" : "text-white")}
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-slate-900">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={cn(
                    "flex items-center justify-between py-2 border-b border-slate-50",
                    location.pathname === link.path ? "text-primary font-bold" : "text-slate-600"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  {location.pathname === link.path && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </Link>
              ))}
              
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-600">Currency</span>
                  <button className="flex items-center gap-1 text-slate-900 font-bold">EUR <ChevronDown className="w-4 h-4" /></button>
                </div>
                
                <a 
                  href="https://wa.me/1234567890" 
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-green-500/20"
                >
                  <Phone className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
