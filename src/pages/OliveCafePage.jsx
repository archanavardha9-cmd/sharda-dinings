import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Wifi, Clock, ArrowRight, MessageSquare, ChevronRight, Sparkles, Heart, Zap, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, CoffeeBeanFlourish, SpiceStar } from '../components/DecorativeGraphics';
import {
  FloatingDishPortal,
  KineticTitle,
  FloatingSpiceCanvas,
  CoffeeBeanVector,
  ScrollPop,
  ScrollSlide,
  ScrollZoom,
  ScrollRotate,
  FloatingCard,
  StaggerGrid,
  AnimatedCounter
} from '../components/MotionExperience';

export default function OliveCafePage({ onOpenEnquiry, onOpenVerification }) {
  const [activeTab, setActiveTab] = useState('brews');

  const cafeMenuHighlights = {
    brews: [
      { name: 'Signature Classic Cold Coffee', price: '₹180', desc: 'Slow-brewed dark roast espresso shaken over whole milk and crushed ice.', badge: 'Bestseller' },
      { name: 'Iced Caramel Frappuccino', price: '₹210', desc: 'Salted caramel swirl, chilled espresso base, whipped cream cap.', badge: 'Sweet & Creamy' },
      { name: 'Double Shot Americano', price: '₹140', desc: 'Bold, dark extracted espresso pulled over hot mountain spring water.', badge: 'Purist Roast' },
      { name: 'Hazelnut Cafe Latte', price: '₹190', desc: 'Velvety steamed micro-foam over roasted hazelnut extract and espresso.', badge: 'Barista Choice' }
    ],
    shakes: [
      { name: 'Nutella Hazelnut Thick Shake', price: '₹240', desc: 'Generous Nutella spread blended with vanilla ice cream and toasted hazelnuts.', badge: 'Indulgent' },
      { name: 'Oreo Crumb Cream Frappe', price: '₹230', desc: 'Real chocolate sandwich cookies pulverized into creamy ice cream shake.', badge: 'Crowd Favorite' },
      { name: 'KitKat Crisp Chocolate Shake', price: '₹230', desc: 'Crushed chocolate wafers blended with dark cacao ganache and cream.', badge: 'Crispy Crunch' },
      { name: 'Belgian Chocolate Fudge Shake', price: '₹250', desc: 'Bittersweet chocolate fudge sauce with dense dark chocolate ice cream.', badge: 'Rich Dark' }
    ],
    bites: [
      { name: 'Stone-Baked Margherita Pizza', price: '₹320', desc: 'Hand-stretched thin dough, rich San Marzano tomato reduction, melted mozzarella.', badge: 'Stone-Baked' },
      { name: 'Farm Fresh Corn & Pepper Pizza', price: '₹340', desc: 'Golden sweetcorn, crisp bell peppers, red onion pearls and mozzarella.', badge: 'Vegetarian' },
      { name: 'White Sauce Creamy Alfredo Penne', price: '₹320', desc: 'Al dente durum wheat penne tossed in parmesan cream butter glaze with garlic toast.', badge: 'Chef Special' },
      { name: 'Spicy Red Sauce Arrabbiata Penne', price: '₹310', desc: 'Slow-simmered tomato, chilli flakes, garlic, black olives, fresh basil leaves.', badge: 'Zesty Tang' }
    ],
    desserts: [
      { name: 'Lotus Biscoff Cheesecake', price: '₹220', desc: 'Velvety baked cream cheese over buttery caramelized biscuit crumb.', badge: 'Patisserie' },
      { name: 'Sizzling Brownie with Vanilla Scoop', price: '₹220', desc: 'Cast-iron sizzler plate, warm walnut brownie, hot fudge sauce, cold scoop.', badge: 'House Legend' }
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

        {/* Ambient Coffee Beans and Mint Sprigs */}
        <FloatingSpiceCanvas theme="cafe" density="rich" />

        {/* Floating Dish Portals Left & Right */}
        <div className="hidden lg:block absolute left-10 top-28 z-10">
          <FloatingCard type="vertical" intensity={15} duration={5}>
            <FloatingDishPortal
              src="/images/olive-cafe/olive-cafe-coffee.webp"
              alt="Signature Classic Cold Coffee"
              title="Classic Cold Coffee"
              price="₹180"
              size="sm"
              depth={1}
              rotation={-6}
              glowColor="rgba(168, 213, 186, 0.5)"
              badge="Bestseller"
            />
          </FloatingCard>
        </div>

        <div className="hidden lg:block absolute right-10 top-24 z-10">
          <FloatingCard type="reverse" intensity={14} duration={4.8}>
            <FloatingDishPortal
              src="/images/olive-cafe/corn-margherita-pizza.jpg"
              alt="Stone-Baked Margherita Pizza"
              title="Stone Margherita Pizza"
              price="₹320"
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

          {/* Quick Badges Strip with Spring Pop */}
          <StaggerGrid stagger={0.1} animation="pop" className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs font-mono">
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-[#A8D5BA] font-bold">11:00 AM – 11:00 PM Daily</span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-white">High-Speed Wi-Fi</span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-[#F4A261] font-bold">Individual Power Outlets</span>
          </StaggerGrid>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <ScrollPop delay={0.2}>
              <button
                onClick={() => onOpenEnquiry('cafe')}
                className="px-8 py-3.5 bg-gradient-to-r from-[#2D6A4F] to-[#1B4332] hover:brightness-110 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full shadow-xl shadow-[#2D6A4F]/40 transition-all hover:scale-105 cursor-pointer"
              >
                Reserve Cafe Corner
              </button>
            </ScrollPop>
            <ScrollPop delay={0.3}>
              <a
                href="#cafe-menu"
                className="px-8 py-3.5 border-2 border-[#A8D5BA] hover:bg-[#A8D5BA]/20 text-[#FAF7F2] text-xs uppercase tracking-wider font-bold rounded-full transition-all hover:scale-105"
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF5EF] via-[#F4EDE2] to-[#EFE7D8] border-b-2 border-[#A8D5BA]/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
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
      <section id="cafe-menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FDF0E9] via-[#FAF0E6] to-[#F5E6DC]">
        <div className="max-w-7xl mx-auto space-y-12">
          
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

            {/* Menu Tabs with Spring Pop */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0">
              {[
                { id: 'brews', label: 'Brews & Coffees' },
                { id: 'shakes', label: 'Thick Shakes' },
                { id: 'bites', label: 'Pizzas & Pastas' },
                { id: 'desserts', label: 'Patisserie & Sizzlers' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer border-2 ${
                    activeTab === tab.id
                      ? 'bg-[#2D6A4F] text-[#FAF7F2] border-[#2D6A4F] font-bold shadow-lg shadow-[#2D6A4F]/25 scale-105'
                      : 'bg-white border-[#EFE8DC] text-[#1C1617]/70 hover:border-[#2D6A4F] hover:scale-102'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dual Split: Menu Items Left + 4-Photo Stagger Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: Tabbed Menu Items */}
            <div className="lg:col-span-6 space-y-3">
              <StaggerGrid key={activeTab} stagger={0.1} animation="pop" className="space-y-3">
                {cafeMenuHighlights[activeTab].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border-2 border-[#EFE8DC] hover:border-[#2D6A4F] transition-all group shadow-sm hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif font-bold text-sm text-[#1C1617] group-hover:text-[#2D6A4F] transition-colors truncate">
                        {item.name}
                      </h3>
                      <span className="font-mono font-bold text-xs text-[#2D6A4F] bg-[#A8D5BA]/25 px-2.5 py-1 rounded-full shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#1C1617]/70 mt-1 leading-relaxed font-light">
                      {item.desc}
                    </p>
                    <div className="mt-2 pt-2 border-t border-[#FAF7F2] flex items-center justify-between text-[10px] font-mono">
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
                    <p className="text-[10px] font-mono font-bold text-[#C84B31]">₹320</p>
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
                    <p className="text-[10px] font-mono font-bold text-[#C84B31]">₹310</p>
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
                    <p className="text-[10px] font-mono font-bold text-[#C84B31]">₹220</p>
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
                    <p className="text-[10px] font-mono font-bold text-[#C84B31]">₹280</p>
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