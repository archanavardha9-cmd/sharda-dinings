import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Printer, ExternalLink, MessageSquare } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill, CutleryCrest } from '../components/DecorativeGraphics';

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
          SECTION 1: HERO — Atelier Editorial Header
          Charcoal Mahogany & Gold with balanced scale
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-12 px-4 sm:px-6 lg:px-8 bg-[#1C1617] text-[#FAF7F2] border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="03" total="07" label="LA CARTE GASTRONOMIQUE" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            La Carte <span className="text-[#D4AF37] italic font-normal">& Curations</span>
          </h1>
          <p className="font-serif italic text-sm sm:text-base text-[#FAF7F2]/70 font-light">
            Gorakhpur's multi-cuisine culinary repertoire · Fresh preparations & verified tariffs
          </p>

          <GildedDivider className="my-3" />

          {/* Quick Order Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <a
              href={BUSINESS_INFO.ordering.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#E23744] hover:bg-[#c92f3b] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Order on Zomato</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.ordering.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#FC8019] hover:bg-[#e07114] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Order on Swiggy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/15 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              <Printer className="w-3 h-3" />
              <span>Print Menu</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: SEARCH & STICKY FILTER BAR
      ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EFE8DC] py-3 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-[#1C1617]/40 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (Biryani, Paneer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full bg-white border border-[#EFE8DC] focus:outline-none focus:border-[#B94E35] text-[#1C1617] placeholder-[#1C1617]/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-[#1C1617]/40 hover:text-[#1C1617]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dietary Filters */}
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
                className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 border ${
                  dietaryFilter === d.id
                    ? 'bg-[#1C1617] text-[#FAF7F2] border-[#1C1617] font-bold shadow-sm'
                    : 'bg-white border-[#EFE8DC] text-[#1C1617]/70 hover:border-[#1C1617]/40'
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
          SECTION 3: MAIN MENU (Atelier Dual Column Layout)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Category Index (3 cols) */}
          <div className="lg:col-span-3 lg:sticky lg:top-32 space-y-2 bg-white p-4 rounded-xl border border-[#EFE8DC] shadow-sm">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B94E35] font-bold pb-2 border-b border-[#EFE8DC]">
              Menu Chapters
            </p>
            <div className="space-y-1 max-h-[65vh] overflow-y-auto pr-1">
              {MENU_CATEGORIES.map((cat) => {
                const count = MENU_ITEMS.filter((i) => cat.id === 'all' || i.category === cat.id).length;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#FAF7F2] text-[#B94E35] font-bold border-l-2 border-[#B94E35]'
                        : 'text-[#1C1617]/70 hover:bg-[#FAF7F2] hover:text-[#1C1617]'
                    }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className="text-[10px] font-mono text-[#1C1617]/40 ml-2">({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#EFE8DC] text-[11px] text-[#1C1617]/60 space-y-1">
              <span className="font-semibold text-[#4E5D4E] block">Separate Veg Kitchen</span>
              <p>Jain meals prepared without onion or garlic upon prior notice.</p>
            </div>
          </div>

          {/* Right Column: Editorial Dishes List (9 cols) */}
          <div className="lg:col-span-9 space-y-10">
            
            {groupedCategories.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-[#EFE8DC] space-y-3">
                <CutleryCrest className="w-8 h-8 text-[#B94E35] mx-auto opacity-40" />
                <h3 className="font-serif text-xl font-bold text-[#1C1617]">No Dishes Found</h3>
                <p className="text-xs text-[#1C1617]/60 max-w-sm mx-auto">
                  No items matched your search query. Try clearing filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setDietaryFilter('all');
                  }}
                  className="px-4 py-1.5 bg-[#B94E35] text-white text-xs font-semibold uppercase tracking-wider rounded-full cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              groupedCategories.map((group, groupIdx) => (
                <div key={group.category.id} className="space-y-4">
                  
                  {/* Category Header */}
                  <div className="pb-2 border-b border-[#1C1617]/10 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#B94E35] uppercase font-bold">
                        CHAPTER {String(groupIdx + 1).padStart(2, '0')}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#1C1617]">
                        {group.category.name}
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-[#1C1617]/50">{group.items.length} dishes</span>
                  </div>

                  {/* Dishes Flow (Dotted Leader Style) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-xl bg-white border border-[#EFE8DC] hover:border-[#D4AF37] transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-baseline justify-between gap-2">
                            <div className="flex items-center space-x-2 truncate">
                              <span
                                className={`w-3 h-3 rounded-sm border flex items-center justify-center shrink-0 ${
                                  item.isVeg ? 'border-emerald-600 bg-emerald-50' : 'border-rose-600 bg-rose-50'
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`}></span>
                              </span>
                              <h3 className="font-serif font-bold text-sm text-[#1C1617] group-hover:text-[#B94E35] transition-colors truncate">
                                {item.name}
                              </h3>
                            </div>
                            <span className="font-mono font-bold text-xs text-[#1C1617] shrink-0">
                              ₹{item.price}
                            </span>
                          </div>

                          {item.description && (
                            <p className="text-[11px] text-[#1C1617]/65 mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-2 mt-2 border-t border-[#FAF7F2] flex items-center justify-between text-[10px] font-mono">
                          <div className="flex items-center space-x-1.5">
                            {item.chefSpecial && (
                              <span className="px-1.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#927318] font-bold">
                                ★ Chef Special
                              </span>
                            )}
                            {item.spice && (
                              <span className="text-[#1C1617]/50">
                                {item.spice}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => onOpenEnquiry('restaurant')}
                            className="text-[#B94E35] hover:underline font-bold uppercase tracking-wider"
                          >
                            Order Table
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))
            )}

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: TAKEAWAY STRIP
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#EFE8DC]/60 border-t border-[#EFE8DC]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-[#1C1617] p-6 sm:p-8 rounded-2xl text-[#FAF7F2]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
              Direct Kitchen Takeaways
            </span>
            <h3 className="font-serif text-xl font-bold">
              Take Sharda Dinings Home
            </h3>
            <p className="text-xs text-[#FAF7F2]/70">
              Order fresh takeaway boxes directly via WhatsApp or telephone dispatch desk.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent('Hello Sharda Dinings, I would like to place a Direct Takeaway Order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1eb956] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Takeaway</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
