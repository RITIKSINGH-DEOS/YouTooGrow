"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";

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

export function ProofInMotion() {
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff2626]/[0.02] rounded-full blur-[140px] pointer-events-none"
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

        <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] text-[#6f6b67]">
          <ShieldCheck className="w-3 h-3 text-[#00b67a]" />
          <span>Hover over any screenshot to pause</span>
        </div>
      </div>

      {/* Track 1: Moves Left */}
      <div className="relative w-full overflow-hidden mb-2.5 sm:mb-3 group select-none">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-3 w-max animate-marquee-left-medium group-hover:[animation-play-state:paused]">
          {row1.map((item, idx) => (
            <div
              key={`r1-${item.id}-${idx}`}
              className="relative w-[230px] sm:w-[260px] md:w-[280px] aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#ff2626]/60 shadow-md transition-all duration-300 shrink-0 bg-[#0e0e0e]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 230px, 280px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Moves Right */}
      <div className="relative w-full overflow-hidden mb-2.5 sm:mb-3 group select-none">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-3 w-max animate-marquee-right-medium group-hover:[animation-play-state:paused]">
          {row2.map((item, idx) => (
            <div
              key={`r2-${item.id}-${idx}`}
              className="relative w-[230px] sm:w-[260px] md:w-[280px] aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#ff2626]/60 shadow-md transition-all duration-300 shrink-0 bg-[#0e0e0e]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 230px, 280px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Track 3: Moves Left */}
      <div className="relative w-full overflow-hidden group select-none">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-3 w-max animate-marquee-left group-hover:[animation-play-state:paused]">
          {row3.map((item, idx) => (
            <div
              key={`r3-${item.id}-${idx}`}
              className="relative w-[230px] sm:w-[260px] md:w-[280px] aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#ff2626]/60 shadow-md transition-all duration-300 shrink-0 bg-[#0e0e0e]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 230px, 280px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
