import { caseStudies } from "@/data/case-studies.data";
import { Youtube, Instagram, Clock, ArrowUpRight, CheckCircle2, FlaskConical, Briefcase } from "lucide-react";
import Link from "next/link";

export function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-32 relative bg-[#0c0c0c]/60 border-t border-white/[0.06]" id="case-studies">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#101010] text-xs font-semibold uppercase tracking-wider text-[#ff2626] mb-3">
            <span>Verified Results</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-5">
            Transparent{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              Case Studies
            </span>
          </h2>
          <p className="text-[#aaa6a0] text-base sm:text-lg leading-relaxed">
            Honest breakdowns of our production workflows, internal algorithmic stress-tests, and client channel revitalizations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => {
            const isYoutube = study.platform === "YouTube";
            const isLab = study.projectType === "Internal Growth Lab";

            return (
              <div
                key={study.id}
                className="rounded-2xl border border-white/[0.08] bg-[#101010] p-7 flex flex-col justify-between hover:border-white/25 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  {/* Badges Bar */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    {/* Platform Tag */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#f7f4ef]">
                      {isYoutube ? (
                        <Youtube className="w-3.5 h-3.5 text-[#ff2626]" />
                      ) : (
                        <Instagram className="w-3.5 h-3.5 text-pink-400" />
                      )}
                      <span>{study.platform}</span>
                    </div>

                    {/* Project Origin Distinction Tag */}
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        isLab
                          ? "bg-purple-500/10 border border-purple-500/20 text-purple-400"
                          : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                      }`}
                    >
                      {isLab ? <FlaskConical className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                      <span>{study.projectType}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#f7f4ef] tracking-tight mb-4 group-hover:text-white transition-colors">
                    {study.title}
                  </h3>

                  {/* Metrics Comparison Box */}
                  <div className="rounded-xl bg-[#151515] border border-white/[0.06] p-4 mb-5 space-y-3">
                    <div className="flex items-start justify-between text-xs">
                      <span className="text-[#6f6b67]">Baseline State:</span>
                      <span className="text-[#aaa6a0] font-medium text-right">{study.startingMetric}</span>
                    </div>
                    <div className="flex items-start justify-between text-xs pt-2 border-t border-white/[0.06]">
                      <span className="text-[#00b67a] font-semibold">Outcome:</span>
                      <span className="text-[#f7f4ef] font-bold text-right text-sm">{study.resultMetric}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#6f6b67] pt-1">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Duration
                      </span>
                      <span>{study.timeframe}</span>
                    </div>
                  </div>

                  {/* Strategy Summary */}
                  <p className="text-sm text-[#aaa6a0] leading-relaxed mb-6">
                    {study.strategySummary}
                  </p>
                </div>

                {/* Scope of Work Tags */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6f6b67] block">
                    Execution Scope
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {study.scopeOfWork.map((scope) => (
                      <span
                        key={scope}
                        className="inline-flex items-center gap-1 text-xs text-[#aaa6a0] bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00b67a]" />
                        <span>{scope}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Studies Expansion Callout */}
        <div className="text-center">
          <p className="text-xs text-[#6f6b67] mb-3">
            Want to see a custom roadmap built for your specific channel or brand niche?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/[0.12] bg-[#101010] hover:bg-[#161616] text-[#f7f4ef] hover:border-white/30 transition-all"
          >
            <span>Request a Free Channel Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2626]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
