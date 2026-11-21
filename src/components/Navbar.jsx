import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Navbar({ onOpenEnquiry, onOpenVerification }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/restaurant', label: 'Restaurant' },
    { to: '/menu', label: 'Menu' },
    { to: '/olive-cafe', label: 'Olive Cafe' },
    { to: '/banquets', label: 'Banquets & Events' },
    { to: '/hotel', label: 'Hotel & Rooms' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Advisory Strip - Deep Charcoal & Gold Accent */}
      <div className="bg-[#141011] text-[#FAF7F2] text-[11px] py-1.5 px-4 sm:px-8 border-b border-[#D4AF37]/20 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center text-[#D4AF37]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-1.5 animate-pulse"></span>
              Open Today: 11:00 AM – 11:00 PM
            </span>
            <span className="hidden md:inline opacity-40">•</span>
            <span className="hidden md:inline text-[#FAF7F2]/80">East Rajendra Nagar, Gorakhnath Road, Gorakhpur</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenVerification}
              className="text-[#FAF7F2]/80 hover:text-[#D4AF37] flex items-center space-x-1 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="underline decoration-[#D4AF37]/50 underline-offset-2">Verified Data Register</span>
            </button>
            <span className="opacity-40">•</span>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="text-[#FAF7F2] hover:text-[#D4AF37] flex items-center space-x-1 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1C1617]/95 backdrop-blur-md shadow-xl border-b border-[#D4AF37]/30 py-2.5'
            : 'bg-[#1C1617]/90 backdrop-blur-sm border-b border-white/10 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Artwork (No circle, no duplicate text) */}
          <Link to="/" className="inline-flex items-center group py-0.5" aria-label="Sharda Dinings Home">
            <img
              src="/images/home/sharda-dinings-logo-clean.webp"
              alt="Sharda Dinings"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links (Editorial Spacing) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[13px] tracking-wide font-medium transition-all relative py-1 hover:text-[#D4AF37] ${
                    isActive
                      ? 'text-[#D4AF37] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D4AF37]'
                      : 'text-[#FAF7F2]/85'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenEnquiry('restaurant')}
              className="px-5 py-2 rounded-full bg-[#B94E35] hover:bg-[#963822] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#B94E35]/30 hover:scale-105 cursor-pointer"
            >
              Reserve Experience
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#FAF7F2] hover:text-[#D4AF37] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1C1617] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm tracking-wide font-medium py-1.5 transition-colors ${
                      isActive ? 'text-[#D4AF37] font-bold pl-2 border-l-2 border-[#D4AF37]' : 'text-[#FAF7F2]/80 hover:text-[#D4AF37]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('restaurant');
                }}
                className="w-full py-2.5 rounded-full bg-[#B94E35] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider text-center"
              >
                Reserve Experience
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="text-center text-xs text-[#D4AF37] font-mono font-semibold py-1"
              >
                Call: {BUSINESS_INFO.phones[0].display}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
