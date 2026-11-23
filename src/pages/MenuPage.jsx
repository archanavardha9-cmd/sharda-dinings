import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Printer, ExternalLink, MessageSquare, ChevronRight, Flame, Utensils, Award } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, CutleryCrest } from '../components/DecorativeGraphics';
import {
  FloatingDishPortal,
  KineticTitle,
  FloatingSpiceCanvas,
  ScrollPop,
  ScrollSlide,
  ScrollZoom,
  FloatingCard,
  StaggerGrid
} from '../components/MotionExperience';

export default function MenuPage({ onOpenEnquiry, onOpenVerification }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDietary =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'nonveg' && !item.isVeg) ||
        (dietaryFilter === 'special' && item.chefSpecial);
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  // Group by category when viewing 'all'
  const groupedCategories = useMemo(() => {
    if (activeCategory !== 'all') {
      const cat = MENU_CATEGORIES.find((c) => c.id === activeCategory);
      return [{ category: cat, items: filteredItems }];
    }

    return MENU_CATEGORIES.filter((c) => c.id !== 'all')
      .map((cat) => {
        const items = filteredItems.filter((i) => i.category === cat.id);
        return { category: cat, items };
      })
      .filter((group) => group.items.length > 0);
  }, [activeCategory, filteredItems]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — Deep Royal Burgundy & Saffron
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2B101D] via-[#1F0C15] to-[#14080E] text-[#FAF7F2] border-b-2 border-[#D4AF37]/30 overflow-hidden">
        <FloatingSpiceCanvas theme="culinary" density="rich" />

        {/* Floating Side Dishes */}
        <div className="hidden lg:block absolute left-10 top-16 z-10">
          <FloatingCard type="vertical" intensity={14} duration={4.8}>
            <FloatingDishPortal
              src="/images/food/sharda-dining-biryani.webp"
              alt="Awadhi Dum Biryani"
              title="Dum Biryani"
              price="₹380"
              size="sm"
              depth={1}
              rotation={-5}
              glowColor="rgba(244, 162, 97, 0.45)"
            />
          </FloatingCard>
        </div>

        <div className="hidden lg:block absolute right-10 top-14 z-10">
          <FloatingCard type="reverse" intensity={12} duration={5.2}>
            <FloatingDishPortal
              src="/images/food/tandoori-veg-platter.webp"
              alt="Tandoori Vegetable Platter"
              title="Tandoori Platter"
              price="₹390"
              size="sm"
              depth={2}
              rotation={6}
              glowColor="rgba(231, 111, 81, 0.45)"
            />
          </FloatingCard>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="03" total="07" label="LA CARTE GASTRONOMIQUE" />
          </div>

          <KineticTitle as="h1" className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            La Carte & Curations
          </KineticTitle>
          <p className="font-serif italic text-sm sm:text-base text-[#FDE8E1]/85 font-light max-w-xl mx-auto">
            Gorakhpur's multi-cuisine repertoire · Stone-ground spices & verified authentic tariffs
          </p>

          <GildedDivider className="my-3" />

          {/* Quick Order Actions with Spring Pop */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <ScrollPop delay={0.1}>
              <a
                href={BUSINESS_INFO.ordering.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#E23744] hover:bg-[#c92f3b] text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-[#E23744]/30"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </ScrollPop>
            <ScrollPop delay={0.2}>
              <a
                href={BUSINESS_INFO.ordering.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#FC8019] hover:bg-[#e07114] text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-[#FC8019]/30"
              >
                <span>Order on Swiggy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </ScrollPop>
            <ScrollPop delay={0.3}>
              <button
                onClick={handlePrint}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border-2 border-[#D4AF37] text-[#FAF7F2] hover:bg-[#D4AF37]/20 text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Menu</span>
              </button>
            </ScrollPop>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: STICKY SEARCH & DIETARY FILTER BAR
          Warm Champagne & Gold Glow
      ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-[#D4AF37]/25 py-3.5 px-4 sm:px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C84B31] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (Biryani, Paneer, Pizza)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-white border-2 border-[#EFE8DC] focus:outline-none focus:border-[#C84B31] text-[#1C1617] placeholder-[#1C1617]/50 shadow-sm transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-xs text-[#1C1617]/50 hover:text-[#1C1617]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dietary Filters with Vibrancy */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {[
              { id: 'all', label: 'All Curations' },
              { id: 'veg', label: 'Pure Veg', icon: '🟢' },
              { id: 'nonveg', label: 'Poultry & Meat', icon: '🔴' },
              { id: 'special', label: 'Chef Specials', icon: '★' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDietaryFilter(d.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 border-2 ${
                  dietaryFilter === d.id
                    ? 'bg-[#C84B31] text-white border-[#C84B31] font-bold shadow-md scale-105'
                    : 'bg-white border-[#EFE8DC] text-[#1C1617]/75 hover:border-[#C84B31]/50 hover:scale-102'
                }`}
              >
                {d.icon && <span className="text-[10px]">{d.icon}</span>}
                <span>{d.label}</span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: MAIN MENU (Editorial Dual Column Layout)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Category Index (3 cols) with Slide In */}
          <div className="lg:col-span-3 lg:sticky lg:top-36 space-y-2 bg-gradient-to-b from-white to-[#FDF9F5] p-5 rounded-2xl border-2 border-[#D4AF37]/30 shadow-md">
            <ScrollSlide direction="left" distance={40}>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C84B31] font-bold pb-2 border-b-2 border-[#EFE8DC]">
                Menu Chapters
              </p>
            </ScrollSlide>
            
            <div className="space-y-1 max-h-[65vh] overflow-y-auto pr-1">
              {MENU_CATEGORIES.map((cat) => {
                const count = MENU_ITEMS.filter((i) => cat.id === 'all' || i.category === cat.id).length;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#FDE8E1] text-[#C84B31] font-bold border-l-4 border-[#C84B31] shadow-sm translate-x-1'
                        : 'text-[#1C1617]/70 hover:bg-[#FAF7F2] hover:text-[#1C1617] hover:translate-x-0.5'
                    }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className="text-[10px] font-mono text-[#1C1617]/50 ml-2">({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#EFE8DC] text-[11px] text-[#1C1617]/70 space-y-1">
              <span className="font-bold text-[#2D6A4F] block">Separate Satvik Utensils</span>
              <p className="font-light">Jain meals prepared without onion or garlic upon prior notice.</p>
            </div>
          </div>

          {/* Right Column: Editorial Dishes List with Spring Pop Entrances */}
          <div className="lg:col-span-9 space-y-10">
            
            {groupedCategories.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border-2 border-[#EFE8DC] space-y-3">
                <CutleryCrest className="w-10 h-10 text-[#C84B31] mx-auto opacity-50" />
                <h3 className="font-serif text-xl font-bold text-[#1C1617]">No Dishes Found</h3>
                <p className="text-xs text-[#1C1617]/70 max-w-sm mx-auto font-light">
                  No items matched your search query. Try clearing filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setDietaryFilter('all');
                  }}
                  className="px-5 py-2 bg-[#C84B31] text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer hover:bg-[#b33e26] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              groupedCategories.map((group, groupIdx) => (
                <div key={group.category.id} className="space-y-4">
                  
                  {/* Category Header */}
                  <ScrollSlide direction="right" distance={40}>
                    <div className="pb-3 border-b-2 border-[#1C1617]/10 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#C84B31] uppercase font-bold bg-[#FDE8E1] px-2.5 py-0.5 rounded-md">
                          CHAPTER {String(groupIdx + 1).padStart(2, '0')}
                        </span>
                        <h2 className="font-serif text-2xl font-bold text-[#1C1617] mt-1">
                          {group.category.name}
                        </h2>
                      </div>
                      <span className="text-xs font-mono text-[#1C1617]/60 font-semibold">{group.items.length} dishes</span>
                    </div>
                  </ScrollSlide>

                  {/* Dishes Flow with Stagger Pop Entrance */}
                  <StaggerGrid stagger={0.08} animation="pop" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-white border-2 border-[#EFE8DC] hover:border-[#D4AF37] transition-all group flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300"
                      >
                        <div>
                          <div className="flex items-baseline justify-between gap-2">
                            <div className="flex items-center space-x-2 truncate">
                              <span
                                className={`w-3.5 h-3.5 rounded-sm border-2 flex items-center justify-center shrink-0 ${
                                  item.isVeg ? 'border-emerald-600 bg-emerald-50' : 'border-rose-600 bg-rose-50'
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`}></span>
                              </span>
                              <h3 className="font-serif font-bold text-sm text-[#1C1617] group-hover:text-[#C84B31] transition-colors truncate">
                                {item.name}
                              </h3>
                            </div>
                            <span className="font-mono font-bold text-xs text-[#1C1617] bg-[#FAF0E6] px-2 py-0.5 rounded shrink-0">
                              ₹{item.price}
                            </span>
                          </div>

                          {item.description && (
                            <p className="text-[11px] text-[#1C1617]/70 mt-1.5 leading-relaxed font-light">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-2 mt-2 border-t border-[#FAF7F2] flex items-center justify-between text-[10px] font-mono">
                          <div className="flex items-center space-x-1.5">
                            {item.chefSpecial && (
                              <span className="px-2 py-0.5 rounded-md bg-[#F4A261]/20 text-[#C84B31] font-bold">
                                ★ Chef Special
                              </span>
                            )}
                            {item.spice && (
                              <span className="text-[#1C1617]/60 font-semibold">
                                {item.spice}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => onOpenEnquiry('restaurant')}
                            className="text-[#C84B31] hover:underline font-bold uppercase tracking-wider cursor-pointer"
                          >
                            Order Table
                          </button>
                        </div>
                      </div>
                    ))}
                  </StaggerGrid>

                </div>
              ))
            )}

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: TAKEAWAY & DELIVERY STRIP (Warm Terracotta & Coral)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#C84B31] via-[#B94E35] to-[#963822] text-[#FAF7F2]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <ScrollSlide direction="left" distance={50} className="space-y-1 max-w-lg text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold">Direct Takeaway Packaging</h3>
            <p className="text-xs text-[#FDE8E1]/90 leading-relaxed font-light">
              Air-tight, spill-proof handi boxes preserving steam and aroma for home dining and temple pilgrim transit.
            </p>
          </ScrollSlide>
          
          <ScrollSlide direction="right" distance={50} className="flex items-center space-x-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="px-7 py-3 bg-white hover:bg-[#FAF0E6] text-[#C84B31] text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-xl"
            >
              Call Takeaway Desk
            </a>
          </ScrollSlide>
        </div>
      </section>

    </div>
  );
}