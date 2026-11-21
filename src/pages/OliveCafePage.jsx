import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Wifi, Clock, ArrowRight, MessageSquare, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, CoffeeBeanFlourish, SpiceStar } from '../components/DecorativeGraphics';

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
          SECTION 1: HERO — Botanical Olive & Espresso Atmosphere
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#18211A] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0 image-zoom-container">
          <img
            src="/images/olive-cafe/olive-cafe-coffee.webp"
            alt="Olive Cafe interior ambience inside Sharda Dinings"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18211A] via-[#18211A]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#18211A]/40 to-[#18211A]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="04" total="07" label="OLIVE CAFE & ARTISANAL BREWS" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Olive Cafe <span className="text-[#8FB386] italic font-normal">& Brews</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#EFE8DC]/85 font-light leading-relaxed">
            Gorakhpur’s quiet espresso haven inside Sharda Dinings. 
            Cold brews, Nutella thickshakes, bubbling thin-crust pizzas, and relaxed work-friendly booths.
          </p>

          <GildedDivider className="my-4" />

          {/* Quick Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-xs font-mono text-[#8FB386]">
            <span>11:00 AM – 11:00 PM Daily</span>
            <span>•</span>
            <span>High-Speed Wi-Fi</span>
            <span>•</span>
            <span>Table Power Sockets</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenEnquiry('cafe')}
              className="px-7 py-3 bg-[#4E5D4E] hover:bg-[#3D4B3D] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-full shadow-lg shadow-[#4E5D4E]/30 transition-all hover:scale-105 cursor-pointer"
            >
              Reserve Cafe Corner
            </button>
            <a
              href="#cafe-menu"
              className="px-7 py-3 border border-[#8FB386] hover:bg-[#8FB386]/15 text-[#8FB386] text-xs uppercase tracking-wider font-semibold rounded-full transition-all"
            >
              Explore Cafe Menu
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: CASUAL SANCTUARY (Editorial Split Composition - NO REPETITIVE CARDS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#EFE8DC]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="flex items-center justify-center space-x-2 text-[#4E5D4E]">
              <CoffeeBeanFlourish className="w-4 h-4" />
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold">The Daytime Haven</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
              Where Coffee Meets Quiet Focus
            </h2>
            <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
              Crafted for afternoon study, laptop work, and relaxed evening catch-ups until 11:00 PM.
            </p>
          </div>

          {/* Asymmetric Split Layout: Left Neon Visual + Right Editorial Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: Ambient Neon Lounge Visual */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#4E5D4E]/30 image-zoom-container">
                <img
                  src="/images/olive-cafe/sharda-good-vibes-neon.webp"
                  alt="Good vibes neon sign and cafe seating"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 bg-[#18211A]/90 backdrop-blur-md p-4 rounded-xl text-[#FAF7F2] border border-[#8FB386]/30">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#8FB386]">Atmosphere</p>
                <p className="font-serif text-base font-bold mt-0.5">Quiet Pacing & Warm Ambient Glow</p>
              </div>
            </div>

            {/* Right 6 cols: 3 Highlights (Editorial Flow, No Card Grids) */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">
              <div className="border-l-2 border-[#4E5D4E] pl-5 space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1C1617]">
                  Study & Remote Work Ready
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1617]/70 leading-relaxed font-light">
                  Complimentary high-speed Wi-Fi and accessible power outlets make it easy to work on presentations, read, or conduct small team discussions.
                </p>
              </div>

              <div className="border-l-2 border-[#8C6D37] pl-5 space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1C1617]">
                  Authentic Espresso Extraction
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1617]/70 leading-relaxed font-light">
                  Freshly ground Arabica roasts pulled with rich crema. From velvety flat whites and iced Americanos to double-blended hazelnut frappes.
                </p>
              </div>

              <div className="border-l-2 border-[#B94E35] pl-5 space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1C1617]">
                  Evening Desserts & Sizzlers
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1617]/70 leading-relaxed font-light">
                  Open until 11:00 PM nightly. Meet friends after dinner for cast-iron sizzling brownies, cheesecakes, and sundaes under glowing pendant lights.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ARTISANAL FOOD COLLAGE & CAFÉ LEDGER
      ───────────────────────────────────────────────────────────── */}
      <section id="cafe-menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EFE8DC]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#1C1617]/10 gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#4E5D4E] font-bold block mb-1">
                Artisanal Curations
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                The Olive Cafe <span className="text-[#4E5D4E] italic font-normal">Ledger</span>
              </h2>
            </div>

            {/* Menu Tabs */}
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
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer border ${
                    activeTab === tab.id
                      ? 'bg-[#4E5D4E] text-[#FAF7F2] border-[#4E5D4E] font-bold shadow-sm'
                      : 'bg-white border-[#EFE8DC] text-[#1C1617]/70 hover:border-[#4E5D4E]'
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
              {cafeMenuHighlights[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#EFE8DC] hover:border-[#4E5D4E] transition-all group shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-bold text-sm text-[#1C1617] group-hover:text-[#4E5D4E] transition-colors truncate">
                      {item.name}
                    </h3>
                    <span className="font-mono font-bold text-xs text-[#1C1617] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1C1617]/65 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-2 pt-2 border-t border-[#FAF7F2] flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#4E5D4E] font-semibold">
                      {item.badge}
                    </span>
                    <button
                      onClick={() => onOpenEnquiry('cafe')}
                      className="text-[#4E5D4E] hover:underline font-bold uppercase tracking-wider"
                    >
                      Order Table →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right 6 cols: 4 Authentic Food Visuals in Asymmetrical Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              <div className="rounded-xl overflow-hidden shadow-md border border-[#D4AF37]/30 image-zoom-container">
                <img
                  src="/images/olive-cafe/creamy-alfredo-pasta.webp"
                  alt="Creamy Alfredo Penne at Olive Cafe"
                  className="w-full h-44 object-cover"
                />
                <div className="p-2 bg-white text-center">
                  <p className="font-serif font-bold text-xs text-[#1C1617]">Creamy Alfredo Penne</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md border border-[#D4AF37]/30 image-zoom-container">
                <img
                  src="/images/olive-cafe/arrabita-pasta.webp"
                  alt="Arrabbiata pasta"
                  className="w-full h-44 object-cover"
                />
                <div className="p-2 bg-white text-center">
                  <p className="font-serif font-bold text-xs text-[#1C1617]">Spicy Arrabbiata</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md border border-[#D4AF37]/30 image-zoom-container">
                <img
                  src="/images/olive-cafe/sharda-dinings-cheese-cake.webp"
                  alt="Lotus Biscoff cheesecake"
                  className="w-full h-44 object-cover"
                />
                <div className="p-2 bg-white text-center">
                  <p className="font-serif font-bold text-xs text-[#1C1617]">Biscoff Cheesecake</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md border border-[#D4AF37]/30 image-zoom-container">
                <img
                  src="/images/olive-cafe/sharda-dinings-ice-cream-sundae.webp"
                  alt="Ice cream sundae"
                  className="w-full h-44 object-cover"
                />
                <div className="p-2 bg-white text-center">
                  <p className="font-serif font-bold text-xs text-[#1C1617]">Choco Fudge Sundae</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: DIRECT WHATSAPP ORDER STRIP
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#4E5D4E] text-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/80 font-bold block">
            Instant Counter Collection
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal">
            Drop by Olive Cafe or Order Ahead
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/85 max-w-md mx-auto leading-relaxed">
            Need your cold brew or stone-baked pizza packaged for the road? 
            Send a quick WhatsApp note to our barista for swift pickup.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent('Hello Olive Cafe at Sharda Dinings, I would like to order Coffee & Bites for pickup / table hold.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-[#FAF7F2] text-[#18211A] text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:bg-white transition-all flex items-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Cafe Order</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="px-7 py-3 border border-[#FAF7F2] text-[#FAF7F2] hover:bg-white/10 text-xs font-bold uppercase tracking-wider rounded-full transition-all"
            >
              Call Cafe Desk: {BUSINESS_INFO.phones[0].display}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
