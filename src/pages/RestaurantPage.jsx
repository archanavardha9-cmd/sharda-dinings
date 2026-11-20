import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Users, Flame, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { WheatFlourish, SpiceStar, ArchEmblem, CutleryCrest } from '../components/DecorativeGraphics';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function RestaurantPage({ onOpenEnquiry, onOpenVerification }) {
  const [reservationForm, setReservationForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '20:00',
    guests: '4',
    zone: 'Main Dining Hall',
    specialReq: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#241C1A] overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: RESTAURANT HERO — Integrated Editorial & Warm Palette
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#241C1A] text-[#FFF9F0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/restaurant/ambience-evening.webp"
            alt="Sharda Dinings Restaurant evening atmosphere"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241C1A] via-[#241C1A]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#B94E35]/80 border border-[#D7A84B] text-[#FFF9F0] text-xs font-bold tracking-widest uppercase shadow-md">
            <CutleryCrest className="w-4 h-4 text-[#D7A84B]" />
            <span>Family Dining & Clay-Oven Tandoor</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-brand font-black tracking-tight leading-none text-[#FFF9F0]">
            THE DINING
            <span className="block font-display italic font-normal text-[#D7A84B] mt-1">
              Sanctum
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#F3E8D7] text-base sm:text-lg font-light leading-relaxed">
            Authentic Awadhi spices, sizzling charcoal tandoor platters, velvety makhani curries, and gracious Gorakhpur family service.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('table-enquiry-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-[#B94E35] hover:bg-[#963822] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#B94E35]/30 hover:scale-105"
            >
              Reserve a Table
            </button>
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-full bg-[#FFF9F0] hover:bg-[#F3E8D7] text-[#241C1A] font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center space-x-2 hover:scale-105"
            >
              <span>Explore Menu (40+ Dishes)</span>
              <ArrowRight className="w-4 h-4 text-[#B94E35]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: DINING EXPERIENCE — Cinematic Visual Sequence (No Split Box!)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F3E8D7]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B94E35] font-bold">Unrushed Hospitality</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#241C1A]">The Art of Family Dining</h2>
            <p className="text-xs sm:text-sm text-[#79533D]">Spacious booth seating, warm golden chandeliers, and thoughtful care for young and old alike.</p>
          </div>

          {/* Cinematic 3-Image Sequence of Varied Proportions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 rounded-3xl overflow-hidden border-2 border-[#E8B9A4] shadow-xl h-[420px] relative group">
              <img
                src="/images/restaurant/main-dining-hall.webp"
                alt="Main Dining Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C1A]/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D7A84B] font-bold">Atmosphere</span>
                  <h4 className="text-xl font-serif font-bold">Central Dining Hall</h4>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 rounded-3xl overflow-hidden border-2 border-[#E8B9A4] shadow-xl h-[480px] relative group">
              <img
                src="/images/restaurant/service-family-hospitality.webp"
                alt="Family Dining Care"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C1A]/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Family Care</span>
                  <h4 className="text-2xl font-serif font-bold">Baby High Chairs & Stroller Support</h4>
                  <p className="text-xs text-[#FFF9F0]/80 mt-1">Thoughtful assistance for families dining with young toddlers.</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 rounded-3xl overflow-hidden border-2 border-[#E8B9A4] shadow-xl h-[420px] relative group">
              <img
                src="/images/restaurant/table-setting-elegance.webp"
                alt="Elegant Table Settings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C1A]/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D7A84B] font-bold">Fine Details</span>
                  <h4 className="text-lg font-serif font-bold">Artisanal Tableware</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: SIGNATURE CUISINE — Varied Proportions & Expressive Type
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8B9A4] pb-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B94E35] font-bold">Flavour Mastery</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#241C1A]">Four Signature Traditions</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#79533D] max-w-md">Charcoal tandoor tikkas, slow-dum Awadhi biryanis, royal makhani curries & Indo-Chinese wok specialities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#FFF9F0] border-2 border-[#E8B9A4] space-y-4 shadow-sm hover:border-[#B94E35] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#B94E35]/10 flex items-center justify-center text-[#B94E35]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#241C1A]">Live Clay Tandoor</h3>
              <p className="text-xs text-[#79533D] leading-relaxed">
                400°C charcoal heat firing Paneer Tikka, Afghani Murgh, Malai Tikka, and crisp butter naans.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFF9F0] border-2 border-[#E8B9A4] space-y-4 shadow-sm hover:border-[#B94E35] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#B94E35]/10 flex items-center justify-center text-[#B94E35]">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#241C1A]">North Indian Handis</h3>
              <p className="text-xs text-[#79533D] leading-relaxed">
                Overnight-simmered Dal Makhani, Paneer Lababdar, and classic Butter Chicken with clotted cream.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFF9F0] border-2 border-[#E8B9A4] space-y-4 shadow-sm hover:border-[#B94E35] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#D7A84B]/20 flex items-center justify-center text-[#B88528]">
                <SpiceStar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#241C1A]">Awadhi Dum Biryani</h3>
              <p className="text-xs text-[#79533D] leading-relaxed">
                Aged basmati rice sealed in earthen handis with saffron milk, whole cardamoms, and tender meats.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFF9F0] border-2 border-[#E8B9A4] space-y-4 shadow-sm hover:border-[#B94E35] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#65765A]/15 flex items-center justify-center text-[#65765A]">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#241C1A]">Indo-Chinese Wok</h3>
              <p className="text-xs text-[#79533D] leading-relaxed">
                High-heat tossed Chilli Paneer, Schezwan Fried Rice, Hakka Noodles, and classic Chicken Lollipop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: RESTAURANT AMBIENCE — Private Dining Room Feature
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#241C1A] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-[#B94E35] shadow-2xl h-[460px]">
            <img
              src="/images/restaurant/private-dining-lounge.webp"
              alt="Private Dining Room"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D7A84B] font-bold">
              <Users className="w-4 h-4" />
              <span>Exclusive Seclusion</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Private Dining Lounge: 15 to 30 Guests
            </h2>

            <p className="text-sm sm:text-base text-[#E8B9A4] font-light leading-relaxed">
              When privacy and tailored hospitality are desired, our dedicated Private Dining Room (PDR) offers an intimate sanctuary. Ideal for family celebrations, roka ceremonies, business leadership luncheons, and celebratory milestone dinners.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#FFF9F0]/85">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#D7A84B] shrink-0 mt-0.5" />
                <span>Dedicated attendant and waitstaff assigned for the duration of your event.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#D7A84B] shrink-0 mt-0.5" />
                <span>Customised set menus tailored to Pure Veg, Jain, or Non-Veg dietary requirements.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry('restaurant')}
                className="px-8 py-3.5 rounded-full bg-[#B94E35] hover:bg-[#963822] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
              >
                Enquire for Private Lounge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TABLE ENQUIRY — Distinctive Coloured Background
      ───────────────────────────────────────────────────────────── */}
      <section id="table-enquiry-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#B94E35] text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D7A84B] font-bold">Reserve in Advance</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">Book Your Table</h2>
            <p className="text-xs sm:text-sm text-[#FFF9F0]/80">Guaranteed table hold without waiting during dinner hours and weekends.</p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FFF9F0] text-[#241C1A] border-4 border-[#D7A84B] shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#241C1A]">Table Request Logged</h3>
                <p className="text-xs sm:text-sm text-[#79533D] max-w-md mx-auto">
                  Thank you, <strong className="text-[#241C1A]">{reservationForm.name}</strong>. Our front desk has reserved your request for {reservationForm.guests} guests on {reservationForm.date}. We will connect shortly to confirm.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-[#B94E35] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singh"
                      value={reservationForm.name}
                      onChange={e => setReservationForm({ ...reservationForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={reservationForm.phone}
                      onChange={e => setReservationForm({ ...reservationForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Date *</label>
                    <input
                      type="date"
                      required
                      value={reservationForm.date}
                      onChange={e => setReservationForm({ ...reservationForm, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Time Slot</label>
                    <select
                      value={reservationForm.time}
                      onChange={e => setReservationForm({ ...reservationForm, time: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    >
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:30">01:30 PM (Lunch)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:00">08:00 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Guests</label>
                    <select
                      value={reservationForm.guests}
                      onChange={e => setReservationForm({ ...reservationForm, guests: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    >
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="15-30">15–30 Guests (Private Lounge)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#B94E35] hover:bg-[#963822] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
                  >
                    Confirm Table Reservation Request
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
