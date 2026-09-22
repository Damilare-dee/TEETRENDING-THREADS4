import React from 'react';
import { Sparkles, HeartHandshake, Quote } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-b border-blue-100">
      
      {/* Monochromatic Blue Radial Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest shadow-sm">
          <span>Brand Philosophy</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-4xl sm:text-6xl font-extrabold text-blue-950 tracking-tight leading-tight">
          Every Stitch Tells <span className="text-blue-600">Your Story</span>
        </h2>

        {/* Quote Block */}
        <div className="relative max-w-3xl mx-auto bg-blue-50/60 p-8 sm:p-12 rounded-3xl border border-blue-200 shadow-sm">
          <Quote className="w-12 h-12 text-blue-600/20 absolute -top-4 -left-2 rotate-180 pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <p className="font-serif text-2xl sm:text-3xl text-blue-950 font-medium italic leading-snug">
              "Fashion is more than clothing. It is confidence, identity, and self-expression."
            </p>
            
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              At TEE TRENDING THREADS, we transform your ideas into beautifully crafted outfits that fit perfectly and create lasting memories.
            </p>
          </div>

          <Quote className="w-12 h-12 text-blue-600/20 absolute -bottom-4 -right-2 pointer-events-none" />
        </div>

        {/* 3 Core Values Grid */}
        <div className="grid sm:grid-cols-3 gap-6 pt-6 text-left">
          
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
            <div className="text-blue-600 font-serif font-bold text-lg mb-1">01. Confidence</div>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              Tailored silhouettes engineered to make you feel empowered, poised, and unforgettable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
            <div className="text-blue-600 font-serif font-bold text-lg mb-1">02. Identity</div>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              Custom designs reflecting your personal heritage, celebration theme, and individual charm.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
            <div className="text-blue-600 font-serif font-bold text-lg mb-1">03. Memories</div>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              Built to shine in photographs, videos, and cherishable moments that last for a lifetime.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
