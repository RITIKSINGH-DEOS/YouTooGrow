import { caseStudies } from "@/data/case-studies.data";
import { Youtube, Instagram, Clock, ArrowUpRight, FlaskConical, Briefcase } from "lucide-react";
import Link from "next/link";

export function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 relative bg-[#0a0a0a] border-t border-white/[0.06]" id="case-studies">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
            Verified Results
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-3">
            Transparent{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              Case Studies
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#aaa6a0]">
            Honest breakdowns of our production workflows, internal algorithmic tests, and client channel growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {caseStudies.map((study) => {
            const isYoutube = study.platform === "YouTube";
            const isLab = study.projectType === "Internal Growth Lab";

            return (
              <div
                key={study.id}
                className="rounded-xl border border-white/[0.08] bg-[#101010] p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200 group"
              >
                <div>
                  {/* Badges Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] text-[#f7f4ef]">
                      {isYoutube ? (
                        <Youtube className="w-3 h-3 text-[#ff2626]" />
                      ) : (
                        <Instagram className="w-3 h-3 text-pink-400" />
                      )}
                      <span>{study.platform}</span>
                    </div>

                    <div
                      className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        isLab
                          ? "bg-purple-500/10 border border-purple-500/20 text-purple-400"
                          : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                      }`}
                    >
                      {isLab ? <FlaskConical className="w-2.5 h-2.5" /> : <Briefcase className="w-2.5 h-2.5" />}
                      <span>{study.projectType}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#f7f4ef] tracking-tight mb-3 group-hover:text-white transition-colors">
                    {study.title}
                  </h3>

                  {/* Metrics Box */}
                  <div className="rounded-lg bg-[#141414] border border-white/[0.05] p-3 mb-4 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#6f6b67]">Baseline:</span>
                      <span className="text-[#aaa6a0] font-medium">{study.startingMetric}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-white/[0.05]">
                      <span className="text-[#00b67a] font-semibold">Outcome:</span>
                      <span className="text-[#f7f4ef] font-bold">{study.resultMetric}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[#6f6b67] pt-0.5">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> Timeframe
                      </span>
                      <span>{study.timeframe}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#aaa6a0] leading-relaxed mb-4">
                    {study.strategySummary}
                  </p>
                </div>

                {/* Scope Tags */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1">
                  {study.scopeOfWork.map((scope) => (
                    <span
                      key={scope}
                      className="text-[10px] text-[#aaa6a0] bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit Callout */}
        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/[0.1] bg-[#101010] hover:bg-[#161616] text-[#f7f4ef] hover:border-white/25 transition-all"
          >
            <span>Request a Free Channel Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2626]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
