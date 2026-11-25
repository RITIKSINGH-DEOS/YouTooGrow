import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
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

        {/* Studio-Grade Cinema Frame around Clean Founder Photo */}
        <div className="relative w-full max-w-[480px] sm:max-w-[540px] md:max-w-[560px] mx-auto rounded-xl sm:rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/[0.08] to-white/[0.03] shadow-[0_24px_65px_rgba(0,0,0,0.9),0_0_45px_rgba(255,38,38,0.08)] group mb-3 sm:mb-4">
          <div className="relative aspect-video w-full rounded-[11px] sm:rounded-[15px] overflow-hidden bg-[#101010]">
            <Image
              src="/images/introduction/founder-intro.jpg"
              alt="YouTooGrow Founder"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover object-top sm:object-center group-hover:scale-[1.03] transition-transform duration-700 brightness-[0.95] contrast-[1.04]"
            />

            {/* Subtle Edge Blending Vignette */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
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
    </section>
  );
}
