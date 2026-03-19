import { motion, AnimatePresence } from "framer-motion";
import { useSystem } from "../context/SystemContext";
import AppMock from "../components/AppMock";
import { HeroWaveform } from "../components/Waveforms";

const BG_BY_MODE = {
  clinical: "#F7F6F3",
  warmth: "#F8F6F2",
  performance: "#F6F7F4",
};

export default function HeroSection({ content, colourModes, personas }) {
  const { selectedPersona, selectedColourMode, selectPersona, selectColourMode } = useSystem();
  const activeMode = colourModes.find((m) => m.id === selectedColourMode) ?? colourModes[0];
  const bg = BG_BY_MODE[selectedColourMode] ?? BG_BY_MODE.clinical;

  return (
    <motion.section
      id="intro"
      layout
      className="min-h-dvh flex flex-col items-center justify-center relative overflow-hidden scroll-mt-0"
      style={{ background: bg }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    >
      {/* Background waveform */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent_30%,black_70%)]">
          <HeroWaveform mode={selectedColourMode} />
        </div>
      </div>

      <div className="relative w-full max-w-site mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-ink-500 mb-4"
          >
            {content?.subtitle ?? "Design Direction 2026"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] leading-[0.96] tracking-editorial text-ink-950 max-w-[16ch] mx-auto"
          >
            {content?.title ?? "Sonocea Brand Exploration"}
          </motion.h1>
        </div>

        {/* Central app mock */}
        <motion.div
          layout
          className="mt-10 md:mt-14 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] mx-auto"
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
        >
          <AppMock mode={activeMode} size="hero" showWaveform />
        </motion.div>

        {/* Controls */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {/* Colour mode toggle */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-500">Colour mode</span>
            <div
              role="tablist"
              aria-label="Colour mode"
              className="inline-flex rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-1"
            >
              {colourModes.map((m) => {
                const isActive = selectedColourMode === m.id;
                return (
                  <button
                    key={m.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectColourMode(m.id)}
                    className="relative rounded-xl px-4 py-2.5 text-[12px] md:text-[13px] font-medium tracking-tight transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="hero-mode-bg"
                        className="absolute inset-0 rounded-xl bg-white shadow-sm"
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    <span className={isActive ? "text-ink-950" : "text-ink-600 hover:text-ink-800"}>{m.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Persona selector */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-500">Persona</span>
            <div
              role="tablist"
              aria-label="Persona"
              className="inline-flex rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-1 flex-wrap justify-center gap-1"
            >
              {personas?.map((p) => {
                const isActive = selectedPersona === p.id;
                return (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectPersona(p.id)}
                    className="relative rounded-xl px-4 py-2.5 text-[12px] md:text-[13px] font-medium tracking-tight transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="hero-persona-bg"
                        className="absolute inset-0 rounded-xl bg-white shadow-sm"
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    <span className={isActive ? "text-ink-950" : "text-ink-600 hover:text-ink-800"}>
                      {p.title.replace("The ", "")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Anchor links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-wrap justify-center gap-2"
        >
          {content?.anchors?.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="rounded-full border border-black/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-[11px] text-ink-700 hover:bg-white hover:text-ink-950 transition"
            >
              {a.label}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
