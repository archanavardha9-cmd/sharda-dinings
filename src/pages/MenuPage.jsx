import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Utensils, Download, ArrowUpRight, Check, Printer } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { SpiceStar, WheatFlourish, ArchEmblem } from '../components/DecorativeGraphics';

export default function MenuPage({ onOpenEnquiry, onOpenVerification }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [chefSpecialsOnly, setChefSpecialsOnly] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (vegOnly && !item.isVeg) return false;
      if (nonVegOnly && item.isVeg) return false;
      if (chefSpecialsOnly && !item.chefSpecial) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(q);
        const descMatch = item.description.toLowerCase().includes(q);
        if (!nameMatch && !descMatch) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, vegOnly, nonVegOnly, chefSpecialsOnly]);

  const handlePrintMenu = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#241C1A]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: MENU HERO — Expressive MENU Typography & Graphic Accents
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F3E8D7] border-b border-[#E8B9A4] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF9F0] border border-[#B94E35] text-xs text-[#B94E35] font-bold tracking-widest uppercase">
            <Utensils className="w-3.5 h-3.5" />
            <span>Culinary Curations</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-brand font-black tracking-tight text-[#241C1A]">
            THE <span className="text-[#B94E35] font-display italic font-normal">Menu</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#79533D] font-light leading-relaxed">
            Freshly prepared to order using cold-pressed oils, pure butter, and hand-ground spices. Verified restaurant pricing.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: INTERACTIVE FOOD MENU — Filter Controls (Sticky)
      ───────────────────────────────────────────────────────────── */}
      <section className="sticky top-[69px] z-30 bg-[#FFF9F0]/95 backdrop-blur-md border-b border-[#E8B9A4] py-3.5 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Paneer, Chicken, Biryani, Naan..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#E8B9A4] text-xs text-[#241C1A] placeholder-stone-400 focus:outline-none focus:border-[#B94E35]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-black"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Veg / Non-Veg & Special Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs w-full md:w-auto">
              <button
                onClick={() => {
                  setVegOnly(!vegOnly);
                  if (!vegOnly) setNonVegOnly(false);
                }}
                className={`px-3 py-1.5 rounded-full flex items-center space-x-1.5 border transition-all ${
                  vegOnly
                    ? 'bg-emerald-700 border-emerald-700 text-white font-bold shadow'
                    : 'bg-white border-[#E8B9A4] text-[#79533D] hover:bg-[#F3E8D7]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Pure Veg</span>
              </button>

              <button
                onClick={() => {
                  setNonVegOnly(!nonVegOnly);
                  if (!nonVegOnly) setVegOnly(false);
                }}
                className={`px-3 py-1.5 rounded-full flex items-center space-x-1.5 border transition-all ${
                  nonVegOnly
                    ? 'bg-[#B94E35] border-[#B94E35] text-white font-bold shadow'
                    : 'bg-white border-[#E8B9A4] text-[#79533D] hover:bg-[#F3E8D7]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>Non-Veg</span>
              </button>

              <button
                onClick={() => setChefSpecialsOnly(!chefSpecialsOnly)}
                className={`px-3 py-1.5 rounded-full flex items-center space-x-1.5 border transition-all ${
                  chefSpecialsOnly
                    ? 'bg-[#D7A84B] border-[#D7A84B] text-[#241C1A] font-bold shadow'
                    : 'bg-white border-[#E8B9A4] text-[#79533D] hover:bg-[#F3E8D7]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chef Specials</span>
              </button>
            </div>
          </div>

          {/* Category Navigation Horizontal Scroll */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#B94E35] text-white shadow-sm'
                    : 'bg-white text-[#79533D] border border-[#E8B9A4] hover:bg-[#F3E8D7]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2 CONT: MENU ITEMS — Editorial Layout with Dotted Dividers
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <p className="text-stone-500 text-sm">No dishes found matching your current filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setVegOnly(false);
                setNonVegOnly(false);
                setChefSpecialsOnly(false);
              }}
              className="px-5 py-2 rounded-full bg-[#B94E35] text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between text-xs text-[#79533D] border-b border-[#E8B9A4] pb-2">
              <span>Showing {filteredItems.length} curated offerings</span>
              <span>Prices in INR (Taxes extra as applicable)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="group p-5 rounded-2xl bg-white border border-[#E8B9A4] shadow-sm hover:border-[#B94E35] transition-all flex flex-col sm:flex-row gap-4"
                >
                  {/* Dish Image if available */}
                  {item.image && (
                    <div className="w-full sm:w-28 h-28 shrink-0 rounded-xl overflow-hidden border border-[#E8B9A4] relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-1.5 left-1.5 w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`}></span>
                    </div>
                  )}

                  {/* Dish Info */}
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-baseline justify-between gap-2 border-b border-dashed border-[#E8B9A4] pb-1">
                      <div className="flex items-center space-x-1.5">
                        <div className={`w-3.5 h-3.5 border flex items-center justify-center p-[2px] rounded-sm ${
                          item.isVeg ? 'border-emerald-600' : 'border-red-600'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`}></div>
                        </div>
                        <h3 className="font-serif font-bold text-base text-[#241C1A] group-hover:text-[#B94E35] transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-serif font-bold text-base text-[#B94E35] shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#79533D] leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="pt-1 flex items-center justify-between text-[11px] text-stone-500">
                      <div className="flex items-center space-x-2">
                        {item.chefSpecial && (
                          <span className="text-[#B94E35] font-bold flex items-center space-x-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Special</span>
                          </span>
                        )}
                        <span>Spice: <strong className="text-stone-700">{item.spice}</strong></span>
                      </div>
                      <button
                        onClick={() => onOpenEnquiry('restaurant')}
                        className="text-[#B94E35] hover:underline font-bold"
                      >
                        Reserve Table →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: DOWNLOAD / PRINT MENU — Menu-Inspired Closing Block
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F3E8D7] border-t border-[#E8B9A4]">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-[#B94E35] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#B94E35] font-bold">Printable Menu</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#241C1A]">Take the Flavour with You</h3>
            <p className="text-xs text-[#79533D] max-w-md">
              Need a physical copy for family gatherings or corporate orders? Print or save the complete curated menu.
            </p>
          </div>
          <button
            onClick={handlePrintMenu}
            className="px-7 py-3.5 rounded-full bg-[#B94E35] hover:bg-[#963822] text-white font-bold text-xs uppercase tracking-widest flex items-center space-x-2 shadow-md transition-all shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </section>
    </div>
  );
}
