import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/Motion";
import { ExplorationWave } from "../components/Waveforms";

export default function WaveformSection({ content }) {
  const [activeVariant, setActiveVariant] = useState(content.waves[0].variant);

  return (
    <section
      id="motion"
      className="scroll-mt-24 py-24 md:py-32 bg-ink-950 text-paper-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-12">
        <Reveal className="md:sticky md:top-28 self-start">
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Soundwave & Motion</div>
          <h2 className="mt-3 text-[26px] md:text-[34px] leading-[1.04] tracking-editorial text-paper-200">
            Refined visual language
          </h2>
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <p className="max-w-[65ch] text-[15px] leading-7 text-white/70">{content.intro}</p>
          </Reveal>

          {/* Interactive waveform selector */}
          <div className="mt-14 space-y-8">
            {content.waves.map((w) => {
              const isActive = activeVariant === w.variant;
              return (
                <motion.button
                  key={w.variant}
                  onClick={() => setActiveVariant(w.variant)}
                  className={`w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "border-white/20 bg-white/10"
                      : "border-white/8 bg-transparent hover:border-white/15 hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className={`text-[16px] md:text-[18px] font-medium tracking-tight ${isActive ? "text-white" : "text-white/80"}`}>
                          {w.name}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="waveform-active"
                            className="h-1.5 w-1.5 rounded-full bg-accent-teal shrink-0"
                            transition={{ type: "spring", damping: 28, stiffness: 300 }}
                          />
                        )}
                      </div>
                      <p className="mt-2 text-[14px] leading-6 text-white/60">{w.description}</p>
                    </div>
                    <div
                      className={`h-[140px] md:h-[160px] rounded-xl border flex-shrink-0 transition-opacity ${
                        isActive ? "w-full md:w-[320px] border-white/15" : "w-full md:w-[200px] border-white/10 opacity-60"
                      }`}
                    >
                      <div className="h-full w-full p-4">
                        <ExplorationWave variant={w.variant} />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <Reveal className="mt-16">
            <div className="pt-10 border-t border-white/10">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Motion intent</div>
              <p className="mt-4 text-[14px] leading-7 text-white/60 max-w-[75ch]">
                Slow loops, low amplitude, thin strokes. Scientific signal language that scales from brand moments to subtle product integration.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
