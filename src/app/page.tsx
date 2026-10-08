import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { About } from "@/components/About";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010102] text-[#f7f8f8] relative selection:bg-[#5e6ad2] selection:text-white">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <SkillsMatrix />
      <ExperienceTimeline />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
