import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ExternalLink, MapPin, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EditorialImage } from '../components/SiteBlocks';
import { FloatingBotanicalAccents, OrbitalRingBackdrop, Reveal } from '../components/MotionBlocks';
import { usePageSeo } from '../utils/seo';
import spiceStillLife from '../assets/images/editorial_spice_brass_1795187016285.jpg';

const CULINARY_SIGNATURES = [
  { name: 'Dal Makhani Sharda Signature', course: 'Slow-Simmered Veg Main', price: '₹340' },
  { name: 'Paneer Punjabi Tadka / Butter Masala', course: 'Cashew Tomato Gravy', price: '₹345' },
  { name: 'Vegetable Dum Biryani Awadhi', course: 'Handi Saffron Rice', price: '₹380' },
  { name: 'Classic Butter Chicken', course: 'Charred Tikka Makhani', price: '₹460' },
];

const WINGS = [
  {
    key: 'restaurant',
    title: 'Family Restaurant',
    image: '/images/restaurant/sharda-dining.webp',
    linkTo: '/restaurant',
    accent: 'text-deep-teal',
    border: 'border-deep-teal',
    hoverBg: 'hover:bg-deep-teal/10',
  },
  {
    key: 'olive-cafe',
    title: 'Olive Cafe',
    image: '/images/olive-cafe/olive-cafe-coffee.webp',
    linkTo: '/olive-cafe',
    accent: 'text-warm-brown',
    border: 'border-warm-brown',
    hoverBg: 'hover:bg-warm-brown/10',
  },
  {
    key: 'banquets',
    title: 'Banquets & Events',
    image: '/images/banquets/sharda-wedding-stage-floral-rings.webp',
    linkTo: '/banquets',
    accent: 'text-coral',
    border: 'border-coral',
    hoverBg: 'hover:bg-coral/10',
  },
  {
    key: 'hotel',
    title: 'Hotel & Rooms',
    image: '/images/hotel-rooms/hotel-sharda-inn-room-103.webp',
    linkTo: '/hotel',
    accent: 'text-dusty-blue',
    border: 'border-dusty-blue',
    hoverBg: 'hover:bg-dusty-blue/10',
  },
];

export default function HomePage({ onOpenEnquiry, onOpenVerification: _onOpenVerification }) {
  usePageSeo({
    title: 'Sharda Dinings — Restaurant, Olive Cafe, Banquets & Hotel in Gorakhpur',
    description:
      'Discover Sharda Dinings in East Rajendra Nagar near Gorakhnath Mandir, Gorakhpur: multi-cuisine dining, Olive Cafe, banquet hall, and Hotel Sharda Dinings AC rooms.',
    image: '/images/home/sharda-dinings-exterior-night.webp',
  });

  return (
    <div className="bg-[#FBF9F4] text-[#241814]">
      {/* ===== SECTION 1: HERO ===== */}
      <section
        className="relative overflow-hidden bg-gradient-hero"
        id="hero"
      >
        <OrbitalRingBackdrop
          size={560}
          opacity={0.10}
          strokeColor="#C9A227"
          secondaryColor="#0E4D5C"
          className="hidden lg:block absolute -right-20 -top-20 w-[560px] h-[560px] animate-rotate-slow"
        />
        <OrbitalRingBackdrop
          size={400}
          opacity={0.08}
          strokeColor="#E8836A"
          secondaryColor="#A8A4D8"
          className="hidden lg:block absolute -left-16 -bottom-16 w-[400px] h-[400px] animate-rotate-slow-reverse"
        />
        <FloatingBotanicalAccents color="#C9A227" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: Prominent typography */}
            <div className="lg:col-span-6 space-y-8">
              <Reveal variant="up" className="animate-fade-up">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-coral mb-3">
                  East Rajendra Nagar · Gorakhpur
                </p>
                <h1 className="font-serif text-[clamp(3rem,8vw,4.8rem)] font-medium leading-[0.95] tracking-tight text-[#241814] max-w-[52rem]">
                  A landmark of
                  <br />
                  <span className="text-deep-teal italic font-normal">dining, coffee &amp; stays.</span>
                </h1>
                <p className="text-base sm:text-lg text-[#6B655C] leading-relaxed max-w-xl mt-4">
                  Multi-cuisine family dining, Olive Cafe coffee and patisserie, indoor banquets,
                  and boutique AC rooms—one landmark address near Gorakhnath Mandir.
                </p>
              </Reveal>

              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '200ms' }}>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('restaurant')}
                    className="gloss-btn min-h-[52px] px-9 py-3 bg-deep-teal hover:bg-[#0A3A46] text-white text-sm font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2.5 whitespace-nowrap transition-all"
                  >
                    <span>Reserve a Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    to="/menu"
                    className="min-h-[52px] px-9 py-3 border border-[#241814]/20 bg-white/90 hover:bg-white text-[#241814] text-sm font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2.5 whitespace-nowrap transition-all"
                  >
                    <span>Browse Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Premium two-image composition */}
            <div className="lg:col-span-6 relative">
              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '400ms' }}>
                <div className="relative inline-block">
                  {/* Main image: landscape, width > height, natural proportions */}
                  <div className="relative rounded-[36px] overflow-hidden border border-white/70 shadow-2xl bg-[#E9DFD3]">
                    <EditorialImage
                      src="/images/home/sharda-dinings-storefront.webp"
                      alt="Sharda Dinings storefront facade"
                      frameClassName="rounded-none border-none"
                      aspect="aspect-[4/3]"
                      loading="eager"
                      fetchPriority="high"
                      className="animate-image-reveal relative"
                    />
                    {/* Corner decorative fine lines */}
                    <div className="absolute top-6 left-6 w-[1px] h-16 bg-[#C9A227]/30" />
                    <div className="absolute top-6 left-6 h-[1px] w-16 bg-[#C9A227]/30" />
                    <div className="absolute bottom-6 right-6 w-[1px] h-16 bg-[#0E4D5C]/25" />
                    <div className="absolute bottom-6 right-6 h-[1px] w-16 bg-[#0E4D5C]/25" />
                  </div>

                  {/* Smaller square image at bottom-right: large, in front, overlapping */}
                  <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '700ms' }}>
                    <div style={{ zIndex: 100 }} className="absolute bottom-[-8%] right-[-12%] w-[42%] lg:w-[35%] xl:w-[30%] aspect-[1] rounded-[32px] shadow-2xl border border-white/80 z-50 animate-float bg-[#E9DFD3]">
                      <EditorialImage
                        src="/images/restaurant/sharda-dining-buddha-wall.webp"
                        alt="Fluted Buddha relief wall inside the dining hall"
                        frameClassName="rounded-none border-none"
                        aspect="aspect-square"
                        className="animate-image-reveal"
                        style={{ transitionDelay: '100ms' }}
                      />
                    </div>
                  </Reveal>

                  {/* Decorative fine line */}
                  <div className="absolute top-[40%] right-[10%] w-[1px] h-[200px] bg-[#C9A227]/20 animate-drift-y" />
                </div>
              </Reveal>
            </div>

          </div>
        </div>

        <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '1100ms' }}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-drift-y">
            <span className="text-[10px] uppercase tracking-widest text-[#6B655C] font-semibold">Scroll to explore</span>
            <div className="w-1 h-3 rounded-full bg-[#6B655C] animate-blink-slow" />
          </div>
        </Reveal>
      </section>

      {/* ===== SECTION 2: HOUSE CHRONICLE ===== */}
      <section className="relative overflow-hidden bg-gradient-brand py-10 lg:py-14 border-y border-[#E4D8CA]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

            {/* Left: Editorial image composition */}
            <div className="lg:col-span-7 relative h-[520px]">
              {/* Main featured image */}
              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '100ms' }}>
                <div className="relative h-full w-full rounded-[36px] overflow-hidden border border-[#DFD2C2]/60 shadow-xl">
                  <EditorialImage
                    src="/images/restaurant/sharda-dining.webp"
                    alt="Teal velvet booths and crystal chandelier inside Sharda Dinings"
                    frameClassName="rounded-none border-none"
                    aspect="aspect-[4/3]"
                    loading="eager"
                    className="animate-image-reveal"
                  />
                </div>
              </Reveal>

              {/* Decorative corner accents */}
              <div className="absolute top-8 left-8 w-[1px] h-20 bg-[#C9A227]/30" />
              <div className="absolute top-8 left-8 h-[1px] w-20 bg-[#C9A227]/30" />
            </div>

            {/* Right: Text content - visually connected to images */}
            <div className="lg:col-span-5 flex flex-col justify-center min-h-[520px]">
              <div className="relative -mr-4 lg:-mr-10">
                <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '700ms' }}>
                  <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-[28px] border border-[#E4D8CA]/40 shadow-xl max-w-lg ml-auto z-20">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-warm-brown mb-3">
                      House Chronicle · Gorakhnath Temple Road
                    </p>
                    <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.05] tracking-tight text-[#241814] mb-4">
                      Four experiences under one roof.
                    </h2>
                    <p className="text-base text-[#6B655C] leading-relaxed">
                      From teal booths to espresso pours, floral mandaps to calm AC rooms — discover Sharda Dinings.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile: Compact stacked layout */}
        <div className="lg:hidden px-4 sm:px-6 lg:px-8 py-8">
          <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '100ms' }}>
            <div className="relative h-[320px] w-full rounded-[32px] overflow-hidden border border-[#DFD2C2]/60 shadow-xl animate-image-reveal mb-4">
              <EditorialImage
                src="/images/restaurant/sharda-dining.webp"
                alt="Teal velvet booths and crystal chandelier inside Sharda Dinings"
                frameClassName="rounded-none border-none"
                aspect="aspect-[4/3]"
                loading="eager"
              />
            </div>
          </Reveal>

          <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '700ms' }}>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[28px] border border-[#E4D8CA]/40 shadow-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-warm-brown mb-2">
                House Chronicle · Gorakhnath Temple Road
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.05] tracking-tight text-[#241814] mb-3">
                Four experiences under one roof.
              </h2>
              <p className="text-base text-[#6B655C] leading-relaxed">
                From teal booths to espresso pours, floral mandaps to calm AC rooms — discover Sharda Dinings.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 3: FOUR WINGS ONE ADDRESS ===== */}
      <section className="relative overflow-hidden bg-gradient-wings py-18 lg:py-26 border-b border-[#E4D8CA]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="animate-fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-deep-teal">
                Four Wings · One Address
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-[#241814] tracking-tight">
                Step into each world
              </h2>
            </div>
          </Reveal>

          <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '150ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WINGS.map((wing, _idx) => (
                <div
                  key={wing.key}
                  className="relative group overflow-hidden rounded-[28px] border border-[#DFD2C2]/60 bg-white shadow-sm transition-all duration-400 hover:shadow-lg hover:border-transparent"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <EditorialImage
                      src={wing.image}
                      alt={wing.title}
                      frameClassName="rounded-none border-none"
                      aspect="aspect-square"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241814]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#241814]/90 to-transparent">
<span className="block text-[10px] font-semibold uppercase tracking-wider text-white/70 mb-1">
  {`0${_idx + 1}`}
</span>
                      <h3 className="font-serif text-xl sm:text-lg font-medium text-white leading-tight">
                        {wing.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <Link
                      to={wing.linkTo}
                      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider ${wing.accent} hover:text-emerald transition-colors`}
                    >
                      Explore {wing.title === 'Olive Cafe' ? 'Cafe' : wing.title === 'Hotel & Rooms' ? 'Rooms' : wing.title}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 4: FOOD SECTION — UNCHANGED ===== */}
      <section className="relative overflow-hidden min-h-[560px] flex items-center bg-[#241814] text-[#FAF7F2]">
        <img
          src="/images/food/sharda-dinings-food-spread-clean.webp"
          alt="Multi-cuisine table spread with tandoori platters, rich gravies, naan and sweet dishes at Sharda Dinings"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#1A100D]/95 via-[#1A100D]/82 to-[#1A100D]/45"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal variant="left" className="lg:col-span-6 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#EAB963]">
              Multi-Cuisine Family Kitchens
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.06] text-white">
              Charcoal tandoors, slow-simmered gravies &amp; sizzling Sichuan woks.
            </h2>
            <p className="text-sm sm:text-base text-[#E6D6C9] leading-relaxed max-w-md">
              Vegetarian, Jain-customised, and non-vegetarian kitchens operating cleanly side by side—available in cushioned booths or delivered hot through partner portals.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/menu"
                className="gloss-btn min-h-[44px] px-6 py-3 bg-[#EAB963] hover:bg-[#D99B38] text-[#241814] text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Open Full Menu (48 Dishes)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BUSINESS_INFO.ordering.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-3 border border-white/30 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" className="lg:col-span-6 lg:pl-8">
            <div className="bg-[#1A100D]/80 backdrop-blur-md border border-[#EAB963]/30 p-6 sm:p-8 rounded-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EAB963]">
                  Kitchen Signature Highlights
                </span>
                <span className="text-xs text-[#D5C3B3] tabular-nums">Avg. {BUSINESS_INFO.avgCostForTwo} / two</span>
              </div>
              <div className="divide-y divide-white/12">
                {CULINARY_SIGNATURES.map((dish) => (
                  <div key={dish.name} className="py-3 flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-white">{dish.name}</h3>
                      <p className="text-xs text-[#CBB7A6]">{dish.course}</p>
                    </div>
                    <span className="font-serif text-xl font-semibold text-[#EAB963] tabular-nums shrink-0">
                      {dish.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-1">
                <img
                  src={spiceStillLife}
                  alt="Brass spice study complementing Indian kitchen preparations"
                  className="w-12 h-12 rounded-lg object-cover border border-[#EAB963]/30 shrink-0"
                />
                <p className="text-xs text-[#D5C3B3] leading-relaxed">
                  Inform dining staff for Jain no-onion / no-garlic dishes or gentle kid-friendly spice levels.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 5: OLIVE CAFE ===== */}
      <section className="relative overflow-hidden bg-gradient-cafe py-16 lg:py-22 border-b border-[#E4D8CA]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: Heading + short description + button */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal variant="up" className="animate-fade-up">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-brown">
                  Olive Cafe Wing · Open {BUSINESS_INFO.timings.oliveCafe}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-medium leading-[1.05] text-[#241814] tracking-tight">
                  Espresso, thick shakes, stone-baked calm.
                </h2>
                <p className="text-base sm:text-lg text-[#6B655C] leading-relaxed mt-4 max-w-xl">
                  Coffee, desserts, and cafe classics served in a relaxed lounge with complimentary wi-fi.
                </p>
              </Reveal>

              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '300ms' }}>
                <Link
                  to="/olive-cafe"
                  className="gloss-btn w-full min-h-[52px] px-9 py-3 bg-warm-brown hover:bg-[#4A3325] text-white text-sm font-semibold uppercase tracking-wider rounded-md inline-flex items-center justify-center gap-2.5 transition-all"
                >
                  <span>Explore Olive Cafe Wing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            {/* Right: Compact cafe photo cluster */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-[480px]">
              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '200ms' }}>
                <div className="relative h-[60%] w-full lg:w-[56%] rounded-[32px] overflow-hidden border border-[#DFD2C2]/50 shadow-xl animate-float">
                  <EditorialImage
                    src="/images/olive-cafe/olive-cafe-coffee.webp"
                    alt="Freshly brewed cappuccinos at Olive Cafe"
                    frameClassName="rounded-none border-none"
                    aspect="aspect-[4/5]"
                    loading="eager"
                    className="animate-image-reveal relative z-10"
                  />
                </div>
              </Reveal>

              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '400ms' }}>
                <div className="absolute -bottom-6 right-0 w-[40%] h-[180px] md:h-[220px] rounded-[24px] overflow-hidden border border-[#DFD2C2]/50 shadow-xl animate-float-reverse">
                  <EditorialImage
                    src="/images/food/sharda-dinings-table-spread.webp"
                    alt="Club sandwich, Alfredo penne, and cappuccino table spread"
                    frameClassName="rounded-none border-none"
                    aspect="aspect-[4/3]"
                    className="animate-image-reveal"
                  />
                </div>
              </Reveal>

              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '600ms' }}>
                <div className="absolute bottom-0 left-0 w-[35%] h-[140px] md:h-[180px] rounded-[24px] overflow-hidden border border-[#DFD2C2]/50 shadow-lg animate-scale-pulse">
                  <EditorialImage
                    src="/images/olive-cafe/sharda-good-vibes-neon.webp"
                    alt="Good Vibes neon installation at Olive Cafe"
                    frameClassName="rounded-none border-none"
                    aspect="aspect-square"
                    className="animate-image-reveal"
                    style={{ transitionDelay: '200ms' }}
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 6: BANQUETS & HOTEL ===== */}
      <section className="relative overflow-hidden bg-gradient-banquet py-20 lg:py-28 border-b border-[#E4D8CA]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Banquets: Wide controlled image with overlay content */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] lg:h-[500px] rounded-[32px] overflow-hidden border border-[#E4D8CA]/40 shadow-xl">
                <EditorialImage
                  src="/images/banquets/sharda-banquet-hall.webp"
                  alt="Indoor AC banquet hall with wood slat walls and floral decor"
                  frameClassName="rounded-none border-none"
                  aspect="aspect-[16/9]"
                  loading="eager"
                  className="animate-image-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241814]/70 via-[#241814]/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <Reveal variant="up" className="animate-fade-up">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8836A] text-[#241814] text-[10px] font-semibold uppercase tracking-wider mb-3">
                      Celebration Floor
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-tight">
                      Engagements · Haldi · Receptions
                    </h2>
                    <p className="text-sm text-[#E8E0D2] leading-relaxed mt-3 max-w-lg">
                      Climate-controlled hall with exclusive veg, non-veg &amp; Jain kitchens.
                    </p>
                  </Reveal>
                </div>
              </div>

              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '300ms' }}>
                <div className="mt-8">
                  <Link
                    to="/banquets"
                    className="gloss-btn min-h-[52px] px-9 py-3 bg-[#241814] hover:bg-[#6E2434] text-white text-sm font-semibold uppercase tracking-wider rounded-md inline-flex items-center justify-center gap-2.5 transition-all"
                  >
                    <span>Plan Your Event</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Hotel Stay: Premium hospitality design */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] lg:h-[520px] rounded-[40px] overflow-hidden border border-[#E4D8CA]/40 shadow-xl">
                <EditorialImage
                  src="/images/hotel-rooms/hotel-sharda-inn-room-103.webp"
                  alt="Deluxe AC king bedroom at Hotel Sharda Dinings"
                  frameClassName="rounded-none border-none"
                  aspect="aspect-[4/5]"
                  loading="eager"
                  className="animate-image-reveal animate-float-slow"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241814]/80 via-[#241814]/30 to-transparent" />
                {/* Text overlay - right side, middle-to-lower */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-10">
                  <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '100ms' }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-white mb-4">
                      04 · Hotel Stays · {BUSINESS_INFO.roomTariffRange}
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.1] text-white mb-3">
                      Deluxe &amp; Super Deluxe AC bedrooms
                    </h2>
                    <p className="text-sm sm:text-base text-[#E8E0D2] leading-relaxed max-w-lg mb-6">
                      King beds, work stations, rainfall showers, 100% power backup, free parking.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20">
                        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">Check-in</span>
                        <span className="text-xs font-medium text-white">{BUSINESS_INFO.timings.hotelCheckIn}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20">
                        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">Check-out</span>
                        <span className="text-xs font-medium text-white">{BUSINESS_INFO.timings.hotelCheckOut}</span>
                      </div>
                    </div>
                  </Reveal>
                </div>
                {/* Decorative corner accents */}
                <div className="absolute top-8 left-8 w-[1px] h-20 bg-[#C9A227]/30" />
                <div className="absolute top-8 left-8 h-[1px] w-20 bg-[#C9A227]/30" />
              </div>

              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '700ms' }}>
                <div className="mt-8">
                  <Link
                    to="/hotel"
                    className="gloss-btn w-full min-h-[52px] px-9 py-3 bg-dusty-blue hover:bg-[#5D6B78] text-white text-sm font-semibold uppercase tracking-wider rounded-md inline-flex items-center justify-center gap-2.5 transition-all"
                  >
                    <span>Inspect Rooms &amp; Book</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 7: LOCATION & VISIT ===== */}
      <section className="relative overflow-hidden bg-gradient-location py-20 lg:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Address + hours + contact */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal variant="up" className="animate-fade-up">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-deep-teal">
                  Visit Us
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] text-[#241814]">
                  Find Sharda Dinings
                </h2>
              </Reveal>

              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '200ms' }}>
                <div className="space-y-6">
                  <div className="p-6 rounded-[28px] bg-white border border-[#E4D8CA] shadow-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-deep-teal shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-mustard">Address</p>
                        <p className="text-sm text-[#241814] leading-relaxed">
                          {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.city},{' '}
                          {BUSINESS_INFO.address.state} — <span className="tabular-nums">{BUSINESS_INFO.address.pincode}</span>
                        </p>
                        <p className="text-xs text-[#6B655C] mt-1">
                          Approx. 5–10 min walk (~1 km) from Gorakhnath Mandir
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-[28px] bg-white border border-[#E4D8CA] shadow-sm">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-deep-teal shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-mustard">Hours</p>
                        <p className="text-sm text-[#241814] leading-relaxed tabular-nums">
                          Dine-in {BUSINESS_INFO.timings.restaurant}<br />
                          Delivery {BUSINESS_INFO.timings.delivery}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-[28px] bg-white border border-[#E4D8CA] shadow-sm">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-deep-teal shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-mustard">Call Us</p>
                        <p className="text-sm text-[#241814] font-semibold tabular-nums">
                          <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="text-deep-teal hover:text-emerald transition-colors">
                            {BUSINESS_INFO.phones[0].display}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="up" className="animate-fade-up-stagger" style={{ transitionDelay: '500ms' }}>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={`https://maps.google.com/?q=Sharda%20Dinings%20East%20Rajendra%20Nagar%20Gorakhpur`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gloss-btn flex-1 min-h-[52px] px-9 py-3 bg-deep-teal hover:bg-[#0A3A46] text-white text-sm font-semibold uppercase tracking-wider rounded-md inline-flex items-center justify-center gap-2.5 transition-all"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(BUSINESS_INFO.whatsapp.defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gloss-btn flex-1 min-h-[52px] px-9 py-3 border border-[#DFD2C2] bg-white hover:bg-[#F4EFE5] text-[#241814] text-sm font-semibold uppercase tracking-wider rounded-md inline-flex items-center justify-center gap-2.5 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: Properly sized map */}
            <div className="lg:col-span-7">
              <div className="relative h-[420px] lg:h-[520px] rounded-[32px] overflow-hidden border border-[#E4D8CA]/40 shadow-xl">
                <iframe
                  title="Sharda Dinings Gorakhpur Map"
                  src="https://maps.google.com/maps?q=Sharda%20Dinings%20East%20Rajendra%20Nagar%20Gorakhpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F4]/90 to-transparent" />
                <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E4D8CA] shadow-md shrink-0">
                    <MapPin className="w-4 h-4 text-deep-teal" />
                    <a
                      href={`https://maps.google.com/?q=Sharda%20Dinings%20East%20Rajendra%20Nagar%20Gorakhpur`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-deep-teal hover:text-emerald transition-colors whitespace-nowrap"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E4D8CA] shadow-md shrink-0">
                    <MessageSquare className="w-4 h-4 text-deep-teal" />
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(BUSINESS_INFO.whatsapp.defaultMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-deep-teal hover:text-emerald transition-colors whitespace-nowrap"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
