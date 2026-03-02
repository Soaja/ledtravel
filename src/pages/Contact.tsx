import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book a tour?",
      answer: "You can book a tour directly through our website by selecting your desired tour, choosing a date, and completing the checkout process. Alternatively, you can contact us via phone or email for assistance."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer free cancellation up to 24 hours before the tour start time for a full refund. Cancellations made within 24 hours are non-refundable."
    },
    {
      question: "Do you offer private tours?",
      answer: "Yes, we specialize in private tours! Most of our listed tours can be upgraded to a private experience, or we can create a completely custom itinerary just for you."
    },
    {
      question: "Are entrance fees included?",
      answer: "It depends on the specific tour. Please check the 'What's Included' section on the tour detail page. Generally, our guided tours include skip-the-line tickets to major museums."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. All payments are processed securely."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop" 
              alt="Istanbul Galata Tower" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl mx-auto text-slate-200"
            >
              Have a question or ready to plan your trip? We're here to help you create the perfect Turkish adventure.
            </motion.p>
          </div>
        </div>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
              
              {/* Contact Info */}
              <div className="lg:w-1/3 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                  <p className="text-slate-600 mb-8">
                    Our team of travel experts is available 24/7 to assist you with any inquiries or bookings.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                      <p className="text-slate-600">
                        Istiklal Avenue No: 123<br />
                        Beyoglu, Istanbul<br />
                        Turkey
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                      <p className="text-slate-600">
                        <a href="tel:+905551234567" className="hover:text-primary transition-colors">+90 555 123 45 67</a>
                        <br />
                        <span className="text-sm text-slate-400">Mon-Sun, 9am - 8pm</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                      <p className="text-slate-600">
                        <a href="mailto:hello@ledtravel.com" className="hover:text-primary transition-colors">hello@ledtravel.com</a>
                        <br />
                        <a href="mailto:bookings@ledtravel.com" className="hover:text-primary transition-colors">bookings@ledtravel.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                      <a 
                        key={social}
                        href="#" 
                        className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 hover:text-primary hover:shadow-md transition-all"
                      >
                        <span className="sr-only">{social}</span>
                        {/* Placeholder icons */}
                        <div className="w-5 h-5 bg-current rounded-sm opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Tour Booking">Tour Booking</option>
                        <option value="Custom Itinerary">Custom Itinerary</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] bg-slate-200 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.165446736356!2d28.97592131541438!3d41.03358497929824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2sTaksim%20Square%2C%20G%C3%BCm%C3%BC%C5%9Fsuyu%2C%2034435%20Beyo%C4%9Flu%2F%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1645564859504!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Office Location"
          ></iframe>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Find answers to common questions about our services and policies.</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                    {activeAccordion === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
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
      </main>

      <Footer />
    </div>
  );
}
