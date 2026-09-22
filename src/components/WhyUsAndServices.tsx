import React, { useRef } from 'react';
import { WHY_CHOOSE_US, SERVICES, GREEN_YELLOW_ANKARA_IMAGE } from '../data/fashionData';
import { Award, Ruler, Gem, Sparkles, UserCheck, Scissors, Crown, Heart, Flame, Shirt, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface WhyUsAndServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const WhyUsAndServices: React.FC<WhyUsAndServicesProps> = ({ onSelectService }) => {
  const whyScrollRef = useRef<HTMLDivElement>(null);
  const servicesScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Award': return <Award className="w-6 h-6 text-blue-600" />;
      case 'Ruler': return <Ruler className="w-6 h-6 text-blue-600" />;
      case 'Gem': return <Gem className="w-6 h-6 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-blue-600" />;
      case 'Crown': return <Crown className="w-6 h-6 text-blue-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-blue-600" />;
      case 'Flame': return <Flame className="w-6 h-6 text-blue-600" />;
      case 'Shirt': return <Shirt className="w-6 h-6 text-blue-600" />;
      default: return <Scissors className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* WHY CHOOSE TEE TRENDING THREADS SECTION */}
      <section id="why-us" className="py-20 bg-slate-900 text-slate-900 relative overflow-hidden border-b border-blue-100">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={GREEN_YELLOW_ANKARA_IMAGE} 
            alt="TEE TRENDING THREADS Atelier Pattern" 
            className="w-full h-full object-cover object-center opacity-40 sm:opacity-50" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70 md:to-white/50"></div>
        </div>

        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-blue-900 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm inline-block">
                The TEETHREADS Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
                Why Choose TEE TRENDING THREADS?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                We take pride in creating garments that define elegance, confidence, and distinction.
              </p>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-3 self-end">
              <button
                onClick={() => scroll(whyScrollRef, 'left')}
                className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 transition-colors shadow-sm active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(whyScrollRef, 'right')}
                className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 transition-colors shadow-sm active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Cards Container */}
          <div 
            ref={whyScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start bg-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:border-blue-300 transition-colors mb-6">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-blue-950 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Extra Highlight Card */}
            <div className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start bg-blue-50 p-8 rounded-2xl border border-blue-200 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[11px] font-bold uppercase rounded">
                  Bespoke Atelier
                </div>
                <h3 className="font-serif text-2xl font-bold text-blue-950">
                  Crafted Exclusively For You
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-normal">
                  Every stitch is recorded, every fabric hand-selected, and every garment tailored with passion.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                  Elegance • Precision • Confidence
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50 text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-blue-900 text-xs font-bold uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm inline-block">
                Couture & Tailoring Services
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
                Our Services
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                Explore our comprehensive tailoring services designed to turn your style vision into reality.
              </p>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-3 self-end">
              <button
                onClick={() => scroll(servicesScrollRef, 'left')}
                className="p-3 rounded-full bg-white hover:bg-blue-50 border border-blue-200 text-blue-900 transition-colors shadow-sm active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(servicesScrollRef, 'right')}
                className="p-3 rounded-full bg-white hover:bg-blue-50 border border-blue-200 text-blue-900 transition-colors shadow-sm active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={servicesScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-end">
                    <span className="text-[11px] text-blue-900 font-semibold bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      {serv.estimatedDuration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                      {serv.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                      {serv.description}
                    </p>
                  </div>

                  <p className="text-xs text-blue-900/90 bg-blue-50/70 p-3 rounded border border-blue-100 italic">
                    "{serv.details}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => onSelectService(serv.name)}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Select Service For Booking</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
