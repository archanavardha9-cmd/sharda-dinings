import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Users, Calendar, Sparkles, CheckCircle2, ChevronRight, MessageSquare, Utensils, Star, ShieldCheck, HeartHandshake, Baby } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, WheatFlourish, SpiceStar } from '../components/DecorativeGraphics';
import {
  FloatingDishPortal,
  KineticTitle,
  FloatingSpiceCanvas,
  RisingGrainsCanvas,
  InteractiveDishStage,
  ScrollPop,
  ScrollSlide,
  ScrollZoom,
  ScrollRotate,
  FloatingCard,
  StaggerGrid,
  AnimatedCounter
} from '../components/MotionExperience';

export default function RestaurantPage({ onOpenEnquiry, onOpenVerification }) {
  const [activeTradition, setActiveTradition] = useState(0);
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    date: '',
    time: '20:00',
    guests: '4 Guests',
    seating: 'Velvet Family Booth',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const traditions = [
    {
      roman: 'I',
      title: 'Awadhi Dum & Handi',
      subtitle: 'Fragrant Kacchi Handi & Slow-Simmered Gravies',
      desc: 'Meat and paneer simmered in copper handis sealed with dough, infusing saffron, rose petals, and hand-ground garam masalas over slow embers.',
      image: '/images/food/sharda-dining-biryani.webp',
      badge: 'Chef Signature',
      highlights: ['Handi Dum Biryani with saffron rice', 'Dal Makhani slow-simmered 18 hours', 'Shahi Malai Kofta in cashew glaze']
    },
    {
      roman: 'II',
      title: 'Live Clay Tandoor',
      subtitle: 'Smoky Charcoal Skewers & Gilded Breads',
      desc: 'Our authentic clay tandoor burns natural lump charcoal, imparting woodsmoke aroma to spiced paneer tikka, whole roast chicken, and garlic kulchas.',
      image: '/images/food/tandoori-veg-platter.webp',
      badge: 'Woodsmoke Infused',
      highlights: ['Tandoori Vegetable Platter', 'Garlic Lemon Herb Roast Chicken', 'Pudina Lacha Paratha & Butter Naan']
    },
    {
      roman: 'III',
      title: 'Indo-Chinese & Wok',
      subtitle: 'Sichuan Heat, Crisp Tosses & Steaming Broths',
      desc: 'High-flame wok cooking balancing crisp textures with fresh ginger, scallions, and dark soy glazes suited to Indian palates.',
      image: '/images/food/shanghai-chilli-paneer.webp',
      badge: 'Crisp & Spiced',
      highlights: ['Shanghai Crispy Chilli Paneer', 'Handmade Wonton Broth', 'Golden Vegetable Spring Rolls']
    },
    {
      roman: 'IV',
      title: 'Satvik & Jain Care',
      subtitle: 'Dietary Respect for Devotees & Pilgrims',
      desc: 'Just 1 km from Gorakhnath Mandir, our kitchen maintains separate utensil protocols for devotees requesting pure vegetarian food with no onion and no garlic.',
      image: '/images/food/sharda-dinings-food-spread-clean.webp',
      badge: 'Mandir Pilgrim Care',
      highlights: ['Dedicated No-Onion No-Garlic gravies', 'Separate cookware & tawa surfaces', 'Fresh toddler-friendly mild bowls']
    }
  ];

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (!reservation.name || !reservation.phone) return;

    const message = `Hello Sharda Dinings, please confirm table reservation:\n\nGuest: ${reservation.name}\nPhone: ${reservation.phone}\nDate: ${reservation.date || 'Flexible'} at ${reservation.time}\nGuests: ${reservation.guests}\nSeating: ${reservation.seating}\nNotes: ${reservation.notes || 'None'}`;
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(message)}`;
    
    setFormSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Deep Royal Burgundy & Terracotta
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2B101D] via-[#1F0C15] to-[#14080E] text-[#FAF7F2] overflow-hidden">
        {/* Cinematic Backdrop with Depth & Color Pulse */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/restaurant/sharda-dining-hall.webp"
            alt="Sharda Dinings main dining hall"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.25] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14080E] via-[#2B101D]/70 to-[#2B101D]/50"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E76F51]/20 blur-3xl animate-pulse-glow"></div>
        </div>

        {/* Ambient Floating Spices & Rising Basmati Grains */}
        <FloatingSpiceCanvas theme="culinary" density="rich" />
        <RisingGrainsCanvas />

        {/* Floating Side Dishes */}
        <div className="hidden lg:block absolute left-8 top-32 z-10">
          <FloatingCard type="vertical" intensity={15} duration={5}>
            <FloatingDishPortal
              src="/images/food/sharda-dining-biryani.webp"
              alt="Awadhi Biryani"
              title="Dum Handi Biryani"
              subtitle="Awadhi Dum Special"
              size="sm"
              depth={1}
              rotation={-6}
              glowColor="rgba(244, 162, 97, 0.5)"
            />
          </FloatingCard>
        </div>

        <div className="hidden lg:block absolute right-8 top-28 z-10">
          <FloatingCard type="reverse" intensity={14} duration={4.8}>
            <FloatingDishPortal
              src="/images/food/tandoori-veg-platter.webp"
              alt="Tandoori Platter"
              title="Clay Tandoor"
              subtitle="Charcoal Embers"
              size="sm"
              depth={2}
              rotation={5}
              glowColor="rgba(231, 111, 81, 0.5)"
            />
          </FloatingCard>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="02" total="07" label="RESTAURANT & GASTRONOMY" />
          </div>

          <KineticTitle as="h1" className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            The Culinary Sanctum
          </KineticTitle>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#FDE8E1]/90 font-light leading-relaxed">
            Gorakhpur’s destination for slow-simmered Awadhi handi curries, live charcoal tandoor skewers, 
            and private velvet booth dining just minutes from sacred Gorakhnath Temple.
          </p>

          <GildedDivider className="my-4" />

          {/* Quick Metrics Strip */}
          <StaggerGrid stagger={0.1} animation="pop" className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1 text-xs font-mono max-w-2xl mx-auto">
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/15 text-[#F4A261] font-bold text-center">11:00 AM – 11:00 PM Daily</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/15 text-[#FAF7F2] text-center">North Indian & Indo-Chinese</span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/15 text-[#A8D5BA] font-bold text-center">Dedicated Satvik & Jain Cookware</span>
          </StaggerGrid>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
            <ScrollPop delay={0.2} className="w-full sm:w-auto">
              <a
                href="#reservation-suite"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center min-h-[46px] px-8 py-3.5 bg-gradient-to-r from-[#E76F51] to-[#C84B31] hover:brightness-110 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#C84B31]/40 transition-all hover:scale-105"
              >
                Reserve a Table
              </a>
            </ScrollPop>
            <ScrollPop delay={0.3} className="w-full sm:w-auto">
              <Link
                to="/menu"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center min-h-[46px] px-8 py-3.5 border-2 border-[#D4AF37] hover:bg-[#D4AF37]/20 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full transition-all hover:scale-105"
              >
                Explore Full Menu
              </Link>
            </ScrollPop>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: ARCHITECTURAL COMFORT & VELVET BOOTHS
          Rich Warm Peach, Terracotta & Champagne
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF8F3] via-[#FDE8E1] to-[#F7E5DE] border-b-2 border-[#C84B31]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <ScrollSlide direction="down" distance={40}>
              <span className="text-[11px] uppercase tracking-widest text-[#C84B31] font-mono font-bold block">
                Architectural Comfort
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={50} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Crafted for Pacing, Family & Rest
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                From intimate couples to multi-generational family groups, our dining bays prioritize aisle privacy and acoustic calm.
              </p>
            </ScrollSlide>
          </div>

          {/* Staggered Visual Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: Velvet booth frame with 3D Tilt */}
            <div className="lg:col-span-6 relative">
              <ScrollRotate rotateFrom={-6} duration={1}>
                <div className="relative overflow-hidden rounded-3xl border-2 border-[#C84B31]/30 shadow-2xl bg-[#1C1617] group">
                  <img
                    src="/images/restaurant/sharda-dining-booth.webp"
                    alt="Teal velvet and teak family booths at Sharda Dinings"
                    className="w-full h-[420px] object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4A261] font-bold">Booth Comfort</span>
                    <p className="font-serif text-xl font-bold text-white mt-0.5">Deep Velvet & Teak Dining Booths</p>
                    <p className="text-xs text-[#FDE8E1]/85 mt-1 font-light">Spacious seating with privacy for relaxed family dinners.</p>
                  </div>
                </div>
              </ScrollRotate>
            </div>

            {/* Right 6 cols: Editorial Narrative Strip */}
            <div className="lg:col-span-6 space-y-5 lg:pl-6">
              
              <ScrollSlide direction="right" distance={60}>
                <div className="p-5 rounded-2xl bg-white shadow-md border-l-4 border-[#C84B31] space-y-1.5 hover:translate-x-1.5 transition-transform">
                  <div className="flex items-center space-x-2 text-[#C84B31]">
                    <Baby className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">Toddler Care & Elder Ease</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    Equipped with high chairs for young children, wheelchair ground access, and 
                    gentle no-spice broths suited for elderly family members.
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="right" distance={70} delay={0.15}>
                <div className="p-5 rounded-2xl bg-white shadow-md border-l-4 border-[#D4AF37] space-y-1.5 hover:translate-x-1.5 transition-transform">
                  <div className="flex items-center space-x-2 text-[#927318]">
                    <Sparkles className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">The Buddha Sanctuary Alcove</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    Carved fluted relief walls provide acoustic softening, creating a tranquil 
                    setting after morning Darshan at Gorakhnath Mandir.
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="right" distance={80} delay={0.25}>
                <div className="p-5 rounded-2xl bg-white shadow-md border-l-4 border-[#2D6A4F] space-y-1.5 hover:translate-x-1.5 transition-transform">
                  <div className="flex items-center space-x-2 text-[#2D6A4F]">
                    <ShieldCheck className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">100% Non-Alcoholic Sanctum</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    A strictly sober, pious family atmosphere upholding the dignity of visiting pilgrims and devotees.
                  </p>
                </div>
              </ScrollSlide>

              <div className="pt-2 flex items-center space-x-6 text-xs font-mono text-[#C84B31]">
                <div><AnimatedCounter end={100} suffix="%" className="font-bold text-base text-[#1C1617]" /> Pure Dining</div>
                <span>•</span>
                <div><AnimatedCounter end={18} suffix=" Hrs" className="font-bold text-base text-[#1C1617]" /> Dal Simmer</div>
                <span>•</span>
                <div><AnimatedCounter end={4} suffix=" Styles" className="font-bold text-base text-[#1C1617]" /> Traditions</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: FOUR HERITAGE TRADITIONS (Interactive 3D Dish Stage)
          Deep Forest Charcoal & Gilded Gold
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#18211A] via-[#121B14] to-[#0D140F] text-[#FAF7F2] relative overflow-hidden border-t-2 border-[#A8D5BA]/20">
        <FloatingSpiceCanvas theme="culinary" density="medium" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b-2 border-white/15 gap-4">
            <ScrollSlide direction="left" distance={50}>
              <div>
                <div className="flex items-center space-x-2 text-[#F4A261] mb-1">
                  <SpiceStar className="w-4 h-4 animate-badge-levitate" />
                  <span className="text-[11px] uppercase tracking-widest font-mono font-bold">Culinary Lineage</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#FAF7F2]">
                  Four Cooking <span className="text-[#D4AF37] italic font-normal">Traditions</span>
                </h2>
              </div>
            </ScrollSlide>
            
            {/* Roman Numerals Navigation with Spring Pop */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0">
              {traditions.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTradition(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center space-x-2 border-2 ${
                    activeTradition === idx
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4A261] text-[#1C1617] border-[#D4AF37] font-bold shadow-xl shadow-[#D4AF37]/30 scale-108'
                      : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white hover:scale-102'
                  }`}
                >
                  <span className="font-serif text-sm font-bold">{t.roman}.</span>
                  <span>{t.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Tradition: 3D Stage Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 6 cols: Details */}
            <div className="lg:col-span-6 space-y-5">
              <ScrollSlide direction="left" distance={50} key={`detail-${activeTradition}`}>
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-mono text-[#F4A261] border border-white/15">
                  <span className="font-bold">Tradition {traditions[activeTradition].roman}</span>
                  <span>•</span>
                  <span>{traditions[activeTradition].badge}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#FAF7F2] mt-2">
                  {traditions[activeTradition].title}
                </h3>
                <p className="font-serif italic text-[#D4AF37] text-lg mt-1">
                  {traditions[activeTradition].subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#FDE8E1]/85 leading-relaxed font-light mt-2">
                  {traditions[activeTradition].desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/15 mt-4">
                  <p className="text-[10px] uppercase tracking-widest text-[#F4A261] font-mono font-bold">Featured Dishes in this Style</p>
                  {traditions[activeTradition].highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-3 text-xs text-[#FAF7F2]/90">
                      <span className="w-2 h-2 rounded-full bg-[#E76F51]"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/menu"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white font-mono font-bold transition-colors"
                  >
                    <span>See full menu tariffs</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollSlide>
            </div>

            {/* Right 6 cols: Floating 3D Dish Portal with Interactive Orbit */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <ScrollPop key={`dish-${activeTradition}`} duration={0.8} overshoot={1.6}>
                <FloatingCard type="vertical" intensity={12} duration={4.5}>
                  <FloatingDishPortal
                    src={traditions[activeTradition].image}
                    alt={traditions[activeTradition].title}
                    title={traditions[activeTradition].title}
                    subtitle={traditions[activeTradition].badge}
                    size="lg"
                    depth={1}
                    rotation={activeTradition % 2 === 0 ? -4 : 4}
                    glowColor="rgba(244, 162, 97, 0.55)"
                    badge={traditions[activeTradition].badge}
                  />
                </FloatingCard>
              </ScrollPop>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: RESERVATION SUITE (Warm Coral Peach & Cream)
      ───────────────────────────────────────────────────────────── */}
      <section id="reservation-suite" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF0E6] via-[#FDE8E1] to-[#FBE8E2] border-t-2 border-[#C84B31]/30">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <ScrollSlide direction="down" distance={30}>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#C84B31] font-bold block">
                Direct Concierge Table Service
              </span>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Table Reservation Desk
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={30} delay={0.2}>
              <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
                Reserve your velvet booth or family celebration table with immediate WhatsApp confirmation.
              </p>
            </ScrollSlide>
          </div>

          <ScrollPop delay={0.25}>
            <form onSubmit={handleReservationSubmit} className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-[#D4AF37]/35 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={reservation.name}
                    onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#C84B31] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={reservation.phone}
                    onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#C84B31] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={reservation.date}
                    onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#C84B31] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={reservation.time}
                    onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#C84B31] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                    Party Size
                  </label>
                  <select
                    value={reservation.guests}
                    onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#C84B31] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                  >
                    <option value="2 Guests">2 Guests (Couple)</option>
                    <option value="4 Guests">4 Guests (Family)</option>
                    <option value="6-8 Guests">6-8 Guests (Large Family)</option>
                    <option value="10+ Guests">10+ Guests (Celebration)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1C1617] font-semibold mb-1">
                  Special Requests or Dietary Preference
                </label>
                <input
                  type="text"
                  value={reservation.notes}
                  onChange={(e) => setReservation({ ...reservation, notes: e.target.value })}
                  placeholder="e.g. Jain / No Onion No Garlic, High Chair for baby, Birthday celebration"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#EFE8DC] focus:border-[#C84B31] focus:outline-none text-xs bg-[#FAF7F2] transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-3.5 bg-gradient-to-r from-[#E76F51] to-[#C84B31] hover:brightness-110 text-white text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#C84B31]/30 transition-all hover:scale-105 cursor-pointer"
                >
                  Confirm via WhatsApp
                </button>

                <div className="flex items-center space-x-2 text-[11px] text-[#1C1617]/70 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Instant WhatsApp confirmation · Zero reservation fee</span>
                </div>
              </div>
            </form>
          </ScrollPop>

        </div>
      </section>

    </div>
  );
}