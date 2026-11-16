import { clientTestimonials } from "@/data/testimonials.data";
import { MessageSquareQuote, Star, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 relative bg-[#0a0a0a] border-t border-white/[0.06]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
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
              className="rounded-xl border border-white/[0.08] bg-[#101010] p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200 group"
            >
              <div>
                {/* 5 Stars Rating Bar */}
                <div className="flex items-center gap-1 mb-4 text-[#ff2626]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm text-[#f7f4ef]/90 leading-relaxed italic mb-6">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              {/* Author & Badge */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff2626]/20 to-[#181818] border border-white/10 flex items-center justify-center font-bold text-[11px] text-[#ff2626]">
                    {item.clientName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#f7f4ef] flex items-center gap-1">
                      <span>{item.clientName}</span>
                      <CheckCircle className="w-3 h-3 text-[#00b67a]" />
                    </h4>
                    <p className="text-[10px] text-[#aaa6a0]">{item.channelOrRole}</p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-[#00b67a] bg-[#00b67a]/10 px-2 py-0.5 rounded">
                  {item.metricBadge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
