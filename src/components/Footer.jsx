import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ExternalLink, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

const PAGE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/restaurant', label: 'Restaurant' },
  { to: '/menu', label: 'Menu & Ordering' },
  { to: '/olive-cafe', label: 'Olive Cafe' },
  { to: '/banquets', label: 'Banquets & Events' },
  { to: '/hotel', label: 'Hotel & Rooms' },
  { to: '/contact', label: 'Contact & Maps' },
];

export default function Footer({ onOpenVerification, onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-[#181213] text-[#FAF7F2] border-t border-[#D4AF37]/20 no-print">
      
      {/* Top Hospitality Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1.5 font-mono">
              Gorakhnath Road · East Rajendra Nagar
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-normal leading-snug">
              Four hospitality experiences at one Gorakhpur landmark.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenEnquiry('restaurant')}
              className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#1C1617] text-xs font-semibold uppercase tracking-wider rounded-full transition-all whitespace-nowrap shadow-md cursor-pointer"
            >
              Book Table or Stay
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="px-4 py-2.5 border border-white/20 hover:border-[#D4AF37] text-[#FAF7F2] hover:text-[#D4AF37] text-xs font-medium uppercase tracking-wider rounded-full inline-flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
            >
              <ArrowUp size={13} aria-hidden="true" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Identity & Logo without circle */}
        <div className="lg:col-span-4 space-y-4">
          <Link to="/" className="inline-block group" aria-label="Sharda Dinings Home">
            <img
              src="/images/home/sharda-dinings-logo-clean.webp"
              alt="Sharda Dinings"
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <p className="text-xs text-[#FAF7F2]/70 leading-relaxed max-w-sm">
            Multi-cuisine dining, Olive Cafe roasts and patisserie, indoor banquet venue for 150 guests, and 11 boutique guest rooms near Gorakhnath Mandir.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs">
            <a
              href={BUSINESS_INFO.ordering.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline"
            >
              <span>Zomato</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.ordering.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline"
            >
              <span>Swiggy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.bookingPlatforms.makemytrip}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline"
            >
              <span>MakeMyTrip</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Social Media Profiles */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={BUSINESS_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Sharda Dinings on Facebook"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-[#FAF7F2]/80 hover:text-[#181213] transition-all hover:scale-110 shadow-sm cursor-pointer"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Sharda Dinings on Instagram"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-[#FAF7F2]/80 hover:text-[#181213] transition-all hover:scale-110 shadow-sm cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="lg:col-span-3 space-y-3">
          <p className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold">
            Navigation
          </p>
          <ul className="space-y-1.5 text-xs text-[#FAF7F2]/80">
            {PAGE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-[#D4AF37] transition-colors py-0.5 inline-block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Department Desks */}
        <div className="lg:col-span-5 space-y-3">
          <p className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold">
            Contact & Location
          </p>
          <div className="space-y-2 text-xs text-[#FAF7F2]/80">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.city} — {BUSINESS_INFO.address.pincode}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="font-mono hover:text-[#D4AF37] text-white">
                {BUSINESS_INFO.phones[0].display} (Dining & Hotel)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phones[1].number}`} className="font-mono hover:text-[#D4AF37] text-white">
                {BUSINESS_INFO.phones[1].display} (Banquets)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D4AF37]">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenVerification}
              className="inline-flex items-center gap-1.5 text-xs text-[#FAF7F2]/70 hover:text-[#D4AF37] border border-white/10 px-3 py-1.5 rounded-lg cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>View Business Verification Register</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/5 py-5 px-4 sm:px-6 lg:px-8 text-center text-[11px] text-[#FAF7F2]/50">
        <p>© {new Date().getFullYear()} Sharda Dinings, Gorakhpur. All rights reserved. Multi-Cuisine Restaurant · Olive Cafe · Banquets · Boutique Hotel.</p>
      </div>

    </footer>
  );
}
