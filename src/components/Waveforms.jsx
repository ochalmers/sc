import { motion, useReducedMotion } from "framer-motion";

function buildWavePath({ points = 60, amp = 10, freq = 2.2, phase = 0, bias = 50 }) {
  const pts = [];
  for (let i = 0; i < points; i += 1) {
    const t = i / (points - 1);
    const x = t * 100;
    const y = bias + Math.sin((t * Math.PI * 2 * freq) + phase) * amp;
    pts.push({ x, y });
  }
  return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ");
}

export function HeroWaveform() {
  const reduced = useReducedMotion();

  const pathA = buildWavePath({ amp: 8, freq: 1.6, phase: 0, bias: 50 });
  const pathB = buildWavePath({ amp: 10, freq: 1.6, phase: 0.9, bias: 50 });
  const pathC = buildWavePath({ amp: 6, freq: 1.6, phase: 1.6, bias: 50 });

  const animate = reduced
    ? {}
    : {
        y: [0, -2, 0, 2, 0],
        opacity: [0.65, 0.8, 0.65],
      };

  const transition = reduced
    ? {}
    : { duration: 9.5, repeat: Infinity, ease: "easeInOut" };

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id="inkEdge" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(18,18,18,0)" />
          <stop offset="0.12" stopColor="rgba(18,18,18,.55)" />
          <stop offset="0.5" stopColor="rgba(18,18,18,.75)" />
          <stop offset="0.88" stopColor="rgba(18,18,18,.55)" />
          <stop offset="1" stopColor="rgba(18,18,18,0)" />
        </linearGradient>
      </defs>

      <motion.path
        d={pathA}
        fill="none"
        stroke="url(#inkEdge)"
        strokeWidth="0.85"
        initial={{ opacity: 0, pathLength: 0.1 }}
        animate={reduced ? { opacity: 0.7, pathLength: 1 } : { opacity: 0.7, pathLength: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d={pathB}
        fill="none"
        stroke="rgba(18,18,18,.35)"
        strokeWidth="0.7"
        animate={animate}
        transition={transition}
      />
      <motion.path
        d={pathC}
        fill="none"
        stroke="rgba(18,18,18,.22)"
        strokeWidth="0.7"
        animate={animate}
        transition={{ ...transition, duration: 12.5 }}
      />
    </svg>
  );
}

export function ExplorationWave({ variant }) {
  const reduced = useReducedMotion();

  const presets = {
    scientific: {
      amp: 7,
      freq: 2.8,
      lines: [
        { stroke: "rgba(247,246,243,.85)", w: 0.85, o: 0.75, phase: 0 },
        { stroke: "rgba(247,246,243,.35)", w: 0.6, o: 0.55, phase: 0.8 },
      ],
      speed: 10.5,
    },
    organic: {
      amp: 10,
      freq: 1.6,
      lines: [
        { stroke: "rgba(247,246,243,.82)", w: 0.9, o: 0.72, phase: 0 },
        { stroke: "rgba(79,214,190,.26)", w: 0.8, o: 0.55, phase: 1.1 },
      ],
      speed: 13.5,
    },
    pulse: {
      amp: 5,
      freq: 1.1,
      lines: [
        { stroke: "rgba(247,246,243,.75)", w: 0.9, o: 0.7, phase: 0 },
        { stroke: "rgba(58,57,255,.18)", w: 0.9, o: 0.55, phase: 0.5 },
      ],
      speed: 9.5,
    },
  };

  const p = presets[variant] ?? presets.scientific;

  const path0 = buildWavePath({ amp: p.amp, freq: p.freq, phase: 0, bias: 50 });
  const path1 = buildWavePath({ amp: p.amp * 0.9, freq: p.freq, phase: 0.9, bias: 50 });

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
      <motion.path
        d={path0}
        fill="none"
        stroke={p.lines[0].stroke}
        strokeWidth={p.lines[0].w}
        opacity={p.lines[0].o}
        animate={
          reduced
            ? undefined
            : {
                y: [0, -2, 0, 2, 0],
              }
        }
        transition={reduced ? undefined : { duration: p.speed, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d={path1}
        fill="none"
        stroke={p.lines[1].stroke}
        strokeWidth={p.lines[1].w}
        opacity={p.lines[1].o}
        animate={
          reduced
            ? undefined
            : {
                y: [0, 1.6, 0, -1.6, 0],
              }
        }
        transition={reduced ? undefined : { duration: p.speed * 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

