import { whyChooseAdvantages } from "@/data/advantages.data";
import { ShieldCheck, Search, Sliders, LineChart, Sparkles, RefreshCw } from "lucide-react";

const icons = [Search, Sliders, LineChart, Sparkles, RefreshCw];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative" id="why-us">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
            The Competitive Edge
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-3">
            Why High-Intent Creators Choose{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              YouTooGrow
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#aaa6a0]">
            We don&apos;t just edit clips; we build predictable algorithmic systems backed by retention science and hands-off operations.
          </p>
        </div>

        {/* 5-Card Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseAdvantages.map((adv, idx) => {
            const Icon = icons[idx] || Sparkles;

            return (
              <div
                key={adv.number}
                className="rounded-xl border border-white/[0.08] bg-[#101010] p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.04] text-[#aaa6a0]">
                      {adv.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#f7f4ef] tracking-tight mb-2">
                    {adv.title}
                  </h3>

                  <p className="text-xs text-[#aaa6a0] leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-[#6f6b67]">
                  <span>Pillar {adv.number}</span>
                  <span className="text-[#00b67a] font-medium">Standard Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
