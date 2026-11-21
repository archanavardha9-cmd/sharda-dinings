import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ExternalLink, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { OrbitalRingBackdrop } from './MotionBlocks';

const PAGE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/restaurant', label: 'Restaurant' },
  { to: '/menu', label: 'Menu & Ordering' },
  { to: '/olive-cafe', label: 'Olive Cafe' },
  { to: '/banquets', label: 'Banquets & Events' },
  { to: '/hotel', label: 'Hotel & Rooms' },
  { to: '/contact', label: 'Contact & Maps' },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenVerification, onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#2E1E19] via-[#251713] to-[#1A100D] text-[#F7EEE4] border-t border-[#452F27] no-print">
      <OrbitalRingBackdrop
        size={460}
        opacity={0.14}
        strokeColor="#EAB963"
        secondaryColor="#D8A852"
        className="hidden md:block absolute -right-32 -top-24 w-[440px] h-[440px]"
      />

      {/* Top Hospitality Band */}
      <div className="relative z-10 border-b border-[#452F27]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#EAB963] font-semibold mb-2">
              Gorakhnath Road · East Rajendra Nagar
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFDF8] font-medium">
              Four hospitality experiences at one Gorakhpur address.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenEnquiry('restaurant')}
              className="gloss-btn min-h-[44px] px-6 py-3 bg-gradient-to-r from-[#EAB963] to-[#D8A852] hover:from-[#D8A852] hover:to-[#C6933E] text-[#2C1D18] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shadow-sm"
            >
              Book Table or Stay
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="min-h-[44px] px-4 py-3 border border-[#5A4036] hover:border-[#EAB963] text-[#F7EEE4] hover:text-[#EAB963] text-xs font-medium uppercase tracking-wider rounded-lg inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <ArrowUp size={14} aria-hidden="true" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Directory Grid */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Identity */}
        <div className="lg:col-span-4 space-y-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="/images/home/sharda-dinings-logo.webp"
              alt="Sharda Dinings logo"
              loading="lazy"
              className="w-10 h-10 rounded-full object-cover border border-[#EAB963]/50"
            />
            <div>
              <span className="block font-serif text-2xl text-[#FFFDF8] font-semibold">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-xs text-[#D4C2B2]">
                {BUSINESS_INFO.address.landmark}
              </span>
            </div>
          </Link>
          <p className="text-sm text-[#E0D2C4] leading-relaxed max-w-sm">
            Multi-cuisine dining, Olive Cafe coffee and patisserie, an indoor air-conditioned banquet venue, and 10–11 boutique guest rooms near Gorakhnath Mandir.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs">
            <a
              href={BUSINESS_INFO.ordering.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#EAB963] hover:underline"
            >
              <span>Zomato</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.ordering.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#EAB963] hover:underline"
            >
              <span>Swiggy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.bookingPlatforms.makemytrip}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#EAB963] hover:underline"
            >
              <span>MakeMyTrip</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.bookingPlatforms.goibibo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#EAB963] hover:underline"
            >
              <span>Goibibo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="lg:col-span-3 space-y-3">
          <h3 className="text-xs uppercase tracking-[0.16em] text-[#EAB963] font-semibold">
            Destinations
          </h3>
          <ul className="space-y-2 text-sm">
            {PAGE_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[#E8DAD0] hover:text-[#EAB963] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Address */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="text-xs uppercase tracking-[0.16em] text-[#EAB963] font-semibold">
            Visit &amp; Contact
          </h3>
          <address className="not-italic space-y-2.5 text-sm text-[#E8DAD0]">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-[#EAB963] shrink-0 mt-1" aria-hidden="true" />
              <span>
                {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2},{' '}
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{' '}
                <span className="tabular-nums">{BUSINESS_INFO.address.pincode}</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 tabular-nums">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-[#EAB963]" aria-hidden="true" />
                <span>{BUSINESS_INFO.phones[0].display}</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phones[1].number}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-[#EAB963]" aria-hidden="true" />
                <span>{BUSINESS_INFO.phones[1].display}</span>
              </a>
            </div>
            <div>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-[#EAB963]" aria-hidden="true" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </address>

          <div className="pt-2 text-xs text-[#D4C2B2] flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="tabular-nums">Dine-In: {BUSINESS_INFO.timings.restaurant}</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenVerification}
              className="inline-flex items-center gap-1.5 text-[#EAB963] hover:underline font-medium"
            >
              <ShieldCheck size={13} aria-hidden="true" />
              <span>Business Verification Register</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="relative z-10 border-t border-[#452F27]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D4C2B2]">
          <span>© {CURRENT_YEAR} Sharda Dinings, Gorakhpur. All rights reserved.</span>
          <span className="tabular-nums">
            Hotel Check-in {BUSINESS_INFO.timings.hotelCheckIn} · Check-out {BUSINESS_INFO.timings.hotelCheckOut}
          </span>
        </div>
      </div>
    </footer>
  );
}
