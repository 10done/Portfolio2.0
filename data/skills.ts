export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "1",
    title: "Agentic AI",
    skills: ["AI agents", "Tool calling", "Agent loops", "Multi-step LLM workflows", "Structured outputs", "Human-in-the-loop", "Evals and tracing"]
  },
  {
    id: "2",
    title: "LLM & Voice AI",
    skills: ["RAG", "Prompt engineering", "LiveKit", "Real-time voice agents", "Speech-to-text", "Claude", "OpenAI", "Gemini"]
  },
  {
    id: "3",
    title: "Languages & Backend",
    skills: ["Python", "TypeScript", "SQL", "C++", "FastAPI", "Django", "PostgreSQL", "Redis", "Celery", "Multi-tenant design"]
  },
  {
    id: "4",
    title: "Cloud & Testing",
    skills: ["AWS", "Docker", "Terraform", "CI/CD", "pytest", "Offline eval harnesses", "Simulation with bootstrap confidence intervals"]
  }
];
