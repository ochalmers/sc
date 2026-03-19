import { motion, AnimatePresence } from "framer-motion";
import { useSystem } from "../context/SystemContext";
import { Reveal } from "../components/Motion";
import AppMock from "../components/AppMock";

const transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

const BG_BY_MODE = {
  clinical: "#F7F6F3",
  warmth: "#F8F6F2",
  performance: "#F6F7F4",
};

export default function AdaptiveColourSection({ content }) {
  const { selectedColourMode, selectColourMode } = useSystem();
  const activeMode = content.modes.find((m) => m.id === selectedColourMode) ?? content.modes[0];
  const bg = BG_BY_MODE[selectedColourMode] ?? BG_BY_MODE.clinical;

  return (
    <motion.section
      id="adaptive-colour"
      layout
      className="scroll-mt-24 py-20 md:py-28 transition-colors duration-500"
      style={{ background: bg }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 min-w-0">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Product capability</div>
            <h2 className="mt-3 text-[28px] md:text-[36px] leading-[1.04] tracking-editorial text-ink-950">
              Adaptive Colour System
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-5 max-w-[60ch] text-[15px] leading-7 text-ink-700">{content.intro}</p>
          </Reveal>

          {/* Mode selector */}
          <div className="mt-10 space-y-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500">Select mode</div>
            <div
              role="tablist"
              aria-label="Colour mode"
              className="flex flex-col gap-2"
            >
              {content.modes.map((m) => {
                const isActive = selectedColourMode === m.id;
                return (
                  <button
                    key={m.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectColourMode(m.id)}
                    className={`w-full text-left rounded-2xl border px-5 py-4 transition-all duration-300 ${
                      isActive
                        ? "border-ink-200 bg-white shadow-soft"
                        : "border-black/8 bg-transparent hover:border-black/15 hover:bg-black/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className={`text-[15px] font-medium tracking-tight ${isActive ? "text-ink-950" : "text-ink-700"}`}>
                        {m.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="adaptive-mode-indicator"
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ background: m.accent }}
                          transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        />
                      )}
                    </div>
                    <p className="mt-2 text-[13px] leading-6 text-ink-600">{m.rationale}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <Reveal className="mt-10">
            <p className="text-[13px] leading-6 text-ink-500 italic max-w-[55ch]">{content.microcopy}</p>
          </Reveal>
        </div>

        {/* Large app preview - primary feature */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-end">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-4">Live preview</div>
            <motion.div
              key={selectedColourMode}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transition}
              className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[460px]"
            >
              <AppMock mode={activeMode} size="hero" showWaveform />
            </motion.div>
          </Reveal>

          {/* Palette swatches */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`swatches-${selectedColourMode}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-end"
            >
              {activeMode.swatches.map((hex, i) => (
                <motion.div
                  key={hex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-2"
                >
                  <div
                    className="h-10 w-10 rounded-xl border border-black/10 shrink-0"
                    style={{ background: hex }}
                  />
                  <span className="text-[11px] text-ink-600 tabular-nums hidden sm:inline">{hex}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
