import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, X, CheckCircle2 } from 'lucide-react';

interface StyleQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceAndCategory: (serviceName: string, categoryTitle: string) => void;
}

export const StyleQuizModal: React.FC<StyleQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceAndCategory
}) => {
  const [step, setStep] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [styleVibe, setStyleVibe] = useState('');
  const [clientType, setClientType] = useState('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setOccasion('');
    setStyleVibe('');
    setClientType('');
  };

  const getRecommendation = () => {
    if (clientType === 'Child' || occasion === 'Birthday' || occasion === 'Naming Ceremony') {
      if (styleVibe === 'Traditional') {
        return {
          title: "Children's Traditional Wear",
          service: "Children's Wear",
          description: "Rich native outfits beautifully tailored with soft interior linings for active toddlers & teens."
        };
      }
      return {
        title: "Children's Party Dresses",
        service: "Children's Wear",
        description: "Elegant party dresses and flower girl gowns with hand-pleated tulle and delicate embroidery."
      };
    }

    if (occasion === 'Wedding') {
      if (styleVibe === 'Glamorous') {
        return {
          title: "Reception Dresses",
          service: "Bridal Consultation",
          description: "Glamorous second-look gowns engineered for dancing, impact, and a stunning entrance."
        };
      }
      return {
        title: "Bridal Gowns",
        service: "Bridal Consultation",
        description: "Custom-designed bespoke wedding gowns tailored to your vision with internal corsetry."
      };
    }

    return {
      title: "Traditional & Native Outfits",
      service: "Consultation",
      description: "Custom-made tailored ensembles crafted to your exact measurements and event theme."
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-blue-100 relative animate-scaleUp">
        
        {/* Header */}
        <div className="bg-white text-blue-950 p-6 relative border-b border-blue-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h3 className="font-serif text-2xl font-bold text-blue-950">Style Finder Assistant</h3>
          </div>
          <p className="text-xs text-slate-500 font-normal mt-1">
            Answer 3 quick questions to discover your ideal TEE TRENDING THREADS collection
          </p>
        </div>

        <div className="p-6 space-y-6">
          
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Question 1 of 3
              </span>
              <h4 className="font-serif text-xl font-bold text-blue-950">
                Who are we styling today?
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {['Adult / Bride', 'Child / Kid', 'Bridal Party', 'Family Matching'].map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setClientType(type);
                      setStep(2);
                    }}
                    className="p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-left font-semibold text-xs text-slate-800 transition-all"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Question 2 of 3
              </span>
              <h4 className="font-serif text-xl font-bold text-blue-950">
                What is the upcoming special occasion?
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {['Wedding', 'Birthday', 'Naming Ceremony', 'Photoshoot', 'Church / Festive', 'Other'].map((occ) => (
                  <button
                    key={occ}
                    onClick={() => {
                      setOccasion(occ);
                      setStep(3);
                    }}
                    className="p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-left font-semibold text-xs text-slate-800 transition-all"
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Question 3 of 3
              </span>
              <h4 className="font-serif text-xl font-bold text-blue-950">
                What visual vibe do you prefer?
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {['Traditional Couture', 'Royal & Elegant', 'Glamorous & Bold', 'Modern Minimalist'].map((vibe) => (
                  <button
                    key={vibe}
                    onClick={() => {
                      setStyleVibe(vibe);
                      setStep(4);
                    }}
                    className="p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-left font-semibold text-xs text-slate-800 transition-all"
                  >
                    {vibe}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-900 bg-white px-3 py-1 rounded-full border border-blue-200 inline-block">
                  Your Recommended Match
                </span>
                <h4 className="font-serif text-2xl font-extrabold text-blue-950">
                  {recommendation.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-normal">
                  {recommendation.description}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectServiceAndCategory(recommendation.service, recommendation.title);
                  }}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow flex items-center justify-center gap-2"
                >
                  <span>Book This Match</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
