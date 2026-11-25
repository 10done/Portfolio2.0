"use client";

import { useEffect, useId, useRef, useState } from "react";
import HL from "@/lib/hairline/kernel.mjs";

type Motion = [number, number, number?];
type Part = { label: string; point: [number, number]; outline: string; motion: Motion; pivot?: [number, number] };
type Artwork = { title: string; frame: [number, number, number, number]; parts: Part[] };

const artwork: Record<"agent" | "voice" | "rack", Artwork> = {
  agent: {
    title: "Agent workspace",
    frame: [511, 96, 481, 564],
    parts: [
      { label: "Application layer", point: [791, 244], outline: "M627 233 690 197 692 149 751 148 782 116 908 177 908 233 939 248 939 265 794 343 627 248Z", motion: [0, -21] },
      { label: "Agent layer", point: [791, 373], outline: "M627 365 709 319 755 341 789 332 813 339 946 385 946 402 799 484 627 384Z", motion: [17, -3] },
      { label: "Infrastructure layer", point: [791, 512], outline: "M626 501 693 462 724 455 753 468 789 449 943 515 943 533 795 615 626 518Z", motion: [0, 16] },
    ],
  },
  voice: {
    title: "Voice console",
    frame: [525, 704, 470, 339],
    parts: [
      { label: "Microphone", point: [690, 782], outline: "M632 787 649 781 668 735Q685 700 716 714T742 762L721 818 705 847 678 859 646 845 630 817Z", motion: [0, 0, -11], pivot: [682, 808] },
      { label: "Gain dial", point: [784, 920], outline: "M750 927Q754 890 784 891T819 931Q818 955 784 956T750 927Z", motion: [0, -9] },
      { label: "Console buttons", point: [677, 936], outline: "M637 924 650 915 718 944 718 956 701 956 636 934Z", motion: [0, 3] },
    ],
  },
  rack: {
    title: "Server rack",
    frame: [524, 1068, 471, 352],
    parts: [
      { label: "Top server blade", point: [667, 1237], outline: "M581 1221 653 1183 730 1188 772 1206 771 1227 683 1271 581 1245Z", motion: [-20, 10] },
      { label: "Middle server blade", point: [663, 1292], outline: "M558 1281 601 1256 683 1275 770 1233 770 1283 675 1334 558 1307Z", motion: [-20, 10] },
      { label: "Bottom server blade", point: [658, 1347], outline: "M554 1331 582 1316 676 1340 768 1292 767 1338 674 1387 554 1357Z", motion: [-20, 10] },
    ],
  },
};

export function PortfolioFigure({ name, playing }: {
  name: keyof typeof artwork;
  playing: boolean;
}) {
  const { title, frame, parts } = artwork[name];
  const [x, y, width, height] = frame;
  const id = useId();
  const stage = useRef<HTMLButtonElement>(null);
  const movingParts = useRef<(SVGGElement | null)[]>([]);
  const selectPart = useRef<(index: number) => void>(() => {});
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const groups = movingParts.current.slice();
    const springs = parts.map(() => HL.spring(0, { k: 230, c: 30 }));
    const clock = HL.register(element, (seconds) => {
      let moving = false;
      springs.forEach((spring, index) => {
        const previous = spring.x;
        if (HL.stepS(spring, seconds)) moving = true;
        if (previous === spring.x) return;
        const { motion: [dx, dy, angle = 0], pivot: [px, py] = [0, 0] } = parts[index];
        const amount = spring.x;
        groups[index]?.setAttribute("transform",
          `translate(${dx * amount} ${dy * amount}) rotate(${angle * amount} ${px} ${py})`);
      });
      return moving;
    });

    let active = -1;
    const select = (index: number) => {
      if (active === index) return;
      active = index;
      springs.forEach((spring, i) => { spring.t = i === index ? 1 : 0; });
      clock.wake();
    };
    selectPart.current = select;

    const stops = parts.map(({ point: [px, py] }): [number, number] =>
      [(px - x) / width * 400, (py - y) / height * 320]);
    const release = HL.pointer(element, {
      move([px, py]) {
        const distance = ([sx, sy]: [number, number]) => Math.hypot(px - sx, py - sy);
        const nearest = stops.reduce((best, point, i) =>
          distance(point) < distance(stops[best]) ? i : best, 0);
        if (active < 0 || distance(stops[nearest]) + 7 < distance(stops[active])) {
          select(nearest);
        }
      },
      leave: () => select(-1),
    });
    const tour = playing ? HL.tour(element, [...stops, null]) : undefined;

    return () => {
      tour?.stop();
      release();
      clock.unregister();
      selectPart.current = () => {};
      groups.forEach(part => part?.removeAttribute("transform"));
    };
  }, [parts, playing, x, y, width, height]);

  return (
    <button
      ref={stage}
      type="button"
      className="mockup-figure"
      aria-label={`${title}. Select to move the next part.`}
      onClick={event => {
        if (event.detail !== 0) return;
        const next = (selected + 1) % parts.length;
        setSelected(next);
        selectPart.current(next);
      }}
      onBlur={() => {
        setSelected(-1);
        selectPart.current(-1);
      }}
    >
      <svg viewBox={frame.join(" ")} width={width} height={height} aria-hidden="true">
        <defs>
          <image id={`${id}-art`} href={`/figures/${name === "agent" ? "agent-workspace" : name === "voice" ? "voice-console" : "server-rack"}.webp`}
            x={x} y={y} width={width} height={height} />
          <mask id={`${id}-stationary`} maskUnits="userSpaceOnUse" x={x} y={y} width={width} height={height}>
            <rect x={x} y={y} width={width} height={height} fill="white" />
            {parts.map(part => <path key={part.label} d={part.outline} fill="black" />)}
          </mask>
          {parts.map((part, i) => (
            <clipPath id={`${id}-part-${i}`} key={part.label}><path d={part.outline} /></clipPath>
          ))}
        </defs>
        <use href={`#${id}-art`} mask={`url(#${id}-stationary)`} />
        {parts.map((part, i) => (
          <g key={part.label} ref={node => { movingParts.current[i] = node; }}>
            <use href={`#${id}-art`} clipPath={`url(#${id}-part-${i})`} />
          </g>
        ))}
      </svg>
      <span className="sr-only" aria-live="polite">{parts[selected]?.label}</span>
    </button>
  );
}
