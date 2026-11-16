"use client";

import { useState } from "react";
import { Play, Sparkles, X, ArrowUpRight } from "lucide-react";

interface AgencyIntroProps {
  videoSrc?: string;
}

export function AgencyIntro({ videoSrc }: AgencyIntroProps) {
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
    <section className="py-12 md:py-16 relative" id="about">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
            Operations Walk-Through
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-2">
            Meet the Team Behind Your Growth
          </h2>
          <p className="text-xs sm:text-sm text-[#aaa6a0]">
            A look into our content engineering workflow and channel management systems.
          </p>
        </div>

        {/* Video / Landscape Frame */}
        <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08] bg-[#101010] shadow-[0_15px_40px_rgba(0,0,0,0.6)] group">
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
              <div
                className="absolute inset-0 opacity-15 bg-[radial-gradient(#ff2626_1px,transparent_1px)] [background-size:20px_20px]"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-3">
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#ff2626]/10 border border-[#ff2626]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff2626] group-hover:text-white text-[#ff2626] transition-all duration-300 shadow-[0_0_25px_rgba(255,38,38,0.2)] focus:outline-none"
                  aria-label="Play introduction video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
                <h3 className="text-lg font-bold text-[#f7f4ef] tracking-tight">
                  The YouTooGrow Framework
                </h3>
                <p className="text-xs text-[#aaa6a0] max-w-xs mx-auto">
                  Click to view our production lifecycle &amp; workflow walk-through.
                </p>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-[11px] text-[#6f6b67] z-10">
                <span className="font-medium text-white/80">YouTooGrow Content Operations</span>
                <span>Research &bull; Production &bull; Optimization</span>
              </div>
            </div>
          )}
        </div>

        {/* Transparent Notice Modal */}
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
      </div>
    </section>
  );
}
