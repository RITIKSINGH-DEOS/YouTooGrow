"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Send, Sparkles } from "lucide-react";

export function BookingCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "both",
    channelUrl: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="contact">
      {/* Background Lighting Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff2626]/[0.06] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-6 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
              Let&apos;s Build Together
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-2">
              Ready to Grow Your{" "}
              <span className="font-serif italic font-normal text-[#ff2626]">
                Presence?
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#aaa6a0]">
              Get a personalized audit of your retention, packaging, and channel roadmap.
            </p>
          </div>

          {/* Form */}
          {formSubmitted ? (
            <div className="max-w-sm mx-auto rounded-xl bg-[#161616] border border-[#00b67a]/30 p-6 text-center animate-in fade-in duration-200">
              <div className="w-10 h-10 rounded-full bg-[#00b67a]/10 border border-[#00b67a]/20 flex items-center justify-center text-[#00b67a] mx-auto mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#f7f4ef] mb-1">Audit Request Received!</h3>
              <p className="text-xs text-[#aaa6a0] mb-4">
                Our growth team will review your channel and follow up within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="text-[11px] uppercase tracking-wider font-semibold text-[#ff2626] hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-medium text-[#aaa6a0] mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-white/[0.08] text-[#f7f4ef] placeholder-[#6f6b67] text-xs focus:outline-none focus:border-[#ff2626] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-medium text-[#aaa6a0] mb-1">
                    Work Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-white/[0.08] text-[#f7f4ef] placeholder-[#6f6b67] text-xs focus:outline-none focus:border-[#ff2626] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="platform" className="block text-[11px] font-medium text-[#aaa6a0] mb-1">
                    Platform Focus
                  </label>
                  <select
                    id="platform"
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-white/[0.08] text-[#f7f4ef] text-xs focus:outline-none focus:border-[#ff2626] transition-colors"
                  >
                    <option value="both">Both YouTube &amp; Instagram</option>
                    <option value="youtube">YouTube Growth Only</option>
                    <option value="instagram">Instagram Growth Only</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="channelUrl" className="block text-[11px] font-medium text-[#aaa6a0] mb-1">
                    Channel / Handle URL
                  </label>
                  <input
                    id="channelUrl"
                    required
                    type="text"
                    placeholder="youtube.com/@channel or @handle"
                    value={formData.channelUrl}
                    onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-white/[0.08] text-[#f7f4ef] placeholder-[#6f6b67] text-xs focus:outline-none focus:border-[#ff2626] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-all shadow-md shadow-[#ff2626]/20 group"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href="mailto:contact@youtoogrow.com"
                  className="text-xs text-[#aaa6a0] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <Send className="w-3 h-3" />
                  <span>Or email directly: contact@youtoogrow.com</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
