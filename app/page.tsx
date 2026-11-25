import PortfolioIntro from "@/components/portfolio-intro";
import GitHubSection from "@/components/sections/github-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section-new";
import EducationSection from "@/components/sections/education-section";
import OpenSourceSection from "@/components/sections/open-source-section";
import ContactSection from "@/components/sections/contact-section";
import FloatingNav from "@/components/floating-nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioIntro />
      <ExperienceSection />
      <EducationSection />
      <TechStackSection />
      <ProjectsSection />
      <OpenSourceSection />
      <GitHubSection />
      <ContactSection />
      <FloatingNav />
    </main>
  );
}
