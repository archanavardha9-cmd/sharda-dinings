import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  Wifi,
  Clock,
  ArrowRight,
  MessageSquare,
  ChevronRight,
  Sparkles,
  Heart,
  Zap,
  Flame,
} from "lucide-react";
import { BUSINESS_INFO } from "../data/businessInfo";
import {
  GildedDivider,
  NumberedPill,
  CoffeeBeanFlourish,
  SpiceStar,
} from "../components/DecorativeGraphics";
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
  SectionBackground,
} from "../components/MotionExperience";

export default function OliveCafePage({ onOpenEnquiry, onOpenVerification }) {
  const [activeTab, setActiveTab] = useState("brews");
  const [activeDishIndex, setActiveDishIndex] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollTimeoutRef = useRef(null);
  const isInteractingRef = useRef(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    setActiveDishIndex(null);
  };

  // Track explicit user interaction (wheel, touch, key) to prevent automatic selection on initial load
  useEffect(() => {
    const onUserInteraction = () => {
      isInteractingRef.current = true;
    };
    window.addEventListener("wheel", onUserInteraction, { passive: true });
    window.addEventListener("touchmove", onUserInteraction, { passive: true });
    window.addEventListener("keydown", onUserInteraction, { passive: true });

    return () => {
      window.removeEventListener("wheel", onUserInteraction);
      window.removeEventListener("touchmove", onUserInteraction);
      window.removeEventListener("keydown", onUserInteraction);
    };
  }, []);

  // Scroll-based highlight: temporarily spotlight the active dish card & corresponding image as user scrolls to it
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // When outside the section's active reading area, clear selection completely
      if (
        rect.top > vh * 0.75 ||
        rect.bottom < vh * 0.2 ||
        !isInteractingRef.current
      ) {
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        setActiveDishIndex(null);
        return;
      }

      // Check if a card is directly in the visitor's reading line (within tight 35px band)
      const targetLine = vh * 0.45;
      let matchedIdx = null;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const cardRect = el.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        if (Math.abs(cardCenter - targetLine) < 35) {
          matchedIdx = i;
        }
      });

      if (matchedIdx !== null) {
        setActiveDishIndex(matchedIdx);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          setActiveDishIndex(null);
        }, 1500);
      } else {
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        setActiveDishIndex(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [activeTab]);

  const handleHorizontalScroll = (e) => {
    const el = e.currentTarget;
    if (el.scrollWidth <= el.clientWidth) return;
    isInteractingRef.current = true;
    const scrollLeft = el.scrollLeft;
    let matchedIdx = null;
    cardRefs.current.forEach((cardEl, i) => {
      if (!cardEl) return;
      if (Math.abs(cardEl.offsetLeft - scrollLeft) < 35) {
        matchedIdx = i;
      }
    });
    if (matchedIdx !== null) {
      setActiveDishIndex(matchedIdx);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setActiveDishIndex(null);
      }, 1500);
    }
  };

  const cafeMenuHighlights = {
    brews: [
      {
        name: "Signature Classic Cold Coffee",
        category: "Chilled Brew",
        desc: "Slow-brewed dark roast espresso shaken over whole milk and crushed ice.",
        badge: "Bestseller",
        image: "/images/olive-cafe/olive-cafe-coffee.webp",
        imageSubtitle: "Signature Roast & Milk",
      },
      {
        name: "Iced Caramel Frappuccino",
        category: "Sweet & Creamy",
        desc: "Salted caramel swirl, chilled espresso base, whipped cream cap.",
        badge: "Barista Special",
        image: "/images/olive-cafe/iced-caramel-frappuccino.webp",
        imageSubtitle: "Caramel Swirl & Cream",
      },
      {
        name: "Double Shot Americano",
        category: "Purist Roast",
        desc: "Bold, dark extracted espresso pulled over hot mountain spring water.",
        badge: "Dark Roast",
        image: "/images/olive-cafe/double-shot-americano.webp",
        imageSubtitle: "Purist Dark Roast",
      },
      {
        name: "Hazelnut Cafe Latte",
        category: "Micro-Foam",
        desc: "Velvety steamed micro-foam over roasted hazelnut extract and espresso.",
        badge: "Artisan Blend",
        image: "/images/olive-cafe/hazelnut-cafe-latte.webp",
        imageSubtitle: "Artisan Micro-Foam",
      },
    ],
    shakes: [
      {
        name: "Nutella Hazelnut Thick Shake",
        category: "Indulgent Thick",
        desc: "Generous Nutella spread blended with vanilla ice cream and toasted hazelnuts.",
        badge: "Indulgent",
        image: "/images/olive-cafe/nutella-hazelnut-shake.webp",
        imageSubtitle: "Nutella & Toasted Hazelnut",
      },
      {
        name: "Oreo Crumb Cream Frappe",
        category: "Cookie Crumble",
        desc: "Real chocolate sandwich cookies pulverized into creamy ice cream shake.",
        badge: "Crowd Favorite",
        image: "/images/olive-cafe/oreo-crumb-frappe.webp",
        imageSubtitle: "Crushed Oreo Cookie",
      },
      {
        name: "KitKat Crisp Chocolate Shake",
        category: "Crisp Crunch",
        desc: "Crushed chocolate wafers blended with dark cacao ganache and cream.",
        badge: "Crispy Crunch",
        image: "/images/olive-cafe/kitkat-chocolate-shake.webp",
        imageSubtitle: "Crisp Wafer Ganache",
      },
      {
        name: "Belgian Chocolate Fudge Shake",
        category: "Dense Ganache",
        desc: "Bittersweet chocolate fudge sauce with dense dark chocolate ice cream.",
        badge: "Rich Dark",
        image: "/images/olive-cafe/belgian-chocolate-fudge-shake.webp",
        imageSubtitle: "Dense Dark Ganache",
      },
    ],
    bites: [
      {
        name: "Stone-Baked Margherita Pizza",
        category: "Artisan Crust",
        desc: "Hand-stretched thin dough, rich San Marzano tomato reduction, melted mozzarella.",
        badge: "Stone-Baked",
        image: "/images/olive-cafe/corn-margherita-pizza.webp",
        imageSubtitle: "San Marzano & Mozzarella",
      },
      {
        name: "Farm Fresh Corn & Pepper Pizza",
        category: "Vegetarian Feast",
        desc: "Golden sweetcorn, crisp bell peppers, red onion pearls and mozzarella.",
        badge: "Garden Fresh",
        image: "/images/olive-cafe/farm-fresh-corn-pepper-pizza.webp",
        imageSubtitle: "Sweetcorn & Crisp Peppers",
      },
      {
        name: "White Sauce Creamy Alfredo Penne",
        category: "Durum Wheat",
        desc: "Al dente durum wheat penne tossed in parmesan cream butter glaze with garlic toast.",
        badge: "Chef Special",
        image: "/images/olive-cafe/creamy-alfredo-pasta.webp",
        imageSubtitle: "Durum Wheat Alfredo",
      },
      {
        name: "Spicy Red Sauce Arrabbiata Penne",
        category: "San Marzano",
        desc: "Slow-simmered tomato, chilli flakes, garlic, black olives, fresh basil leaves.",
        badge: "Zesty Tang",
        image: "/images/olive-cafe/arrabita-pasta.webp",
        imageSubtitle: "Slow-Simmered Herb",
      },
    ],
    desserts: [
      {
        name: "Lotus Biscoff Cheesecake",
        category: "Baked Patisserie",
        desc: "Velvety baked cream cheese over buttery caramelized biscuit crumb.",
        badge: "Patisserie",
        image: "/images/olive-cafe/lotus-biscoff-cheesecake.webp",
        imageSubtitle: "Baked Biscoff Patisserie",
      },
      {
        name: "Sizzling Brownie with Vanilla Scoop",
        category: "Cast Iron Sizzler",
        desc: "Cast-iron sizzler plate, warm walnut brownie, hot fudge sauce, cold scoop.",
        badge: "House Legend",
        image: "/images/olive-cafe/sizzling-brownie-sundae.webp",
        imageSubtitle: "Cast Iron Fudge Sizzler",
      },
    ],
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
            <NumberedPill
              current="04"
              total="07"
              label="OLIVE CAFE & ARTISANAL BREWS"
            />
          </div>

          <KineticTitle
            as="h1"
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight"
          >
            Olive Cafe & Brews
          </KineticTitle>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#EFE8DC]/90 font-light leading-relaxed">
            Gorakhpur’s quiet espresso haven inside Sharda Dinings. Cold brews,
            thick Nutella shakes, bubbling thin-crust pizzas, and relaxed
            work-friendly booths.
          </p>

          <GildedDivider className="my-4" />

          {/* Quick Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 text-xs font-mono max-w-2xl mx-auto">
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-[#A8D5BA] font-bold text-center">
              11:00 AM – 11:00 PM Daily
            </span>
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-white text-center">
              High-Speed Wi-Fi
            </span>
            <span className="bg-white/10 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 text-[#F4A261] font-bold text-center">
              Individual Power Outlets
            </span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
            <ScrollPop delay={0.2} className="w-full sm:w-auto">
              <button
                onClick={() => onOpenEnquiry("cafe")}
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
                <span className="text-[11px] uppercase font-mono tracking-widest font-bold">
                  The Daytime Haven
                </span>
              </div>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={50} delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                Where Coffee Meets Quiet Focus
              </h2>
            </ScrollSlide>
            <ScrollSlide direction="up" distance={40} delay={0.2}>
              <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
                Crafted for afternoon study, laptop work, and relaxed evening
                catch-ups until 11:00 PM.
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
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#A8D5BA] font-bold">
                      Atmosphere
                    </p>
                    <p className="font-serif text-lg font-bold mt-0.5">
                      Quiet Pacing & Warm Ambient Glow
                    </p>
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
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">
                      Study & Remote Work Ready
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    Complimentary high-speed Wi-Fi and accessible power outlets
                    make it easy to work on presentations, read, or conduct
                    small team discussions.
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="right" distance={70} delay={0.15}>
                <div className="p-5 rounded-2xl bg-white shadow-md border-l-4 border-[#D4AF37] space-y-1 hover:translate-x-1.5 transition-transform">
                  <div className="flex items-center space-x-2 text-[#927318]">
                    <Coffee className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">
                      Authentic Espresso Extraction
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    Freshly ground Arabica roasts pulled with rich crema. From
                    velvety flat whites and iced Americanos to double-blended
                    hazelnut frappes.
                  </p>
                </div>
              </ScrollSlide>

              <ScrollSlide direction="right" distance={80} delay={0.25}>
                <div className="p-5 rounded-2xl bg-white shadow-md border-l-4 border-[#E76F51] space-y-1 hover:translate-x-1.5 transition-transform">
                  <div className="flex items-center space-x-2 text-[#E76F51]">
                    <Flame className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#1C1617]">
                      Evening Desserts & Sizzlers
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1617]/75 leading-relaxed font-light">
                    Open until 11:00 PM nightly. Meet friends after dinner for
                    cast-iron sizzling brownies, cheesecakes, and sundaes under
                    glowing pendant lights.
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
      <section
        id="cafe-menu"
        ref={sectionRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FDF0E9] via-[#FAF0E6] to-[#F5E6DC] relative overflow-hidden"
      >
        <SectionBackground theme="cafe-ledger" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b-2 border-[#1C1617]/10 gap-4">
            <ScrollSlide direction="left" distance={50}>
              <div>
                <span className="text-[11px] uppercase font-mono tracking-widest text-[#2D6A4F] font-bold block mb-1">
                  Artisanal Curations
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
                  The Olive Cafe{" "}
                  <span className="text-[#2D6A4F] italic font-normal">
                    Ledger
                  </span>
                </h2>
              </div>
            </ScrollSlide>

            {/* Menu Tabs with Spring Pop */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0">
              {[
                { id: "brews", label: "Brews & Coffees" },
                { id: "shakes", label: "Thick Shakes" },
                { id: "bites", label: "Pizzas & Pastas" },
                { id: "desserts", label: "Patisserie & Sizzlers" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer border-2 ${
                    activeTab === tab.id
                      ? "bg-[#2D6A4F] text-[#FAF7F2] border-[#2D6A4F] font-bold shadow-lg shadow-[#2D6A4F]/25"
                      : "bg-white border-[#EFE8DC] text-[#1C1617]/75 hover:border-[#2D6A4F]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dual Split: Menu Items Left + Dynamic Visual Grid Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 6 cols: Compact, balanced cards aligned with the image height beside them */}
            <div
              className="lg:col-span-6 flex flex-col justify-start"
              onMouseLeave={() => setActiveDishIndex(null)}
            >
              {/* Mobile: smooth horizontal swipe scroll; Desktop & Tablet: compact stacked grid perfectly matching image height */}
              <div
                onScroll={handleHorizontalScroll}
                className="overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none"
              >
                <div
                  key={activeTab}
                  className={`flex sm:flex-col ${
                    cafeMenuHighlights[activeTab].length <= 2
                      ? "gap-3.5"
                      : "gap-2.5"
                  } min-w-full`}
                >
                  {cafeMenuHighlights[activeTab].map((item, idx) => {
                    const isActive = activeDishIndex === idx;
                    const isDessert = cafeMenuHighlights[activeTab].length <= 2;
                    return (
                      <div
                        key={item.name}
                        ref={(el) => (cardRefs.current[idx] = el)}
                        onMouseEnter={() => setActiveDishIndex(idx)}
                        onMouseLeave={() => setActiveDishIndex(null)}
                        onClick={() =>
                          setActiveDishIndex((prev) =>
                            prev === idx ? null : idx,
                          )
                        }
                        onFocus={() => setActiveDishIndex(idx)}
                        onBlur={() => setActiveDishIndex(null)}
                        tabIndex={0}
                        className={`shrink-0 w-[280px] sm:w-full ${
                          isDessert
                            ? "p-3.5 sm:px-4 sm:py-3.5"
                            : "p-3 sm:px-4 sm:py-3"
                        } rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                          isActive
                            ? "bg-white border-2 border-[#2D6A4F] border-l-4 border-l-[#2D6A4F] shadow-md shadow-[#2D6A4F]/10 -translate-y-0.5"
                            : "bg-white border-2 border-[#EFE8DC] hover:border-[#2D6A4F]/50 shadow-xs"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h3
                              className={`font-serif font-bold text-sm sm:text-[15px] transition-colors leading-snug truncate ${
                                isActive ? "text-[#2D6A4F]" : "text-[#1C1617]"
                              }`}
                            >
                              {item.name}
                            </h3>
                            <span
                              className={`font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider transition-colors ${
                                isActive
                                  ? "bg-[#2D6A4F] text-[#FAF7F2]"
                                  : "text-[#2D6A4F] bg-[#2D6A4F]/10 border border-[#2D6A4F]/20"
                              }`}
                            >
                              {item.category}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-[#1C1617]/75 mt-1 line-clamp-2 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                        <div className="mt-2 pt-1.5 border-t border-[#FAF7F2] flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                          <span className="text-[#C84B31] font-bold uppercase tracking-wider text-[10px]">
                            ✦ {item.badge}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenEnquiry("cafe");
                            }}
                            className="text-[#2D6A4F] hover:text-[#1b4332] hover:underline font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-1 transition-colors"
                          >
                            Reserve Table →
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Dynamic Authentic Food Visuals with Subtle Pop-Up Highlight */}
            <div
              key={`visuals-${activeTab}`}
              onMouseLeave={() => setActiveDishIndex(null)}
              className={`lg:col-span-6 grid ${
                cafeMenuHighlights[activeTab].length <= 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-2"
              } gap-3 sm:gap-3.5`}
            >
              {cafeMenuHighlights[activeTab].map((item, idx) => {
                const isActive = activeDishIndex === idx;
                return (
                  <ScrollZoom
                    key={`${activeTab}-${item.name}`}
                    scaleFrom={0.92}
                    duration={0.6}
                    delay={idx * 0.08}
                  >
                    <div
                      onMouseEnter={() => setActiveDishIndex(idx)}
                      onMouseLeave={() => setActiveDishIndex(null)}
                      onClick={() =>
                        setActiveDishIndex((prev) =>
                          prev === idx ? null : idx,
                        )
                      }
                      className={`rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                        isActive
                          ? "border-2 border-[#2D6A4F] ring-3 ring-[#2D6A4F]/25 shadow-xl shadow-[#2D6A4F]/15 -translate-y-2 scale-[1.03] z-10 relative bg-white"
                          : "border-2 border-[#EFE8DC] shadow-sm bg-white hover:border-[#2D6A4F]/40"
                      }`}
                    >
                      <div
                        className={`overflow-hidden relative ${
                          cafeMenuHighlights[activeTab].length <= 2
                            ? "h-52 sm:h-64 lg:h-[200px]"
                            : "h-36 sm:h-44 lg:h-[152px]"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={`${item.name} at Olive Cafe`}
                          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                            isActive ? "scale-105" : "scale-100"
                          }`}
                          loading="lazy"
                        />
                        <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 transition-all duration-300">
                          <span
                            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                              isActive
                                ? "bg-[#2D6A4F] text-[#FAF7F2] shadow-md border border-[#FAF7F2]/40 scale-105"
                                : "bg-black/65 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30"
                            }`}
                          >
                            {item.badge}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`p-2.5 sm:p-3 text-center transition-colors duration-300 ${
                          isActive ? "bg-[#FAF7F2]" : "bg-white"
                        }`}
                      >
                        <p
                          className={`font-serif font-bold text-xs sm:text-sm line-clamp-1 transition-colors duration-300 ${
                            isActive ? "text-[#2D6A4F]" : "text-[#1C1617]"
                          }`}
                        >
                          {item.name}
                        </p>
                        <p className="text-[9px] sm:text-[10px] font-mono font-bold text-[#2D6A4F]/90 uppercase tracking-wider mt-0.5">
                          {item.imageSubtitle || item.category}
                        </p>
                      </div>
                    </div>
                  </ScrollZoom>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
