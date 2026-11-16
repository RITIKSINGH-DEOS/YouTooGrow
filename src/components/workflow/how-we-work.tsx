import { workflowSteps } from "@/data/workflow.data";
import { CheckCircle2, GitCommit } from "lucide-react";

export function HowWeWork() {
  return (
    <section className="py-20 md:py-32 relative bg-[#0c0c0c]/80 border-t border-white/[0.06]" id="workflow">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#101010] text-xs font-semibold uppercase tracking-wider text-[#ff2626] mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>The Growth Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-5">
            How We Work:{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              From Research to Compounding Scale
            </span>
          </h2>
          <p className="text-[#aaa6a0] text-base sm:text-lg leading-relaxed">
            A repeatable 6-stage engineering process designed to eliminate creative friction and guarantee consistent algorithmic momentum.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {workflowSteps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative rounded-2xl border border-white/[0.08] bg-[#101010] p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Step Counter Top Bar */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-serif italic text-white/20 group-hover:text-[#ff2626] transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#f7f4ef]">
                    Phase {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#ff2626] mb-1">
                  {step.phase}
                </h3>
                <h4 className="text-xl font-bold text-[#f7f4ef] tracking-tight mb-3">
                  {step.headline}
                </h4>
                <p className="text-sm text-[#aaa6a0] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Key Outputs Section */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6f6b67] block">
                  Deliverable Artifacts
                </span>
                <ul className="space-y-1.5">
                  {step.keyOutputs.map((output) => (
                    <li key={output} className="flex items-center gap-2 text-xs text-[#aaa6a0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00b67a] shrink-0" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
