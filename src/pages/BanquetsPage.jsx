import React, { useState } from 'react';
import { Calendar, Users, Award, Music, CheckCircle2, AlertCircle, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ArchEmblem, SpiceStar } from '../components/DecorativeGraphics';

export default function BanquetsPage({ onOpenEnquiry, onOpenVerification }) {
  const [banquetForm, setBanquetForm] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Reception',
    date: '',
    guests: '100-150 Guests',
    catering: 'Deluxe Multi-Course (Veg & Non-Veg)',
    seating: 'Round Table & Stage Setup',
    specialReq: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const eventTypes = [
    { title: 'Weddings & Receptions', desc: 'Regal floral stage setups, red carpet aisle, and royal feast arrangements for up to 150 guests.' },
    { title: 'Engagements & Ring Ceremonies', desc: 'Picture-perfect celebration layouts with customized ambient lighting and family seating.' },
    { title: 'Pre-Wedding Sangeet & Haldi', desc: 'Vibrant acoustic hall with professional sound system, dance floor space, and live snack counters.' },
    { title: 'Corporate Conclaves & Seminars', desc: 'Theater or U-shape conferencing with audio-visual support and executive business lunches.' }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#241C1A]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: BANQUET HERO — Grand Celebratory Visual Treatment
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#372127] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banquet/grand-banquet-hall.webp"
            alt="Sharda Dinings grand indoor banquet hall"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#372127] via-[#372127]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#B94E35] border border-[#D7A84B] text-white text-xs font-bold tracking-widest uppercase shadow-md">
            <Sparkles className="w-4 h-4 text-[#D7A84B]" />
            <span>Celebrations & Conclaves</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-brand font-black tracking-tight leading-none text-white">
            BANQUETS &
            <span className="block font-display italic font-normal text-[#D7A84B] mt-1">
              Events
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#E8B9A4] text-base sm:text-lg font-light leading-relaxed">
            Indoor air-conditioned banquet hall with customized gourmet catering, approved decorator artistry, and dedicated event coordination.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('banquet-enquiry-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-[#D7A84B] hover:bg-[#C29538] text-[#241C1A] font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              Request Event Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phones[1].number}`}
              className="px-8 py-3.5 rounded-full bg-white text-[#241C1A] hover:bg-[#F3E8D7] font-bold text-xs uppercase tracking-widest transition-all flex items-center space-x-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-[#B94E35]" />
              <span>Call Banquet Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: VENUE SHOWCASE — Varied Image Proportions & Creative Cropping
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F3E8D7]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B94E35] font-bold">Venue Architecture</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#241C1A]">A Grand Setting for Milestones</h2>
            <p className="text-xs sm:text-sm text-[#79533D]">Modern air conditioning, stage lighting, and acoustic walls tailored for celebrations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 rounded-3xl overflow-hidden border-2 border-[#E8B9A4] shadow-xl h-[420px] group">
              <img
                src="/images/banquet/wedding-stage-floral.webp"
                alt="Stage Decor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden border-2 border-[#E8B9A4] shadow-xl h-[200px] group">
                <img
                  src="/images/banquet/banquet-buffet-setup.webp"
                  alt="Banquet Buffet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden border-2 border-[#E8B9A4] shadow-xl h-[200px] group">
                <img
                  src="/images/banquet/round-table-reception.webp"
                  alt="Round Table Seating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: CELEBRATIONS & EVENTS — Editorial Occasions Grid
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="border-b border-[#E8B9A4] pb-4">
            <span className="text-xs uppercase tracking-widest text-[#B94E35] font-bold">Celebratory Moments</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#241C1A] mt-1">Occasions Crafted with Distinction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border-2 border-[#E8B9A4] shadow-sm space-y-3 hover:border-[#B94E35] transition-colors">
                <span className="text-3xl font-serif font-bold text-[#D7A84B]">0{idx + 1}</span>
                <h3 className="text-2xl font-serif font-bold text-[#241C1A]">{event.title}</h3>
                <p className="text-xs sm:text-sm text-[#79533D] leading-relaxed font-light">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: FACILITIES & SERVICES — Oversized Numbers & Graphic Layout
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#241C1A] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <ArchEmblem text="CAPACITIES & METRICS" className="text-[#D7A84B] border-[#D7A84B]" />
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">Verified Venue Specifications</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-3xl bg-[#322624] border border-[#523F3C] space-y-2">
              <span className="text-5xl font-serif font-bold text-[#D7A84B] block">100</span>
              <span className="text-xs uppercase tracking-wider text-white font-bold block">Seated Capacity</span>
              <span className="text-[11px] text-[#E8B9A4]">Formal Round / Theater</span>
            </div>
            <div className="p-6 rounded-3xl bg-[#322624] border border-[#523F3C] space-y-2">
              <span className="text-5xl font-serif font-bold text-[#D7A84B] block">150</span>
              <span className="text-xs uppercase tracking-wider text-white font-bold block">Floating Capacity</span>
              <span className="text-[11px] text-[#E8B9A4]">Cocktail & Reception Flow</span>
            </div>
            <div className="p-6 rounded-3xl bg-[#322624] border border-[#523F3C] space-y-2">
              <span className="text-5xl font-serif font-bold text-white block">100%</span>
              <span className="text-xs uppercase tracking-wider text-white font-bold block">In-House Catering</span>
              <span className="text-[11px] text-[#E8B9A4]">Customised Multi-Course</span>
            </div>
            <div className="p-6 rounded-3xl bg-[#322624] border border-[#523F3C] space-y-2">
              <span className="text-5xl font-serif font-bold text-white block">11 AC</span>
              <span className="text-xs uppercase tracking-wider text-white font-bold block">Event Stays</span>
              <span className="text-[11px] text-[#E8B9A4]">Bridal Suite & Guest Stays</span>
            </div>
          </div>

          {/* Strict Policy Notice */}
          <div className="p-6 rounded-2xl bg-[#B94E35] border border-[#D7A84B] flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-[#D7A84B] shrink-0" />
              <span><strong>Strict Venue Guideline:</strong> Sharda Dinings is a strictly non-alcoholic celebration property. In-house catering and approved decorator panels only.</span>
            </div>
            <button onClick={onOpenVerification} className="underline font-bold shrink-0">Audit Register</button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: EVENT ENQUIRY — Distinctive Warm Colour Background
      ───────────────────────────────────────────────────────────── */}
      <section id="banquet-enquiry-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#D7A84B] text-[#241C1A]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#241C1A] font-bold">Event Planning</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#241C1A]">Check Date Availability & Quote</h2>
            <p className="text-xs sm:text-sm text-[#241C1A]/80">Submit your tentative date and guest requirements for an itemized quotation.</p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#B94E35] shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#241C1A]">Banquet Lead Registered</h3>
                <p className="text-xs sm:text-sm text-[#79533D] max-w-md mx-auto">
                  Thank you, <strong className="text-[#241C1A]">{banquetForm.name}</strong>. Our events manager will review the hall calendar for {banquetForm.date} ({banquetForm.guests}) and connect shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="px-6 py-2 rounded-full bg-[#B94E35] text-white text-xs font-bold uppercase">
                  Edit Requirements
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
                      placeholder="e.g. Ramesh Chandra"
                      value={banquetForm.name}
                      onChange={e => setBanquetForm({ ...banquetForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={banquetForm.phone}
                      onChange={e => setBanquetForm({ ...banquetForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Event Type</label>
                    <select
                      value={banquetForm.eventType}
                      onChange={e => setBanquetForm({ ...banquetForm, eventType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    >
                      <option>Wedding Reception</option>
                      <option>Engagement / Roka</option>
                      <option>Sangeet / Haldi</option>
                      <option>Birthday / Anniversary</option>
                      <option>Corporate Conclave</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={banquetForm.date}
                      onChange={e => setBanquetForm({ ...banquetForm, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Expected Guests</label>
                    <select
                      value={banquetForm.guests}
                      onChange={e => setBanquetForm({ ...banquetForm, guests: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    >
                      <option>30-60 Guests</option>
                      <option>60-100 Guests</option>
                      <option>100-150 Guests (Hall Maximum)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#B94E35] hover:bg-[#963822] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
                  >
                    Submit Banquet Enquiry Request
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
