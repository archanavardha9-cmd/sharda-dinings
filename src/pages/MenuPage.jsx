import React, { useState, useMemo, useRef } from 'react';
import {
  Search,
  Sparkles,
  Printer,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Flame,
  Utensils,
  Award,
  Filter,
  ArrowDown,
  Heart,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
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
  ScrollRotate,
  FloatingCard,
  StaggerGrid
} from '../components/MotionExperience';

export default function MenuPage({ onOpenEnquiry, onOpenVerification }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);
  const fullCatalogRef = useRef(null);

  // Curated editorial showcase spotlight dishes (Stage 1)
  const spotlightChapters = [
    {
      num: '01',
      title: 'Awadhi Dum Dastarkhwan',
      subtitle: 'Slow Handi Dum & Royal Basmati',
      tag: 'Heritage Specialty',
      dish: 'Chicken Dum Biryani & Awadhi Veg Handi',
      desc: 'Aged long-grain basmati layered with marinated tender chicken or farm vegetables, infused with kewra, saffron, and sealed in clay handis over glowing charcoal embers.',
      image: '/images/food/sharda-dining-biryani.webp',
      pairing: 'Burani Garlic Raita & Mirchi Salan',
      quote: '“In every grain of basmati rests four generations of Awadhi culinary memory.”',
      accentColor: '#D4AF37',
      bgGradient: 'from-[#1E0E15] via-[#2A141E] to-[#12080D]',
      dishId: 'm32'
    },
    {
      num: '02',
      title: 'The Charcoal Clay Tandoor',
      subtitle: 'Sal Wood Embers & Potli Marinades',
      tag: 'Clay-Oven Charred',
      dish: 'Paneer Tikka Classic & Whole Tandoori Chicken',
      desc: 'Malai cottage cheese and whole spring poultry steeped overnight in stone-ground Kashmiri deghi mirch, hung curd, and mustard oil, charred to smoky perfection in our live tandoor.',
      image: '/images/food/tandoori-veg-platter.webp',
      pairing: 'Pudina Laccha Chutney & Charred Lemons',
      quote: '“Charred with genuine sal wood embers at 480°C for authentic clay-oven aroma.”',
      accentColor: '#E76F51',
      bgGradient: 'from-[#220D12] via-[#2E1218] to-[#16070B]',
      dishId: 'm5'
    },
    {
      num: '03',
      title: 'Royal Makhani & Slow Simmered Gravies',
      subtitle: 'Overnight Simmer & Cultured Dairy Butter',
      tag: 'Imperial Mughlai',
      dish: 'Dal Makhani Sharda Signature & Butter Chicken',
      desc: 'Whole black urad and slow-cooked tandoori chicken simmered in rich San Marzano tomato butter velouté, finished with freshly churned dairy butter and hand-crushed fenugreek.',
      image: '/images/food/dal-makhani-naan.jpg',
      pairing: 'Live Butter Garlic Naan & Tandoori Kulcha',
      quote: '“Simmered for sixteen hours over gentle charcoal embers for unmatched silken velvet texture.”',
      accentColor: '#F4A261',
      bgGradient: 'from-[#1F110A] via-[#2D180F] to-[#140B07]',
      dishId: 'm22'
    },
    {
      num: '04',
      title: 'Olive Cafe & Haute Pâtisserie',
      subtitle: 'Stone-Baked Pizzas, Alfredo Penne & Shahi Desserts',
      tag: 'Continental & Sweet Indulgence',
      dish: 'Hand-Stretched Margherita & Royal Shahi Gulab Jamun',
      desc: 'Thin-crust stone-baked Italian pizzas, al dente pasta folded into rich garlic-parmesan cream, alongside warm saffron-infused khoya dumplings bathed in rose nectar.',
      image: '/images/olive-cafe/corn-margherita-pizza.jpg',
      pairing: 'Signature Cold Brew & Nutella Shake',
      quote: '“Where European café culture meets centuries-old Indian royal confectionery art.”',
      accentColor: '#52B788',
      bgGradient: 'from-[#0C1B14] via-[#132A1F] to-[#08120D]',
      dishId: 'c1'
    }
  ];

  // Filtered menu items for Stage 2
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
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.pairing && item.pairing.toLowerCase().includes(searchQuery.toLowerCase()));

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

  const scrollToCatalog = () => {
    if (fullCatalogRef.current) {
      fullCatalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const currentSpotlight = spotlightChapters[activeSpotlightIdx];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          STAGE 1: CURATED GASTRONOMIC SHOWCASE (Ambiente & Mikuni Inspiration)
      ───────────────────────────────────────────────────────────── */}

      {/* Atmospheric Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1C0F13] via-[#14080E] to-[#0D0509] text-[#FAF7F2] border-b-2 border-[#D4AF37]/30 overflow-hidden">
        <FloatingSpiceCanvas theme="culinary" density="rich" />

        {/* Ambient Top Bar & Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pb-6 border-b border-[#FAF7F2]/10">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
              SHARDA DININGS · LA CARTE GASTRONOMIQUE
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-mono text-[#FAF7F2]/60">
            <span>48 Handcrafted Curations</span>
            <span>·</span>
            <span>Est. Gorakhpur</span>
          </div>
        </div>

        {/* Main Split Editorial Showcase (Mikuni Nagoya & Ambiente Style) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6.5 cols: Typography & Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollSlide direction="left" distance={45}>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curated Gastronomic Repertoire</span>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="up" distance={50} delay={0.1}>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#FAF7F2] leading-[1.08] tracking-tight">
                  Where Heritage <br />
                  <span className="italic font-normal text-[#F4A261] font-serif">Becomes Culinary Art</span>
                </h1>
              </ScrollSlide>

              <ScrollSlide direction="up" distance={40} delay={0.2}>
                <p className="text-sm sm:text-base text-[#FAF7F2]/80 font-light leading-relaxed max-w-xl font-serif">
                  Every recipe is crafted from stone-ground spices, clay-oven charcoal embers, and time-honoured Awadhi traditions. No shortcuts. No generic seasonings. Pure culinary dedication across 48 distinct master creations.
                </p>
              </ScrollSlide>

              {/* Quick Actions & Stage Transition Pill */}
              <ScrollSlide direction="up" distance={40} delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={scrollToCatalog}
                    className="group inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C84B31] via-[#D4AF37] to-[#C84B31] bg-size-200 hover:bg-right text-white text-xs font-bold uppercase tracking-widest transition-all duration-500 shadow-xl shadow-[#C84B31]/30 hover:scale-105 cursor-pointer"
                  >
                    <span>Explore All 48 Dishes</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry('restaurant')}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-[#D4AF37]/60 text-[#FAF7F2] hover:bg-[#D4AF37]/15 text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 cursor-pointer"
                  >
                    <Utensils className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Reserve a Table</span>
                  </button>
                </div>
              </ScrollSlide>

              {/* Gastronomic Credentials Strip */}
              <ScrollSlide direction="up" distance={30} delay={0.4}>
                <div className="pt-6 border-t border-[#FAF7F2]/10 grid grid-cols-3 gap-4 text-center sm:text-left">
                  <div>
                    <p className="text-2xl font-serif font-light text-[#D4AF37]">100%</p>
                    <p className="text-[11px] font-mono text-[#FAF7F2]/60 uppercase tracking-wider mt-0.5">Separate Satvik Kitchen</p>
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-light text-[#D4AF37]">480°C</p>
                    <p className="text-[11px] font-mono text-[#FAF7F2]/60 uppercase tracking-wider mt-0.5">Live Charcoal Tandoor</p>
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-light text-[#D4AF37]">16 hrs</p>
                    <p className="text-[11px] font-mono text-[#FAF7F2]/60 uppercase tracking-wider mt-0.5">Slow Coal Dal Makhani</p>
                  </div>
                </div>
              </ScrollSlide>
            </div>

            {/* Right 5 cols: Centerpiece Plating Breakout (Mikuni Nagoya style) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <ScrollRotate rotateFrom={-8} duration={1.2}>
                <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                  {/* Outer Glowing Halos */}
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#C84B31]/30 to-transparent blur-3xl animate-pulse"></div>
                  <div className="absolute -inset-2 rounded-full border border-dashed border-[#D4AF37]/40 animate-rotate-seal pointer-events-none"></div>

                  {/* Circular Plated Masterpiece */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FAF7F2]/80 shadow-2xl bg-[#1A0E13] group cursor-pointer">
                    <img
                      src={currentSpotlight.image}
                      alt={currentSpotlight.dish}
                      className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.98] group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                    {/* Dish Floating Label */}
                    <div className="absolute bottom-6 inset-x-6 text-center text-[#FAF7F2] space-y-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-[#D4AF37]/30">
                        {currentSpotlight.tag}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-normal tracking-wide">
                        {currentSpotlight.dish}
                      </h3>
                      <p className="text-[11px] font-mono text-[#FAF7F2]/75">
                        {currentSpotlight.pairing}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollRotate>
            </div>

          </div>
        </div>

        {/* Ambient Bottom Spotlight Chapter Switcher (Atelier Course Bar) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-[#FAF7F2]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {spotlightChapters.map((chap, idx) => {
              const isSelected = activeSpotlightIdx === idx;
              return (
                <button
                  key={chap.num}
                  onClick={() => setActiveSpotlightIdx(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 translate-y-[-2px]'
                      : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#D4AF37]">
                      CHAPTER {chap.num}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>}
                  </div>
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#FAF7F2] mt-1 truncate">
                    {chap.title}
                  </h4>
                  <p className="text-[10px] text-[#FAF7F2]/60 truncate font-light mt-0.5">
                    {chap.dish}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Chapter Spotlight Showcase (Atelier & Côte & Cendre Style) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#180C11] text-[#FAF7F2] border-b-2 border-[#D4AF37]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <ScrollSlide direction="down" distance={30}>
            <div className="text-center space-y-2 mb-10">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                GASTRONOMIC SPOTLIGHT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
                {currentSpotlight.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/70 font-light max-w-lg mx-auto font-serif italic">
                {currentSpotlight.quote}
              </p>
            </div>
          </ScrollSlide>

          {/* Large Split Editorial Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            
            {/* Left 6 cols: Dish Image with Floating Badges */}
            <div className="lg:col-span-6 relative">
              <ScrollZoom scaleFrom={0.92} duration={0.8}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border-2 border-white/10 group">
                  <img
                    src={currentSpotlight.image}
                    alt={currentSpotlight.dish}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#C84B31] text-white text-[10px] font-mono uppercase font-bold tracking-wider shadow-md">
                      {currentSpotlight.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono text-[#FAF7F2]">
                    <span className="bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm border border-white/15">
                      Pairing: {currentSpotlight.pairing}
                    </span>
                  </div>
                </div>
              </ScrollZoom>
            </div>

            {/* Right 6 cols: Deep Narrative & Pairings */}
            <div className="lg:col-span-6 space-y-5">
              <ScrollSlide direction="right" distance={40}>
                <div className="space-y-3">
                  <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                    CHAPTER {currentSpotlight.num} · {currentSpotlight.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF7F2]">
                    {currentSpotlight.dish}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed font-light">
                    {currentSpotlight.desc}
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="up" distance={30} delay={0.15}>
                <div className="p-4 rounded-xl bg-white/5 border border-[#D4AF37]/30 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold block">
                    Chef's Recommendation
                  </span>
                  <p className="text-xs text-[#FAF7F2]/80 font-serif italic">
                    Best experienced served piping hot straight from our kitchen, accompanied by our stone-ground house chutneys.
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="up" distance={30} delay={0.25}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenEnquiry('restaurant')}
                    className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#c29d2b] text-[#1C1617] text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
                  >
                    Reserve Table Experience
                  </button>

                  <button
                    onClick={scrollToCatalog}
                    className="px-5 py-3 rounded-full border border-white/20 text-[#FAF7F2] hover:bg-white/10 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer inline-flex items-center space-x-2"
                  >
                    <span>Jump to Full Menu</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollSlide>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STAGE 2: COMPLETE 48-DISH VISUAL CATALOG
      ───────────────────────────────────────────────────────────── */}
      <div ref={fullCatalogRef} id="full-catalog">
        
        {/* Sticky Filter Bar */}
        <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-[#D4AF37]/25 py-3.5 px-4 sm:px-6 shadow-md transition-all">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Search Input with Instant Clear */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#C84B31] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search all 48 dishes (Biryani, Paneer, Pizza)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 text-xs rounded-full bg-white border-2 border-[#EFE8DC] focus:outline-none focus:border-[#C84B31] text-[#1C1617] placeholder-[#1C1617]/50 shadow-sm transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-xs text-[#1C1617]/50 hover:text-[#1C1617] cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {[
                { id: 'all', label: 'All 48 Curations', count: 48 },
                { id: 'veg', label: 'Pure Veg', icon: '🟢', count: MENU_ITEMS.filter(i => i.isVeg).length },
                { id: 'nonveg', label: 'Poultry & Meat', icon: '🔴', count: MENU_ITEMS.filter(i => !i.isVeg).length },
                { id: 'special', label: 'Chef Specials', icon: '★', count: MENU_ITEMS.filter(i => i.chefSpecial).length },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDietaryFilter(d.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 border-2 ${
                    dietaryFilter === d.id
                      ? 'bg-[#C84B31] text-white border-[#C84B31] font-bold shadow-md scale-105'
                      : 'bg-white border-[#EFE8DC] text-[#1C1617]/75 hover:border-[#C84B31]/50 hover:scale-102'
                  }`}
                >
                  {d.icon && <span className="text-[10px]">{d.icon}</span>}
                  <span>{d.label}</span>
                  <span className={`text-[10px] ${dietaryFilter === d.id ? 'text-white/80' : 'text-[#1C1617]/50'}`}>
                    ({d.count})
                  </span>
                </button>
              ))}
            </div>

            {/* Print Action */}
            <div className="hidden lg:flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="px-4 py-1.5 rounded-full border border-[#D4AF37] text-xs font-mono font-bold text-[#1C1617] hover:bg-[#D4AF37]/15 transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#C84B31]" />
                <span>Print Menu</span>
              </button>
            </div>

          </div>
        </div>

        {/* Main Catalog Dual-Column Layout */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 3 cols: Sticky Category Navigation Index */}
            <div className="lg:col-span-3 lg:sticky lg:top-36 space-y-2 bg-gradient-to-b from-white to-[#FDF9F5] p-5 rounded-2xl border-2 border-[#D4AF37]/30 shadow-md">
              <ScrollSlide direction="left" distance={30}>
                <div className="pb-3 border-b-2 border-[#EFE8DC] flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C84B31] font-bold">
                    Menu Chapters
                  </span>
                  <span className="text-[10px] font-mono text-[#1C1617]/50">
                    48 Dishes
                  </span>
                </div>
              </ScrollSlide>
              
              <div className="space-y-1 max-h-[62vh] overflow-y-auto pr-1">
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
                          : 'text-[#1C1617]/75 hover:bg-[#FAF7F2] hover:text-[#1C1617] hover:translate-x-0.5'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <span className="text-sm shrink-0">{cat.icon}</span>
                        <span className="truncate">{cat.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#1C1617]/50 ml-2">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Special Dining Guidelines */}
              <div className="pt-4 border-t border-[#EFE8DC] space-y-2 text-[11px]">
                <div className="flex items-center space-x-2 text-[#2D6A4F] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Separate Satvik Utensils</span>
                </div>
                <p className="text-[#1C1617]/70 font-light leading-relaxed">
                  Jain meals prepared without onion or garlic upon prior notice to our captain.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenEnquiry('restaurant')}
                    className="w-full py-2 bg-[#C84B31] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-[#b33e26] transition-colors cursor-pointer shadow-sm text-center"
                  >
                    Table Reservation
                  </button>
                </div>
              </div>
            </div>

            {/* Right 9 cols: Visual Dishes Catalog (EVERY DISH HAS AN AUTHENTIC IMAGE) */}
            <div className="lg:col-span-9 space-y-12">
              
              {groupedCategories.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border-2 border-[#EFE8DC] space-y-3 shadow-sm">
                  <CutleryCrest className="w-12 h-12 text-[#C84B31] mx-auto opacity-50" />
                  <h3 className="font-serif text-2xl font-bold text-[#1C1617]">No Dishes Found</h3>
                  <p className="text-xs text-[#1C1617]/70 max-w-sm mx-auto font-light">
                    No items match your active filters or search terms. Try resetting.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                      setDietaryFilter('all');
                    }}
                    className="px-6 py-2.5 bg-[#C84B31] text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer hover:bg-[#b33e26] transition-colors shadow-md"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                groupedCategories.map((group, groupIdx) => (
                  <div key={group.category.id} className="space-y-6">
                    
                    {/* Chapter Header Banner */}
                    <ScrollSlide direction="right" distance={35}>
                      <div className="pb-3 border-b-2 border-[#1C1617]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-mono tracking-widest text-[#C84B31] uppercase font-bold bg-[#FDE8E1] px-2.5 py-0.5 rounded-md">
                              CHAPTER {String(groupIdx + 1).padStart(2, '0')}
                            </span>
                            <span className="text-xs font-mono text-[#D4AF37] font-semibold">
                              {group.category.tag}
                            </span>
                          </div>
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1617] mt-1.5 flex items-center space-x-2">
                            <span>{group.category.icon}</span>
                            <span>{group.category.name}</span>
                          </h2>
                        </div>
                        <span className="text-xs font-mono text-[#1C1617]/60 font-semibold bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#EFE8DC]">
                          {group.items.length} {group.items.length === 1 ? 'Creation' : 'Creations'}
                        </span>
                      </div>
                    </ScrollSlide>

                    {/* Staggered Visual Grid of Dishes (EVERY DISH HAS IMAGE, NO PRICES) */}
                    <StaggerGrid stagger={0.07} animation="pop" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {group.items.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-2xl bg-white border-2 border-[#EFE8DC] hover:border-[#D4AF37] transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                        >
                          {/* Dish Image Section */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1416]">
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98] group-hover:scale-108 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                            {/* Veg / Non-Veg Indicator Badge */}
                            <div className="absolute top-3 left-3 flex items-center space-x-2">
                              <span
                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shadow-md bg-white/95 backdrop-blur-sm ${
                                  item.isVeg ? 'border-emerald-600' : 'border-rose-600'
                                }`}
                              >
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                                  }`}
                                ></span>
                              </span>

                              {item.chefSpecial && (
                                <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#1C1617] text-[10px] font-mono font-bold shadow-md uppercase tracking-wider flex items-center space-x-1">
                                  <span>★</span>
                                  <span>Chef Special</span>
                                </span>
                              )}
                            </div>

                            {/* Spice Meter Badge */}
                            <div className="absolute top-3 right-3">
                              <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[#FAF7F2] text-[10px] font-mono">
                                {item.spice === 'Hot' && '🌶️🌶️ Hot'}
                                {item.spice === 'Medium' && '🌶️ Medium'}
                                {item.spice === 'Mild' && '🌿 Mild'}
                                {item.spice === 'Sweet' && '🍯 Sweet'}
                              </span>
                            </div>

                            {/* Bottom Image Overlay Dish Name */}
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                                {group.category.name}
                              </p>
                              <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#F4A261] transition-colors drop-shadow-md">
                                {item.name}
                              </h3>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                            <div className="space-y-2">
                              <p className="text-xs text-[#1C1617]/75 font-light leading-relaxed">
                                {item.description}
                              </p>

                              {item.pairing && (
                                <div className="pt-1 flex items-center space-x-1.5 text-[11px] font-mono text-[#C84B31]">
                                  <span className="text-[#C84B31]/60">Pairing:</span>
                                  <span className="font-semibold">{item.pairing}</span>
                                </div>
                              )}
                            </div>

                            {/* Action Bar (Zero prices) */}
                            <div className="pt-3 border-t border-[#FAF7F2] flex items-center justify-between text-xs">
                              <span className="text-[10px] font-mono text-[#1C1617]/50 uppercase tracking-wider">
                                Dine-In & Takeaway
                              </span>

                              <button
                                onClick={() => onOpenEnquiry('restaurant')}
                                className="px-3.5 py-1.5 rounded-lg bg-[#FAF0E6] hover:bg-[#C84B31] text-[#C84B31] hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1"
                              >
                                <span>Reserve Table</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
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

      </div>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: TAKEAWAY & PACKAGING QUALITY ASSURANCE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1C0F13] via-[#2A141E] to-[#12080D] text-[#FAF7F2] border-t-2 border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <ScrollSlide direction="left" distance={40} className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
              DELIVERY & TAKEAWAY ASSURANCE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light">
              Air-Tight Spill-Proof Handi Packaging
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed font-light font-serif">
              Designed for pilgrims in transit, temple visits, and family celebrations at home. Our thermal food-grade containers lock in aroma and heat for up to two hours.
            </p>
          </ScrollSlide>
          
          <ScrollSlide direction="right" distance={40} className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.ordering.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#E23744] hover:bg-[#c92f3b] text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-[#E23744]/30"
            >
              <span>Order on Zomato</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={BUSINESS_INFO.ordering.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#FC8019] hover:bg-[#e07114] text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-[#FC8019]/30"
            >
              <span>Order on Swiggy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].number}`}
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#c29d2b] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-xl font-mono"
            >
              Call Takeaway Desk
            </a>
          </ScrollSlide>

        </div>
      </section>

    </div>
  );
}
