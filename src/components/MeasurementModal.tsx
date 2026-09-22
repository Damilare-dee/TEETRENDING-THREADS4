import React, { useState } from 'react';
import { ClientMeasurement } from '../types';
import { Scissors, Ruler, Check, X, Info } from 'lucide-react';

interface MeasurementModalProps {
  isOpen: boolean;
  currentMeasurement: ClientMeasurement | null;
  onSave: (measurement: ClientMeasurement) => void;
  onClose: () => void;
}

export const MeasurementModal: React.FC<MeasurementModalProps> = ({
  isOpen,
  currentMeasurement,
  onSave,
  onClose
}) => {
  const [bust, setBust] = useState(currentMeasurement?.bust || '');
  const [waist, setWaist] = useState(currentMeasurement?.waist || '');
  const [hips, setHips] = useState(currentMeasurement?.hips || '');
  const [fullLength, setFullLength] = useState(currentMeasurement?.fullLength || '');
  const [shoulderWidth, setShoulderWidth] = useState(currentMeasurement?.shoulderWidth || '');
  const [sleeveLength, setSleeveLength] = useState(currentMeasurement?.sleeveLength || '');
  const [additionalNotes, setAdditionalNotes] = useState(currentMeasurement?.additionalNotes || '');
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const data: ClientMeasurement = {
      bust: bust ? `${bust} ${unit}` : '',
      waist: waist ? `${waist} ${unit}` : '',
      hips: hips ? `${hips} ${unit}` : '',
      fullLength: fullLength ? `${fullLength} ${unit}` : '',
      shoulderWidth: shoulderWidth ? `${shoulderWidth} ${unit}` : '',
      sleeveLength: sleeveLength ? `${sleeveLength} ${unit}` : '',
      additionalNotes
    };
    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-blue-100 relative animate-scaleUp">
        
        {/* Modal Header */}
        <div className="bg-white text-blue-950 p-6 relative border-b border-blue-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600 rounded-xl text-white">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-blue-950">Measurement Assistant</h3>
              <p className="text-xs text-slate-500 font-normal">
                Save your body measurements for custom fitting
              </p>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Measurement Unit
            </span>
            <div className="flex rounded-lg bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  unit === 'inches' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Inches (in)
              </button>
              <button
                type="button"
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  unit === 'cm' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                Bust / Chest
              </label>
              <input
                type="text"
                placeholder={`e.g. 36 ${unit}`}
                value={bust}
                onChange={(e) => setBust(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                Waist
              </label>
              <input
                type="text"
                placeholder={`e.g. 28 ${unit}`}
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                Hips
              </label>
              <input
                type="text"
                placeholder={`e.g. 40 ${unit}`}
                value={hips}
                onChange={(e) => setHips(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                Full Length
              </label>
              <input
                type="text"
                placeholder={`e.g. 60 ${unit}`}
                value={fullLength}
                onChange={(e) => setFullLength(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                Shoulder Width
              </label>
              <input
                type="text"
                placeholder={`e.g. 15 ${unit}`}
                value={shoulderWidth}
                onChange={(e) => setShoulderWidth(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                Sleeve Length
              </label>
              <input
                type="text"
                placeholder={`e.g. 24 ${unit}`}
                value={sleeveLength}
                onChange={(e) => setSleeveLength(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
              Fitting Notes / Posture Remarks
            </label>
            <textarea
              rows={2}
              placeholder="e.g., Preferred high waist fit, structured corset..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Save Measurements</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
