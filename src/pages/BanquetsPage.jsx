import React, { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, MessageSquare, Phone, RotateCw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EditorialImage, SectionHeader } from '../components/SiteBlocks';
import {
  AnimatedWaveDivider,
  FloatingLanternParticles,
  Reveal,
  UnifiedGalleryStream,
} from '../components/MotionBlocks';
import { usePageSeo } from '../utils/seo';

const BANQUET_SPACES = [
  {
    name: 'Seated Family Dining',
    subtitle: 'Formal engagements, dinners & milestone receptions',
    headlineMetric: '100 Seated Guests',
    image: '/images/banquets/sharda-banquet-hall.webp',
    alt: 'Sharda Dinings indoor banquet hall with wood slat walls and lounge sofas',
    summaryTitle: '100-Guest Seated Celebration Layout',
    summaryCopy:
      'Air-conditioned banquet floor with timber acoustic paneling, formal chandeliers, stage sightlines, and elevator access.',
    specs: [
      { label: 'Seated Capacity', value: '100 Guests' },
      { label: 'Climate Control', value: 'Central AC' },
      { label: 'Alcohol Policy', value: 'Non-Alcoholic' },
      { label: 'Culinary Service', value: 'In-House Only' },
    ],
    privileges: [
      'Pure veg, non-veg & Jain menus tailored by house chefs',
      'Mandap lighting & empanelled floral decorators',
      'Complimentary on-site parking & lift access',
      'Upstairs room blocks for family guests',
    ],
  },
  {
    name: 'Floating Reception Floor',
    subtitle: 'Expansive evening flow for sangeet, rituals & high-tea',
    headlineMetric: '150 Floating Guests',
    image: '/images/banquets/sharda-banquet-buffet.webp',
    alt: 'Covered chafing buffet line and brass dinnerware stand prepared for banquets',
    summaryTitle: '150-Guest Floating Celebration Floor',
    summaryCopy:
      'Combines decorative entry arches, photo-stage loveseat focal points, circulating starter service, and heated brass buffet counters.',
    specs: [
      { label: 'Floating Capacity', value: '150 Guests' },
      { label: 'Entry Foyer', value: 'Floral Arches' },
      { label: 'Audio & Music', value: 'In-House DJ Desk' },
      { label: 'Temple Proximity', value: '~1 km Mandir' },
    ],
    privileges: [
      'Illuminated street foyer welcome with fresh floral frames',
      'In-house DJ sound system matched to hall acoustics',
      'Clean guest washrooms & on-site luggage security',
      'Transparent single-point venue billing',
    ],
  },
];

const CELEBRATION_STREAM_TOP = [
  { src: '/images/banquets/sharda-wedding-stage.webp', label: 'Engagements & Ivory Mandaps', shape: 'square' },
  { src: '/images/banquets/sharda-banquet-yellow-chairs.webp', label: 'Haldi & Marigold Mornings', shape: 'landscape' },
  { src: '/images/banquets/sharda-banquet-hall-floral.webp', label: 'White & Gold Floral Ring', shape: 'wide' },
  { src: '/images/banquets/sharda-banquet-entrance-floral.webp', label: 'Welcome Foyer Archway', shape: 'portrait' },
];

const CELEBRATION_STREAM_BOTTOM = [
  { src: '/images/banquets/sharda-wedding-stage-blue-sofa.webp', label: 'Royal Blue Reception Stage', shape: 'landscape' },
  { src: '/images/banquets/sharda-banquet-pink-sofas.webp', label: 'Crimson Velvet Seating', shape: 'portrait' },
  { src: '/images/banquets/sharda-banquet-pink-balloons.webp', label: 'Birthdays & Milestones', shape: 'landscape' },
  { src: '/images/banquets/sharda-banquet-hall-tables.webp', label: 'Corporate Round-Table Meets', shape: 'square' },
];

const VENUE_GUIDELINES = [
  {
    index: '01',
    title: 'Exclusive In-House Kitchens',
    detail: 'All vegetarian, Jain-customised, and non-vegetarian banquet menus are prepared freshly inside Sharda Dinings kitchens; external caterers are not permitted.',
  },
  {
    index: '02',
    title: 'Strictly Non-Alcoholic Hospitality',
    detail: 'To keep evening celebrations welcoming for all generations, outside liquor and bar counters are strictly prohibited on property.',
  },
  {
    index: '03',
    title: 'Empanelled Florists & Indoor DJ',
    detail: 'Stage mandaps, balloon columns, floral welcome arches, and indoor DJ sound systems are coordinated directly through our event desk.',
  },
  {
    index: '04',
    title: 'Upstairs AC Guest Rooms & Parking',
    detail: 'Pair banquet functions with 10–11 on-site air-conditioned guest rooms and complimentary on-site self-parking.',
  },
];

export default function BanquetsPage({ onOpenVerification }) {
  usePageSeo({
    title: 'Banquet Hall & Event Venue in Gorakhpur (100 Seated / 150 Floating)',
    description:
      'Host engagements, receptions, Haldi ceremonies, birthdays, and corporate meets at Sharda Dinings Banquet Hall near Gorakhnath Mandir, Gorakhpur.',
    image: '/images/banquets/sharda-wedding-stage-floral-rings.webp',
  });

  const [spaceIdx, setSpaceIdx] = useState(0);
  const [showCardBack, setShowCardBack] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Engagement / Ring Ceremony',
    eventDate: '',
    guestCount: '60–100 Seated',
    cateringMode: 'Pure Vegetarian Menu',
    notes: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentSpace = BANQUET_SPACES[spaceIdx];

  const buildWhatsAppUrl = () => {
    const lines = [
      'Hello Sharda Dinings Banquet Desk, I would like to enquire about booking the banquet hall & pricing:',
      `Host Name: ${formData.name || 'Guest'}`,
      `Phone: ${formData.phone || 'Not specified'}`,
      `Event Type: ${formData.eventType}`,
      `Preferred Date: ${formData.eventDate || 'Flexible'}`,
      `Estimated Gathering: ${formData.guestCount}`,
      `Catering Preference: ${formData.cateringMode}`,
      formData.notes ? `Additional Requirements: ${formData.notes}` : '',
    ].filter(Boolean);

    return `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const digits = formData.phone.replace(/[^\d+]/g, '');
    if (formData.name.trim().length < 2) {
      setError('Please provide the host or coordinator name.');
      return;
    }
    if (digits.length < 10) {
      setError('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFDF8] text-[#2C1D18]">
      {/* SECTION 1: STEPPED CELEBRATION TRIPTYCH HERO — Velvet Plum */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3E1F38] via-[#4C2D5C] to-[#261425] text-[#FFFDF8]">
        <FloatingLanternParticles color="#EAB963" count={7} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#EAB963] tabular-nums">
              Air-Conditioned Banquet Hall · 100 Seated · 150 Floating
            </p>
            <h1 className="font-serif text-[clamp(2.3rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-tight text-white">
              Celebration spaces <em className="italic font-normal text-[#EAB963]">tailored</em> to family milestones.
            </h1>
            <p className="text-sm sm:text-base text-[#E6DCF0] leading-relaxed max-w-xl mx-auto">
              Engagements, Haldi mornings, milestone birthdays, and corporate meets along Sonauli Road with exclusive kitchens and upstairs guest rooms.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href="#banquet-enquiry"
                className="gloss-btn min-h-[44px] px-6 py-3 bg-[#EAB963] hover:bg-[#D8A852] text-[#2C1D18] text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Request Event Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phones[1].number}`}
                className="min-h-[44px] px-5 py-3 border border-[#7D578F] hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 tabular-nums whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#EAB963]" />
                <span>{BUSINESS_INFO.phones[1].display}</span>
              </a>
            </div>
          </div>

          {/* 3-Image Stepped Editorial Collage (Zero Sliders) */}
          <div className="grid grid-cols-2 sm:grid-cols-12 gap-4 sm:gap-5 items-end max-w-5xl mx-auto">
            <div className="col-span-1 sm:col-span-3 order-2 sm:order-1">
              <EditorialImage
                src="/images/banquets/sharda-banquet-entrance-floral.webp"
                alt="Floral-draped entrance welcome archway leading into banquet foyer"
                frameClassName="arch-frame shadow-lg border border-[#EAB963]/25"
                aspect="aspect-[3/4]"
                loading="eager"
              />
            </div>
            <div className="col-span-2 sm:col-span-6 order-1 sm:order-2">
              <EditorialImage
                src="/images/banquets/sharda-wedding-stage-floral-rings.webp"
                alt="Panoramic view of floral circular wedding stage inside Sharda Dinings banquet hall"
                frameClassName="rounded-2xl shadow-2xl border border-[#EAB963]/30"
                aspect="aspect-[16/10]"
                loading="eager"
              />
            </div>
            <div className="col-span-1 sm:col-span-3 order-3">
              <EditorialImage
                src="/images/banquets/sharda-wedding-stage.webp"
                alt="Tufted ivory mandap loveseat beneath draped pastel florals"
                frameClassName="rounded-2xl shadow-lg border border-[#EAB963]/25"
                aspect="aspect-[3/4]"
                loading="eager"
              />
            </div>
          </div>
        </div>
        <AnimatedWaveDivider waveFill="#FAF3E8" />
      </section>

      {/* SECTION 2: SEATED VS FLOATING ARCHITECTURAL TOGGLE — Champagne Cream */}
      <section className="py-16 lg:py-22 bg-[#FAF3E8] border-b border-[#E6D9CB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              accentClass="text-[#4C2D5C]"
              eyebrow="Interactive Capacity Folio"
              title="Compare Seated Dining vs. Floating Reception setups."
            />
            <div className="flex flex-wrap gap-2">
              {BANQUET_SPACES.map((space, idx) => (
                <button
                  key={space.name}
                  type="button"
                  onClick={() => {
                    setSpaceIdx(idx);
                    setShowCardBack(false);
                  }}
                  className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap ${
                    spaceIdx === idx
                      ? 'bg-[#4C2D5C] text-white border-[#4C2D5C]'
                      : 'bg-white text-[#4F445C] border-[#D8CCE9] hover:text-[#2C1D18]'
                  }`}
                >
                  {space.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Spec Ledger + Flip Card */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E2434] tabular-nums">
                  {currentSpace.headlineMetric}
                </p>
                <h3 className="font-serif text-3xl text-[#2C1D18] mt-1">{currentSpace.name}</h3>
                <p className="text-sm text-[#61524A] mt-1">{currentSpace.subtitle}</p>
              </div>

              <dl className="divide-y divide-[#E3D4C3] border-y border-[#E3D4C3] text-xs sm:text-sm">
                {currentSpace.specs.map((row) => (
                  <div key={row.label} className="py-3 flex justify-between gap-4">
                    <dt className="text-[#61524A]">{row.label}</dt>
                    <dd className="font-semibold text-[#2C1D18] tabular-nums">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="space-y-2 text-xs text-[#4F445C]">
                {currentSpace.privileges.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4C2D5C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              {showCardBack ? (
                <div className="aspect-[16/10] rounded-2xl bg-[#3E1F38] text-white p-7 flex flex-col justify-between shadow-lg">
                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EAB963]">
                      Hall Architecture Summary
                    </p>
                    <h4 className="font-serif text-2xl sm:text-3xl text-white">
                      {currentSpace.summaryTitle}
                    </h4>
                    <p className="text-sm text-[#EAE0F2] leading-relaxed">{currentSpace.summaryCopy}</p>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowCardBack(false)}
                      className="min-h-[38px] px-4 py-2 rounded-lg bg-white text-[#2C1D18] text-xs font-semibold inline-flex items-center gap-1.5"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>View Photograph</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative media-frame aspect-[16/10] rounded-2xl shadow-lg">
                  <img src={currentSpace.image} alt={currentSpace.alt} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="text-xs font-serif italic text-white">{currentSpace.headlineMetric}</span>
                    <button
                      type="button"
                      onClick={() => setShowCardBack(true)}
                      className="min-h-[36px] px-3.5 py-1.5 rounded-lg bg-white/95 text-[#2C1D18] text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Hall Brief</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: UNIFIED CELEBRATION MOODS STREAM — Soft Lavender */}
      <section className="py-16 lg:py-22 bg-[#F0ECF8] border-b border-[#D8CCE9] space-y-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            accentClass="text-[#4C2D5C]"
            eyebrow="Eight Event Styling Moods"
            title="Staged cleanly for each chapter of your celebration."
          />
          <p className="text-xs sm:text-sm text-[#4F445C] max-w-xs leading-relaxed">
            Adapting effortlessly from yellow Haldi mornings to velvet engagement receptions and corporate tables.
          </p>
        </div>

        <UnifiedGalleryStream
          pauseLabel="Moods"
          items={[...CELEBRATION_STREAM_TOP, ...CELEBRATION_STREAM_BOTTOM]}
        />
      </section>

      {/* SECTION 4: NUMBERED VENUE POLICIES LEDGER — Apricot Peach */}
      <section className="py-16 lg:py-22 bg-[#FCECE2] border-b border-[#EAD1C2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Venue Policies &amp; Logistics"
              title="Clear guidelines built around multi-generational family events."
            />
            <button
              type="button"
              onClick={onOpenVerification}
              className="text-xs font-semibold text-[#6E2434] underline underline-offset-4 whitespace-nowrap self-start md:self-auto"
            >
              Inspect Capacity in Register
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 pt-2">
            {VENUE_GUIDELINES.map((item) => (
              <Reveal key={item.index} className="border-t border-[#DEC0AF] pt-5 space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E2434] tabular-nums">
                  {item.index} · Operational Policy
                </p>
                <h3 className="font-serif text-2xl text-[#2C1D18]">{item.title}</h3>
                <p className="text-sm text-[#61524A] leading-relaxed">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BANQUET ENQUIRY DESK — Dusty Slate-Blue */}
      <section id="banquet-enquiry" className="scroll-mt-20 py-16 lg:py-22 bg-[#EAF1F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4C2D5C]">
              Walk-Through &amp; Pricing
            </p>
            <h2 className="font-serif text-3xl text-[#2C1D18] leading-tight">
              Book a hall tour or request per-plate event pricing.
            </h2>
            <p className="text-sm text-[#3F5166] leading-relaxed">
              Specify your date, guest count (up to 150 floating), and catering menu style to send an instant WhatsApp brief to our banquet coordinator.
            </p>
            <div className="pt-2 border-t border-[#CBD9E8] text-sm tabular-nums">
              <a
                href={`tel:${BUSINESS_INFO.phones[1].number}`}
                className="inline-flex items-center gap-2 font-semibold text-[#2C1D18] hover:text-[#6E2434]"
              >
                <Phone className="w-4 h-4 text-[#4C2D5C]" />
                <span>{BUSINESS_INFO.phones[1].display} (Banquet Desk)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#D4E0EC] rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-6 text-center space-y-4">
                <CheckCircle2 className="w-8 h-8 text-[#4C2D5C] mx-auto" />
                <h3 className="font-serif text-2xl text-[#2C1D18]">Banquet Brief Prepared</h3>
                <p className="text-sm text-[#61524A]">
                  Prepared for <strong className="text-[#2C1D18]">{formData.eventType}</strong> ({formData.guestCount}). Dispatch via WhatsApp directly.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#4C2D5C] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="min-h-[42px] px-4 py-2.5 border border-[#D4E0EC] text-xs font-semibold uppercase tracking-wider rounded-lg"
                  >
                    Modify Enquiry
                  </button>
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
                    <label htmlFor="banquet-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Host Name *
                    </label>
                    <input
                      id="banquet-name"
                      type="text"
                      required
                      placeholder="Suresh Mishra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="banquet-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="banquet-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg tabular-nums focus:border-[#4C2D5C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="banquet-type" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Occasion
                    </label>
                    <select
                      id="banquet-type"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                    >
                      <option value="Engagement / Ring Ceremony">Engagement / Ring Ceremony</option>
                      <option value="Wedding / Reception">Wedding / Reception</option>
                      <option value="Haldi / Mehndi Function">Haldi / Mehndi Function</option>
                      <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                      <option value="Corporate Conference">Corporate Conference</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="banquet-date" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Event Date
                    </label>
                    <input
                      id="banquet-date"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="banquet-guests" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Guest Range (Max 150)
                    </label>
                    <select
                      id="banquet-guests"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                    >
                      <option value="30–60 Guests">30 – 60 Guests</option>
                      <option value="60–100 Seated">60 – 100 Seated</option>
                      <option value="100–150 Floating">100 – 150 Floating</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="banquet-catering" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Catering Style
                    </label>
                    <select
                      id="banquet-catering"
                      value={formData.cateringMode}
                      onChange={(e) => setFormData({ ...formData, cateringMode: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                    >
                      <option value="Pure Vegetarian Menu">Pure Vegetarian Menu</option>
                      <option value="Vegetarian + Non-Veg Menu">Vegetarian + Non-Veg Menu</option>
                      <option value="Jain Customised Menu">Jain Customised Menu</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="banquet-notes" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                    Decor, DJ or Room Needs
                  </label>
                  <textarea
                    id="banquet-notes"
                    rows="2"
                    placeholder="Floral arch stage, afternoon buffet, plus Deluxe guest rooms..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="gloss-btn w-full min-h-[44px] px-6 py-3 bg-[#4C2D5C] hover:bg-[#3A2147] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Prepare Banquet Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
