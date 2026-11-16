"use client";

import React from "react";

interface LogoItem {
  id: string;
  name: string;
  renderIcon: () => React.ReactNode;
}

const businessLogos: LogoItem[] = [
  {
    id: "youtube",
    name: "YouTube",
    renderIcon: () => (
      <svg className="w-5 h-5 fill-current text-[#ff0000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    renderIcon: () => (
      <svg className="w-4 h-4 fill-none stroke-current stroke-2 text-[#f7f4ef]" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "premiere",
    name: "Premiere Pro",
    renderIcon: () => (
      <div className="w-5 h-5 rounded bg-[#00005b] border border-[#9999ff]/40 text-[#9999ff] font-bold text-[10px] flex items-center justify-center shrink-0">
        Pr
      </div>
    ),
  },
  {
    id: "davinci",
    name: "DaVinci Resolve",
    renderIcon: () => (
      <div className="w-5 h-5 relative flex items-center justify-center shrink-0">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="7" r="4" fill="#ff4d4d" />
          <circle cx="7" cy="15" r="4" fill="#00b67a" />
          <circle cx="17" cy="15" r="4" fill="#3b82f6" />
        </svg>
      </div>
    ),
  },
  {
    id: "aftereffects",
    name: "After Effects",
    renderIcon: () => (
      <div className="w-5 h-5 rounded bg-[#00005b] border border-[#d291ff]/40 text-[#d291ff] font-bold text-[10px] flex items-center justify-center shrink-0">
        Ae
      </div>
    ),
  },
  {
    id: "vidiq",
    name: "vidIQ",
    renderIcon: () => (
      <svg className="w-4 h-4 fill-current text-[#00b4d8]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 14h3v6H4v-6zm5-5h3v11H9V9zm5-5h3v16h-3V4zm5 3h3v13h-3V7z" />
      </svg>
    ),
  },
  {
    id: "tubebuddy",
    name: "TubeBuddy",
    renderIcon: () => (
      <svg className="w-4 h-4 fill-current text-[#ff3344]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 19.5h20L12 2zm0 5l5.5 10H6.5L12 7z" />
      </svg>
    ),
  },
  {
    id: "frameio",
    name: "Frame.io",
    renderIcon: () => (
      <svg className="w-4 h-4 fill-current text-[#9d4edd]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 4v8l8-4-8-4z" />
      </svg>
    ),
  },
  {
    id: "notion",
    name: "Notion",
    renderIcon: () => (
      <svg className="w-4 h-4 fill-current text-[#f7f4ef]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L17.842 1.97c-.42-.326-.98-.746-2.1-.653L3.899 2.296c-.653.047-.793.42-.42.747l.98.165zm.746 3.033v13.532c0 .886.42 1.213 1.306 1.165l13.915-.84c.886-.046.793-.793.793-1.446V5.841c0-.653-.28-.933-.886-.886l-14.24.84c-.653.046-.888.42-.888 1.446zm12.378 1.493c.093.373 0 .746-.373.793l-.84.14v8.868c-.466.28-.98.42-1.493.42-.746 0-1.073-.233-1.68-.98l-4.527-6.907v6.627l1.4.327c.373.093.466.42.093.746l-2.613.14c-.093 0-.327-.14-.373-.373 0-.373.187-.653.56-.746l.84-.233V8.873c0-.466-.233-.653-.746-.7l-.84-.093c-.093-.28 0-.606.373-.653l2.986-.187c.886 0 1.213.14 1.773.933l4.62 7.047V9.433l-1.353-.187c-.373-.047-.466-.373-.093-.7l2.846-.14c.093 0 .28.14.373.373z" />
      </svg>
    ),
  },
  {
    id: "photoshop",
    name: "Photoshop",
    renderIcon: () => (
      <div className="w-5 h-5 rounded bg-[#001e36] border border-[#31a8ff]/40 text-[#31a8ff] font-bold text-[10px] flex items-center justify-center shrink-0">
        Ps
      </div>
    ),
  },
];

export function PlatformLogos() {
  // Quadruple items to create a smooth, seamless infinite loop
  const marqueeItems = [...businessLogos, ...businessLogos, ...businessLogos, ...businessLogos];

  return (
    <section
      aria-label="Platforms and Creative Ecosystem Stack"
      className="relative py-7 border-y border-white/[0.06] bg-[#0c0c0c]/60 backdrop-blur-sm overflow-hidden"
    >
      {/* Soft Vignette Gradients on Left and Right Edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-3 text-center">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#78746e]">
          Platforms &amp; Production Stack We Scale
        </span>
      </div>

      {/* Marquee Track with Pause on Hover */}
      <div className="flex overflow-hidden select-none group">
        <div className="flex shrink-0 items-center gap-10 sm:gap-14 animate-marquee-left group-hover:[animation-play-state:paused]">
          {marqueeItems.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="inline-flex items-center gap-2.5 text-[#aaa6a0] hover:text-[#f7f4ef] transition-colors duration-200 shrink-0 cursor-default"
            >
              {logo.renderIcon()}
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#d5d0c8]">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
