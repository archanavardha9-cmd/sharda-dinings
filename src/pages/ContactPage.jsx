import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, CheckCircle2, Navigation, Building2, Sparkles, Utensils, ShieldCheck, Compass, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { apiClient } from '../services/apiClient';
import { GildedDivider, NumberedPill } from '../components/DecorativeGraphics';
import {
  KineticTitle,
  FloatingSpiceCanvas,
  ScrollPop,
  ScrollSlide,
  ScrollZoom,
  ScrollRotate,
  FloatingCard,
  StaggerGrid,
  AnimatedCounter,
  SectionBackground
} from '../components/MotionExperience';

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Sharda+Dinings+Gorakhpur";

export default function ContactPage({ onOpenEnquiry, onOpenVerification }) {
  const [department, setDepartment] = useState('Restaurant Table');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `Hello Sharda Dinings (${department} Desk), I have an enquiry:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'None'}\nDepartment: ${department}\nMessage: ${formData.message || 'Please connect regarding services.'}`;
    const targetPhone = department.includes('Banquet') ? BUSINESS_INFO.phones[1].number : BUSINESS_INFO.whatsapp.number;
    const whatsappUrl = `https://wa.me/${targetPhone.replace('+', '')}?text=${encodeURIComponent(message)}`;

    try {
      await apiClient.submitContactEnquiry({
        department,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message || 'Please connect regarding services.',
      });
    } catch {
      // Preserve WhatsApp handoff even when backend API is offline
    }

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO & CONCIERGE MATRIX (Deep Dusty Teal & Charcoal)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#14343F] via-[#0E262E] to-[#07161B] text-[#FAF7F2] border-b-2 border-[#D4AF37]/30 overflow-hidden">
        <FloatingSpiceCanvas theme="culinary" density="sparse" />

        <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-6">
          <ScrollSlide direction="down" distance={30}>
            <div className="flex items-center justify-center space-x-2">
              <NumberedPill current="07" total="07" label="CONCIERGE & ACCESS" />
            </div>
          </ScrollSlide>

          <KineticTitle as="h1" className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Concierge & Access
          </KineticTitle>
          <ScrollSlide direction="up" distance={25} delay={0.15}>
            <p className="font-serif italic text-sm sm:text-base text-[#FDE8E1]/85 font-light max-w-xl mx-auto">
              Direct department channels · Mandir proximity · Verified physical location
            </p>
          </ScrollSlide>

          <GildedDivider className="my-3" />

          {/* 3 Department Desks Strip with Stagger Pop Entrance */}
          <StaggerGrid stagger={0.12} animation="pop" className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 text-left">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/15 hover:border-[#F4A261] transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F4A261] font-bold block bg-white/10 px-2.5 py-0.5 rounded-full w-max">
                  Desk 01 · All-Day Dining
                </span>
                <h3 className="font-serif text-lg font-bold text-[#FAF7F2] mt-2">
                  Dining, Cafe & Takeaway
                </h3>
                <p className="text-[11px] text-[#FAF7F2]/75 mt-1 leading-relaxed font-light">
                  Table bookings, booth requests, takeaway boxes, and Olive Cafe brews.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10">
                <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="font-mono text-xs font-bold text-[#A8D5BA] hover:text-white hover:underline block">
                  {BUSINESS_INFO.phones[0].display}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/15 hover:border-[#F4A261] transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F4A261] font-bold block bg-white/10 px-2.5 py-0.5 rounded-full w-max">
                  Desk 02 · Events
                </span>
                <h3 className="font-serif text-lg font-bold text-[#FAF7F2] mt-2">
                  Banquets & Celebrations
                </h3>
                <p className="text-[11px] text-[#FAF7F2]/75 mt-1 leading-relaxed font-light">
                  Wedding receptions, sagai, sangeet rituals, and custom banquet thalis.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10">
                <a href={`tel:${BUSINESS_INFO.phones[1].number}`} className="font-mono text-xs font-bold text-[#A8D5BA] hover:text-white hover:underline block">
                  {BUSINESS_INFO.phones[1].display}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/15 hover:border-[#F4A261] transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F4A261] font-bold block bg-white/10 px-2.5 py-0.5 rounded-full w-max">
                  Desk 03 · Accommodation
                </span>
                <h3 className="font-serif text-lg font-bold text-[#FAF7F2] mt-2">
                  Hotel Front Desk
                </h3>
                <p className="text-[11px] text-[#FAF7F2]/75 mt-1 leading-relaxed font-light">
                  11 AC rooms, direct check-in tariffs, and family wedding room blocks.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10">
                <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="font-mono text-xs font-bold text-[#A8D5BA] hover:text-white hover:underline block">
                  {BUSINESS_INFO.phones[0].display}
                </a>
              </div>
            </div>
          </StaggerGrid>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: LANDMARK & DIRECTIONS CANVAS (Warm Peach Sand & Terracotta)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF0E6] via-[#FDE8E1] to-[#FBE8E2] border-b-2 border-[#C84B31]/20 relative overflow-hidden">
        <SectionBackground theme="contact-location" />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <ScrollSlide direction="down" distance={40}>
              <div className="flex items-center justify-center space-x-2 text-[#C84B31] mb-1">
                <Compass className="w-4 h-4 animate-badge-levitate" />
                <span className="text-[11px] uppercase tracking-widest font-mono font-bold">
                  Physical Location & Wayfinding
                </span>
              </div>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={50} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Finding Sharda Dinings in Gorakhpur
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Centrally situated along NH 29 Sonauli Road, just 5–10 minutes walk from Gorakhnath Mandir.
              </p>
            </ScrollSlide>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 6 cols: Facade Photo & Wayfinding Specs */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/35 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <ScrollRotate rotateFrom={-4} duration={0.9}>
                  <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-[#C84B31]/30 h-64 group">
                    <img
                      src="/images/home/sharda-dinings-exterior-night.webp"
                      alt="Sharda Dinings front facade at night"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#1C1617]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-[#FAF7F2] font-semibold border border-white/20">
                      Opposite Kust Seva Ashram
                    </div>
                  </div>
                </ScrollRotate>

                <div className="flex items-start space-x-3 pt-2">
                  <MapPin className="w-5 h-5 text-[#C84B31] shrink-0 mt-0.5 animate-badge-levitate" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1C1617]">Physical Address</h3>
                    <p className="text-xs text-[#1C1617]/75 leading-relaxed mt-0.5 font-light">
                      {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.city} — {BUSINESS_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Animated Transit Markers */}
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#EFE8DC] text-center">
                  <div className="p-3 rounded-xl bg-[#FAF0E6] border border-[#EFE8DC]">
                    <span className="text-[10px] font-mono text-[#C84B31] font-bold block">Mandir</span>
                    <span className="font-serif font-bold text-base text-[#1C1617]">~<AnimatedCounter end={1} suffix=" km" /></span>
                    <span className="text-[10px] text-[#1C1617]/60 block font-light">5–10 min walk</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF0E6] border border-[#EFE8DC]">
                    <span className="text-[10px] font-mono text-[#C84B31] font-bold block">Railway</span>
                    <span className="font-serif font-bold text-base text-[#1C1617]">~<AnimatedCounter end={3} suffix=".5 km" /></span>
                    <span className="text-[10px] text-[#1C1617]/60 block font-light">10–15 min</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF0E6] border border-[#EFE8DC]">
                    <span className="text-[10px] font-mono text-[#C84B31] font-bold block">Airport</span>
                    <span className="font-serif font-bold text-base text-[#1C1617]">~<AnimatedCounter end={12} suffix=" km" /></span>
                    <span className="text-[10px] text-[#1C1617]/60 block font-light">25–30 min</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#EFE8DC]">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#C84B31] hover:bg-[#b33e26] text-white text-xs font-mono uppercase tracking-wider font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[#C84B31]/30 cursor-pointer w-full sm:w-auto text-center"
                >
                  <Navigation className="w-4 h-4 shrink-0" />
                  <span>Open in Google Maps</span>
                </a>
                <span className="text-xs text-[#1C1617]/70 font-mono flex items-center justify-center sm:justify-end gap-1.5 shrink-0 py-1 sm:py-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Parking on-site
                </span>
              </div>
            </div>

            {/* Right 6 cols: Google Map Embed Frame with Coordinate Ribbon & Full Height Map */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#D4AF37]/35 shadow-xl flex flex-col justify-between space-y-3">
              {/* Top coordinates header bar */}
              <div className="flex items-center justify-between px-1 text-xs font-mono">
                <div className="flex items-center space-x-2 text-[#1C1617]/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="font-bold">Sharda Dinings</span>
                  <span className="text-[#1C1617]/40">·</span>
                  <span className="text-[11px] text-[#C84B31]">26.7953° N, 83.3599° E</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider hidden sm:inline">
                  Interactive Map
                </span>
              </div>

              {/* Map Embed Frame filling container height with verified location destination */}
              <ScrollZoom scaleFrom={0.92} duration={0.9} className="w-full flex-1 min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 relative group">
                <iframe
                  title="Sharda Dinings Exact Location Map"
                  src="https://maps.google.com/maps?q=Sharda+Dinings+Gorakhpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[380px] sm:min-h-[420px] border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </ScrollZoom>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: MANAGEMENT MESSAGE SUITE (Rich Terracotta & Coral)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#C84B31] via-[#B94E35] to-[#963822] text-[#FAF7F2] relative overflow-hidden">
        <SectionBackground theme="contact-message" />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          
          <div className="text-center space-y-2">
            <ScrollSlide direction="down" distance={30}>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#FDE8E1] font-bold block">
                Direct Inquiries
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal">
                Send a Note to Management
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={30} delay={0.2}>
              <p className="text-xs text-[#FDE8E1]/85 max-w-md mx-auto font-light">
                Whether you are organizing a family feast, inquiring about banquets, or reserving rooms, our team will reply swiftly.
              </p>
            </ScrollSlide>
          </div>

          <ScrollPop delay={0.25}>
            <div className="bg-[#1C1617] rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/35 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto animate-bounce-gentle" />
                  <h3 className="font-serif text-xl font-bold">Message Dispatched</h3>
                  <p className="text-xs text-[#FAF7F2]/75 max-w-sm mx-auto font-light">
                    Your message has opened on WhatsApp with the {department} desk.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#FAF7F2] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer hover:bg-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1.5 font-bold">
                        Department
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#2A2022] border-2 border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="Restaurant Table">Restaurant Dining & Booths</option>
                        <option value="Olive Cafe">Olive Cafe & Brews</option>
                        <option value="Banquet Celebration">Banquets & Celebrations</option>
                        <option value="Hotel Reservation">Hotel Sharda Dinings Room Stays</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1.5 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 87268 27777"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1.5 font-bold">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. guest@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1.5 font-bold">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your requirements, dates, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[11px] text-[#FAF7F2]/70 flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#D4AF37]" />
                      <span>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#D4AF37] hover:underline font-bold">{BUSINESS_INFO.email}</a></span>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#F4A261] hover:brightness-110 text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollPop>

        </div>
      </section>

    </div>
  );
}