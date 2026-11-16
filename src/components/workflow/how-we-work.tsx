import { workflowSteps } from "@/data/workflow.data";

export function HowWeWork() {
  return (
    <section className="py-16 md:py-24 relative bg-[#0a0a0a] border-t border-white/[0.06]" id="workflow">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2626] block mb-1">
            The Growth Framework
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f7f4ef] tracking-tight mb-3">
            How We Work:{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              Research to Compounding Scale
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#aaa6a0]">
            A repeatable 6-stage framework engineered to eliminate guesswork and guarantee algorithmic momentum.
          </p>
        </div>

        {/* 6-Stage Clean Connected Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflowSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-xl border border-white/[0.08] bg-[#101010] p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-serif italic text-white/20 group-hover:text-[#ff2626] transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#f7f4ef]">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#f7f4ef] tracking-tight mb-2">
                  {step.headline}
                </h3>

                <p className="text-xs text-[#aaa6a0] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Single Crisp Output Tag */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                <span className="text-[#6f6b67]">Primary Output:</span>
                <span className="text-[#00b67a] font-medium">{step.keyOutputs[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
