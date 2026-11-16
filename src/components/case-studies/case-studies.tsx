"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { featuredShorts, FeaturedShort } from "@/data/featured-shorts.data";
import { Youtube, Instagram, Play, Flame, X, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";

export function CaseStudiesSection() {
  const [activePlatform, setActivePlatform] = useState<"ALL" | "YouTube" | "Instagram">("ALL");
  const [selectedShort, setSelectedShort] = useState<FeaturedShort | null>(null);

  const filteredShorts =
    activePlatform === "ALL"
      ? featuredShorts
      : featuredShorts.filter((item) => item.platform === activePlatform);

  return (
    <section
      className="py-16 md:py-24 relative bg-[#090909] border-t border-white/[0.06] overflow-hidden"
      id="case-studies"
    >
      {/* Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff2626]/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2626] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#ff2626]">
              Top-Performing Vertical Assets
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-3">
            Engineered for Virality.{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              Best Performing Shorts.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#aaa6a0] max-w-lg mx-auto">
            A curated showcase of retention-engineered vertical hooks, high-CTR framing, and algorithmically optimized Shorts & Reels produced by YouTooGrow.
          </p>

          {/* Platform Filter Tabs */}
          <div className="mt-5 sm:mt-6 inline-flex items-center p-1 rounded-full bg-[#121212] border border-white/[0.08] gap-1 max-w-full overflow-x-auto">
            <button
              onClick={() => setActivePlatform("ALL")}
              className={`px-2.5 sm:px-3.5 py-1.5 rounded-full text-[10px] min-[360px]:text-[10.5px] sm:text-[11px] font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activePlatform === "ALL"
                  ? "bg-[#ff2626] text-white shadow-[0_0_15px_rgba(255,38,38,0.4)]"
                  : "text-[#8f8b85] hover:text-white"
              }`}
            >
              <span className="sm:hidden">All ({featuredShorts.length})</span>
              <span className="hidden sm:inline">All Assets ({featuredShorts.length})</span>
            </button>
            <button
              onClick={() => setActivePlatform("YouTube")}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[10px] min-[360px]:text-[10.5px] sm:text-[11px] font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activePlatform === "YouTube"
                  ? "bg-[#ff2626] text-white shadow-[0_0_15px_rgba(255,38,38,0.4)]"
                  : "text-[#8f8b85] hover:text-white"
              }`}
            >
              <Youtube className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span className="sm:hidden">Shorts</span>
              <span className="hidden sm:inline">YouTube Shorts</span>
            </button>
            <button
              onClick={() => setActivePlatform("Instagram")}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[10px] min-[360px]:text-[10.5px] sm:text-[11px] font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activePlatform === "Instagram"
                  ? "bg-[#ff2626] text-white shadow-[0_0_15px_rgba(255,38,38,0.4)]"
                  : "text-[#8f8b85] hover:text-white"
              }`}
            >
              <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span className="sm:hidden">Reels</span>
              <span className="hidden sm:inline">Instagram Reels</span>
            </button>
          </div>
        </div>

        {/* 9:16 Vertical Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredShorts.map((item) => {
            const isYoutube = item.platform === "YouTube";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedShort(item)}
                className="relative rounded-2xl border border-white/[0.08] hover:border-[#ff2626]/60 bg-gradient-to-b from-[#131313] via-[#0d0d0d] to-[#070707] shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(255,38,38,0.25)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden flex flex-col justify-between aspect-[9/16] w-full max-w-[310px] sm:max-w-none mx-auto cursor-pointer"
              >
                {/* Top Subtle Crimson Radiant Accent Beam on Hover */}
                <div
                  className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#ff2626] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#ff2626] z-20"
                  aria-hidden="true"
                />

                {/* Video Placeholder / Thumbnail Background */}
                <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden">
                  {item.thumbnailUrl ? (
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full relative flex items-center justify-center">
                      {/* Subtle Pattern Grid / Soundwave Placeholder */}
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#ff2626]/[0.06] rounded-full blur-2xl" />
                      <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-blue-500/[0.04] rounded-full blur-2xl" />

                      {/* Ambient Watermark Slot Numeral */}
                      <span className="font-serif italic text-7xl font-normal text-white/[0.03] select-none group-hover:text-[#ff2626]/10 transition-colors duration-300">
                        {item.slotNumber}
                      </span>
                    </div>
                  )}

                  {/* Gradient Scrim for crisp text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />
                </div>

                {/* Top Overlay Badges */}
                <div className="relative z-10 p-4 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10.5px] font-semibold text-white">
                    {isYoutube ? (
                      <Youtube className="w-3.5 h-3.5 text-[#ff2626]" />
                    ) : (
                      <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    )}
                    <span>{item.platform}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10.5px] font-bold text-[#f7f4ef]">
                    <Flame className="w-3 h-3 text-[#ff2626]" />
                    <span>{item.views}</span>
                  </div>
                </div>

                {/* Center High-Gloss Play Button */}
                <div className="relative z-10 flex flex-col items-center justify-center py-6">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#ff2626] group-hover:border-[#ff2626] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
                    <Play className="w-5 h-5 ml-0.5 fill-current transition-transform" />
                  </div>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-white/50 group-hover:text-white/80 transition-colors mt-2.5">
                    {item.videoUrl ? "Play Video" : "Preview Hook"}
                  </span>
                </div>

                {/* Bottom Overlay Metadata */}
                <div className="relative z-10 p-4 pt-0">
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#ff2626] block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-sm font-bold text-[#f7f4ef] group-hover:text-white transition-colors line-clamp-2 leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Retention Metric Tag */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-[10.5px] text-[#aaa6a0]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b67a] shadow-[0_0_6px_#00b67a]" />
                      <span className="font-medium text-[#f7f4ef]">{item.retention}</span>
                    </div>
                    <span className="text-white/40 text-[9px] uppercase tracking-wider font-mono">
                      Slot {item.slotNumber}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Preview / Placeholder Modal */}
      {selectedShort && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in-0 duration-200"
          onClick={() => setSelectedShort(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl border border-white/[0.12] bg-[#111111] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedShort(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-[#aaa6a0] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#ff2626]/20 border border-[#ff2626]/30 text-[#ff2626]">
                Slot {selectedShort.slotNumber}
              </span>
              <span className="text-xs text-[#8f8b85] font-semibold">{selectedShort.platform}</span>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight mb-2">
              {selectedShort.title}
            </h3>

            <p className="text-xs text-[#aaa6a0] leading-relaxed mb-4">
              {selectedShort.hookText}
            </p>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#161616] border border-white/[0.06] mb-4 text-xs">
              <div>
                <span className="text-[10px] text-[#6f6b67] uppercase block">Reach</span>
                <span className="font-bold text-white">{selectedShort.views}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6f6b67] uppercase block">Retention Rate</span>
                <span className="font-bold text-[#00b67a]">{selectedShort.retention}</span>
              </div>
            </div>

            {/* Tag Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {selectedShort.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10.5px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[#cfcac0]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Status Notice */}
            <div className="p-3 rounded-lg bg-[#ff2626]/[0.08] border border-[#ff2626]/20 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#ff2626] shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#aaa6a0] leading-normal">
                <span className="text-white font-semibold block mb-0.5">
                  Slot Ready for Video Link
                </span>
                Jab aap video choose kar lenge, simply unka YouTube Shorts / Instagram Reel URL ya embed link data file me paste kar sakte hain.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
