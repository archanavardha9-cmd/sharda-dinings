import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, CheckCircle2, Wifi, Zap, ShowerHead, Tv, Car, Clock, Phone, MessageSquare, ExternalLink, ShieldCheck, ChevronRight, Award, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, SpiceStar } from '../components/DecorativeGraphics';
import {
  FloatingDishPortal,
  KineticTitle,
  FloatingSpiceCanvas,
  HospitalityFabricSway,
  ScrollPop,
  ScrollSlide,
  ScrollZoom,
  ScrollRotate,
  FloatingCard,
  StaggerGrid,
  AnimatedCounter,
  SectionBackground
} from '../components/MotionExperience';

export default function HotelPage({ onOpenEnquiry, onOpenVerification }) {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Deluxe King Room',
    roomsCount: '1 Room',
    guestsCount: '2 Guests',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe King Room',
      subtitle: 'Spacious Boutique Comfort (~240 sq. ft.)',
      desc: 'Featuring a plush king-size bed, cove ceiling lighting, dedicated workstation, and double-glazed windows overlooking East Rajendra Nagar.',
      tariff: '₹1,500 – ₹2,400 / night',
      image: '/images/hotel-rooms/hotel-sharda-inn-room-103.webp',
      bed: 'King-Size Bed',
      occupancy: '2 Adults + 1 Child',
      amenities: ['Individual Split AC', 'En-suite Rainfall Shower', 'Complimentary High-Speed Wi-Fi', '32" HD LED TV', 'In-Room Dining']
    },
    {
      id: 'executive',
      name: 'Executive City View Room',
      subtitle: 'Tailored for Pilgrims & Business Travellers',
      desc: 'Equipped with comfortable twin single beds, full-length wardrobe, and reading lights. Perfect for devotees visiting Gorakhnath Mandir or corporate delegates.',
      tariff: '₹1,800 – ₹2,800 / night',
      image: '/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-city-view-room.webp',
      bed: 'Twin Single Beds',
      occupancy: '2 Adults',
      amenities: ['Individual Split AC', 'En-suite Geyser Shower', 'Work Desk & Power Points', 'Tea/Coffee Provision', 'Luggage Space']
    }
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone) return;

    const message = `Hello Hotel Sharda Dinings Reception, I would like to check room availability & direct tariff:\n\nGuest: ${bookingForm.name}\nPhone: ${bookingForm.phone}\nRoom Category: ${bookingForm.roomType}\nRooms: ${bookingForm.roomsCount}\nGuests: ${bookingForm.guestsCount}\nCheck-In: ${bookingForm.checkIn || 'Flexible'}\nCheck-Out: ${bookingForm.checkOut || 'Flexible'}\nNotes: ${bookingForm.notes || 'None'}`;
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Deep Midnight Blue & Teal
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#103442] via-[#0C2731] to-[#071920] text-[#FAF7F2] overflow-hidden">
        {/* Subtle Ambient Background with Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/hotel-rooms/hotel-sharda-inn-room-103.webp"
            alt="Deluxe room at Hotel Sharda Dinings Gorakhpur"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.25] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071920] via-[#0C2731]/70 to-[#103442]/50"></div>
          <div className="absolute top-1/4 right-1/3 w-[550px] h-[550px] rounded-full bg-[#A8D5BA]/20 blur-3xl animate-pulse-glow"></div>
        </div>

        {/* Ambient Tranquil Hospitality Linen Wave */}
        <HospitalityFabricSway />

        {/* Floating Room and Key Accents */}
        <div className="hidden xl:block absolute left-10 top-28 z-10 pointer-events-none">
          <FloatingCard type="vertical" intensity={15} duration={5}>
            <FloatingDishPortal
              src="/images/hotel-rooms/hotel-sharda-inn-room-green.webp"
              alt="Boutique Green Suite"
              title="Deluxe Suite"
              subtitle="Spacious 240 sq ft"
              size="sm"
              depth={1}
              rotation={-5}
              glowColor="rgba(168, 213, 186, 0.5)"
            />
          </FloatingCard>
        </div>

        <div className="hidden xl:block absolute right-10 top-24 z-10 pointer-events-none">
          <FloatingCard type="reverse" intensity={14} duration={4.8}>
            <FloatingDishPortal
              src="/images/hotel-rooms/hotel-the-sharda-inn-key.webp"
              alt="Room Key"
              title="Direct Key Access"
              subtitle="11 AC Rooms"
              size="sm"
              depth={2}
              rotation={6}
              glowColor="rgba(244, 162, 97, 0.5)"
            />
          </FloatingCard>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="06" total="07" label="HOTEL & BOUTIQUE RESIDENCES" />
          </div>

          <KineticTitle as="h1" className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Hotel & Boutique Stays
          </KineticTitle>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#EFE8DC]/90 font-light leading-relaxed">
            11 air-conditioned rooms on Sonauli Road. Enjoy modern en-suite rainfall showers, 
            100% generator power backup, elevator access, and direct room service from Sharda Dinings.
          </p>

          <GildedDivider className="my-4" />

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 text-xs font-mono max-w-3xl mx-auto">
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-[#A8D5BA] font-bold text-center">11 AC Rooms</span>
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-white text-center">Check-in 12:00 PM / Check-out 11:00 AM</span>
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-[#F4A261] font-bold text-center">~1 km from Gorakhnath Mandir</span>
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-[#FAF7F2] text-center">Direct Rates: ₹1,500 – ₹2,800</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
            <ScrollPop delay={0.2} className="w-full sm:w-auto">
              <a
                href="#hotel-booking"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center min-h-[46px] px-8 py-3.5 bg-gradient-to-r from-[#E76F51] to-[#C84B31] hover:brightness-110 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#C84B31]/40 transition-all hover:scale-105"
              >
                Direct Room Booking
              </a>
            </ScrollPop>
            <ScrollPop delay={0.3} className="w-full sm:w-auto">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="w-full sm:w-auto text-center inline-flex flex-wrap sm:flex-nowrap items-center justify-center min-h-[46px] px-5 sm:px-7 py-3.5 border-2 border-[#A8D5BA] hover:bg-[#A8D5BA]/20 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full transition-all hover:scale-105 gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8D5BA] shrink-0" />
                <span>Call Front Desk:</span>
                <span className="whitespace-nowrap font-mono text-[#A8D5BA]">{BUSINESS_INFO.phones[0].display}</span>
              </a>
            </ScrollPop>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: ROOM PORTFOLIO (Soft Linen Sand & Teal)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF5EF] via-[#F4EDE2] to-[#EFE7D8] border-b-2 border-[#114B5F]/20 relative overflow-hidden">
        <SectionBackground theme="hotel-rooms" />
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <ScrollSlide direction="down" distance={40}>
              <span className="text-[11px] uppercase tracking-widest text-[#114B5F] font-mono font-bold block">
                Room Categories
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={50} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Tranquil Spaces Tailored for Rest
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Equipped with split air-conditioning, crisp cotton linens, and individual geyser bathrooms.
              </p>
            </ScrollSlide>
          </div>

          {/* Rooms List with Sliding In */}
          <div className="space-y-10">
            {rooms.map((room, idx) => (
              <ScrollSlide key={room.id} direction={idx % 2 === 0 ? "left" : "right"} distance={60}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/30 shadow-xl hover:shadow-2xl transition-all">
                  {/* Image side (6 cols) with Zoom on Hover */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#114B5F]/20 group">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-72 sm:h-84 object-cover filter contrast-[1.08] group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#114B5F]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#A8D5BA] font-bold border border-white/20">
                        {room.bed}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#E76F51] to-[#C84B31] text-white px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold shadow-md">
                        {room.tariff}
                      </div>
                    </div>
                  </div>

                  {/* Content side (6 cols) */}
                  <div className="lg:col-span-6 space-y-4 lg:pl-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C84B31] font-bold bg-[#FDE8E1] px-2.5 py-0.5 rounded">
                      {room.occupancy}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1617]">
                      {room.name}
                    </h3>
                    <p className="font-serif italic text-sm text-[#8C6D37]">
                      {room.subtitle}
                    </p>
                    <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                      {room.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#EFE8DC]">
                      {room.amenities.map((am, ai) => (
                        <div key={ai} className="flex items-center space-x-2.5 text-xs text-[#1C1617]/85">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{am}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setBookingForm({ ...bookingForm, roomType: room.name });
                          const el = document.getElementById('hotel-booking');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-6 py-3 bg-[#114B5F] hover:bg-[#0E3A4A] text-[#FAF7F2] text-xs font-mono uppercase tracking-widest font-bold rounded-full transition-all hover:scale-105 shadow-md cursor-pointer"
                      >
                        Reserve {room.name}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollSlide>
            ))}
          </div>

          {/* Bathroom & Room Angle Split with ScrollRotate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <ScrollRotate rotateFrom={-4} duration={0.9}>
              <div className="rounded-3xl overflow-hidden bg-white border-2 border-[#EFE8DC] p-6 shadow-md space-y-3 group hover:shadow-xl transition-all">
                <div className="h-60 rounded-2xl overflow-hidden">
                  <img
                    src="/images/hotel-rooms/hotel-sharda-inn-bathroom.webp"
                    alt="Modern en-suite bathroom with rainfall shower"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C1617]">Modern En-Suite Sanitary</h4>
                <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                  Individual electric water geysers ensuring 24/7 continuous hot water, rainfall showers, and clean daily bath linens.
                </p>
              </div>
            </ScrollRotate>

            <ScrollRotate rotateFrom={4} duration={0.9}>
              <div className="rounded-3xl overflow-hidden bg-white border-2 border-[#EFE8DC] p-6 shadow-md space-y-3 group hover:shadow-xl transition-all">
                <div className="h-60 rounded-2xl overflow-hidden">
                  <img
                    src="/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-room-second-angle.webp"
                    alt="Workstation and wardrobe in room"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C1617]">Workstation & Dressing Space</h4>
                <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                  Solid timber study desk, power sockets, luggage storage, and elevator access directly to restaurant and banquets.
                </p>
              </div>
            </ScrollRotate>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: AMENITIES FRAMEWORK (Soft Lavender & Champagne)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F0FA] via-[#ECE5F5] to-[#E5DCF0] relative overflow-hidden">
        <SectionBackground theme="hotel-amenities" />
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <ScrollSlide direction="down" distance={40}>
              <span className="text-[11px] uppercase tracking-widest text-[#114B5F] font-mono font-bold block">
                Hospitality Framework
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={50} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Every Necessity Built-In
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Essential amenities ensuring comfort for leisure devotees and business travelers alike.
              </p>
            </ScrollSlide>
          </div>

          <StaggerGrid stagger={0.08} animation="pop" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: '100% Power Generator', desc: 'Heavy-duty silent generator running round the clock' },
              { icon: ShowerHead, title: 'Continuous Hot Water', desc: 'Electric geysers and rainfall shower heads' },
              { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Complimentary high-bandwidth connection throughout' },
              { icon: Tv, title: '32" HD LED TV', desc: 'News, entertainment and devotional channels' },
              { icon: Car, title: 'Secure On-Site Parking', desc: 'Gated parking with night security attendant' },
              { icon: Clock, title: '24-Hour Front Desk', desc: 'Late night arrival assistance and luggage desk' },
              { icon: BedDouble, title: 'Daily Housekeeping', desc: 'Fresh laundered cotton linens and sanitary care' },
              { icon: Phone, title: 'Direct In-Room Dining', desc: 'Room service meals from Sharda Dinings kitchen' },
            ].map((am, idx) => {
              const Icon = am.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-white border-2 border-white/60 space-y-2 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#114B5F] animate-badge-levitate" />
                  <h4 className="font-serif font-bold text-sm text-[#1C1617]">{am.title}</h4>
                  <p className="text-[11px] text-[#1C1617]/70 leading-relaxed font-light">{am.desc}</p>
                </div>
              );
            })}
          </StaggerGrid>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: DIRECT RESERVATION DESK (Warm Saffron Sand)
      ───────────────────────────────────────────────────────────── */}
      <section id="hotel-booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF0E6] via-[#FDE8E1] to-[#FBE8E2] border-t-2 border-[#114B5F]/20 relative overflow-hidden">
        <SectionBackground theme="hotel-booking" />
        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <ScrollSlide direction="down" distance={30}>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#114B5F] font-bold block">
                Direct Hotel Front Desk
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Check Availability & Tariff
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={30} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Book directly with the front desk for the best tariff guarantee without third-party commission markups.
              </p>
            </ScrollSlide>
          </div>

          <ScrollPop delay={0.25}>
            <form onSubmit={handleBookingSubmit} className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-[#D4AF37]/35 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Primary Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#114B5F] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Contact Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="+91 87268 27777"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#114B5F] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.checkIn}
                    onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#114B5F] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.checkOut}
                    onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#114B5F] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Room Category
                  </label>
                  <select
                    value={bookingForm.roomType}
                    onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#114B5F] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  >
                    <option value="Deluxe King Room">Deluxe King Room</option>
                    <option value="Executive City View Room">Executive City View Room</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Number of Rooms
                  </label>
                  <select
                    value={bookingForm.roomsCount}
                    onChange={(e) => setBookingForm({ ...bookingForm, roomsCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#114B5F] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  >
                    <option value="1 Room">1 Room</option>
                    <option value="2 Rooms">2 Rooms</option>
                    <option value="3+ Rooms">3+ Rooms (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={bookingForm.guestsCount}
                    onChange={(e) => setBookingForm({ ...bookingForm, guestsCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#114B5F] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4+ Guests">4+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-3.5 bg-gradient-to-r from-[#114B5F] to-[#0A2E3B] hover:brightness-110 text-white text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#114B5F]/30 transition-all hover:scale-105 cursor-pointer"
                >
                  Send Booking Inquiry on WhatsApp
                </button>

                <div className="flex items-center space-x-2 text-[11px] text-[#1C1617]/70 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Zero advance deposit needed for confirmation</span>
                </div>
              </div>
            </form>
          </ScrollPop>

        </div>
      </section>

    </div>
  );
}