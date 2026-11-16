"use client";

import { youtubeProofItems, instagramProofItems } from "@/data/proof-gallery.data";
import { ProofCard } from "./proof-card";
import { Sparkles, ShieldCheck } from "lucide-react";

export function ProofInMotion() {
  const youtubeLoop = [...youtubeProofItems, ...youtubeProofItems];
  const instagramLoop = [...instagramProofItems, ...instagramProofItems];

  return (
    <section className="pt-6 pb-16 sm:pt-8 sm:pb-20 md:pt-10 md:pb-24 relative overflow-hidden" id="proof">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff2626]/[0.03] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-10 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
          Algorithmic Yield
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-3">
          Proof in{" "}
          <span className="font-serif italic font-normal text-[#ff2626]">
            Motion
          </span>
        </h2>

        <p className="max-w-xl mx-auto text-[#aaa6a0] text-xs sm:text-sm">
          Live telemetry from real algorithmic retention tests and channel operations.
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#6f6b67]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00b67a]" />
          <span>Hover over any telemetry card to pause</span>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative w-full overflow-hidden mb-4 pause-on-hover">
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max marquee-inner animate-marquee-left">
          {youtubeLoop.map((item, idx) => (
            <ProofCard key={`yt-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative w-full overflow-hidden pause-on-hover">
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max marquee-inner animate-marquee-right">
          {instagramLoop.map((item, idx) => (
            <ProofCard key={`ig-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
