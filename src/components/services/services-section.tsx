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
    <section className="py-20 md:py-32 relative" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#101010] text-xs font-semibold uppercase tracking-wider text-[#ff2626] mb-3">
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-5">
            Specialized Systems Built For{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              Platform Dominance
            </span>
          </h2>
          <p className="text-[#aaa6a0] text-base sm:text-lg leading-relaxed">
            We are not just an editing agency. We provide complete, research-backed growth solutions
            that take the operational weight off your shoulders from ideation to distribution.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full border border-white/[0.08] bg-[#101010] shadow-xl">
            <button
              type="button"
              onClick={() => setActiveCategory("youtube")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === "youtube"
                  ? "bg-[#ff2626] text-white shadow-lg shadow-[#ff2626]/20"
                  : "text-[#aaa6a0] hover:text-white"
              }`}
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube Growth</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeCategory === "youtube"
                    ? "bg-black/30 text-white"
                    : "bg-white/[0.06] text-[#aaa6a0]"
                }`}
              >
                10
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("instagram")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === "instagram"
                  ? "bg-[#ff2626] text-white shadow-lg shadow-[#ff2626]/20"
                  : "text-[#aaa6a0] hover:text-white"
              }`}
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram Growth</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeCategory === "instagram"
                    ? "bg-black/30 text-white"
                    : "bg-white/[0.06] text-[#aaa6a0]"
                }`}
              >
                9
              </span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {currentServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Hybrid Callout */}
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212] p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#f7f4ef] mb-1">
              Need a unified YouTube + Instagram growth partnership?
            </h4>
            <p className="text-sm text-[#aaa6a0]">
              We offer full cross-platform management where long-form YouTube videos are repurposed into high-performing vertical reels.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-all shadow-[0_0_20px_rgba(255,38,38,0.25)]"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
