import React from 'react';
import { Coffee, Pizza, Sparkles, MessageSquare, Clock, Wifi, Heart, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { CoffeeBeanFlourish, ArchEmblem } from '../components/DecorativeGraphics';

export default function OliveCafePage({ onOpenEnquiry }) {
  const cafeBeverages = [
    {
      name: 'Classic Chilled Cold Coffee',
      price: 180,
      image: '/images/cafe/artisan-cold-coffee.webp',
      desc: 'Double-shot espresso whipped with chilled whole milk, vanilla cream, and chocolate lace.'
    },
    {
      name: 'Nutella Oreo Overload Shake',
      price: 230,
      image: '/images/cafe/nutella-oreo-shake.webp',
      desc: 'Decadent thick shake blended with pure Nutella spread, crushed Oreos, and cocoa cream.'
    },
    {
      name: 'Caramel Macchiato Chilled',
      price: 195,
      image: '/images/cafe/artisan-cold-coffee.webp',
      desc: 'Layered espresso with vanilla syrup, chilled microfoam, and buttery caramel drizzle.'
    },
    {
      name: 'KitKat Fudge Shake',
      price: 220,
      image: '/images/cafe/nutella-oreo-shake.webp',
      desc: 'Crisp KitKat wafers crushed into rich Belgian chocolate ice cream.'
    }
  ];

  const cafeBites = [
    {
      name: 'Stone-Baked Margherita Pizza',
      price: 340,
      image: '/images/cafe/woodfired-style-pizza.webp',
      desc: 'Thin crust with Italian plum tomato concassé, torn fresh mozzarella, and aromatic basil.'
    },
    {
      name: 'Garlic Alfredo Penne',
      price: 320,
      image: '/images/cafe/creamy-alfredo-pasta.webp',
      desc: 'Penne tossed in velvety aged parmesan cream, sautéed mushrooms, and cracked black pepper.'
    },
    {
      name: 'Grilled Club Sandwich',
      price: 250,
      image: '/images/cafe/grilled-club-sandwich.webp',
      desc: 'Three layers of toasted butter brioche packed with cheddar, crisp veggies, and herbed wedges.'
    },
    {
      name: 'Penne Arrabbiata Piccante',
      price: 310,
      image: '/images/cafe/creamy-alfredo-pasta.webp',
      desc: 'Spicy roasted garlic and bird’s eye chilli tomato sauce with al dente penne and black olives.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#241C1A]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: CAFE HERO — Lush Olive Green & Warm Terracotta
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#2A342B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cafe/cafe-interior-vibe.webp"
            alt="Olive Cafe modern hangout"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A342B] via-[#2A342B]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#65765A] border border-white/30 text-white text-xs font-bold tracking-widest uppercase shadow-md">
            <Coffee className="w-4 h-4" />
            <span>Casual Hangout & Coffee Bar</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-serif font-black tracking-tight leading-none text-white">
            OLIVE <span className="text-emerald-300 italic font-display font-normal">Cafe</span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#E8B9A4] text-base sm:text-lg font-light leading-relaxed">
            Slow-pulled espresso shots, hand-stretched thin crust pizzas, velvety thick shakes, and relaxed corners designed for conversation.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry('cafe')}
              className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
            >
              Hold a Cafe Table
            </button>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent('Hello Olive Cafe, I would like to order coffee & snacks')}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full bg-white text-[#2A342B] hover:bg-[#F3E8D7] font-bold text-xs uppercase tracking-widest transition-all flex items-center space-x-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Quick Order</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: CAFE INTRODUCTION — Oversized Typography & Editorial Composition
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#65765A] font-bold">
              <CoffeeBeanFlourish className="w-5 h-5 text-[#65765A]" />
              <span>The Cafe Ethos</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#241C1A] leading-tight">
              A Design-Conscious Sanctuary in Gorakhpur.
            </h2>
            <p className="text-base sm:text-lg text-[#79533D] font-light leading-relaxed">
              Olive Cafe steps away from traditional dining into casual indulgence. Warm wood textures, plush leather booths, greenery accents, and ambient playlists create the perfect sanctuary for dates, work sessions, and catching up with friends.
            </p>
          </div>

          {/* 3 Graphic Highlight Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-3xl bg-[#F5EFE6] border border-[#E8B9A4] space-y-2">
              <Wifi className="w-6 h-6 text-[#65765A]" />
              <h4 className="font-serif font-bold text-lg text-[#241C1A]">High-Speed Wi-Fi</h4>
              <p className="text-xs text-[#79533D]">Work, study, and create with uninterrupted connectivity.</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#F5EFE6] border border-[#E8B9A4] space-y-2">
              <Clock className="w-6 h-6 text-[#65765A]" />
              <h4 className="font-serif font-bold text-lg text-[#241C1A]">11 AM – 11 PM</h4>
              <p className="text-xs text-[#79533D]">All-day coffee and light meals served daily.</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#F5EFE6] border border-[#E8B9A4] space-y-2">
              <Heart className="w-6 h-6 text-[#B94E35]" />
              <h4 className="font-serif font-bold text-lg text-[#241C1A]">Artisanal Prep</h4>
              <p className="text-xs text-[#79533D]">Handcrafted recipes using imported Italian pasta and dairy cream.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: COFFEE, FOOD & DESSERTS — Creative Visual Food Collage
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Coffees & Shakes */}
          <div className="space-y-8">
            <div className="border-b border-[#E8B9A4] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#65765A] font-bold">Cold Brews & Shakes</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#241C1A] mt-1">Artisan Coffees & Thickshakes</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cafeBeverages.map((item, idx) => (
                <div key={idx} className="group rounded-3xl bg-white border border-[#E8B9A4] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="h-52 overflow-hidden relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#65765A] text-white text-xs font-bold">₹{item.price}</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#241C1A]">{item.name}</h4>
                      <p className="text-xs text-[#79533D] mt-1 line-clamp-2">{item.desc}</p>
                    </div>
                    <button onClick={() => onOpenEnquiry('cafe')} className="text-xs font-bold text-[#65765A] hover:underline pt-2 text-left">Order in Cafe →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pizzas & Pastas */}
          <div className="space-y-8 pt-8">
            <div className="border-b border-[#E8B9A4] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#B94E35] font-bold">Stone-Baked & Al Dente</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#241C1A] mt-1">Gourmet Pizzas, Pastas & Sandwiches</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cafeBites.map((item, idx) => (
                <div key={idx} className="group rounded-3xl bg-white border border-[#E8B9A4] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="h-52 overflow-hidden relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#B94E35] text-white text-xs font-bold">₹{item.price}</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#241C1A]">{item.name}</h4>
                      <p className="text-xs text-[#79533D] mt-1 line-clamp-2">{item.desc}</p>
                    </div>
                    <button onClick={() => onOpenEnquiry('cafe')} className="text-xs font-bold text-[#B94E35] hover:underline pt-2 text-left">Order in Cafe →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CAFE AMBIENCE — Cinematic Visual Showcase
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2A342B] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">The Cafe Atmosphere</span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold">Relaxed Corners & Natural Light</h3>
            <p className="text-xs sm:text-sm text-[#E8B9A4] leading-relaxed">
              Whether grabbing an iced caramel macchiato on the go or settling in for an afternoon of writing, Olive Cafe is designed for comfort and connection.
            </p>
          </div>
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#65765A] shadow-2xl h-[380px]">
            <img src="/images/cafe/cafe-corner-hangout.webp" alt="Cafe hangout corner" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: VISIT THE CAFE — Clean, Colourful Closing Block
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3E8D7]">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-[#65765A] p-8 sm:p-12 text-center space-y-5 shadow-xl">
          <Coffee className="w-10 h-10 text-[#65765A] mx-auto" />
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#241C1A]">Visit Us at Olive Cafe</h3>
          <p className="text-xs sm:text-sm text-[#79533D] max-w-lg mx-auto">
            Located at Sharda Dinings, East Rajendra Nagar, Gorakhpur. Open every day from 11:00 AM to 11:00 PM.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry('cafe')}
              className="px-8 py-3.5 rounded-full bg-[#65765A] hover:bg-[#46533E] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all"
            >
              Reserve a Cafe Table
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
