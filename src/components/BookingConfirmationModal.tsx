import React from 'react';
import { Appointment } from '../types';
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from '../data/fashionData';
import { CheckCircle2, Calendar, Clock, User, Phone, Mail, Sparkles, MessageSquare, Copy, X } from 'lucide-react';

interface BookingConfirmationModalProps {
  appointment: Appointment | null;
  onClose: () => void;
  onViewAllAppointments: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  appointment,
  onClose,
  onViewAllAppointments
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!appointment) return null;

  const formattedWhatsAppMsg = `Hello TEE TRENDING THREADS! Here is my appointment booking details:

🔖 Reference: ${appointment.referenceCode}
👤 Name: ${appointment.fullName}
📞 Phone: ${appointment.phoneNumber}
✂️ Service: ${appointment.serviceRequired}
📅 Preferred Date: ${appointment.preferredDate}
⏰ Preferred Time: ${appointment.preferredTime}
🎉 Occasion: ${appointment.occasion}
${appointment.eventDate ? `🗓️ Event Date: ${appointment.eventDate}\n` : ''}${appointment.additionalInfo ? `📝 Notes: ${appointment.additionalInfo}\n` : ''}
Please confirm my appointment. Thank you!`;

  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
    formattedWhatsAppMsg
  )}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(appointment.referenceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-blue-100 relative animate-scaleUp">
        
        {/* Header Ribbon */}
        <div className="bg-white text-blue-950 p-6 sm:p-8 text-center relative border-b border-blue-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-blue-900 text-[11px] font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-1">
            Appointment Received
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-blue-950">
            Booking Confirmed!
          </h3>

          <p className="text-slate-600 text-xs mt-1 font-normal">
            Thank you, <strong className="text-blue-950">{appointment.fullName}</strong>. We look forward to creating your outfit.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Reference ID Banner */}
          <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Booking Reference Code
              </span>
              <span className="font-mono text-xl font-extrabold text-blue-950">
                {appointment.referenceCode}
              </span>
            </div>
            <button
              onClick={handleCopyCode}
              className="px-3 py-1.5 bg-white border border-blue-300 hover:bg-blue-50 rounded-lg text-xs font-semibold text-blue-900 flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Copy className="w-3.5 h-3.5 text-blue-600" />
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Details Summary Grid */}
          <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-blue-100">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="font-semibold text-slate-500">Service:</span>
              <span className="font-bold text-blue-950">{appointment.serviceRequired}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="font-semibold text-slate-500">Date & Time:</span>
              <span className="font-bold text-blue-950">{appointment.preferredDate} at {appointment.preferredTime}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="font-semibold text-slate-500">Occasion:</span>
              <span className="font-bold text-blue-950">{appointment.occasion}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-500">Phone:</span>
              <span className="font-bold text-blue-950">{appointment.phoneNumber}</span>
            </div>
          </div>

          {/* WhatsApp Direct Action Banner */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow flex items-center justify-center gap-2.5 transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Confirm Instant Appointment via WhatsApp</span>
          </a>

          {/* Modal Footer Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
            >
              Done
            </button>
            <button
              onClick={() => {
                onClose();
                onViewAllAppointments();
              }}
              className="flex-1 py-3 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
            >
              View My Bookings
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
