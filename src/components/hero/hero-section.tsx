import Link from "next/link";
import { ArrowUpRight, Play, CheckCircle2, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background Lighting Accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ff2626]/[0.06] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Subtle Authority Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-[#101010]/80 backdrop-blur-sm mb-6">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#ff2626]"></span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#aaa6a0]">
            Research-Driven Content Strategy &bull; YouTube &amp; Instagram
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#f7f4ef] tracking-tight leading-[1.1] mb-5">
          Your Content Deserves{" "}
          <span className="block sm:inline font-serif italic font-normal text-[#ff2626]">
            More Than Just Views.
          </span>
        </h1>

        {/* Supporting Headline - Short & Impactful */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#aaa6a0] font-normal leading-relaxed mb-8">
          We turn attention into predictable pipeline through algorithmic research, high-retention editing, and
          end-to-end channel management.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
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

        {/* Value Anchors Strip - Clean & Compact */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#aaa6a0]">
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
