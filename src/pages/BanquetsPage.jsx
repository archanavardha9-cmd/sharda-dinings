import React, { useState } from 'react';
import { Calendar, Users, Phone, Sparkles, CheckCircle2, ChevronRight, MessageSquare, ShieldCheck, HeartHandshake, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, SpiceStar, WheatFlourish } from '../components/DecorativeGraphics';

export default function BanquetsPage({ onOpenEnquiry, onOpenVerification }) {
  const [eventType, setEventType] = useState('Wedding Reception');
  const [guestCount, setGuestCount] = useState('100');
  const [foodPreference, setFoodPreference] = useState('Pure Vegetarian & Jain');
  const [eventDate, setEventDate] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [organizerPhone, setOrganizerPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const celebrationTypes = [
    {
      title: 'Engagements & Receptions',
      tag: 'Grand Milestone',
      desc: 'Illuminated stage backdrops, formal banquet dining, and comfortable seating clusters for extended family blessings.',
      image: '/images/banquets/sharda-wedding-stage.webp',
      capacity: '100–150 Guests',
      features: ['Custom Stage & Floral Frames', 'Multi-Course Buffet', 'Upstairs Room Accommodation']
    },
    {
      title: 'Haldi, Mehndi & Sangeet',
      tag: 'Pre-Wedding Joy',
      desc: 'Vibrant daytime rituals with specialized high-tea menus, chaat counters, and acoustic sound setup for musical evenings.',
      image: '/images/banquets/sharda-wedding-stage-floral-rings.webp',
      capacity: '60–120 Guests',
      features: ['Dedicated Dance & Ritual Floor', 'Live Chaat & Beverage Counters', 'Flexible Seating Layouts']
    },
    {
      title: 'Anniversaries & Milestone Feasts',
      tag: 'Family Gatherings',
      desc: 'Intimate to grand generational gatherings celebrating 25th/50th anniversaries, retirement honors, and birthdays.',
      image: '/images/banquets/sharda-banquet-buffet.webp',
      capacity: '50–100 Guests',
      features: ['Personalized Audio Setup', 'Dedicated Captain & Service', 'Signature Awadhi Cuisine']
    },
    {
      title: 'Corporate Meets & Seminars',
      tag: 'Professional Excellence',
      desc: 'Air-conditioned conclave hall equipped for regional dealer meets, academic seminars, and executive banquets.',
      image: '/images/banquets/sharda-banquet-hall-tables.webp',
      capacity: '40–90 Delegates',
      features: ['Audio-Visual & Screen Setup', 'Continuous High-Tea Service', 'Power Backup with Silent Generator']
    }
  ];

  const handleQuotationSubmit = (e) => {
    e.preventDefault();
    if (!organizerName || !organizerPhone) return;

    const message = `Hello Sharda Dinings Banquet Desk, I would like to enquire about Event Booking:\n\nOrganizer: ${organizerName}\nPhone: ${organizerPhone}\nEvent Type: ${eventType}\nGuest Count: ${guestCount} Guests\nCatering: ${foodPreference}\nTentative Date: ${eventDate || 'Flexible'}\n\nPlease share hall availability and menu packages.`;
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phones[1].number.replace('+', '')}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Royal Wine & Gilded Grandeur
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#2A1319] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0 image-zoom-container">
          <img
            src="/images/banquets/sharda-banquet-hall.webp"
            alt="Grand banquet hall at Sharda Dinings Gorakhpur"
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A1319] via-[#2A1319]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#2A1319]/50 to-[#2A1319]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="05" total="07" label="INDOOR BANQUETS & GRAND GALAS" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Banquets & <span className="text-[#D4AF37] italic font-normal">Celebrations</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#EFE8DC]/85 font-light leading-relaxed">
            Gorakhpur’s premier air-conditioned celebration venue. Hosting 100 seated and 150 floating guests with 
            exquisite in-house royal catering and 11 guest rooms under one roof.
          </p>

          <GildedDivider className="my-4" />

          {/* Key Metrics Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-xs font-mono text-[#D4AF37]">
            <span>100 Seated Guests</span>
            <span>•</span>
            <span>150 Floating Capacity</span>
            <span>•</span>
            <span>100% In-House Master Chefs</span>
            <span>•</span>
            <span>Non-Alcoholic Sanctuary</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#estimator-suite"
              className="px-7 py-3 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#1C1617] text-xs uppercase tracking-wider font-semibold rounded-full shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-105"
            >
              Get Event Quotation
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phones[1].number}`}
              className="px-7 py-3 border border-[#D4AF37] hover:bg-[#D4AF37]/15 text-[#D4AF37] text-xs uppercase tracking-wider font-semibold rounded-full transition-all"
            >
              Call Banquet Desk: {BUSINESS_INFO.phones[1].display}
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: VENUE SPECIFICATIONS & METRICS (Editorial Split)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#EFE8DC]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#3D1B24] font-mono font-bold block">
              Architectural Specifications
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
              Designed for Seamless Flow & Grandeur
            </h2>
            <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
              Carefully engineered layout ensuring stage sightlines, smooth buffet circulation, and peaceful family hospitality.
            </p>
          </div>

          {/* Dual Capacity Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EFE8DC] shadow-sm">
              <div className="flex items-baseline space-x-3">
                <span className="font-serif text-5xl font-bold text-[#3D1B24]">100</span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] font-bold">SEATED GUESTS</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1617] mt-3">Formal Dining & Ritual Layouts</h3>
              <p className="text-xs text-[#1C1617]/70 mt-1 leading-relaxed">
                Spaced round banquet tables with stage sightlines. Ideal for sacred rituals, engagement blessings, and seated feasts.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#2A1319] text-[#FAF7F2] border border-[#D4AF37]/30 shadow-md">
              <div className="flex items-baseline space-x-3">
                <span className="font-serif text-5xl font-bold text-[#D4AF37]">150</span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#FAF7F2]/60 font-bold">FLOATING GUESTS</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAF7F2] mt-3">Evening Receptions & Sangeet Flow</h3>
              <p className="text-xs text-[#FAF7F2]/75 mt-1 leading-relaxed">
                Open-floor configuration featuring a central stage, photo lounge, and continuous live starter circulation.
              </p>
            </div>
          </div>

          {/* Integrated Pillars Strip (Horizontal Architecture) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#EFE8DC]">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#3D1B24] block">Non-Alcoholic Sanctuary</span>
              <p className="text-[11px] text-[#1C1617]/65">Strict sober environment ensuring dignity and comfort for all generations.</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#3D1B24] block">11 Upstairs AC Rooms</span>
              <p className="text-[11px] text-[#1C1617]/65">Reserve guest rooms for bride/groom prep and out-of-town wedding guests.</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#3D1B24] block">100% Power Generator</span>
              <p className="text-[11px] text-[#1C1617]/65">Heavy-duty silent generator ensures uninterrupted cooling and sound.</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#3D1B24] block">Single Point Manager</span>
              <p className="text-[11px] text-[#1C1617]/65">One dedicated captain coordinating sound, catering, and event timing.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: CELEBRATIONS PORTFOLIO (2x2 Asymmetric Stagger)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EFE8DC]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#3D1B24] font-mono font-bold block">
              Event Portfolio
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
              Every Milestone Celebrated with Grace
            </h2>
            <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
              Tailored event layouts for sacred family occasions, corporate conclaves, and community milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {celebrationTypes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-white border border-[#D4AF37]/30 shadow-md group hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden image-zoom-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter contrast-[1.05]"
                    />
                    <div className="absolute top-3 left-3 bg-[#2A1319]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[#D4AF37] font-mono text-[10px] uppercase border border-[#D4AF37]/30">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#1C1617]/85 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-mono text-[#FAF7F2]">
                      {item.capacity}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#1C1617] group-hover:text-[#3D1B24] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-[#1C1617]/65">
                      {item.features.map((f, fi) => (
                        <span key={fi} className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EFE8DC]">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      setEventType(item.title);
                      const el = document.getElementById('estimator-suite');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2 bg-[#FAF7F2] hover:bg-[#3D1B24] hover:text-[#FAF7F2] text-[#3D1B24] border border-[#3D1B24]/20 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <span>Enquire for {item.title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: ITEMIZED EVENT QUOTATION BUILDER
      ───────────────────────────────────────────────────────────── */}
      <section id="estimator-suite" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2A1319] text-[#FAF7F2]">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold block">
              Event Concierge
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal">
              Build Your Custom Celebration Package
            </h2>
            <p className="text-xs text-[#FAF7F2]/80 max-w-md mx-auto">
              Tell us about your tentative dates, guest count, and catering preferences. 
              Our banquet manager will share hall availability and tailored menus.
            </p>
          </div>

          <div className="bg-[#1C1617] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="font-serif text-xl font-bold">Quotation Enquiry Dispatched</h3>
                <p className="text-xs text-[#FAF7F2]/70 max-w-sm mx-auto">
                  Your event specifications have opened on WhatsApp to our banquet team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-[#D4AF37] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
                >
                  Create Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuotationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Organizer Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Swarup Verma"
                      value={organizerName}
                      onChange={(e) => setOrganizerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 99724 03294"
                      value={organizerPhone}
                      onChange={(e) => setOrganizerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Celebration Nature
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#2A1319] border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Wedding Reception">Wedding Reception</option>
                      <option value="Ring Ceremony / Sagai">Ring Ceremony / Sagai</option>
                      <option value="Haldi / Mehndi / Sangeet">Haldi / Mehndi / Sangeet</option>
                      <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                      <option value="Corporate Conclave / Conference">Corporate Conclave / Conference</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Expected Guest Count
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#2A1319] border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="50">50 Guests (Intimate Gathering)</option>
                      <option value="75">75 Guests (Medium Gathering)</option>
                      <option value="100">100 Guests (Full Seated Banquet)</option>
                      <option value="125">125 Guests (Spacious Reception)</option>
                      <option value="150">150 Guests (Maximum Floating Capacity)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Catering Preference
                    </label>
                    <select
                      value={foodPreference}
                      onChange={(e) => setFoodPreference(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#2A1319] border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Pure Vegetarian (Standard)">Pure Vegetarian (Standard)</option>
                      <option value="Pure Vegetarian with Jain Counters">Pure Vegetarian with Jain Counters</option>
                      <option value="Multi-Cuisine Veg & Non-Veg">Multi-Cuisine Veg & Non-Veg</option>
                      <option value="High Tea & Snacks Buffet">High Tea & Snacks Buffet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Tentative Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-[#FAF7F2]/60">
                    Banquet Desk Direct: {BUSINESS_INFO.phones[1].display}
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2.5 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send WhatsApp Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
