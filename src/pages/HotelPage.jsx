import React, { useState } from 'react';
import { ArrowRight, Car, Check, CheckCircle2, Clock, ExternalLink, MessageSquare, Phone, ShieldCheck, Tv, Wifi, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EditorialImage, SectionHeader } from '../components/SiteBlocks';
import {
  AnimatedWaveDivider,
  OrbitalRingBackdrop,
  Reveal,
  UnifiedGalleryStream,
} from '../components/MotionBlocks';
import { usePageSeo } from '../utils/seo';

const ROOM_WING_DETAILS = [
  {
    name: BUSINESS_INFO.hotelPolicies.rooms[0].name,
    scale: BUSINESS_INFO.hotelPolicies.rooms[0].size,
    bed: BUSINESS_INFO.hotelPolicies.rooms[0].bed,
    tariff: BUSINESS_INFO.hotelPolicies.rooms[0].tariffNote,
    highlights: BUSINESS_INFO.hotelPolicies.rooms[0].highlights,
    image: '/images/hotel-rooms/hotel-sharda-inn-room-103.webp',
    alt: 'Deluxe Room 103 featuring king bed with olive bed runner and cove ceiling lighting',
    perks: [
      'Climate-controlled split AC & work desk',
      'LED cable TV & complimentary Wi-Fi',
      'En-suite bathroom with rainfall showerhead',
      'Direct room service from Sharda Dinings',
    ],
  },
  {
    name: BUSINESS_INFO.hotelPolicies.rooms[1].name,
    scale: BUSINESS_INFO.hotelPolicies.rooms[1].size,
    bed: BUSINESS_INFO.hotelPolicies.rooms[1].bed,
    tariff: BUSINESS_INFO.hotelPolicies.rooms[1].tariffNote,
    highlights: BUSINESS_INFO.hotelPolicies.rooms[1].highlights,
    image: '/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-room-second-angle.webp',
    alt: 'Super Deluxe guest room angle showing timber furnishings, dressing mirror, and work station',
    perks: [
      'Upgraded corner seating lounge sofa',
      'Full-length wardrobe & dressing table',
      '24/7 hot & cold water geyser + 100% power backup',
      'Priority allocation for wedding families',
    ],
  },
];

const ROOM_STREAM = [
  { src: '/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-city-view-room.webp', label: '240 sq.ft. Deluxe City View Room', shape: 'landscape' },
  { src: '/images/hotel-rooms/hotel-sharda-inn-room-103.webp', label: 'Room 103 · Olive Runner & Lounge', shape: 'portrait' },
  { src: '/images/hotel-rooms/hotel-sharda-inn-room-green.webp', label: 'Calm Green Wing Suite', shape: 'square' },
  { src: '/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-room-second-angle.webp', label: 'Timber Workstation & Wardrobe', shape: 'portrait' },
  { src: '/images/hotel-rooms/hotel-the-sharda-inn-key.webp', label: 'Reception Check-In Key Fob (Room 202)', shape: 'landscape' },
];

export default function HotelPage({ onOpenVerification }) {
  usePageSeo({
    title: 'Hotel Sharda Dinings — Deluxe & Super Deluxe Rooms Near Gorakhnath Mandir',
    description:
      'Stay at Hotel Sharda Dinings (763 A, Sonauli Rd / East Rajendra Nagar, Gorakhpur): ~240 sq.ft. Deluxe & Super Deluxe AC rooms, rainfall showers, free parking.',
    image: '/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-city-view-room.webp',
  });

  const [selectedRoomIdx, setSelectedRoomIdx] = useState(0);
  const currentRoom = ROOM_WING_DETAILS[selectedRoomIdx];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomCategory: 'Deluxe Room (240 sq. ft.)',
    rooms: '1 Room',
    notes: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppUrl = () => {
    const lines = [
      'Hello Hotel Sharda Dinings Front Desk, I would like to check room availability & direct rates:',
      `Guest Name: ${formData.name || 'Guest'}`,
      `Phone: ${formData.phone || 'Not specified'}`,
      `Room Category: ${formData.roomCategory}`,
      `Check-In: ${formData.checkIn || 'Flexible'} (12:00 PM standard)`,
      `Check-Out: ${formData.checkOut || 'Flexible'} (11:00 AM standard)`,
      `Rooms Needed: ${formData.rooms}`,
      formData.notes ? `Notes: ${formData.notes}` : '',
    ].filter(Boolean);

    return `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const digits = formData.phone.replace(/[^\d+]/g, '');
    if (formData.name.trim().length < 2) {
      setError('Please enter the primary guest name.');
      return;
    }
    if (digits.length < 10) {
      setError('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }
    if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
      setError('Check-out date must be after the check-in date.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFDF8] text-[#2C1D18]">
      {/* SECTION 1: POWDER BLUE ARCHITECTURAL HERO + OFFSET KEY PORTRAIT */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EBF1F8] via-[#E2EBF6] to-[#FAF3E8]">
        <OrbitalRingBackdrop
          size={460}
          opacity={0.14}
          strokeColor="#1E3A5F"
          secondaryColor="#D8A852"
          className="hidden lg:block absolute -left-28 -top-24 w-[460px] h-[460px]"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1E3A5F]">
              Hotel Sharda Dinings · ~1 km from Gorakhnath Mandir
            </p>
            <h1 className="font-serif text-[clamp(2.3rem,3.9vw,3.6rem)] font-medium leading-[1.08] tracking-tight text-[#2C1D18]">
              Calm Deluxe <em className="italic font-normal text-[#1E3A5F]">AC guest suites</em> above the dining floor.
            </h1>
            <p className="text-sm sm:text-base text-[#3F5166] leading-relaxed max-w-md">
              Rated 3.9–4.2/5 across MakeMyTrip &amp; Goibibo at 763 A, Sonauli Road. Clean city-view bedrooms tailored for devotees, families, and transit travellers.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={BUSINESS_INFO.bookingPlatforms.makemytrip}
                target="_blank"
                rel="noopener noreferrer"
                className="gloss-btn min-h-[44px] px-5 py-3 bg-[#1E3A5F] hover:bg-[#152944] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Book MakeMyTrip</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={BUSINESS_INFO.bookingPlatforms.goibibo}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-3 bg-white border border-[#1E3A5F]/35 text-[#1E3A5F] text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Goibibo Rates</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="#room-enquiry"
                className="min-h-[44px] px-4 py-3 text-[#6E2434] text-xs font-semibold uppercase tracking-wider underline underline-offset-4 inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Direct Front Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Offset Landscape Room + Small Reception Key Inset */}
          <div className="lg:col-span-6 relative max-w-lg mx-auto lg:ml-auto w-full">
            <EditorialImage
              src="/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-city-view-room.webp"
              alt="Deluxe 240 sq ft air-conditioned room with king bed and work desk"
              frameClassName="rounded-2xl shadow-xl border border-white/80"
              aspect="aspect-[16/10]"
              loading="eager"
            />
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-left-6 sm:w-36 bg-white p-2 rounded-xl shadow-lg border border-[#D4E0EC]">
              <EditorialImage
                src="/images/hotel-rooms/hotel-the-sharda-inn-key.webp"
                alt="Hotel The Sharda Inn Room 202 brushed-steel key fob"
                frameClassName="rounded-lg"
                aspect="aspect-[4/3]"
                caption="Room 202 reception key."
              />
            </div>
          </div>
        </div>
        <AnimatedWaveDivider waveFill="#FFFDF8" />
      </section>

      {/* SECTION 2: ROOM SPECIFICATION FOLIO — Clean Ivory Switcher */}
      <section className="py-16 lg:py-22 bg-[#FFFDF8] border-b border-[#E6D9CB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              accentClass="text-[#1E3A5F]"
              eyebrow="Room Categories &amp; Check-In Policy"
              title="Inspect Deluxe vs. Super Deluxe room blueprints."
            />
            <div className="flex flex-wrap gap-2">
              {ROOM_WING_DETAILS.map((room, idx) => (
                <button
                  key={room.name}
                  type="button"
                  onClick={() => setSelectedRoomIdx(idx)}
                  className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap ${
                    selectedRoomIdx === idx
                      ? 'bg-[#1E3A5F] text-white border-[#1E3A5F]'
                      : 'bg-white text-[#61524A] border-[#D4E0EC] hover:text-[#2C1D18]'
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <EditorialImage
                src={currentRoom.image}
                alt={currentRoom.alt}
                frameClassName="rounded-2xl shadow-md"
                aspect="aspect-[4/3]"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="font-serif text-3xl text-[#2C1D18]">{currentRoom.name}</h3>
                <p className="text-xs text-[#61524A] mt-1">{currentRoom.tariff}</p>
              </div>

              <dl className="divide-y divide-[#E6D9CB] border-y border-[#E6D9CB] text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#61524A]">Dimensions</dt>
                  <dd className="font-semibold text-[#2C1D18] tabular-nums">{currentRoom.scale}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#61524A]">Configuration</dt>
                  <dd className="font-semibold text-[#2C1D18]">{currentRoom.bed}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#61524A]">Check-In / Check-Out</dt>
                  <dd className="font-semibold text-[#2C1D18] tabular-nums">
                    {BUSINESS_INFO.timings.hotelCheckIn} / {BUSINESS_INFO.timings.hotelCheckOut}
                  </dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#61524A]">Indicative Nightly Tariff</dt>
                  <dd className="font-semibold text-[#6E2434] tabular-nums">{BUSINESS_INFO.roomTariffRange}</dd>
                </div>
              </dl>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#4F445C]">
                {currentRoom.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1E3A5F] shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-xs text-[#61524A] flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.hotelPolicies.idProofs}</span>
                </span>
                <button
                  type="button"
                  onClick={onOpenVerification}
                  className="font-semibold text-[#6E2434] underline underline-offset-4 whitespace-nowrap"
                >
                  Inspect OTA Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTINUOUS ROOM & SUITE STREAM — Champagne Cream */}
      <section className="py-14 lg:py-18 bg-[#F7EFE2] border-b border-[#E4D7C5] space-y-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-baseline justify-between gap-4">
          <SectionHeader
            eyebrow="Room Interiors"
            title="Walk smoothly across all clean AC suites."
          />
          <span className="text-xs text-[#61524A]">
            Climate-controlled rooms · Lift access · Room service daily 11 AM – 11 PM
          </span>
        </div>
        <UnifiedGalleryStream items={ROOM_STREAM} pauseLabel="Rooms" speed="slow" />
      </section>

      {/* SECTION 4: BATHROOMS & PROPERTY FACILITIES — Midnight Indigo */}
      <section className="py-16 lg:py-22 bg-[#17253B] text-[#FFFDF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              dark
              eyebrow="Verified Facilities"
              title="Rainfall showers, free self-parking, and 24-hour desk care."
              copy="Confirmed across MakeMyTrip, Goibibo, and Trip.com guest listings."
            />

            <ul className="space-y-3.5 text-sm text-[#DCE5F2] border-t border-white/12 pt-5">
              <li className="flex items-start gap-3">
                <Car className="w-4 h-4 text-[#EAB963] shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Free Self-Parking &amp; Lift:</strong> On-site vehicle parking plus elevator access across guest room floors.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-[#EAB963] shrink-0 mt-1" />
                <span>
                  <strong className="text-white">100% Power Backup:</strong> Continuous air conditioning, safety lockers, and luggage storage.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Wifi className="w-4 h-4 text-[#EAB963] shrink-0 mt-1" />
                <span>
                  <strong className="text-white">High-Speed Wi-Fi &amp; Laundry:</strong> Work desks inside bedrooms plus on-request dry cleaning.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Tv className="w-4 h-4 text-[#EAB963] shrink-0 mt-1" />
                <span>
                  <strong className="text-white">LED TV &amp; In-Room Dining:</strong> Order directly from Sharda Dinings &amp; Olive Cafe kitchens.
                </span>
              </li>
            </ul>
          </div>

          <Reveal variant="right" className="lg:col-span-6 flex justify-center gap-4 max-w-md mx-auto w-full">
            <div className="w-1/2">
              <EditorialImage
                src="/images/hotel-rooms/hotel-sharda-inn-bathroom.webp"
                alt="Dark marble guest bathroom with rainfall shower and geyser"
                frameClassName="rounded-2xl border border-[#EAB963]/20 shadow-lg"
                aspect="aspect-[3/4]"
                caption="Rainfall showerheads."
                dark
              />
            </div>
            <div className="w-1/2 mt-8">
              <EditorialImage
                src="/images/hotel-rooms/hotel-sharda-inn-washroom.webp"
                alt="Clean travertine washroom vanity with vessel basin"
                frameClassName="rounded-2xl border border-[#EAB963]/20 shadow-lg"
                aspect="aspect-[3/4]"
                caption="Sanitized vanity."
                dark
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5: DIRECT FRONT DESK BOOKING FORM — Soft Rose Peach */}
      <section id="room-enquiry" className="scroll-mt-20 py-16 lg:py-22 bg-[#FCECE5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E2434]">
              Direct Room Reservation
            </p>
            <h2 className="font-serif text-3xl text-[#2C1D18] leading-tight">
              Confirm availability directly with reception.
            </h2>
            <p className="text-sm text-[#61524A] leading-relaxed">
              Submit check-in dates to send an instant WhatsApp room query—ideal for early train arrivals, multi-room family bookings, or banquet guest blocks.
            </p>
            <div className="pt-2 border-t border-[#E6C9BF] space-y-1.5 text-sm tabular-nums">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="inline-flex items-center gap-2 font-semibold text-[#2C1D18] hover:text-[#6E2434]"
              >
                <Phone className="w-4 h-4 text-[#6E2434]" />
                <span>{BUSINESS_INFO.phones[0].display}</span>
              </a>
              <p className="text-xs text-[#61524A] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1E3A5F]" />
                <span>Check-in {BUSINESS_INFO.timings.hotelCheckIn} · Check-out {BUSINESS_INFO.timings.hotelCheckOut}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#E6C9BF] rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-6 text-center space-y-4">
                <CheckCircle2 className="w-8 h-8 text-[#6E2434] mx-auto" />
                <h3 className="font-serif text-2xl text-[#2C1D18]">Room Enquiry Ready</h3>
                <p className="text-sm text-[#61524A]">
                  Prepared for <strong className="text-[#2C1D18]">{formData.rooms} · {formData.roomCategory}</strong>. Message our front desk via WhatsApp or check MakeMyTrip.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#6E2434] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.bookingPlatforms.makemytrip}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[42px] px-4 py-2.5 border border-[#1E3A5F] text-[#1E3A5F] text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-1.5"
                  >
                    <span>MakeMyTrip</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {error && (
                  <div role="alert" className="p-3 bg-[#FFF8EB] border border-[#D8A852] text-xs text-[#6B4A12] rounded-lg">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hotel-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Guest Name *
                    </label>
                    <input
                      id="hotel-name"
                      type="text"
                      required
                      placeholder="Prashant Tiwari"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#E6C9BF] text-sm rounded-lg focus:border-[#6E2434] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="hotel-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="hotel-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#E6C9BF] text-sm rounded-lg tabular-nums focus:border-[#6E2434] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hotel-checkin" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Check-In Date
                    </label>
                    <input
                      id="hotel-checkin"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#E6C9BF] text-sm rounded-lg focus:border-[#6E2434] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="hotel-checkout" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Check-Out Date
                    </label>
                    <input
                      id="hotel-checkout"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#E6C9BF] text-sm rounded-lg focus:border-[#6E2434] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hotel-cat" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Room Category
                    </label>
                    <select
                      id="hotel-cat"
                      value={formData.roomCategory}
                      onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#E6C9BF] text-sm rounded-lg focus:border-[#6E2434] focus:outline-none"
                    >
                      <option value="Deluxe Room (240 sq. ft.)">Deluxe Room (240 sq. ft.)</option>
                      <option value="Super Deluxe Room">Super Deluxe Room</option>
                      <option value="Mixed Group Block">Mixed Group Block</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="hotel-rooms" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Rooms Needed
                    </label>
                    <select
                      id="hotel-rooms"
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#E6C9BF] text-sm rounded-lg focus:border-[#6E2434] focus:outline-none"
                    >
                      <option value="1 Room">1 AC Room</option>
                      <option value="2 Rooms">2 AC Rooms</option>
                      <option value="3–5 Rooms">3 – 5 Rooms (Family)</option>
                      <option value="6–11 Rooms">6 – 11 Rooms (Wedding Block)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="hotel-notes" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                    Arrival Time or Special Needs
                  </label>
                  <input
                    id="hotel-notes"
                    type="text"
                    placeholder="Early arrival, parking slot, banquet guest block..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#E6C9BF] text-sm rounded-lg focus:border-[#6E2434] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="gloss-btn w-full min-h-[44px] px-6 py-3 bg-[#1E3A5F] hover:bg-[#152944] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Prepare Direct Room Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
