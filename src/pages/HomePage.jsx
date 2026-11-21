import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Sparkles, Coffee, Utensils, Calendar, BedDouble, CheckCircle2, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, WheatFlourish, SpiceStar, CoffeeBeanFlourish, CutleryCrest } from '../components/DecorativeGraphics';

export default function HomePage({ onOpenEnquiry, onOpenVerification }) {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 'restaurant',
      tag: '01 / GASTRONOMY',
      title: 'The Dining Sanctum',
      desc: 'Awadhi slow-simmer handi curries and red-hot clay tandoor kebabs served in private velvet family booths.',
      image: '/images/restaurant/sharda-dining-booth.webp',
      link: '/restaurant',
      accentColor: '#B94E35',
    },
    {
      id: 'cafe',
      tag: '02 / ARTISANAL',
      title: 'Olive Cafe & Brews',
      desc: 'Chilled espresso cold brews, thick Nutella shakes, and stone-baked pizzas in a relaxed work-friendly setting.',
      image: '/images/olive-cafe/olive-cafe-coffee.webp',
      link: '/olive-cafe',
      accentColor: '#4E5D4E',
    },
    {
      id: 'banquets',
      tag: '03 / CELEBRATION',
      title: 'Banquets & Grand Galas',
      desc: 'Central air-conditioned celebration hall hosting 100 seated and 150 floating guests with royal in-house feasts.',
      image: '/images/banquets/sharda-banquet-hall.webp',
      link: '/banquets',
      accentColor: '#3D1B24',
    },
    {
      id: 'hotel',
      tag: '04 / SANCTUARY',
      title: 'Hotel & Boutique Stays',
      desc: '11 air-conditioned rooms featuring modern en-suite rainfall showers, elevator access, and silent generator backup.',
      image: '/images/hotel-rooms/hotel-sharda-inn-room-103.webp',
      link: '/hotel',
      accentColor: '#8C6D37',
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Ambiente & Mikuni Nagoya Influence
          Full-bleed dusk dining photography with layered typography
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#1C1617] text-[#FAF7F2] overflow-hidden">
        {/* Cinematic Authentic Photo Backdrop */}
        <div className="absolute inset-0 z-0 image-zoom-container">
          <img
            src="/images/restaurant/sharda-dining-hall.webp"
            alt="Sharda Dinings main dining hall ambience"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15] scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1C1617]/40 to-[#1C1617]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="01" total="07" label="HOSPITALITY DESTINATION" />
          </div>

          <div className="relative inline-block">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
              Hospitality Redefined in <span className="text-[#D4AF37] italic font-normal">Gorakhpur</span>
            </h1>
            <span className="hidden md:block absolute -top-5 -right-6 font-display italic text-2xl text-[#FAF7F2]/25 select-none pointer-events-none transform rotate-3">
              Purvanchal Royalty
            </span>
          </div>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#EFE8DC]/85 font-light leading-relaxed">
            Multi-cuisine dining, artisanal coffees at Olive Cafe, indoor celebration banquets, 
            and boutique stays located just 1 km from Gorakhnath Mandir.
          </p>

          <GildedDivider className="my-4" />

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenEnquiry('restaurant')}
              className="px-7 py-3 bg-[#B94E35] hover:bg-[#9E3F28] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-full shadow-lg shadow-[#B94E35]/30 transition-all hover:scale-105 cursor-pointer"
            >
              Reserve a Table
            </button>
            <Link
              to="/menu"
              className="px-7 py-3 border border-[#D4AF37] hover:bg-[#D4AF37]/15 text-[#D4AF37] text-xs uppercase tracking-wider font-semibold rounded-full transition-all"
            >
              Explore Full Menu
            </Link>
          </div>

          {/* Micro Status Ribbon */}
          <div className="pt-4 flex items-center justify-center space-x-6 text-[11px] text-[#FAF7F2]/65 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Open Daily 11 AM – 11 PM
            </span>
            <span>•</span>
            <span>Opp. Kust Seva Ashram</span>
            <span>•</span>
            <span>11 AC Rooms</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE HOUSE CHRONICLE (Editorial Text Reference)
          Clean warm sand panel without rectangular boxes
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EFE8DC] border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-[#B94E35]">
            <WheatFlourish className="w-4 h-4" />
            <span className="text-[10px] uppercase font-mono tracking-widest font-bold">The Heritage Chronicle</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617] font-normal leading-snug">
            A Journey of Pure Flavours & Unwavering Care
          </h2>

          <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light max-w-2xl mx-auto">
            Established in 2010 along historic Sonauli Road, Sharda Dinings was founded to provide 
            visiting devotees, families, and travelers with honest Awadhi hospitality. Every spice blend 
            is ground in-house, vegetables sourced fresh daily, and dining paced for genuine family conversation.
          </p>

          <div className="pt-3 flex items-center justify-center space-x-8 text-xs font-mono text-[#8C6D37]">
            <div><span className="font-bold text-base text-[#1C1617]">2010</span> — Founded</div>
            <span>•</span>
            <div><span className="font-bold text-base text-[#1C1617]">100%</span> — Fresh Cooked</div>
            <span>•</span>
            <div><span className="font-bold text-base text-[#1C1617]">1 km</span> — Mandir Proximity</div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: FOUR EXPERIENCES (Asymmetrical Editorial Showcase)
          Non-card layout: dynamic left hero visual + right interactive index
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EFE8DC] gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B94E35] font-bold block mb-1">
                One Address, Four Destinations
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Crafted for Every Milestone
              </h2>
            </div>
            <p className="text-xs text-[#1C1617]/60 max-w-xs leading-relaxed">
              Explore our four distinct wings, each designed with its own atmosphere and dedicated team.
            </p>
          </div>

          {/* Asymmetric Split: Featured Display Left + Elegant Strip Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Active Experience Large Visual Frame */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/30 image-zoom-container">
                <img
                  key={experiences[activeExperience].id}
                  src={experiences[activeExperience].image}
                  alt={experiences[activeExperience].title}
                  className="w-full h-full object-cover filter contrast-[1.08] animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/30 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
                    {experiences[activeExperience].tag}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                    {experiences[activeExperience].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EFE8DC]/85 max-w-lg leading-relaxed">
                    {experiences[activeExperience].desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={experiences[activeExperience].link}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-[#D4AF37] hover:underline font-semibold"
                    >
                      <span>Explore this experience</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Fluid Interactive Selector (NO BOX CARDS) */}
            <div className="lg:col-span-5 space-y-2">
              {experiences.map((exp, idx) => {
                const isActive = activeExperience === idx;
                return (
                  <div
                    key={exp.id}
                    onClick={() => setActiveExperience(idx)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-l-2 ${
                      isActive
                        ? 'bg-white border-[#D4AF37] shadow-sm pl-5'
                        : 'border-transparent hover:border-black/20 hover:bg-black/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-[#8C6D37] font-semibold">
                        {exp.tag}
                      </span>
                      <span className="text-xs font-serif font-bold text-[#1C1617]/40">0{idx + 1}</span>
                    </div>
                    <h4 className={`font-serif text-lg font-bold mt-0.5 ${isActive ? 'text-[#1C1617]' : 'text-[#1C1617]/70'}`}>
                      {exp.title}
                    </h4>
                    <p className="text-xs text-[#1C1617]/60 line-clamp-2 mt-1 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: SIGNATURE DISHES (Côte & Cendre Magazine Flow)
          Deep Charcoal with 4 Authentic Dishes & Clean Horizontal Flow
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1C1617] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              Culinary Signatures
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#FAF7F2] font-normal">
              Flavours That Define Our Kitchen
            </h2>
            <p className="text-xs text-[#FAF7F2]/65 leading-relaxed">
              Every recipe is slow-simmered in copper handis or charred over fragrant charcoal lump wood.
            </p>
          </div>

          {/* Fluid 4-Photo Collage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Awadhi Dum Handi Biryani',
                price: '₹380',
                note: 'Saffron basmati rice sealed with rosewater & cardamom',
                image: '/images/food/sharda-dining-biryani.webp'
              },
              {
                name: 'Tandoori Vegetable Platter',
                price: '₹390',
                note: 'Clay-oven charred cottage cheese, stuffed mushrooms & spiced kebabs',
                image: '/images/food/tandoori-veg-platter.webp'
              },
              {
                name: 'Crispy Shanghai Chilli Paneer',
                price: '₹320',
                note: 'Wok-tossed with fresh bell peppers, mountain ginger & scallions',
                image: '/images/food/shanghai-chilli-paneer.webp'
              },
              {
                name: 'Garlic Lemon Herb Roast',
                price: '₹410',
                note: 'Whole chicken roasted over natural charcoal with lemon butter glaze',
                image: '/images/food/garlic-lemon-herb-chicken.webp'
              }
            ].map((dish, i) => (
              <div key={i} className="group overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all">
                <div className="h-52 overflow-hidden image-zoom-container relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover filter contrast-[1.08]"
                  />
                  <div className="absolute top-3 right-3 bg-[#1C1617]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                    {dish.price}
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#FAF7F2] group-hover:text-[#D4AF37] transition-colors">
                    {dish.name}
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/65 line-clamp-2 leading-relaxed">
                    {dish.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white font-mono transition-colors"
            >
              <span>View complete menu & tariffs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: OLIVE CAFE & ARTISANAL BREWS
          Botanical Slate Accent with Asymmetrical Split
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Mosaic Left (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#4E5D4E]/30 image-zoom-container">
                <img
                  src="/images/olive-cafe/olive-cafe-coffee.webp"
                  alt="Cold brew coffee at Olive Cafe"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              {/* Floating Accent */}
              <div className="absolute -bottom-4 -right-4 bg-[#4E5D4E] text-[#FAF7F2] p-4 rounded-xl shadow-xl max-w-[200px]">
                <p className="text-[10px] uppercase font-mono tracking-widest font-bold">Olive Cafe</p>
                <p className="text-xs mt-1">Open 11 AM – 11 PM with high-speed Wi-Fi.</p>
              </div>
            </div>

            {/* Narrative Right (7 cols) */}
            <div className="lg:col-span-7 space-y-4 lg:pl-6">
              <div className="flex items-center space-x-2 text-[#4E5D4E]">
                <CoffeeBeanFlourish className="w-4 h-4" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold">Artisanal Wing</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617] font-normal leading-snug">
                Where Italian Roasts Meet Stone-Baked Crusts
              </h2>
              <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                Tucked inside Sharda Dinings, Olive Cafe is Gorakhpur's quiet corner for 
                chilled caramel cold coffees, Nutella thickshakes, and bubbling thin-crust pizzas. 
                Equipped with power points and study-friendly seating.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white border border-[#EFE8DC]">
                  <span className="text-[#4E5D4E] font-bold block">Espresso Roasts</span>
                  <span className="text-[#1C1617]/70">From ₹140</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#EFE8DC]">
                  <span className="text-[#4E5D4E] font-bold block">Stone Pizzas & Pasta</span>
                  <span className="text-[#1C1617]/70">From ₹320</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/olive-cafe"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#4E5D4E] hover:underline font-bold"
                >
                  <span>Explore Olive Cafe</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: ATELIER SPLIT-SCREEN — BANQUETS VS HOTEL
          50/50 Dual Contrast Panel
      ───────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Banquets (Wine Palette) */}
        <div className="relative min-h-[380px] p-8 sm:p-12 lg:p-16 bg-[#2A1319] text-[#FAF7F2] flex flex-col justify-between overflow-hidden group">
          <div className="absolute inset-0 z-0 image-zoom-container">
            <img
              src="/images/banquets/sharda-banquet-hall.webp"
              alt="Grand banquet hall at Sharda Dinings"
              className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1319] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
              CELEBRATIONS & CONCLAVES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              Indoor Banquet Pavilion
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed font-light max-w-md">
              100 seated and 150 floating guest capacity. Complete with central air conditioning, 
              mandap lighting, and royal in-house catering in a dignified, non-alcoholic venue.
            </p>
          </div>

          <div className="relative z-10 pt-6">
            <Link
              to="/banquets"
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full transition-all"
            >
              <span>Explore Banquets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right: Hotel Stays (Mahogany Palette) */}
        <div className="relative min-h-[380px] p-8 sm:p-12 lg:p-16 bg-[#1C1617] text-[#FAF7F2] flex flex-col justify-between overflow-hidden group">
          <div className="absolute inset-0 z-0 image-zoom-container">
            <img
              src="/images/hotel-rooms/hotel-sharda-inn-room-103.webp"
              alt="Deluxe room at Hotel Sharda Dinings"
              className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
              BOUTIQUE ACCOMMODATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              Hotel & Guest Residences
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed font-light max-w-md">
              11 boutique guest rooms (~240 sq. ft.) equipped with rainfall showers, 
              elevator access, and 100% generator power backup just 5–10 minutes walk from Gorakhnath Mandir.
            </p>
          </div>

          <div className="relative z-10 pt-6">
            <Link
              to="/hotel"
              className="inline-flex items-center space-x-2 px-6 py-2.5 border border-[#D4AF37] hover:bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-full transition-all"
            >
              <span>Explore Hotel Stays</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: SANCTUARY & MANDIR ACCESS
          Warm Sand strip with Wayfinding
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EFE8DC] border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center space-x-2 text-[#B94E35]">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold">Gorakhpur Landmark</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1617]">
              Opposite Kust Seva Ashram, Sonauli Road
            </h3>
            <p className="text-xs text-[#1C1617]/70 leading-relaxed">
              East Rajendra Nagar, NH 29, Gorakhpur. Walking distance from Gorakhnath Mandir (~1 km) with secure on-site parking.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#B94E35] hover:bg-[#9E3F28] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all"
            >
              Directions & Map
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="px-6 py-2.5 border border-[#1C1617]/30 hover:border-[#1C1617] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full transition-all"
            >
              Call Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
