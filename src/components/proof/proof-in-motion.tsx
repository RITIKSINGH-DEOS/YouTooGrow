"use client";

import { youtubeProofItems, instagramProofItems } from "@/data/proof-gallery.data";
import { ProofCard } from "./proof-card";
import { Sparkles, ShieldCheck } from "lucide-react";

export function ProofInMotion() {
  // Duplicate arrays for seamless, gapless 0% -> -50% infinite loops
  const youtubeLoop = [...youtubeProofItems, ...youtubeProofItems];
  const instagramLoop = [...instagramProofItems, ...instagramProofItems];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="proof">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ff2626]/[0.04] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#101010] text-xs font-semibold uppercase tracking-wider text-[#ff2626] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Algorithmic Yield</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-5">
          Proof in{" "}
          <span className="font-serif italic font-normal text-[#ff2626]">
            Motion
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-[#aaa6a0] text-base sm:text-lg leading-relaxed">
          Real metrics from live algorithmic retention tests and channel operations. We monitor impressions velocity,
          click-through rates, and average view duration to engineer repeatable growth.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#6f6b67]">
          <ShieldCheck className="w-4 h-4 text-[#00b67a]" />
          <span>Hover over any telemetry card to pause scrolling</span>
        </div>
      </div>

      {/* Marquee Row 1: YouTube Proof Cards (Moving Left) */}
      <div className="relative w-full overflow-hidden mb-6 pause-on-hover">
        {/* Left & Right Edge Vignette Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max marquee-inner animate-marquee-left">
          {youtubeLoop.map((item, idx) => (
            <ProofCard key={`yt-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2: Instagram Proof Cards (Moving Right) */}
      <div className="relative w-full overflow-hidden pause-on-hover">
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max marquee-inner animate-marquee-right">
          {instagramLoop.map((item, idx) => (
            <ProofCard key={`ig-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
