import React, { useState } from 'react';
import { Calendar, Users, Phone, Sparkles, CheckCircle2, ChevronRight, MessageSquare, ShieldCheck, HeartHandshake, Building2, Flame, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, SpiceStar, WheatFlourish } from '../components/DecorativeGraphics';
import {
  FloatingDishPortal,
  KineticTitle,
  FloatingSpiceCanvas,
  FloatingPetalsCanvas,
  ScrollPop,
  ScrollSlide,
  ScrollZoom,
  ScrollRotate,
  FloatingCard,
  StaggerGrid,
  AnimatedCounter
} from '../components/MotionExperience';

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
      <section className="relative min-h-[92vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#35101C] via-[#260A14] to-[#17050B] text-[#FAF7F2] overflow-hidden">
        {/* Subtle Ambient Atmosphere with Color Aura */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/banquets/sharda-banquet-hall.webp"
            alt="Grand banquet hall at Sharda Dinings Gorakhpur"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.25] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17050B] via-[#260A14]/70 to-[#35101C]/50"></div>
          <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-[#E76F51]/20 blur-3xl animate-pulse-glow"></div>
        </div>

        {/* Floating Celebratory Petals */}
        <FloatingPetalsCanvas />

        {/* Floating Stage and Buffet Visual Accents */}
        <div className="hidden lg:block absolute left-10 top-28 z-10">
          <FloatingCard type="vertical" intensity={15} duration={5}>
            <FloatingDishPortal
              src="/images/banquets/sharda-wedding-stage.webp"
              alt="Wedding Stage"
              title="Illuminated Stage"
              subtitle="Floral Decor"
              size="sm"
              depth={1}
              rotation={-5}
              glowColor="rgba(244, 162, 97, 0.55)"
            />
          </FloatingCard>
        </div>

        <div className="hidden lg:block absolute right-10 top-24 z-10">
          <FloatingCard type="reverse" intensity={14} duration={4.8}>
            <FloatingDishPortal
              src="/images/banquets/sharda-banquet-buffet.webp"
              alt="Royal Buffet"
              title="Royal In-House Buffet"
              subtitle="Awadhi Feasts"
              size="sm"
              depth={2}
              rotation={6}
              glowColor="rgba(212, 175, 55, 0.5)"
            />
          </FloatingCard>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="05" total="07" label="INDOOR BANQUETS & GRAND GALAS" />
          </div>

          <KineticTitle as="h1" className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Banquets & Celebrations
          </KineticTitle>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#FDE8E1]/90 font-light leading-relaxed">
            Gorakhpur’s premier air-conditioned celebration venue. Hosting 100 seated and 150 floating guests with 
            exquisite in-house royal catering and 11 guest rooms under one roof.
          </p>

          <GildedDivider className="my-4" />

          {/* Key Metrics Strip with Spring Pop */}
          <StaggerGrid stagger={0.1} animation="pop" className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1 text-xs font-mono max-w-3xl mx-auto">
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/15 text-[#F4A261] font-bold text-center">100 Seated Guests</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/15 text-white text-center">150 Floating Capacity</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/15 text-[#A8D5BA] font-bold text-center">100% In-House Master Chefs</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/15 text-[#FCD5CE] text-center">Non-Alcoholic Sanctuary</span>
          </StaggerGrid>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-lg mx-auto">
            <ScrollPop delay={0.2} className="w-full sm:w-auto">
              <a
                href="#estimator-suite"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center min-h-[46px] px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#F4A261] hover:brightness-110 text-[#1C1617] text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#D4AF37]/30 transition-all hover:scale-105"
              >
                Get Event Quotation
              </a>
            </ScrollPop>
            <ScrollPop delay={0.3} className="w-full sm:w-auto">
              <a
                href={`tel:${BUSINESS_INFO.phones[1].number}`}
                className="w-full sm:w-auto text-center inline-flex items-center justify-center min-h-[46px] px-8 py-3.5 border-2 border-[#D4AF37] hover:bg-[#D4AF37]/20 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full transition-all hover:scale-105"
              >
                Call Banquet Desk: {BUSINESS_INFO.phones[1].display}
              </a>
            </ScrollPop>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: VENUE SPECIFICATIONS & DUAL CAPACITY
          Champagne & Wine Atmosphere with Animated Counters
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF5EF] via-[#F4EDE2] to-[#EFE7D8] border-b-2 border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <ScrollSlide direction="down" distance={40}>
              <span className="text-[11px] uppercase tracking-widest text-[#4A1521] font-mono font-bold block">
                Architectural Specifications
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={50} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Designed for Seamless Flow & Grandeur
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Carefully engineered layout ensuring stage sightlines, smooth buffet circulation, and peaceful family hospitality.
              </p>
            </ScrollSlide>
          </div>

          {/* Dual Capacity Showcase with Slide In */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollSlide direction="left" distance={60}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#D4AF37]/35 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-baseline space-x-3">
                  <AnimatedCounter end={100} suffix="" className="font-serif text-5xl sm:text-6xl font-bold text-[#4A1521]" />
                  <span className="text-xs uppercase font-mono tracking-widest text-[#C84B31] font-bold">SEATED GUESTS</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1617] mt-3">Formal Dining & Ritual Layouts</h3>
                <p className="text-xs text-[#1C1617]/75 mt-1.5 leading-relaxed font-light">
                  Spaced round banquet tables with unobstructed stage sightlines. Ideal for sacred rituals, engagement blessings, and seated thali feasts.
                </p>
              </div>
            </ScrollSlide>

            <ScrollSlide direction="right" distance={60} delay={0.15}>
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#4A1521] to-[#2B0C15] text-[#FAF7F2] border-2 border-[#D4AF37]/50 shadow-2xl hover:shadow-2xl transition-all">
                <div className="flex items-baseline space-x-3">
                  <AnimatedCounter end={150} suffix="" className="font-serif text-5xl sm:text-6xl font-bold text-[#F4A261]" />
                  <span className="text-xs uppercase font-mono tracking-widest text-[#FAF7F2]/70 font-bold">FLOATING GUESTS</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#FAF7F2] mt-3">Evening Receptions & Sangeet Flow</h3>
                <p className="text-xs text-[#FDE8E1]/85 mt-1.5 leading-relaxed font-light">
                  Open-floor configuration featuring a central illuminated stage, photo lounge, and continuous live starter circulation.
                </p>
              </div>
            </ScrollSlide>
          </div>

          {/* Integrated Pillars Strip */}
          <StaggerGrid stagger={0.1} animation="pop" className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t-2 border-[#D4AF37]/20">
            <div className="p-4 rounded-2xl bg-white border border-[#EFE8DC] space-y-1 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#4A1521] block">Non-Alcoholic Sanctuary</span>
              <p className="text-[11px] text-[#1C1617]/70 font-light">Strict sober environment ensuring dignity and comfort for all generations.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#EFE8DC] space-y-1 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#4A1521] block">11 Upstairs AC Rooms</span>
              <p className="text-[11px] text-[#1C1617]/70 font-light">Reserve guest rooms for bride/groom prep and out-of-town wedding guests.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#EFE8DC] space-y-1 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#4A1521] block">100% Power Generator</span>
              <p className="text-[11px] text-[#1C1617]/70 font-light">Heavy-duty silent generator ensures uninterrupted cooling and sound.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#EFE8DC] space-y-1 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#4A1521] block">Single Point Manager</span>
              <p className="text-[11px] text-[#1C1617]/70 font-light">One dedicated captain coordinating sound, catering, and event timing.</p>
            </div>
          </StaggerGrid>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: CELEBRATIONS PORTFOLIO (Warm Saffron Sand)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FDF6EE] via-[#FAF0E6] to-[#F5E6D8]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <ScrollSlide direction="down" distance={40}>
              <span className="text-[11px] uppercase tracking-widest text-[#4A1521] font-mono font-bold block">
                Event Portfolio
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={50} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Every Milestone Celebrated with Grace
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Tailored event layouts for sacred family occasions, corporate conclaves, and community milestones.
              </p>
            </ScrollSlide>
          </div>

          <StaggerGrid stagger={0.12} animation="zoom" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {celebrationTypes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-white border-2 border-[#D4AF37]/35 shadow-md group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter contrast-[1.08] group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#4A1521]/90 backdrop-blur-md px-3 py-1 rounded-full text-[#F4A261] font-mono text-[10px] uppercase font-bold border border-white/20">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#1C1617]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-[#FAF7F2] font-semibold">
                      {item.capacity}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-bold text-[#1C1617] group-hover:text-[#4A1521] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                      {item.desc}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-[#1C1617]/70">
                      {item.features.map((f, fi) => (
                        <span key={fi} className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#EFE8DC] font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      setEventType(item.title);
                      const el = document.getElementById('estimator-suite');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl border-2 border-[#4A1521]/20 hover:bg-[#4A1521] hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Select & Calculate Package
                  </button>
                </div>
              </div>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: ESTIMATOR SUITE (Warm Terracotta & Peach)
      ───────────────────────────────────────────────────────────── */}
      <section id="estimator-suite" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF0E6] via-[#FDE8E1] to-[#FBE8E2] border-t-2 border-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <ScrollSlide direction="down" distance={30}>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#4A1521] font-bold block">
                Event Planning Desk
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Get Instant Banquet Quotation
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={30} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Select your specifications and send directly to our banquet management team via WhatsApp.
              </p>
            </ScrollSlide>
          </div>

          <ScrollPop delay={0.25}>
            <form onSubmit={handleQuotationSubmit} className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-[#D4AF37]/35 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Organizer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={organizerName}
                    onChange={(e) => setOrganizerName(e.target.value)}
                    placeholder="e.g. Mr. S. K. Gupta"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#4A1521] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={organizerPhone}
                    onChange={(e) => setOrganizerPhone(e.target.value)}
                    placeholder="+91 99724 03294"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#4A1521] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Event Category
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#4A1521] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  >
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Engagement / Roka">Engagement / Roka</option>
                    <option value="Haldi / Mehndi / Sangeet">Haldi / Mehndi / Sangeet</option>
                    <option value="Anniversary / Birthday">Anniversary / Birthday</option>
                    <option value="Corporate Conclave">Corporate Conclave</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Estimated Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#4A1521] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  >
                    <option value="50">50 Guests (Intimate)</option>
                    <option value="75">75 Guests</option>
                    <option value="100">100 Guests (Standard Seated)</option>
                    <option value="125">125 Guests</option>
                    <option value="150">150 Guests (Max Floating)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Tentative Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#4A1521] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                  Catering Preference
                </label>
                <select
                  value={foodPreference}
                  onChange={(e) => setFoodPreference(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#4A1521] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                >
                  <option value="Pure Vegetarian & Jain (Dedicated Cookware)">Pure Vegetarian & Jain (Dedicated Cookware)</option>
                  <option value="Multi-Cuisine Veg & Non-Veg Royal Buffet">Multi-Cuisine Veg & Non-Veg Royal Buffet</option>
                  <option value="High-Tea & Chaat Counters Only">High-Tea & Chaat Counters Only</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-3.5 bg-gradient-to-r from-[#4A1521] to-[#66182B] hover:brightness-110 text-white text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#4A1521]/30 transition-all hover:scale-105 cursor-pointer"
                >
                  Request Proposal on WhatsApp
                </button>

                <div className="flex items-center space-x-2 text-[11px] text-[#1C1617]/70 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Direct Banquet Manager response within 2 business hours</span>
                </div>
              </div>
            </form>
          </ScrollPop>

        </div>
      </section>

    </div>
  );
}