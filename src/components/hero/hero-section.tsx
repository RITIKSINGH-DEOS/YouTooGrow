"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Sparkles, X } from "lucide-react";

interface HeroSectionProps {
  videoSrc?: string;
}

export function HeroSection({ videoSrc }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  useEffect(() => {
    if (!infoModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInfoModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [infoModalOpen]);

  const handlePlayClick = () => {
    if (videoSrc) {
      setIsPlaying(true);
    } else {
      setInfoModalOpen(true);
    }
  };

  return (
    <section className="relative pt-3 pb-5 sm:pt-4 sm:pb-6 md:pt-4 md:pb-6 overflow-hidden">
      {/* Cinematic Ambient Glow Behind Headline */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(255,38,38,0.16)_0%,rgba(255,38,38,0.03)_50%,transparent_75%)] blur-[85px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Brand Logo Header */}
        <div className="mb-2 sm:mb-2.5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 group tracking-tight"
            aria-label="YouTooGrow Home"
          >
            <span className="text-xl sm:text-2xl font-black text-[#f7f4ef] tracking-tight">
              YouToo<span className="text-[#ff2626]">Grow</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2626] shadow-[0_0_8px_#ff2626] group-hover:scale-125 transition-transform duration-200"></span>
          </Link>
        </div>

        {/* Authority Pill with Live Pulse */}
        <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-white/[0.11] bg-gradient-to-b from-[#171719]/95 to-[#0e0e10]/95 backdrop-blur-md mb-2 sm:mb-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] max-w-full">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#ff2626] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2626] shadow-[0_0_6px_#ff2626]" />
          </span>
          <span className="text-[8.5px] sm:text-[10.5px] font-semibold uppercase tracking-tight sm:tracking-wider text-[#b8b4ad] whitespace-nowrap">
            Research-Driven Content Strategy &bull; YouTube &amp; Instagram
          </span>
        </div>

        {/* Master Catchy 3-Line Headline with Radiant Gradient & Glow */}
        <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] font-extrabold tracking-tight leading-[1.15] mb-3 sm:mb-3.5">
          <span className="block bg-gradient-to-b from-[#ffffff] via-[#f7f4ef] to-[#cfcac0] bg-clip-text text-transparent drop-shadow-sm">
            We Grow Your Business Channel
          </span>
          <span className="block bg-gradient-to-b from-[#ffffff] via-[#f7f4ef] to-[#cfcac0] bg-clip-text text-transparent drop-shadow-sm mt-0.5 sm:mt-1">
            Completely Done-For-You.
          </span>
          <span className="block font-serif italic font-normal bg-gradient-to-r from-[#ff5959] via-[#ff2626] to-[#e00707] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(255,38,38,0.35)] mt-1">
            To Generate Endless Leads &amp; Growth.
          </span>
        </h1>

        {/* Studio-Grade Cinema Frame around Video Framework Card */}
        <div className="relative w-full max-w-[480px] sm:max-w-[540px] md:max-w-[560px] mx-auto rounded-xl sm:rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/[0.08] to-white/[0.03] shadow-[0_24px_65px_rgba(0,0,0,0.9),0_0_45px_rgba(255,38,38,0.08)] group mb-3 sm:mb-4">
          <div className="relative aspect-video w-full rounded-[11px] sm:rounded-[15px] overflow-hidden bg-[#101010]">
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
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.85] contrast-[1.06]"
                />

                {/* Cinematic Vignette Overlays */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/45 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top-Left Studio HUD Pill */}
                <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-widest text-white/80 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2626] shadow-[0_0_6px_#ff2626]" />
                  <span>Studio Overview</span>
                </div>

                {/* Center Play Button & Framework Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                  <div className="relative mb-2.5">
                    <span
                      className="absolute inset-0 rounded-full bg-[#ff2626]/40 animate-ping-slow pointer-events-none"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      onClick={handlePlayClick}
                      className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#ff3838] to-[#d90808] border border-white/30 flex items-center justify-center hover:scale-110 text-white transition-all duration-300 shadow-[0_0_28px_rgba(255,38,38,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] focus:outline-none"
                      aria-label="Play introduction video"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight drop-shadow-md">
                    The YouTooGrow Framework
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#f7f4ef]/80 max-w-xs mx-auto drop-shadow-sm">
                    Click to view our production lifecycle &amp; workflow walk-through.
                  </p>
                </div>

                {/* Card Footer Bar */}
                <div className="absolute bottom-0 inset-x-0 px-3.5 py-2.5 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-center justify-between text-[10px] text-[#aaa6a0] z-10">
                  <span className="font-medium text-white/90">YouTooGrow Content Operations</span>
                  <span className="font-mono text-[9.5px] tracking-wide">Research &bull; Production &bull; Optimization</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Single Big High-Impact Action CTA with Sleek Shimmer Sweep */}
        <div className="flex justify-center">
          <Link
            href="#strategy-call"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-2.5 sm:px-10 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-b from-[#ff3333] via-[#ff2626] to-[#d90808] text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,38,38,0.38),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_0_38px_rgba(255,38,38,0.58),inset_0_1px_1px_rgba(255,255,255,0.45)] hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
          >
            {/* Diagonal Light-Sweep Shimmer on Hover */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] pointer-events-none"
              aria-hidden="true"
            />
            <span className="relative z-10">Book a Free Strategy Call</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Transparent Information Modal */}
      {infoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setInfoModalOpen(false)}
        >
          <div
            className="bg-gradient-to-b from-[#151517] to-[#0f0f10] border border-white/15 rounded-2xl p-6 max-w-sm w-full relative shadow-[0_25px_70px_rgba(0,0,0,0.9)] space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setInfoModalOpen(false)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-[#aaa6a0] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="w-9 h-9 rounded-full bg-[#ff2626]/12 border border-[#ff2626]/25 flex items-center justify-center text-[#ff2626] shadow-[0_0_16px_rgba(255,38,38,0.2)]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold text-[#f7f4ef]">Founder Introduction</h4>
            <p className="text-xs text-[#aaa6a0] leading-relaxed">
              We engineer high-retention video production workflows for ambitious founders and creators looking to scale YouTube &amp; Instagram into scalable revenue engines.
            </p>
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setInfoModalOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-b from-[#ff3333] to-[#d90808] text-white hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,38,38,0.3)]"
              >
                <span>Schedule a 1-on-1 Session</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
