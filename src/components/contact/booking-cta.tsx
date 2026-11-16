"use client";

import Link from "next/link";

export function BookingCTA() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden text-center" id="contact">
      {/* Cinematic Ambient Glow Behind Text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,38,38,0.14)_0%,rgba(255,38,38,0.02)_55%,transparent_75%)] blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Master Headline - Matching Site's Signature Font */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f7f4ef] tracking-tight leading-[1.15] mb-4 sm:mb-5">
          Ready to become the #1 name in your{" "}
          <span className="font-serif italic font-normal text-[#ff2626]">
            industry?
          </span>
        </h2>

        {/* User's Exact Subtext */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#aaa6a0] leading-relaxed mb-8 sm:mb-10">
          Build a brand that stands out, attracts attention, and leaves competitors behind. Let&apos;s make it happen.
        </p>

        {/* High-Impact Solid Red Action Button */}
        <div className="flex justify-center">
          <Link
            href="mailto:contact@youtoogrow.com?subject=Strategy%20Call%20Application%20-%20YouTooGrow"
            className="w-full max-w-[280px] sm:max-w-[340px] py-3.5 sm:py-4 px-8 rounded-lg bg-[#ff2626] hover:bg-[#d90808] text-white font-extrabold uppercase tracking-widest text-sm sm:text-base text-center transition-all duration-300 shadow-[0_0_35px_rgba(255,38,38,0.45)] hover:shadow-[0_0_55px_rgba(255,38,38,0.7)] hover:scale-[1.02] block"
          >
            BOOK A CALL
          </Link>
        </div>
      </div>
    </section>
  );
}
