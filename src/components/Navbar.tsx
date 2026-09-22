import React from 'react';
import PillNav, { PillNavItem } from './PillNav';
import FluidGlass from './FluidGlass';
import { BRAND_LOGO_URL } from '../data/fashionData';

interface NavbarProps {
  appointmentCount: number;
  onOpenAppointments: () => void;
  onOpenMeasurementGuide: () => void;
  onOpenStyleQuiz: () => void;
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  appointmentCount,
  onOpenAppointments,
  onOpenMeasurementGuide,
  onOpenStyleQuiz,
  onScrollToSection
}) => {
  const pillItems: PillNavItem[] = [
    { label: 'Services', href: '#services', onClick: () => onScrollToSection('services') },
    { label: 'Collections', href: '#best-sellers', onClick: () => onScrollToSection('best-sellers') },
    { label: 'Story', href: '#story', onClick: () => onScrollToSection('story') },
    { label: 'Style Finder', onClick: onOpenStyleQuiz },
    { label: `Appointments (${appointmentCount})`, onClick: onOpenAppointments },
    { label: 'Book Now', href: '#booking', onClick: () => onScrollToSection('booking') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-transparent backdrop-blur-md text-slate-100 border-b border-white/10 shadow-none relative py-2">
      {/* Interactive FluidGlass effect overlay in header */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
        <FluidGlass 
          mode="lens" 
          lensProps={{
            scale: 0.18,
            ior: 1.12,
            thickness: 3,
            chromaticAberration: 0.05,
            anisotropy: 0.01
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10 flex items-center justify-between">
        <PillNav
          logo={BRAND_LOGO_URL}
          logoAlt="TEE TRENDING THREADS"
          items={pillItems}
          baseColor="#0f172a"
          pillColor="#2563eb"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#ffffff"
          onLogoClick={() => onScrollToSection('hero')}
        />
      </div>
    </header>
  );
};



