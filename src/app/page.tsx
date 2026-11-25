import { HeroSection } from "@/components/hero/hero-section";
import { PlatformLogos } from "@/components/trust/platform-logos";
import { QualificationQuiz } from "@/components/qualification/qualification-quiz";
import { ProcessSection } from "@/components/workflow/process-section";
import { ProofInMotion } from "@/components/proof/proof-in-motion";
import { CaseStudiesSection } from "@/components/case-studies/case-studies";
import { GrowthConvergence } from "@/components/growth-convergence/growth-convergence";
import { Footer } from "@/components/navigation/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f7f4ef] flex flex-col selection:bg-[#ff2626] selection:text-white">
      {/* Minimalist Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Ultra-Subtle Studio Film-Grain Texture */}
      <div
        className="fixed inset-0 studio-grain opacity-[0.022] pointer-events-none z-40 mix-blend-overlay"
        aria-hidden="true"
      />

      <main className="flex-grow">
        {/* 1. Hero Section with Integrated Video Framework Card */}
        <HeroSection />

        {/* 2. Platforms & Production Ecosystem Logos Ticker */}
        <PlatformLogos />

        {/* 3. Interactive Priority Qualification Quiz */}
        <RevealOnScroll>
          <QualificationQuiz />
        </RevealOnScroll>

        {/* 4. The Process: You Record. We Handle Everything Else. (YouTube & Instagram) */}
        <RevealOnScroll>
          <ProcessSection />
        </RevealOnScroll>

        {/* 5. Proof in Motion (Wall of Wins Infinite Marquee) */}
        <RevealOnScroll>
          <ProofInMotion />
        </RevealOnScroll>

        {/* 6. Case Studies Section */}
        <RevealOnScroll>
          <CaseStudiesSection />
        </RevealOnScroll>

        {/* 7. Animated Growth Convergence Engine */}
        <GrowthConvergence />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
