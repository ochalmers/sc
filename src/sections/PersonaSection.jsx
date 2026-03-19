import { motion, AnimatePresence } from "framer-motion";
import { useSystem } from "../context/SystemContext";
import { Reveal } from "../components/Motion";
import AppMock from "../components/AppMock";

export default function PersonaSection({ content }) {
  const { selectedPersona, selectedColourMode, selectPersona } = useSystem();
  const activePersona = content.cards.find((p) => p.id === selectedPersona) ?? content.cards[0];

  // Get colour mode from adaptiveColour - we need it passed in or from context
  const colourModes = content.colourModes ?? [];
  const activeMode = colourModes.find((m) => m.id === selectedColourMode) ?? colourModes[0];

  const BG_BY_MODE = { clinical: "bg-paper-200", warmth: "bg-[#F8F6F2]", performance: "bg-[#F6F7F4]" };
  const sectionBg = BG_BY_MODE[selectedColourMode] ?? "bg-paper-200";

  return (
    <motion.section
      id="personas"
      layout
      className={`scroll-mt-24 py-20 md:py-28 transition-colors duration-500 ${sectionBg}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-w-0">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Personas</div>
            <h2 className="mt-3 text-[28px] md:text-[36px] leading-[1.04] tracking-editorial text-ink-950">
              Who uses Sonocea
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-ink-700 max-w-[52ch]">{content.intro}</p>
          </Reveal>

          {/* Persona selector */}
          <div className="mt-10 space-y-2">
            {content.cards.map((p) => {
              const isActive = selectedPersona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => selectPersona(p.id)}
                  className={`w-full text-left rounded-2xl border px-5 py-4 transition-all duration-300 ${
                    isActive ? "border-ink-200 bg-white shadow-soft" : "border-black/8 bg-transparent hover:border-black/15 hover:bg-black/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`text-[15px] md:text-[16px] font-medium tracking-tight ${isActive ? "text-ink-950" : "text-ink-700"}`}>
                      {p.title}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="persona-indicator"
                        className="h-2 w-2 rounded-full bg-ink-950 shrink-0"
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                      />
                    )}
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-ink-600 line-clamp-2">{p.descriptor}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center lg:items-end">
          {/* App mock - responds to persona + colour */}
          {activeMode && (
            <motion.div
              key={`persona-mock-${selectedPersona}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[320px] md:max-w-[360px]"
            >
              <AppMock mode={activeMode} size="lg" />
            </motion.div>
          )}

          {/* Active persona detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPersona}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="mt-10 w-full max-w-[320px] md:max-w-[360px] lg:max-w-none"
            >
              <div className="rounded-2xl border border-black/8 bg-paper-100/60 px-5 py-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500">Selected</div>
                <h3 className="mt-2 text-[18px] md:text-[20px] font-medium tracking-tight text-ink-950">
                  {activePersona.title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-ink-700">{activePersona.brand}</p>
                <p className="mt-1 text-[13px] leading-6 text-ink-600">{activePersona.product}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Adoption callout */}
      <div className="mt-20 pt-12 border-t border-black/8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-500">{content.adoptionCallout.title}</div>
              <div className="mt-2 text-[14px] text-ink-700">{content.adoptionCallout.items.join(" · ")}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}
