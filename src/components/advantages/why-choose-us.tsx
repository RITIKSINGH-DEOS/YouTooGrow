import { whyChooseAdvantages } from "@/data/advantages.data";
import { ShieldCheck, Search, Sliders, LineChart, Sparkles, RefreshCw } from "lucide-react";

const icons = [Search, Sliders, LineChart, Sparkles, RefreshCw];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 relative" id="why-us">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#101010] text-xs font-semibold uppercase tracking-wider text-[#ff2626] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Competitive Edge</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-5">
            Why High-Intent Creators Choose{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              YouTooGrow
            </span>
          </h2>

          <p className="text-[#aaa6a0] text-base sm:text-lg leading-relaxed">
            Most agencies operate as transactional editing vendors. We build repeatable algorithmic growth engines
            backed by deep viewer psychology, retention science, and active channel management.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseAdvantages.map((adv, idx) => {
            const Icon = icons[idx] || Sparkles;
            const isWide = idx === 0 || idx === 1;

            return (
              <div
                key={adv.number}
                className={`rounded-2xl border border-white/[0.08] bg-[#101010] p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 shadow-lg ${
                  isWide ? "lg:col-span-1 md:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626] group-hover:scale-105 group-hover:bg-[#ff2626] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#aaa6a0]">
                      {adv.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#f7f4ef] tracking-tight mb-3">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-[#aaa6a0] leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#6f6b67]">
                  <span>Pillar {adv.number}</span>
                  <span className="text-[#00b67a] font-medium">Standard Operating Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
