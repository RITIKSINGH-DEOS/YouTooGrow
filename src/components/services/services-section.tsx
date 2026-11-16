"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Youtube, Instagram } from "lucide-react";
import { youtubeServices, instagramServices } from "@/data/services.data";
import { ServiceCard } from "./service-card";
import { ServiceCategory } from "@/types/agency.types";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("youtube");
  const currentServices = activeCategory === "youtube" ? youtubeServices : instagramServices;

  return (
    <section className="py-16 md:py-24 relative" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
            End-to-End Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-3">
            Specialized Systems Built For{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              Platform Dominance
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#aaa6a0]">
            Complete, research-backed growth solutions engineered to turn impressions into business pipeline.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 rounded-full border border-white/[0.08] bg-[#101010]">
            <button
              type="button"
              onClick={() => setActiveCategory("youtube")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === "youtube"
                  ? "bg-[#ff2626] text-white shadow-md shadow-[#ff2626]/20"
                  : "text-[#aaa6a0] hover:text-white"
              }`}
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube Growth</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeCategory === "youtube" ? "bg-black/30 text-white" : "bg-white/[0.06] text-[#aaa6a0]"
                }`}
              >
                10
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("instagram")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === "instagram"
                  ? "bg-[#ff2626] text-white shadow-md shadow-[#ff2626]/20"
                  : "text-[#aaa6a0] hover:text-white"
              }`}
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Growth</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeCategory === "instagram" ? "bg-black/30 text-white" : "bg-white/[0.06] text-[#aaa6a0]"
                }`}
              >
                9
              </span>
            </button>
          </div>
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
          {currentServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Cross-Platform Bar */}
        <div className="rounded-xl border border-white/[0.08] bg-[#101010] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-[#aaa6a0]">
            Looking for a cross-platform package? We repurpose long-form YouTube into high-retention vertical reels.
          </p>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#ff2626] hover:bg-[#d90808] text-white transition-all shadow-sm"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
