import React, { useMemo, useState } from 'react';
import { Download, ExternalLink, MessageSquare, Printer, Search, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EditorialImage } from '../components/SiteBlocks';
import {
  ContinuousImageStream,
  OrbitalRingBackdrop,
  ParallaxLayer,
  Reveal,
} from '../components/MotionBlocks';
import { usePageSeo } from '../utils/seo';
import dalMakhaniImg from '../assets/images/dal_makhani_naan_1795201046179.jpg';
import butterChickenImg from '../assets/images/butter_chicken_kulcha_1795201049476.jpg';
import cornPizzaImg from '../assets/images/corn_margherita_pizza_1795201048660.jpg';
import oreoShakeImg from '../assets/images/nutella_oreo_shakes_1795201048991.jpg';

const MENU_RIBBON = [
  { src: '/images/food/tandoori-veg-platter.webp', label: 'Paneer Tikka & Veg Platter', shape: 'landscape' },
  { src: dalMakhaniImg, label: 'Dal Makhani (Culinary Styling)', shape: 'square' },
  { src: '/images/food/sharda-dinings-hyderabadi-biryani.webp', label: 'Awadhi Handi Biryani · ₹380', shape: 'landscape' },
  { src: butterChickenImg, label: 'Butter Chicken (Culinary Styling)', shape: 'square' },
  { src: '/images/food/shanghai-chilli-paneer.webp', label: 'Crispy Chilli Paneer · ₹320', shape: 'portrait' },
  { src: cornPizzaImg, label: 'Corn Cheese Pizza (Culinary Styling)', shape: 'landscape' },
  { src: oreoShakeImg, label: 'Oreo Thick Shakes (Culinary Styling)', shape: 'portrait' },
];

const CHAPTER_LAYOUTS = {
  soups: {
    mode: 'bistro-columns',
    bgClass: 'bg-[#FAF7F2]',
    subtitle: 'Clear broths, slow-roasted tomato shorbas, and crispy noodle bowls.',
  },
  'veg-starters': {
    mode: 'split-photo',
    bgClass: 'bg-[#F5ECE0]',
    reverse: false,
    visual: {
      src: '/images/food/tandoori-veg-platter.webp',
      alt: 'Vegetarian charcoal tandoori platter with mint chutney',
      caption: 'Clay-oven charred cottage cheese, hung curd kababs & fresh herbs.',
    },
    subtitle: 'Charcoal-kissed cottage cheese, hung curd kababs, and sweetcorn patties.',
  },
  'nonveg-starters': {
    mode: 'split-photo',
    bgClass: 'bg-[#FAF7F2]',
    reverse: true,
    visual: {
      src: '/images/food/sharda-dinings-food-spread-clean.webp',
      alt: 'Assorted Tandoori Chicken, Malai Tikka and kebabs',
      caption: 'Overnight marinated tandoori platters served straight from charcoal skewers.',
    },
    subtitle: 'Spring chicken, cashew malai tikka & hand-pounded mutton seekh.',
  },
  'oriental-veg': {
    mode: 'wok-banner',
    bgClass: 'bg-[#E8EFE9]',
    banners: [
      {
        src: '/images/food/shanghai-chilli-paneer.webp',
        alt: 'Crispy Chilli Paneer tossed with bell peppers and sesame',
        caption: 'Crispy Chilli Paneer · ₹320',
      },
      {
        src: '/images/food/sharda-dinings-spring-rolls.webp',
        alt: 'Golden vegetable spring rolls on slate platter',
        caption: 'Golden Vegetable Spring Rolls',
      },
    ],
    subtitle: 'High-flame Sichuan wok tossing crisp paneer and garden vegetables.',
  },
  'oriental-nonveg': {
    mode: 'split-photo',
    bgClass: 'bg-[#FAF7F2]',
    reverse: false,
    visual: {
      src: '/images/food/thai-stir-fry-chicken.webp',
      alt: 'Hakka style Chicken Chilli tossed in garlic soy glaze',
      caption: 'Sizzling garlic, crushed chillies, and rich Asian reductions.',
    },
    subtitle: 'Wok-seared chilli chicken, lollipops & spiced pepper morsels.',
  },
  'veg-mains': {
    mode: 'split-photo',
    bgClass: 'bg-[#FDF6E9]',
    reverse: true,
    visual: {
      src: dalMakhaniImg,
      alt: 'Editorial culinary styling of slow-simmered Dal Makhani and Paneer gravy with garlic naan',
      caption: 'Culinary styling · Slow-simmered black lentils, paneer gravies & koftas.',
    },
    subtitle: 'Overnight simmered black lentils, velvety cashew paneer & chickpeas.',
  },
  'nonveg-mains': {
    mode: 'split-photo',
    bgClass: 'bg-[#FBEAE0]',
    reverse: false,
    visual: {
      src: butterChickenImg,
      alt: 'Editorial culinary styling of creamy Butter Chicken paired with flaky lachha paratha',
      caption: 'Culinary styling · Classic makhani sauces, kadhai gravies & peppercorn curries.',
    },
    subtitle: 'House-classic makhani gravies, wok kadhai chicken & slow-braised mutton.',
  },
  'biryani-rice': {
    mode: 'wok-banner',
    bgClass: 'bg-[#FAF7F2]',
    banners: [
      {
        src: '/images/food/sharda-dinings-hyderabadi-biryani.webp',
        alt: 'Saffron handi dum biryani garnished with mint and ginger',
        caption: 'Copper Handi Veg Dum Biryani · ₹380',
      },
      {
        src: '/images/food/sharda-dining-biryani.webp',
        alt: 'Chicken Dum Biryani bowl served with sirka onions and chutney',
        caption: 'Chicken Dum Biryani · ₹410',
      },
    ],
    subtitle: 'Aged basmati steamed on slow dum with saffron milk and caramelised shallots.',
  },
  breads: {
    mode: 'bistro-columns',
    bgClass: 'bg-[#F5ECE0]',
    subtitle: 'Blistered butter naans, garlic breads, flaky lachha parathas & missi rotis.',
  },
  'noodles-rice': {
    mode: 'bistro-columns',
    bgClass: 'bg-[#EAF0F6]',
    subtitle: 'Chilli garlic fried rice, wok-tossed noodles & spiced Schezwan bowls.',
  },
  'cafe-continental': {
    mode: 'olive-showcase',
    bgClass: 'bg-white',
    visual: {
      src: cornPizzaImg,
      alt: 'Editorial culinary styling of stone-baked corn cheese pizza',
      caption: 'Culinary styling · Crisp thin-crust pizzas baked to order.',
    },
    secondaryVisual: {
      src: '/images/olive-cafe/creamy-alfredo-pasta.webp',
      alt: 'Gratinated Creamy Alfredo Penne skillet with herbs',
      caption: 'White Sauce Alfredo Penne · ₹320',
    },
    subtitle: 'Olive Cafe stone-baked thin crusts, creamy pastas & triple-decker club sandwiches.',
  },
  'beverages-desserts': {
    mode: 'olive-showcase',
    bgClass: 'bg-[#241814]',
    dark: true,
    visual: {
      src: oreoShakeImg,
      alt: 'Editorial styling of chilled Oreo and KitKat thick shakes',
      caption: 'Culinary styling · Thick shakes (₹230) & cold coffees (₹180).',
    },
    secondaryVisual: {
      src: '/images/olive-cafe/sharda-dinings-ice-cream-sundae.webp',
      alt: 'Brown Choco Fudge Sundae served in glass coupe',
      caption: 'Brown Choco Fudge Sundae · ₹220',
    },
    subtitle: 'Caramel cold coffees, Nutella & KitKat thick shakes, hot brownie sundaes & gulab jamun.',
  },
};

function DietIndicator({ isVeg }) {
  return (
    <span
      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
      className={`inline-flex w-3.5 h-3.5 shrink-0 border items-center justify-center ${
        isVeg ? 'border-[#144035]' : 'border-[#6E2434]'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-[#144035]' : 'bg-[#6E2434]'}`}
      />
    </span>
  );
}

function DishRow({ item, dark = false }) {
  return (
    <article className={`py-4 flex items-start justify-between gap-4 group ${dark ? 'border-white/15' : 'border-[#241814]/15'}`}>
      <div className="flex items-start gap-3.5 min-w-0">
        {item.image && (
          <div className={`w-20 h-16 shrink-0 media-frame rounded-lg border hidden sm:block ${dark ? 'border-white/15' : 'border-black/10'}`}>
            <img src={item.image} alt={item.name} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className="min-w-0 space-y-1">
          <div className="flex items-center gap-2">
            <DietIndicator isVeg={item.isVeg} />
            <h3
              className={`font-serif text-lg sm:text-[1.3rem] leading-snug transition-colors ${
                dark ? 'text-white group-hover:text-[#EAB963]' : 'text-[#241814] group-hover:text-[#6E2434]'
              }`}
            >
              {item.name}
            </h3>
          </div>
          <p className={`text-xs sm:text-sm leading-relaxed ${dark ? 'text-[#D8C7B8]' : 'text-[#5E5049]'}`}>
            {item.description}
          </p>
          <p className={`text-[11px] uppercase tracking-[0.14em] font-medium ${dark ? 'text-[#EAB963]' : 'text-[#8C5E12]'}`}>
            {item.spice}
            {item.chefSpecial ? ' · House Favourited' : ''}
            {item.isIllustrative ? ' · Culinary Styling Visual' : ''}
          </p>
        </div>
      </div>

      <span
        className={`font-serif text-xl sm:text-2xl font-semibold tabular-nums shrink-0 pt-0.5 ${
          dark ? 'text-[#EAB963]' : 'text-[#6E2434]'
        }`}
      >
        ₹{item.price}
      </span>
    </article>
  );
}

export default function MenuPage() {
  usePageSeo({
    title: 'Digital Menu, Prices & Online Ordering — Sharda Dinings & Olive Cafe',
    description:
      'Explore the fine-dining menu of Sharda Dinings Gorakhpur: Dal Makhani, Paneer Punjabi Tadka, Handi Biryani, Sichuan starters, Olive Cafe pizzas & shakes.',
    image: '/images/food/sharda-dinings-naan-and-chole.webp',
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all');
  const [specialsOnly, setSpecialsOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (dietFilter === 'veg' && !item.isVeg) return false;
      if (dietFilter === 'nonveg' && item.isVeg) return false;
      if (specialsOnly && !item.chefSpecial) return false;
      if (query) {
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedCategory, dietFilter, specialsOnly, searchQuery]);

  const groupedCategories = useMemo(() => {
    return MENU_CATEGORIES.filter((cat) => cat.id !== 'all')
      .map((cat) => ({
        ...cat,
        items: filteredItems.filter((item) => item.category === cat.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredItems]);

  const handleDownloadMenu = () => {
    const lines = [
      'SHARDA DININGS & OLIVE CAFE — GORAKHPUR',
      `${BUSINESS_INFO.address.line1}, ${BUSINESS_INFO.address.line2}, ${BUSINESS_INFO.address.city} ${BUSINESS_INFO.address.pincode}`,
      `Reservations & Takeaway: ${BUSINESS_INFO.phones[0].display} | Dine-in: ${BUSINESS_INFO.timings.restaurant}`,
      '========================================================================',
      '',
    ];

    MENU_CATEGORIES.filter((c) => c.id !== 'all').forEach((cat) => {
      const catItems = MENU_ITEMS.filter((item) => item.category === cat.id);
      if (catItems.length === 0) return;
      lines.push(cat.name.toUpperCase());
      lines.push('-'.repeat(cat.name.length));
      catItems.forEach((item) => {
        const tag = item.isVeg ? '[VEG]' : '[NON-VEG]';
        const star = item.chefSpecial ? ' *House Favourited' : '';
        lines.push(`${item.name} ${tag}${star} — INR ${item.price}`);
        lines.push(`  ${item.description}`);
      });
      lines.push('');
    });

    lines.push('NOTE: Government taxes apply. Swiggy/Zomato prices may reflect packaging fees. Inform staff of Jain or allergen requests.');

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sharda-Dinings-Gorakhpur-Menu.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setDietFilter('all');
    setSpecialsOnly(false);
    setSearchQuery('');
  };

  return (
    <div className="bg-[#FAF7F2] text-[#241814]">
      {/* SECTION 1: DIGITAL MENU BROADSHEET MASTHEAD — Warm Champagne */}
      <section className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-[#F5ECE0] via-[#FAF5EC] to-[#FBEAE0] border-b border-[#E4D8CA]">
        <OrbitalRingBackdrop
          size={440}
          opacity={0.14}
          strokeColor="#D99B38"
          secondaryColor="#6E2434"
          className="hidden lg:block absolute -right-24 -top-24 w-[440px] h-[440px]"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C5E12] tabular-nums">
              Digital Restaurant Folio · {MENU_ITEMS.length} Dishes · {BUSINESS_INFO.avgCostForTwo} For Two
            </p>
            <h1 className="font-serif text-[clamp(2.3rem,4.2vw,3.8rem)] font-medium leading-[1.06] tracking-tight text-[#241814]">
              A curated table ledger from <em className="italic font-normal text-[#6E2434]">charcoal embers</em> to espresso bars.
            </h1>
            <p className="text-sm sm:text-base text-[#5E5049] leading-relaxed max-w-lg">
              North Indian curries, Awadhi biryanis, wok-tossed Sichuan, plus Olive Cafe thin-crust pizzas, pastas, and shakes. Open {BUSINESS_INFO.timings.restaurant}.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1 no-print">
              <a
                href={BUSINESS_INFO.ordering.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#6E2434] hover:bg-[#511825] text-white text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Zomato Order</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={BUSINESS_INFO.ordering.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[42px] px-5 py-2.5 bg-[#EAB963] hover:bg-[#D99B38] text-[#241814] text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Swiggy / Dineout</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={handleDownloadMenu}
                className="min-h-[42px] px-4 py-2.5 border border-[#D8CBB8] bg-white hover:bg-[#FAF3E8] text-[#241814] text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Save Menu</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="min-h-[42px] px-4 py-2.5 border border-[#D8CBB8] bg-white hover:bg-[#FAF3E8] text-[#241814] text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Asymmetric 3-Plate Masthead Cluster */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-3.5 items-center max-w-md mx-auto lg:ml-auto">
            <div className="col-span-6">
              <EditorialImage
                src="/images/food/sharda-dinings-naan-and-chole.webp"
                alt="Sharda Dinings dinner menu beside stuffed garlic naan and chole"
                frameClassName="arch-frame shadow-lg"
                aspect="aspect-[3/4]"
                loading="eager"
              />
            </div>
            <div className="col-span-6 space-y-3.5 pt-6">
              <ParallaxLayer speed={-10}>
                <EditorialImage
                  src={cornPizzaImg}
                  alt="Culinary styling of corn mozzarella pizza"
                  frameClassName="rounded-xl shadow-md"
                  aspect="aspect-[4/3]"
                  loading="eager"
                />
              </ParallaxLayer>
              <EditorialImage
                src="/images/food/sharda-dinings-beetroot-croquettes.webp"
                alt="Crispy spiced beetroot croquettes with mint emulsion"
                frameClassName="rounded-xl shadow-sm"
                aspect="aspect-square"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTINUOUS RIGHT-TO-LEFT DISH RIBBON — Smoked Espresso */}
      <section className="py-10 bg-[#241814] text-[#FAF7F2] no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EAB963]">
            Across Twelve Kitchen Chapters
          </p>
          <span className="text-xs text-[#D5C3B3]">
            Authentic kitchen photographs &amp; clearly labelled culinary stylings
          </span>
        </div>
        <ContinuousImageStream items={MENU_RIBBON} speed="slow" dark />
      </section>

      {/* SECTION 3: SEARCH, DIETARY CONTROLS & STICKY CHAPTER RAIL */}
      <div className="bg-[#FAF7F2] border-b border-[#E4D8CA] no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-[#5E5049] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              aria-label="Search menu dishes"
              placeholder="Search paneer, biryani, pizza, shakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[40px] pl-9 pr-3 py-1.5 bg-white border border-[#DFD2C2] rounded-md text-sm text-[#241814] focus:border-[#6E2434] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Diets' },
              { id: 'veg', label: 'Pure Veg' },
              { id: 'nonveg', label: 'Non-Veg' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setDietFilter(opt.id)}
                className={`min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors whitespace-nowrap ${
                  dietFilter === opt.id
                    ? 'bg-[#6E2434] text-white border-[#6E2434]'
                    : 'bg-white text-[#5E5049] border-[#DFD2C2] hover:text-[#241814]'
                }`}
              >
                {opt.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSpecialsOnly(!specialsOnly)}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-md border inline-flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                specialsOnly
                  ? 'bg-[#EAB963] text-[#241814] border-[#D99B38]'
                  : 'bg-white text-[#5E5049] border-[#DFD2C2] hover:text-[#241814]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>House Favourites</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slim Sticky Single-Line Chapter Navigation Rail */}
      <div className="no-print sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E4D8CA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[36px] px-3.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#241814] text-[#EAB963] font-semibold'
                  : 'text-[#5E5049] hover:text-[#241814] hover:bg-[#EFE6D8]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 4: UNBOXED MULTI-LAYOUT FINE-DINING CHAPTER BANDS */}
      {groupedCategories.length === 0 ? (
        <section className="py-16 bg-[#FAF7F2]">
          <div className="max-w-xl mx-auto px-4 text-center space-y-4">
            <p className="font-serif text-3xl text-[#241814]">No dishes match your active filters.</p>
            <p className="text-sm text-[#5E5049]">
              Clear the search or reset dietary filters to restore the full digital menu.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="min-h-[42px] px-5 py-2.5 bg-[#6E2434] text-white text-xs font-semibold uppercase tracking-wider rounded-md"
            >
              Reset Filters
            </button>
          </div>
        </section>
      ) : (
        <div>
          {groupedCategories.map((group, groupIdx) => {
            const layout = CHAPTER_LAYOUTS[group.id] || {
              mode: 'bistro-columns',
              bgClass: 'bg-[#FAF7F2]',
              subtitle: '',
            };
            const isDark = Boolean(layout.dark);
            const chapterNum = String(groupIdx + 1).padStart(2, '0');

            return (
              <section
                key={group.id}
                id={`cat-${group.id}`}
                aria-labelledby={`heading-${group.id}`}
                className={`scroll-mt-32 py-14 lg:py-20 border-b ${
                  isDark ? 'border-white/12 text-[#FAF7F2]' : 'border-[#E4D8CA] text-[#241814]'
                } ${layout.bgClass}`}
              >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                  {/* Editorial Unboxed Chapter Heading */}
                  <div
                    className={`flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b ${
                      isDark ? 'border-white/15' : 'border-[#241814]/15'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-[0.22em] block ${
                          isDark ? 'text-[#EAB963]' : 'text-[#8C5E12]'
                        }`}
                      >
                        Chapter {chapterNum} · {group.items.length}{' '}
                        {group.items.length === 1 ? 'Course' : 'Courses'}
                      </span>
                      <h2
                        id={`heading-${group.id}`}
                        className={`font-serif text-3xl sm:text-4xl font-medium ${
                          isDark ? 'text-white' : 'text-[#241814]'
                        }`}
                      >
                        {group.name}
                      </h2>
                    </div>
                    {layout.subtitle && (
                      <p
                        className={`text-xs sm:text-sm max-w-md leading-relaxed ${
                          isDark ? 'text-[#D8C7B8]' : 'text-[#5E5049]'
                        }`}
                      >
                        {layout.subtitle}
                      </p>
                    )}
                  </div>

                  {/* MODE 1: TWO-COLUMN FINE-DINING PRINTED BROADSHEET LEDGER */}
                  {layout.mode === 'bistro-columns' && (
                    <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-x-14 divide-y md:divide-y-0 divide-dotted divide-[#241814]/20">
                      {group.items.map((item) => (
                        <div key={item.id} className="border-b border-dotted border-[#241814]/20">
                          <DishRow item={item} />
                        </div>
                      ))}
                    </Reveal>
                  )}

                  {/* MODE 2: ASYMMETRIC SPLIT FOLIO WITH ARCHED DISH PHOTOGRAPHY */}
                  {layout.mode === 'split-photo' && layout.visual && (
                    <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      <div className={`lg:col-span-4 ${layout.reverse ? 'lg:order-2' : ''}`}>
                        <EditorialImage
                          src={layout.visual.src}
                          alt={layout.visual.alt}
                          frameClassName="arch-frame shadow-lg"
                          aspect="aspect-[3/4]"
                          caption={layout.visual.caption}
                        />
                      </div>
                      <div
                        className={`lg:col-span-8 divide-y divide-dotted divide-[#241814]/20 ${
                          layout.reverse ? 'lg:order-1' : ''
                        }`}
                      >
                        {group.items.map((item) => (
                          <DishRow key={item.id} item={item} />
                        ))}
                      </div>
                    </Reveal>
                  )}

                  {/* MODE 3: WOK & BIRYANI WIDE DIPTYCH BANNER ABOVE 2-COLUMN COURSES */}
                  {layout.mode === 'wok-banner' && layout.banners && (
                    <Reveal className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {layout.banners.map((ban) => (
                          <EditorialImage
                            key={ban.caption}
                            src={ban.src}
                            alt={ban.alt}
                            frameClassName="rounded-xl shadow-md"
                            aspect="aspect-[16/9]"
                            caption={ban.caption}
                          />
                        ))}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 border-t border-[#241814]/15 pt-4">
                        {group.items.map((item) => (
                          <div key={item.id} className="border-b border-dotted border-[#241814]/20">
                            <DishRow item={item} />
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  )}

                  {/* MODE 4: OLIVE CAFE DUAL-VISUAL SHOWCASE FOLIO (DARK / GALLERY WHITE) */}
                  {layout.mode === 'olive-showcase' && (
                    <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      <div className="lg:col-span-7 divide-y divide-dotted divide-current/20">
                        {group.items.map((item) => (
                          <DishRow key={item.id} item={item} dark={isDark} />
                        ))}
                      </div>
                      <div className="lg:col-span-5 grid grid-cols-2 gap-4 items-center">
                        {layout.visual && (
                          <EditorialImage
                            src={layout.visual.src}
                            alt={layout.visual.alt}
                            frameClassName="rounded-xl shadow-lg"
                            aspect="aspect-[3/4]"
                            caption={layout.visual.caption}
                            dark={isDark}
                          />
                        )}
                        {layout.secondaryVisual && (
                          <div className="pt-8">
                            <EditorialImage
                              src={layout.secondaryVisual.src}
                              alt={layout.secondaryVisual.alt}
                              frameClassName="rounded-xl shadow-md"
                              aspect="aspect-square"
                              caption={layout.secondaryVisual.caption}
                              dark={isDark}
                            />
                          </div>
                        )}
                      </div>
                    </Reveal>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* SECTION 5: ORDERING PLATFORMS & DIETARY CARE — Deep Indigo */}
      <section className="py-14 bg-[#1D2E42] text-[#FAF7F2] border-t border-[#2C425E] no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EAB963]">
              Ordering Platforms &amp; Jain Customisation
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Delivery until 9:45 PM or takeaway direct from our host desk.
            </h2>
            <p className="text-sm text-[#CBE0F0] leading-relaxed">
              {BUSINESS_INFO.ordering.note} Request Jain-friendly or mild kid-friendly preparation anytime.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.ordering.magicpin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] px-4 py-2.5 border border-[#EAB963]/50 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>Magicpin</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#EAB963]" />
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
                'Hello Sharda Dinings, I would like to place a takeaway or table order from your menu.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#EAB963] hover:bg-[#D99B38] text-[#241814] text-xs font-semibold uppercase tracking-wider rounded-md inline-flex items-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
