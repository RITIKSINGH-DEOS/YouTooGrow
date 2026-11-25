"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, X, ZoomIn } from "lucide-react";

interface ProofImage {
  id: string;
  src: string;
  alt: string;
}

const allProofImages: ProofImage[] = [
  { id: "proof-1", src: "/images/proof/analytics-1.png", alt: "YouTube Studio 157K Views Analytics" },
  { id: "proof-2", src: "/images/proof/analytics-2.png", alt: "YouTube Studio 284K Views Client Acquisition Analytics" },
  { id: "proof-3", src: "/images/proof/analytics-3.png", alt: "YouTube Studio 89K Views Outlier Telemetry" },
  { id: "proof-4", src: "/images/proof/analytics-4.png", alt: "YouTube Studio 412K Views Compounding Growth" },
  { id: "proof-5", src: "/images/proof/analytics-5.png", alt: "YouTube Studio 64K Views Narrative Pacing" },
  { id: "proof-6", src: "/images/proof/analytics-6.png", alt: "Instagram Professional Dashboard 1.24M Reach" },
  { id: "proof-7", src: "/images/proof/analytics-7.png", alt: "YouTube Studio 138K Views Referral Flywheel" },
  { id: "proof-8", src: "/images/proof/analytics-8.png", alt: "Instagram Professional Dashboard 892K Reach" },
  { id: "proof-9", src: "/images/proof/analytics-9.png", alt: "YouTube Studio 521K Views Channel Scale" },
  { id: "proof-10", src: "/images/proof/analytics-10.png", alt: "YouTube Studio 73K Views Founder Audit" },
];

function ProofTile({
  item,
  onSelect,
}: {
  item: ProofImage;
  onSelect: (img: ProofImage) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-label={`Inspect ${item.alt}`}
      className="relative w-[230px] sm:w-[260px] md:w-[280px] aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden border border-white/[0.09] hover:border-[#ff2626]/70 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_32px_rgba(255,38,38,0.22)] transition-all duration-300 shrink-0 bg-[#0e0e0e] group/tile text-left focus:outline-none"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 230px, 280px"
        className="object-cover group-hover/tile:scale-105 transition-transform duration-500"
      />
      {/* Subtle Glass Gloss & Zoom Affordance on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/[0.05] opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 flex items-end justify-between p-2.5">
        <span className="text-[10px] font-medium text-white/90 truncate pr-2">{item.alt}</span>
        <span className="w-6 h-6 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white shrink-0">
          <ZoomIn className="w-3 h-3" />
        </span>
      </div>
    </button>
  );
}

export function ProofInMotion() {
  const [selectedImage, setSelectedImage] = useState<ProofImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Staggered order for each track so each lane has a unique starting view
  const row1 = [...allProofImages, ...allProofImages];
  const row2 = [
    ...allProofImages.slice(3),
    ...allProofImages.slice(0, 3),
    ...allProofImages.slice(3),
    ...allProofImages.slice(0, 3),
  ];
  const row3 = [
    ...allProofImages.slice(6),
    ...allProofImages.slice(0, 6),
    ...allProofImages.slice(6),
    ...allProofImages.slice(0, 6),
  ];

  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-14 md:pt-6 md:pb-16 relative overflow-hidden" id="proof">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff2626]/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Compact Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-5 sm:mb-6 text-center">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff2626] block mb-1">
          Algorithmic Yield
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-1.5">
          Proof in{" "}
          <span className="font-serif italic font-normal text-[#ff2626]">
            Motion
          </span>
        </h2>

        <p className="max-w-lg mx-auto text-[#aaa6a0] text-xs leading-normal">
          Real YouTube Studio &amp; Instagram analytics dashboards from channels we scale.
        </p>

        <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] text-[#8a8680]">
          <ShieldCheck className="w-3 h-3 text-[#00b67a]" />
          <span>Hover to pause &bull; Click any dashboard to inspect</span>
        </div>
      </div>

      {/* Track 1: Moves Left */}
      <div className="relative w-full overflow-hidden mb-2.5 sm:mb-3 group select-none">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-3 w-max animate-marquee-left-medium group-hover:[animation-play-state:paused]">
          {row1.map((item, idx) => (
            <ProofTile key={`r1-${item.id}-${idx}`} item={item} onSelect={setSelectedImage} />
          ))}
        </div>
      </div>

      {/* Track 2: Moves Right */}
      <div className="relative w-full overflow-hidden mb-2.5 sm:mb-3 group select-none">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-3 w-max animate-marquee-right-medium group-hover:[animation-play-state:paused]">
          {row2.map((item, idx) => (
            <ProofTile key={`r2-${item.id}-${idx}`} item={item} onSelect={setSelectedImage} />
          ))}
        </div>
      </div>

      {/* Track 3: Moves Left */}
      <div className="relative w-full overflow-hidden group select-none">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-3 w-max animate-marquee-left group-hover:[animation-play-state:paused]">
          {row3.map((item, idx) => (
            <ProofTile key={`r3-${item.id}-${idx}`} item={item} onSelect={setSelectedImage} />
          ))}
        </div>
      </div>

      {/* Analytics Lightbox Preview Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl border border-white/15 bg-[#101012] p-3 sm:p-4 shadow-[0_25px_75px_rgba(0,0,0,0.95)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-3 px-1">
              <div className="flex items-center gap-2 min-w-0">
                <ShieldCheck className="w-4 h-4 text-[#00b67a] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#f7f4ef] truncate">
                  {selectedImage.alt}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close analytics preview"
                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-[#aaa6a0] hover:text-white transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.08] bg-[#080808]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
