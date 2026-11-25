import PortfolioDetails from "@/components/portfolio-details";
import PortfolioIntro from "@/components/portfolio-intro";
import GitHubSection from "@/components/sections/github-section";
import ContactSection from "@/components/sections/contact-section";
import FloatingNav from "@/components/floating-nav";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <PortfolioIntro />
      <PortfolioDetails />
      <GitHubSection />
      <ContactSection />
      <FloatingNav />
    </main>
  );
}
