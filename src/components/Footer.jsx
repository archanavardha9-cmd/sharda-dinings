import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

const destinations = [
  ['/restaurant', 'Restaurant'],
  ['/menu', 'Menu'],
  ['/olive-cafe', 'Olive Cafe'],
  ['/banquets', 'Banquets & Events'],
  ['/hotel', 'Hotel & Rooms'],
  ['/contact', 'Contact'],
];

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="site-footer">
      <div className="footer-invitation">
        <div className="container footer-invitation__inner">
          <div>
            <span className="eyebrow">Make a day of it</span>
            <h2>Good food, thoughtful stays, and reasons to gather.</h2>
          </div>
          <button type="button" className="button button--light" onClick={() => onOpenEnquiry('restaurant')}>
            Plan your visit <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand-lockup brand-lockup--footer" to="/">
            <img src="/images/home/sharda-dinings-logo.webp" alt="" loading="lazy" />
            <span>
              <strong>Sharda Dinings</strong>
              <small>Gorakhpur · Est. 2010</small>
            </span>
          </Link>
          <p>Dining, celebration, coffee and rest, gathered in one welcoming address.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul className="footer-links">
            {destinations.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3>Find us</h3>
          <address>
            <span><MapPin size={14} /> {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.pincode}</span>
            <a href={`tel:${BUSINESS_INFO.phones[0].number}`}><Phone size={14} /> {BUSINESS_INFO.phones[0].display}</a>
            <a href={`mailto:${BUSINESS_INFO.email}`}><Mail size={14} /> {BUSINESS_INFO.email}</a>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Sharda Dinings, Gorakhpur</span>
        <span>Open daily · 11 am – 11 pm</span>
      </div>
    </footer>
  );
}
