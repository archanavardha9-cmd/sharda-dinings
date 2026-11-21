import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Coffee, ExternalLink, MapPin, MessageSquare, Wifi } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EditorialImage, SectionHeader } from '../components/SiteBlocks';
import {
  AnimatedWaveDivider,
  FloatingBotanicalAccents,
  FloatingLanternParticles,
  OrbitalRingBackdrop,
  Reveal,
  UnifiedGalleryStream,
} from '../components/MotionBlocks';
import { usePageSeo } from '../utils/seo';
import oliveBotanicalStillLife from '../assets/images/botanical_olive_stilllife_1795187016246.jpg';
import cornPizzaImg from '../assets/images/corn_margherita_pizza_1795201048660.jpg';
import oreoShakeImg from '../assets/images/nutella_oreo_shakes_1795201048991.jpg';

const CAFE_SAVORY_STREAM = [
  { src: '/images/olive-cafe/creamy-alfredo-pasta.webp', label: 'White Sauce Alfredo Penne · ₹320', shape: 'portrait' },
  { src: cornPizzaImg, label: 'Corn Cheese Pizza (Culinary Styling) · ₹340', shape: 'landscape' },
  { src: '/images/olive-cafe/arrabita-pasta.webp', label: 'Arrabbiata Red Penne · ₹320', shape: 'square' },
  { src: '/images/olive-cafe/mexican-rice-with-salsa.webp', label: 'Mexican Rice & Salsa', shape: 'landscape' },
  { src: '/images/food/sharda-dinings-breakfast.webp', label: 'Daytime Breakfast Platter', shape: 'wide' },
];

const CAFE_PATISSERIE_STREAM = [
  { src: oreoShakeImg, label: 'Oreo & KitKat Thick Shakes (Styling)', shape: 'portrait' },
  { src: '/images/olive-cafe/sharda-dinings-cheese-cake.webp', label: 'Lotus Biscoff Cheesecake', shape: 'landscape' },
  { src: '/images/olive-cafe/french-toast-with-vanilla-ice-cream.webp', label: 'French Toast & Vanilla Scoop', shape: 'square' },
  { src: '/images/olive-cafe/sharda-dinings-panna-cotta.webp', label: 'Berry Panna Cotta', shape: 'landscape' },
  { src: '/images/olive-cafe/sharda-dinings-ice-cream-sundae.webp', label: 'Brown Choco Fudge Sundae · ₹220', shape: 'portrait' },
];

const CAFE_LEDGER = [
  { name: 'Classic & Caramel Cold Coffee', price: '₹180', note: 'Slow-brewed espresso shaken over ice & caramel' },
  { name: 'KitKat / Nutella Oreo Thick Shake', price: '₹230', note: 'Blended hazelnut, Oreo crumble, or crisp KitKat' },
  { name: 'Grilled Signature Club Sandwich', price: '₹250', note: 'Triple-decker toasted cheddar & house mint slaw' },
  { name: 'Creamy Alfredo / Arrabbiata Penne', price: '₹320', note: 'Served hot alongside two slices of buttered garlic toast' },
  { name: 'Margherita / Corn Cheese Pizza', price: '₹340', note: 'Hand-stretched thin crust baked fresh to order' },
  { name: 'Brown Choco Fudge Sundae', price: '₹220', note: 'Warm fudge brownie topped with cold vanilla scoops' },
];

export default function OliveCafePage({ onOpenEnquiry }) {
  usePageSeo({
    title: 'Olive Cafe at Sharda Dinings — Coffee, Pastas, Pizzas & Shakes',
    description:
      'Visit Olive Cafe inside Sharda Dinings, Gorakhpur: classic & caramel cold coffee, KitKat & Oreo shakes, thin-crust pizzas, pastas, and cheesecakes.',
    image: '/images/olive-cafe/olive-cafe-coffee.webp',
  });

  return (
    <div className="bg-[#FFFDF8] text-[#2C1D18]">
      {/* SECTION 1: WALNUT ESPRESSO HERO WITH FLOATING DUO (ZERO CAROUSELS) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#351F19] via-[#462921] to-[#261612] text-[#FFFDF8]">
        <FloatingLanternParticles color="#EAB963" count={7} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#EAB963]">
              Olive Cafe · Espresso &amp; Patisserie Wing
            </p>
            <h1 className="font-serif text-[clamp(2.3rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-tight text-white">
              Roasted espresso, <em className="italic font-normal text-[#EAB963]">thick shakes,</em> and sweet plates until 11 PM.
            </h1>
            <p className="text-sm sm:text-base text-[#EBDAD0] leading-relaxed max-w-md">
              Tucked inside Sharda Dinings with calm seating and complimentary Wi-Fi—crafted for catch-ups, study afternoons, and late-evening coffees.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                onClick={() => onOpenEnquiry('cafe')}
                className="gloss-btn min-h-[44px] px-6 py-3 bg-[#EAB963] hover:bg-[#D8A852] text-[#2C1D18] text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Reserve Cafe Corner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/menu"
                className="min-h-[44px] px-5 py-3 border border-[#745245] hover:bg-[#573429] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center whitespace-nowrap"
              >
                Full Cafe Prices
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center max-w-md mx-auto lg:ml-auto">
            <div className="col-span-7">
              <EditorialImage
                src="/images/olive-cafe/olive-cafe-coffee.webp"
                alt="Fresh cappuccino lattes and iced black coffee pours inside Olive Cafe"
                frameClassName="arch-frame shadow-2xl border border-[#EAB963]/30"
                aspect="aspect-[3/4]"
                loading="eager"
              />
            </div>
            <div className="col-span-5 pt-10 space-y-3">
              <div className="animate-float-slow">
                <EditorialImage
                  src={oliveBotanicalStillLife}
                  alt="Editorial olive leaves and pour-over carafe mood study"
                  frameClassName="rounded-xl border border-[#EAB963]/30 shadow-lg"
                  aspect="aspect-square"
                  caption="Espresso study."
                  dark
                />
              </div>
              <p className="text-[11px] text-[#E4CFC4] leading-relaxed">
                Open {BUSINESS_INFO.timings.oliveCafe}.
              </p>
            </div>
          </div>
        </div>

        <AnimatedWaveDivider waveFill="#144035" />
      </section>

      {/* SECTION 2: UNIFIED PATISSERIE & SAVORY STREAM — Deep Botanical Emerald */}
      <section className="relative overflow-hidden py-16 lg:py-22 bg-[#144035] text-[#FFFDF8] space-y-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            dark
            eyebrow="Pizzas, Pastas &amp; Dessert Bar"
            title="Cafe plates gliding in one unhurried showcase."
          />
          <p className="text-xs sm:text-sm text-[#CBE0D5] max-w-xs leading-relaxed">
            Pastas, breakfast spreads, thick shakes, cheesecake slices, and panna cotta cups move smoothly from right to left.
          </p>
        </div>

        <UnifiedGalleryStream
          dark
          pauseLabel="Cafe Stream"
          items={[...CAFE_SAVORY_STREAM, ...CAFE_PATISSERIE_STREAM]}
        />
      </section>

      {/* SECTION 3: CLEAN TASTING LEDGER & SINGLE PLATE FRAME — Warm Coral Blush */}
      <section className="py-16 lg:py-22 bg-[#FCE8E4] border-y border-[#EBCAC4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <Reveal variant="left" className="lg:col-span-5 max-w-md mx-auto w-full">
            <EditorialImage
              src="/images/food/sharda-dinings-table-spread.webp"
              alt="Olive Cafe club sandwich, Alfredo penne, iced mint tea and cappuccino spread"
              frameClassName="rounded-2xl shadow-lg"
              aspect="aspect-[4/3]"
              caption="Afternoon club sandwich (₹250), white sauce penne (₹320) & iced tea."
            />
          </Reveal>

          <Reveal variant="right" className="lg:col-span-7 space-y-6">
            <SectionHeader
              eyebrow="Signature Cafe Favourites"
              title="Priced clearly from morning sandwiches to chilled Oreo shakes."
            />
            <div className="divide-y divide-[#DFBEB7] border-y border-[#DFBEB7]">
              {CAFE_LEDGER.map((row) => (
                <div key={row.name} className="py-3.5 flex items-baseline justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl text-[#2C1D18]">{row.name}</h3>
                    <p className="text-xs text-[#61524A] mt-0.5">{row.note}</p>
                  </div>
                  <span className="font-serif text-xl font-semibold text-[#6E2434] tabular-nums shrink-0">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4: BOTANICAL LOUNGE & REMOTE STUDY CORNER — Soft Lavender */}
      <section className="relative overflow-hidden py-16 lg:py-22 bg-[#F2EEF9] border-b border-[#DED5EC]">
        <FloatingBotanicalAccents color="#4C2D5C" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <SectionHeader
              accentClass="text-[#4C2D5C]"
              eyebrow="Atmospheric Sanctuary"
              title="Quiet afternoons with complimentary Wi-Fi &amp; warm neon greenery."
              copy="While the main dining hall welcomes full-course dinners, Olive Cafe provides a bright corner suited for work laptops, campus friends, and relaxed sweet treats."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#D8CCE9]">
              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-[#4C2D5C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-xl text-[#2C1D18]">Complimentary Wi-Fi</h3>
                  <p className="text-xs text-[#4F445C] mt-1 leading-relaxed">
                    Quiet corners wired for daytime meetings and study tables.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-[#4C2D5C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-xl text-[#2C1D18]">Open 12 Hours</h3>
                  <p className="text-xs text-[#4F445C] mt-1 leading-relaxed tabular-nums">
                    Served daily {BUSINESS_INFO.timings.oliveCafe}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 max-w-xs mx-auto w-full">
            <EditorialImage
              src="/images/olive-cafe/sharda-good-vibes-neon.webp"
              alt="Olive Cafe botanical greenery wall and warm timber accents"
              frameClassName="arch-frame shadow-lg"
              aspect="aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: VISIT & DIRECT WHATSAPP BAND — Warm Champagne */}
      <section className="relative overflow-hidden py-14 bg-[#F7EFE2]">
        <OrbitalRingBackdrop
          size={340}
          opacity={0.14}
          strokeColor="#6E2434"
          secondaryColor="#D8A852"
          className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-[340px] h-[340px]"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E2434]">
              Walk In Anytime
            </p>
            <h2 className="font-serif text-3xl text-[#2C1D18]">
              Enjoy espresso, pastas &amp; shakes inside Olive Cafe daily.
            </h2>
            <p className="text-xs text-[#61524A] flex flex-wrap gap-x-5 gap-y-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6E2434]" />
                East Rajendra Nagar, near Gorakhnath Mandir
              </span>
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <Clock className="w-3.5 h-3.5 text-[#6E2434]" />
                {BUSINESS_INFO.timings.oliveCafe}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={BUSINESS_INFO.ordering.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#6E2434] hover:bg-[#511825] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>Order via Zomato</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
                'Hello Olive Cafe at Sharda Dinings, I would like to reserve a cafe table or enquire about daily desserts.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] px-5 py-2.5 border border-[#CDBEAE] bg-white hover:bg-[#FAF3E8] text-[#2C1D18] text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#6E2434]" />
              <span>WhatsApp Cafe</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
