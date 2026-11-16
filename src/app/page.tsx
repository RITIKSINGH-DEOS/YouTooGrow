import { HeroSection } from "@/components/hero/hero-section";
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
        {/* 1. Hero Section with Integrated Video Framework Card */}
        <HeroSection />

        {/* 2. Services Section (YouTube & Instagram) */}
        <ServicesSection />

        {/* 4. How We Work (01 to 06 Workflow Timeline) */}
        <HowWeWork />

        {/* 5. Proof in Motion (Wall of Wins Infinite Marquee) */}
        <ProofInMotion />

        {/* 6. Case Studies Section */}
        <CaseStudiesSection />

        {/* 7. Why Choose YouTooGrow (5 Core Pillars) */}
        <WhyChooseUs />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Final CTA & Lead Booking */}
        <BookingCTA />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
