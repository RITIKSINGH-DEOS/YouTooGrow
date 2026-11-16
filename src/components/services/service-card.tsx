import { ServiceItem } from "@/types/agency.types";
import {
  Compass,
  Search,
  Target,
  Lightbulb,
  FileEdit,
  Video,
  Sparkles,
  Upload,
  Sliders,
  TrendingUp,
  Users,
  Calendar,
  Film,
  Layers,
  Send,
  CheckCircle2,
  BarChart3,
  LucideIcon,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, LucideIcon> = {
  Compass,
  SearchCheck: Search,
  Target,
  Lightbulb,
  FileEdit,
  Video,
  Sparkles,
  UploadCloud: Upload,
  Sliders,
  TrendingUp,
  Sparkle: Sparkles,
  Users,
  Calendar,
  Film,
  Layers,
  Send,
  CheckCircle2,
  BarChart3,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <div className="group relative rounded-2xl border border-white/[0.08] bg-[#101010]/90 p-6 sm:p-7 hover:border-white/25 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      {/* Top Header */}
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626] mb-5 group-hover:scale-105 group-hover:bg-[#ff2626] group-hover:text-white transition-all duration-200">
          <IconComponent className="w-6 h-6" />
        </div>

        <h4 className="text-lg font-bold text-[#f7f4ef] tracking-tight mb-2 group-hover:text-white transition-colors">
          {service.title}
        </h4>

        <p className="text-sm text-[#aaa6a0] leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* Deliverables Chips */}
      <div className="pt-4 border-t border-white/[0.06] space-y-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6f6b67] block">
          Key Deliverables
        </span>
        <div className="flex flex-wrap gap-1.5">
          {service.deliverables.map((item) => (
            <span
              key={item}
              className="text-xs text-[#aaa6a0] bg-white/[0.04] border border-white/[0.06] rounded-md px-2.5 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
