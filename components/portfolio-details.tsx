import Link from "next/link";
import { experiences } from "@/data/experiences";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { contributions } from "@/data/open-source";

export default function PortfolioDetails() {
  return <div className="field-guide field-details">
    <section id="experience" className="detail-section">
      <div className="detail-heading"><p className="field-kicker">03 / Experience</p><h2>Professional<br /><em>journey.</em></h2><p>From GPU cloud infrastructure to founding an AI startup.</p></div>
      <div className="detail-list">{experiences.map((exp, i) => <details className="detail-entry" key={exp.id} open={i === 0 || undefined}>
        <summary><span><small>{exp.duration}</small><strong>{exp.company}</strong><span>{exp.role} · {exp.location}</span></span><span aria-hidden="true" className="detail-plus">+</span></summary>
        <div className="detail-body"><p>{exp.description}</p>{exp.metrics && <p className="detail-metrics">{exp.metrics.join("  /  ")}</p>}{exp.achievements && <ul>{exp.achievements.map(item => <li key={item}>{item}</li>)}</ul>}<p className="detail-tags">{exp.technologies?.join(" · ")}</p>{exp.link && <a href={exp.link} target="_blank" rel="noreferrer">Visit website ↗</a>}</div>
      </details>)}</div>
    </section>
    <section id="education" className="detail-section">
      <div className="detail-heading"><p className="field-kicker">04 / Education</p><h2>Education &amp;<br /><em>achievements.</em></h2></div>
      <div className="detail-list"><article className="detail-entry detail-static"><small>Oct 2022 – May 2026</small><h3>Indian Institute of Technology Jodhpur</h3><p>B.Tech in Computer Science and Engineering</p></article><article className="detail-entry detail-static"><small>JEE Advanced 2022</small><h3>Top 1%</h3><p>Among approximately 1.2 million candidates.</p></article><article className="detail-entry detail-static"><small>Competitive programming</small><h3>Codeforces Specialist</h3><p>Global ranks 1523 (Div. 2), 1655 and 1673 (Div. 3); 500+ DSA problems solved.</p></article></div>
    </section>
    <section id="tech-stack" className="detail-section">
      <div className="detail-heading"><p className="field-kicker">05 / Toolkit</p><h2>Tech<br /><em>stack.</em></h2><p>The tools and disciplines I use to build and ship.</p></div>
      <div className="detail-list">{skillCategories.map(category => <div className="skill-row" key={category.id}><h3>{category.title}</h3><p>{category.skills.join(" · ")}</p></div>)}</div>
    </section>
    <section id="projects" className="detail-section">
      <div className="detail-heading"><p className="field-kicker">06 / Selected work</p><h2>Featured<br /><em>projects.</em></h2><p>Products and tools built end to end.</p><Link className="detail-link" href="/projects">View all projects ↗</Link></div>
      <div className="detail-list">{projects.slice(0, 4).map((project, i) => <article className="detail-entry detail-static" key={project.title}><small>0{i + 1} / {project.type}</small><h3>{project.title}</h3>{project.subtitle && <p className="detail-subtitle">{project.subtitle}</p>}<p>{project.description}</p>{project.highlights && <ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>}<p className="detail-tags">{project.technologies.join(" · ")}</p><div className="detail-actions">{project.demoUrl && project.demoUrl !== "#" && <a href={project.demoUrl} target="_blank" rel="noreferrer">View project ↗</a>}{project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noreferrer">Source code ↗</a>}</div></article>)}</div>
    </section>
    <section id="open-source" className="detail-section">
      <div className="detail-heading"><p className="field-kicker">07 / Contributions</p><h2>Open<br /><em>source.</em></h2><p>Merged pull requests to production open-source projects.</p></div>
      <div className="detail-list">{contributions.map(item => <article className="detail-entry detail-static" key={item.title}><small>{item.organization}</small><h3>{item.title}</h3><p>{item.description}</p><p className="detail-tags">{item.tags.join(" · ")}</p><a href={item.link} target="_blank" rel="noreferrer">View pull requests ↗</a></article>)}</div>
    </section>
  </div>;
}
