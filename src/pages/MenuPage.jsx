import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import {
  Search,
  Sparkles,
  Printer,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Utensils,
  ArrowDown,
  CheckCircle2,
  Play,
  Pause,
  SlidersHorizontal,
  X,
  RotateCcw
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { CutleryCrest } from '../components/DecorativeGraphics';
import {
  FloatingSpiceCanvas,
  RisingGrainsCanvas,
  ScrollSlide,
  ScrollZoom,
  ScrollRotate,
  SectionBackground
} from '../components/MotionExperience';

const NAVBAR_HEIGHT = 64; // Matches h-16 fixed/sticky header in Navbar.jsx

export default function MenuPage({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);
  const [isSpotlightPaused, setIsSpotlightPaused] = useState(false);
  const [mobileCategoryDrawerOpen, setMobileCategoryDrawerOpen] = useState(false);
  const [toolbarHeight, setToolbarHeight] = useState(68);

  const fullCatalogRef = useRef(null);
  const stickyToolbarRef = useRef(null);

  // Measure horizontal toolbar height dynamically so the desktop/tablet sticky sidebar never overlaps it
  useEffect(() => {
    const toolbarEl = stickyToolbarRef.current;
    if (!toolbarEl) return;

    const updateHeight = () => {
      setToolbarHeight(toolbarEl.offsetHeight || 68);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(toolbarEl);
    window.addEventListener('resize', updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // Preload all 48 menu images asynchronously in background so first-click category/filter switches are instant
  useEffect(() => {
    MENU_ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  // Handle Escape key and background scroll lock when mobile category drawer is open
  useEffect(() => {
    if (!mobileCategoryDrawerOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileCategoryDrawerOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileCategoryDrawerOpen]);

  // Fast category lookup for search matching and labels
  const categoryLookup = useMemo(() => {
    const map = {};
    MENU_CATEGORIES.forEach((cat) => {
      map[cat.id] = cat;
    });
    return map;
  }, []);

  // Curated editorial showcase spotlight dishes
  const spotlightCurations = [
    {
      id: 'spot-1',
      num: '01',
      collection: 'Awadhi Dum Dastarkhwan',
      tag: 'Heritage Signature',
      dish: 'Chicken Dum Biryani & Awadhi Veg Handi',
      desc: 'Aged long-grain basmati layered with marinated tender chicken or farm vegetables, infused with natural kewra, royal saffron, and sealed in clay handis over glowing charcoal embers.',
      image: '/images/food/sharda-dining-biryani.webp',
      pairing: 'Burani Garlic Raita & Mirchi Salan',
      quote: '“In every grain of basmati rests four generations of Awadhi culinary memory.”',
      time: 'Slow Handi Dum',
      temp: 'Coal-Sealed Embers'
    },
    {
      id: 'spot-2',
      num: '02',
      collection: 'Charcoal Clay Tandoor',
      tag: 'Live Fire Clay Oven',
      dish: 'Paneer Tikka Classic & Whole Tandoori Chicken',
      desc: 'Malai cottage cheese and whole spring poultry steeped overnight in stone-ground Kashmiri deghi mirch, hung curd, and mustard oil, charred to smoky perfection in our live tandoor.',
      image: '/images/food/tandoori-chicken.webp',
      pairing: 'Pudina Laccha Chutney & Charred Lemons',
      quote: '“Charred with genuine sal wood embers at 480°C for authentic clay-oven aroma.”',
      time: 'Overnight Marinade',
      temp: '480°C Live Tandoor'
    },
    {
      id: 'spot-3',
      num: '03',
      collection: 'Royal Makhani & Slow Simmered Gravies',
      tag: 'Imperial Mughlai',
      dish: 'Dal Makhani Sharda Signature & Butter Chicken',
      desc: 'Whole black urad and slow-cooked tandoori chicken simmered in rich San Marzano tomato butter velouté, finished with freshly churned dairy butter and hand-crushed fenugreek.',
      image: '/images/food/dal-makhani-naan.webp',
      pairing: 'Live Butter Garlic Naan & Tandoori Kulcha',
      quote: '“Simmered for sixteen hours over gentle charcoal embers for unmatched silken velvet texture.”',
      time: '16-Hour Charcoal Simmer',
      temp: 'Slow Simmered Handi'
    },
    {
      id: 'spot-4',
      num: '04',
      collection: 'Olive Cafe Continental & Italian Hearth',
      tag: 'Stone-Baked & Handcrafted',
      dish: 'Stone-Baked Margherita & Creamy Alfredo Penne',
      desc: 'Hand-stretched thin-crust pizza baked with San Marzano pomodoro and creamy mozzarella, paired with al dente pasta folded into rich garlic-parmesan cream.',
      image: '/images/olive-cafe/corn-margherita-pizza.webp',
      pairing: 'Signature Chilled Arabica Cold Brew',
      quote: '“European cafe warmth and authentic hearth baking right in the heart of Gorakhpur.”',
      time: 'Live Hearth Oven',
      temp: 'Stone-Baked Crust'
    },
    {
      id: 'spot-5',
      num: '05',
      collection: 'Royal Shahi Confectionery & Shakes',
      tag: 'Artisanal Dessert Feast',
      dish: 'Royal Shahi Gulab Jamun & Choco Fudge Sundae',
      desc: 'Warm saffron and green cardamom infused khoya dumplings bathed in fragrant rose-sugar syrup, alongside warm walnut brownie sundaes crowned with Belgian chocolate ganache.',
      image: '/images/food/shahi-gulab-jamun.webp',
      pairing: 'Rabri Cream or Vanilla Bean Scoop',
      quote: '“Centuries-old Indian royal confectionery art meets modern artisanal sundae indulgence.”',
      time: 'Slow Khoya Simmer',
      temp: 'Rose-Saffron Nectar'
    }
  ];

  // Curated hero showcase dishes that continuously change independently
  const heroShowcaseImages = [
    {
      image: '/images/food/sharda-dining-biryani.webp',
      dish: 'Chicken Dum Biryani & Awadhi Veg Handi',
      tag: 'Heritage Signature',
      pairing: 'Burani Garlic Raita & Mirchi Salan'
    },
    {
      image: '/images/food/tandoori-chicken.webp',
      dish: 'Paneer Tikka Classic & Whole Tandoori Chicken',
      tag: 'Live Fire Clay Oven',
      pairing: 'Pudina Laccha Chutney & Charred Lemons'
    },
    {
      image: '/images/food/dal-makhani-naan.webp',
      dish: 'Dal Makhani Sharda Signature & Butter Chicken',
      tag: 'Imperial Mughlai',
      pairing: 'Live Butter Garlic Naan & Tandoori Kulcha'
    },
    {
      image: '/images/olive-cafe/corn-margherita-pizza.webp',
      dish: 'Stone-Baked Margherita & Creamy Alfredo Penne',
      tag: 'Stone-Baked & Handcrafted',
      pairing: 'Signature Chilled Arabica Cold Brew'
    },
    {
      image: '/images/food/shahi-gulab-jamun.webp',
      dish: 'Royal Shahi Gulab Jamun & Choco Fudge Sundae',
      tag: 'Artisanal Dessert Feast',
      pairing: 'Rabri Cream or Vanilla Bean Scoop'
    }
  ];

  const [activeHeroImgIdx, setActiveHeroImgIdx] = useState(0);

  // Independent automatic rotation for Hero Section images (every 5 seconds)
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setActiveHeroImgIdx((prev) => (prev + 1) % heroShowcaseImages.length);
    }, 5000);

    return () => clearInterval(heroTimer);
  }, [heroShowcaseImages.length]);

  const currentHeroShowcase = heroShowcaseImages[activeHeroImgIdx];

  // Automatic cycling for Gastronomic Spotlight (every 4.5 seconds)
  useEffect(() => {
    if (isSpotlightPaused) return;
    const timer = setInterval(() => {
      setActiveSpotlightIdx((prev) => (prev + 1) % spotlightCurations.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isSpotlightPaused, spotlightCurations.length]);

  // Dietary counts calculated accurately against active category & search or global totals
  const dietaryCounts = useMemo(() => ({
    all: MENU_ITEMS.length,
    veg: MENU_ITEMS.filter((i) => i.isVeg).length,
    nonveg: MENU_ITEMS.filter((i) => !i.isVeg).length,
    special: MENU_ITEMS.filter((i) => i.chefSpecial).length,
  }), []);

  // Filtered menu items for Stage 2 (matches name, description, pairing, and category metadata)
  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDietary =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'nonveg' && !item.isVeg) ||
        (dietaryFilter === 'special' && item.chefSpecial);

      if (!matchesCategory || !matchesDietary) return false;
      if (!normalizedQuery) return true;

      const catMeta = categoryLookup[item.category];
      return (
        item.name.toLowerCase().includes(normalizedQuery) ||
        (item.description && item.description.toLowerCase().includes(normalizedQuery)) ||
        (item.pairing && item.pairing.toLowerCase().includes(normalizedQuery)) ||
        (catMeta && catMeta.name.toLowerCase().includes(normalizedQuery)) ||
        (catMeta && catMeta.tag.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [activeCategory, dietaryFilter, searchQuery, categoryLookup]);

  // Group filtered dishes cleanly by category
  const groupedCategories = useMemo(() => {
    if (activeCategory !== 'all') {
      const cat = categoryLookup[activeCategory];
      if (!cat || filteredItems.length === 0) return [];
      return [{ category: cat, items: filteredItems }];
    }

    return MENU_CATEGORIES.filter((c) => c.id !== 'all')
      .map((cat) => {
        const items = filteredItems.filter((i) => i.category === cat.id);
        return { category: cat, items };
      })
      .filter((group) => group.items.length > 0);
  }, [activeCategory, filteredItems, categoryLookup]);

  const scrollToCatalog = useCallback(() => {
    if (!fullCatalogRef.current) return;
    const top = fullCatalogRef.current.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, []);

  // Keep user cleanly positioned at the top of the catalog if they switch category/filter while scrolled far down
  const ensureCatalogInView = useCallback(() => {
    if (!fullCatalogRef.current) return;
    const catalogTop = fullCatalogRef.current.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    if (window.scrollY > catalogTop + 24) {
      window.scrollTo({ top: Math.max(0, catalogTop), behavior: 'smooth' });
    }
  }, []);

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setMobileCategoryDrawerOpen(false);
    // Wait a tick for filtered height to settle before aligning scroll position
    requestAnimationFrame(() => {
      ensureCatalogInView();
    });
  };

  const handleSelectDietary = (dietaryId) => {
    setDietaryFilter(dietaryId);
    requestAnimationFrame(() => {
      ensureCatalogInView();
    });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setDietaryFilter('all');
  };

  const handlePrint = () => {
    window.print();
  };

  const currentSpotlight = spotlightCurations[activeSpotlightIdx];
  const activeCategoryMeta = categoryLookup[activeCategory] || MENU_CATEGORIES[0];
  const hasActiveFilters = activeCategory !== 'all' || dietaryFilter !== 'all' || searchQuery.trim() !== '';

  return (
    /* Use overflow-x-clip instead of overflow-hidden so CSS position: sticky works reliably */
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-x-clip">
      
      {/* ─────────────────────────────────────────────────────────────
          STAGE 1: CURATED GASTRONOMIC SHOWCASE
      ───────────────────────────────────────────────────────────── */}

      {/* Atmospheric Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1C0F13] via-[#14080E] to-[#0D0509] text-[#FAF7F2] border-b-2 border-[#D4AF37]/30 overflow-hidden">
        <FloatingSpiceCanvas theme="culinary" density="rich" />
        <RisingGrainsCanvas />

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

        {/* Main Split Editorial Showcase */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 cols: Typography & Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollSlide direction="left" distance={45}>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
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

              {/* Quick Actions & Stage Transition */}
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

              {/* Desktop & Tablet: Gastronomic Credentials Strip in Left Column */}
              <div className="hidden sm:block">
                <ScrollSlide direction="up" distance={30} delay={0.4}>
                  <div className="pt-6 border-t border-[#FAF7F2]/10 grid grid-cols-3 gap-4 text-left">
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
            </div>

            {/* Right 5 cols: Centerpiece Plating Breakout (Independent Automatic Rotation) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <ScrollRotate rotateFrom={-8} duration={1.2}>
                <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                  {/* Outer Glowing Halos */}
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#C84B31]/30 to-transparent blur-3xl animate-pulse"></div>
                  <div className="absolute -inset-2 rounded-full border border-dashed border-[#D4AF37]/40 animate-rotate-seal pointer-events-none"></div>

                  {/* Circular Plated Masterpiece */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FAF7F2]/80 shadow-2xl bg-[#1A0E13] group cursor-pointer">
                    <img
                      key={currentHeroShowcase.image}
                      src={currentHeroShowcase.image}
                      alt={currentHeroShowcase.dish}
                      className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.98] group-hover:scale-110 transition-transform duration-700 animate-fadeIn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Dish Floating Label */}
                    <div className="absolute bottom-6 inset-x-6 text-center text-[#FAF7F2] space-y-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-[#D4AF37]/30">
                        {currentHeroShowcase.tag}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-normal tracking-wide">
                        {currentHeroShowcase.dish}
                      </h3>
                      <p className="text-[11px] font-mono text-[#FAF7F2]/75">
                        {currentHeroShowcase.pairing}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollRotate>

              {/* Mobile-Only: 3 Hero Statistics Displayed Directly Below Hero Image */}
              <div className="sm:hidden w-full max-w-sm mt-8 pt-6 border-t border-[#FAF7F2]/15 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xl font-serif font-light text-[#D4AF37]">100%</p>
                  <p className="text-[10px] font-mono text-[#FAF7F2]/70 uppercase tracking-wider mt-0.5 leading-tight">Separate Satvik Kitchen</p>
                </div>
                <div>
                  <p className="text-xl font-serif font-light text-[#D4AF37]">480°C</p>
                  <p className="text-[10px] font-mono text-[#FAF7F2]/70 uppercase tracking-wider mt-0.5 leading-tight">Live Charcoal Tandoor</p>
                </div>
                <div>
                  <p className="text-xl font-serif font-light text-[#D4AF37]">16 hrs</p>
                  <p className="text-[10px] font-mono text-[#FAF7F2]/70 uppercase tracking-wider mt-0.5 leading-tight">Slow Coal Dal Makhani</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          DYNAMIC GASTRONOMIC SPOTLIGHT SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#180C11] text-[#FAF7F2] border-b-2 border-[#D4AF37]/20 relative overflow-hidden"
      >
        <SectionBackground theme="menu-spotlight" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <ScrollSlide direction="down" distance={30}>
              <div className="text-center sm:text-left space-y-1">
                <div className="flex items-center space-x-2 justify-center sm:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#C84B31] animate-ping"></span>
                  <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                    GASTRONOMIC SPOTLIGHT
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2]">
                  {currentSpotlight.collection}
                </h2>
              </div>
            </ScrollSlide>

            {/* Spotlight Controls: Pause / Resume Button */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setIsSpotlightPaused((prev) => !prev)}
                aria-label={isSpotlightPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 hover:border-[#D4AF37] text-xs font-mono transition-all text-[#FAF7F2] cursor-pointer shadow-sm"
              >
                {isSpotlightPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="text-[#D4AF37] font-semibold">Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Chapter 1–5 Interactive Selection Cards (Visible navigation for Gastronomic Spotlight) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5 mb-8">
            {spotlightCurations.map((curation, idx) => {
              const isSelected = activeSpotlightIdx === idx;
              return (
                <button
                  key={curation.id}
                  onClick={() => setActiveSpotlightIdx(idx)}
                  className={`text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                  } ${
                    isSelected
                      ? 'bg-white/15 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-[1.01]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                      CHAPTER {curation.num}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>}
                  </div>
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#FAF7F2] mt-1 line-clamp-1 sm:truncate">
                    {curation.collection}
                  </h4>
                  {/* Chapter description: hidden on mobile view, visible on desktop and tablet */}
                  <p className="hidden sm:block text-[10px] text-[#FAF7F2]/60 truncate font-light mt-0.5 font-serif">
                    {curation.dish}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Large Split Editorial Spotlight Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative">
            
            {/* Left 6 cols: Dish Image with Floating Badges */}
            <div className="lg:col-span-6 relative">
              <ScrollZoom scaleFrom={0.92} duration={0.8}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border-2 border-white/10 group">
                  <img
                    key={currentSpotlight.image}
                    src={currentSpotlight.image}
                    alt={currentSpotlight.dish}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-fadeIn"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-[#C84B31] text-white text-[10px] font-mono uppercase font-bold tracking-wider shadow-md">
                      {currentSpotlight.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-[#D4AF37] text-[10px] font-mono">
                      {currentSpotlight.num} of 05
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

            {/* Right 6 cols: Deep Narrative, Technique & Pairings */}
            <div className="lg:col-span-6 space-y-5">
              <ScrollSlide direction="right" distance={40}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs font-mono text-[#D4AF37]">
                    <span className="uppercase font-bold tracking-wider">{currentSpotlight.time}</span>
                    <span>·</span>
                    <span className="text-white/60">{currentSpotlight.temp}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF7F2]">
                    {currentSpotlight.dish}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed font-light font-serif">
                    {currentSpotlight.desc}
                  </p>
                  <p className="text-xs italic text-[#F4A261]/90 font-serif pt-1">
                    {currentSpotlight.quote}
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="up" distance={30} delay={0.15}>
                <div className="p-4 rounded-xl bg-white/5 border border-[#D4AF37]/30 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold block">
                    Chef's Craftsmanship
                  </span>
                  <p className="text-xs text-[#FAF7F2]/80 font-serif italic">
                    Best experienced served piping hot straight from our kitchen, accompanied by our stone-ground house chutneys and fresh clay-oven tandoori breads.
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
                    <span>Browse All 48 Dishes</span>
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
          - Clean Horizontal Search & Dietary Toolbar (NO duplicate categories)
          - Sticky Vertical Category Sidebar on Desktop & Tablet
          - Compact Collapsible Category Drawer on Mobile ("Browse Categories")
      ───────────────────────────────────────────────────────────── */}
      <div ref={fullCatalogRef} id="full-catalog" className="scroll-mt-16">
        
        {/* Sticky Horizontal Search, Dietary, Chef Special & Print Toolbar */}
        <div
          ref={stickyToolbarRef}
          data-testid="menu-horizontal-toolbar"
          className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-[#D4AF37]/25 shadow-sm transition-shadow print:hidden"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 md:py-3 space-y-2 md:space-y-0">
            
            {/* Main Toolbar Controls (Search + Dietary + Chef Special + Print) */}
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:items-center md:justify-between gap-2.5 lg:gap-4">
              
              {/* Search Input + Mobile Print Button */}
              <div className="flex items-center gap-2 w-full md:w-64 lg:w-72 xl:w-80 shrink-0">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#C84B31] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    aria-label="Search menu dishes"
                    placeholder="Search dishes, ingredients, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-8 py-2 text-xs rounded-full bg-white border-2 border-[#EFE8DC] focus:outline-none focus:border-[#C84B31] text-[#1C1617] placeholder-[#1C1617]/50 shadow-sm transition-colors font-sans"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#1C1617]/60 hover:text-[#1C1617] p-0.5 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Compact Print button visible on Mobile */}
                <button
                  type="button"
                  onClick={handlePrint}
                  aria-label="Print Menu"
                  className="md:hidden shrink-0 px-3 py-2 rounded-full bg-white border-2 border-[#D4AF37]/60 text-xs font-mono font-bold text-[#1C1617] hover:bg-[#D4AF37]/15 flex items-center space-x-1.5 shadow-sm cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-[#C84B31]" />
                  <span className="hidden xs:inline">Print</span>
                </button>
              </div>

              {/* Dietary & Chef Special Filters (Horizontally scrollable on narrow phones) */}
              <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-0.5 w-full md:w-auto">
                {[
                  { id: 'all', label: 'All 48 Dishes', count: dietaryCounts.all },
                  { id: 'veg', label: 'Pure Veg', icon: '🟢', count: dietaryCounts.veg },
                  { id: 'nonveg', label: 'Poultry & Meat', icon: '🔴', count: dietaryCounts.nonveg },
                  { id: 'special', label: 'Chef Specials', icon: '★', count: dietaryCounts.special },
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => handleSelectDietary(d.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 border-2 shrink-0 ${
                      dietaryFilter === d.id
                        ? 'bg-[#C84B31] text-white border-[#C84B31] font-bold shadow-sm'
                        : 'bg-white border-[#EFE8DC] text-[#1C1617]/80 hover:border-[#C84B31]/50'
                    }`}
                  >
                    {d.icon && <span className="text-[10px]">{d.icon}</span>}
                    <span>{d.label}</span>
                    <span className={`text-[10px] ${dietaryFilter === d.id ? 'text-white/85' : 'text-[#1C1617]/50'}`}>
                      ({d.count})
                    </span>
                  </button>
                ))}
              </div>

              {/* Print Menu Button (Tablet & Desktop) */}
              <div className="hidden md:flex items-center shrink-0">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-1.5 rounded-full bg-white border-2 border-[#D4AF37]/70 text-xs font-mono font-bold text-[#1C1617] hover:bg-[#D4AF37]/15 transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5 text-[#C84B31]" />
                  <span>Print Menu</span>
                </button>
              </div>

            </div>

            {/* Mobile-only Sticky Category Drawer Trigger Bar */}
            <div className="flex md:hidden items-center justify-between gap-2 pt-2 border-t border-[#EFE8DC]">
              <button
                type="button"
                onClick={() => setMobileCategoryDrawerOpen(true)}
                aria-expanded={mobileCategoryDrawerOpen}
                aria-controls="mobile-category-drawer"
                className="flex-1 min-w-0 flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border-2 border-[#D4AF37]/45 text-xs font-semibold text-[#1C1617] hover:border-[#C84B31] transition-colors shadow-sm cursor-pointer"
              >
                <span className="flex items-center space-x-2 truncate">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#C84B31] shrink-0" />
                  <span className="font-mono uppercase tracking-wider text-[11px] text-[#C84B31] font-bold shrink-0">
                    Browse Categories
                  </span>
                  <span className="text-[#1C1617]/40 shrink-0">·</span>
                  <span className="truncate text-[#1C1617]">{activeCategoryMeta.icon} {activeCategoryMeta.name}</span>
                </span>
                <ChevronDown className="w-4 h-4 text-[#C84B31] shrink-0 ml-1" />
              </button>

              <span className="shrink-0 px-2.5 py-2 rounded-xl bg-[#FAF0E6] text-[#C84B31] text-[11px] font-mono font-bold">
                {filteredItems.length} {filteredItems.length === 1 ? 'Dish' : 'Dishes'}
              </span>
            </div>

          </div>
        </div>

        {/* Main Catalog Dual-Column Layout (Desktop & Tablet Vertical Sidebar + Dish Grid) */}
        <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          <SectionBackground theme="menu-catalog" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
            
            {/* Left Vertical Dish-Category Navigation (Desktop & Tablet Sticky Sidebar - Primary Category Browser) */}
            <aside
              data-testid="desktop-category-sidebar"
              style={{ top: `${NAVBAR_HEIGHT + toolbarHeight + 12}px` }}
              className="hidden md:block md:col-span-4 lg:col-span-3 md:sticky space-y-2.5 bg-gradient-to-b from-white to-[#FDF9F5] p-4 lg:p-5 rounded-2xl border-2 border-[#D4AF37]/30 shadow-md print:hidden"
            >
              <div className="pb-3 border-b-2 border-[#EFE8DC] flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#C84B31] font-bold">
                  Explore Categories
                </span>
                <span className="text-[10px] font-mono text-[#1C1617]/50">
                  48 Dishes
                </span>
              </div>
              
              <nav aria-label="Menu Categories" className="space-y-1 max-h-[52vh] overflow-y-auto pr-1">
                {MENU_CATEGORIES.map((cat) => {
                  const count = MENU_ITEMS.filter((i) => cat.id === 'all' || i.category === cat.id).length;
                  const isActive = activeCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#FDE8E1] text-[#C84B31] font-bold border-l-4 border-[#C84B31] shadow-sm'
                          : 'text-[#1C1617]/80 hover:bg-[#FAF7F2] hover:text-[#1C1617]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 min-w-0">
                        <span className="text-sm shrink-0">{cat.icon}</span>
                        <span className="truncate">{cat.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#1C1617]/55 ml-2 shrink-0">({count})</span>
                    </button>
                  );
                })}
              </nav>

              {/* Special Dining Guidelines */}
              <div className="pt-3 border-t border-[#EFE8DC] space-y-2 text-[11px]">
                <div className="flex items-center space-x-2 text-[#2D6A4F] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Separate Satvik Utensils</span>
                </div>
                <p className="text-[#1C1617]/70 font-light leading-relaxed">
                  Jain meals prepared without onion or garlic upon prior notice to our captain.
                </p>
                <div className="pt-1.5">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('restaurant')}
                    className="w-full py-2 bg-[#C84B31] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-[#b33e26] transition-colors cursor-pointer shadow-sm text-center"
                  >
                    Table Reservation
                  </button>
                </div>
              </div>
            </aside>

            {/* Right Column: Visual Dishes Catalog */}
            <div className="col-span-1 md:col-span-8 lg:col-span-9 space-y-10 min-w-0">
              
              {/* Active Filter Summary Strip */}
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white border border-[#D4AF37]/35 shadow-sm text-xs">
                  <div className="flex flex-wrap items-center gap-2 text-[#1C1617]/80">
                    <span className="font-mono font-bold text-[#C84B31]">
                      Showing {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
                    </span>
                    {activeCategory !== 'all' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E6] text-[#C84B31] font-medium">
                        {activeCategoryMeta.icon} {activeCategoryMeta.name}
                      </span>
                    )}
                    {dietaryFilter !== 'all' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E6] text-[#1C1617] font-medium uppercase font-mono text-[10px]">
                        {dietaryFilter === 'veg' ? 'Pure Veg' : dietaryFilter === 'nonveg' ? 'Poultry & Meat' : 'Chef Specials'}
                      </span>
                    )}
                    {searchQuery.trim() !== '' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFE8DC] text-[#1C1617] font-mono text-[10px]">
                        Query: “{searchQuery.trim()}”
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center space-x-1 text-[11px] font-mono font-bold text-[#C84B31] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset All</span>
                  </button>
                </div>
              )}

              {groupedCategories.length === 0 ? (
                <div className="text-center py-16 px-4 bg-white rounded-3xl border-2 border-[#EFE8DC] space-y-4 shadow-sm">
                  <CutleryCrest className="w-12 h-12 text-[#C84B31] mx-auto opacity-50" />
                  <h3 className="font-serif text-2xl font-bold text-[#1C1617]">No Matching Dishes Found</h3>
                  <p className="text-xs text-[#1C1617]/70 max-w-md mx-auto font-light leading-relaxed">
                    No dishes matched your current combination of search query, category, and dietary filter.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {activeCategory !== 'all' && searchQuery.trim() !== '' && (
                      <button
                        type="button"
                        onClick={() => setActiveCategory('all')}
                        className="px-5 py-2.5 bg-[#FAF0E6] text-[#C84B31] border border-[#C84B31]/40 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer hover:bg-[#FDE8E1] transition-colors"
                      >
                        Search “{searchQuery.trim()}” in All Categories
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="px-6 py-2.5 bg-[#C84B31] text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer hover:bg-[#b33e26] transition-colors shadow-md"
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              ) : (
                groupedCategories.map((group) => (
                  <div key={group.category.id} className="space-y-5">
                    
                    {/* Category Header Banner (Always immediately visible, never trapped at opacity: 0) */}
                    <div className="pb-3 border-b-2 border-[#1C1617]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-mono tracking-widest text-[#C84B31] uppercase font-bold bg-[#FDE8E1] px-2.5 py-0.5 rounded-md">
                            {group.category.tag}
                          </span>
                        </div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1617] mt-1.5 flex items-center space-x-2">
                          <span>{group.category.icon}</span>
                          <span>{group.category.name}</span>
                        </h2>
                      </div>
                      <span className="text-xs font-mono text-[#1C1617]/60 font-semibold bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#EFE8DC] self-start sm:self-auto">
                        {group.items.length} {group.items.length === 1 ? 'Creation' : 'Creations'}
                      </span>
                    </div>

                    {/* Dish Cards Grid: Tablet uses 1 spacious col so cards don't squeeze beside sidebar; Desktop uses 2 cols */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {group.items.map((item) => (
                        <article
                          key={item.id}
                          className="animate-menu-card rounded-2xl bg-white border-2 border-[#EFE8DC] hover:border-[#D4AF37] transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                        >
                          {/* Dish Image Section (Eager loading guarantees immediate rendering on every filter/category change) */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1416]">
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="eager"
                              decoding="async"
                              className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-45 transition-opacity"></div>

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
                                type="button"
                                onClick={() => onOpenEnquiry('restaurant')}
                                className="px-3.5 py-1.5 rounded-lg bg-[#FAF0E6] hover:bg-[#C84B31] text-[#C84B31] hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1 print:hidden"
                              >
                                <span>Reserve Table</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                        </article>
                      ))}
                    </div>

                  </div>
                ))
              )}

            </div>

          </div>
        </section>

      </div>

      {/* Mobile Collapsible Category Drawer (compact 78% left drawer, non-fullscreen, renders at root level) */}
      <div
        id="mobile-category-drawer"
        aria-hidden={!mobileCategoryDrawerOpen}
        className={`fixed inset-0 z-50 md:hidden transition-visibility duration-300 ${
          mobileCategoryDrawerOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
      >
        {/* Subtle Backdrop Overlay - taps outside close drawer */}
        <div
          onClick={() => setMobileCategoryDrawerOpen(false)}
          aria-label="Close categories overlay"
          className={`absolute inset-0 bg-black/40 backdrop-blur-[1.5px] transition-opacity duration-300 ${
            mobileCategoryDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Compact Left Category Panel */}
        <aside
          role="dialog"
          aria-modal={mobileCategoryDrawerOpen}
          aria-label="Browse Menu Categories"
          className={`fixed top-0 left-0 bottom-0 w-[78vw] max-w-[310px] bg-[#FAF7F2] text-[#1C1617] border-r-2 border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileCategoryDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-[#1C1617] text-[#FAF7F2] border-b border-[#D4AF37]/30">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
                Menu Directory
              </span>
              <h3 className="font-serif text-base font-semibold">Explore Categories</h3>
            </div>
            <button
              type="button"
              onClick={() => setMobileCategoryDrawerOpen(false)}
              aria-label="Close categories panel"
              className="p-2 rounded-full text-[#FAF7F2]/80 hover:text-[#D4AF37] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category List */}
          <nav aria-label="Mobile Menu Categories" className="flex-1 overflow-y-auto p-3 space-y-1.5">
            {MENU_CATEGORIES.map((cat) => {
              const count = MENU_ITEMS.filter((i) => cat.id === 'all' || i.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#C84B31] text-white font-bold shadow-md'
                      : 'bg-white text-[#1C1617]/85 border border-[#EFE8DC] hover:border-[#D4AF37]'
                  }`}
                >
                  <span className="flex items-center space-x-2.5 min-w-0">
                    <span className="text-base shrink-0">{cat.icon}</span>
                    <span className="truncate">{cat.name}</span>
                  </span>
                  <span className={`text-[10px] font-mono ml-2 shrink-0 ${isActive ? 'text-white/90' : 'text-[#1C1617]/50'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Drawer Footer */}
          <div className="p-3.5 border-t border-[#EFE8DC] bg-white space-y-2 text-[11px]">
            <div className="flex items-center space-x-2 text-[#2D6A4F] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Separate Satvik Utensils Available</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileCategoryDrawerOpen(false);
                onOpenEnquiry('restaurant');
              }}
              className="w-full py-2 bg-[#C84B31] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-[#b33e26] transition-colors cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>
        </aside>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: TAKEAWAY & PACKAGING QUALITY ASSURANCE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1C0F13] via-[#2A141E] to-[#12080D] text-[#FAF7F2] border-t-2 border-[#D4AF37]/30 print:hidden">
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
