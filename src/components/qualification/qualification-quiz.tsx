"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Send } from "lucide-react";

interface QuestionOption {
  id: string;
  label: string;
  sublabel?: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  hint?: string;
  options: QuestionOption[];
}

// Template Questions (Easily customizable when user provides updated questions)
const templateQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Are you an online or local business?",
    hint: "Select the operational model that best describes your business.",
    options: [
      { id: "A", label: "Online Business", sublabel: "SaaS, Creator, Agency, Consulting, E-commerce" },
      { id: "B", label: "Local Business", sublabel: "Physical clinic, Regional firm, Local service provider" },
    ],
  },
  {
    id: 2,
    question: "Which platform do you want to dominate first?",
    hint: "Choose where you want us to deploy our retention & growth systems.",
    options: [
      { id: "A", label: "Both YouTube & Instagram", sublabel: "Complete multi-channel audience & pipeline engine" },
      { id: "B", label: "YouTube Only", sublabel: "Long-form authority, high search intent & retention" },
      { id: "C", label: "Instagram Only", sublabel: "High-velocity Reels, engagement & direct DM funnels" },
    ],
  },
  {
    id: 3,
    question: "What is your primary bottleneck right now?",
    hint: "Helps us calibrate the exact production sprints needed.",
    options: [
      { id: "A", label: "Time & Consistency", sublabel: "I spend too many hours editing and managing uploads" },
      { id: "B", label: "Retention & Packaging", sublabel: "Good ideas, but CTR and average view duration drop off" },
      { id: "C", label: "Monetization & Pipeline", sublabel: "Getting views, but not converting into inbound revenue" },
    ],
  },
];

export function QualificationQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", channelUrl: "" });
  const [submitted, setSubmitted] = useState(false);

  const activeQuestion = templateQuestions[currentStep];
  const progressPercentage = ((currentStep + 1) / templateQuestions.length) * 100;

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [activeQuestion.id]: optionId }));

    // Auto-advance to next question smoothly after 200ms
    setTimeout(() => {
      if (currentStep < templateQuestions.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsCompleted(true);
      }
    }, 220);
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (answers[activeQuestion.id]) {
      if (currentStep < templateQuestions.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsCompleted(true);
      }
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
    setSubmitted(false);
  };

  return (
    <section className="py-14 sm:py-18 md:py-20 relative overflow-hidden" id="strategy-call">
      {/* Background Subtle Crimson Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(255,38,38,0.12)_0%,rgba(255,38,38,0.02)_55%,transparent_75%)] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff2626] block mb-2">
            Priority Qualification
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f7f4ef] tracking-tight mb-2 sm:mb-3">
            Book Your{" "}
            <span className="font-serif italic font-normal text-[#ff2626]">
              Strategy Call
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#aaa6a0] leading-relaxed">
            Fill out the short quiz below to see if you qualify for a 1-on-1 strategy session with Ritik. Takes 30 seconds.
          </p>
        </div>

        {/* Interactive Dark Glass Quiz Container */}
        <div className="relative rounded-2xl border border-white/[0.1] bg-[#0c0c0c] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Top Sleek Progress Bar */}
          <div className="h-1 bg-white/[0.06] w-full absolute top-0 inset-x-0">
            <div
              className="h-full bg-gradient-to-r from-[#ff4d4d] to-[#ff2626] transition-all duration-400 ease-out"
              style={{ width: `${isCompleted ? 100 : progressPercentage}%` }}
            />
          </div>

          <div className="p-6 sm:p-10 md:p-12">
            {!isCompleted ? (
              <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
                {/* Header Sub-bar */}
                <div className="flex items-center justify-between text-xs text-[#78746e]">
                  <span className="font-mono uppercase tracking-wider text-[11px] text-[#ff2626] font-semibold">
                    Question {currentStep + 1} of {templateQuestions.length}
                  </span>
                  <span className="text-[11px] text-[#55524e]">
                    Press A, B or click option
                  </span>
                </div>

                {/* Question Prompt */}
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-6 h-6 rounded-md bg-[#ff2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-[#ff2626]/30">
                      {activeQuestion.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#f7f4ef] tracking-tight leading-snug">
                      {activeQuestion.question}
                      <span className="text-[#ff2626] ml-1">*</span>
                    </h3>
                  </div>
                  {activeQuestion.hint && (
                    <p className="text-xs sm:text-sm text-[#8a857e] ml-9">
                      {activeQuestion.hint}
                    </p>
                  )}
                </div>

                {/* Option Buttons */}
                <div className="space-y-3 pt-2">
                  {activeQuestion.options.map((opt) => {
                    const isSelected = answers[activeQuestion.id] === opt.id;

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt.id)}
                        className={`w-full text-left p-4 sm:p-4.5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                          isSelected
                            ? "border-[#ff2626] bg-[#ff2626]/10 text-white shadow-[0_0_20px_rgba(255,38,38,0.25)]"
                            : "border-white/[0.08] bg-[#121212] hover:border-white/20 hover:bg-[#181818] text-[#e0deda]"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 sm:gap-4">
                          <span
                            className={`w-7 h-7 rounded-lg border text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? "border-[#ff2626] bg-[#ff2626] text-white"
                                : "border-white/10 bg-white/[0.04] text-[#8e8a84] group-hover:border-white/30 group-hover:text-white"
                            }`}
                          >
                            {opt.id}
                          </span>
                          <div>
                            <span className="text-sm sm:text-base font-semibold block leading-tight">
                              {opt.label}
                            </span>
                            {opt.sublabel && (
                              <span className="text-xs text-[#7e7a74] mt-0.5 block leading-normal">
                                {opt.sublabel}
                              </span>
                            )}
                          </div>
                        </div>

                        <div
                          className={`w-4 h-4 rounded-full border transition-all flex items-center justify-center shrink-0 ml-3 ${
                            isSelected
                              ? "border-[#ff2626] bg-[#ff2626]"
                              : "border-white/20 group-hover:border-white/40"
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Navigation Controls */}
                <div className="pt-4 flex items-center justify-between border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="inline-flex items-center gap-1.5 text-xs text-[#8a857e] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!answers[activeQuestion.id]}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-[#ff2626]/20"
                  >
                    <span>{currentStep === templateQuestions.length - 1 ? "Complete Quiz" : "Next"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : submitted ? (
              /* Success / Thank You Screen */
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300 max-w-md mx-auto">
                <div className="w-14 h-14 rounded-full bg-[#00b67a]/10 border border-[#00b67a]/20 flex items-center justify-center text-[#00b67a] mx-auto mb-2 shadow-[0_0_30px_rgba(0,182,122,0.3)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#f7f4ef]">Application Received!</h3>
                <p className="text-xs sm:text-sm text-[#aaa6a0] leading-relaxed">
                  Thank you! Ritik will personally review your channel information and reach out within 24 hours to schedule your strategy session.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="text-xs text-[#ff2626] hover:underline uppercase tracking-wider font-semibold"
                  >
                    Restart Quiz
                  </button>
                </div>
              </div>
            ) : (
              /* Qualification Completed -> Contact Details Step */
              <div className="space-y-6 animate-in fade-in duration-300 max-w-lg mx-auto text-left">
                <div className="text-center space-y-1 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00b67a]/10 border border-[#00b67a]/30 text-[#00b67a] text-[11px] font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>You Qualify For a Strategy Session</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f7f4ef] tracking-tight">
                    Where should Ritik send your growth audit?
                  </h3>
                  <p className="text-xs text-[#aaa6a0]">
                    Enter your contact details below to finalize your application.
                  </p>
                </div>

                <form onSubmit={handleFinalSubmit} className="space-y-3.5">
                  <div>
                    <label htmlFor="quiz-name" className="block text-xs font-medium text-[#aaa6a0] mb-1">
                      Your Full Name
                    </label>
                    <input
                      id="quiz-name"
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-[#f7f4ef] placeholder-[#55524e] text-xs sm:text-sm focus:outline-none focus:border-[#ff2626] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="quiz-email" className="block text-xs font-medium text-[#aaa6a0] mb-1">
                      Work Email
                    </label>
                    <input
                      id="quiz-email"
                      required
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-[#f7f4ef] placeholder-[#55524e] text-xs sm:text-sm focus:outline-none focus:border-[#ff2626] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="quiz-channel" className="block text-xs font-medium text-[#aaa6a0] mb-1">
                      YouTube Channel / Instagram Handle URL
                    </label>
                    <input
                      id="quiz-channel"
                      required
                      type="text"
                      placeholder="youtube.com/@channel or @handle"
                      value={contactInfo.channelUrl}
                      onChange={(e) => setContactInfo({ ...contactInfo, channelUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.08] text-[#f7f4ef] placeholder-[#55524e] text-xs sm:text-sm focus:outline-none focus:border-[#ff2626] transition-colors"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-[#ff2626] hover:bg-[#d90808] text-white font-bold uppercase tracking-wider text-xs sm:text-sm transition-all shadow-[0_0_30px_rgba(255,38,38,0.4)] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application &amp; Book Call</span>
                    </button>
                  </div>
                </form>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCompleted(false)}
                    className="text-[11px] text-[#78746e] hover:text-[#aaa6a0] transition-colors"
                  >
                    ← Review or edit quiz answers
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
