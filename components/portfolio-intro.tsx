"use client";

import { Cabinet, Exploded } from "@lucasmarkes/hairline/react";
import { profileData } from "@/data/profile";

function VoiceConsole() {
  return (
    <div className="voice-figure" aria-label="A line drawing of a microphone and voice console" role="img">
      <svg viewBox="0 0 400 320" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M48 218 180 147 350 214 218 287Z M48 218v23l170 67 132-71v-23 M218 287v21" />
          <path d="m64 218 117-62 151 59-115 62Z" opacity=".45" />
          <ellipse cx="235" cy="230" rx="19" ry="9" /><path d="M216 230v8c0 5 9 9 19 9s19-4 19-9v-8" />
          <path d="m92 222 13-7 17 7-13 7z m30 12 13-7 17 7-13 7z m30 12 13-7 17 7-13 7z" />
          <g className="voice-mic"><path d="M190 155V93m-26-24v35c0 17 12 31 26 31s26-14 26-31V69"/><rect x="173" y="34" width="34" height="82" rx="17"/><path d="M179 53h22m-22 8h22m-22 8h22m-22 8h22m-22 8h22m-22 8h22"/><ellipse cx="190" cy="158" rx="24" ry="9"/></g>
          <path d="m258 177 45 18m-41-24 45 18m-42-24 46 18" opacity=".55"/>
        </g>
      </svg>
    </div>
  );
}

export default function PortfolioIntro() {
  return (
    <div className="field-guide">
      <header className="field-nav">
        <a href="#top" className="field-brand">Anubhav Tandon</a>
        <nav aria-label="Main navigation">
          <a href="#experience">Work</a><a href="#education">Education</a><a href="/projects">Projects</a><a href={profileData.resume} target="_blank" rel="noreferrer">Resume</a><a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="top" className="field-hero field-grid">
        <div>
          <p className="field-kicker">AI engineer / Founder / IIT Jodhpur CSE</p>
          <h1>AI systems,<br />built to <em>work.</em></h1>
          <p className="field-lead">Anubhav Tandon · AI engineer and founder of Plate8</p>
          <p className="field-copy">I build production AI agents, voice interfaces and the infrastructure behind them. B.Tech in Computer Science and Engineering, IIT Jodhpur &apos;26.</p>
          <div className="field-links"><a href="#experience">Explore my work <span>↗</span></a><a href="mailto:anubhavtandon6424@gmail.com">Get in touch <span>↗</span></a></div>
        </div>
        <div className="field-figure"><Exploded theme="light" aria-label="An application shown in layers; move the pointer to explore" /></div>
      </section>
      <section className="field-project field-grid" aria-labelledby="plate8-heading">
        <div><p className="field-kicker">01 / Current work</p><h2 id="plate8-heading">Plate8</h2><p className="field-subtitle">A voice agent for restaurant teams.</p><p className="field-copy">A conversational AI back-of-house agent, built for independent restaurants and small chains.</p><div className="field-facts"><p><strong>3</strong> pilot restaurants</p><p><strong>30%</strong> less food waste at pilots</p></div><a className="field-text-link" href="https://plate8.io" target="_blank" rel="noreferrer">Visit Plate8 ↗</a></div>
        <VoiceConsole />
      </section>
      <section className="field-project field-grid" aria-labelledby="skyportal-heading">
        <div><p className="field-kicker">02 / Previous work</p><h2 id="skyportal-heading">Skyportal</h2><p className="field-subtitle">Infrastructure for GPU cloud.</p><p className="field-copy">Built backend systems at Skyportal.ai and Oblivus Cloud, a GPU cloud platform acquired by GPUX.</p><div className="field-facts"><p><strong>~25%</strong> lower API latency</p></div><a className="field-text-link" href="#experience">More experience ↗</a></div>
        <div className="field-figure"><Cabinet theme="light" aria-label="A server rack; move the pointer to explore its blades" /></div>
      </section>
    </div>
  );
}
