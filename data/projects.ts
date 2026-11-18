
export interface Project {
  title: string;
  description: string;
  type: "fullstack" | "ai" | "saas";
  technologies: string[];
  // Optional: cards without an image render a gradient header with the subtitle
  image?: string;
  subtitle?: string;
  // Small label shown under the title, e.g. "Stealth"
  status?: string;
  highlights?: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Plate8",
    subtitle: "Conversational AI back-of-house agent for restaurants",
    description:
      "Restaurant teams talk to Walter, a proactive AI agent with memory across sessions, in the app, on the web, on the phone or on WhatsApp. Walter counts stock, drafts prep and orders, and asks before it acts. Built for independent restaurants and small chains that bill on a POS, and live in pilot at 3 restaurants.",
    type: "ai",
    highlights: [
      "Voice answers cut from 6–7 s to ~3 s with a wait line and 0.4 s barge-in",
      "Eval harness cut Walter failures from 21 to 2 of 60 cases; cost per pass ₹0.16 → ₹0.10",
      "Dish analytics in 3–4 ms on 344k sales lines (67 ms for a full year by day)",
      "Prep-sheet error 12.5% → 8.1%; ₹2.9 crore of POS sales reconciled to the exact rupee",
      "32 role-scoped tools · 1,000+ reproducible simulated sessions with bootstrap CIs",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Celery", "Redis", "LiveKit", "Claude API", "React Native", "Next.js", "AWS", "Terraform"],
    demoUrl: "https://plate8.io",
  },
  {
    title: "Well-Log Pro",
    description:
      "Full-stack well-log analysis platform for uploading LAS files, visualizing subsurface curves and depth plots, and generating AI-powered geological interpretations through an interactive Gemini-driven chat interface. Microservice architecture with concurrent file processing.",
    type: "fullstack",
    technologies: ["Node.js", "Express", "React", "Python", "MongoDB", "PostgreSQL", "Redis", "AWS S3", "Gemini API"],
    image: "/project/well-log.png",
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
