import React, { useState } from 'react';
import { BedDouble, Bath, Wifi, Tv, Zap, ArrowUpDown, Clock, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ArchEmblem } from '../components/DecorativeGraphics';

export default function HotelPage({ onOpenEnquiry, onOpenVerification }) {
  const [roomEnquiry, setRoomEnquiry] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Deluxe AC King Room',
    guests: '2 Guests',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const amenities = [
    { icon: <Zap className="w-6 h-6 text-[#D7A84B]" />, title: '100% Power Backup', desc: 'Automatic generator backup ensuring 24/7 uninterrupted AC and lighting.' },
    { icon: <ArrowUpDown className="w-6 h-6 text-[#D7A84B]" />, title: 'Elevator / Lift Access', desc: 'Effortless access to all guest floors for luggage and senior citizens.' },
    { icon: <Bath className="w-6 h-6 text-[#D7A84B]" />, title: 'En-Suite Hot Shower', desc: 'Clean tiled attached bathrooms with continuous hot and cold water.' },
    { icon: <Wifi className="w-6 h-6 text-[#D7A84B]" />, title: 'High-Speed Wi-Fi', desc: 'Fast optical fiber wireless internet throughout all rooms and lounge.' },
    { icon: <Tv className="w-6 h-6 text-[#D7A84B]" />, title: 'LED Television', desc: 'Wall-mounted flat screens with satellite news and entertainment.' },
    { icon: <Clock className="w-6 h-6 text-[#D7A84B]" />, title: '24/7 Front Reception', desc: 'Round-the-clock check-in assistance and in-room dining service.' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#241C1A]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HOTEL HERO — Calm, Premium & Welcoming
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#2D2321] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hotel/deluxe-room-king.webp"
            alt="Hotel Sharda Dinings Deluxe Room"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321] via-[#2D2321]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#79533D] border border-[#D7A84B] text-white text-xs font-bold tracking-widest uppercase shadow-md">
            <BedDouble className="w-4 h-4 text-[#D7A84B]" />
            <span>Boutique Accommodation</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-brand font-black tracking-tight leading-none text-white">
            HOTEL &
            <span className="block font-display italic font-normal text-[#D7A84B] mt-1">
              Rooms
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#E8B9A4] text-base sm:text-lg font-light leading-relaxed">
            11 air-conditioned rooms designed for pilgrims visiting Gorakhnath Temple, corporate travellers, and banquet guests.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('room-enquiry-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-[#B94E35] hover:bg-[#963822] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              Enquire Room Availability
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="px-8 py-3.5 rounded-full bg-white text-[#241C1A] hover:bg-[#F3E8D7] font-bold text-xs uppercase tracking-widest transition-all flex items-center space-x-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-[#B94E35]" />
              <span>Call Front Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: HOTEL INTRODUCTION — Typography-Led Storytelling
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F3E8D7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#B94E35] font-bold">Pilgrimage & Rest</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#241C1A] leading-tight">
              A Peaceful Rest on the Gorakhnath Corridor.
            </h2>
            <p className="text-base sm:text-lg text-[#79533D] font-light leading-relaxed">
              Conveniently located along Sonauli Road and Gorakhnath Road, Hotel Sharda Dinings provides a calm retreat. Featuring 11 fully air-conditioned rooms, elevator access, 100% generator backup, and immediate access to the ground floor restaurant and Olive Cafe.
            </p>
          </div>
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#E8B9A4] shadow-2xl h-[360px]">
            <img src="/images/hotel/guest-lounge-reception.webp" alt="Reception & Guest Lounge" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ROOM SHOWCASE — Editorial Image Arrangement
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="border-b border-[#E8B9A4] pb-4">
            <span className="text-xs uppercase tracking-widest text-[#B94E35] font-bold">11 Room Inventory</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#241C1A] mt-1">Available Room Categories</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Deluxe King Room */}
            <div className="rounded-3xl bg-white border-2 border-[#E8B9A4] overflow-hidden shadow-lg flex flex-col group">
              <div className="h-72 overflow-hidden relative">
                <img
                  src="/images/hotel/deluxe-room-king.webp"
                  alt="Deluxe AC King Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#B94E35] text-white text-xs font-bold uppercase">
                  Deluxe King
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#241C1A]">Deluxe Air-Conditioned King Room</h3>
                  <p className="text-xs sm:text-sm text-[#79533D] mt-2 leading-relaxed">
                    King bed with fresh white linens, work desk, wall-mounted LED TV, split AC, and clean en-suite hot shower.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-stone-600 pt-3">
                    <li>• King-Size Bed</li>
                    <li>• Split Air Conditioning</li>
                    <li>• Attached Modern Bath</li>
                    <li>• 2 Adults + 1 Child</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-[#F3E8D7] flex items-center justify-between">
                  <span className="text-xs text-[#B94E35] font-bold">Direct Rate Guarantee</span>
                  <button
                    onClick={() => onOpenEnquiry('hotel')}
                    className="px-5 py-2.5 rounded-full bg-[#B94E35] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>

            {/* Executive Twin Room */}
            <div className="rounded-3xl bg-white border-2 border-[#E8B9A4] overflow-hidden shadow-lg flex flex-col group">
              <div className="h-72 overflow-hidden relative">
                <img
                  src="/images/hotel/executive-room-twin.webp"
                  alt="Executive Twin Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#79533D] text-white text-xs font-bold uppercase">
                  Executive Twin
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#241C1A]">Executive Air-Conditioned Twin Room</h3>
                  <p className="text-xs sm:text-sm text-[#79533D] mt-2 leading-relaxed">
                    Designed for colleagues or pilgrims sharing accommodation. Features twin single beds, wardrobe, and attached bath.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-stone-600 pt-3">
                    <li>• 2 Twin Beds</li>
                    <li>• Split Air Conditioning</li>
                    <li>• Fiber Wi-Fi Access</li>
                    <li>• 2 Adults Occupancy</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-[#F3E8D7] flex items-center justify-between">
                  <span className="text-xs text-[#B94E35] font-bold">Direct Rate Guarantee</span>
                  <button
                    onClick={() => onOpenEnquiry('hotel')}
                    className="px-5 py-2.5 rounded-full bg-[#79533D] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: AMENITIES & FACILITIES — Attractive Visual Arrangement
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#241C1A] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <ArchEmblem text="VERIFIED AMENITIES" className="text-[#D7A84B] border-[#D7A84B]" />
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">Thoughtful Hospitality Amenities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#322624] border border-[#523F3C] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#D7A84B]/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-white">{item.title}</h3>
                <p className="text-xs text-[#E8B9A4] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="rounded-3xl overflow-hidden border border-[#523F3C] h-60">
              <img src="/images/hotel/attached-modern-bathroom.webp" alt="Attached Bathroom" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#523F3C] h-60">
              <img src="/images/hotel/hotel-corridor-lift.webp" alt="Elevator Corridor" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: ROOM ENQUIRY — Warm Palette & Booking Action
      ───────────────────────────────────────────────────────────── */}
      <section id="room-enquiry-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#79533D] text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D7A84B] font-bold">Direct Rates</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">Check Room Availability</h2>
            <p className="text-xs sm:text-sm text-[#FFF9F0]/80">Check-in: 12:00 PM • Check-out: 11:00 AM • Government ID required at registration</p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FFF9F0] text-[#241C1A] border-4 border-[#D7A84B] shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#241C1A]">Room Request Logged</h3>
                <p className="text-xs sm:text-sm text-[#79533D] max-w-md mx-auto">
                  Thank you, <strong className="text-[#241C1A]">{roomEnquiry.name}</strong>. Our front desk manager has noted your enquiry for {roomEnquiry.roomType} from {roomEnquiry.checkIn}. We will connect shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="px-6 py-2 rounded-full bg-[#B94E35] text-white text-xs font-bold uppercase">
                  Edit Dates
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Guest Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Shekhar"
                      value={roomEnquiry.name}
                      onChange={e => setRoomEnquiry({ ...roomEnquiry, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={roomEnquiry.phone}
                      onChange={e => setRoomEnquiry({ ...roomEnquiry, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Check-in *</label>
                    <input
                      type="date"
                      required
                      value={roomEnquiry.checkIn}
                      onChange={e => setRoomEnquiry({ ...roomEnquiry, checkIn: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Check-out *</label>
                    <input
                      type="date"
                      required
                      value={roomEnquiry.checkOut}
                      onChange={e => setRoomEnquiry({ ...roomEnquiry, checkOut: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Room Category</label>
                    <select
                      value={roomEnquiry.roomType}
                      onChange={e => setRoomEnquiry({ ...roomEnquiry, roomType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                    >
                      <option>Deluxe AC King Room</option>
                      <option>Executive AC Twin Room</option>
                      <option>Multiple Rooms (Family / Group)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#B94E35] hover:bg-[#963822] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
                  >
                    Submit Room Stay Enquiry
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
