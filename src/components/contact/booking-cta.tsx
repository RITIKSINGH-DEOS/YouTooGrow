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
          Ready to be #1 in your{" "}
          <span className="font-serif italic font-normal text-[#ff2626]">
            niche?
          </span>
        </h2>

        {/* Subtitle with Ritik Founder Call Qualification */}
        <div className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-[#aaa6a0] leading-relaxed mb-8 sm:mb-10 space-y-1">
          <p>We take on a limited number of clients each month.</p>
          <p>Apply now to see if you qualify for a strategy call with Ritik.</p>
        </div>

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
