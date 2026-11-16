"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, CheckCircle2, TrendingUp, Sparkles, X } from "lucide-react";

interface HeroSectionProps {
  videoSrc?: string;
}

export function HeroSection({ videoSrc }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const handlePlayClick = () => {
    if (videoSrc) {
      setIsPlaying(true);
    } else {
      setInfoModalOpen(true);
    }
  };

  return (
    <section className="relative pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 overflow-hidden">
      {/* Background Lighting Accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff2626]/[0.06] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Brand Logo Header */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 group tracking-tight"
            aria-label="YouTooGrow Home"
          >
            <span className="text-2xl sm:text-3xl font-black text-[#f7f4ef] tracking-tight">
              YouToo<span className="text-[#ff2626]">Grow</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-[#ff2626] group-hover:scale-150 transition-transform duration-200"></span>
          </Link>
        </div>

        {/* Authority Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-[#101010]/80 backdrop-blur-sm mb-4">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#ff2626]"></span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#aaa6a0]">
            Research-Driven Content Strategy &bull; YouTube &amp; Instagram
          </span>
        </div>

        {/* Master Headline (Image 1) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#f7f4ef] tracking-tight leading-[1.1] mb-3">
          Your Content Deserves{" "}
          <span className="block sm:inline font-serif italic font-normal text-[#ff2626]">
            More Than Just Views.
          </span>
        </h1>

        {/* Supporting Headline */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#aaa6a0] font-normal leading-relaxed mb-6">
          We turn attention into predictable pipeline through algorithmic research, high-retention editing, and
          end-to-end channel management.
        </p>

        {/* The Video Framework Card (Image 2 - Placed Directly Below Headline) */}
        <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/[0.09] bg-[#101010] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group mb-8">
          {isPlaying && videoSrc ? (
            <iframe
              src={videoSrc}
              title="YouTooGrow Introduction Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center">
              {/* Dot Grid */}
              <div
                className="absolute inset-0 opacity-15 bg-[radial-gradient(#ff2626_1px,transparent_1px)] [background-size:20px_20px]"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-3">
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#ff2626] border border-[#ff2626]/40 flex items-center justify-center hover:scale-110 hover:bg-[#d90808] text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,38,38,0.4)] focus:outline-none"
                  aria-label="Play introduction video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
                <h3 className="text-lg sm:text-xl font-bold text-[#f7f4ef] tracking-tight">
                  The YouTooGrow Framework
                </h3>
                <p className="text-xs text-[#aaa6a0] max-w-xs mx-auto">
                  Click to view our production lifecycle &amp; workflow walk-through.
                </p>
              </div>

              {/* Card Footer Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-[11px] text-[#6f6b67] z-10">
                <span className="font-medium text-white/80">YouTooGrow Content Operations</span>
                <span>Research &bull; Production &bull; Optimization</span>
              </div>
            </div>
          )}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-all shadow-[0_0_20px_rgba(255,38,38,0.25)] group"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="#proof"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/[0.1] hover:border-white/25 bg-[#101010]/60 text-[#f7f4ef] transition-colors"
          >
            <Play className="w-3 h-3 text-[#ff2626] fill-[#ff2626]" />
            <span>Explore Proof</span>
          </Link>
        </div>

        {/* Value Anchors Strip */}
        <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#aaa6a0]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ff2626] shrink-0" />
            <span>Topic Outlier Research</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#00b67a] shrink-0" />
            <span>Retention-First Pacing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ff2626] shrink-0" />
            <span>100% Hands-Off Operations</span>
          </div>
        </div>
      </div>

      {/* Transparent Information Modal */}
      {infoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 max-w-sm w-full relative shadow-2xl space-y-3">
            <button
              type="button"
              onClick={() => setInfoModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-md text-[#aaa6a0] hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-9 h-9 rounded-full bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold text-[#f7f4ef]">Founder Introduction</h4>
            <p className="text-xs text-[#aaa6a0] leading-relaxed">
              Our official video walk-through is currently rendering. In the meantime, you can book a direct strategy
              call with our team to audit your channel.
            </p>
            <div className="pt-2 flex gap-2">
              <a
                href="#contact"
                onClick={() => setInfoModalOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#ff2626] text-white hover:bg-[#d90808]"
              >
                <span>Book Call</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={() => setInfoModalOpen(false)}
                className="px-4 py-2 rounded-full text-xs font-semibold border border-white/10 text-[#aaa6a0]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
