import React, { useState, useEffect } from 'react';
import { Appointment, ClientMeasurement, ServiceType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BestSellers } from './components/BestSellers';
import { WhyUsAndServices } from './components/WhyUsAndServices';
import { StorySection } from './components/StorySection';
import { AppointmentForm } from './components/AppointmentForm';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { AppointmentsDrawer } from './components/AppointmentsDrawer';
import { MeasurementModal } from './components/MeasurementModal';
import { StyleQuizModal } from './components/StyleQuizModal';
import { Footer } from './components/Footer';
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from './data/fashionData';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  // Stored State
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem('teethreads_appointments');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [clientMeasurements, setClientMeasurements] = useState<ClientMeasurement | null>(() => {
    try {
      const saved = localStorage.getItem('teethreads_measurements');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // UI States
  const [preselectedService, setPreselectedService] = useState<string>('Consultation');
  const [isAppointmentsDrawerOpen, setIsAppointmentsDrawerOpen] = useState(false);
  const [isMeasurementModalOpen, setIsMeasurementModalOpen] = useState(false);
  const [isStyleQuizOpen, setIsStyleQuizOpen] = useState(false);
  const [lastBookedAppointment, setLastBookedAppointment] = useState<Appointment | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('teethreads_appointments', JSON.stringify(appointments));
    } catch (e) {
      console.error('Failed to save appointments', e);
    }
  }, [appointments]);

  useEffect(() => {
    try {
      if (clientMeasurements) {
        localStorage.setItem('teethreads_measurements', JSON.stringify(clientMeasurements));
      }
    } catch (e) {
      console.error('Failed to save measurements', e);
    }
  }, [clientMeasurements]);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToSection('booking');
  };

  const handleSelectCategoryForBooking = (categoryTitle: string) => {
    // Map category title to closest service
    if (categoryTitle.includes("Children")) {
      setPreselectedService("Children's Wear");
    } else if (categoryTitle.includes("Bridal")) {
      setPreselectedService("Bridal Consultation");
    } else if (categoryTitle.includes("Reception")) {
      setPreselectedService("Fitting");
    } else {
      setPreselectedService("Consultation");
    }
    scrollToSection('booking');
  };

  const handleAppointmentBooked = (newAppointment: Appointment) => {
    setAppointments(prev => [newAppointment, ...prev]);
    setLastBookedAppointment(newAppointment);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  const floatWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
    'Hello TEE TRENDING THREADS! I would like to make an inquiry regarding custom fashion and tailoring.'
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      
      {/* Navbar Header */}
      <Navbar
        appointmentCount={appointments.length}
        onOpenAppointments={() => setIsAppointmentsDrawerOpen(true)}
        onOpenMeasurementGuide={() => setIsMeasurementModalOpen(true)}
        onOpenStyleQuiz={() => setIsStyleQuizOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onBookClick={() => scrollToSection('booking')}
          onExploreClick={() => scrollToSection('best-sellers')}
          onOpenStyleQuiz={() => setIsStyleQuizOpen(true)}
        />

        {/* Best Sellers Section */}
        <BestSellers
          onSelectCategoryForBooking={handleSelectCategoryForBooking}
        />

        {/* Why Us & Services Section */}
        <WhyUsAndServices
          onSelectService={handleSelectServiceForBooking}
        />

        {/* Brand Story Philosophy Section */}
        <StorySection />

        {/* Interactive Booking Form Section */}
        <AppointmentForm
          preselectedService={preselectedService}
          clientMeasurements={clientMeasurements}
          onAppointmentBooked={handleAppointmentBooked}
          onOpenMeasurementGuide={() => setIsMeasurementModalOpen(true)}
        />

      </main>

      {/* Footer Section */}
      <Footer
        onBookClick={() => scrollToSection('booking')}
        onScrollToSection={scrollToSection}
      />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={floatWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 group border-2 border-white"
        title="Instant WhatsApp Consultation"
      >
        <MessageSquare className="w-6 h-6 fill-current text-white" />
        <span className="hidden sm:inline font-extrabold text-xs tracking-wider uppercase">
          WhatsApp Us
        </span>
      </a>

      {/* MODALS & DRAWERS */}

      {/* 1. Booking Confirmation Modal */}
      <BookingConfirmationModal
        appointment={lastBookedAppointment}
        onClose={() => setLastBookedAppointment(null)}
        onViewAllAppointments={() => setIsAppointmentsDrawerOpen(true)}
      />

      {/* 2. My Booked Appointments Drawer */}
      <AppointmentsDrawer
        isOpen={isAppointmentsDrawerOpen}
        appointments={appointments}
        onClose={() => setIsAppointmentsDrawerOpen(false)}
        onCancelAppointment={handleCancelAppointment}
      />

      {/* 3. Measurement Guide Assistant Modal */}
      <MeasurementModal
        isOpen={isMeasurementModalOpen}
        currentMeasurement={clientMeasurements}
        onSave={(data) => setClientMeasurements(data)}
        onClose={() => setIsMeasurementModalOpen(false)}
      />

      {/* 4. Style Finder Quiz Modal */}
      <StyleQuizModal
        isOpen={isStyleQuizOpen}
        onClose={() => setIsStyleQuizOpen(false)}
        onSelectServiceAndCategory={(serv, cat) => {
          setPreselectedService(serv);
          scrollToSection('booking');
        }}
      />

    </div>
  );
}
