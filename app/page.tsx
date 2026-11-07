import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsCertifications from "@/components/SkillsCertifications";
import FeaturedProjects from "@/components/FeaturedProjects";
import WorkExperience from "@/components/WorkExperience";
import ContactFooter from "@/components/ContactFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-kertas-dingin text-hijau-ledger">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SkillsCertifications />
        <FeaturedProjects />
        <WorkExperience />
      </main>
      <ContactFooter />
    </div>
  );
}
