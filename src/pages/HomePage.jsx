import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ExternalLink, MapPin, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EditorialImage, SectionHeader } from '../components/SiteBlocks';
import {
  FloatingBotanicalAccents,
  FloatingLanternParticles,
  OrbitalRingBackdrop,
  ParallaxLayer,
  PromotionalTicker,
  Reveal,
  UnifiedGalleryStream,
} from '../components/MotionBlocks';
import { usePageSeo } from '../utils/seo';
import spiceStillLife from '../assets/images/editorial_spice_brass_1795187016285.jpg';
import oliveBotanicalStillLife from '../assets/images/botanical_olive_stilllife_1795187016246.jpg';
import dalMakhaniImg from '../assets/images/dal_makhani_naan_1795201046179.jpg';

const UNIFIED_HOSPITALITY_STREAM = [
  { src: '/images/restaurant/sharda-dining.webp', label: 'Velvet Booths & Chandeliers', shape: 'portrait' },
  { src: '/images/food/tandoori-veg-platter.webp', label: 'Charcoal Paneer Platter', shape: 'landscape' },
  { src: '/images/olive-cafe/olive-cafe-coffee.webp', label: 'Olive Cafe Espresso Pours', shape: 'arch' },
  { src: '/images/food/sharda-dinings-hyderabadi-biryani.webp', label: 'Saffron Handi Biryani · ₹380', shape: 'square' },
  { src: '/images/banquets/sharda-wedding-stage-floral-rings.webp', label: 'Floral Mandap & Banquet Stage', shape: 'wide' },
  { src: '/images/food/shanghai-chilli-paneer.webp', label: 'Crispy Chilli Paneer · ₹320', shape: 'portrait' },
  { src: '/images/hotel-rooms/hotel-sharda-inn-room-103.webp', label: 'Deluxe AC Room 103', shape: 'landscape' },
  { src: '/images/olive-cafe/creamy-alfredo-pasta.webp', label: 'White Sauce Alfredo Penne · ₹320', shape: 'portrait' },
  { src: '/images/olive-cafe/sharda-dinings-cheese-cake.webp', label: 'Lotus Biscoff Cheesecake', shape: 'square' },
  { src: dalMakhaniImg, label: 'Dal Makhani (Culinary Styling)', shape: 'landscape' },
];

const CULINARY_SIGNATURES = [
  { name: 'Dal Makhani Sharda Signature', course: 'Slow-Simmered Veg Main', price: '₹340' },
  { name: 'Paneer Punjabi Tadka / Butter Masala', course: 'Cashew Tomato Gravy', price: '₹345' },
  { name: 'Vegetable Dum Biryani Awadhi', course: 'Handi Saffron Rice', price: '₹380' },
  { name: 'Classic Butter Chicken', course: 'Charred Tikka Makhani', price: '₹460' },
];

const CAFE_HIGHLIGHTS = [
  { name: 'Classic & Caramel Cold Coffee', price: '₹180', detail: 'Espresso shaken over chilled cream & caramel' },
  { name: 'KitKat / Nutella Oreo Thick Shake', price: '₹230', detail: 'Blended hazelnut, Oreo crumble & crisp wafer' },
  { name: 'Signature Grilled Club Sandwich', price: '₹250', detail: 'Triple-decker toasted cheddar & mint slaw' },
  { name: 'Creamy Alfredo / Arrabbiata Penne', price: '₹320', detail: 'Served alongside buttered garlic toast' },
  { name: 'Margherita / Corn Cheese Pizza', price: '₹340', detail: 'Hand-stretched thin crust baked fresh to order' },
];

const CONSENSUS_NOTES = [
  {
    source: '4.3 / 5 Public Justdial Consensus · 4,000+ Ratings',
    quote:
      'Praised across Gorakhpur families and pilgrims for fresh vegetarian & non-vegetarian flavors and walking proximity to Gorakhnath Mandir.',
  },
  {
    source: '3.9 – 4.2 / 5 MakeMyTrip & Goibibo Range',
    quote:
      'Guests highlight quiet clean Deluxe rooms (~240 sq.ft.), cooperative front desk care, free parking, and quick room service upstairs.',
  },
  {
    source: 'Family & Toddler Hospitality Listings',
    quote:
      'Directories note thoughtful touches—including toddler high chairs and soothing lighting—suited for relaxed multi-generational dining.',
  },
];

export default function HomePage({ onOpenEnquiry, onOpenVerification }) {
  usePageSeo({
    title: 'Sharda Dinings — Restaurant, Olive Cafe, Banquets & Hotel in Gorakhpur',
    description:
      'Discover Sharda Dinings in East Rajendra Nagar near Gorakhnath Mandir, Gorakhpur: multi-cuisine dining, Olive Cafe, banquet hall, and Hotel Sharda Dinings AC rooms.',
    image: '/images/home/sharda-dinings-exterior-night.webp',
  });

  return (
    <div className="bg-[#FAF7F2] text-[#241814]">
      {/* SECTION 1: BROADSHEET DISPLAY HEADER + LAYERED ARCHITECTURAL MOSAIC STAGE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FAF2E8] to-[#F5ECE0] pt-10 pb-16 lg:pt-14 lg:pb-24">
        <OrbitalRingBackdrop
          size={580}
          opacity={0.14}
          strokeColor="#D99B38"
          secondaryColor="#6E2434"
          className="hidden lg:block absolute -right-24 -top-24 w-[580px] h-[580px]"
        />
        <FloatingBotanicalAccents color="#C8933B" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Upper Broadsheet Typographic Composition */}
          <div className="space-y-7 border-b border-[#DFD2C2] pb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6E2434]">
              East Rajendra Nagar · 763 A, Sonauli Road (NH 29) · ~1 km from Gorakhnath Mandir
            </p>
            <h1 className="font-serif text-[clamp(2.55rem,5vw,4.35rem)] font-medium leading-[1.03] tracking-[-0.02em] text-[#241814] max-w-5xl animate-rise">
              One hospitality landmark for <em className="italic font-normal text-[#6E2434]">family dining, Olive Cafe,</em> banquets &amp; quiet AC stays.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-2">
              <p className="md:col-span-6 text-sm sm:text-base text-[#5E5049] leading-relaxed max-w-xl">
                Serving Gorakhpur families, temple pilgrims, coffee regulars, and milestone celebrations from 11:00 AM daily—anchored opposite Kust Seva Ashram along the temple road.
              </p>
              <div className="md:col-span-6 flex flex-wrap md:justify-end items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('restaurant')}
                  className="gloss-btn min-h-[44px] px-6 py-3 bg-[#6E2434] hover:bg-[#511825] text-white text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 transition-all whitespace-nowrap"
                >
                  <span>Reserve Table or Stay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/menu"
                  className="min-h-[44px] px-5 py-3 border border-[#241814]/25 bg-white/80 hover:bg-white text-[#241814] text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <span>Browse Digital Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Lower Staggered Overlapping 4-Wing Photo Stage */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <EditorialImage
                src="/images/home/sharda-dinings-exterior-night.webp"
                alt="Illuminated Sharda Dinings and Olive Cafe evening facade in East Rajendra Nagar"
                frameClassName="arch-frame shadow-xl border border-white/80"
                aspect="aspect-[4/5]"
                loading="eager"
                fetchPriority="high"
                caption="Illuminated street facade, Opposite Kust Seva Ashram."
              />
            </div>

            <div className="col-span-6 md:col-span-3 lg:col-span-3 space-y-5">
              <ParallaxLayer speed={-14}>
                <EditorialImage
                  src="/images/restaurant/sharda-dining-buddha-wall.webp"
                  alt="Fluted stone Buddha relief wall inside Sharda Dinings family dining hall"
                  frameClassName="rounded-xl shadow-lg border border-white/80"
                  aspect="aspect-[3/4]"
                  loading="eager"
                  caption="Buddha Alcove Dining"
                />
              </ParallaxLayer>
              <EditorialImage
                src="/images/olive-cafe/olive-cafe-coffee.webp"
                alt="Cappuccinos and cold coffee served at Olive Cafe"
                frameClassName="rounded-xl shadow-md border border-white/80"
                aspect="aspect-square"
                caption="Olive Cafe Espresso"
              />
            </div>

            <div className="col-span-6 md:col-span-3 lg:col-span-4 space-y-5 lg:pt-10">
              <EditorialImage
                src="/images/banquets/sharda-wedding-stage-floral-rings.webp"
                alt="Indoor banquet hall with circular floral wedding rings"
                frameClassName="rounded-xl shadow-lg border border-white/80"
                aspect="aspect-[16/10]"
                caption="AC Banquet Floor (100 Seated / 150 Floating)"
              />
              <ParallaxLayer speed={14}>
                <EditorialImage
                  src="/images/hotel-rooms/hotel-sharda-inn-room-103.webp"
                  alt="Hotel Sharda Dinings Deluxe AC bedroom"
                  frameClassName="rounded-xl shadow-md border border-white/80"
                  aspect="aspect-[4/3]"
                  caption="Hotel Sharda Dinings AC Suites"
                />
              </ParallaxLayer>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TYPOGRAPHY-LED INDIGO MANIFESTO & SPECIFICATION LEDGER (ZERO PHOTO CARDS) */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-[#1D2E42] text-[#FAF7F2]">
        <FloatingLanternParticles color="#EAB963" count={6} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal variant="left" className="lg:col-span-7 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#EAB963]">
              House Chronicle · Gorakhnath Temple Road
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.1] text-white">
              Unhurried tables downstairs, espresso &amp; celebrations mid-floor, calm rooms above.
            </h2>
            <p className="text-sm sm:text-base text-[#D3DFEC] leading-relaxed max-w-2xl first-letter:text-5xl first-letter:font-serif first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#EAB963]">
              Since opening along Sonauli Road in East Rajendra Nagar, Sharda Dinings has grown into a trusted multi-wing address for local families, students, corporate visitors, and pilgrims walking ~1 km from Gorakhnath Mandir. Every floor maintains non-alcoholic hospitality, crisp AC interiors, and freshly cooked dishes to order.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link
                to="/restaurant"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EAB963] hover:text-white transition-colors"
              >
                <span>Step Inside Dining Room</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={onOpenVerification}
                className="text-xs font-semibold uppercase tracking-wider text-[#C6D4E3] hover:text-white underline underline-offset-4 transition-colors"
              >
                Inspect Verification Ledger
              </button>
            </div>
          </Reveal>

          <Reveal variant="right" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/15 pt-8 lg:pt-0 lg:pl-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EAB963] mb-4">
              At-A-Glance Coordinates
            </p>
            <dl className="divide-y divide-white/12 border-y border-white/12 text-xs sm:text-sm">
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-[#C2D0E0]">Dine-In &amp; Olive Cafe</dt>
                <dd className="font-semibold text-white tabular-nums">{BUSINESS_INFO.timings.restaurant}</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-[#C2D0E0]">Online Delivery Window</dt>
                <dd className="font-semibold text-white tabular-nums">{BUSINESS_INFO.timings.delivery}</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-[#C2D0E0]">Average Dining Check</dt>
                <dd className="font-semibold text-[#EAB963] tabular-nums">{BUSINESS_INFO.avgCostForTwo} for two</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-[#C2D0E0]">Banquet Capacity</dt>
                <dd className="font-semibold text-white tabular-nums">100 Seated · 150 Floating</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-[#C2D0E0]">Hotel Rooms (240 sq.ft.)</dt>
                <dd className="font-semibold text-white tabular-nums">Check-in 12 PM · Out 11 AM</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: UNIFIED RIGHT-TO-LEFT CONTINUOUS HORIZONTAL PHOTO GALLERY — Warm Champagne */}
      <section className="py-16 lg:py-22 bg-[#F5ECE0] border-b border-[#E4D6C4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Across Every Floor"
            title="A continuous walkthrough from tandoor tables to guest rooms."
          />
          <p className="text-xs sm:text-sm text-[#5E5049] max-w-xs leading-relaxed">
            Unified right-to-left architectural stream—hover over any photograph to pause or use the gallery control below.
          </p>
        </div>

        <UnifiedGalleryStream
          pauseLabel="Gallery"
          items={UNIFIED_HOSPITALITY_STREAM}
          speed="slow"
        />
      </section>

      <PromotionalTicker
        items={[
          'Dine-In & Olive Cafe Open Daily 11:00 AM – 11:00 PM',
          'Order Online via Zomato, Swiggy & Magicpin (12:00 PM – 9:45 PM)',
          'Banquet Hall: 100 Seated / 150 Floating Celebrations',
          'Hotel Sharda Dinings: Deluxe & Super Deluxe AC Rooms on MakeMyTrip & Goibibo',
          '~1 km from Historic Gorakhnath Mandir · Free Self-Parking On Site',
        ]}
      />

      {/* SECTION 4: FULL-BLEED OVERLAID CULINARY SPREAD (IMMERSIVE DARK SCRIM COMPOSITE) */}
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

      {/* SECTION 5: OLIVE CAFE 3-COLUMN GALLERY WHITE EDITORIAL BROADSHEET */}
      <section className="py-18 lg:py-26 bg-white border-b border-[#E6D9CB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#144035]">
              Olive Cafe Wing · Open {BUSINESS_INFO.timings.oliveCafe}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.95rem] font-medium leading-[1.08] text-[#241814]">
              Espresso pours, <em className="italic font-normal text-[#144035]">thick shakes</em> &amp; stone-baked slices until 11 PM.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <Reveal variant="left" className="lg:col-span-4 max-w-xs mx-auto lg:max-w-none w-full">
              <EditorialImage
                src="/images/olive-cafe/olive-cafe-coffee.webp"
                alt="Freshly brewed lattes and iced black coffee served inside Olive Cafe"
                frameClassName="arch-frame shadow-lg"
                aspect="aspect-[3/4]"
                caption="Crafted cold coffees & lattes poured daily."
              />
            </Reveal>

            <Reveal className="lg:col-span-4 space-y-6">
              <div className="divide-y divide-[#E4D8CA] border-y border-[#E4D8CA]">
                {CAFE_HIGHLIGHTS.map((item) => (
                  <div key={item.name} className="py-3.5 flex items-baseline justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg text-[#241814]">{item.name}</h3>
                      <p className="text-xs text-[#5E5049] mt-0.5">{item.detail}</p>
                    </div>
                    <span className="font-serif text-lg font-semibold text-[#144035] tabular-nums shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/olive-cafe"
                className="gloss-btn w-full min-h-[44px] px-5 py-3 bg-[#144035] hover:bg-[#0D2C24] text-white text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore Olive Cafe Wing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <Reveal variant="right" className="lg:col-span-4 relative max-w-sm mx-auto lg:max-w-none w-full">
              <EditorialImage
                src="/images/food/sharda-dinings-table-spread.webp"
                alt="Olive Cafe club sandwich, creamy Alfredo penne, cappuccino and iced mint tea table spread"
                frameClassName="rounded-xl shadow-lg"
                aspect="aspect-[4/3]"
              />
              <div className="mt-4 sm:-mt-8 sm:ml-auto sm:w-44 relative z-10 bg-white p-2 rounded-xl shadow-md border border-[#E4D8CA]">
                <EditorialImage
                  src={oliveBotanicalStillLife}
                  alt="Olive Cafe botanical coffee still life study"
                  frameClassName="rounded-lg"
                  aspect="aspect-[4/3]"
                  caption="Complimentary Wi-Fi seating."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: EDGE-TO-EDGE 50/50 VERTICAL SPLIT-SCREEN DIPTYCH (BANQUETS vs HOTEL) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#DFD2C2]">
        {/* Left Half: Banquets & Celebrations (Warm Apricot) */}
        <div className="bg-[#FBEAE0] px-6 sm:px-10 lg:px-14 py-14 lg:py-20 flex flex-col justify-between gap-8 border-b lg:border-b-0 lg:border-r border-[#E8C9B7]">
          <div className="space-y-4 max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E2434] tabular-nums">
              03 · Celebration Floor · 100 Seated / 150 Floating
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#241814] leading-[1.1]">
              Engagements, Haldi mornings &amp; indoor receptions.
            </h2>
            <p className="text-sm text-[#5E5049] leading-relaxed">
              Climate-controlled indoor hall with exclusive veg, non-veg &amp; Jain kitchens, empanelled floral decorators, DJ sound desk, and non-alcoholic family hospitality.
            </p>
          </div>

          <div className="space-y-5 max-w-xl">
            <EditorialImage
              src="/images/banquets/sharda-wedding-stage-floral-rings.webp"
              alt="Floral circular ring wedding stage inside Sharda Dinings banquet hall"
              frameClassName="rounded-xl shadow-md"
              aspect="aspect-[16/9]"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <span className="text-xs font-medium text-[#6E2434] tabular-nums">
                In-House Catering · Lift Access · Free Parking
              </span>
              <Link
                to="/banquets"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#241814] hover:text-[#6E2434] underline underline-offset-4"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Half: Hotel Sharda Dinings (Cool Slate Mist) */}
        <div className="bg-[#EAF0F6] px-6 sm:px-10 lg:px-14 py-14 lg:py-20 flex flex-col justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1D2E42] tabular-nums">
              04 · Hotel Stays · ~{BUSINESS_INFO.roomTariffRange}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#241814] leading-[1.1]">
              Deluxe (~240 sq.ft.) &amp; Super Deluxe AC bedrooms.
            </h2>
            <p className="text-sm text-[#3F5166] leading-relaxed">
              King beds, work stations, rainfall showers, 100% power backup, free parking, and direct upstairs meal service walking distance from Gorakhnath Mandir.
            </p>
          </div>

          <div className="space-y-5 max-w-xl">
            <EditorialImage
              src="/images/hotel-rooms/hotel-sharda-inn-240-sq-ft-city-view-room.webp"
              alt="Deluxe 240 sq.ft. air-conditioned king bedroom at Hotel Sharda Dinings"
              frameClassName="rounded-xl shadow-md"
              aspect="aspect-[16/9]"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <span className="text-xs font-medium text-[#1D2E42] tabular-nums">
                Check-In {BUSINESS_INFO.timings.hotelCheckIn} · Check-Out {BUSINESS_INFO.timings.hotelCheckOut}
              </span>
              <Link
                to="/hotel"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D2E42] hover:text-[#6E2434] underline underline-offset-4"
              >
                <span>Inspect Rooms &amp; Book</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GUEST CONSENSUS STRIP & VISIT MAP DIRECTORY — Alabaster Linen */}
      <section className="py-16 lg:py-22 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Open 3-Column Unboxed Guest Consensus Voices */}
          <div className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E2434]">
              Public Platform Consensus
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#DFD2C2] pt-6">
              {CONSENSUS_NOTES.map((item) => (
                <div key={item.source} className="space-y-2.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8C5E12] tabular-nums">
                    {item.source}
                  </p>
                  <p className="font-serif italic text-lg text-[#241814] leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Live Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#DFD2C2] pt-12">
            <div className="lg:col-span-5 space-y-5">
              <SectionHeader
                eyebrow="Directions &amp; Direct Desk"
                title="Opposite Kust Seva Ashram, Sonauli Road / NH 29."
              />
              <div className="space-y-3 text-sm text-[#5E5049]">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#6E2434] shrink-0 mt-1" />
                  <span>
                    {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.city}{' '}
                    <span className="tabular-nums">{BUSINESS_INFO.address.pincode}</span>
                  </span>
                </p>
                <p className="flex items-start gap-2.5 tabular-nums">
                  <Clock className="w-4 h-4 text-[#6E2434] shrink-0 mt-1" />
                  <span>Dine-in {BUSINESS_INFO.timings.restaurant} · Delivery {BUSINESS_INFO.timings.delivery}</span>
                </p>
                <p className="flex items-start gap-2.5 tabular-nums">
                  <Phone className="w-4 h-4 text-[#6E2434] shrink-0 mt-1" />
                  <span>
                    <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="font-semibold text-[#241814] hover:text-[#6E2434]">
                      {BUSINESS_INFO.phones[0].display}
                    </a>{' '}
                    ·{' '}
                    <a href={`tel:${BUSINESS_INFO.phones[1].number}`} className="font-semibold text-[#241814] hover:text-[#6E2434]">
                      {BUSINESS_INFO.phones[1].display}
                    </a>
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/contact"
                  className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#241814] hover:bg-[#6E2434] text-white text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 transition-colors"
                >
                  <span>Contact &amp; Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
                    BUSINESS_INFO.whatsapp.defaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-5 py-2.5 border border-[#CDBEAE] bg-white hover:bg-[#F5ECE0] text-[#241814] text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#6E2434]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/9] max-h-[320px] w-full overflow-hidden rounded-xl border border-[#DFD2C2] bg-[#E8DFD1] shadow-sm">
                <iframe
                  title="Sharda Dinings Gorakhpur Map"
                  src="https://maps.google.com/maps?q=Sharda%20Dinings%20East%20Rajendra%20Nagar%20Gorakhpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
