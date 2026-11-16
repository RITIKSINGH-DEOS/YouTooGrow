"use client";

import { useState } from "react";
import {
  Youtube,
  Instagram,
  Compass,
  Video,
  Film,
  TrendingUp,
  Sparkles,
  Mic,
  Zap,
  MessageSquare,
} from "lucide-react";

interface ProcessStep {
  step: string;
  stageBadge: string;
  title: string;
  description: string;
  deliverable: string;
  icon: React.ComponentType<{ className?: string }>;
}

const youtubeProcessSteps: ProcessStep[] = [
  {
    step: "01",
    stageBadge: "Stage 01",
    icon: Compass,
    title: "Market & Outlier Research",
    description: "We uncover high-demand topic opportunities, dissect competitor gaps, and engineer your 90-day long-form roadmap.",
    deliverable: "90-Day Content Roadmap",
  },
  {
    step: "02",
    stageBadge: "Stage 02",
    icon: Video,
    title: "Scripting & Directed Recording",
    description: "We craft retention-engineered scripts with 5-second hook formulas and direct you through confident, high-yield recording.",
    deliverable: "Word-for-Word Retention Scripts",
  },
  {
    step: "03",
    stageBadge: "Stage 03",
    icon: Film,
    title: "Pacing Editing & Packaging",
    description: "We cut dynamic, pacing-optimized narrative edits and design 3+ high-contrast, click-tested thumbnails per release.",
    deliverable: "4K Master Cut + 3x CTR Thumbnails",
  },
  {
    step: "04",
    stageBadge: "Stage 04",
    icon: TrendingUp,
    title: "Distribution & Iteration",
    description: "We handle SEO-indexed distribution, analyze minute-by-minute audience retention curves, and compound channel growth.",
    deliverable: "Weekly Telemetry & Pipeline Report",
  },
];

const instagramProcessSteps: ProcessStep[] = [
  {
    step: "01",
    stageBadge: "Stage 01",
    icon: Sparkles,
    title: "Audio & Viral Trend Discovery",
    description: "We identify rising viral audio patterns, visual formats, and high-converting competitor hooks before market saturation.",
    deliverable: "Weekly Viral Trend Matrix",
  },
  {
    step: "02",
    stageBadge: "Stage 02",
    icon: Mic,
    title: "Batch Script Frameworks",
    description: "We script 30-day Reel calendars with 3-second visual hooks structured for rapid, high-yield batch recording sessions.",
    deliverable: "30-Day Batch Script Deck",
  },
  {
    step: "03",
    stageBadge: "Stage 03",
    icon: Zap,
    title: "Kinetic Editing & Motion",
    description: "We edit fast-paced Reels featuring kinetic typography, custom sound design, visual B-roll, and retention pattern interrupts.",
    deliverable: "Exported High-Retention 9:16 Reels",
  },
  {
    step: "04",
    stageBadge: "Stage 04",
    icon: MessageSquare,
    title: "Peak Distribution & Funnels",
    description: "We schedule peak-hour distribution, optimize hashtag indexing, and engineer automated ManyChat DM lead funnels.",
    deliverable: "Automated DM Lead Funnel Integration",
  },
];

export function ProcessSection() {
  const [activeTab, setActiveTab] = useState<"youtube" | "instagram">("youtube");
  const steps = activeTab === "youtube" ? youtubeProcessSteps : instagramProcessSteps;

  return (
    <section className="pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-10 md:pb-10 relative bg-[#080808]" id="services">
      <div id="workflow" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#ff2626] block mb-2">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f7f4ef] tracking-tight leading-tight">
            You record. <span className="font-serif italic font-normal text-[#ff2626]">We handle everything else.</span>
          </h2>
        </div>

        {/* Stable Non-Shifting Platform Switcher with Smooth Slider Indicator */}
        <div className="flex items-center justify-center mb-8 sm:mb-10 px-4">
          <div className="relative inline-flex p-1 rounded-full border border-white/[0.08] bg-[#101010] shadow-inner select-none max-w-full">
            {/* Sliding Red Active Background Pill */}
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[#ff2626] shadow-[0_0_25px_rgba(255,38,38,0.45)] transition-all duration-300 ease-out ${
                activeTab === "youtube" ? "left-1" : "left-[calc(50%+2px)]"
              }`}
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={() => setActiveTab("youtube")}
              className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 w-[140px] min-[390px]:w-[155px] sm:w-48 py-2 sm:py-2.5 rounded-full text-[10px] min-[390px]:text-[11px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider whitespace-nowrap transition-colors duration-200 ${
                activeTab === "youtube" ? "text-white" : "text-[#aaa6a0] hover:text-white"
              }`}
              aria-pressed={activeTab === "youtube"}
            >
              <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>YouTube Process</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("instagram")}
              className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 w-[140px] min-[390px]:w-[155px] sm:w-48 py-2 sm:py-2.5 rounded-full text-[10px] min-[390px]:text-[11px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider whitespace-nowrap transition-colors duration-200 ${
                activeTab === "instagram" ? "text-white" : "text-[#aaa6a0] hover:text-white"
              }`}
              aria-pressed={activeTab === "instagram"}
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Instagram Process</span>
            </button>
          </div>
        </div>

        {/* 4 Identical-Size Cards with Smooth Fade-and-Slide Tab Transition */}
        <div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 transition-all duration-500 ease-out animate-in fade-in-0 slide-in-from-bottom-3"
        >
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/[0.08] hover:border-[#ff2626]/60 bg-gradient-to-b from-[#131313] via-[#0f0f0f] to-[#0a0a0a] p-4.5 sm:p-6 transition-all duration-300 ease-out flex flex-col justify-between group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_-10px_rgba(255,38,38,0.25)] hover:-translate-y-2 min-h-0 sm:min-h-[370px] cursor-default"
              >
                {/* Top Subtle Crimson Radiant Accent Beam on Hover */}
                <div
                  className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#ff2626] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#ff2626]"
                  aria-hidden="true"
                />

                {/* Ambient Backlight Glow on Card Top on Hover */}
                <div
                  className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#ff2626]/0 group-hover:bg-[#ff2626]/12 rounded-full blur-2xl transition-all duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Top Bar with Icon & Luxury Ghost Numeral */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626] group-hover:bg-[#ff2626] group-hover:text-white group-hover:shadow-[0_0_18px_rgba(255,38,38,0.5)] group-hover:scale-105 transition-all duration-300 shadow-sm shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-serif italic text-2xl sm:text-4xl font-normal text-white/[0.08] group-hover:text-[#ff2626]/35 group-hover:scale-105 transition-all duration-300 select-none">
                      {item.step}
                    </span>
                  </div>

                  {/* Stage Micro-Badge */}
                  <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff2626] block mb-1 sm:mb-1.5">
                    {item.stageBadge}
                  </span>

                  {/* Step Title with Harmonized Min-Height on Desktop */}
                  <h3 className="text-sm sm:text-lg font-bold text-[#f7f4ef] group-hover:text-white transition-colors mb-1.5 sm:mb-2.5 tracking-tight leading-snug min-h-0 sm:min-h-[48px] flex items-start">
                    {item.title}
                  </h3>

                  {/* Step Description with Harmonized Min-Height on Desktop */}
                  <p className="text-xs sm:text-sm text-[#aaa6a0] leading-relaxed min-h-0 sm:min-h-[72px]">
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Footer Anchor */}
                <div className="relative z-10 pt-2.5 sm:pt-3.5 border-t border-white/[0.06] flex items-center gap-2 text-[10.5px] sm:text-[11px] text-[#8f8b85] group-hover:text-[#cfcac0] transition-colors mt-3 sm:mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b67a] shrink-0 shadow-[0_0_6px_#00b67a]" />
                  <span className="font-medium truncate">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
