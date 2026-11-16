import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { AgencyIntro } from "@/components/introduction/agency-intro";
import { TrustMetrics } from "@/components/trust/trust-metrics";
import { ServicesSection } from "@/components/services/services-section";
import { HowWeWork } from "@/components/workflow/how-we-work";
import { ProofInMotion } from "@/components/proof/proof-in-motion";
import { CaseStudiesSection } from "@/components/case-studies/case-studies";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f7f4ef] flex flex-col selection:bg-[#ff2626] selection:text-white">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Agency Introduction (Video-ready landscape frame) */}
        <AgencyIntro />

        {/* 4. Trust & Capabilities Strip */}
        <TrustMetrics />

        {/* 5. Services Section (YouTube & Instagram) */}
        <ServicesSection />

        {/* 6. How We Work (01 to 06 Workflow Timeline) */}
        <HowWeWork />

        {/* 7. Proof in Motion (Wall of Wins Infinite Marquee) */}
        <ProofInMotion />

        {/* 8. Case Studies Section */}
        <CaseStudiesSection />
      </main>

      {/* Baseline footer */}
      <footer className="py-8 border-t border-white/[0.06] text-center text-xs text-[#aaa6a0]">
        YouTooGrow &copy; {new Date().getFullYear()} &bull; We Turn Content Into Growth.
      </footer>
    </div>
  );
}
