"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.08] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group tracking-tight"
          aria-label="YouTooGrow Home"
        >
          <span className="text-xl sm:text-2xl font-black text-[#f7f4ef] tracking-tight">
            YouToo<span className="text-[#ff2626]">Grow</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2626] group-hover:scale-150 transition-transform duration-200"></span>
        </Link>

        {/* Primary Action CTA (High-Conversion, Distraction-Free) */}
        <div>
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-all duration-200 shadow-[0_0_20px_rgba(255,38,38,0.25)] hover:shadow-[0_0_30px_rgba(255,38,38,0.4)]"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </header>
  );
}
