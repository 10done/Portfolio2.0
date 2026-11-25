"use client";

import { useRef, useState, type PointerEvent } from "react";

function usePointerFigure() {
  const ref = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);
  function move(event: PointerEvent<HTMLButtonElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", String(Math.max(-1, Math.min(1, (event.clientX - box.left) / box.width * 2 - 1))));
    event.currentTarget.style.setProperty("--y", String(Math.max(-1, Math.min(1, (event.clientY - box.top) / box.height * 2 - 1))));
    setActive(true);
  }
  function cycle() {
    const next = (step + 1) % 3;
    setStep(next);
    ref.current?.style.setProperty("--x", String(next - 1));
    ref.current?.style.setProperty("--y", String(1 - next));
    setActive(true);
  }
  return { ref, active, move, cycle, leave: () => setActive(false) };
}

export function AgentFigure({ playing }: { playing: boolean }) {
  const figure = usePointerFigure();
  return <button ref={figure.ref} type="button" className={`diagram agent-diagram ${playing ? "is-playing" : ""} ${figure.active ? "is-active" : ""}`} onPointerMove={figure.move} onPointerLeave={figure.leave} onClick={figure.cycle} onBlur={figure.leave} aria-label="Explore application, agent and infrastructure layers. Move the pointer or press to change the layers.">
    <svg viewBox="0 0 500 520" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <g className="diagram-guides" strokeDasharray="4 5"><path d="M85 180v220M415 180v220M85 180l165-80 165 80M85 400l165 80 165-80"/><path d="M250 100v380M60 275l190 95 190-95"/></g>
      <g className="agent-layer agent-bottom"><path className="diagram-surface" d="M90 352 250 274 410 352 250 430Z"/><path d="M90 352v13l160 78 160-78v-13M250 430v13"/><ellipse cx="185" cy="351" rx="25" ry="12"/><path d="M160 351v24c0 7 11 12 25 12s25-5 25-12v-24M160 363c0 7 11 12 25 12s25-5 25-12"/><path d="m272 352 25-12 25 12-25 12z m0 0v25l25 12v-25m25-12v25l-25 12m33-54 20-10 20 10-20 10z m0 0v20l20 10v-20m20-10v20l-20 10"/><path d="m210 370 22 10 32-16"/></g>
      <g className="agent-layer agent-middle"><path className="diagram-surface" d="M90 237 250 159 410 237 250 315Z"/><path d="M90 237v13l160 78 160-78v-13M250 315v13"/><path d="m215 230 35-17 35 17-35 17z m0 0v28l35 17v-28m35-17v28l-35 17M141 239l25-12 25 12-25 12zm0 0v20l25 12v-20m25-12v20l-25 12M309 239l25-12 25 12-25 12zm0 0v20l25 12v-20m25-12v20l-25 12"/><path d="m190 249 25-12m70 0 24 12"/></g>
      <g className="agent-layer agent-top"><path className="diagram-surface" d="M90 122 250 44 410 122 250 200Z"/><path d="M90 122v13l160 78 160-78v-13M250 200v13"/><path d="m167 126 79-38 79 38-79 39z m-9 10 88 43 88-43M205 107l11-36 76 37-46 22z M216 71l76 37M246 130v12m-39-23 40 19"/><path d="m147 130-14 7 32 16 15-8m-39-4v14l24 12v-14m0 14 15-8v-14"/><path d="M341 121v-40l-55-27v40m0-40 7-4 55 27-7 4m0 0 7-4v40"/></g>
    </svg>
  </button>;
}

export function VoiceFigure({ playing }: { playing: boolean }) {
  const figure = usePointerFigure();
  return <button ref={figure.ref} type="button" className={`diagram voice-diagram ${playing ? "is-playing" : ""} ${figure.active ? "is-active" : ""}`} onPointerMove={figure.move} onPointerLeave={figure.leave} onClick={figure.cycle} onBlur={figure.leave} aria-label="Explore the voice console. Move the pointer or press to move the microphone and controls.">
    <svg viewBox="0 0 500 400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <g className="diagram-guides" strokeDasharray="4 5"><path d="M53 285 248 184 454 278 258 380zM80 171v151m341-133v124M53 285l-16 8m417-15 17 8"/></g>
      <path className="diagram-surface" d="M55 272 249 174 450 268 254 370Z"/><path d="M55 272v23l199 94 196-99v-22M254 370v19"/><path d="M72 271 249 182l184 86-180 92z" opacity=".45"/>
      <path d="m93 280 22-11 22 10-22 12z m39 18 22-11 22 10-22 12z m39 18 22-11 22 10-22 12z"/>
      <g className="voice-dial"><ellipse cx="315" cy="284" rx="24" ry="12"/><path d="M291 284v10c0 7 11 12 24 12s24-5 24-12v-10M315 277v7l6 3"/></g>
      <path d="m323 226 63 29m-58-36 63 29m-58-36 63 29m-58-36 63 29" opacity=".65"/>
      <g className="voice-microphone"><ellipse cx="223" cy="199" rx="31" ry="14"/><path d="M223 198v-33M191 108v25c0 22 14 39 32 39s32-17 32-39v-25"/><rect className="diagram-surface" x="202" y="43" width="42" height="99" rx="21"/><path d="M210 68h26m-26 8h26m-26 8h26m-26 8h26m-26 8h26m-26 8h26m-26 8h26"/><path d="M193 104h-5v21h5m60-21h5v21h-5"/></g>
    </svg>
  </button>;
}
