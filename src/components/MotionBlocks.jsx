import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

/**
 * Lightweight IntersectionObserver scroll reveal (compositor-only transform + opacity).
 */
export function Reveal({ children, className = '', delay = 0, variant = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const hiddenTransform = {
    up: 'opacity-0 translate-y-6',
    left: 'opacity-0 -translate-x-6',
    right: 'opacity-0 translate-x-6',
    zoom: 'opacity-0 scale-95',
  }[variant] || 'opacity-0 translate-y-6';

  const visibleTransform = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? visibleTransform : hiddenTransform
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Subtle scroll-linked parallax wrapper (compositor-only translate3d, respects reduced motion).
 */
export function ParallaxLayer({ children, speed = 18, className = '' }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let rafId = 0;
    const update = () => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewportMid = window.innerHeight * 0.5;
      const elMid = rect.top + rect.height * 0.5;
      const ratio = Math.max(-1, Math.min(1, (elMid - viewportMid) / window.innerHeight));
      setOffset(ratio * speed);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{ transform: `translate3d(0, ${offset.toFixed(1)}px, 0)` }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Slowly rotating concentric compass & lotus mandala geometry (SVG hairline decorative layer).
 */
export function OrbitalRingBackdrop({
  className = '',
  strokeColor = '#D99B38',
  secondaryColor = '#6E2434',
  opacity = 0.2,
  size = 520,
}) {
  return (
    <div
      aria-hidden="true"
      style={{ opacity }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg width={size} height={size} viewBox="0 0 400 400" fill="none" className="w-full h-full">
        <g className="origin-center animate-spin-slow">
          <circle
            cx="200"
            cy="200"
            r="188"
            stroke={strokeColor}
            strokeWidth="1"
            strokeDasharray="6 10"
          />
          <circle cx="200" cy="12" r="2.5" fill={strokeColor} />
          <circle cx="200" cy="388" r="2.5" fill={strokeColor} />
          <circle cx="12" cy="200" r="2.5" fill={strokeColor} />
          <circle cx="388" cy="200" r="2.5" fill={strokeColor} />
        </g>

        <g className="origin-center animate-spin-reverse">
          <circle
            cx="200"
            cy="200"
            r="144"
            stroke={secondaryColor}
            strokeWidth="0.9"
            strokeDasharray="2 7"
          />
          <circle cx="200" cy="200" r="102" stroke={strokeColor} strokeWidth="0.8" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="200"
              cy="96"
              rx="14"
              ry="38"
              stroke={strokeColor}
              strokeWidth="0.8"
              transform={`rotate(${deg} 200 200)`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/**
 * Ambient drifting luminous sparks for rich evening surfaces.
 */
export function FloatingLanternParticles({ color = '#EAB963', count = 8 }) {
  const particles = [
    { top: '12%', left: '8%', size: 4, delay: '0s' },
    { top: '26%', left: '84%', size: 4, delay: '1.2s' },
    { top: '64%', left: '14%', size: 5, delay: '2.1s' },
    { top: '76%', left: '78%', size: 4, delay: '0.7s' },
    { top: '42%', left: '92%', size: 3, delay: '3.0s' },
    { top: '18%', left: '46%', size: 3, delay: '1.8s' },
    { top: '84%', left: '36%', size: 4, delay: '2.6s' },
    { top: '52%', left: '5%', size: 5, delay: '3.5s' },
  ].slice(0, count);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, idx) => (
        <span
          key={idx}
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: color,
            animationDelay: p.delay,
          }}
          className="absolute rounded-full blur-[0.5px] animate-particle-float"
        />
      ))}
    </div>
  );
}

/**
 * Gentle botanical leaf & starburst corner accents.
 */
export function FloatingBotanicalAccents({ color = '#D99B38' }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute -top-4 left-8 w-20 h-20 opacity-20 animate-float-slow"
        viewBox="0 0 80 80"
        fill="none"
        stroke={color}
        strokeWidth="1.15"
      >
        <path d="M12 64 C24 38, 42 22, 68 14 C62 40, 46 58, 12 64 Z" />
        <path d="M12 64 C32 46, 48 30, 68 14" strokeDasharray="3 3" />
      </svg>
      <svg
        className="absolute bottom-6 right-10 w-14 h-14 opacity-25 animate-float-reverse"
        viewBox="0 0 60 60"
        fill="none"
        stroke={color}
        strokeWidth="1.15"
      >
        <path d="M30 4 L34 24 L54 30 L34 36 L30 56 L26 36 L6 30 L26 24 Z" />
      </svg>
    </div>
  );
}

/**
 * Smooth SVG wave seam transitioning cleanly between contrasting sections.
 */
export function AnimatedWaveDivider({ topBg = 'transparent', waveFill = '#FAF7F2', flip = false }) {
  return (
    <div
      aria-hidden="true"
      style={{ backgroundColor: topBg }}
      className={`w-full overflow-x-clip overflow-y-hidden leading-none select-none ${
        flip ? 'rotate-180' : ''
      }`}
    >
      <svg
        viewBox="0 0 1440 68"
        preserveAspectRatio="none"
        className="w-[106%] -ml-[3%] h-9 sm:h-12 animate-wave-drift"
      >
        <path
          d="M0,22 C240,64 480,2 720,32 C960,62 1200,8 1440,34 L1440,68 L0,68 Z"
          fill={waveFill}
        />
      </svg>
    </div>
  );
}

const STREAM_SHAPE_CLASSES = {
  wide: 'w-64 sm:w-80 aspect-[16/10] rounded-xl',
  landscape: 'w-56 sm:w-68 aspect-[4/3] rounded-xl',
  portrait: 'w-44 sm:w-52 aspect-[3/4] rounded-2xl',
  arch: 'w-44 sm:w-52 aspect-[3/4] arch-frame',
  square: 'w-48 sm:w-56 aspect-square rounded-2xl',
};

const STAGGER_Y_CLASSES = ['', 'sm:translate-y-4', 'sm:-translate-y-3', 'sm:translate-y-2', ''];

/**
 * Unified seamless Right-to-Left horizontal image stream:
 * All frames enter from the right and exit cleanly to the left with varied heights/proportions,
 * zero gaps, zero opposing strips, hover-pause, and exact seam wrap.
 */
export function ContinuousImageStream({
  items,
  speed = 'slow',
  paused = false,
  dark = false,
  className = '',
}) {
  const doubled = [...items, ...items];
  const animClass = speed === 'med' ? 'animate-stream-rtl-med' : 'animate-stream-rtl-slow';

  return (
    <div className={`overflow-hidden w-full group py-4 ${className}`}>
      <div
        className={`flex items-center gap-6 pr-6 w-max will-change-transform ${
          paused ? '' : `${animClass} group-hover:[animation-play-state:paused]`
        }`}
      >
        {doubled.map((item, idx) => {
          const shapeClass = STREAM_SHAPE_CLASSES[item.shape || 'landscape'];
          const staggerClass = STAGGER_Y_CLASSES[idx % STAGGER_Y_CLASSES.length];
          return (
            <figure
              key={`${item.src}-${idx}`}
              className={`shrink-0 m-0 space-y-2.5 transition-transform duration-500 hover:-translate-y-1 ${staggerClass}`}
            >
              <div
                className={`media-frame border shadow-sm ${
                  dark ? 'border-white/15' : 'border-black/10'
                } ${shapeClass}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption
                className={`text-xs font-serif italic max-w-[14rem] truncate ${
                  dark ? 'text-[#EFE4D8]' : 'text-[#52453E]'
                }`}
              >
                {item.label}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Curated Unified Right-to-Left Gallery Exhibition:
 * Merges supplied gallery items into ONE seamless varied-proportion Right-to-Left stream.
 * Never creates opposing-direction carousels.
 */
export function UnifiedGalleryStream({
  title,
  items = [],
  dark = false,
  pauseLabel = 'Gallery',
  speed = 'slow',
}) {
  const [paused, setPaused] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });

  return (
    <div className="space-y-4">
      {(title || pauseLabel) && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          {title && (
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                dark ? 'text-[#EAB963]' : 'text-[#6E2434]'
              }`}
            >
              {title}
            </p>
          )}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-3.5 py-2 min-h-[38px] rounded-md border transition-colors ${
              dark
                ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                : 'bg-white/85 border-[#DFD2C2] text-[#241814] hover:bg-white'
            }`}
          >
            {paused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            <span>{paused ? `Resume ${pauseLabel}` : `Pause ${pauseLabel}`}</span>
          </button>
        </div>
      )}

      <ContinuousImageStream items={items} speed={speed} paused={paused} dark={dark} />
    </div>
  );
}

/**
 * Compatibility wrapper consolidating any multi-list inputs into a single Right-to-Left stream.
 */
export function OpposingGalleryStreams({
  title,
  topRow = [],
  bottomRow = [],
  dark = false,
  pauseLabel = 'Gallery',
}) {
  const merged = [...(topRow || []), ...(bottomRow || [])];
  return (
    <UnifiedGalleryStream
      title={title}
      items={merged}
      dark={dark}
      pauseLabel={pauseLabel}
      speed="slow"
    />
  );
}

/**
 * Clean single-strip Right-to-Left motion wrapper.
 */
export function MovingPhotoStrip({ items, title, pauseLabel = 'Motion', dark = false }) {
  return (
    <UnifiedGalleryStream
      title={title}
      items={items}
      dark={dark}
      pauseLabel={pauseLabel}
      speed="med"
    />
  );
}

/**
 * Smooth continuous Right-to-Left announcement ribbon with hover pause.
 */
export function PromotionalTicker({ items, dark = false }) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y ${
        dark
          ? 'bg-gradient-to-r from-[#2D1720] via-[#3A1C28] to-[#261613] border-[#4E2C36] text-[#F9EBE0]'
          : 'bg-gradient-to-r from-[#FAF0E2] via-[#FBEAE0] to-[#EAF0F6] border-[#E4D8CA] text-[#241814]'
      }`}
    >
      <div className="flex items-center w-max py-3 animate-marquee-fast hover:[animation-play-state:paused]">
        {doubled.map((entry, idx) => (
          <span
            key={entry + idx}
            className="inline-flex items-center gap-6 px-6 text-xs font-medium tracking-wide whitespace-nowrap"
          >
            <span>{entry}</span>
            <span className="text-[#D99B38]" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
