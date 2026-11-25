import { clientTestimonials } from "@/data/testimonials.data";
import { Star, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-16 md:pb-24 relative bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden" id="testimonials">
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[320px] bg-[#ff2626]/[0.03] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff2626] block mb-1.5">
            Partner Feedback
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-3">
            What Creators Say About{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              YouTooGrow
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#aaa6a0]">
            Direct observations from channel operators scaling audience and commercial pipeline with our systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientTestimonials.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl border border-white/[0.09] hover:border-[#ff2626]/45 bg-gradient-to-b from-[#141416] via-[#0f0f11] to-[#0a0a0c] p-6 flex flex-col justify-between transition-all duration-300 group overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(255,38,38,0.2)] hover:-translate-y-1.5"
            >
              {/* Top Crimson Hover Highlight Line */}
              <div
                className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2626] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#ff2626]"
                aria-hidden="true"
              />

              {/* Subtle Editorial Quote Watermark */}
              <span
                className="absolute top-2 right-5 font-serif italic text-6xl text-white/[0.04] group-hover:text-[#ff2626]/15 transition-colors duration-300 select-none pointer-events-none leading-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative z-10">
                {/* Top Row: 5 Stars Rating + Verified Metric Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#ff2626]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_6px_rgba(255,38,38,0.35)]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-semibold text-[#00b67a] bg-[#00b67a]/10 border border-[#00b67a]/25 px-2.5 py-0.5 rounded-full shrink-0 shadow-[0_0_12px_rgba(0,182,122,0.12)]">
                    {item.metricBadge}
                  </span>
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm text-[#f7f4ef]/90 leading-relaxed italic mb-6">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              {/* Author Row (Full Name & Role Unobstructed) */}
              <div className="relative z-10 pt-4 border-t border-white/[0.07] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff2626]/25 to-[#1a1a1c] border border-[#ff2626]/30 flex items-center justify-center font-bold text-[11px] text-[#ff4d4d] shrink-0 shadow-[0_0_14px_rgba(255,38,38,0.18)]">
                  {item.clientName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#f7f4ef] flex items-center gap-1.5">
                    <span>{item.clientName}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#00b67a] shrink-0" />
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-[#aaa6a0] leading-snug mt-0.5">
                    {item.channelOrRole}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
