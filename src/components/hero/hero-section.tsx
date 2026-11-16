"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

        {/* Punchy 2-Line Master Headline (White & Red, No Subtitle Paragraph Fluff) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#f7f4ef] tracking-tight leading-[1.12] mb-6 sm:mb-8">
          Stop Chasing Empty Views.{" "}
          <span className="block font-serif italic font-normal text-[#ff2626]">
            We Turn Content Into Growth.
          </span>
        </h1>

        {/* The Video Framework Card with Real Founder Studio Photo */}
        <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/[0.12] bg-[#101010] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group mb-8">
          {isPlaying && videoSrc ? (
            <iframe
              src={videoSrc}
              title="YouTooGrow Introduction Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              {/* Founder Studio Photo */}
              <Image
                src="/images/introduction/founder-intro.jpg"
                alt="YouTooGrow Founder"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.85] contrast-[1.05]"
              />

              {/* Cinematic Vignette Overlays */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none"
                aria-hidden="true"
              />

              {/* Center Play Button & Framework Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ff2626] border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-[#d90808] text-white transition-all duration-300 shadow-[0_0_35px_rgba(255,38,38,0.5)] focus:outline-none mb-3"
                  aria-label="Play introduction video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
                  The YouTooGrow Framework
                </h3>
                <p className="text-xs text-[#f7f4ef]/80 max-w-xs mx-auto drop-shadow-sm">
                  Click to view our production lifecycle &amp; workflow walk-through.
                </p>
              </div>

              {/* Card Footer Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-[11px] text-[#aaa6a0] z-10">
                <span className="font-medium text-white/90">YouTooGrow Content Operations</span>
                <span>Research &bull; Production &bull; Optimization</span>
              </div>
            </div>
          )}
        </div>

        {/* Single Big High-Impact Action CTA */}
        <div className="flex justify-center mb-8">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 sm:px-14 sm:py-4.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,38,38,0.35)] hover:shadow-[0_0_45px_rgba(255,38,38,0.6)] hover:scale-[1.02]"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
