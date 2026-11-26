import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close drawer on Escape key and lock background scroll only while open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

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

      {/* Main Glassmorphic Navigation Bar (fixed h-16 height ensures pixel-accurate sticky offsets below) */}
      <header
        className={`sticky top-0 z-40 h-16 flex items-center transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#1C1617]/95 backdrop-blur-md shadow-xl border-b border-[#D4AF37]/30'
            : 'bg-[#1C1617]/90 backdrop-blur-sm border-b border-white/10'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
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
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-[#FAF7F2] hover:text-[#D4AF37] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Compact Right-Side Mobile Hamburger Drawer (rendered outside sticky backdrop-blur header so fixed spans full viewport) */}
      <div
        id="mobile-nav-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-50 lg:hidden transition-visibility duration-300 ${
          mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
      >
        {/* Subtle Backdrop Overlay - Tapping anywhere on the left visible area closes drawer immediately */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close navigation menu overlay"
          className={`absolute inset-0 bg-black/45 backdrop-blur-[1.5px] transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Narrow Right-Side Drawer Panel (75% width, capped at 320px) */}
        <aside
          role="dialog"
          aria-modal={mobileMenuOpen}
          aria-label="Mobile Navigation"
          className={`fixed top-0 right-0 bottom-0 w-[75vw] max-w-[320px] bg-[#1C1617] text-[#FAF7F2] border-l border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center"
              aria-label="Sharda Dinings Home"
            >
              <img
                src="/images/home/sharda-dinings-logo-clean.webp"
                alt="Sharda Dinings"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation drawer"
              className="p-2 rounded-full text-[#FAF7F2]/80 hover:text-[#D4AF37] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-bold border-l-2 border-[#D4AF37]'
                      : 'text-[#FAF7F2]/85 hover:bg-white/5 hover:text-[#D4AF37] font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-white/30'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Drawer Footer Actions */}
          <div className="p-4 border-t border-white/10 bg-[#141011] space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('restaurant');
              }}
              className="w-full py-2.5 px-4 rounded-full bg-[#B94E35] hover:bg-[#963822] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-md cursor-pointer"
            >
              Reserve Experience
            </button>

            <div className="flex items-center justify-between text-[11px] pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center space-x-1.5 text-[#D4AF37] font-mono font-semibold hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.phones[0].display}</span>
              </a>
            </div>

            <div className="flex items-start space-x-1.5 text-[10px] text-[#FAF7F2]/55 leading-snug">
              <MapPin className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>East Rajendra Nagar, Gorakhnath Rd, Gorakhpur</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
