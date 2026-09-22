import React from 'react';
import { Appointment } from '../types';
import { WHATSAPP_NUMBER } from '../data/fashionData';
import { Calendar, Clock, User, Phone, X, Trash2, MessageSquare, ExternalLink, Scissors } from 'lucide-react';

interface AppointmentsDrawerProps {
  isOpen: boolean;
  appointments: Appointment[];
  onClose: () => void;
  onCancelAppointment: (id: string) => void;
}

export const AppointmentsDrawer: React.FC<AppointmentsDrawerProps> = ({
  isOpen,
  appointments,
  onClose,
  onCancelAppointment
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-slate-200 flex flex-col justify-between">
          
          {/* Header */}
          <div className="bg-white text-blue-950 p-6 flex items-center justify-between border-b border-blue-100">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="font-serif text-lg font-bold text-blue-950">My Booked Appointments</h3>
                <p className="text-xs text-slate-500 font-normal">TEE TRENDING THREADS Atelier</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {appointments.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto text-blue-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-blue-950 text-base">No Bookings Yet</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  You have not scheduled any appointments yet. Fill out our booking form to get started.
                </p>
              </div>
            ) : (
              appointments.map((apt) => {
                const whatsAppMsg = `Hello TEE TRENDING THREADS! Following up on my appointment (Ref: ${apt.referenceCode}) scheduled for ${apt.preferredDate} at ${apt.preferredTime}.`;
                const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(whatsAppMsg)}`;

                return (
                  <div
                    key={apt.id}
                    className="p-5 bg-slate-50 rounded-2xl border border-blue-100 shadow-sm space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                        {apt.referenceCode}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                        {apt.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-blue-950 text-base">
                        {apt.serviceRequired}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">
                        Occasion: {apt.occasion}
                      </p>
                    </div>

                    <div className="space-y-1 text-xs text-slate-600 bg-white p-3 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        <span>Date: <strong>{apt.preferredDate}</strong> ({apt.preferredTime})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Client: {apt.fullName} ({apt.phoneNumber})</span>
                      </div>
                      {apt.measurements && (
                        <div className="flex items-center gap-2 text-blue-900 font-medium">
                          <Scissors className="w-3.5 h-3.5 text-blue-600" />
                          <span>Measurements Attached</span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Chat</span>
                      </a>
                      <button
                        onClick={() => onCancelAppointment(apt.id)}
                        className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-lg transition-colors"
                        title="Cancel appointment"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-colors"
            >
              Close Drawer
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
