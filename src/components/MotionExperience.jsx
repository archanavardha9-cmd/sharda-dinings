import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ─────────────────────────────────────────────────────────────
// High-Fidelity Botanical & Culinary Floating Vector Elements
// ─────────────────────────────────────────────────────────────

export function StarAniseVector({ className = "w-10 h-10 text-[#D4AF37]" }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={`drop-shadow-lg ${className}`}>
      {/* 8-pointed star anise carpels */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 50 C46 36, 42 22, 50 6 C58 22, 54 36, 50 50 Z"
            fill="currentColor"
            opacity="0.88"
          />
          {/* Seed pod opening */}
          <ellipse cx="50" cy="18" rx="3.5" ry="5.5" fill="#1C1617" opacity="0.65" />
          <ellipse cx="50" cy="18" rx="2" ry="3.5" fill="#E8B9A4" opacity="0.9" />
        </g>
      ))}
      <circle cx="50" cy="50" r="7" fill="#79533D" />
      <circle cx="50" cy="50" r="4" fill="#D4AF37" />
    </svg>
  );
}

export function CardamomPodVector({ className = "w-8 h-12 text-[#65765A]" }) {
  return (
    <svg viewBox="0 0 60 100" fill="currentColor" className={`drop-shadow-md ${className}`}>
      <path
        d="M30 6 C12 24, 8 68, 30 94 C52 68, 48 24, 30 6 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Botanical ribbed veins */}
      <path d="M30 6 Q20 50 30 94" stroke="#FAF7F2" strokeWidth="1.2" fill="none" opacity="0.45" />
      <path d="M30 6 Q40 50 30 94" stroke="#FAF7F2" strokeWidth="1.2" fill="none" opacity="0.45" />
      <path d="M30 2 L30 8" stroke="#3D1B24" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CoffeeBeanVector({ className = "w-7 h-9 text-[#4A3225]" }) {
  return (
    <svg viewBox="0 0 60 80" fill="currentColor" className={`drop-shadow-md ${className}`}>
      <path
        d="M30 4 C10 16, 8 64, 30 76 C52 64, 50 16, 30 4 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* S-curve split groove */}
      <path
        d="M30 8 C22 28, 38 52, 30 72"
        stroke="#1C1617"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M31 10 C24 28, 37 50, 31 70"
        stroke="#FAF7F2"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}

export function MintSprigVector({ className = "w-9 h-11 text-[#4E5D4E]" }) {
  return (
    <svg viewBox="0 0 80 100" fill="currentColor" className={`drop-shadow-md ${className}`}>
      <path d="M40 95 Q38 50 40 10" stroke="#374237" strokeWidth="2.5" fill="none" />
      {/* Main leaf */}
      <path d="M40 10 C22 18, 16 38, 40 46 C64 38, 58 18, 40 10 Z" fill="currentColor" opacity="0.92" />
      {/* Side leaf left */}
      <path d="M39 42 C18 42, 10 64, 38 68 C44 58, 42 48, 39 42 Z" fill="currentColor" opacity="0.85" />
      {/* Side leaf right */}
      <path d="M41 44 C62 44, 70 66, 42 70 C36 60, 38 50, 41 44 Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function SaffronTendrilVector({ className = "w-6 h-12 text-[#B94E35]" }) {
  return (
    <svg viewBox="0 0 40 100" fill="none" className={`drop-shadow-sm ${className}`}>
      <path
        d="M20 95 Q10 60 25 35 Q35 15 18 5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="18" cy="5" r="3.5" fill="#D4AF37" />
    </svg>
  );
}

export function RedChilliVector({ className = "w-6 h-14 text-[#B94E35]" }) {
  return (
    <svg viewBox="0 0 50 120" fill="currentColor" className={`drop-shadow-md ${className}`}>
      <path
        d="M25 15 C14 35, 12 85, 28 115 C38 90, 36 35, 25 15 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Green stem */}
      <path
        d="M25 15 Q20 5 14 3"
        stroke="#4E5D4E"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Calyx */}
      <path d="M18 15 C22 12, 28 12, 32 15 C28 20, 22 20, 18 15 Z" fill="#4E5D4E" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Floating Interactive Dish Portal with 3D Depth & Tilt
// ─────────────────────────────────────────────────────────────

export function FloatingDishPortal({
  src,
  alt,
  title,
  subtitle,
  price,
  className = "",
  size = "md", // sm, md, lg
  depth = 1,   // 1 to 3
  rotation = 0,
  glowColor = "rgba(212, 175, 55, 0.25)",
  badge = null
}) {
  const portalRef = useRef(null);

  const sizeClasses = {
    sm: "w-28 h-28 sm:w-36 sm:h-36",
    md: "w-44 h-44 sm:w-56 sm:h-56",
    lg: "w-60 h-60 sm:w-80 sm:h-80"
  };

  useEffect(() => {
    const el = portalRef.current;
    if (!el) return;

    // Continuous floating animation with subtle rotation delta
    const floatAnim = gsap.to(el, {
      y: depth * 12,
      rotation: rotation + (depth % 2 === 0 ? 3 : -3),
      duration: 3.5 + depth * 0.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // 3D Tilt on mouse move
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, {
        rotateX: -y * 0.08,
        rotateY: x * 0.08,
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      floatAnim.kill();
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [depth, rotation]);

  return (
    <div
      ref={portalRef}
      style={{
        transform: `rotate(${rotation}deg)`,
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      className={`relative group cursor-pointer select-none ${className}`}
    >
      {/* Circular Floating Outer Glow & Dashed Orbit */}
      <div
        className="absolute -inset-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none"
        style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
      ></div>

      <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#D4AF37]/35 animate-rotate-seal pointer-events-none"></div>

      {/* Main Image Core */}
      <div className={`relative rounded-full overflow-hidden border-2 border-[#FAF7F2]/90 shadow-2xl bg-[#110D0E] ${sizeClasses[size]}`}>
        <img
          src={src}
          alt={alt || title}
          className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.98] group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
      </div>

      {/* Micro Info Badge (Hover reveal or static) */}
      {(title || price) && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-[#1C1617]/90 backdrop-blur-md border border-[#D4AF37]/50 shadow-lg text-center pointer-events-none">
          {title && <p className="font-serif text-[11px] font-bold text-[#FAF7F2] leading-none">{title}</p>}
          {price && <p className="font-mono text-[9px] text-[#D4AF37] font-semibold mt-0.5">{price}</p>}
        </div>
      )}

      {badge && (
        <div className="absolute -top-2 right-2 px-2.5 py-0.5 rounded-full bg-[#B94E35] text-white text-[9px] font-mono font-bold shadow-md">
          {badge}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Kinetic Typography: Staggered Word / Line Reveal
// ─────────────────────────────────────────────────────────────

export function KineticTitle({
  children,
  as: Component = 'h1',
  className = '',
  stagger = 0.08,
  delay = 0.2
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.kinetic-word');
    gsap.fromTo(
      words,
      { y: '110%', opacity: 0, rotateZ: 3 },
      {
        y: '0%',
        opacity: 1,
        rotateZ: 0,
        duration: 0.9,
        stagger: stagger,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'restart reverse restart reverse'
        }
      }
    );
  }, [stagger, delay]);

  const text = typeof children === 'string' ? children : '';
  const words = text ? text.split(' ') : [];

  if (!text) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component ref={containerRef} className={`overflow-hidden inline-block ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.28em] align-top">
          <span className="kinetic-word inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}

// ─────────────────────────────────────────────────────────────
// Floating Ambient Element Controller (Levitating Spices & Details)
// ─────────────────────────────────────────────────────────────

export function FloatingSpiceCanvas({
  density = "medium", // sparse, medium, rich
  theme = "culinary", // culinary, cafe, celebratory, tranquil
  className = "absolute inset-0 pointer-events-none overflow-hidden"
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll('.floating-spice-item');
    items.forEach((item, index) => {
      const speed = 4 + (index % 5) * 1.2;
      const xDistance = (index % 2 === 0 ? 1 : -1) * (15 + (index % 3) * 10);
      const yDistance = (index % 3 === 0 ? 1 : -1) * (20 + (index % 4) * 8);
      const rot = (index % 2 === 0 ? 360 : -360);

      gsap.to(item, {
        x: `+=${xDistance}`,
        y: `+=${yDistance}`,
        rotation: `+=${rot * 0.15}`,
        duration: speed,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.25
      });
    });
  }, []);

  // Preset layouts by theme
  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {theme === "culinary" && (
        <>
          <div className="floating-spice-item absolute top-[12%] left-[8%] opacity-70">
            <StarAniseVector className="w-9 h-9 text-[#D4AF37]" />
          </div>
          <div className="floating-spice-item absolute top-[28%] right-[10%] opacity-65">
            <CardamomPodVector className="w-8 h-12 text-[#65765A]" />
          </div>
          <div className="floating-spice-item absolute bottom-[22%] left-[12%] opacity-60">
            <SaffronTendrilVector className="w-6 h-12 text-[#B94E35]" />
          </div>
          <div className="floating-spice-item absolute top-[68%] right-[14%] opacity-70">
            <StarAniseVector className="w-12 h-12 text-[#D7A84B]" />
          </div>
          <div className="floating-spice-item absolute top-[45%] left-[4%] opacity-55">
            <MintSprigVector className="w-8 h-10 text-[#4E5D4E]" />
          </div>
          <div className="floating-spice-item absolute bottom-[10%] right-[6%] opacity-60">
            <RedChilliVector className="w-6 h-12 text-[#B94E35]" />
          </div>
        </>
      )}

      {theme === "cafe" && (
        <>
          <div className="floating-spice-item absolute top-[15%] left-[10%] opacity-75">
            <CoffeeBeanVector className="w-8 h-11 text-[#79533D]" />
          </div>
          <div className="floating-spice-item absolute top-[30%] right-[12%] opacity-70">
            <CoffeeBeanVector className="w-6 h-9 text-[#4E5D4E]" />
          </div>
          <div className="floating-spice-item absolute bottom-[25%] left-[8%] opacity-65">
            <CoffeeBeanVector className="w-9 h-12 text-[#79533D]" />
          </div>
          <div className="floating-spice-item absolute top-[65%] right-[8%] opacity-75">
            <MintSprigVector className="w-9 h-11 text-[#65765A]" />
          </div>
          <div className="floating-spice-item absolute top-[48%] left-[6%] opacity-60">
            <StarAniseVector className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </>
      )}

      {theme === "celebratory" && (
        <>
          <div className="floating-spice-item absolute top-[14%] left-[12%] opacity-70">
            <StarAniseVector className="w-10 h-10 text-[#D4AF37]" />
          </div>
          <div className="floating-spice-item absolute top-[25%] right-[10%] opacity-60">
            <SaffronTendrilVector className="w-7 h-14 text-[#D4AF37]" />
          </div>
          <div className="floating-spice-item absolute bottom-[20%] left-[10%] opacity-70">
            <CardamomPodVector className="w-8 h-12 text-[#FAF7F2]" />
          </div>
          <div className="floating-spice-item absolute top-[62%] right-[12%] opacity-75">
            <StarAniseVector className="w-11 h-11 text-[#D4AF37]" />
          </div>
        </>
      )}

      {theme === "tranquil" && (
        <>
          <div className="floating-spice-item absolute top-[18%] left-[10%] opacity-60">
            <MintSprigVector className="w-8 h-10 text-[#65765A]" />
          </div>
          <div className="floating-spice-item absolute top-[32%] right-[14%] opacity-55">
            <CardamomPodVector className="w-7 h-11 text-[#8C6D37]" />
          </div>
          <div className="floating-spice-item absolute bottom-[24%] left-[14%] opacity-60">
            <StarAniseVector className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Interactive 3D Dish Stage (Scene Carousel with Depth Shift)
// ─────────────────────────────────────────────────────────────

export function InteractiveDishStage({ dishes = [], activeIdx = 0, onSelectDish }) {
  const stageRef = useRef(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelector('.stage-center-dish'),
      { scale: 0.88, opacity: 0, rotateY: 15 },
      { scale: 1, opacity: 1, rotateY: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [activeIdx]);

  const activeDish = dishes[activeIdx] || dishes[0];

  return (
    <div ref={stageRef} className="relative w-full max-w-4xl mx-auto py-8">
      {/* Central Hero Dish Showcase with 3D Depth */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Floating Background Glow Aura */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#B94E35]/25 via-[#D4AF37]/20 to-transparent blur-3xl pointer-events-none"></div>

        {/* Orbiting Rotating Dashed Ring */}
        <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-[#D4AF37]/30 animate-rotate-seal pointer-events-none"></div>

        {/* Main Center Plated Dish (Sculptural circular cutout) */}
        <div className="stage-center-dish relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#FAF7F2]/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] bg-[#110D0E] z-10">
          <img
            key={activeDish.src}
            src={activeDish.src}
            alt={activeDish.title}
            className="w-full h-full object-cover filter contrast-[1.1] scale-100 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1617]/50 via-transparent to-transparent"></div>
        </div>

        {/* Active Dish Detail Card Floating Below */}
        <div className="relative z-20 mt-6 text-center max-w-md px-4 space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
            {activeDish.category || 'CHEF CREATION'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
            {activeDish.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#EFE8DC]/80 font-light leading-relaxed">
            {activeDish.desc}
          </p>
          {activeDish.price && (
            <p className="font-mono text-base font-bold text-[#D4AF37] pt-1">
              {activeDish.price}
            </p>
          )}
        </div>
      </div>

      {/* Satellite Dish Selectors in 3D Perspective Floating Arc */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 overflow-x-auto pb-4 px-4 z-20 relative">
        {dishes.map((dish, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={idx}
              onClick={() => onSelectDish && onSelectDish(idx)}
              className={`relative flex flex-col items-center group transition-all duration-300 cursor-pointer ${
                isActive ? 'scale-110' : 'opacity-65 hover:opacity-100 scale-95'
              }`}
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 transition-all shadow-md ${
                isActive ? 'border-[#D4AF37] ring-4 ring-[#D4AF37]/30' : 'border-white/30 group-hover:border-white/70'
              }`}>
                <img src={dish.src} alt={dish.title} className="w-full h-full object-cover" />
              </div>
              <span className={`text-[10px] font-mono mt-2 transition-colors ${
                isActive ? 'text-[#D4AF37] font-bold' : 'text-[#FAF7F2]/60'
              }`}>
                {dish.shortTitle || dish.title.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Highly Noticeable Scroll-Triggered Animation Wrappers
// ─────────────────────────────────────────────────────────────

/**
 * ScrollPop: Pops elements into view with scaling overshoot and settle.
 */
export function ScrollPop({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  overshoot = 1.8,
  threshold = "85%"
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { scale: 0.68, opacity: 0, y: 35 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: `back.out(${overshoot})`,
        scrollTrigger: {
          trigger: el,
          start: `top ${threshold}`,
          toggleActions: "restart reverse restart reverse"
        }
      }
    );
  }, [delay, duration, overshoot, threshold]);

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * ScrollSlide: Moves elements in from left, right, top, or bottom.
 */
export function ScrollSlide({
  children,
  direction = "left", // 'left', 'right', 'up', 'down'
  distance = 70,
  delay = 0,
  duration = 0.85,
  className = "",
  threshold = "85%"
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const fromVars = { opacity: 0 };
    if (direction === "left") fromVars.x = -distance;
    else if (direction === "right") fromVars.x = distance;
    else if (direction === "up") fromVars.y = distance;
    else if (direction === "down") fromVars.y = -distance;

    gsap.fromTo(
      el,
      fromVars,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: `top ${threshold}`,
          toggleActions: "restart reverse restart reverse"
        }
      }
    );
  }, [direction, distance, delay, duration, threshold]);

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * ScrollZoom: Smooth zoom-in expansion on scroll.
 */
export function ScrollZoom({
  children,
  scaleFrom = 0.82,
  delay = 0,
  duration = 0.9,
  className = "",
  threshold = "85%"
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { scale: scaleFrom, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: `top ${threshold}`,
          toggleActions: "restart reverse restart reverse"
        }
      }
    );
  }, [scaleFrom, delay, duration, threshold]);

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * ScrollRotate: Enters with 3D rotation and dimensional tilt.
 */
export function ScrollRotate({
  children,
  rotateFrom = -10,
  delay = 0,
  duration = 0.9,
  className = "",
  threshold = "85%"
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { rotateZ: rotateFrom, scale: 0.85, opacity: 0 },
      {
        rotateZ: 0,
        scale: 1,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: el,
          start: `top ${threshold}`,
          toggleActions: "restart reverse restart reverse"
        }
      }
    );
  }, [rotateFrom, delay, duration, threshold]);

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * FloatingCard: Continuous organic floating (vertical, reverse, or diagonal).
 */
export function FloatingCard({
  children,
  type = "vertical", // 'vertical', 'reverse', 'diagonal'
  intensity = 14,
  duration = 5,
  className = ""
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let anim;
    if (type === "vertical") {
      anim = gsap.to(el, {
        y: -intensity,
        rotateZ: 1.5,
        duration: duration,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    } else if (type === "reverse") {
      anim = gsap.to(el, {
        y: intensity,
        rotateZ: -1.5,
        duration: duration * 1.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    } else if (type === "diagonal") {
      anim = gsap.to(el, {
        x: intensity * 0.7,
        y: -intensity,
        rotateZ: 2,
        duration: duration * 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    }

    return () => {
      if (anim) anim.kill();
    };
  }, [type, intensity, duration]);

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * StaggerGrid: Automatically staggers all direct child elements into view.
 */
export function StaggerGrid({
  children,
  stagger = 0.12,
  duration = 0.75,
  animation = "pop", // 'pop', 'rise', 'zoom'
  className = "",
  threshold = "85%"
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.children;
    if (!items || items.length === 0) return;

    let fromProps = { opacity: 0 };
    let ease = "power3.out";

    if (animation === "pop") {
      fromProps = { opacity: 0, scale: 0.7, y: 30 };
      ease = "back.out(1.7)";
    } else if (animation === "rise") {
      fromProps = { opacity: 0, y: 45 };
      ease = "power3.out";
    } else if (animation === "zoom") {
      fromProps = { opacity: 0, scale: 0.8 };
      ease = "power2.out";
    }

    gsap.fromTo(
      items,
      fromProps,
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: duration,
        stagger: stagger,
        ease: ease,
        scrollTrigger: {
          trigger: el,
          start: `top ${threshold}`,
          toggleActions: "restart reverse restart reverse"
        }
      }
    );
  }, [stagger, duration, animation, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

/**
 * AnimatedCounter: Counts up numbers smoothly when scrolled into view.
 */
export function AnimatedCounter({ end, suffix = "", duration = 1.8, className = "" }) {
  const [count, setCount] = React.useState(0);
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const numericEnd = parseInt(end, 10) || 0;
    const obj = { val: 0 };

    const anim = gsap.to(obj, {
      val: numericEnd,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "restart reverse restart reverse"
      },
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      }
    });

    return () => {
      anim.kill();
    };
  }, [end, duration]);

  return (
    <span ref={elRef} className={className}>
      {count}{suffix}
    </span>
  );
}
