import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, ExternalLink, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EditorialImage, SectionHeader } from '../components/SiteBlocks';
import {
  AnimatedWaveDivider,
  FloatingBotanicalAccents,
  FloatingLanternParticles,
  OrbitalRingBackdrop,
  Reveal,
  UnifiedGalleryStream,
} from '../components/MotionBlocks';
import { usePageSeo } from '../utils/seo';
import dalMakhaniImg from '../assets/images/dal_makhani_naan_1795201046179.jpg';
import butterChickenImg from '../assets/images/butter_chicken_kulcha_1795201049476.jpg';

const TOP_DISH_STREAM = [
  { src: '/images/food/tandoori-veg-platter.webp', label: 'Vegetarian Tandoori Platter', shape: 'landscape' },
  { src: '/images/food/shanghai-chilli-paneer.webp', label: 'Crispy Chilli Paneer · ₹320', shape: 'portrait' },
  { src: dalMakhaniImg, label: 'Dal Makhani & Naan (Culinary Styling)', shape: 'landscape' },
  { src: '/images/food/open-stuffed-mushroom.webp', label: 'Herb Stuffed Mushrooms', shape: 'square' },
  { src: '/images/food/sharda-dinings-beetroot-croquettes.webp', label: 'Spiced Beetroot Croquettes', shape: 'portrait' },
];

const BOTTOM_DISH_STREAM = [
  { src: '/images/food/sharda-dining-biryani.webp', label: 'Chicken Dum Biryani · ₹410', shape: 'portrait' },
  { src: butterChickenImg, label: 'Butter Chicken & Paratha (Culinary Styling)', shape: 'landscape' },
  { src: '/images/food/garlic-lemon-herb-chicken.webp', label: 'Garlic Lemon Roast Chicken · ₹410', shape: 'square' },
  { src: '/images/food/sharda-dinings-wonton-soup.webp', label: 'Warm Handmade Wonton Broth', shape: 'landscape' },
  { src: '/images/food/sharda-dinings-spring-rolls.webp', label: 'Golden Vegetable Spring Rolls', shape: 'portrait' },
];

const SEATING_CHAPTERS = [
  {
    index: '01',
    title: 'Velvet & Teak Booths',
    kicker: 'Couples & Families',
    copy: 'Cushioned teal and leather booths arranged with generous aisle privacy, pendant lighting, and calm evening pacing.',
    image: '/images/restaurant/sharda-dining-booth.webp',
    alt: 'Teal tufted four-seater booth inside Sharda Dinings restaurant',
  },
  {
    index: '02',
    title: 'Private Group Wing (15–30 Guests)',
    kicker: 'Birthdays & Anniversaries',
    copy: 'Joined chandelier-lit dining clusters dedicated to small family milestones, visiting tour groups, and business lunches.',
    image: '/images/restaurant/sharda-dining-hall-wide.webp',
    alt: 'Bright dining hall wing with gold accents for 15–30 guest groups',
  },
  {
    index: '03',
    title: 'Buddha Alcove & Toddler Care',
    kicker: 'Jain & Kids Support',
    copy: 'Serene marble relief backdrop equipped with toddler high chairs, gentle spice choices, and custom no-onion/no-garlic plates.',
    image: '/images/restaurant/sharda-dining-buddha-wall.webp',
    alt: 'Fluted marble wall with bronze Buddha sculpture overlooking booths',
  },
];

export default function RestaurantPage() {
  usePageSeo({
    title: 'Multi-Cuisine Family Restaurant & Online Ordering — Gorakhpur',
    description:
      'Dine at Sharda Dinings near Gorakhnath Mandir: leather booth seating, private group dining, toddler high chairs, North Indian & Sichuan cuisines.',
    image: '/images/restaurant/sharda-dining-hall.webp',
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '20:00',
    guests: '4 Guests',
    seating: 'Family Booth',
    notes: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppUrl = () => {
    const msg = [
      'Hello Sharda Dinings, please confirm a Restaurant Table Enquiry:',
      `Name: ${formData.name || 'Guest'}`,
      `Phone: ${formData.phone || 'Not specified'}`,
      `Date: ${formData.date || 'Today / Flexible'} at ${formData.time}`,
      `Party Size: ${formData.guests}`,
      `Seating Preference: ${formData.seating}`,
      formData.notes ? `Dietary / Special Notes: ${formData.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const digits = formData.phone.replace(/[^\d+]/g, '');
    if (formData.name.trim().length < 2) {
      setError('Please enter your name so our host desk can note the reservation.');
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
      {/* SECTION 1: SPLIT MONOLITH HERO WITH TWIN OFFSET PORTRAITS — Seafoam Teal Mist */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F2F2] via-[#F4F8F7] to-[#FCF0E6]">
        <OrbitalRingBackdrop
          size={460}
          opacity={0.14}
          strokeColor="#125457"
          secondaryColor="#D8A852"
          className="hidden lg:block absolute -left-28 -top-20 w-[460px] h-[460px]"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#125457]">
              Main Dining Hall · ~4.3/5 Across 4,000+ Justdial Ratings
            </p>
            <h1 className="font-serif text-[clamp(2.3rem,4vw,3.6rem)] font-medium leading-[1.08] tracking-tight text-[#2C1D18]">
              Quiet booth corners, <em className="italic font-normal text-[#125457]">generous plates,</em> and family ease.
            </h1>
            <p className="text-sm sm:text-base text-[#52453E] leading-relaxed max-w-md">
              Air-conditioned comfort along Sonauli Road welcoming Gorakhpur families and temple pilgrims with North Indian, Mughlai, Tandoori, and Sichuan cuisines.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#table-enquiry"
                className="gloss-btn min-h-[44px] px-6 py-3 bg-[#125457] hover:bg-[#0D3D40] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Reserve a Booth</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/menu"
                className="min-h-[44px] px-5 py-3 border border-[#125457]/30 bg-white/85 hover:bg-white text-[#125457] text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center whitespace-nowrap"
              >
                Full Menu Folio
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-[#6E2434] font-semibold">
              <a href={BUSINESS_INFO.ordering.zomato} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                <span>Order on Zomato</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href={BUSINESS_INFO.ordering.swiggy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                <span>Swiggy / Dineout</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[#61524A] font-normal tabular-nums">
                Delivery {BUSINESS_INFO.timings.delivery}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center max-w-lg mx-auto lg:ml-auto">
            <div className="col-span-7">
              <EditorialImage
                src="/images/restaurant/sharda-dining-hall.webp"
                alt="Main dining hall booths and warm pendant lights at Sharda Dinings"
                frameClassName="arch-frame shadow-xl border border-white/80"
                aspect="aspect-[3/4]"
                loading="eager"
              />
            </div>
            <div className="col-span-5 pt-10 animate-float-slow">
              <EditorialImage
                src="/images/restaurant/sharda-dining-interior-corridor.webp"
                alt="Timber-slat ceiling corridor and cognac banquettes"
                frameClassName="rounded-2xl shadow-lg border border-white/80"
                aspect="aspect-[3/4]"
                loading="eager"
                caption="Warm evening aisle."
              />
            </div>
          </div>
        </div>
        <AnimatedWaveDivider waveFill="#FCF0E6" />
      </section>

      {/* SECTION 2: ALTERNATING FLOOR PLAN SEQUENCE — Warm Apricot Peach */}
      <section className="relative overflow-hidden py-16 lg:py-22 bg-[#FCF0E6] border-b border-[#EBD6C3]">
        <FloatingBotanicalAccents color="#6E2434" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Three Seating Zones"
              title="Thoughtful zones for couples, groups, and toddlers."
            />
            <p className="text-xs font-medium text-[#6E2434] tabular-nums inline-flex items-center gap-2 shrink-0">
              <Clock className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.timings.restaurant} · Avg. {BUSINESS_INFO.avgCostForTwo} for two</span>
            </p>
          </div>

          <div className="divide-y divide-[#DEC8B4] border-y border-[#DEC8B4]">
            {SEATING_CHAPTERS.map((zone, idx) => (
              <Reveal
                key={zone.index}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className={`md:col-span-5 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="max-w-xs mx-auto md:mx-0">
                    <EditorialImage
                      src={zone.image}
                      alt={zone.alt}
                      frameClassName="rounded-xl shadow-sm"
                      aspect="aspect-[4/3]"
                    />
                  </div>
                </div>
                <div className={`md:col-span-7 space-y-2 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E2434]">
                    {zone.index} · {zone.kicker}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1D18]">{zone.title}</h3>
                  <p className="text-sm text-[#61524A] leading-relaxed max-w-lg">{zone.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: UNIFIED KITCHEN SHOWCASE — Soft Lavender Linen */}
      <section className="py-16 lg:py-22 bg-[#F3EFFA] border-b border-[#DCD2EC] space-y-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            accentClass="text-[#4C2D5C]"
            eyebrow="Kitchens in Motion"
            title="Tandoor embers, rich Mughlai gravies &amp; hot wok plates."
            copy="Every dish is cooked fresh to order. Pair your table session with our full illustrated Menu Folio."
          />
          <Link
            to="/menu"
            className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#4C2D5C] hover:bg-[#3A2147] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 shrink-0 whitespace-nowrap"
          >
            <span>Inspect Priced Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <UnifiedGalleryStream
          pauseLabel="Dishes"
          items={[...TOP_DISH_STREAM, ...BOTTOM_DISH_STREAM]}
        />
      </section>

      {/* SECTION 4: ARCHITECTURAL VIGNETTES & PULL QUOTE — Deep Chocolate Copper */}
      <section className="relative overflow-hidden py-16 lg:py-22 bg-[#2B1B17] text-[#FFFDF8]">
        <FloatingLanternParticles color="#EAB963" count={6} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <blockquote className="max-w-3xl mx-auto text-center py-6 border-y border-white/15 space-y-2">
            <p className="font-serif italic text-2xl sm:text-3xl text-white leading-snug">
              “Soft acoustic wood slats by afternoon, crystal pendant warmth after dusk.”
            </p>
            <footer className="text-[11px] uppercase tracking-[0.2em] text-[#EAB963]">
              Interior Material Palette · Fluted Stone, Teak &amp; Velvet
            </footer>
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <Reveal variant="left" className="md:col-span-4 max-w-xs mx-auto w-full">
              <EditorialImage
                src="/images/restaurant/sharda-dining.webp"
                alt="Teal velvet seating and crystal chandelier light"
                frameClassName="arch-frame border border-[#EAB963]/20"
                aspect="aspect-[3/4]"
                caption="Velvet booth clusters."
                dark
              />
            </Reveal>
            <Reveal variant="zoom" delay={80} className="md:col-span-4 max-w-xs mx-auto w-full">
              <EditorialImage
                src="/images/restaurant/sharda-dining-wall.webp"
                alt="Framed artwork along booth wall under pendant glass lamps"
                frameClassName="rounded-xl border border-[#EAB963]/20"
                aspect="aspect-square"
                caption="Framed gallery aisle."
                dark
              />
            </Reveal>
            <Reveal variant="right" delay={140} className="md:col-span-4 max-w-xs mx-auto w-full">
              <EditorialImage
                src="/images/restaurant/sharda-buddha-sofa.webp"
                alt="Entrance reception lounge sofa beneath Buddha sculpture"
                frameClassName="rounded-xl border border-[#EAB963]/20"
                aspect="aspect-[4/3]"
                caption="Guest foyer & waiting lounge."
                dark
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: MINIMALIST TABLE ENQUIRY DESK — Dusty Powder Blue */}
      <section id="table-enquiry" className="scroll-mt-20 py-16 lg:py-22 bg-[#EAF1F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E3A5F]">
              Host Desk Reservation
            </p>
            <h2 className="font-serif text-3xl text-[#2C1D18] leading-tight">
              Reserve your booth or private group table.
            </h2>
            <p className="text-sm text-[#3F5166] leading-relaxed">
              Mention baby high-chair requests, Jain meals, or 15–30 guest tables. Submitting opens a clean WhatsApp confirmation directly to our host team.
            </p>
            <div className="pt-2 border-t border-[#CBD9E8] text-sm tabular-nums">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="inline-flex items-center gap-2 font-semibold text-[#1E3A5F] hover:text-[#6E2434]"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_INFO.phones[0].display}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#D4E0EC] rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-6 text-center space-y-4">
                <CheckCircle2 className="w-8 h-8 text-[#125457] mx-auto" />
                <h3 className="font-serif text-2xl text-[#2C1D18]">Table Request Prepared</h3>
                <p className="text-sm text-[#61524A]">
                  Ready for <strong className="text-[#2C1D18]">{formData.guests}</strong> ({formData.seating}). Dispatch directly to our dining host on WhatsApp.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#125457] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="min-h-[42px] px-4 py-2.5 border border-[#D4E0EC] text-xs font-semibold uppercase tracking-wider rounded-lg"
                  >
                    Edit Details
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
                    <label htmlFor="res-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      placeholder="Ananya Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#1E3A5F] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg tabular-nums focus:border-[#1E3A5F] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="res-date" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Date
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#1E3A5F] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-time" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Time
                    </label>
                    <input
                      id="res-time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg tabular-nums focus:border-[#1E3A5F] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-guests" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Guests
                    </label>
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#1E3A5F] focus:outline-none"
                    >
                      <option value="2 Guests">2 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="6–8 Guests">6 – 8 Guests</option>
                      <option value="15–30 Private Lounge">15 – 30 (Private Wing)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="res-notes" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                    Seating or Jain Customisation
                  </label>
                  <input
                    id="res-notes"
                    type="text"
                    placeholder="Velvet booth, high chair, mild spice..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#D4E0EC] text-sm rounded-lg focus:border-[#1E3A5F] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="gloss-btn w-full min-h-[44px] px-6 py-3 bg-[#1E3A5F] hover:bg-[#152944] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Prepare Table Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
