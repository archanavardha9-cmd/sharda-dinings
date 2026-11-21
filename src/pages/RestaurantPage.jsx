import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Users, Calendar, Sparkles, CheckCircle2, ChevronRight, MessageSquare, Utensils } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, WheatFlourish, SpiceStar } from '../components/DecorativeGraphics';

export default function RestaurantPage({ onOpenEnquiry, onOpenVerification }) {
  const [activeTradition, setActiveTradition] = useState(0);
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    date: '',
    time: '20:00',
    guests: '4 Guests',
    seating: 'Velvet Family Booth',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const traditions = [
    {
      roman: 'I',
      title: 'Awadhi Dum & Handi',
      subtitle: 'Fragrant Kacchi Handi & Slow-Simmered Gravies',
      desc: 'Meat and paneer simmered in copper handis sealed with dough, infusing saffron, rose petals, and hand-ground garam masalas.',
      image: '/images/food/sharda-dining-biryani.webp',
      badge: 'Chef Signature',
      highlights: ['Handi Dum Biryani with saffron rice', 'Dal Makhani slow-simmered 18 hours', 'Shahi Malai Kofta in cashew glaze']
    },
    {
      roman: 'II',
      title: 'Live Clay Tandoor',
      subtitle: 'Smoky Charcoal Skewers & Gilded Breads',
      desc: 'Our authentic clay tandoor burns natural lump charcoal, imparting woodsmoke aroma to spiced paneer tikka, whole roast chicken, and garlic kulchas.',
      image: '/images/food/tandoori-veg-platter.webp',
      badge: 'Woodsmoke Infused',
      highlights: ['Tandoori Vegetable Platter', 'Garlic Lemon Herb Roast Chicken', 'Pudina Lacha Paratha & Butter Naan']
    },
    {
      roman: 'III',
      title: 'Indo-Chinese & Wok',
      subtitle: 'Sichuan Heat, Crisp Tosses & Steaming Broths',
      desc: 'High-flame wok cooking balancing crisp textures with fresh ginger, scallions, and dark soy glazes suited to Indian palates.',
      image: '/images/food/shanghai-chilli-paneer.webp',
      badge: 'Crisp & Spiced',
      highlights: ['Shanghai Crispy Chilli Paneer', 'Handmade Wonton Broth', 'Golden Vegetable Spring Rolls']
    },
    {
      roman: 'IV',
      title: 'Satvik & Jain Care',
      subtitle: 'Dietary Respect for Devotees & Pilgrims',
      desc: 'Just 1 km from Gorakhnath Mandir, our kitchen maintains separate utensil protocols for devotees requesting pure vegetarian food with no onion and no garlic.',
      image: '/images/food/sharda-dinings-food-spread-clean.webp',
      badge: 'Mandir Pilgrim Care',
      highlights: ['Dedicated No-Onion No-Garlic gravies', 'Separate cookware & tawa surfaces', 'Fresh toddler-friendly mild bowls']
    }
  ];

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (!reservation.name || !reservation.phone) return;

    const message = `Hello Sharda Dinings, please confirm table reservation:\n\nGuest: ${reservation.name}\nPhone: ${reservation.phone}\nDate: ${reservation.date || 'Flexible'} at ${reservation.time}\nGuests: ${reservation.guests}\nSeating: ${reservation.seating}\nNotes: ${reservation.notes || 'None'}`;
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(message)}`;
    
    setFormSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Ambiente & Mikuni Influence
          Full-bleed dusk dining photography with layered typography
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#1C1617] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0 image-zoom-container">
          <img
            src="/images/restaurant/sharda-dining-hall.webp"
            alt="Sharda Dinings main dining hall"
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1C1617]/40 to-[#1C1617]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="02" total="07" label="RESTAURANT & GASTRONOMY" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            The Culinary <span className="text-[#D4AF37] italic font-normal">Sanctum</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#EFE8DC]/80 font-light leading-relaxed">
            Gorakhpur’s destination for slow-cooked Awadhi curries, live charcoal tandoor platters, 
            and private booth dining just minutes from Gorakhnath Temple.
          </p>

          <GildedDivider className="my-4" />

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-xs font-mono text-[#D4AF37]">
            <span>11:00 AM – 11:00 PM Daily</span>
            <span>•</span>
            <span>North Indian & Chinese</span>
            <span>•</span>
            <span>Separate Veg & Jain Kitchen</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#reservation-suite"
              className="px-7 py-3 bg-[#B94E35] hover:bg-[#9E3F28] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-full shadow-lg shadow-[#B94E35]/30 transition-all hover:scale-105"
            >
              Reserve a Table
            </a>
            <Link
              to="/menu"
              className="px-7 py-3 border border-[#D4AF37] hover:bg-[#D4AF37]/15 text-[#D4AF37] text-xs uppercase tracking-wider font-semibold rounded-full transition-all"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: DINING EXPERIENCE (Côte & Cendre Editorial Stagger)
          Warm Cream & Rich Sand with Asymmetric Photo Flow (No repetitive cards)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#EFE8DC]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#B94E35] font-mono font-bold block">
              Architectural Comfort
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
              Crafted for Pacing, Family & Rest
            </h2>
            <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
              From intimate couples to multi-generational family groups, our dining bays prioritize aisle privacy and acoustic calm.
            </p>
          </div>

          {/* 3-Tier Staggered Visual Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: Arch-topped velvet booth frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-t-[120px] rounded-b-2xl border border-[#D4AF37]/40 shadow-xl bg-[#1C1617] image-zoom-container">
                <img
                  src="/images/restaurant/sharda-dining-booth.webp"
                  alt="Teal velvet and teak family booths at Sharda Dinings"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617] via-transparent to-transparent opacity-75"></div>
                <div className="absolute bottom-5 left-5 right-5 text-[#FAF7F2]">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">Booth Comfort</span>
                  <p className="font-serif text-lg font-bold">Deep Velvet & Teak Dining Booths</p>
                  <p className="text-xs text-[#EFE8DC]/80 mt-0.5">Spacious seating with privacy for family conversations.</p>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Editorial Narrative Strip (NO BOX CARDS) */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">
              
              <div className="border-l-2 border-[#B94E35] pl-5 space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#1C1617]">
                  Toddler Care & Elder Ease
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                  Equipped with high chairs for young children, wheelchair ground access, and 
                  gentle no-spice broths suited for elderly family members.
                </p>
              </div>

              <div className="border-l-2 border-[#D4AF37] pl-5 space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#1C1617]">
                  The Buddha Sanctuary Alcove
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                  Carved fluted marble relief walls provide acoustic softening, creating a tranquil 
                  setting after morning Darshan at Gorakhnath Mandir.
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-6 text-xs font-mono text-[#8C6D37]">
                <span>High Chairs Available</span>
                <span>•</span>
                <span>100% Non-Alcoholic</span>
                <span>•</span>
                <span>Wheelchair Friendly</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: FOUR HERITAGE TRADITIONS (Mikuni Tabbed Showcase)
          Deep Slate with Tabbed Roman Numerals & Circular Dish Cutout
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1C1617] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-[#D4AF37] mb-1">
                <SpiceStar className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase tracking-widest font-mono font-semibold">Culinary Lineage</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#FAF7F2]">
                Four Cooking <span className="text-[#D4AF37] italic font-normal">Traditions</span>
              </h2>
            </div>
            
            {/* Roman Numerals Navigation */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0">
              {traditions.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTradition(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 border ${
                    activeTradition === idx
                      ? 'bg-[#D4AF37] text-[#1C1617] border-[#D4AF37] font-bold shadow-md'
                      : 'border-white/20 text-white/70 hover:border-white/40'
                  }`}
                >
                  <span className="font-serif text-sm font-bold">{t.roman}.</span>
                  <span>{t.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Tradition: Sculptural Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#D4AF37]">
                <span>Tradition {traditions[activeTradition].roman}</span>
                <span>•</span>
                <span>{traditions[activeTradition].badge}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                {traditions[activeTradition].title}
              </h3>
              <p className="font-serif italic text-[#D4AF37] text-base">
                {traditions[activeTradition].subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed font-light">
                {traditions[activeTradition].desc}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono font-bold">Featured Dishes</p>
                {traditions[activeTradition].highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-[#FAF7F2]/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 cols: Dish Focus */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/30 animate-rotate-seal"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-[#110D0E] image-zoom-container">
                  <img
                    key={activeTradition}
                    src={traditions[activeTradition].image}
                    alt={traditions[activeTradition].title}
                    className="w-full h-full object-cover filter contrast-[1.1] animate-fade-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617]/70 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: PRIVATE CELEBRATION WING (Atelier Split-Screen)
          Dark mood left panel vs Warm ivory details right panel
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EFE8DC]">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-[#D4AF37]/30 grid grid-cols-1 lg:grid-cols-12 bg-white">
          
          {/* Left 6 cols: Deep Charcoal */}
          <div className="lg:col-span-6 relative p-8 sm:p-10 bg-[#1C1617] text-[#FAF7F2] flex flex-col justify-between">
            <div className="absolute inset-0 z-0 image-zoom-container">
              <img
                src="/images/restaurant/sharda-dining-hall-wide.webp"
                alt="Sharda Dinings private group wing for celebrations"
                className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1617] via-[#1C1617]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                PRIVATE WING · 15 TO 30 GUESTS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                The Family Celebration Wing
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed font-light">
                When a single table isn't enough, reserve our dedicated private cluster for birthday dinners, 
                anniversary feasts, and pilgrimage tour gatherings.
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-[#FAF7F2]/60">Call directly for reservations:</p>
                <p className="font-mono text-xs font-bold text-[#D4AF37]">{BUSINESS_INFO.phones[0].display}</p>
              </div>
              <button
                onClick={() => onOpenEnquiry('restaurant')}
                className="px-5 py-2 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#1C1617] text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer"
              >
                Enquire Wing
              </button>
            </div>
          </div>

          {/* Right 6 cols: Curated Tasting Inclusions */}
          <div className="lg:col-span-6 p-8 sm:p-10 bg-[#FAF7F2] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1617]">
                What Awaits Your Party
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1C1617]/75">
                <li className="flex items-start space-x-2.5">
                  <span className="font-mono text-xs font-bold text-[#B94E35] shrink-0 mt-0.5">01</span>
                  <span><strong>Custom Pre-Fixed Menus:</strong> Curated selections of starters, rich curries, tandoor breads, and hot desserts served seamlessly.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="font-mono text-xs font-bold text-[#B94E35] shrink-0 mt-0.5">02</span>
                  <span><strong>Dedicated Butler Service:</strong> Assigned dining captains ensuring timely refills and beverage pacing.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="font-mono text-xs font-bold text-[#B94E35] shrink-0 mt-0.5">03</span>
                  <span><strong>Acoustic Privacy:</strong> Cushioned high booth backs soften ambient sound so family celebrations remain intimate.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#EFE8DC] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/food/open-stuffed-mushroom.webp"
                  alt="Stuffed mushrooms appetiser"
                  className="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]"
                />
                <span className="text-xs font-serif font-bold text-[#1C1617]">Herb Stuffed Mushrooms</span>
              </div>
              <Link to="/menu" className="text-xs font-mono font-bold text-[#B94E35] hover:underline">
                View Appetisers →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: RESERVATION SUITE (Minimal Terracotta Panel)
          Direct WhatsApp Table Booking Form
      ───────────────────────────────────────────────────────────── */}
      <section id="reservation-suite" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#B94E35] text-[#FAF7F2]">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FAF7F2]/80 font-bold block">
              Direct Desk Reservation
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal">
              Reserve Your Table at Sharda Dinings
            </h2>
            <p className="text-xs text-[#FAF7F2]/80 max-w-md mx-auto">
              Skip peak-evening waits. Reserve your table preferences directly with our hospitality host.
            </p>
          </div>

          <div className="bg-[#1C1617] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-xl text-[#FAF7F2]">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="font-serif text-xl font-bold">Reservation Dispatched</h3>
                <p className="text-xs text-[#FAF7F2]/70 max-w-sm mx-auto">
                  Your table request has opened on WhatsApp. Our host will confirm table allocation shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2 bg-[#FAF7F2] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Srivastava"
                      value={reservation.name}
                      onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
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
                      placeholder="e.g. +91 98765 43210"
                      value={reservation.phone}
                      onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Reservation Date
                    </label>
                    <input
                      type="date"
                      value={reservation.date}
                      onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Party Size
                    </label>
                    <select
                      value={reservation.guests}
                      onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#2A2022] border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="2 Guests">2 Guests (Couple)</option>
                      <option value="4 Guests">4 Guests (Family)</option>
                      <option value="6 Guests">6 Guests (Large Table)</option>
                      <option value="8–12 Guests">8–12 Guests (Group Cluster)</option>
                      <option value="15–30 Guests">15–30 Guests (Private Wing)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                    Special Notes (Toddler high chair, Jain meal, anniversary)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. High chair required, mild spice preferred"
                    value={reservation.notes}
                    onChange={(e) => setReservation({ ...reservation, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-[#FAF7F2]/60">
                    Instant confirmation via WhatsApp.
                  </span>
                  <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <a
                      href={`tel:${BUSINESS_INFO.phones[0].number}`}
                      className="px-4 py-2.5 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Host</span>
                    </a>
                    <button
                      type="submit"
                      className="flex-1 sm:flex-none px-6 py-2.5 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
                    >
                      Book via WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
