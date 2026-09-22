import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Phone, Award } from 'lucide-react';
import { HERO_IMAGE, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../data/fashionData';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
  onOpenStyleQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookClick,
  onExploreClick,
  onOpenStyleQuiz,
}) => {
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
    'Hello TEE TRENDING THREADS! I would like to book a consultation for a custom outfit.'
  )}`;

  return (
    <section id="hero" className="relative bg-slate-900 text-slate-900 overflow-hidden py-16 sm:py-24 border-b border-blue-100">
      {/* Designer Studio Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={HERO_IMAGE} 
          alt="TEE TRENDING THREADS Atelier Studio Background" 
          className="w-full h-full object-cover object-right sm:object-center opacity-60 sm:opacity-75" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60 sm:to-white/40"></div>
      </div>

      {/* Monochromatic Blue Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Delicate Grid Pattern Background Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6 sm:space-y-8 text-left">
          
          {/* Main Brand Name & Headline */}
          <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-950 leading-tight">
                TEE TRENDING <span className="text-blue-600">THREADS</span>
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-blue-800 font-medium tracking-wide">
                "Designed for confidence. Tailored for perfection."
              </p>
            </div>

            {/* Paragraph Body */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              At TEE TRENDING THREADS, we create timeless outfits that combine elegance, comfort, and precision. 
              From children's fashion to bridal couture, every piece is carefully designed to reflect beauty, 
              confidence, and unforgettable moments.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA - Book Your Appointment */}
              <button
                onClick={onBookClick}
                className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-md shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* WhatsApp & Call Direct Ribbon */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600 border-t border-blue-100">
              <a 
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-blue-600 animate-bounce" />
                <span>Call or WhatsApp: <strong className="text-blue-950 underline">{PHONE_DISPLAY}</strong></span>
              </a>

              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>100% Custom Measurements</span>
              </div>

              <button
                onClick={onOpenStyleQuiz}
                className="text-blue-600 hover:text-blue-800 underline font-semibold cursor-pointer"
              >
                Need styling advice?
              </button>
            </div>

        </div>
      </div>
    </section>
  );
};
