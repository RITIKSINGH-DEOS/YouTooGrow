"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Sparkles, X } from "lucide-react";

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
    <section className="relative pt-3 pb-5 sm:pt-4 sm:pb-6 md:pt-4 md:pb-6 overflow-hidden">
      {/* Cinematic Ambient Glow Behind Headline */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-[radial-gradient(ellipse_at_center,rgba(255,38,38,0.14)_0%,rgba(255,38,38,0.02)_50%,transparent_75%)] blur-[80px] pointer-events-none"
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2626] group-hover:scale-125 transition-transform duration-200"></span>
          </Link>
        </div>

        {/* Authority Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-white/[0.08] bg-[#101010]/90 backdrop-blur-md mb-2 sm:mb-2.5 shadow-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#ff2626] shadow-[0_0_6px_#ff2626]"></span>
          <span className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider text-[#aaa6a0]">
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
          <span className="block font-serif italic font-normal bg-gradient-to-r from-[#ff4d4d] via-[#ff2626] to-[#e60000] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,38,38,0.4)] mt-1">
            To Generate Endless Leads &amp; Growth.
          </span>
        </h1>

        {/* The Video Framework Card with Real Founder Studio Photo - Perfectly Proportioned */}
        <div className="relative aspect-video w-full max-w-[480px] sm:max-w-[540px] md:max-w-[560px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.12] bg-[#101010] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group mb-3 sm:mb-3.5">
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
                className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.85] contrast-[1.05]"
              />

              {/* Cinematic Vignette Overlays */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none"
                aria-hidden="true"
              />

              {/* Center Play Button & Framework Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ff2626] border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-[#d90808] text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,38,38,0.5)] focus:outline-none mb-2"
                  aria-label="Play introduction video"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight drop-shadow-md">
                  The YouTooGrow Framework
                </h3>
                <p className="text-[11px] sm:text-xs text-[#f7f4ef]/80 max-w-xs mx-auto drop-shadow-sm">
                  Click to view our production lifecycle &amp; workflow walk-through.
                </p>
              </div>

              {/* Card Footer Bar */}
              <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-[10px] text-[#aaa6a0] z-10">
                <span className="font-medium text-white/90">YouTooGrow Content Operations</span>
                <span>Research &bull; Production &bull; Optimization</span>
              </div>
            </div>
          )}
        </div>

        {/* Single Big High-Impact Action CTA */}
        <div className="flex justify-center">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-2.5 sm:px-10 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,38,38,0.4)] hover:shadow-[0_0_40px_rgba(255,38,38,0.6)] hover:scale-[1.02]"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
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
              We engineer high-retention video production workflows for ambitious founders and creators looking to scale YouTube &amp; Instagram into scalable revenue engines.
            </p>
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setInfoModalOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#ff2626] text-white hover:bg-[#d90808] transition-colors"
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
