"use client";

import { PortfolioFigure } from "@/components/portfolio-figures";
import { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";

export default function PortfolioIntro() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="field-guide">
      <header className="field-nav">
        <a href="#top" className="field-brand">Anubhav Tandon</a>
        <nav aria-label="Main navigation">
          <a href="#featured-work">Work</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="/projects">Projects</a>
          <a href={profileData.resume} target="_blank" rel="noreferrer">Resume</a>
          <a href="#contact" className="field-nav-contact">Contact</a>
        </nav>
      </header>
      <section id="top" className="field-hero field-grid">
        <div>
          <div className="field-identity">
            <div className="field-portrait">
              <Image
                src="/photos/anubhav-outdoors.webp"
                alt="Anubhav Tandon sitting among trees"
                width={1200}
                height={1600}
                sizes="200px"
                priority
              />
            </div>
            <div>
              <p className="field-person">Anubhav Tandon</p>
              <p className="field-person-role">AI engineer · Founder of Plate8</p>
            </div>
          </div>
          <h1>Voice AI and the systems <em>behind it.</em></h1>
          <p className="field-copy">I build AI agents, voice interfaces, and cloud infrastructure. I studied Computer Science and Engineering at <strong>IIT Jodhpur</strong>.</p>
          <div className="field-links">
            <a className="field-primary-action" href="#featured-work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="field-secondary-action" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="field-hero-art">
          <PortfolioFigure name="agent" playing={playing} />
          <div className="field-motion">
            <button type="button" onClick={() => setPlaying(!playing)}>
              {playing ? "Pause animations" : "Play animations"}
            </button>
          </div>
        </div>
      </section>
      <section id="featured-work" className="field-project field-grid" aria-labelledby="plate8-heading">
        <div>
          <p className="field-kicker">Current work</p>
          <h2 id="plate8-heading">Plate8</h2>
          <p className="field-subtitle">A voice agent for restaurant teams.</p>
          <p className="field-copy">Staff can ask Walter to count stock or draft prep lists and orders. Walter asks before it acts.</p>
          <div className="field-facts">
            <p><strong>3</strong> pilot restaurants</p>
            <p><strong>30%</strong> less food waste at pilots</p>
          </div>
          <a className="field-text-link" href="https://www.plate8.io/" target="_blank" rel="noreferrer">Visit Plate8 ↗</a>
        </div>
        <PortfolioFigure name="voice" playing={playing} />
      </section>
      <section className="field-project field-grid" aria-labelledby="oblivus-cloud-heading">
        <div>
          <p className="field-kicker">Previous work</p>
          <h2 id="oblivus-cloud-heading">Oblivus Cloud</h2>
          <p className="field-subtitle">Infrastructure for GPU cloud.</p>
          <p className="field-copy">I tuned database queries and automated deployments at Oblivus Cloud, a GPU cloud platform that GPUX later acquired.</p>
          <div className="field-facts">
            <p><strong>~25%</strong> lower API latency</p>
            <p><strong>&lt;15 min</strong> per deploy, down from hours</p>
          </div>
          <a className="field-text-link" href="#experience">More experience ↗</a>
        </div>
        <div className="field-figure"><PortfolioFigure name="rack" playing={playing} /></div>
      </section>
      <section id="about" className="field-about" aria-labelledby="about-heading">
        <div>
          <p className="field-kicker">A little about me</p>
          <h2 id="about-heading">Engineer.<br /><em>Founder.</em></h2>
          <p className="field-copy">I&apos;m Anubhav, a computer science graduate from <strong>IIT Jodhpur</strong>. I build AI systems and software that people can use in their day-to-day work.</p>
          <a className="field-text-link" href="#education">Education &amp; achievements ↗</a>
        </div>
        <dl className="field-about-practice" aria-label="Engineering focus">
          <div>
            <dt>Voice interfaces</dt>
            <dd>Multilingual voice workflows for restaurant inventory.</dd>
          </div>
          <div>
            <dt>Agent evaluation</dt>
            <dd>Repeatable tests for tool use and agent responses.</dd>
          </div>
          <div>
            <dt>Cloud infrastructure</dt>
            <dd>Faster database queries and automated deployments.</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
