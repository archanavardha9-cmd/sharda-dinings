import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/restaurant', label: 'Restaurant' },
  { to: '/menu', label: 'Menu' },
  { to: '/olive-cafe', label: 'Olive Cafe' },
  { to: '/banquets', label: 'Banquets' },
  { to: '/hotel', label: 'Hotel' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onOpenEnquiry }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/94 backdrop-blur-xl border-b border-[#DED0C0] shadow-[0_10px_30px_-18px_rgba(36,24,20,0.28)]'
          : 'bg-[#FAF7F2]/88 backdrop-blur-md border-b border-[#E6D9CB]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Clean Brand Wordmark */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Sharda Dinings Home"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group"
        >
          <img
            src="/images/home/sharda-dinings-logo.webp"
            alt="Sharda Dinings crest"
            className="w-8 h-8 rounded-full object-cover border border-[#D99B38]/80 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
          />
          <span className="font-serif text-[1.45rem] font-semibold tracking-tight text-[#241814] group-hover:text-[#6E2434] transition-colors">
            Sharda Dinings
          </span>
        </Link>

        {/* Zone 2: Single-Line Navigation Across All 7 Pages */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative py-1.5 text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-[#D99B38] after:to-[#6E2434] after:origin-left after:transition-transform after:duration-300 ${
                  isActive
                    ? 'text-[#6E2434] font-semibold after:scale-x-100'
                    : 'text-[#5E5049] hover:text-[#241814] after:scale-x-0 hover:after:scale-x-100'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Primary Reservation Action + Mobile Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenEnquiry('restaurant')}
            className="gloss-btn hidden sm:inline-flex items-center justify-center px-5 py-2 min-h-[40px] bg-[#241814] hover:bg-[#6E2434] text-[#FAF7F2] text-xs font-semibold tracking-wide rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            Reserve
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#241814] hover:text-[#6E2434] transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[#E6D9CB] bg-[#FAF7F2]/98 backdrop-blur-xl px-6 py-5 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-xl"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-3 text-base font-medium border-b border-[#EAE0D2] transition-colors ${
                  isActive ? 'text-[#6E2434] font-semibold' : 'text-[#241814] hover:text-[#6E2434]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenEnquiry('restaurant');
              }}
              className="gloss-btn w-full min-h-[44px] px-5 py-3 bg-[#6E2434] text-white text-xs font-semibold tracking-wider uppercase rounded-md transition-colors"
            >
              Reserve Table or Stay
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="w-full min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 border border-[#E4D8CA] text-[#241814] text-xs font-medium rounded-md hover:bg-[#F5ECE0] transition-colors tabular-nums"
            >
              Call {BUSINESS_INFO.phones[0].display}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
