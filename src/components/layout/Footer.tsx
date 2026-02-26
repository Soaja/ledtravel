import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="font-bold text-xl text-white">
                Led Travel
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Curated day tours & private experiences in Istanbul, Cappadocia & beyond. Light up your holidays with us.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Destinations</h3>
            <ul className="space-y-3">
              <li><Link to="/tours/istanbul" className="hover:text-primary transition-colors">Istanbul Tours</Link></li>
              <li><Link to="/tours/cappadocia" className="hover:text-primary transition-colors">Cappadocia Tours</Link></li>
              <li><Link to="/tours/antalya" className="hover:text-primary transition-colors">Antalya Tours</Link></li>
              <li><Link to="/tours/ephesus" className="hover:text-primary transition-colors">Ephesus & Pamukkale</Link></li>
              <li><Link to="/tours/fethiye" className="hover:text-primary transition-colors">Fethiye & Blue Lagoon</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cancellation" className="hover:text-primary transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>123 Istiklal Caddesi, Beyoglu<br />Istanbul, Turkey</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+90 555 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@ledtravel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Led Travel. All rights reserved.
          </p>
          <div className="flex gap-4 opacity-50">
            {/* Payment Icons Placeholder */}
            <div className="h-6 w-10 bg-slate-700 rounded"></div>
            <div className="h-6 w-10 bg-slate-700 rounded"></div>
            <div className="h-6 w-10 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
