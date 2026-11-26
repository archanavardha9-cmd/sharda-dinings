import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * SectionBackground:
 * Renders large, layered, cinematic video-style scene animations for each section.
 *
 * Entrance & Scroll-Progress Behavior:
 * - When entering: elements emerge from deep behind / off-axis (opacity: 0, scale: 0.65, translate: 140px)
 *   and smoothly glide into their pristine designed composition as the section opens.
 * - While in view: elements settle into an elegant, high-contrast, visible scene composition.
 * - When scrolling past: layers drift with multi-speed depth parallax.
 * - When scrolling UP: GSAP scrub cleanly reverses the entire animation timeline back into its resting state.
 * - High contrast palette ensures sharp, attractive visibility on light and white backgrounds.
 * - Fully non-intrusive (pointer-events-none, z-0, behind content).
 */
export function SectionBackground({ theme = "home-manifesto", className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === 'undefined') return;

    const layers = el.querySelectorAll('.sb-layer');
    if (!layers.length) return;

    const triggerEl = el.closest('section') || el.parentElement || el;

    const ctx = gsap.context(() => {
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed || '0.7');
        const dir = layer.dataset.dir || 'up';
        const rotStart = parseFloat(layer.dataset.rotStart || '0');
        const rotEnd = parseFloat(layer.dataset.rotEnd || '0');
        const scaleStart = parseFloat(layer.dataset.scaleStart || '0.65');
        const scaleMid = parseFloat(layer.dataset.scaleMid || '1.0');
        const scaleEnd = parseFloat(layer.dataset.scaleEnd || '1.12');
        const opacityStart = parseFloat(layer.dataset.opacityStart || '0');
        const opacityMid = parseFloat(layer.dataset.opacityMid || '0.88');
        const opacityEnd = parseFloat(layer.dataset.opacityEnd || '0.2');

        let xIn = 0, yIn = 0, xOut = 0, yOut = 0;
        const enterDist = 150 * speed;
        const exitDist = 80 * speed;

        if (dir === 'up') {
          yIn = enterDist;
          yOut = -exitDist;
        } else if (dir === 'down') {
          yIn = -enterDist;
          yOut = exitDist;
        } else if (dir === 'left') {
          xIn = enterDist;
          xOut = -exitDist;
          yIn = enterDist * 0.25;
          yOut = -exitDist * 0.25;
        } else if (dir === 'right') {
          xIn = -enterDist;
          xOut = exitDist;
          yIn = -enterDist * 0.25;
          yOut = exitDist * 0.25;
        } else if (dir === 'diagonal') {
          xIn = -enterDist * 0.5;
          xOut = enterDist * 0.5;
          yIn = enterDist;
          yOut = -exitDist;
        } else {
          yIn = enterDist;
          yOut = -exitDist;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top 95%',
            end: 'bottom 5%',
            scrub: 1.2,
          }
        });

        // 2-stage cinematic scroll journey:
        // Stage 1: Emerge smoothly from deep initial position as section enters viewport
        // Stage 2: Drift into subtle exit parallax as section leaves
        tl.fromTo(
          layer,
          {
            x: xIn,
            y: yIn,
            scale: scaleStart,
            rotation: rotStart,
            opacity: opacityStart,
          },
          {
            x: 0,
            y: 0,
            scale: scaleMid,
            rotation: (rotStart + rotEnd) * 0.5,
            opacity: opacityMid,
            duration: 1,
            ease: 'power2.out',
          }
        ).to(
          layer,
          {
            x: xOut,
            y: yOut,
            scale: scaleEnd,
            rotation: rotEnd,
            opacity: opacityEnd,
            duration: 1,
            ease: 'power1.in',
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-30 md:opacity-50 lg:opacity-100 ${className}`}
      aria-hidden="true"
    >
      {/* ─────────────────────────────────────────────────────────────
          THEME: CONTACT LOCATION (Cinema Wayfinding, Topographic Panorama)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'contact-location' && (
        <>
          {/* Ambient Scenic Glow Field */}
          <div
            className="sb-layer absolute top-1/4 -right-12 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#C84B31]/15 via-[#D4AF37]/10 to-transparent blur-3xl"
            data-speed="0.4"
            data-dir="down"
            data-scale-start="0.5"
            data-scale-mid="1.0"
            data-scale-end="1.2"
            data-opacity-start="0"
            data-opacity-mid="0.75"
            data-opacity-end="0.1"
          />

          {/* Top Right: Grand Navigational Compass Rose (Large Scene Element) */}
          <div
            className="sb-layer absolute -top-12 -right-12 w-72 h-72 sm:w-[420px] sm:h-[420px]"
            data-speed="0.8"
            data-dir="left"
            data-rot-start="-40"
            data-rot-end="35"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#C84B31]">
              <circle cx="120" cy="120" r="110" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
              <circle cx="120" cy="120" r="92" stroke="#D4AF37" strokeWidth="2.5" opacity="0.85" />
              <circle cx="120" cy="120" r="72" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              {/* Compass Cardinal Points */}
              <polygon points="120,20 128,105 120,120 112,105" fill="#C84B31" opacity="0.95" />
              <polygon points="120,220 128,135 120,120 112,135" fill="#D4AF37" opacity="0.8" />
              <polygon points="20,120 105,112 120,120 105,128" fill="#D4AF37" opacity="0.8" />
              <polygon points="220,120 135,112 120,120 135,128" fill="#C84B31" opacity="0.95" />
              {/* Corner Points */}
              <polygon points="50,50 110,110 120,120 110,120" fill="#C84B31" opacity="0.55" />
              <polygon points="190,50 130,110 120,120 130,120" fill="#D4AF37" opacity="0.55" />
              <polygon points="50,190 110,130 120,120 110,130" fill="#D4AF37" opacity="0.55" />
              <polygon points="190,190 130,130 120,120 130,130" fill="#C84B31" opacity="0.55" />
              <circle cx="120" cy="120" r="10" fill="#1C1617" stroke="#D4AF37" strokeWidth="2.5" />
              <text x="114" y="15" fill="#C84B31" fontSize="14" fontWeight="bold" fontFamily="monospace">N</text>
              <text x="226" y="125" fill="#C84B31" fontSize="14" fontWeight="bold" fontFamily="monospace">E</text>
              <text x="115" y="238" fill="#C84B31" fontSize="14" fontWeight="bold" fontFamily="monospace">S</text>
              <text x="4" y="125" fill="#C84B31" fontSize="14" fontWeight="bold" fontFamily="monospace">W</text>
            </svg>
          </div>

          {/* Bottom Left: Concentric GPS Radar Beacon Waves */}
          <div
            className="sb-layer absolute -bottom-16 -left-16 w-64 h-64 sm:w-[380px] sm:h-[380px]"
            data-speed="0.6"
            data-dir="up"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.18"
            data-opacity-start="0"
            data-opacity-mid="0.8"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#C84B31]">
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.45" />
              <circle cx="100" cy="100" r="65" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 3" opacity="0.75" />
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" opacity="0.8" />
              <circle cx="100" cy="100" r="14" fill="#C84B31" opacity="0.85" />
              <circle cx="100" cy="100" r="6" fill="#FAF7F2" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
            </svg>
          </div>

          {/* Midground: Full-Width Topographic Contour Panorama */}
          <div
            className="sb-layer absolute bottom-0 inset-x-0 w-full h-48 sm:h-64 opacity-50"
            data-speed="0.5"
            data-dir="right"
            data-scale-start="0.8"
            data-scale-mid="1.0"
            data-scale-end="1.08"
            data-opacity-start="0"
            data-opacity-mid="0.65"
            data-opacity-end="0.1"
          >
            <svg viewBox="0 0 1000 240" fill="none" preserveAspectRatio="none" className="w-full h-full text-[#C84B31]">
              <path d="M0 160 Q 250 80, 500 160 T 1000 140" stroke="currentColor" strokeWidth="2" opacity="0.6" />
              <path d="M0 190 Q 250 110, 500 190 T 1000 170" stroke="#D4AF37" strokeWidth="2" opacity="0.75" />
              <path d="M0 220 Q 250 140, 500 220 T 1000 200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.45" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: CONTACT MESSAGE (Wax Seal Medallion, Letter Wave Arcs)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'contact-message' && (
        <>
          <div
            className="sb-layer absolute top-10 right-10 w-72 h-72 sm:w-[420px] sm:h-[420px]"
            data-speed="0.7"
            data-dir="left"
            data-rot-start="-25"
            data-rot-end="25"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#D4AF37]">
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" opacity="0.7" />
              <circle cx="100" cy="100" r="76" stroke="#F4A261" strokeWidth="2" strokeDasharray="5 3" opacity="0.85" />
              <path d="M100 35 L106 85 L156 92 L118 122 L130 170 L100 140 L70 170 L82 122 L44 92 L94 85 Z" fill="currentColor" opacity="0.3" />
              <circle cx="100" cy="100" r="38" fill="#1C1617" stroke="currentColor" strokeWidth="2.5" />
              <text x="86" y="108" fill="#D4AF37" fontSize="20" fontWeight="bold" fontFamily="serif">SD</text>
            </svg>
          </div>

          <div
            className="sb-layer absolute bottom-8 left-8 w-80 h-64 sm:w-[440px] sm:h-[360px]"
            data-speed="0.8"
            data-dir="up"
            data-rot-start="15"
            data-rot-end="-15"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.8"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 180" fill="none" className="w-full h-full text-[#FAF7F2]">
              <path d="M20 140 C 50 40, 130 20, 200 30 C 220 35, 210 90, 150 100 C 90 110, 60 160, 20 140 Z" stroke="currentColor" strokeWidth="2" opacity="0.5" />
              <path d="M50 120 C 100 60, 150 50, 190 55" stroke="#F4A261" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
              <path d="M210 20 Q 160 80, 80 150" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: RESTAURANT COMFORT (Architectural Velvet Arches & Drapery)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'restaurant-comfort' && (
        <>
          {/* Ambient Warm Glow */}
          <div
            className="sb-layer absolute top-10 left-10 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#C84B31]/15 via-[#FDE8E1]/20 to-transparent blur-3xl"
            data-speed="0.4"
            data-dir="down"
            data-scale-start="0.5"
            data-scale-mid="1.0"
            data-scale-end="1.2"
            data-opacity-start="0"
            data-opacity-mid="0.7"
            data-opacity-end="0.1"
          />

          {/* Top Left: Monumental Architectural Fluted Arches in Terracotta & Gold */}
          <div
            className="sb-layer absolute -top-16 -left-12 w-80 h-80 sm:w-[480px] sm:h-[480px]"
            data-speed="0.8"
            data-dir="down"
            data-rot-start="-15"
            data-rot-end="15"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#C84B31]">
              <path d="M20 220 V 90 A 80 80 0 0 1 180 90 V 220" stroke="currentColor" strokeWidth="3" opacity="0.75" />
              <path d="M40 220 V 95 A 60 60 0 0 1 160 95 V 220" stroke="#D4AF37" strokeWidth="2.5" opacity="0.85" />
              <path d="M60 220 V 100 A 40 40 0 0 1 140 100 V 220" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" opacity="0.5" />
              <line x1="10" y1="220" x2="190" y2="220" stroke="#D4AF37" strokeWidth="4" />
              <circle cx="100" cy="40" r="14" fill="#D4AF37" opacity="0.75" />
            </svg>
          </div>

          {/* Bottom Right: Velvet Drapery Swags & Acoustic Diamond Relief */}
          <div
            className="sb-layer absolute -bottom-16 -right-12 w-80 h-80 sm:w-[500px] sm:h-[440px]"
            data-speed="0.9"
            data-dir="up"
            data-rot-start="15"
            data-rot-end="-15"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 260 220" fill="none" className="w-full h-full text-[#C84B31]">
              <path d="M20 160 C 80 90, 160 200, 240 110 C 260 90, 230 40, 180 60 C 110 80, 70 20, 20 60" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
              <path d="M45 180 C 105 110, 175 210, 255 130" stroke="#D4AF37" strokeWidth="3" opacity="0.85" />
              <polygon points="180,40 210,70 180,100 150,70" stroke="#D4AF37" strokeWidth="2" fill="#D4AF37" fillOpacity="0.15" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: RESTAURANT TRADITIONS (Handi Dum Steam & Live Tandoor Hearth)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'restaurant-traditions' && (
        <>
          {/* Top Left: Dum Vapor Vortex & Saffron Smoke Streamers */}
          <div
            className="sb-layer absolute -top-10 -left-10 w-56 h-56 sm:w-80 sm:h-80 lg:top-4 lg:left-6 lg:w-[460px] lg:h-[460px]"
            data-speed="0.8"
            data-dir="up"
            data-rot-start="-30"
            data-rot-end="35"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 220 220" fill="none" className="w-full h-full text-[#D4AF37] lg:opacity-45">
              <path d="M110 180 C 50 140, 40 80, 90 50 C 140 20, 190 70, 160 120 C 130 170, 90 140, 90 100 C 90 70, 120 70, 120 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              <circle cx="110" cy="180" r="18" fill="#C84B31" opacity="0.7" />
              <circle cx="110" cy="180" r="8" fill="#F4A261" />
            </svg>
          </div>

          {/* Bottom/Top Right: Live Hearth Charcoal Heat Radiators */}
          <div
            className="sb-layer absolute bottom-6 -right-10 w-56 h-56 sm:w-80 sm:h-80 lg:top-10 lg:bottom-auto lg:right-8 lg:w-[420px] lg:h-[420px]"
            data-speed="0.7"
            data-dir="down"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#E76F51] lg:opacity-45">
              <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.65" />
              <circle cx="100" cy="100" r="62" stroke="#D4AF37" strokeWidth="2.5" opacity="0.8" />
              <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="3" opacity="0.85" />
              <circle cx="100" cy="100" r="16" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: DINING RESERVATION (Grand Charger Plate & Cutlery Crest)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'dining-reservation' && (
        <>
          <div
            className="sb-layer absolute -top-16 -right-16 w-80 h-80 sm:w-[480px] sm:h-[480px]"
            data-speed="0.8"
            data-dir="left"
            data-rot-start="0"
            data-rot-end="50"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#C84B31]">
              <circle cx="120" cy="120" r="110" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
              <circle cx="120" cy="120" r="95" stroke="#D4AF37" strokeWidth="3" strokeDasharray="7 5" opacity="0.85" />
              <circle cx="120" cy="120" r="78" stroke="currentColor" strokeWidth="2" opacity="0.5" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <circle key={deg} cx={120 + 95 * Math.cos(deg * Math.PI / 180)} cy={120 + 95 * Math.sin(deg * Math.PI / 180)} r="5" fill="#D4AF37" opacity="0.95" />
              ))}
            </svg>
          </div>

          <div
            className="sb-layer absolute bottom-8 left-8 w-72 h-72 sm:w-[420px] sm:h-[420px]"
            data-speed="0.9"
            data-dir="up"
            data-rot-start="-20"
            data-rot-end="20"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#C84B31]">
              <path d="M75 40 V 100 M65 40 V 70 A 10 10 0 0 0 85 70 V 40 M75 100 V 170" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
              <ellipse cx="125" cy="58" rx="15" ry="22" stroke="#D4AF37" strokeWidth="2.5" opacity="0.85" />
              <path d="M125 80 V 170" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
              <circle cx="100" cy="125" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" opacity="0.45" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: CAFE HAVEN (Espresso Steam Ribbons & Acoustic Waves)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'cafe-haven' && (
        <>
          <div
            className="sb-layer absolute -top-12 -right-12 w-80 h-80 sm:w-[480px] sm:h-[480px]"
            data-speed="0.8"
            data-dir="up"
            data-rot-start="-15"
            data-rot-end="25"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 220 220" fill="none" className="w-full h-full text-[#2D6A4F]">
              <path d="M60 170 C 50 120, 100 100, 90 60 C 80 20, 130 20, 140 50 C 150 80, 110 110, 150 150" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              <path d="M110 180 C 100 130, 150 110, 140 70 C 130 30, 170 30, 180 60" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
              <circle cx="110" cy="190" r="35" stroke="currentColor" strokeWidth="2.5" opacity="0.55" />
            </svg>
          </div>

          <div
            className="sb-layer absolute top-10 left-10 w-72 h-72 sm:w-[400px] sm:h-[400px]"
            data-speed="0.6"
            data-dir="right"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 180 180" fill="none" className="w-full h-full text-[#2D6A4F]">
              <circle cx="90" cy="90" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <circle cx="90" cy="90" r="58" stroke="#D4AF37" strokeWidth="2.5" opacity="0.75" />
              <circle cx="90" cy="90" r="36" stroke="currentColor" strokeWidth="2.5" opacity="0.85" />
              <circle cx="90" cy="90" r="12" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: CAFE LEDGER (Botanical Olive Canopy & Calligraphy Flourish)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'cafe-ledger' && (
        <>
          <div
            className="sb-layer absolute -top-16 -left-12 w-84 h-80 sm:w-[520px] sm:h-[480px]"
            data-speed="0.8"
            data-dir="down"
            data-rot-start="-20"
            data-rot-end="25"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 220" fill="none" className="w-full h-full text-[#2D6A4F]">
              <path d="M20 190 C 60 130, 130 80, 220 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              {/* Olive leaves with rich green fills */}
              <ellipse cx="70" cy="140" rx="24" ry="9" transform="rotate(-35 70 140)" fill="#A8D5BA" opacity="0.8" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="120" cy="100" rx="26" ry="10" transform="rotate(-30 120 100)" fill="#A8D5BA" opacity="0.8" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="170" cy="65" rx="24" ry="9" transform="rotate(-25 170 65)" fill="#A8D5BA" opacity="0.8" stroke="currentColor" strokeWidth="1.5" />
              {/* Olives */}
              <ellipse cx="90" cy="130" rx="9" ry="13" transform="rotate(15 90 130)" fill="#2D6A4F" />
              <ellipse cx="140" cy="95" rx="9" ry="13" transform="rotate(20 140 95)" fill="#2D6A4F" />
              <ellipse cx="190" cy="60" rx="8" ry="11" transform="rotate(15 190 60)" fill="#D4AF37" />
            </svg>
          </div>

          <div
            className="sb-layer absolute -bottom-16 -right-12 w-84 h-80 sm:w-[500px] sm:h-[460px]"
            data-speed="0.9"
            data-dir="up"
            data-rot-start="20"
            data-rot-end="-20"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 220" fill="none" className="w-full h-full text-[#2D6A4F]">
              <path d="M30 160 C 90 210, 190 160, 160 90 C 130 20, 40 40, 70 100 C 90 160, 190 150, 220 80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
              <path d="M60 140 C 110 180, 180 140, 150 90" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: BANQUETS SPECS (Grand Chandelier & Festive Mandap Scene)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'banquets-specs' && (
        <>
          <div
            className="sb-layer absolute -top-16 -right-12 w-84 h-88 sm:w-[500px] sm:h-[520px]"
            data-speed="0.8"
            data-dir="down"
            data-rot-start="-15"
            data-rot-end="20"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#4A1521]">
              <path d="M120 10 V 50 M70 50 H 170 M50 90 H 190 M85 130 H 155" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
              <polygon points="120,55 128,75 120,95 112,75" fill="currentColor" opacity="0.75" stroke="#D4AF37" strokeWidth="1.5" />
              <polygon points="80,95 88,115 80,135 72,115" fill="currentColor" opacity="0.75" stroke="#D4AF37" strokeWidth="1.5" />
              <polygon points="160,95 168,115 160,135 152,115" fill="currentColor" opacity="0.75" stroke="#D4AF37" strokeWidth="1.5" />
              <polygon points="120,135 130,165 120,195 110,165" fill="#D4AF37" opacity="0.85" />
            </svg>
          </div>

          <div
            className="sb-layer absolute top-10 left-10 w-72 h-72 sm:w-[440px] sm:h-[440px]"
            data-speed="0.6"
            data-dir="right"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#4A1521]">
              <path d="M20 180 V 70 Q 100 15, 180 70 V 180" stroke="currentColor" strokeWidth="3" opacity="0.75" />
              <path d="M38 180 V 80 Q 100 35, 162 80 V 180" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5 4" opacity="0.85" />
              <circle cx="100" cy="22" r="10" fill="#D4AF37" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: BANQUETS PORTFOLIO (Garland Canopy & Celebration Starbursts)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'banquets-portfolio' && (
        <>
          <div
            className="sb-layer absolute -top-12 -left-12 w-84 h-72 sm:w-[520px] sm:h-[440px]"
            data-speed="0.8"
            data-dir="down"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 190" fill="none" className="w-full h-full text-[#4A1521]">
              <path d="M10 50 Q 70 150, 130 50 Q 190 150, 240 50" stroke="currentColor" strokeWidth="3" opacity="0.75" />
              <path d="M10 75 Q 70 175, 130 75 Q 190 175, 240 75" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5 4" opacity="0.85" />
              <circle cx="70" cy="145" r="9" fill="#C84B31" />
              <circle cx="190" cy="145" r="9" fill="#D4AF37" />
            </svg>
          </div>

          <div
            className="sb-layer absolute top-10 right-10 w-72 h-72 sm:w-[440px] sm:h-[440px]"
            data-speed="0.9"
            data-dir="up"
            data-rot-start="0"
            data-rot-end="70"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#D4AF37]">
              <path d="M100 35 L106 88 L158 95 L112 120 L132 170 L100 138 L68 170 L88 120 L42 95 L94 88 Z" fill="currentColor" opacity="0.4" stroke="#4A1521" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="14" fill="#4A1521" />
              <circle cx="100" cy="100" r="5" fill="#FAF7F2" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: BANQUETS ESTIMATOR (Grand Canopy Drapes & Shield)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'banquets-estimator' && (
        <>
          <div
            className="sb-layer absolute -top-12 -right-12 w-84 h-80 sm:w-[500px] sm:h-[480px]"
            data-speed="0.7"
            data-dir="left"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 220" fill="none" className="w-full h-full text-[#4A1521]">
              <path d="M10 40 Q 110 110, 220 30" stroke="#D4AF37" strokeWidth="3" opacity="0.85" />
              <path d="M35 80 Q 135 150, 235 70" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
              <path d="M60 120 Q 160 190, 245 110" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5 4" opacity="0.55" />
            </svg>
          </div>

          <div
            className="sb-layer absolute bottom-8 left-8 w-72 h-72 sm:w-[420px] sm:h-[420px]"
            data-speed="0.8"
            data-dir="up"
            data-rot-start="-15"
            data-rot-end="18"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#4A1521]">
              <path d="M100 25 C 150 25, 175 50, 175 100 C 175 150, 100 185, 100 185 C 100 185, 25 150, 25 100 C 25 50, 50 25, 100 25 Z" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
              <path d="M100 45 C 135 45, 155 65, 155 100 C 155 135, 100 165, 100 165 C 100 165, 45 135, 45 100 C 45 65, 65 45, 100 45 Z" stroke="#D4AF37" strokeWidth="2" opacity="0.8" />
              <circle cx="100" cy="100" r="18" fill="#D4AF37" opacity="0.45" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: HOTEL ROOMS (Tranquil Jali Lattice & Sanctuary Horizon)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'hotel-rooms' && (
        <>
          <div
            className="sb-layer absolute -top-12 -left-12 w-80 h-80 sm:w-[480px] sm:h-[480px]"
            data-speed="0.7"
            data-dir="right"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 220 220" fill="none" className="w-full h-full text-[#114B5F]">
              <rect x="25" y="25" width="170" height="170" rx="20" stroke="currentColor" strokeWidth="3" opacity="0.75" />
              <line x1="25" y1="110" x2="195" y2="110" stroke="#D4AF37" strokeWidth="2" opacity="0.85" />
              <line x1="110" y1="25" x2="110" y2="195" stroke="#D4AF37" strokeWidth="2" opacity="0.85" />
              <circle cx="110" cy="110" r="45" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
              <polygon points="110,40 155,110 110,180 65,110" stroke="#D4AF37" strokeWidth="2" opacity="0.85" />
            </svg>
          </div>

          <div
            className="sb-layer absolute top-10 right-10 w-72 h-72 sm:w-[440px] sm:h-[440px]"
            data-speed="0.8"
            data-dir="down"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#114B5F]">
              <path d="M140 40 A 50 50 0 1 0 165 115 A 40 40 0 1 1 140 40 Z" fill="#D4AF37" opacity="0.85" />
              <path d="M25 140 Q 100 115, 175 140" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
              <path d="M15 165 Q 100 140, 185 165" stroke="#D4AF37" strokeWidth="2" opacity="0.75" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: HOTEL AMENITIES (Hexagonal Comfort Grid & Diamond Gems)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'hotel-amenities' && (
        <>
          <div
            className="sb-layer absolute top-8 right-8 w-72 h-72 sm:w-[460px] sm:h-[460px]"
            data-speed="0.7"
            data-dir="down"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 220 220" fill="none" className="w-full h-full text-[#114B5F]">
              <polygon points="110,25 170,60 170,135 110,170 50,135 50,60" stroke="currentColor" strokeWidth="2.5" opacity="0.75" />
              <polygon points="110,42 152,70 152,125 110,152 68,125 68,70" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5 4" opacity="0.85" />
              <circle cx="110" cy="98" r="18" fill="#D4AF37" opacity="0.45" />
            </svg>
          </div>

          <div
            className="sb-layer absolute top-10 left-10 w-64 h-64 sm:w-[400px] sm:h-[400px]"
            data-speed="0.8"
            data-dir="up"
            data-rot-start="0"
            data-rot-end="50"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#D4AF37]">
              <polygon points="100,20 180,100 100,180 20,100" stroke="currentColor" strokeWidth="2.5" opacity="0.85" />
              <polygon points="100,45 155,100 100,155 45,100" stroke="#114B5F" strokeWidth="2" opacity="0.7" />
              <circle cx="100" cy="100" r="14" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: HOTEL BOOKING (Vintage Brass Room Key & Bell Curves)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'hotel-booking' && (
        <>
          <div
            className="sb-layer absolute top-8 right-8 w-72 h-72 sm:w-[460px] sm:h-[460px]"
            data-speed="0.8"
            data-dir="left"
            data-rot-start="-30"
            data-rot-end="25"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 220 220" fill="none" className="w-full h-full text-[#D4AF37]">
              <circle cx="75" cy="75" r="38" stroke="currentColor" strokeWidth="3" opacity="0.85" />
              <circle cx="75" cy="75" r="22" stroke="#114B5F" strokeWidth="2.5" opacity="0.75" />
              <line x1="102" y1="102" x2="180" y2="180" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="160" y1="160" x2="180" y2="140" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="172" y1="172" x2="192" y2="152" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>

          <div
            className="sb-layer absolute bottom-8 left-8 w-72 h-64 sm:w-[420px] sm:h-[380px]"
            data-speed="0.7"
            data-dir="up"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 180" fill="none" className="w-full h-full text-[#114B5F]">
              <path d="M40 140 C 40 60, 160 60, 160 140 Z" stroke="currentColor" strokeWidth="3" opacity="0.8" />
              <line x1="20" y1="140" x2="180" y2="140" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="100" cy="55" r="8" fill="#D4AF37" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: HOME MANIFESTO (Triple Heritage Archways & Sunburst)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'home-manifesto' && (
        <>
          <div
            className="sb-layer absolute -top-12 -right-12 w-84 h-84 sm:w-[540px] sm:h-[540px]"
            data-speed="0.8"
            data-dir="down"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 260 260" fill="none" className="w-full h-full text-[#D4AF37]">
              <path d="M25 240 V 110 A 95 95 0 0 1 215 110 V 240" stroke="currentColor" strokeWidth="3" opacity="0.85" />
              <path d="M50 240 V 120 A 70 70 0 0 1 190 120 V 240" stroke="#FDE8E1" strokeWidth="2.5" opacity="0.75" />
              <path d="M75 240 V 135 A 45 45 0 0 1 165 135 V 240" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" opacity="0.55" />
              <polygon points="120,15 130,38 110,38" fill="#F4A261" />
            </svg>
          </div>

          <div
            className="sb-layer absolute top-10 left-10 w-72 h-72 sm:w-[440px] sm:h-[440px]"
            data-speed="0.7"
            data-dir="right"
            data-rot-start="0"
            data-rot-end="60"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#FDE8E1]">
              <circle cx="100" cy="100" r="35" fill="#D4AF37" opacity="0.65" />
              {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((a) => (
                <line
                  key={a}
                  x1={100 + 44 * Math.cos(a * Math.PI / 180)}
                  y1={100 + 44 * Math.sin(a * Math.PI / 180)}
                  x2={100 + 82 * Math.cos(a * Math.PI / 180)}
                  y2={100 + 82 * Math.sin(a * Math.PI / 180)}
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              ))}
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: HOME ATELIER (Tasting Charger Plates & Split Splendor)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'home-atelier' && (
        <>
          <div
            className="sb-layer absolute -top-16 -left-16 w-80 h-80 sm:w-[500px] sm:h-[500px]"
            data-speed="0.8"
            data-dir="right"
            data-rot-start="0"
            data-rot-end="45"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#C84B31]">
              <circle cx="120" cy="120" r="110" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
              <circle cx="120" cy="120" r="92" stroke="#D4AF37" strokeWidth="3" strokeDasharray="6 4" opacity="0.85" />
              <circle cx="120" cy="120" r="70" stroke="currentColor" strokeWidth="2" opacity="0.55" />
            </svg>
          </div>

          <div
            className="sb-layer absolute bottom-10 right-10 w-72 h-64 sm:w-[460px] sm:h-[400px]"
            data-speed="0.9"
            data-dir="left"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 220 180" fill="none" className="w-full h-full text-[#D4AF37]">
              <path d="M25 150 Q 100 50, 175 125 T 210 40" stroke="currentColor" strokeWidth="2.5" opacity="0.75" />
              <path d="M50 170 Q 125 70, 200 145" stroke="#C84B31" strokeWidth="2.5" strokeDasharray="5 4" opacity="0.7" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: HOME EXPERIENCES (Four Wings Interlocking Geometry)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'home-experiences' && (
        <>
          <div
            className="sb-layer absolute -top-14 -right-12 w-60 h-60 sm:w-[400px] sm:h-[400px] lg:-top-10 lg:-right-8 lg:w-[460px] lg:h-[460px]"
            data-speed="0.8"
            data-dir="down"
            data-rot-start="-20"
            data-rot-end="30"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#D4AF37] lg:opacity-35">
              <circle cx="90" cy="90" r="55" stroke="#C84B31" strokeWidth="2.2" opacity="0.75" />
              <circle cx="150" cy="90" r="55" stroke="#2D6A4F" strokeWidth="2.2" opacity="0.75" />
              <circle cx="90" cy="150" r="55" stroke="#4A1521" strokeWidth="2.2" opacity="0.75" />
              <circle cx="150" cy="150" r="55" stroke="#114B5F" strokeWidth="2.2" opacity="0.75" />
              <circle cx="120" cy="120" r="20" fill="currentColor" opacity="0.55" />
            </svg>
          </div>

          <div
            className="sb-layer absolute bottom-10 left-10 w-64 h-64 sm:w-[420px] sm:h-[420px]"
            data-speed="0.7"
            data-dir="up"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#C84B31] lg:opacity-60">
              <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" opacity="0.55" />
              <line x1="100" y1="12" x2="100" y2="188" stroke="#D4AF37" strokeWidth="2.5" />
              <line x1="12" y1="100" x2="188" y2="100" stroke="#D4AF37" strokeWidth="2.5" />
              <polygon points="100,12 108,36 92,36" fill="currentColor" />
              <polygon points="188,100 164,92 164,108" fill="currentColor" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: LANDMARK (Gorakhnath Temple Spire & NH 29 Route Ribbon)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'landmark' && (
        <>
          <div
            className="sb-layer absolute -bottom-6 -right-4 w-44 h-48 sm:bottom-auto sm:top-6 sm:right-6 sm:w-56 sm:h-60 lg:top-4 lg:right-auto lg:left-6 lg:w-[460px] lg:h-[500px]"
            data-speed="0.7"
            data-dir="right"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.9"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 220 220" fill="none" className="w-full h-full text-[#C84B31] lg:opacity-45">
              <path d="M110 12 L115 32 H105 Z" fill="#D4AF37" />
              <circle cx="110" cy="38" r="8" fill="#D4AF37" />
              <path d="M110 46 C 85 88, 60 135, 35 195 H 185 C 160 135, 135 88, 110 46 Z" stroke="currentColor" strokeWidth="3" opacity="0.8" />
              <path d="M110 70 C 92 105, 74 148, 58 195 H 162 C 146 148, 128 105, 110 70 Z" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5 4" opacity="0.85" />
              <line x1="25" y1="195" x2="195" y2="195" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>

          <div
            className="sb-layer absolute bottom-2 -left-4 w-44 h-32 sm:bottom-2 sm:right-6 sm:left-auto sm:w-64 sm:h-44 lg:top-8 lg:bottom-auto lg:right-10 lg:w-[480px] lg:h-[360px]"
            data-speed="0.8"
            data-dir="down"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 170" fill="none" className="w-full h-full text-[#D4AF37] lg:opacity-90">
              <path d="M25 135 C 75 60, 175 145, 225 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="25" cy="135" r="8" fill="#C84B31" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="125" cy="105" r="7" fill="#1C1617" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="225" cy="35" r="9" fill="#2D6A4F" stroke="currentColor" strokeWidth="2.5" />
              <text x="18" y="160" fill="#C84B31" fontSize="11" fontWeight="bold" fontFamily="monospace" className="hidden lg:block">1 KM MANDIR</text>
              <text x="170" y="24" fill="#2D6A4F" fontSize="11" fontWeight="bold" fontFamily="monospace" className="hidden lg:block">SHARDA</text>
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: MENU SPOTLIGHT (Radiant Beams & Gourmet Tasting Aura)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'menu-spotlight' && (
        <>
          <div
            className="sb-layer absolute -top-12 -right-12 w-80 h-80 sm:w-[500px] sm:h-[500px]"
            data-speed="0.8"
            data-dir="down"
            data-rot-start="-25"
            data-rot-end="35"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#D4AF37]">
              <circle cx="120" cy="120" r="105" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
              <circle cx="120" cy="120" r="75" stroke="#F4A261" strokeWidth="2.5" strokeDasharray="7 5" opacity="0.8" />
              <circle cx="120" cy="120" r="45" stroke="currentColor" strokeWidth="2" opacity="0.55" />
              <line x1="120" y1="12" x2="120" y2="48" stroke="currentColor" strokeWidth="3" />
              <line x1="120" y1="192" x2="120" y2="228" stroke="currentColor" strokeWidth="3" />
              <line x1="12" y1="120" x2="48" y2="120" stroke="currentColor" strokeWidth="3" />
              <line x1="192" y1="120" x2="228" y2="120" stroke="currentColor" strokeWidth="3" />
            </svg>
          </div>

          <div
            className="sb-layer absolute top-8 left-8 w-68 h-68 sm:w-[440px] sm:h-[440px]"
            data-speed="0.9"
            data-dir="up"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#F4A261]">
              <path d="M100 170 C 50 120, 38 60, 88 35 C 138 10, 175 50, 150 100 C 125 150, 100 112, 100 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
              <circle cx="100" cy="170" r="12" fill="#C84B31" opacity="0.7" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: MENU CATALOG (Royal Ledger Borders & Spice Star Watermark)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'menu-catalog' && (
        <>
          <div
            className="sb-layer absolute top-6 right-6 w-64 h-64 sm:w-[440px] sm:h-[440px]"
            data-speed="0.7"
            data-dir="left"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#C84B31]">
              <path d="M190 12 H 50 C 25 12, 12 25, 12 50 V 190" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
              <path d="M175 30 H 70 C 50 30, 30 50, 30 70 V 175" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5 4" opacity="0.8" />
              <circle cx="45" cy="45" r="10" fill="#D4AF37" opacity="0.75" />
            </svg>
          </div>

          <div
            className="sb-layer absolute bottom-8 left-8 w-72 h-72 sm:w-[460px] sm:h-[460px]"
            data-speed="0.8"
            data-dir="up"
            data-rot-start="0"
            data-rot-end="50"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.88"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#D4AF37]">
              <polygon points="100,20 118,80 180,100 118,120 100,180 82,120 20,100 82,80" stroke="currentColor" strokeWidth="2.5" opacity="0.75" />
              <polygon points="100,45 112,88 155,100 112,112 100,155 88,112 45,100 88,88" fill="#C84B31" opacity="0.3" stroke="#C84B31" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="10" fill="currentColor" />
            </svg>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          THEME: CAFE BOTANICAL (Monstera Foliage & Amber Coffee Bloom)
      ───────────────────────────────────────────────────────────── */}
      {theme === 'cafe-botanical' && (
        <>
          <div
            className="sb-layer absolute -top-12 -right-12 w-56 h-56 sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px]"
            data-speed="0.8"
            data-dir="up"
            data-rot-start="-25"
            data-rot-end="30"
            data-scale-start="0.6"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#A8D5BA] lg:opacity-55">
              <path d="M120 20 C 180 60, 200 140, 160 200 C 120 240, 40 200, 40 140 C 40 80, 80 40, 120 20 Z" stroke="currentColor" strokeWidth="2.5" opacity="0.75" />
              <path d="M120 20 V 220" stroke="#52796F" strokeWidth="2.5" />
              <path d="M120 70 Q 160 90, 180 120" stroke="currentColor" strokeWidth="2" opacity="0.65" />
              <path d="M120 110 Q 70 130, 50 160" stroke="currentColor" strokeWidth="2" opacity="0.65" />
            </svg>
          </div>

          <div
            className="sb-layer absolute -bottom-12 -left-10 w-52 h-52 sm:w-72 sm:h-72 lg:bottom-8 lg:left-8 lg:w-[400px] lg:h-[400px]"
            data-speed="0.7"
            data-dir="right"
            data-scale-start="0.65"
            data-scale-mid="1.0"
            data-scale-end="1.15"
            data-opacity-start="0"
            data-opacity-mid="0.85"
            data-opacity-end="0.15"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#F4A261] lg:opacity-45">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" opacity="0.65" />
              <circle cx="100" cy="100" r="55" stroke="#A8D5BA" strokeWidth="2" opacity="0.7" />
              <ellipse cx="100" cy="100" rx="20" ry="28" fill="#1C1617" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
