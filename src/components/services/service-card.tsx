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
    <div className="group rounded-xl border border-white/[0.07] bg-[#101010] p-5 hover:border-white/20 hover:bg-[#141414] transition-all duration-200">
      <div className="flex items-center gap-3 mb-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#ff2626]/10 border border-[#ff2626]/20 flex items-center justify-center text-[#ff2626] group-hover:bg-[#ff2626] group-hover:text-white transition-all shrink-0">
          <IconComponent className="w-4 h-4" />
        </div>
        <h4 className="text-sm font-bold text-[#f7f4ef] tracking-tight group-hover:text-white transition-colors">
          {service.title}
        </h4>
      </div>

      <p className="text-xs text-[#aaa6a0] leading-relaxed">
        {service.shortDescription}
      </p>
    </div>
  );
}
