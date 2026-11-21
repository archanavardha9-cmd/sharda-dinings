import React from 'react';

// Wheat / Grain Botanical Flourish
export function WheatFlourish({ className = 'w-6 h-6 text-[#6E2434]' }) {
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
export function SpiceStar({ className = 'w-5 h-5 text-[#EAB963]' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 0 L23 14 L37 11 L26 20 L37 29 L23 26 L20 40 L17 26 L3 29 L14 20 L3 11 L17 14 Z" />
    </svg>
  );
}

// Coffee Bean Botanical Motif
export function CoffeeBeanFlourish({ className = 'w-6 h-6 text-[#3D5A45]' }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5">
      <ellipse cx="30" cy="30" rx="22" ry="16" transform="rotate(-30 30 30)" />
      <path d="M18 16 C 24 24, 36 36, 42 44" strokeLinecap="round" />
    </svg>
  );
}

// Editorial Heritage Emblem
export function ArchEmblem({ text = 'EST. 2010 • GORAKHPUR', className = 'text-[#6E2434]' }) {
  return (
    <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm border border-current text-[11px] font-semibold tracking-widest uppercase ${className}`}>
      <span>{text}</span>
    </div>
  );
}

// Wavy Section Divider
export function WavyDivider({ fill = '#FFFDF8', className = 'w-full h-8' }) {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg className={className} viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" fill={fill}></path>
      </svg>
    </div>
  );
}

// Circular Heritage Stamp
export function CircularHeritageStamp({ year = '2010', className = 'w-28 h-28' }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full border-2 border-dashed border-[#6E2434] p-2 text-[#6E2434] select-none ${className}`}>
      <div className="text-center">
        <span className="block font-serif font-bold text-sm tracking-tighter">SD</span>
        <span className="block text-[8px] font-semibold tracking-widest uppercase">SINCE {year}</span>
      </div>
      <div className="absolute inset-0.5 rounded-full border border-[#6E2434]/40 pointer-events-none"></div>
    </div>
  );
}

// Culinary Fork and Spoon Icon
export function CutleryCrest({ className = 'w-6 h-6 text-[#EAB963]' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
