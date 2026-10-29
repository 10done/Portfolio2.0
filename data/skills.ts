export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  // Shown on the homepage under the tech stack icons
  featured?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "1",
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "C", "HTML", "CSS"]
  },
  {
    id: "2",
    title: "Agentic AI",
    skills: ["AI agents", "Tool calling", "Agent loops", "Multi-step LLM workflows", "Structured outputs", "Human-in-the-loop", "Agent evals", "Agent tracing"],
    featured: true
  },
  {
    id: "8",
    title: "LLM Engineering",
    skills: ["RAG", "Prompt engineering", "Speech-to-text", "LLM observability", "Claude API", "OpenAI API", "Gemini API", "Amazon Bedrock"],
    featured: true
  },
  {
    id: "3",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "React Native", "Expo", "HTMX"]
  },
  {
    id: "4",
    title: "Backend",
    skills: ["FastAPI", "Node.js", "Express", "Django", "SQLAlchemy", "REST API design", "Microservices", "Celery", "Async job queues"]
  },
  {
    id: "5",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Oracle DB", "AWS S3"]
  },
  {
    id: "6",
    title: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Docker", "Terraform", "Ansible", "CI/CD", "Git", "Linux"]
  },
  {
    id: "7",
    title: "Testing & Core CS",
    skills: ["pytest", "Unit / integration / E2E testing", "Data Structures & Algorithms", "System Design"]
  }
];
