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

const LAYERS = [
  { name: "APPLICATION", index: "LAYER 3", y: 122 },
  { name: "AGENT", index: "LAYER 2", y: 237 },
  { name: "INFRASTRUCTURE", index: "LAYER 1", y: 352 }
];

export function AgentFigure({ playing }: { playing: boolean }) {
  const figure = usePointerFigure();
  return <button ref={figure.ref} type="button" className={`diagram agent-diagram ${playing ? "is-playing" : ""} ${figure.active ? "is-active" : ""}`} onPointerMove={figure.move} onPointerLeave={figure.leave} onClick={figure.cycle} onBlur={figure.leave} aria-label="Explore application, agent and infrastructure layers. Move the pointer or press to change the layers.">
    <svg viewBox="0 0 560 520" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <g className="diagram-guides" strokeDasharray="4 5"><path d="M170 180v220M490 180v220M170 180l160-80 160 80M170 400l160 80 160-80"/><path d="M330 100v380M140 275l190 95 190-95"/></g>
      <g className="diagram-labels" stroke="none">
        {LAYERS.map(layer => <g key={layer.name}>
          <text x="16" y={layer.y - 3}>{layer.name}</text>
          <text x="16" y={layer.y + 9}>({layer.index})</text>
        </g>)}
      </g>
      <g className="diagram-guides" strokeDasharray="3 4">
        {LAYERS.map(layer => <g key={layer.name}>
          <path d={`M118 ${layer.y}h40`} />
          <circle cx="163" cy={layer.y} r="2" fill="currentColor" stroke="none" />
        </g>)}
      </g>
      <g className="agent-layer agent-bottom">
        <path className="diagram-surface" d="M170 352 330 274 490 352 330 430Z"/><path d="M170 352v13l160 78 160-78v-13M330 430v13"/>
        <ellipse cx="262" cy="346" rx="25" ry="12"/><path d="M237 346v24c0 7 11 12 25 12s25-5 25-12v-24M237 358c0 7 11 12 25 12s25-5 25-12"/>
        <path d="M289 360l14 7 12-6M289 366l14 7 12-6M289 360v6M315 367v6"/>
        <path d="m352 340 20-10 20 10-20 10z m0 0v20l20 10v-20m20-10v20l-20 10"/>
        <path d="m326 358 18-9 18 9-18 9z m0 0v18l18 9v-18m18-9v18l-18 9"/>
        <path d="m374 358 18-9 18 9-18 9z m0 0v18l18 9v-18m18-9v18l-18 9"/>
      </g>
      <g className="agent-layer agent-middle">
        <path className="diagram-surface" d="M170 237 330 159 490 237 330 315Z"/><path d="M170 237v13l160 78 160-78v-13M330 315v13"/>
        <path d="m295 230 35-17 35 17-35 17z m0 0v28l35 17v-28m35-17v28l-35 17"/>
        <path d="m221 239 25-12 25 12-25 12zm0 0v20l25 12v-20m25-12v20l-25 12"/>
        <path d="m389 239 25-12 25 12-25 12zm0 0v20l25 12v-20m25-12v20l-25 12"/>
        <path d="M262 246l14 7 12-6M262 252l14 7 12-6M262 246v6M288 247v6"/>
        <path d="M352 246l14 7 12-6M352 252l14 7 12-6M352 246v6M378 247v6"/>
      </g>
      <g className="agent-layer agent-top">
        <path className="diagram-surface" d="M170 122 330 44 490 122 330 200Z"/><path d="M170 122v13l160 78 160-78v-13M330 200v13"/>
        <path d="m268 126 62-30 62 30-62 31z m-4 8 66 33 66-33"/>
        <path d="m280 138v20M330 163v20M380 138v20"/>
        <path d="m310 122 18-9 28 14-18 9z m0 0v3l18 9 18-9v-3M328 113l5-21 27 13-5 21z"/>
        <path d="m240 150 18-9 18 9-18 9z m18 9v10m0 0-10 5m10-5 10 5m-10-5v6M240 150v-16l8-4v16l-8 4"/>
        <path d="m225 100 12-6 12 6-12 6z m0 0v8l12 6 12-6v-8M237 94c-2-8-7-11-11-11m11 11c0-9 4-12 8-13m-8 13c-6-6-5-11-3-14m3 14c6-5 10-6 12-5"/>
        <path d="M400 118v-40l-55-27v40m0-40 7-4 55 27-7 4m0 0 7-4v40"/>
      </g>
    </svg>
  </button>;
}

export function VoiceFigure({ playing }: { playing: boolean }) {
  const figure = usePointerFigure();
  return <button ref={figure.ref} type="button" className={`diagram voice-diagram ${playing ? "is-playing" : ""} ${figure.active ? "is-active" : ""}`} onPointerMove={figure.move} onPointerLeave={figure.leave} onClick={figure.cycle} onBlur={figure.leave} aria-label="Explore the voice console. Move the pointer or press to move the microphone and controls.">
    <svg viewBox="0 0 500 400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <g className="diagram-guides" strokeDasharray="4 5"><path d="M53 285 248 184 454 278 258 380zM80 171v151m341-133v124M53 285l-16 8m417-15 17 8"/></g>
      <path className="diagram-surface" d="M75 268 255 374 435 190 255 84Z"/>
      <path d="M75 268 255 374v18L75 286Z M255 374 435 190v78L255 392Z"/>
      <path d="M69 286v11a8 4 0 0 0 16 0v-11M247 392v11a8 4 0 0 0 16 0v-11M427 268v11a8 4 0 0 0 16 0v-11"/>
      <ellipse cx="130" cy="271" rx="6" ry="3"/><ellipse cx="157" cy="287" rx="6" ry="3"/><ellipse cx="184" cy="303" rx="6" ry="3"/>
      <g className="voice-dial"><ellipse cx="250" cy="240" rx="24" ry="12"/><path d="M226 240v10c0 7 11 12 24 12s24-5 24-12v-10M250 233v7l6 3"/></g>
      <path d="M300 238l45-46M314 249l45-46M328 260l45-46M342 271l45-46" opacity=".65"/>
      <g className="voice-microphone">
        <g transform="rotate(16 185 170)">
          <rect className="diagram-surface" x="164" y="86" width="42" height="88" rx="21"/>
          <path d="M170 104h30m-30 8h30m-30 8h30m-30 8h30m-30 8h30M176 92v52m18-56v60m18-52v52" opacity=".55"/>
          <path d="M163 148v16c0 12 10 21 22 21s22-9 22-21v-16"/>
          <circle cx="163" cy="148" r="4"/><circle cx="207" cy="148" r="4"/>
          <path d="M185 185v20"/>
        </g>
      </g>
      <path d="M435 264c34 4 52 20 44 36-7 14-30 14-36 4-5-9 4-18 14-16"/>
    </svg>
  </button>;
}

const TRAYS = [
  { y: 168, depth: 58, className: "rack-tray-1" },
  { y: 224, depth: 92, className: "rack-tray-2" },
  { y: 280, depth: 70, className: "rack-tray-3" }
];

function trayPaths(slotY: number, depth: number) {
  const ax = 184, bx = 280, h = 26;
  const ay = slotY + 18, by = slotY + 66;
  const sx = -depth * 0.894, sy = depth * 0.447;
  const top = `M${ax} ${ay} L${bx} ${by} L${bx + sx} ${by + sy} L${ax + sx} ${ay + sy}Z`;
  const end = `M${ax + sx} ${ay + sy} L${bx + sx} ${by + sy} v${h} L${ax + sx} ${ay + sy + h}Z`;
  const side = `M${bx} ${by} L${bx + sx} ${by + sy} v${h} L${bx} ${by + h}Z`;
  const grille = [0.22, 0.42, 0.62].map(f => `M${ax + sx + 14} ${ay + sy + h * f + 4} l64 32`).join("");
  const handle = `M${ax + sx + 40} ${ay + sy + h * 0.82} l20 10`;
  return { top, end, side, lines: `${grille} ${handle}` };
}

export function RackFigure({ playing }: { playing: boolean }) {
  const figure = usePointerFigure();
  const topDots: { x: number; y: number }[] = [];
  for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) {
    topDots.push({ x: 300 + (i / 7) * 152 - (j / 7) * 152, y: 58 + (i / 7) * 76 + (j / 7) * 76 });
  }
  const sideDots: { x: number; y: number }[] = [];
  for (let i = 1; i <= 5; i++) for (let j = 1; j <= 7; j++) {
    sideDots.push({ x: 300 + (i / 6) * 152, y: 210 - (i / 6) * 76 + (j / 8) * 196 });
  }
  return <button ref={figure.ref} type="button" className={`diagram rack-diagram ${playing ? "is-playing" : ""} ${figure.active ? "is-active" : ""}`} onPointerMove={figure.move} onPointerLeave={figure.leave} onClick={figure.cycle} onBlur={figure.leave} aria-label="A server rack with three sliding trays. Move the pointer or press to slide the trays.">
    <svg viewBox="0 0 500 430" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <g className="diagram-guides" strokeDasharray="4 5"><path d="M148 96v268M452 96v268M110 115 300 20l190 95M110 311 300 406l190-95"/></g>
      <path className="diagram-surface" d="M300 58 452 134 300 210 148 134Z"/>
      <path d="M300 210 452 134v196L300 406Z M148 134 300 210v196L148 330Z"/>
      <g fill="currentColor" stroke="none" opacity=".5">
        {topDots.map((d, i) => <circle key={`t${i}`} cx={d.x} cy={d.y} r="1" />)}
        {sideDots.map((d, i) => <circle key={`s${i}`} cx={d.x} cy={d.y} r="1" />)}
      </g>
      <path d="M172 158 288 216v168L172 326Z" opacity=".45"/>
      {TRAYS.map(tray => <path key={`slot${tray.className}`} d={`M184 ${tray.y + 20} L280 ${tray.y + 68} v30 L184 ${tray.y + 50}Z`} opacity=".3" />)}
      {TRAYS.map(tray => {
        const p = trayPaths(tray.y, tray.depth);
        return <g key={tray.className} className={`rack-tray ${tray.className}`}>
          <path className="diagram-surface" d={p.top} />
          <path className="diagram-surface" d={p.end} />
          <path className="diagram-surface" d={p.side} />
          <path d={p.lines} opacity=".7" />
        </g>;
      })}
    </svg>
  </button>;
}
