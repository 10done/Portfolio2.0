export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "1",
    title: "Languages",
    skills: ["C/C++", "Python", "JavaScript", "SQL", "HTML/CSS", "XML"]
  },
  {
    id: "2",
    title: "Frameworks & Libraries",
    skills: ["Django", "React.js", "Node.js", "Express.js", "HTMX", "Scikit-Learn", "Pandas", "SciPy"]
  },
  {
    id: "3",
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS S3", "Oracle DB"]
  },
  {
    id: "4",
    title: "DevOps & Cloud",
    skills: ["Git", "Linux", "Docker", "Ansible", "Terraform", "CI/CD", "Google Cloud", "MATLAB", "virsh/libvirt"]
  }
];
