import type { Metadata } from "next";
import ProjectsSectionFull from "@/components/sections/projects-section-full";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Anubhav Tandon — full-stack applications, backend systems, and open source work.",
};

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ProjectsSectionFull />
    </div>
  );
}
