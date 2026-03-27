
export interface Project {
  title: string;
  description: string;
  type: "fullstack" | "ai" | "saas";
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Well-Log Pro",
    description:
      "Full-stack well-log analysis platform for uploading LAS files, visualizing subsurface curves and depth plots, and generating AI-powered geological interpretations through an interactive Gemini-driven chat interface. Microservice architecture with concurrent file processing.",
    type: "fullstack",
    technologies: ["Node.js", "Express", "React", "Python", "MongoDB", "PostgreSQL", "Redis", "AWS S3", "Gemini API"],
    image: "/project/well-log.png",
    demoUrl: "https://one-geo-anubhav.onrender.com/",
    codeUrl: "https://github.com/10done/One-Geo-Anubhav",
  },
  {
    title: "Virtual Science Lab",
    description:
      "Modular virtual science lab featuring 10 interactive HTML5 Canvas experiments (5 physics, 5 chemistry) built for Open Science Labs. Integrated a secure multi-language code execution environment via Django + Piston API with SRI-protected Ace Editor.",
    type: "fullstack",
    technologies: ["Django", "HTML5 Canvas", "JavaScript", "Python", "Piston API"],
    image: "/company/open-science-labs-logo.png",
    demoUrl: "https://github.com/alphaonelabs/alphaonelabs-education-website/pulls?q=is:pr+is:merged+author:10done",
    codeUrl: "https://github.com/alphaonelabs/alphaonelabs-education-website/pulls?q=is:pr+is:merged+author:10done",
  },
];
