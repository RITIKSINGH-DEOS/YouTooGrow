import Link from "next/link";
import { ArrowUpRight, Play, CheckCircle2, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14 overflow-hidden">
      {/* Background Lighting Accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ff2626]/[0.06] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Brand Logo Header - Tight, Sleek Top Spacing */}
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

        {/* Subtle Authority Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-[#101010]/80 backdrop-blur-sm mb-4">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#ff2626]"></span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#aaa6a0]">
            Research-Driven Content Strategy &bull; YouTube &amp; Instagram
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#f7f4ef] tracking-tight leading-[1.1] mb-4">
          Your Content Deserves{" "}
          <span className="block sm:inline font-serif italic font-normal text-[#ff2626]">
            More Than Just Views.
          </span>
        </h1>

        {/* Supporting Headline */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#aaa6a0] font-normal leading-relaxed mb-7">
          We turn attention into predictable pipeline through algorithmic research, high-retention editing, and
          end-to-end channel management.
        </p>

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
    </section>
  );
}
