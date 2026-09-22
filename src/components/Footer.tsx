import React from 'react';
import { PHONE_DISPLAY, WHATSAPP_NUMBER, TIKTOK_URL, GOOGLE_FORM_URL, WHATSAPP_ORDER_URL, BRAND_LOGO_URL } from '../data/fashionData';
import { Phone, Calendar, Heart, ShieldCheck, MapPin, Sparkles, MessageCircle, Video, FileEdit, ExternalLink } from 'lucide-react';

interface FooterProps {
  onBookClick: () => void;
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick, onScrollToSection }) => {
  return (
    <footer className="bg-white text-slate-900 pt-20 pb-12 border-t border-blue-100 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Callout Box */}
        <div className="bg-blue-50/80 p-8 sm:p-12 rounded-3xl border border-blue-200 text-center space-y-6 shadow-sm">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs font-bold uppercase tracking-widest">
            <span>Start Your Couture Journey</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            Let's Create Something Exceptional
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Your perfect outfit starts with a conversation. Connect with us, book an appointment, or fill our custom order form.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            
            {/* Phone Call CTA */}
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow"
            >
              <Phone className="w-4 h-4 text-blue-300" />
              <span>Call Us: {PHONE_DISPLAY}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat with Us on WhatsApp</span>
            </a>

            {/* TikTok CTA */}
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow"
            >
              <Video className="w-4 h-4 text-pink-400" />
              <span>Watch TEETHREADS on TikTok</span>
            </a>

            {/* Google Form Link */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow"
            >
              <FileEdit className="w-4 h-4 text-slate-950" />
              <span>Fill Custom Order Form</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow transition-all"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>

          </div>

        </div>

        {/* Brand & Footer Links */}
        <div className="grid md:grid-cols-12 gap-10 pt-6 border-t border-slate-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={BRAND_LOGO_URL} 
                alt="TEE TRENDING THREADS" 
                className="w-8 h-8 rounded-full object-cover border border-blue-200 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-extrabold tracking-widest text-blue-950">
                TEE TRENDING THREADS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            </div>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Designing for confidence, tailored for perfection. Custom children's fashion, bridal gowns, flower girl dresses, and reception attire.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="text-xs text-blue-700 font-bold tracking-wider">
                Elegance. Precision. Confidence.
              </div>

              {/* Active links list */}
              <div className="flex flex-col gap-1.5 text-xs font-semibold pt-1">
                <a
                  href={WHATSAPP_ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp: Chat with Us on WhatsApp</span>
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:underline flex items-center gap-1.5"
                >
                  <Video className="w-3.5 h-3.5 text-pink-600" />
                  <span>Follow our TikTok: Watch TEETHREADS on TikTok</span>
                </a>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:underline flex items-center gap-1.5"
                >
                  <FileEdit className="w-3.5 h-3.5" />
                  <span>Official Google Order Form</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-900">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>
                <button onClick={() => onScrollToSection('best-sellers')} className="hover:text-blue-600 transition-colors">
                  Best Sellers Collection
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('why-us')} className="hover:text-blue-600 transition-colors">
                  Why Choose TEE TRENDING THREADS
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-blue-600 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('story')} className="hover:text-blue-600 transition-colors">
                  Every Stitch Tells Your Story
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick Reference */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-900">
              Our Specialty Atelier Services
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-medium">
              <li>• Children's Wear</li>
              <li>• Bridal Gowns</li>
              <li>• Flower Girl Dresses</li>
              <li>• Reception Dresses</li>
              <li>• Traditional & Native Outfits</li>
              <li>• Bridal Robes</li>
              <li>• Custom Fittings</li>
              <li>• Alterations</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500 font-normal flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TEE TRENDING THREADS. All rights reserved.</p>
          <p className="text-[11px] text-slate-600 font-semibold">
            Tailored to Fit. Crafted to Impress.
          </p>
        </div>

      </div>
    </footer>
  );
};

