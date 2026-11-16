import { Search, Video, BarChart2, Cpu, ShieldCheck } from "lucide-react";

export function TrustMetrics() {
  const pillars = [
    { icon: Search, label: "Algorithmic Research", note: "Competitor outlier gaps" },
    { icon: Video, label: "Pacing-Engineered Editing", note: "Average View Duration focus" },
    { icon: BarChart2, label: "A/B Packaging Testing", note: "High initial CTR synergy" },
    { icon: Cpu, label: "Full Channel Operations", note: "Zero-friction execution" },
  ];

  return (
    <section className="py-8 border-y border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#aaa6a0] shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#00b67a]" />
            <span>Honest, Organic Systems</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full lg:w-auto">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.label} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626] shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#f7f4ef] leading-tight">
                      {pillar.label}
                    </h4>
                    <span className="text-[10px] text-[#6f6b67] block">
                      {pillar.note}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
