"use client";

import { AgentFigure, VoiceFigure, RackFigure } from "@/components/portfolio-figures";
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
          <a href="#experience">Work</a><a href="#about">About</a><a href="#education">Education</a><a href="/projects">Projects</a><a href={profileData.resume} target="_blank" rel="noreferrer">Resume</a><a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="field-motion"><button type="button" onClick={() => setPlaying(!playing)}>{playing ? "Pause animations" : "Play animations"}</button></div>
      <section id="top" className="field-hero field-grid">
        <div>
          <p className="field-kicker">AI engineer / Founder / IIT Jodhpur CSE</p>
          <h1>AI systems,<br />built to <em>work.</em></h1>
          <p className="field-lead">Anubhav Tandon · AI engineer and founder of Plate8</p>
          <p className="field-copy">I build production AI agents, voice interfaces and the infrastructure behind them. B.Tech in Computer Science and Engineering, IIT Jodhpur &apos;26.</p>
          <div className="field-links"><a href="#experience">Explore my work <span>↗</span></a><a href="mailto:anubhavtandon6424@gmail.com">Get in touch <span>↗</span></a></div>
        </div>
        <div className="field-figure"><AgentFigure playing={playing} /></div>
      </section>
      <section className="field-project field-grid" aria-labelledby="plate8-heading">
        <div><p className="field-kicker">01 / Current work</p><h2 id="plate8-heading">Plate8</h2><p className="field-subtitle">A voice agent for restaurant teams.</p><p className="field-copy">A conversational AI back-of-house agent, built for independent restaurants and small chains.</p><div className="field-facts"><p><strong>3</strong> pilot restaurants</p><p><strong>30%</strong> less food waste at pilots</p></div><a className="field-text-link" href="https://plate8.io" target="_blank" rel="noreferrer">Visit Plate8 ↗</a></div>
        <VoiceFigure playing={playing} />
      </section>
      <section className="field-project field-grid" aria-labelledby="skyportal-heading">
        <div><p className="field-kicker">02 / Previous work</p><h2 id="skyportal-heading">Skyportal</h2><p className="field-subtitle">Infrastructure for GPU cloud.</p><p className="field-copy">Built backend systems at Skyportal.ai and Oblivus Cloud, a GPU cloud platform acquired by GPUX.</p><div className="field-facts"><p><strong>~25%</strong> lower API latency</p></div><a className="field-text-link" href="#experience">More experience ↗</a></div>
        <div className="field-figure"><RackFigure playing={playing} /></div>
      </section>
      <section id="about" className="field-about" aria-labelledby="about-heading">
        <div className="field-about-copy"><p className="field-kicker">A little about me</p><h2 id="about-heading">Engineer.<br /><em>Founder.</em></h2><p className="field-copy">I&apos;m Anubhav, a computer science graduate from IIT Jodhpur. I build AI systems and software that people can use in their day-to-day work.</p><a className="field-text-link" href="#education">Education &amp; achievements ↗</a></div>
        <div className="field-photos"><Image src="/photos/anubhav-outdoors.webp" alt="Anubhav Tandon sitting among trees" width={1200} height={1600} sizes="(max-width: 700px) 88vw, 42vw" /></div>
      </section>
    </div>
  );
}
