import { ProofItem } from "@/types/agency.types";
import { Youtube, Instagram, TrendingUp, BarChart3 } from "lucide-react";

interface ProofCardProps {
  item: ProofItem;
}

export function ProofCard({ item }: ProofCardProps) {
  const isYoutube = item.platform === "youtube";

  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl border border-white/[0.08] bg-[#101010]/95 p-5 shadow-2xl hover:border-white/25 transition-all duration-300 group flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {isYoutube ? (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff2626]/10 border border-[#ff2626]/20 text-[#ff2626] text-xs font-semibold">
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube Studio</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold">
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Insights</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 text-[11px] text-[#00b67a] font-semibold bg-[#00b67a]/10 px-2 py-0.5 rounded-full">
          <TrendingUp className="w-3 h-3" />
          <span>Verified Metric</span>
        </div>
      </div>

      {/* Visual Analytics Representation Frame */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-b from-[#181818] to-[#121212] border border-white/[0.06] p-4 flex flex-col justify-between mb-4 group-hover:border-white/15 transition-colors">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-[#aaa6a0] font-medium">
            {item.context}
          </span>
          <BarChart3 className="w-4 h-4 text-white/30" />
        </div>

        {/* Visual Graph Silhouette */}
        <div className="relative z-10 flex items-end justify-between h-16 pt-2 gap-1 px-1">
          <div className="w-full bg-[#ff2626]/20 rounded-t h-[30%]"></div>
          <div className="w-full bg-[#ff2626]/30 rounded-t h-[45%]"></div>
          <div className="w-full bg-[#ff2626]/40 rounded-t h-[35%]"></div>
          <div className="w-full bg-[#ff2626]/50 rounded-t h-[60%]"></div>
          <div className="w-full bg-[#ff2626]/70 rounded-t h-[75%]"></div>
          <div className="w-full bg-[#ff2626] rounded-t h-[95%] shadow-[0_0_12px_rgba(255,38,38,0.5)]"></div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6f6b67] border-t border-white/[0.06] pt-2">
          <span>{item.imagePlaceholderText}</span>
          <span className="text-[#00b67a] font-medium">Live Ingestion</span>
        </div>
      </div>

      {/* Metric Highlight Bottom Bar */}
      <div>
        <span className="text-xs text-[#aaa6a0] block mb-0.5">{item.metricLabel}</span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-[#f7f4ef] tracking-tight">
            {item.metricValue}
          </span>
          <span className="text-xs text-[#00b67a] font-medium">Outlier Performance</span>
        </div>
      </div>
    </div>
  );
}
