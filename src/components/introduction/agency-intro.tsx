"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, X, ArrowUpRight } from "lucide-react";

interface AgencyIntroProps {
  /**
   * Optional embed or direct video URL (e.g. YouTube, Vimeo, or MP4).
   * When provided, clicking play loads the active video embed.
   */
  videoSrc?: string;
  /**
   * Static cover image path. Defaults to the high-grade landscape placeholder.
   */
  posterImage?: string;
}

export function AgencyIntro({
  videoSrc,
  posterImage = "/images/introduction/agency-intro-poster.jpg",
}: AgencyIntroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const handlePlayClick = () => {
    if (videoSrc) {
      setIsPlaying(true);
    } else {
      // Honest, transparent feedback: no fake video player
      setInfoModalOpen(true);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#101010] text-xs font-semibold uppercase tracking-wider text-[#ff2626] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-4">
            Meet the Team Behind Your Growth
          </h2>
          <p className="text-[#aaa6a0] text-base sm:text-lg">
            Get to know our approach to content strategy, creative execution, and digital growth.
          </p>
        </div>

        {/* Video / Image Presentation Frame */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/[0.1] bg-[#101010] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
          {isPlaying && videoSrc ? (
            <iframe
              src={videoSrc}
              title="YouTooGrow Introduction Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Fallback Graphic / Studio Imagery Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#161616] via-[#101010] to-[#0c0c0c] flex flex-col items-center justify-center p-8 text-center">
                {/* Aesthetic Visual Grid */}
                <div
                  className="absolute inset-0 opacity-20 bg-[radial-gradient(#ff2626_1px,transparent_1px)] [background-size:24px_24px]"
                  aria-hidden="true"
                />

                {/* Center Badge */}
                <div className="relative z-10 space-y-4 max-w-md">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#ff2626]/10 border border-[#ff2626]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff2626] group-hover:text-white text-[#ff2626] transition-all duration-300 shadow-[0_0_30px_rgba(255,38,38,0.2)]">
                    <button
                      type="button"
                      onClick={handlePlayClick}
                      className="w-full h-full flex items-center justify-center focus:outline-none"
                      aria-label="Play introduction video"
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                    </button>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f7f4ef] tracking-tight">
                    The YouTooGrow Framework
                  </h3>
                  <p className="text-xs sm:text-sm text-[#aaa6a0]">
                    Click to view our content architecture & workflow walk-through.
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Overlay Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-xs text-[#aaa6a0] z-10">
                <span className="font-semibold text-white">YouTooGrow Content Operations</span>
                <span className="hidden sm:inline">Research • Production • Optimization</span>
              </div>
            </>
          )}
        </div>

        {/* Video Placeholder Notice Modal (Transparent, Non-Fake) */}
        {infoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl space-y-4">
              <button
                type="button"
                onClick={() => setInfoModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-[#aaa6a0] hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-10 h-10 rounded-full bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626]">
                <Sparkles className="w-5 h-5" />
              </div>

              <h4 className="text-xl font-bold text-[#f7f4ef]">Founder Introduction</h4>
              <p className="text-sm text-[#aaa6a0] leading-relaxed">
                Our official leadership and workflow video walk-through is currently being finalized. In the meantime,
                you can book a direct strategy call to discuss your channel roadmap with our team.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={() => setInfoModalOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff2626] text-white hover:bg-[#d90808] transition-colors"
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setInfoModalOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 text-[#aaa6a0] hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
