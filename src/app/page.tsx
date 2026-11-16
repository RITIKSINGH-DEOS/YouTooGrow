import { HeroSection } from "@/components/hero/hero-section";
import { AgencyIntro } from "@/components/introduction/agency-intro";
import { TrustMetrics } from "@/components/trust/trust-metrics";
import { ServicesSection } from "@/components/services/services-section";
import { HowWeWork } from "@/components/workflow/how-we-work";
import { ProofInMotion } from "@/components/proof/proof-in-motion";
import { CaseStudiesSection } from "@/components/case-studies/case-studies";
import { WhyChooseUs } from "@/components/advantages/why-choose-us";
import { TestimonialsSection } from "@/components/testimonials/testimonials";
import { BookingCTA } from "@/components/contact/booking-cta";
import { Footer } from "@/components/navigation/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f7f4ef] flex flex-col selection:bg-[#ff2626] selection:text-white">
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Agency Introduction (Video-Ready Landscape Frame) */}
        <AgencyIntro />

        {/* 3. Social Proof / Trust Section */}
        <TrustMetrics />

        {/* 4. Services Section (YouTube & Instagram) */}
        <ServicesSection />

        {/* 5. How We Work (01 to 06 Workflow Timeline) */}
        <HowWeWork />

        {/* 6. Proof in Motion (Wall of Wins Infinite Marquee) */}
        <ProofInMotion />

        {/* 7. Case Studies Section */}
        <CaseStudiesSection />

        {/* 8. Why Choose YouTooGrow (5 Core Pillars) */}
        <WhyChooseUs />

        {/* 9. Testimonials Section */}
        <TestimonialsSection />

        {/* 10. Final CTA & Lead Booking */}
        <BookingCTA />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
