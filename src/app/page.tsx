import { HeroSection } from "@/components/hero/hero-section";
import { PlatformLogos } from "@/components/trust/platform-logos";
import { QualificationQuiz } from "@/components/qualification/qualification-quiz";
import { ProcessSection } from "@/components/workflow/process-section";
import { ProofInMotion } from "@/components/proof/proof-in-motion";
import { CaseStudiesSection } from "@/components/case-studies/case-studies";
import { TestimonialsSection } from "@/components/testimonials/testimonials";
import { GrowthConvergence } from "@/components/growth-convergence/growth-convergence";
import { Footer } from "@/components/navigation/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f7f4ef] flex flex-col selection:bg-[#ff2626] selection:text-white">
      <main className="flex-grow">
        {/* 1. Hero Section with Integrated Video Framework Card */}
        <HeroSection />

        {/* 2. Platforms & Production Ecosystem Logos Ticker */}
        <PlatformLogos />

        {/* 3. Interactive Priority Qualification Quiz */}
        <QualificationQuiz />

        {/* 4. The Process: You Record. We Handle Everything Else. (YouTube & Instagram) */}
        <ProcessSection />

        {/* 5. Proof in Motion (Wall of Wins Infinite Marquee) */}
        <ProofInMotion />

        {/* 6. Case Studies Section */}
        <CaseStudiesSection />

        {/* 7. Testimonials Section */}
        <TestimonialsSection />

        {/* 8. Animated Growth Convergence Engine (Replaces Final CTA) */}
        <GrowthConvergence />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
