import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Sparkles, Coffee, Utensils, Calendar, BedDouble, CheckCircle2, ChevronRight, Award, Compass, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, WheatFlourish, SpiceStar, CoffeeBeanFlourish, CutleryCrest } from '../components/DecorativeGraphics';
import {
  FloatingDishPortal,
  KineticTitle,
  FloatingSpiceCanvas,
  ScrollPop,
  ScrollSlide,
  ScrollZoom,
  ScrollRotate,
  FloatingCard,
  StaggerGrid,
  AnimatedCounter,
  StarAniseVector,
  CardamomPodVector,
  CoffeeBeanVector
} from '../components/MotionExperience';

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
      accentColor: '#C84B31',
      badgeBg: 'bg-[#C84B31]'
    },
    {
      id: 'cafe',
      tag: '02 / ARTISANAL',
      title: 'Olive Cafe & Brews',
      desc: 'Chilled espresso cold brews, thick Nutella shakes, and stone-baked pizzas in a relaxed work-friendly setting.',
      image: '/images/olive-cafe/olive-cafe-coffee.webp',
      link: '/olive-cafe',
      accentColor: '#2D6A4F',
      badgeBg: 'bg-[#2D6A4F]'
    },
    {
      id: 'banquets',
      tag: '03 / CELEBRATION',
      title: 'Banquets & Grand Galas',
      desc: 'Central air-conditioned celebration hall hosting 100 seated and 150 floating guests with royal in-house feasts.',
      image: '/images/banquets/sharda-banquet-hall.webp',
      link: '/banquets',
      accentColor: '#66182B',
      badgeBg: 'bg-[#66182B]'
    },
    {
      id: 'hotel',
      tag: '04 / SANCTUARY',
      title: 'Hotel & Boutique Stays',
      desc: '11 air-conditioned rooms featuring modern en-suite rainfall showers, elevator access, and silent generator backup.',
      image: '/images/hotel-rooms/hotel-sharda-inn-room-103.webp',
      link: '/hotel',
      accentColor: '#1D4E5B',
      badgeBg: 'bg-[#1D4E5B]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Full-Screen Animated Food Composition
          Rich Burgundy & Coral Atmosphere with Orbiting Levitating Dishes
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[94vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#240F16] via-[#1E0F14] to-[#150B0E] text-[#FAF7F2] overflow-hidden">
        {/* Glowing Radial Color Ambient Fields */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#E76F51]/25 via-[#D4AF37]/20 to-transparent blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#C84B31]/20 via-[#66182B]/30 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Spices Field */}
        <FloatingSpiceCanvas theme="culinary" density="rich" />

        {/* Orbiting Satellite Floating Dishes (Continuous Organic Floating) */}
        <div className="hidden lg:block absolute left-8 top-28 z-10">
          <FloatingCard type="vertical" intensity={16} duration={5.2}>
            <FloatingDishPortal
              src="/images/food/tandoori-veg-platter.webp"
              alt="Tandoori Vegetable Platter"
              title="Clay Tandoor Platter"
              price="₹390"
              size="sm"
              depth={1}
              rotation={-6}
              badge="Charcoal Grilled"
              glowColor="rgba(231, 111, 81, 0.45)"
            />
          </FloatingCard>
        </div>

        <div className="hidden lg:block absolute right-10 top-24 z-10">
          <FloatingCard type="reverse" intensity={14} duration={4.8}>
            <FloatingDishPortal
              src="/images/food/shanghai-chilli-paneer.webp"
              alt="Shanghai Chilli Paneer"
              title="Shanghai Chilli Paneer"
              price="₹320"
              size="sm"
              depth={2}
              rotation={8}
              badge="Wok Tossed"
              glowColor="rgba(212, 175, 55, 0.45)"
            />
          </FloatingCard>
        </div>

        <div className="hidden xl:block absolute left-14 bottom-20 z-10">
          <FloatingCard type="diagonal" intensity={12} duration={6}>
            <FloatingDishPortal
              src="/images/food/garlic-lemon-herb-chicken.webp"
              alt="Garlic Lemon Herb Roast"
              title="Garlic Herb Roast"
              price="₹410"
              size="sm"
              depth={2}
              rotation={4}
              glowColor="rgba(244, 162, 97, 0.4)"
            />
          </FloatingCard>
        </div>

        <div className="hidden xl:block absolute right-16 bottom-20 z-10">
          <FloatingCard type="vertical" intensity={15} duration={5.5}>
            <FloatingDishPortal
              src="/images/olive-cafe/olive-cafe-coffee.webp"
              alt="Artisanal Cold Brew"
              title="Espresso Cold Brew"
              price="₹180"
              size="sm"
              depth={1}
              rotation={-5}
              badge="Olive Cafe"
              glowColor="rgba(82, 121, 111, 0.45)"
            />
          </FloatingCard>
        </div>

        {/* Central Kinetic Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="01" total="07" label="PURVANCHAL HOSPITALITY DESTINATION" />
          </div>

          <div className="relative inline-block px-2">
            <KineticTitle as="h1" className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-[1.15]">
              Hospitality Redefined in Gorakhpur
            </KineticTitle>
            <span className="hidden sm:inline-block font-display italic text-xl md:text-2xl text-[#F4A261] mt-2 block animate-fade-in-up">
              Awadhi Dum Heritage · Olive Cafe · Boutique Residences
            </span>
          </div>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#FDE8E1]/90 font-light leading-relaxed">
            Multi-cuisine dining sanctum, artisanal Italian roasts, indoor celebration banquets, 
            and boutique stays located just 1 km from sacred Gorakhnath Mandir.
          </p>

          {/* Central Featured Masterpiece Dish with 3D Mouse Tilt and Pop Entrance */}
          <div className="py-2 flex justify-center">
            <ScrollPop delay={0.2} duration={0.9} overshoot={1.6}>
              <FloatingCard type="vertical" intensity={10} duration={4.2}>
                <FloatingDishPortal
                  src="/images/food/sharda-dining-biryani.webp"
                  alt="Awadhi Dum Handi Biryani"
                  title="Signature Awadhi Dum Biryani"
                  price="₹380 · Saffron & Cardamom"
                  size="lg"
                  depth={1}
                  rotation={0}
                  glowColor="rgba(244, 162, 97, 0.55)"
                  badge="House Masterpiece"
                />
              </FloatingCard>
            </ScrollPop>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenEnquiry('restaurant')}
              className="px-8 py-3.5 bg-gradient-to-r from-[#E76F51] to-[#C84B31] hover:from-[#d65f42] hover:to-[#b33e26] text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#C84B31]/40 transition-all hover:scale-105 cursor-pointer"
            >
              Reserve a Table
            </button>
            <Link
              to="/menu"
              className="px-8 py-3.5 border-2 border-[#D4AF37] hover:bg-[#D4AF37]/20 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full transition-all hover:scale-105"
            >
              Explore Full Menu
            </Link>
          </div>

          {/* Micro Status Ribbon with Animated Glowing Dot */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#FAF7F2]/80 font-mono">
            <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Daily 11:00 AM – 11:00 PM
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              Opp. Kust Seva Ashram, Sonauli Rd
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              11 AC Boutique Rooms
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: AMBIENTE GOURMET MANIFESTO & DESTINATIONS
          Warm Terracotta & Coral Atmosphere with Staggered Slide In
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#C84B31] via-[#B94E35] to-[#963822] text-[#FAF7F2] relative overflow-hidden border-y border-[#D4AF37]/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4A261]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#66182B]/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left: Dramatic Manifest & Sub-Brand Badges */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollSlide direction="left" distance={60}>
              <div className="flex items-center space-x-2 text-[#F4A261]">
                <Sparkles className="w-4 h-4 animate-badge-levitate" />
                <span className="text-[11px] uppercase font-mono tracking-widest font-bold">The Gastronomy Philosophy</span>
              </div>
            </ScrollSlide>

            <ScrollSlide direction="left" distance={80} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#FAF7F2] font-normal leading-snug">
                Sharda Dinings is a culinary sanctuary built for families who revere authentic hospitality.
              </h2>
            </ScrollSlide>

            <ScrollSlide direction="up" distance={50} delay={0.2}>
              <p className="text-xs sm:text-sm text-[#FDE8E1]/90 font-light leading-relaxed max-w-xl">
                In every handi pot, we transform slow-ground spices and time-honoured techniques into unforgettable memories. 
                Whether gathering for an Awadhi dum biryani, an afternoon cold brew at Olive Cafe, a golden anniversary celebration, 
                or a peaceful night after visiting Gorakhnath Mandir, our promise is warmth and perfection.
              </p>
            </ScrollSlide>

            {/* Sub-brand Concept Stamps with Spring Pop */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#FDE8E1] mb-3">Our Four Signature Wings</p>
              <StaggerGrid stagger={0.1} animation="pop" className="flex flex-wrap items-center gap-3">
                <Link to="/restaurant" className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-xs font-serif font-bold text-[#FAF7F2] transition-all hover:scale-105 shadow-md">
                  The Dining Sanctum
                </Link>
                <Link to="/olive-cafe" className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-xs font-serif font-bold text-[#A8D5BA] transition-all hover:scale-105 shadow-md">
                  Olive Cafe & Brews
                </Link>
                <Link to="/banquets" className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-xs font-serif font-bold text-[#FCD5CE] transition-all hover:scale-105 shadow-md">
                  Grand Banquets
                </Link>
                <Link to="/hotel" className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-xs font-serif font-bold text-[#FDE2B8] transition-all hover:scale-105 shadow-md">
                  Hotel Sharda Inn
                </Link>
              </StaggerGrid>
            </div>
          </div>

          {/* Right: Authentic Atmosphere Framing with 3D Tilt & Zoom */}
          <div className="lg:col-span-5 relative">
            <ScrollRotate rotateFrom={6} duration={1}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group">
                <img
                  src="/images/restaurant/sharda-dining-hall-wide.webp"
                  alt="Sharda Dinings dining hall"
                  className="w-full h-80 sm:h-96 object-cover filter contrast-[1.08] brightness-[0.95] group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#66182B]/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#1C1617]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center justify-between shadow-xl">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#F4A261] font-bold">Location Landmark</p>
                    <p className="text-xs font-semibold text-[#FAF7F2]">1 km from Gorakhnath Mandir</p>
                  </div>
                  <Link to="/contact" className="p-2.5 rounded-full bg-[#E76F51] text-white hover:bg-[#d65f42] transition-transform hover:scale-110 shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollRotate>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ATELIER-STYLE SPLIT-SCREEN TASTING CURATION
          Deep Emerald Teal Left vs Warm Champagne Gold Right
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/35">
            
            {/* Left 6 cols: Atelier Deep Emerald Teal Side */}
            <div className="lg:col-span-6 relative bg-gradient-to-br from-[#1B4332] via-[#132E27] to-[#0B1D19] text-[#FAF7F2] p-8 sm:p-14 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/restaurant/sharda-dining-interior-corridor.webp"
                  alt="Atmospheric dining booths"
                  className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.3] scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/90 via-[#132E27]/80 to-[#132E27]/50"></div>
              </div>

              <div className="relative z-10 space-y-4">
                <ScrollSlide direction="down" distance={40}>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#A8D5BA] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/15">
                    EST. 2010 · PURVANCHAL HERITAGE
                  </span>
                </ScrollSlide>
                
                <ScrollSlide direction="left" distance={60} delay={0.1}>
                  <h3 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#FAF7F2]">
                    Four Cuisines.<br />
                    One Sanctum.<br />
                    <span className="text-[#F4A261] italic font-normal">Zero Compromise.</span>
                  </h3>
                </ScrollSlide>

                <ScrollSlide direction="up" distance={40} delay={0.2}>
                  <p className="text-xs sm:text-sm text-[#FAF7F2]/85 max-w-sm font-light leading-relaxed">
                    Every dish is cooked fresh to order with pure spices ground on stone. 
                    No artificial essences, no frozen shortcuts.
                  </p>
                </ScrollSlide>
              </div>

              <div className="relative z-10 pt-8 flex items-center space-x-4">
                <ScrollPop delay={0.3}>
                  <button
                    onClick={() => onOpenEnquiry('restaurant')}
                    className="px-7 py-3 bg-[#E76F51] hover:bg-[#d65f42] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-lg shadow-[#E76F51]/30 cursor-pointer"
                  >
                    Book a Table
                  </button>
                </ScrollPop>
                <Link
                  to="/restaurant"
                  className="text-xs uppercase tracking-widest text-[#A8D5BA] hover:text-white font-mono transition-colors"
                >
                  The Kitchen Story →
                </Link>
              </div>
            </div>

            {/* Right 6 cols: Atelier Light Champagne Curated Tasting Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFE6] p-8 sm:p-14 relative flex flex-col justify-between">
              
              <div className="space-y-6">
                <ScrollSlide direction="right" distance={50}>
                  <div className="border-b-2 border-[#D4AF37]/30 pb-4 flex items-baseline justify-between">
                    <div>
                      <h4 className="font-serif text-2xl font-bold text-[#1C1617]">Signature Tastings</h4>
                      <p className="text-[11px] font-mono text-[#C84B31] mt-0.5 font-semibold">Chef Curations · Daily Fresh Selections</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1B4332] bg-[#A8D5BA]/30 px-2.5 py-0.5 rounded-full">Season 2026</span>
                  </div>
                </ScrollSlide>

                {/* Staggered Numbered Tasting Items */}
                <StaggerGrid stagger={0.12} animation="rise" className="space-y-4">
                  {[
                    { num: '01', name: 'Awadhi Dum Handi Biryani', sub: 'Saffron basmati rice sealed with rosewater & cardamom', price: '₹380' },
                    { num: '02', name: 'Clay Tandoori Vegetable Platter', sub: 'Charred paneer tikka, stuffed mushrooms & spiced kebabs', price: '₹390' },
                    { num: '03', name: 'Crispy Shanghai Chilli Paneer', sub: 'Wok-tossed with fresh ginger, scallions & dark soy glaze', price: '₹320' },
                    { num: '04', name: 'Garlic Lemon Herb Roast Chicken', sub: 'Whole roasted over natural lump charcoal with herb glaze', price: '₹410' }
                  ].map((item, idx) => (
                    <div key={idx} className="group border-b border-[#EFE8DC] pb-3 last:border-b-0 flex items-start justify-between hover:translate-x-1.5 transition-transform duration-300">
                      <div className="space-y-0.5 max-w-sm">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs font-bold text-[#C84B31] bg-[#FDE8E1] px-1.5 py-0.5 rounded">{item.num}</span>
                          <span className="font-serif text-base font-bold text-[#1C1617] group-hover:text-[#C84B31] transition-colors">{item.name}</span>
                        </div>
                        <p className="text-[11px] text-[#1C1617]/70 pl-8">{item.sub}</p>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#1B4332] bg-[#A8D5BA]/25 px-2.5 py-1 rounded-full shrink-0">{item.price}</span>
                    </div>
                  ))}
                </StaggerGrid>
              </div>

              {/* Overlapping Floating Dish Visual */}
              <div className="pt-6 flex items-center justify-between border-t border-[#D4AF37]/20">
                <Link
                  to="/menu"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#C84B31] hover:underline"
                >
                  <span>Explore full menu</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <FloatingCard type="diagonal" intensity={10} duration={4.5}>
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl hover:scale-110 transition-transform">
                    <img
                      src="/images/food/sharda-dinings-food-spread-clean.webp"
                      alt="Signature spread"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </FloatingCard>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: FOUR EXPERIENCES INTERACTIVE SHOWCASE
          Warm Sand & Saffron Palette with Interactive Tab Switches
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5EFE6] via-[#FAF7F2] to-[#FDF5E6] border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-[#D4AF37]/25 gap-4">
            <ScrollSlide direction="left" distance={50}>
              <div>
                <span className="text-[11px] uppercase font-mono tracking-widest text-[#C84B31] font-bold block mb-1">
                  One Address, Four Destinations
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                  Crafted for Every Milestone
                </h2>
              </div>
            </ScrollSlide>
            <ScrollSlide direction="right" distance={50}>
              <p className="text-xs text-[#1C1617]/70 max-w-xs leading-relaxed font-light">
                Explore our four distinct wings, each designed with its own atmosphere, specialized menu, and dedicated hospitality team.
              </p>
            </ScrollSlide>
          </div>

          {/* Asymmetric Split: Large Visual Left + Tab Selector Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Active Experience Large Visual Frame */}
            <div className="lg:col-span-7 relative">
              <ScrollZoom scaleFrom={0.9} duration={0.8}>
                <div className="relative h-[390px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/35 group">
                  <img
                    key={experiences[activeExperience].id}
                    src={experiences[activeExperience].image}
                    alt={experiences[activeExperience].title}
                    className="w-full h-full object-cover filter contrast-[1.08] transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/35 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#F4A261] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                      {experiences[activeExperience].tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                      {experiences[activeExperience].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FDE8E1]/90 max-w-lg leading-relaxed">
                      {experiences[activeExperience].desc}
                    </p>
                    <div className="pt-2">
                      <Link
                        to={experiences[activeExperience].link}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white font-bold transition-colors"
                      >
                        <span>Explore this wing</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollZoom>
            </div>

            {/* Right 5 cols: Fluid Interactive Selector */}
            <div className="lg:col-span-5 space-y-3">
              {experiences.map((exp, idx) => {
                const isActive = activeExperience === idx;
                return (
                  <ScrollPop key={exp.id} delay={idx * 0.08} duration={0.6}>
                    <div
                      onClick={() => setActiveExperience(idx)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border-l-4 shadow-sm ${
                        isActive
                          ? 'bg-white border-[#C84B31] shadow-lg translate-x-2'
                          : 'bg-white/60 border-transparent hover:border-[#D4AF37]/50 hover:bg-white hover:translate-x-1'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono tracking-widest font-bold ${isActive ? 'text-[#C84B31]' : 'text-[#8C6D37]'}`}>
                          {exp.tag}
                        </span>
                        <span className="text-xs font-serif font-bold text-[#1C1617]/40">0{idx + 1}</span>
                      </div>
                      <h4 className={`font-serif text-lg font-bold mt-1 ${isActive ? 'text-[#1C1617]' : 'text-[#1C1617]/75'}`}>
                        {exp.title}
                      </h4>
                      <p className="text-xs text-[#1C1617]/70 line-clamp-2 mt-1 leading-relaxed font-light">
                        {exp.desc}
                      </p>
                    </div>
                  </ScrollPop>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: OLIVE CAFE BOTANICAL SANCTUARY
          Lush Forest Green, Sage & Coral Highlights
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1E2C22] via-[#18211A] to-[#121B14] text-[#FAF7F2] relative overflow-hidden border-t-2 border-[#A8D5BA]/20">
        <FloatingSpiceCanvas theme="cafe" density="rich" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Mosaic Left (5 cols) */}
            <div className="lg:col-span-5 relative">
              <ScrollSlide direction="left" distance={60}>
                <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#A8D5BA]/30 group">
                  <img
                    src="/images/olive-cafe/olive-cafe-coffee.webp"
                    alt="Cold brew coffee at Olive Cafe"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollSlide>
              
              {/* Floating FloatingDishPortal Accent with 3D Tilt */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block">
                <FloatingCard type="diagonal" intensity={12} duration={4.8}>
                  <FloatingDishPortal
                    src="/images/olive-cafe/corn-margherita-pizza.jpg"
                    alt="Stone baked pizza"
                    title="Stone-Baked Pizza"
                    price="₹320"
                    size="sm"
                    depth={1}
                    glowColor="rgba(244, 162, 97, 0.5)"
                  />
                </FloatingCard>
              </div>
            </div>

            {/* Narrative Right (7 cols) */}
            <div className="lg:col-span-7 space-y-5 lg:pl-6">
              <ScrollSlide direction="right" distance={50}>
                <div className="flex items-center space-x-2 text-[#A8D5BA]">
                  <CoffeeBeanFlourish className="w-4 h-4 animate-badge-levitate" />
                  <span className="text-[11px] uppercase font-mono tracking-widest font-bold">The Artisanal Wing</span>
                </div>
              </ScrollSlide>
              
              <ScrollSlide direction="right" distance={70} delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#FAF7F2] font-normal leading-snug">
                  Where Italian Roasts Meet Stone-Baked Crusts
                </h2>
              </ScrollSlide>
              
              <ScrollSlide direction="up" distance={40} delay={0.2}>
                <p className="text-xs sm:text-sm text-[#EFE8DC]/85 leading-relaxed font-light">
                  Tucked inside Sharda Dinings, Olive Cafe is Gorakhpur's quiet corner for 
                  chilled caramel cold coffees, Nutella thickshakes, and bubbling thin-crust pizzas. 
                  Equipped with power points, high-speed Wi-Fi, and study-friendly seating.
                </p>
              </ScrollSlide>

              <StaggerGrid stagger={0.15} animation="pop" className="pt-2 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md">
                  <span className="text-[#A8D5BA] font-bold block text-sm">Espresso Roasts</span>
                  <span className="text-[#FAF7F2]/80 mt-1 block">From ₹140 · Arabica Blends</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md">
                  <span className="text-[#F4A261] font-bold block text-sm">Stone Pizzas & Pasta</span>
                  <span className="text-[#FAF7F2]/80 mt-1 block">From ₹320 · Durum Wheat</span>
                </div>
              </StaggerGrid>

              <ScrollPop delay={0.3}>
                <div className="pt-2">
                  <Link
                    to="/olive-cafe"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#2D6A4F] hover:bg-[#245740] text-[#FAF7F2] text-xs uppercase tracking-wider font-bold transition-all hover:scale-105 shadow-lg shadow-[#2D6A4F]/30"
                  >
                    <span>Explore Olive Cafe Menu</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollPop>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: DUAL CONTRAST PANEL — BANQUETS VS HOTEL
          Royal Burgundy vs Deep Midnight Blue
      ───────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Banquets (Royal Wine Burgundy) */}
        <div className="relative min-h-[420px] p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#4A1521] via-[#3A101A] to-[#260B11] text-[#FAF7F2] flex flex-col justify-between overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/banquets/sharda-banquet-hall.webp"
              alt="Grand banquet hall at Sharda Dinings"
              className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.25] group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A1521] via-[#3A101A]/60 to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-4">
            <ScrollSlide direction="down" distance={30}>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#F4A261] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/15">
                CELEBRATIONS & CONCLAVES
              </span>
            </ScrollSlide>
            <ScrollSlide direction="left" distance={50} delay={0.1}>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
                Indoor Banquet Pavilion
              </h3>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={30} delay={0.2}>
              <p className="text-xs sm:text-sm text-[#FDE8E1]/90 leading-relaxed font-light max-w-md">
                100 seated and 150 floating guest capacity. Complete with central air conditioning, 
                mandap lighting, and royal in-house catering in a dignified, non-alcoholic venue.
              </p>
            </ScrollSlide>
          </div>

          <div className="relative z-10 pt-8">
            <ScrollPop delay={0.25}>
              <Link
                to="/banquets"
                className="inline-flex items-center space-x-2 px-7 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4A261] hover:brightness-110 text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-xl"
              >
                <span>Explore Banquets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollPop>
          </div>
        </div>

        {/* Right: Hotel Stays (Deep Midnight Blue-Teal) */}
        <div className="relative min-h-[420px] p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#114B5F] via-[#0E3A4A] to-[#0A2631] text-[#FAF7F2] flex flex-col justify-between overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hotel-rooms/hotel-sharda-inn-room-103.webp"
              alt="Deluxe room at Hotel Sharda Dinings"
              className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.25] group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#114B5F] via-[#0E3A4A]/60 to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-4">
            <ScrollSlide direction="down" distance={30}>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#A8D5BA] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/15">
                BOUTIQUE ACCOMMODATION
              </span>
            </ScrollSlide>
            <ScrollSlide direction="right" distance={50} delay={0.1}>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
                Hotel & Guest Residences
              </h3>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={30} delay={0.2}>
              <p className="text-xs sm:text-sm text-[#FDE8E1]/90 leading-relaxed font-light max-w-md">
                11 boutique guest rooms (~240 sq. ft.) equipped with rainfall showers, 
                elevator access, and 100% generator power backup just 5–10 minutes walk from Gorakhnath Mandir.
              </p>
            </ScrollSlide>
          </div>

          <div className="relative z-10 pt-8">
            <ScrollPop delay={0.25}>
              <Link
                to="/hotel"
                className="inline-flex items-center space-x-2 px-7 py-3 border-2 border-[#A8D5BA] hover:bg-[#A8D5BA]/20 text-[#FAF7F2] text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105"
              >
                <span>Explore Hotel Stays</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollPop>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: SANCTUARY & MANDIR ACCESS (Warm Coral Peach Strip)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FDE8E1] via-[#FAF0E6] to-[#FBE8E2] border-t-2 border-[#C84B31]/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <ScrollSlide direction="left" distance={50} className="space-y-2 max-w-xl">
            <div className="flex items-center space-x-2 text-[#C84B31]">
              <MapPin className="w-4 h-4 animate-badge-levitate" />
              <span className="text-[11px] uppercase font-mono tracking-widest font-bold">Gorakhpur Landmark</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1617]">
              Opposite Kust Seva Ashram, Sonauli Road
            </h3>
            <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
              East Rajendra Nagar, NH 29, Gorakhpur. Walking distance from Gorakhnath Mandir (~1 km) with secure on-site parking.
            </p>
            
            {/* Animated Numeric Counter Strip */}
            <div className="pt-2 flex items-center space-x-6 text-xs font-mono text-[#C84B31]">
              <div><AnimatedCounter end={1} suffix=" km" className="font-bold text-base text-[#1C1617]" /> — Mandir Darshan</div>
              <span>•</span>
              <div><AnimatedCounter end={11} suffix=" Rooms" className="font-bold text-base text-[#1C1617]" /> — Boutique AC</div>
              <span>•</span>
              <div><AnimatedCounter end={2010} suffix="" className="font-bold text-base text-[#1C1617]" /> — Founded</div>
            </div>
          </ScrollSlide>

          <ScrollSlide direction="right" distance={50} className="flex items-center space-x-3 shrink-0">
            <Link
              to="/contact"
              className="px-7 py-3 bg-[#C84B31] hover:bg-[#b33e26] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-lg shadow-[#C84B31]/30"
            >
              Directions & Map
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="px-7 py-3 border-2 border-[#1C1617] hover:bg-[#1C1617] hover:text-white text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105"
            >
              Call Desk
            </a>
          </ScrollSlide>
        </div>
      </section>

    </div>
  );
}