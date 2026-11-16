import Link from "next/link";
import { ArrowUpRight, Play, CheckCircle2, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Lighting Accent (Grounded, non-neon) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff2626]/[0.07] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Subtle Authority Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#101010]/80 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#ff2626]"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#aaa6a0]">
            Research-Driven Content Strategy & End-to-End Management
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#f7f4ef] tracking-tight leading-[1.08] mb-6">
          Your Content Deserves{" "}
          <span className="block sm:inline font-serif italic font-normal text-[#ff2626]">
            More Than Just Views.
          </span>
        </h1>

        {/* Supporting Headline */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#aaa6a0] font-normal leading-relaxed mb-10">
          We help creators, personal brands, and businesses turn attention into compounding digital growth on
          YouTube and Instagram through algorithmic topic research, high-retention editing, and hands-off
          channel management.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-all duration-200 shadow-[0_0_25px_rgba(255,38,38,0.3)] hover:shadow-[0_0_35px_rgba(255,38,38,0.5)] group"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="#proof"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider border border-white/[0.12] hover:border-white/30 bg-[#101010]/60 hover:bg-[#151515] text-[#f7f4ef] transition-all duration-200"
          >
            <Play className="w-3.5 h-3.5 text-[#ff2626] fill-[#ff2626]" />
            <span>Explore Our Work</span>
          </Link>
        </div>

        {/* Value Anchors Strip */}
        <div className="pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#ff2626] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#aaa6a0]">
              Zero-Guesswork Topic Research
            </span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#00b67a] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#aaa6a0]">
              Pacing-Engineered Retention
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#ff2626] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#aaa6a0]">
              100% Hands-Off Execution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
