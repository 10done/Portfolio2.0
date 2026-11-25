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
      "Conversational AI back-of-house agent for independent restaurants and small chains that bill on a POS.",
    metrics: ["3 pilot restaurants", "−30% food wastage", "Voice answers 6–7 s → ~3 s", "Eval failures 21 → 2 of 60"],
    achievements: [
      "Restaurant teams talk to Walter, our AI agent, in the app, on the web, on the phone or on WhatsApp",
      "Built Walter as a proactive agent that keeps memory across sessions, so each conversation continues from the last one",
      "Cut food wastage by 30% across 3 pilot restaurants that use Plate8 daily",
      "Built a multilingual (Hindi, Punjabi, English) voice inventory pipeline: speech-to-text, LLM extraction, item matching and confidence scoring, targeting 90%+ line accuracy and under 3 s p95 latency",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Celery", "Redis", "React Native", "Next.js", "Claude API", "AWS", "Terraform"],
    logo: "/company/plate8.svg",
  },
  {
    id: "2",
    company: "Oblivus Cloud",
    role: "Software Engineer",
    type: "contract",
    location: "Los Angeles, CA (Remote)",
    duration: "Jul 2025 – Sep 2026",
    startDate: "2025-07",
    endDate: "2026-09",
    description:
      "Backend engineering & DevOps for a GPU cloud platform that reached $1.5M in annual revenue and was then acquired by GPUX.",
    metrics: ["$1.5M annual revenue", "Acquired by GPUX", "~25% lower API latency", "Deploys: hours → <15 min"],
    achievements: [
      "Engineer on a GPU cloud platform that reached $1.5M in annual revenue and was then acquired by GPUX",
      "Built and maintained Python (Django) and PHP backend services and REST APIs in production; optimized SQL queries and added caching, cutting API latency by ~25%",
      "Built GPU dashboards (sub-200 ms loads) that drove business decisions and gave insight into GPU usage and customers",
      "Automated CI/CD and provisioning with Ansible, Terraform and libvirt, cutting deployment time from hours to under 15 minutes",
      "Led root-cause analysis and post-mortems for production incidents, reducing MTTR; worked directly with enterprise clients on deployment issues",
    ],
    technologies: ["Django", "Python", "PHP", "Ansible", "Terraform", "Linux", "Docker"],
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
    description: "Features, fixes and a virtual science lab for an open-source Django learning platform.",
    metrics: ["18 merged pull requests", "+30% student engagement"],
    achievements: [
      "Merged 18 pull requests into an open-source Django learning platform: 15 features and 3 bug fixes",
      "Built a virtual science lab with 10 interactive React experiments; student engagement increased by 30%+",
      "Added envelope encryption to user messages, and built a Python code editor on the Piston API with stdin handling and rate limits",
      "Built learning features: streaks, achievement badges, shareable certificates, deadline reminders and a share-to-get-a-discount flow",
    ],
    technologies: ["Django", "Python", "React", "JavaScript", "Piston API"],
    logo: "/company/open-science-labs-logo.png",
  },
];
