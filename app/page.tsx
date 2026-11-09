import SectionNavigation from "@/components/SectionNavigation";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import CareerSection from "@/components/CareerSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import CredentialsSection from "@/components/CredentialsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col relative selection:bg-emerald-500/20 selection:text-emerald-300 overflow-x-hidden">
      {/* Subtle Geometric Grid & Depth Accents behind all content */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 bg-subtle-grid [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]"
      />
      <div
        aria-hidden="true"
        className="fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-emerald-500/[0.035] blur-[140px] rounded-full pointer-events-none z-0"
      />

      {/* Floating navigation system */}
      <SectionNavigation />

      {/* Main Content: 6 sections in continuous smooth flow */}
      <main className="flex-1 w-full pb-[calc(7rem+env(safe-area-inset-bottom))] md:pb-12 relative z-10">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Executive Profile & Bento Grid */}
        <BentoGrid />

        {/* Section 3: Career Track Record */}
        <CareerSection />

        {/* Section 4: Digital Initiatives & Portfolio */}
        <ProjectShowcase />

        {/* Section 5: Education & Credentials */}
        <CredentialsSection />

        {/* Section 6: Closing Pitch & Contact */}
        <ContactSection />
      </main>
    </div>
  );
}
