import React, { useState } from 'react';
import { BEST_SELLERS } from '../data/fashionData';
import { BestSellerItem, CategoryFilter } from '../types';
import { Calendar, CheckCircle2, X, Info, Layers, Grid, Sparkles, Crown, Gem, Award, Scissors, Feather, Palette } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';
import LogoLoop, { LogoItem } from './LogoLoop';

interface BestSellersProps {
  onSelectCategoryForBooking: (categoryTitle: string) => void;
}

const LUXURY_PARTNERS: LogoItem[] = [
  {
    node: (
      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 border border-blue-200 rounded-full shadow-sm text-blue-950 font-serif font-bold text-xs sm:text-sm whitespace-nowrap">
        <Crown className="w-4 h-4 text-amber-500" />
        <span>Bespoke Bridal</span>
      </div>
    ),
    title: 'Bespoke Bridal'
  },
  {
    node: (
      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 border border-blue-200 rounded-full shadow-sm text-blue-950 font-serif font-bold text-xs sm:text-sm whitespace-nowrap">
        <Feather className="w-4 h-4 text-blue-600" />
        <span>Pure Italian Silk</span>
      </div>
    ),
    title: 'Pure Italian Silk'
  },
  {
    node: (
      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 border border-blue-200 rounded-full shadow-sm text-blue-950 font-serif font-bold text-xs sm:text-sm whitespace-nowrap">
        <Gem className="w-4 h-4 text-indigo-600" />
        <span>Swarovski Accents</span>
      </div>
    ),
    title: 'Swarovski Accents'
  },
  {
    node: (
      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 border border-blue-200 rounded-full shadow-sm text-blue-950 font-serif font-bold text-xs sm:text-sm whitespace-nowrap">
        <Scissors className="w-4 h-4 text-blue-600" />
        <span>Handcrafted Precision</span>
      </div>
    ),
    title: 'Handcrafted Precision'
  },
  {
    node: (
      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 border border-blue-200 rounded-full shadow-sm text-blue-950 font-serif font-bold text-xs sm:text-sm whitespace-nowrap">
        <Award className="w-4 h-4 text-amber-600" />
        <span>Premium Velvet & Brocade</span>
      </div>
    ),
    title: 'Premium Velvet & Brocade'
  },
  {
    node: (
      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 border border-blue-200 rounded-full shadow-sm text-blue-950 font-serif font-bold text-xs sm:text-sm whitespace-nowrap">
        <Palette className="w-4 h-4 text-rose-600" />
        <span>Hand-Dyed Luxury Ankara</span>
      </div>
    ),
    title: 'Hand-Dyed Luxury Ankara'
  }
];

export const BestSellers: React.FC<BestSellersProps> = ({ onSelectCategoryForBooking }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [selectedItem, setSelectedItem] = useState<BestSellerItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'deck'>('grid');

  const filterCategories: CategoryFilter[] = [
    'All',
    'Bespoke Native',
    "Children's Wear",
    'Bridal Couture',
    'Reception & Party',
  ];

  const filteredItems = activeFilter === 'All'
    ? BEST_SELLERS
    : BEST_SELLERS.filter(item => item.category === activeFilter);

  const handleBookCategory = (title: string) => {
    setSelectedItem(null);
    onSelectCategoryForBooking(title);
  };

  return (
    <section id="best-sellers" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>Curated Collections</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            Best Sellers
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Discover our most-loved collections, thoughtfully designed to make every special moment unforgettable.
          </p>

          {/* Luxury Craft & Fabrics Infinite Logo Loop */}
          <div className="py-3 px-2 bg-slate-100/70 border border-slate-200/80 rounded-2xl my-4 overflow-hidden">
            <LogoLoop
              logos={LUXURY_PARTNERS}
              speed={70}
              direction="left"
              logoHeight={36}
              gap={24}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#f8fafc"
              ariaLabel="Luxury craftsmanship features"
            />
          </div>

          {/* Filter Tabs & View Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterCategories.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white shadow-md border border-blue-600'
                      : 'bg-white text-blue-950 hover:bg-blue-50 border border-blue-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-blue-200 shadow-sm mx-auto sm:mx-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-blue-950 hover:bg-blue-50'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode('deck')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  viewMode === 'deck'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-blue-950 hover:bg-blue-50'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Card Deck</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card Swap Animated Deck View */}
        {viewMode === 'deck' ? (
          <div className="py-12 flex flex-col items-center justify-center min-h-[480px]">
            <CardSwap
              width={340}
              height={380}
              cardDistance={50}
              verticalDistance={60}
              delay={4000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              {filteredItems.map((item) => (
                <Card key={item.id} customClass="p-0 overflow-hidden text-slate-900 border border-blue-200 bg-white shadow-xl">
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow">
                        {item.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-blue-900 text-[11px] font-bold px-2.5 py-0.5 rounded border border-blue-200">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-4 space-y-2 flex flex-col justify-between h-[calc(100%-11rem)]">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-blue-950 line-clamp-1">{item.title}</h4>
                      <p className="text-slate-600 text-xs line-clamp-2 mt-1">{item.description}</p>
                    </div>
                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="flex-1 text-center py-2 px-2 bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs font-semibold rounded border border-blue-200 transition-colors"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => handleBookCategory(item.title)}
                        className="flex-1 text-center py-2 px-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors flex items-center justify-center gap-1"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        ) : (
          /* Collection Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image & Badge */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                        {item.badge}
                      </span>
                    )}

                    <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-blue-900 text-xs font-bold px-2.5 py-1 rounded border border-blue-200">
                      {item.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      {item.details.slice(0, 2).map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs font-semibold rounded-md border border-blue-200 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-blue-600" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => handleBookCategory(item.title)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>Book This</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-blue-100 relative animate-scaleUp">
            
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-blue-950/60 text-white hover:bg-blue-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto h-full min-h-[260px] bg-slate-100">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                    {selectedItem.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    TEE TRENDING THREADS ATELIER
                  </span>
                  <h3 className="font-serif text-2xl font-extrabold text-blue-950">
                    {selectedItem.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Craftsmanship Highlights:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {selectedItem.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedItem.leadTime && (
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 flex justify-between items-center">
                      <span className="font-medium">Estimated Production Lead Time:</span>
                      <strong className="font-bold">{selectedItem.leadTime}</strong>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200 flex gap-3">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-md transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleBookCategory(selectedItem.title)}
                    className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
