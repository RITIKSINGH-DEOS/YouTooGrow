"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Send, Calendar, Sparkles } from "lucide-react";

export function BookingCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "both",
    channelUrl: "",
    primaryGoal: "leads",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="py-24 md:py-36 relative overflow-hidden" id="contact">
      {/* Background Lighting Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff2626]/[0.08] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#141414] via-[#101010] to-[#0c0c0c] p-8 sm:p-14 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#181818] text-xs font-semibold uppercase tracking-wider text-[#ff2626] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-4">
              Ready to Grow Your{" "}
              <span className="font-serif italic font-normal text-[#ff2626]">
                YouTube & Instagram
              </span>{" "}
              Presence?
            </h2>

            <p className="text-[#aaa6a0] text-base sm:text-lg leading-relaxed">
              Let&apos;s build a research-driven content strategy that helps your brand reach the right audience,
              command attention, and grow consistently.
            </p>
          </div>

          {/* Form / Success State */}
          {formSubmitted ? (
            <div className="max-w-md mx-auto rounded-2xl bg-[#161616] border border-[#00b67a]/30 p-8 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-[#00b67a]/10 border border-[#00b67a]/20 flex items-center justify-center text-[#00b67a] mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#f7f4ef] mb-2">Strategy Request Received!</h3>
              <p className="text-sm text-[#aaa6a0] mb-6">
                Our growth strategists will audit your channel profile and reach out within 24 hours to schedule
                your personalized discovery session.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="text-xs uppercase tracking-wider font-semibold text-[#ff2626] hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#aaa6a0] mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-[#f7f4ef] placeholder-[#6f6b67] text-sm focus:outline-none focus:border-[#ff2626] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#aaa6a0] mb-2">
                    Work Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-[#f7f4ef] placeholder-[#6f6b67] text-sm focus:outline-none focus:border-[#ff2626] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="platform" className="block text-xs font-medium text-[#aaa6a0] mb-2">
                    Primary Platform Focus
                  </label>
                  <select
                    id="platform"
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-[#f7f4ef] text-sm focus:outline-none focus:border-[#ff2626] transition-colors"
                  >
                    <option value="both">Both YouTube & Instagram (Recommended)</option>
                    <option value="youtube">YouTube Growth Only</option>
                    <option value="instagram">Instagram Growth Only</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="channelUrl" className="block text-xs font-medium text-[#aaa6a0] mb-2">
                    Channel or Profile URL
                  </label>
                  <input
                    id="channelUrl"
                    required
                    type="text"
                    placeholder="youtube.com/@channel or @handle"
                    value={formData.channelUrl}
                    onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-[#f7f4ef] placeholder-[#6f6b67] text-sm focus:outline-none focus:border-[#ff2626] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="goal" className="block text-xs font-medium text-[#aaa6a0] mb-2">
                  What is your primary bottleneck or objective?
                </label>
                <select
                  id="goal"
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-[#f7f4ef] text-sm focus:outline-none focus:border-[#ff2626] transition-colors"
                >
                  <option value="leads">Generating Inbound Leads & Pipeline</option>
                  <option value="retention">Fixing Retention & Average Percentage Viewed</option>
                  <option value="scaling">Hands-Off Scripting, Editing & Consistency</option>
                  <option value="relaunch">Relaunching / Revitalizing a Stagnant Channel</option>
                </select>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-all duration-200 shadow-[0_0_25px_rgba(255,38,38,0.3)] hover:shadow-[0_0_35px_rgba(255,38,38,0.5)] group"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href="mailto:contact@youtoogrow.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/[0.1] hover:border-white/20 bg-white/[0.03] text-[#f7f4ef] transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#aaa6a0]" />
                  <span>Get in Touch Directly</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
