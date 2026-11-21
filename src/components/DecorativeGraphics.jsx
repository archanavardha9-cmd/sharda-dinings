import React from 'react';

// Continuous Rotating Heritage Seal (Radiant Resort & Mikuni Nagoya inspired)
export function RotatingHeritageSeal({
  text = "SHARDA DININGS • GORAKHPUR • ESTD 2010 • ",
  centerText = "SD",
  className = "w-28 h-28 text-[#D4AF37]"
}) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Rotating Ring with SVG Circular Text Path */}
      <svg className="w-full h-full animate-rotate-seal" viewBox="0 0 100 100">
        <path
          id="sealCirclePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[7.2px] uppercase font-bold tracking-[0.22em] fill-current">
          <textPath href="#sealCirclePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Static Center Core */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-11 h-11 rounded-full border border-current flex items-center justify-center bg-[#FAF7F2]/90 shadow-sm">
          <span className="font-brand font-black text-xs tracking-tight text-[#1C1617]">{centerText}</span>
        </div>
      </div>
    </div>
  );
}

// Architectural Gilded Divider with Diamond Center
export function GildedDivider({ className = "my-8" }) {
  return (
    <div className={`relative flex items-center justify-center max-w-md mx-auto ${className}`}>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
      <div className="mx-3 flex items-center space-x-1.5 text-[#D4AF37]">
        <span className="w-1.5 h-1.5 rotate-45 border border-current"></span>
        <span className="w-2 h-2 rotate-45 bg-current"></span>
        <span className="w-1.5 h-1.5 rotate-45 border border-current"></span>
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
    </div>
  );
}

// Numbered Counter Pill (Mikuni Nagoya style: 01 / 07)
export function NumberedPill({ current = "01", total = "07", label = "EXPERIENCE" }) {
  return (
    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/50 bg-[#1C1617]/70 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#FAF7F2]">
      <span className="text-[#D4AF37] font-bold">{current}</span>
      <span className="opacity-40">/</span>
      <span className="opacity-60">{total}</span>
      <span className="w-1 h-1 rounded-full bg-[#D4AF37] mx-1"></span>
      <span className="uppercase font-semibold tracking-wider text-[9px] text-[#FAF7F2]/90">{label}</span>
    </div>
  );
}

// Wheat / Grain Botanical Flourish
export function WheatFlourish({ className = "w-6 h-6 text-[#B94E35]" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 95 C50 60, 48 30, 50 5 C50 5, 52 30, 50 95 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M50 25 C35 15, 25 25, 50 35 C75 25, 65 15, 50 25 Z" />
      <path d="M50 40 C32 30, 22 42, 50 52 C78 42, 68 30, 50 40 Z" />
      <path d="M50 58 C30 48, 20 62, 50 72 C80 62, 70 48, 50 58 Z" />
      <path d="M50 75 C32 67, 24 80, 50 88 C76 80, 68 67, 50 75 Z" />
    </svg>
  );
}

// Royal Spice Starburst Motif
export function SpiceStar({ className = "w-5 h-5 text-[#D4AF37]" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 0 L23 14 L37 11 L26 20 L37 29 L23 26 L20 40 L17 26 L3 29 L14 20 L3 11 L17 14 Z" />
    </svg>
  );
}

// Coffee Bean Botanical Motif
export function CoffeeBeanFlourish({ className = "w-6 h-6 text-[#4E5D4E]" }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5">
      <ellipse cx="30" cy="30" rx="22" ry="16" transform="rotate(-30 30 30)" />
      <path d="M18 16 C 24 24, 36 36, 42 44" strokeLinecap="round" />
    </svg>
  );
}

// Cutlery Crest
export function CutleryCrest({ className = "w-6 h-6 text-[#D4AF37]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
