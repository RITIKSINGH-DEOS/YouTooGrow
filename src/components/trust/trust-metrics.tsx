import { ShieldCheck, BarChart2, Video, Search, Cpu } from "lucide-react";

export function TrustMetrics() {
  const pillars = [
    {
      icon: Search,
      label: "Algorithmic Research",
      subtext: "Competitor outlier analysis & viewer search demand mapping",
    },
    {
      icon: Video,
      label: "Pacing-Engineered Editing",
      subtext: "Designed around Average View Duration & retention drop-offs",
    },
    {
      icon: BarChart2,
      label: "A/B Packaging Testing",
      subtext: "Thumbnail & title synergy designed for highest initial CTR",
    },
    {
      icon: Cpu,
      label: "Full Channel Operations",
      subtext: "End-to-end publishing, chapter formatting, and optimization",
    },
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#0c0c0c]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
              Core Competencies
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#f7f4ef] tracking-tight">
              Engineered For Modern Content Algorithms
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-[#aaa6a0]">
            <ShieldCheck className="w-4 h-4 text-[#00b67a]" />
            <span>Honest, data-backed execution — zero bought views or bots</span>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="p-5 rounded-xl border border-white/[0.06] bg-[#101010]/80 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626] mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-[#f7f4ef] mb-1">
                  {pillar.label}
                </h4>
                <p className="text-xs text-[#aaa6a0] leading-relaxed">
                  {pillar.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
