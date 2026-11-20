import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

const links = [
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span>East Rajendra Nagar · Gorakhpur</span>
          <a href={`tel:${BUSINESS_INFO.phones[0].number}`}>
            <Phone size={12} aria-hidden="true" />
            {BUSINESS_INFO.phones[0].display}
          </a>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container nav-inner">
          <Link className="brand-lockup" to="/" onClick={closeMenu} aria-label="Sharda Dinings home">
            <img src="/images/home/sharda-dinings-logo.webp" alt="" />
            <span>
              <strong>Sharda Dinings</strong>
              <small>Gorakhpur · Est. 2010</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'}>
                {label}
              </NavLink>
            ))}
          </nav>
          <button className="nav-booking" type="button" onClick={() => onOpenEnquiry('restaurant')}>
            Reserve
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
          <button type="button" onClick={() => { closeMenu(); onOpenEnquiry('restaurant'); }}>
            Reserve an experience
          </button>
          <a href={`tel:${BUSINESS_INFO.phones[0].number}`}>Call {BUSINESS_INFO.phones[0].display}</a>
        </nav>
      )}
    </header>
  );
}
