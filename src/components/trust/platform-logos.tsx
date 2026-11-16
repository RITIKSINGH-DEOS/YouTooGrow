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
      <svg className="w-6 h-6 fill-current text-white/90 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    renderIcon: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2 text-white/90 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
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
      <div className="w-7 h-7 rounded-md border border-white/30 bg-white/[0.08] text-white font-extrabold text-xs flex items-center justify-center shrink-0 tracking-tighter shadow-sm">
        Pr
      </div>
    ),
  },
  {
    id: "davinci",
    name: "DaVinci Resolve",
    renderIcon: () => (
      <svg className="w-6 h-6 fill-none stroke-current stroke-2 text-white/90 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 7.79 13.5L12 12V3z" fill="currentColor" fillOpacity="0.25" />
        <path d="M12 12l7.79 4.5A9 9 0 0 1 4.21 16.5L12 12z" fill="currentColor" fillOpacity="0.5" />
        <path d="M12 12L4.21 16.5A9 9 0 0 1 12 3v9z" fill="currentColor" fillOpacity="0.75" />
      </svg>
    ),
  },
  {
    id: "aftereffects",
    name: "After Effects",
    renderIcon: () => (
      <div className="w-7 h-7 rounded-md border border-white/30 bg-white/[0.08] text-white font-extrabold text-xs flex items-center justify-center shrink-0 tracking-tighter shadow-sm">
        Ae
      </div>
    ),
  },
  {
    id: "vidiq",
    name: "vidIQ",
    renderIcon: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white/90 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 14h3.5v7H3v-7zm5.5-6H12v13H8.5V8zm5.5-5h3.5v18H14V3zm5.5 4H23v14h-3.5V7z" />
      </svg>
    ),
  },
  {
    id: "tubebuddy",
    name: "TubeBuddy",
    renderIcon: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white/90 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 19.5h20L12 2zm0 5l5.5 10H6.5L12 7z" />
      </svg>
    ),
  },
  {
    id: "frameio",
    name: "Frame.io",
    renderIcon: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white/90 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 3.5v9.5l9-4.75z" />
      </svg>
    ),
  },
  {
    id: "notion",
    name: "Notion",
    renderIcon: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white/90 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L17.842 1.97c-.42-.326-.98-.746-2.1-.653L3.899 2.296c-.653.047-.793.42-.42.747l.98.165zm.746 3.033v13.532c0 .886.42 1.213 1.306 1.165l13.915-.84c.886-.046.793-.793.793-1.446V5.841c0-.653-.28-.933-.886-.886l-14.24.84c-.653.046-.888.42-.888 1.446zm12.378 1.493c.093.373 0 .746-.373.793l-.84.14v8.868c-.466.28-.98.42-1.493.42-.746 0-1.073-.233-1.68-.98l-4.527-6.907v6.627l1.4.327c.373.093.466.42.093.746l-2.613.14c-.093 0-.327-.14-.373-.373 0-.373.187-.653.56-.746l.84-.233V8.873c0-.466-.233-.653-.746-.7l-.84-.093c-.093-.28 0-.606.373-.653l2.986-.187c.886 0 1.213.14 1.773.933l4.62 7.047V9.433l-1.353-.187c-.373-.047-.466-.373-.093-.7l2.846-.14c.093 0 .28.14.373.373z" />
      </svg>
    ),
  },
  {
    id: "photoshop",
    name: "Photoshop",
    renderIcon: () => (
      <div className="w-7 h-7 rounded-md border border-white/30 bg-white/[0.08] text-white font-extrabold text-xs flex items-center justify-center shrink-0 tracking-tighter shadow-sm">
        Ps
      </div>
    ),
  },
];

export function PlatformLogos() {
  // Quadruple items to create a smooth, continuous infinite loop
  const marqueeItems = [...businessLogos, ...businessLogos, ...businessLogos, ...businessLogos];

  return (
    <section
      aria-label="Platforms and Creative Ecosystem Stack"
      className="relative py-4 sm:py-5 border-y border-white/[0.06] bg-[#0a0a0a] overflow-hidden"
    >
      {/* Soft Vignette Gradients on Left and Right Edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#080808] to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#080808] to-transparent z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-4 text-center">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#78746e]">
          Platforms &amp; Production Stack We Scale
        </span>
      </div>

      {/* Marquee Track with Slow Smooth Speed and Pause on Hover */}
      <div className="flex overflow-hidden select-none group">
        <div className="flex shrink-0 items-center gap-12 sm:gap-16 md:gap-20 animate-marquee-left-slow group-hover:[animation-play-state:paused]">
          {marqueeItems.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-opacity duration-200 shrink-0 cursor-default opacity-85 hover:opacity-100"
            >
              {logo.renderIcon()}
              <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-[#f7f4ef]/90">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
