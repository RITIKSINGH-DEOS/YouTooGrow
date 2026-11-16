import { clientTestimonials } from "@/data/testimonials.data";
import { MessageSquareQuote, Star, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 relative bg-[#0c0c0c]/80 border-t border-white/[0.06]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#101010] text-xs font-semibold uppercase tracking-wider text-[#ff2626] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Partner Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-5">
            What Founders & Creators Say About{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              YouTooGrow
            </span>
          </h2>

          <p className="text-[#aaa6a0] text-base sm:text-lg leading-relaxed">
            Direct feedback from personal brands and channel operators scaling their audience and pipeline with our systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/[0.08] bg-[#101010] p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative"
            >
              <div>
                {/* 5 Stars Rating Bar */}
                <div className="flex items-center gap-1 mb-6 text-[#ff2626]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="text-sm text-[#f7f4ef]/90 leading-relaxed italic mb-8">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              {/* Author & Badge Footer */}
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Clean Avatar Circle Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff2626]/20 to-[#181818] border border-white/10 flex items-center justify-center font-bold text-xs text-[#ff2626]">
                      {item.clientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#f7f4ef] flex items-center gap-1.5">
                        <span>{item.clientName}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-[#00b67a]" />
                      </h4>
                      <p className="text-xs text-[#aaa6a0]">{item.channelOrRole}</p>
                    </div>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#00b67a]/10 border border-[#00b67a]/20 text-[11px] font-semibold text-[#00b67a]">
                  {item.metricBadge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
