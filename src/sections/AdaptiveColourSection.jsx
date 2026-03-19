import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../components/Motion";

const transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

function ModeToggle({ modes, activeId, onSelect }) {
  return (
    <div
      role="tablist"
      aria-label="Colour mode"
      className="inline-flex rounded-2xl border border-black/10 bg-paper-100/60 p-1"
    >
      {modes.map((m) => {
        const isActive = activeId === m.id;
        return (
          <button
            key={m.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${m.id}`}
            id={`tab-${m.id}`}
            onClick={() => onSelect(m.id)}
            className={[
              "relative rounded-xl px-5 py-2.5 text-[13px] font-medium tracking-tightish transition",
              isActive ? "text-ink-950" : "text-ink-600 hover:text-ink-800",
            ].join(" ")}
          >
            {isActive && (
              <motion.div
                layoutId="adaptive-mode-bg"
                className="absolute inset-0 rounded-xl bg-paper-200 shadow-sm"
                transition={transition}
                style={{ zIndex: -1 }}
              />
            )}
            {m.name}
          </button>
        );
      })}
    </div>
  );
}

function SwatchRow({ swatches }) {
  return (
    <div className="flex flex-wrap gap-3">
      {swatches.map((hex) => (
        <div key={hex} className="flex items-center gap-2">
          <div
            className="h-8 w-8 rounded-lg border border-black/10 shrink-0"
            style={{ background: hex }}
            aria-hidden="true"
          />
          <span className="text-[12px] text-ink-600 tabular-nums">{hex}</span>
        </div>
      ))}
    </div>
  );
}

function UIPreview({ mode }) {
  const { gradientFrom, gradientTo, accent } = mode;

  return (
    <div
      className="relative rounded-2xl border border-black/10 overflow-hidden shadow-card transition-all duration-500"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative min-h-[320px] flex flex-col">
        {/* Top nav */}
        <div className="flex items-center justify-between px-5 pt-5">
          <img
            src="/Images/Logo.svg"
            alt=""
            className="h-5 w-auto opacity-95"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-4 rounded-full bg-white/60" />
            <span className="h-0.5 w-4 rounded-full bg-white/60" />
            <span className="h-0.5 w-4 rounded-full bg-white/60" />
          </div>
        </div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-start justify-center px-5 py-8">
          <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight text-white">
            Welcome to Sonocea
          </h3>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: accent }}
          >
            Watch explainer video
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="currentColor"
                className="ml-0.5"
                aria-hidden="true"
              >
                <path d="M0 0v10l8-5-8-5z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Mission strip */}
        <div className="bg-white/95 backdrop-blur px-5 py-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-black/60">
            Our Mission
          </div>
          <div className="mt-2 h-px w-full bg-black/10" />
          <p className="mt-3 text-[11px] leading-5 text-black/80 line-clamp-2">
            Scientifically engineered sound to help you shift nervous system states — from stress to stillness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdaptiveColourSection({ content }) {
  const [activeId, setActiveId] = useState(content.modes[0].id);
  const activeMode = content.modes.find((m) => m.id === activeId) ?? content.modes[0];

  const bgTint =
    activeId === "clinical"
      ? "bg-paper-200"
      : activeId === "warmth"
        ? "bg-[#F8F6F2]"
        : "bg-[#F6F7F4]";

  return (
    <section
      id="adaptive-colour"
      className={`scroll-mt-24 py-20 md:py-28 transition-colors duration-500 ${bgTint}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12">
        <Reveal className="md:sticky md:top-28 self-start">
          <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">
            Product capability
          </div>
          <h2 className="mt-3 text-[28px] md:text-[34px] leading-[1.05] tracking-editorial text-ink-950">
            Adaptive Colour System
          </h2>
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <p className="max-w-[78ch] text-[15px] md:text-[16px] leading-7 text-ink-700">
              {content.intro}
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <ModeToggle modes={content.modes} activeId={activeId} onSelect={setActiveId} />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
            <div className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={transition}
                >
                  <h3 className="text-[22px] md:text-[26px] leading-[1.08] tracking-editorial text-ink-950">
                    {activeMode.name}
                  </h3>
                  <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-ink-700">
                    {activeMode.rationale}
                  </p>
                  <div className="mt-8">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">
                      Palette
                    </div>
                    <div className="mt-3">
                      <SwatchRow swatches={activeMode.swatches} />
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-black/10">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">
                      Best for
                    </div>
                    <p className="mt-2 text-[13px] leading-6 text-ink-700">
                      {activeMode.bestFor}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              key={`preview-${activeId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...transition, delay: 0.05 }}
              className="w-full max-w-[300px] lg:max-w-none"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600 mb-3">
                UI preview
              </div>
              <UIPreview mode={activeMode} />
            </motion.div>
          </div>

          <Reveal className="mt-14 pt-8 border-t border-black/8">
            <p className="text-[13px] leading-6 text-ink-600 italic max-w-[72ch]">
              {content.microcopy}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
