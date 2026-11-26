import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Wifi, Clock, ArrowRight, MessageSquare, ChevronRight, Sparkles, Heart, Zap, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, CoffeeBeanFlourish, SpiceStar } from '../components/DecorativeGraphics';
import {
  FloatingDishPortal,
  KineticTitle,
  FloatingSpiceCanvas,
  CoffeeSteamCanvas,
  CoffeeBeanVector,
  ScrollPop,
  ScrollSlide,
  ScrollZoom,
  ScrollRotate,
  FloatingCard,
  StaggerGrid,
  AnimatedCounter,
  SectionBackground
} from '../components/MotionExperience';

export default function OliveCafePage({ onOpenEnquiry, onOpenVerification }) {
  const [activeTab, setActiveTab] = useState('brews');

  const cafeMenuHighlights = {
    brews: [
      { name: 'Signature Classic Cold Coffee', category: 'Chilled Brew', desc: 'Slow-brewed dark roast espresso shaken over whole milk and crushed ice.', badge: 'Bestseller' },
      { name: 'Iced Caramel Frappuccino', category: 'Sweet & Creamy', desc: 'Salted caramel swirl, chilled espresso base, whipped cream cap.', badge: 'Barista Special' },
      { name: 'Double Shot Americano', category: 'Purist Roast', desc: 'Bold, dark extracted espresso pulled over hot mountain spring water.', badge: 'Dark Roast' },
      { name: 'Hazelnut Cafe Latte', category: 'Micro-Foam', desc: 'Velvety steamed micro-foam over roasted hazelnut extract and espresso.', badge: 'Artisan Blend' }
    ],
    shakes: [
      { name: 'Nutella Hazelnut Thick Shake', category: 'Indulgent Thick', desc: 'Generous Nutella spread blended with vanilla ice cream and toasted hazelnuts.', badge: 'Indulgent' },
      { name: 'Oreo Crumb Cream Frappe', category: 'Cookie Crumble', desc: 'Real chocolate sandwich cookies pulverized into creamy ice cream shake.', badge: 'Crowd Favorite' },
      { name: 'KitKat Crisp Chocolate Shake', category: 'Crisp Crunch', desc: 'Crushed chocolate wafers blended with dark cacao ganache and cream.', badge: 'Crispy Crunch' },
      { name: 'Belgian Chocolate Fudge Shake', category: 'Dense Ganache', desc: 'Bittersweet chocolate fudge sauce with dense dark chocolate ice cream.', badge: 'Rich Dark' }
    ],
    bites: [
      { name: 'Stone-Baked Margherita Pizza', category: 'Artisan Crust', desc: 'Hand-stretched thin dough, rich San Marzano tomato reduction, melted mozzarella.', badge: 'Stone-Baked' },
      { name: 'Farm Fresh Corn & Pepper Pizza', category: 'Vegetarian Feast', desc: 'Golden sweetcorn, crisp bell peppers, red onion pearls and mozzarella.', badge: 'Garden Fresh' },
      { name: 'White Sauce Creamy Alfredo Penne', category: 'Durum Wheat', desc: 'Al dente durum wheat penne tossed in parmesan cream butter glaze with garlic toast.', badge: 'Chef Special' },
      { name: 'Spicy Red Sauce Arrabbiata Penne', category: 'San Marzano', desc: 'Slow-simmered tomato, chilli flakes, garlic, black olives, fresh basil leaves.', badge: 'Zesty Tang' }
    ],
    desserts: [
      { name: 'Lotus Biscoff Cheesecake', category: 'Baked Patisserie', desc: 'Velvety baked cream cheese over buttery caramelized biscuit crumb.', badge: 'Patisserie' },
      { name: 'Sizzling Brownie with Vanilla Scoop', category: 'Cast Iron Sizzler', desc: 'Cast-iron sizzler plate, warm walnut brownie, hot fudge sauce, cold scoop.', badge: 'House Legend' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Lush Emerald Forest & Warm Amber
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#16291E] via-[#101E16] to-[#0A140E] text-[#FAF7F2] overflow-hidden">
        {/* Subtle Ambient Background with Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/olive-cafe/olive-cafe-coffee.webp"
            alt="Olive Cafe interior ambience inside Sharda Dinings"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.25] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A140E] via-[#16291E]/70 to-[#16291E]/50"></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#A8D5BA]/20 blur-3xl animate-pulse-glow"></div>
        </div>

        {/* Ambient Coffee Steam & Rising Wisps */}
        <CoffeeSteamCanvas />

        {/* Floating Dish Portals Left & Right */}
        <div className="hidden xl:block absolute left-10 top-28 z-10 pointer-events-none">
          <FloatingCard type="vertical" intensity={15} duration={5}>
            <FloatingDishPortal
              src="/images/olive-cafe/olive-cafe-coffee.webp"
              alt="Signature Classic Cold Coffee"
              title="Classic Cold Coffee"
              subtitle="Signature Arabica"
              size="sm"
              depth={1}
              rotation={-6}
              glowColor="rgba(168, 213, 186, 0.5)"
              badge="Bestseller"
            />
          </FloatingCard>
        </div>

        <div className="hidden xl:block absolute right-10 top-24 z-10 pointer-events-none">
          <FloatingCard type="reverse" intensity={14} duration={4.8}>
            <FloatingDishPortal
              src="/images/olive-cafe/corn-margherita-pizza.jpg"
              alt="Stone-Baked Margherita Pizza"
              title="Stone Margherita Pizza"
              subtitle="Wood-Fired Crust"
              size="sm"
              depth={2}
              rotation={5}
              glowColor="rgba(244, 162, 97, 0.45)"
              badge="Wood Oven"
            />
          </FloatingCard>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="04" total="07" label="OLIVE CAFE & ARTISANAL BREWS" />
          </div>

          <KineticTitle as="h1" className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Olive Cafe & Brews
          </KineticTitle>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#EFE8DC]/90 font-light leading-relaxed">
            Gorakhpur’s quiet espresso haven inside Sharda Dinings. 
            Cold brews, thick Nutella shakes, bubbling thin-crust pizzas, and relaxed work-friendly booths.
          </p>

          <GildedDivider className="my-4" />

          {/* Quick Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 text-xs font-mono max-w-2xl mx-auto">
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-[#A8D5BA] font-bold text-center">11:00 AM – 11:00 PM Daily</span>
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-white text-center">High-Speed Wi-Fi</span>
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-[#F4A261] font-bold text-center">Individual Power Outlets</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
            <ScrollPop delay={0.2} className="w-full sm:w-auto">
              <button
                onClick={() => onOpenEnquiry('cafe')}
                className="w-full sm:w-auto text-center inline-flex items-center justify-center min-h-[46px] px-8 py-3.5 bg-gradient-to-r from-[#2D6A4F] to-[#1B4332] hover:brightness-110 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#2D6A4F]/40 transition-all hover:scale-105 cursor-pointer"
              >
                Reserve Cafe Corner
              </button>
            </ScrollPop>
            <ScrollPop delay={0.3} className="w-full sm:w-auto">
              <a
                href="#cafe-menu"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center min-h-[46px] px-8 py-3.5 border-2 border-[#A8D5BA] hover:bg-[#A8D5BA]/20 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full transition-all hover:scale-105"
              >
                Explore Cafe Menu
              </a>
            </ScrollPop>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: CASUAL SANCTUARY (Soft Botanical Sage & Champagne)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF5EF] via-[#F4EDE2] to-[#EFE7D8] border-b-2 border-[#A8D5BA]/30 relative overflow-hidden">
        <SectionBackground theme="cafe-haven" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <ScrollSlide direction="down" distance={40}>
              <div className="flex items-center justify-center space-x-2 text-[#2D6A4F]">
                <CoffeeBeanFlourish className="w-4 h-4 animate-badge-levitate" />
                <span className="text-[11px] uppercase font-mono tracking-widest font-bold">The Daytime Haven</span>
              </div>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={50} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Where Coffee Meets Quiet Focus
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Crafted for afternoon study, laptop work, and relaxed evening catch-ups until 11:00 PM.
              </p>
            </ScrollSlide>
          </div>

          {/* Asymmetric Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: Ambient Neon Lounge Visual with 3D Tilt */}
            <div className="lg:col-span-6 relative">
              <ScrollRotate rotateFrom={6} duration={1}>
                <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#2D6A4F]/30 group">
                  <img
                    src="/images/olive-cafe/sharda-good-vibes-neon.webp"
                    alt="Good vibes neon sign and cafe seating"
                    className="w-full h-80 sm:h-96 object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16291E]/90 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-[#18211A]/90 backdrop-blur-md p-4 rounded-2xl text-[#FAF7F2] border border-[#A8D5BA]/30 shadow-xl">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#A8D5BA] font-bold">Atmosphere</p>
                    <p className="font-serif text-lg font-bold mt-0.5">Quiet Pacing & Warm Ambient Glow</p>
                  </div>
                </div>
              </ScrollRotate>
            </div>

            {/* Right 6 cols: 3 Highlights */}
            <div className="lg:col-span-6 space-y-5 lg:pl-6">
              <ScrollSlide direction="right" distance={60}>
                <div className="p-5 rounded-2xl bg-white shadow-md border-l-4 border-[#2D6A4F] space-y-1 hover:translate-x-1.5 transition-transform">
                  <div className="flex items-center space-x-2 text-[#2D6A4F]">
                    <Wifi className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">Study & Remote Work Ready</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    Complimentary high-speed Wi-Fi and accessible power outlets make it easy to work on presentations, read, or conduct small team discussions.
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="right" distance={70} delay={0.15}>
                <div className="p-5 rounded-2xl bg-white shadow-md border-l-4 border-[#D4AF37] space-y-1 hover:translate-x-1.5 transition-transform">
                  <div className="flex items-center space-x-2 text-[#927318]">
                    <Coffee className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">Authentic Espresso Extraction</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    Freshly ground Arabica roasts pulled with rich crema. From velvety flat whites and iced Americanos to double-blended hazelnut frappes.
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="right" distance={80} delay={0.25}>
                <div className="p-5 rounded-2xl bg-white shadow-md border-l-4 border-[#E76F51] space-y-1 hover:translate-x-1.5 transition-transform">
                  <div className="flex items-center space-x-2 text-[#E76F51]">
                    <Flame className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">Evening Desserts & Sizzlers</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    Open until 11:00 PM nightly. Meet friends after dinner for cast-iron sizzling brownies, cheesecakes, and sundaes under glowing pendant lights.
                  </p>
                </div>
              </ScrollSlide>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ARTISANAL CAFÉ LEDGER (Warm Dusty Peach & Sand)
      ───────────────────────────────────────────────────────────── */}
      <section id="cafe-menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FDF0E9] via-[#FAF0E6] to-[#F5E6DC] relative overflow-hidden">
        <SectionBackground theme="cafe-ledger" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b-2 border-[#1C1617]/10 gap-4">
            <ScrollSlide direction="left" distance={50}>
              <div>
                <span className="text-[11px] uppercase font-mono tracking-widest text-[#2D6A4F] font-bold block mb-1">
                  Artisanal Curations
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                  The Olive Cafe <span className="text-[#2D6A4F] italic font-normal">Ledger</span>
                </h2>
              </div>
            </ScrollSlide>

            {/* Menu Tabs */}
            <div className="grid grid-cols-2 gap-2.5 w-full md:w-auto md:flex md:flex-wrap md:items-center md:gap-2.5">
              {[
                { id: 'brews', label: 'Brews & Coffees' },
                { id: 'shakes', label: 'Thick Shakes' },
                { id: 'bites', label: 'Pizzas & Pastas' },
                { id: 'desserts', label: 'Patisserie & Sizzlers' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-h-[42px] px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer border-2 text-center ${
                    activeTab === tab.id
                      ? 'bg-[#2D6A4F] text-[#FAF7F2] border-[#2D6A4F] font-bold shadow-lg shadow-[#2D6A4F]/25'
                      : 'bg-white border-[#EFE8DC] text-[#1C1617]/75 hover:border-[#2D6A4F]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dual Split: Menu Items Left + 4-Photo Stagger Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: Tabbed Menu Items with consistent card layout */}
            <div className="lg:col-span-6">
              {/* Mobile: smooth horizontal scroll with consistent card widths; Desktop & Tablet: clean stacked grid with NO horizontal/vertical scroll */}
              <div className="overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
                <StaggerGrid
                  key={activeTab}
                  stagger={0.08}
                  animation="pop"
                  className="flex sm:flex-col gap-3 min-w-full"
                  itemClassName="shrink-0 w-[285px] sm:w-full"
                >
                  {cafeMenuHighlights[activeTab].map((item, idx) => (
                    <div
                      key={idx}
                      className="w-full h-full min-h-[120px] p-4 rounded-2xl bg-white border-2 border-[#EFE8DC] hover:border-[#2D6A4F] transition-all group shadow-sm hover:shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="font-serif font-bold text-sm text-[#1C1617] group-hover:text-[#2D6A4F] transition-colors truncate">
                            {item.name}
                          </h3>
                          <span className="font-mono text-[10px] font-bold text-[#2D6A4F] bg-[#A8D5BA]/25 px-2.5 py-1 rounded-full shrink-0 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#1C1617]/70 mt-1 leading-relaxed font-light min-h-[32px]">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-[#FAF7F2] flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#C84B31] font-bold">
                          {item.badge}
                        </span>
                        <button
                          onClick={() => onOpenEnquiry('cafe')}
                          className="text-[#2D6A4F] hover:underline font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Reserve Table →
                        </button>
                      </div>
                    </div>
                  ))}
                </StaggerGrid>
              </div>
            </div>

            {/* Right 6 cols: 4 Authentic Food Visuals in Asymmetrical Grid with Zoom on Scroll */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <ScrollZoom scaleFrom={0.88} duration={0.8}>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/35 bg-white group hover:shadow-xl transition-all">
                  <div className="h-44 overflow-hidden">
                    <img
                      src="/images/olive-cafe/creamy-alfredo-pasta.webp"
                      alt="Creamy Alfredo Penne at Olive Cafe"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-3 text-center bg-white">
                    <p className="font-serif font-bold text-xs text-[#1C1617]">Creamy Alfredo Penne</p>
                    <p className="text-[10px] font-mono font-bold text-[#2D6A4F] uppercase tracking-wider">Durum Wheat Alfredo</p>
                  </div>
                </div>
              </ScrollZoom>

              <ScrollZoom scaleFrom={0.88} duration={0.8} delay={0.1}>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/35 bg-white group hover:shadow-xl transition-all">
                  <div className="h-44 overflow-hidden">
                    <img
                      src="/images/olive-cafe/arrabita-pasta.webp"
                      alt="Arrabbiata pasta at Olive Cafe"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-3 text-center bg-white">
                    <p className="font-serif font-bold text-xs text-[#1C1617]">Spicy Arrabbiata Penne</p>
                    <p className="text-[10px] font-mono font-bold text-[#2D6A4F] uppercase tracking-wider">San Marzano Herb</p>
                  </div>
                </div>
              </ScrollZoom>

              <ScrollZoom scaleFrom={0.88} duration={0.8} delay={0.2}>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/35 bg-white group hover:shadow-xl transition-all">
                  <div className="h-44 overflow-hidden">
                    <img
                      src="/images/olive-cafe/french-toast-with-vanilla-ice-cream.webp"
                      alt="French toast with vanilla ice cream"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-3 text-center bg-white">
                    <p className="font-serif font-bold text-xs text-[#1C1617]">French Toast & Scoop</p>
                    <p className="text-[10px] font-mono font-bold text-[#2D6A4F] uppercase tracking-wider">Brioche & Vanilla</p>
                  </div>
                </div>
              </ScrollZoom>

              <ScrollZoom scaleFrom={0.88} duration={0.8} delay={0.3}>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/35 bg-white group hover:shadow-xl transition-all">
                  <div className="h-44 overflow-hidden">
                    <img
                      src="/images/food/open-stuffed-mushroom.webp"
                      alt="Open stuffed mushroom"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-3 text-center bg-white">
                    <p className="font-serif font-bold text-xs text-[#1C1617]">Open Stuffed Mushroom</p>
                    <p className="text-[10px] font-mono font-bold text-[#2D6A4F] uppercase tracking-wider">Clay Oven Charred</p>
                  </div>
                </div>
              </ScrollZoom>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}