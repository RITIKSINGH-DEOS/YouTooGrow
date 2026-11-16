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
    title: "Audio & Trend Discovery",
    description: "We identify rising viral audio patterns, visual formats, and high-converting competitor hooks before saturation.",
    deliverable: "Weekly Viral Trend Matrix",
  },
  {
    step: "02",
    stageBadge: "Stage 02",
    icon: Mic,
    title: "Batch Script Frameworks",
    description: "We script 30-day Reel calendars with 3-second visual hooks structured for rapid 60-minute batch recording sessions.",
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
    description: "We schedule peak-hour distribution, optimize hashtag indexing, and build ManyChat DM keyword conversion funnels.",
    deliverable: "Automated DM Lead Funnel Integration",
  },
];

export function ProcessSection() {
  const [activeTab, setActiveTab] = useState<"youtube" | "instagram">("youtube");
  const steps = activeTab === "youtube" ? youtubeProcessSteps : instagramProcessSteps;

  return (
    <section className="py-16 md:py-24 relative bg-[#080808]" id="services">
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

        {/* Minimal Platform Switcher for YouTube & Instagram */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1 rounded-full border border-white/[0.08] bg-[#101010]">
            <button
              type="button"
              onClick={() => setActiveTab("youtube")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === "youtube"
                  ? "bg-[#ff2626] text-white shadow-[0_0_20px_rgba(255,38,38,0.35)]"
                  : "text-[#aaa6a0] hover:text-[#f7f4ef]"
              }`}
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube Process</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("instagram")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === "instagram"
                  ? "bg-[#ff2626] text-white shadow-[0_0_20px_rgba(255,38,38,0.35)]"
                  : "text-[#aaa6a0] hover:text-[#f7f4ef]"
              }`}
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Process</span>
            </button>
          </div>
        </div>

        {/* 4 Bespoke Redesigned Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#131313] via-[#0f0f0f] to-[#0a0a0a] p-6 hover:border-[#ff2626]/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(255,38,38,0.12)]"
              >
                {/* Top Subtle Crimson Radiant Accent Beam */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2626]/0 to-transparent group-hover:via-[#ff2626] transition-all duration-500"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Bar with Icon & Luxury Ghost Numeral */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626] group-hover:bg-[#ff2626] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-serif italic text-3xl sm:text-4xl font-normal text-white/[0.08] group-hover:text-[#ff2626]/30 transition-colors select-none">
                      {item.step}
                    </span>
                  </div>

                  {/* Stage Micro-Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff2626] block mb-1.5">
                    {item.stageBadge}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#f7f4ef] group-hover:text-white transition-colors mb-2.5 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-[#aaa6a0] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Footer Anchor */}
                <div className="pt-3.5 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-[#8f8b85] group-hover:text-[#cfcac0] transition-colors">
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
