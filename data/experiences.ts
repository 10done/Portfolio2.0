export interface Experience {
  id: string;
  company: string;
  link?: string;
  role: string;
  type: "fulltime" | "intern" | "contract";
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Skyportal.ai & Oblivus Cloud",
    role: "Software Engineer",
    type: "contract",
    duration: "Jul 2025 – Jan 2026",
    startDate: "2025-07",
    endDate: "2026-01",
    description:
      "Backend engineering & DevOps for GPU cloud infrastructure serving enterprise AI workloads",
    achievements: [
      "Architected and maintained Django (Python) + raw PHP backend services in production; optimized database queries and introduced caching layers, improving average API latency by ~25%",
      "Built low-latency front-end dashboards with HTMX & vanilla JavaScript for GPU cluster management, achieving sub-200ms page loads",
      "Automated CI/CD pipelines and infrastructure provisioning via Ansible, Terraform, virsh/libvirt, reducing deployment cycles from hours to under 15 minutes",
      "Configured and optimized NVIDIA H100/H200 GPU clusters to accelerate AI model training and inference workloads for enterprise clients",
      "Led root-cause analysis and coordinated cross-functional post-mortems for production incidents, measurably reducing mean-time-to-recovery (MTTR)",
    ],
    technologies: ["Django", "Python", "PHP", "HTMX", "Ansible", "Terraform", "Linux", "Docker"],
    logo: "/company/skyportal_ai_logo.jpeg",
  },
  {
    id: "2",
    company: "Open Science Labs",
    role: "Software Development Intern",
    type: "intern",
    duration: "May 2025 – Jul 2025",
    startDate: "2025-05",
    endDate: "2025-07",
    description: "Virtual science lab with 10 interactive experiments; 30%+ student engagement increase",
    achievements: [
      "Designed and shipped a modular virtual science lab featuring 10 interactive HTML5 Canvas experiments (5 physics, 5 chemistry), increasing student engagement by 30%+",
      "Integrated an SRI-protected Ace Editor with custom stdin handling and client-side rate limiting into a Django app via the Piston API for secure, multi-language code execution",
    ],
    technologies: ["Django", "HTML5 Canvas", "JavaScript", "Piston API", "Python"],
    logo: "/company/open-science-labs-logo.png",
  },
];
