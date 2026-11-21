import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, CheckCircle2, Wifi, Zap, ShowerHead, Tv, Car, Clock, Phone, MessageSquare, ExternalLink, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, SpiceStar } from '../components/DecorativeGraphics';

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
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Calm Linen Boutique Atmosphere
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#1C1617] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0 image-zoom-container">
          <img
            src="/images/hotel-rooms/hotel-sharda-inn-room-103.webp"
            alt="Deluxe room at Hotel Sharda Dinings Gorakhpur"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1C1617]/40 to-[#1C1617]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="06" total="07" label="HOTEL & BOUTIQUE RESIDENCES" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Hotel & <span className="text-[#D4AF37] italic font-normal">Boutique Stays</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#EFE8DC]/85 font-light leading-relaxed">
            11 air-conditioned rooms on Sonauli Road. Enjoy modern en-suite rainfall showers, 
            100% generator power backup, elevator access, and direct room service from Sharda Dinings.
          </p>

          <GildedDivider className="my-4" />

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-xs font-mono text-[#D4AF37]">
            <span>11 AC Rooms</span>
            <span>•</span>
            <span>Check-in 12 PM / Check-out 11 AM</span>
            <span>•</span>
            <span>~1 km from Gorakhnath Mandir</span>
            <span>•</span>
            <span>Direct Rates: ₹1,500 – ₹3,000+</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#hotel-booking"
              className="px-7 py-3 bg-[#B94E35] hover:bg-[#9E3F28] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-full shadow-lg shadow-[#B94E35]/30 transition-all hover:scale-105"
            >
              Direct Room Booking
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="px-7 py-3 border border-[#D4AF37] hover:bg-[#D4AF37]/15 text-[#D4AF37] text-xs uppercase tracking-wider font-semibold rounded-full transition-all"
            >
              Call Front Desk: {BUSINESS_INFO.phones[0].display}
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: ROOM PORTFOLIO (Dual Big Showcase)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#EFE8DC]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#B94E35] font-mono font-bold block">
              Room Categories
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
              Tranquil Spaces Tailored for Rest
            </h2>
            <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
              Equipped with split air-conditioning, crisp linens, and individual geyser bathrooms.
            </p>
          </div>

          {/* Rooms List */}
          <div className="space-y-10">
            {rooms.map((room, idx) => (
              <div
                key={room.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#EFE8DC] shadow-sm hover:shadow-md transition-all"
              >
                {/* Image side (6 cols) */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden shadow border border-[#D4AF37]/30 image-zoom-container">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-72 sm:h-80 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#1C1617]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-mono text-[#D4AF37] border border-[#D4AF37]/30">
                      {room.bed}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#B94E35] text-white px-2.5 py-1 rounded text-xs font-mono font-bold">
                      {room.tariff}
                    </div>
                  </div>
                </div>

                {/* Content side (6 cols) */}
                <div className="lg:col-span-6 space-y-3 lg:pl-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#B94E35] font-bold">
                    {room.occupancy}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1617]">
                    {room.name}
                  </h3>
                  <p className="font-serif italic text-xs text-[#8C6D37]">
                    {room.subtitle}
                  </p>
                  <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
                    {room.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#EFE8DC]">
                    {room.amenities.map((am, ai) => (
                      <div key={ai} className="flex items-center space-x-2 text-xs text-[#1C1617]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
                      className="px-5 py-2 bg-[#1C1617] hover:bg-[#B94E35] text-[#FAF7F2] text-xs font-mono uppercase tracking-widest font-bold rounded-lg transition-all cursor-pointer"
                    >
                      Reserve {room.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bathroom & Room Angle Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#EFE8DC] p-5 shadow-sm space-y-3">
              <div className="h-56 rounded-xl overflow-hidden image-zoom-container">
                <img
                  src="/images/hotel-rooms/hotel-sharda-inn-bathroom.webp"
                  alt="Modern en-suite bathroom with rainfall shower"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1C1617]">Modern En-Suite Sanitary</h4>
              <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
                Individual electric water geysers ensuring 24/7 continuous hot water, rainfall showers, and clean daily bath linens.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#EFE8DC] p-5 shadow-sm space-y-3">
              <div className="h-56 rounded-xl overflow-hidden image-zoom-container">
                <img
                  src="/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-room-second-angle.webp"
                  alt="Workstation and wardrobe in room"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1C1617]">Workstation & Dressing Space</h4>
              <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
                Solid timber study desk, power sockets, luggage storage, and elevator access directly to restaurant and banquets.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: AMENITIES BLUEPRINT (Integrated Grid)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EFE8DC]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#8C6D37] font-mono font-bold block">
              Hospitality Framework
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
              Every Necessity Built-In
            </h2>
            <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
              Essential amenities ensuring comfort for leisure devotees and business travelers alike.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-xl bg-white border border-[#EFE8DC] space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-2 text-[#B94E35]">
                <Zap className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-[#1C1617]">100% Power Generator</h4>
              </div>
              <p className="text-[11px] text-[#1C1617]/70 leading-relaxed">Heavy-duty silent generator ensures uninterrupted cooling and lighting.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EFE8DC] space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-2 text-[#B94E35]">
                <ShowerHead className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-[#1C1617]">24/7 Geyser Water</h4>
              </div>
              <p className="text-[11px] text-[#1C1617]/70 leading-relaxed">Continuous hot water for morning Darshan rituals at Gorakhnath Mandir.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EFE8DC] space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-2 text-[#B94E35]">
                <Wifi className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-[#1C1617]">High-Speed Wi-Fi</h4>
              </div>
              <p className="text-[11px] text-[#1C1617]/70 leading-relaxed">Dedicated wireless coverage across all guest rooms for seamless streaming.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EFE8DC] space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-2 text-[#B94E35]">
                <Clock className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-[#1C1617]">In-Room Dining</h4>
              </div>
              <p className="text-[11px] text-[#1C1617]/70 leading-relaxed">Order hot curries, kulchas, or Olive Cafe coffees served directly to your room.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EFE8DC] space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-2 text-[#B94E35]">
                <Car className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-[#1C1617]">On-Site Parking</h4>
              </div>
              <p className="text-[11px] text-[#1C1617]/70 leading-relaxed">Secure ground parking spaces for personal cars and family tourist vans.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EFE8DC] space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-2 text-[#B94E35]">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-[#1C1617]">Passenger Elevator</h4>
              </div>
              <p className="text-[11px] text-[#1C1617]/70 leading-relaxed">Full lift access connecting all floors for elderly pilgrims and heavy bags.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: DIRECT FRONT DESK RESERVATION
      ───────────────────────────────────────────────────────────── */}
      <section id="hotel-booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1C1617] text-[#FAF7F2]">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold block">
              Direct Front Desk Booking
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal">
              Check Room Availability & Lock Best Rates
            </h2>
            <p className="text-xs text-[#FAF7F2]/80 max-w-md mx-auto">
              Save on third-party OTA commissions. Book directly with our hotel front desk for guaranteed room allocation.
            </p>
          </div>

          <div className="bg-[#2A2022] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="font-serif text-xl font-bold">Room Enquiry Sent to Reception</h3>
                <p className="text-xs text-[#FAF7F2]/70 max-w-sm mx-auto">
                  Your reservation request has opened on WhatsApp with our front desk manager.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-[#FAF7F2] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
                >
                  Book Another Stay
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Mishra"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
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
                      placeholder="e.g. +91 87268 27777"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Room Category
                    </label>
                    <select
                      value={bookingForm.roomType}
                      onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1617] border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Deluxe King Room">Deluxe King Room (~240 sq. ft.)</option>
                      <option value="Executive City View Room">Executive City View Room</option>
                      <option value="Family / Wedding Room Block">Multiple Rooms (Wedding Block)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Number of Rooms
                    </label>
                    <select
                      value={bookingForm.roomsCount}
                      onChange={(e) => setBookingForm({ ...bookingForm, roomsCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1617] border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="1 Room">1 Room</option>
                      <option value="2 Rooms">2 Rooms</option>
                      <option value="3 Rooms">3 Rooms</option>
                      <option value="Full Hotel Block (11 Rooms)">Full Hotel Block (11 Rooms)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Check-In Date (from 12:00 PM)
                    </label>
                    <input
                      type="date"
                      value={bookingForm.checkIn}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Check-Out Date (until 11:00 AM)
                    </label>
                    <input
                      type="date"
                      value={bookingForm.checkOut}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-[#FAF7F2]/60">
                    Front Desk Direct: <span className="text-[#D4AF37] font-mono">{BUSINESS_INFO.phones[0].display}</span>
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2.5 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Room Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#FAF7F2]/60">
            <span>Verified travel listings: MakeMyTrip · Goibibo · Justdial (4.3★)</span>
            <div className="flex items-center space-x-3">
              <a href={BUSINESS_INFO.bookingPlatforms.makemytrip} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline flex items-center space-x-1">
                <span>MakeMyTrip</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a href={BUSINESS_INFO.bookingPlatforms.justdial} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline flex items-center space-x-1">
                <span>Justdial</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
