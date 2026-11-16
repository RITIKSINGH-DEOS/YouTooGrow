"use client";

import { useState } from "react";
import { Youtube, Instagram } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

const youtubeProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Research & Strategy",
    description: "We find the strongest opportunities in your niche and build the long-form channel plan.",
  },
  {
    step: 2,
    title: "Script & Record",
    description: "We write retention-first scripts and direct you through high-confidence recording sessions.",
  },
  {
    step: 3,
    title: "Edit & Package",
    description: "We edit pacing-engineered videos and design high-contrast titles and click-tested thumbnails.",
  },
  {
    step: 4,
    title: "Publish & Optimise",
    description: "We publish, track retention and business pipeline results, and continuously improve every week.",
  },
];

const instagramProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Trend & Hook Research",
    description: "We identify trending audio, competitor outliers, and high-converting content vacuums.",
  },
  {
    step: 2,
    title: "Script & Batch Record",
    description: "We write snappy Reel frameworks with 3-second visual hooks for quick batch recording.",
  },
  {
    step: 3,
    title: "Edit & Motion Graphics",
    description: "We edit fast-paced Reels with kinetic captions, sound design, and retention-locking pacing.",
  },
  {
    step: 4,
    title: "Distribute & Convert",
    description: "We schedule peak-time distribution, optimize hashtag reach, and integrate DM lead funnels.",
  },
];

export function ProcessSection() {
  const [activeTab, setActiveTab] = useState<"youtube" | "instagram">("youtube");
  const steps = activeTab === "youtube" ? youtubeProcessSteps : instagramProcessSteps;

  return (
    <section className="py-16 md:py-24 relative bg-[#080808]" id="services">
      <div id="workflow" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#aaa6a0] block mb-2">
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

        {/* 4 Clean Minimal Process Cards Matching Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-white/[0.08] bg-[#0e0e0e] p-6 hover:border-white/20 transition-all duration-200 flex flex-col justify-start group"
            >
              {/* Red Circle Step Badge */}
              <div className="w-7 h-7 rounded-full bg-[#ff2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mb-5 shadow-[0_0_15px_rgba(255,38,38,0.3)]">
                {item.step}
              </div>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#f7f4ef] mb-2 tracking-tight group-hover:text-white transition-colors">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-[#aaa6a0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
