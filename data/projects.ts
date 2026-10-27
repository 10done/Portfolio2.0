
export interface Project {
  title: string;
  description: string;
  type: "fullstack" | "ai" | "saas";
  technologies: string[];
  // Optional: cards without an image render a gradient header with the subtitle
  image?: string;
  subtitle?: string;
  highlights?: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Plate8",
    subtitle: "AI back-of-house OS for Indian restaurants",
    description:
      "Voice-first inventory and stock platform live in pilot at 3 restaurants. Staff speak counts in Hindi, Punjabi or English; a speech-to-text + Claude Haiku pipeline extracts, matches and confidence-scores line items, and Walter, a tool-calling agent on the Anthropic Messages API, answers operational questions with every call traced for cost and latency.",
    type: "ai",
    highlights: [
      "90%+ line-accuracy target, <3 s p95 at ~INR 145/outlet/month",
      "Offline evals: golden voice set + 200-phrase item-matching suite",
      "Multi-tenant FastAPI + Postgres with RLS, append-only stock ledger, event outbox",
      "460+ automated tests",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Celery", "Redis", "React Native", "Next.js", "Tailwind CSS", "Claude API", "AWS", "Terraform"],
    demoUrl: "https://plate8.io",
  },
  {
    title: "Qarz.ai",
    subtitle: "AI home-loan document platform for Indian lenders",
    description:
      "AI document-processing pipeline that classifies borrower documents, extracts fields with confidence scores and runs 20 validation checks, 7 cross-document rules and 5 tamper detectors, gated in CI by accuracy thresholds. Full-stack platform with lender-rule checklists, consent-based borrower links, malware-scanned and Aadhaar-masked uploads, officer review and WhatsApp reminders.",
    type: "ai",
    highlights: [
      "CI-gated extraction accuracy (field accuracy ≥ 0.90)",
      "20 validation checks · 7 cross-doc rules · 5 tamper detectors",
      "637 automated tests + 38 browser E2E tests",
    ],
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "AWS", "Amazon Bedrock"],
  },
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
