export interface Experience {
  id: string;
  company: string;
  link?: string;
  role: string;
  type: "fulltime" | "intern" | "contract" | "founder";
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  // Headline numbers shown as chips on the card
  metrics?: string[];
  achievements?: string[];
  technologies?: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Plate8",
    link: "https://plate8.io",
    role: "Founder",
    type: "founder",
    location: "India",
    duration: "May 2026 – Present",
    startDate: "2026-05",
    endDate: "present",
    description:
      "AI back-of-house operating system for Indian restaurants: voice-driven inventory, stock tracking and demand forecasting.",
    metrics: ["3 pilot restaurants", "−30% food wastage", "460+ automated tests"],
    achievements: [
      "Founded Plate8 and built the product end to end; onboarded 3 restaurants, currently under pilot, using it for daily inventory counts and stock tracking",
      "Lowered food wastage by 30% at pilot restaurants through efficient demand and stock forecasts",
      "Built a multilingual (Hindi, Punjabi, English) voice inventory pipeline: speech-to-text, LLM extraction with Claude Haiku, item matching and confidence scoring, targeting 90%+ line accuracy and under 3 s p95 latency at ~INR 145 per outlet per month",
      "Built Walter, an AI agent on the Anthropic Messages API with tool calling; every model and tool call is traced with cost and latency, and quality is measured by offline eval suites",
      "Designed a multi-tenant FastAPI + PostgreSQL backend with row-level security, an append-only stock ledger and event outbox, plus a React Native (Expo) app and Next.js dashboard",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Celery", "Redis", "React Native", "Next.js", "Claude API", "AWS", "Terraform"],
  },
  {
    id: "2",
    company: "Skyportal.ai & Oblivus Cloud",
    role: "Software Engineer (Contract)",
    type: "contract",
    location: "Los Angeles, California (Remote)",
    duration: "Jul 2025 – Jan 2026",
    startDate: "2025-07",
    endDate: "2026-01",
    description:
      "Backend engineering & DevOps for GPU cloud infrastructure serving enterprise AI workloads.",
    metrics: ["~25% lower API latency", "Sub-200 ms dashboards", "Deploys: hours → <15 min"],
    achievements: [
      "Built and maintained Python (Django) and PHP backend services and REST APIs in production; optimized SQL queries and added caching, cutting API latency by ~25%",
      "Built front-end dashboards with HTMX and JavaScript for GPU cluster management, achieving sub-200 ms page loads",
      "Automated CI/CD and infrastructure provisioning with Ansible, Terraform and libvirt, cutting deployment time from hours to under 15 minutes",
      "Led root-cause analysis and post-mortems for production incidents, reducing MTTR; worked directly with enterprise clients on deployment issues",
    ],
    technologies: ["Django", "Python", "PHP", "HTMX", "Ansible", "Terraform", "Linux", "Docker"],
    logo: "/company/skyportal_ai_logo.jpeg",
  },
  {
    id: "3",
    company: "Open Science Labs",
    role: "Software Development Intern",
    type: "intern",
    location: "USA (Remote)",
    duration: "May 2025 – Jul 2025",
    startDate: "2025-05",
    endDate: "2025-07",
    description: "Interactive virtual science lab and secure in-browser code execution for an open education platform.",
    metrics: ["10 interactive experiments", "+30% student engagement"],
    achievements: [
      "Shipped a virtual lab of 10 interactive HTML5 Canvas experiments in JavaScript, raising student engagement by 30%+",
      "Integrated a code editor with stdin handling and rate limiting into a Django app via the Piston API for secure multi-language code execution",
    ],
    technologies: ["Django", "Python", "JavaScript", "HTML5 Canvas", "Piston API"],
    logo: "/company/open-science-labs-logo.png",
  },
];
