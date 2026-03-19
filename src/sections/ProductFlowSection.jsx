import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSystem } from "../context/SystemContext";
import { Reveal } from "../components/Motion";

const ACCENT_BY_INDEX = ["#3A39FF", "#4FD6BE", "#B9856E", "#6C857A"];

function PhoneMock({ image, accent, stepIndex }) {
  return (
    <motion.div
      layout
      className="relative mx-auto w-[260px] sm:w-[300px] md:w-[320px]"
      initial={false}
      transition={{ type: "spring", damping: 28, stiffness: 300 }}
    >
      <div className="rounded-[34px] border border-black/10 bg-paper-100/80 p-3 shadow-[0_24px_64px_-12px_rgba(0,0,0,.15)]">
        <div className="rounded-[28px] border border-black/10 overflow-hidden bg-paper-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
            <div className="h-1.5 w-8 rounded-full bg-black/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-black/10" />
          </div>
          <div className="aspect-[9/19] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={stepIndex}
                src={image}
                alt=""
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full object-cover object-top absolute inset-0"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductFlowSection({ content }) {
  const { selectedColourMode } = useSystem();
  const [stepIndex, setStepIndex] = useState(0);
  const step = content.screens[stepIndex] ?? content.screens[0];
  const accent = ACCENT_BY_INDEX[stepIndex] ?? ACCENT_BY_INDEX[0];

  const BG_BY_MODE = { clinical: "bg-paper-200", warmth: "bg-[#F8F6F2]", performance: "bg-[#F6F7F4]" };
  const sectionBg = BG_BY_MODE[selectedColourMode] ?? "bg-paper-200";

  return (
    <section id="flow" className={`scroll-mt-24 py-22 md:py-30 transition-colors duration-500 ${sectionBg}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Product</div>
            <h2 className="mt-3 text-[28px] md:text-[36px] leading-[1.04] tracking-editorial text-ink-950">
              Key flow concept
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-5 max-w-[55ch] text-[15px] leading-7 text-ink-700">{content.intro}</p>
          </Reveal>

          {/* Stepper */}
          <div className="mt-10 space-y-3">
            {content.screens.map((s, idx) => {
              const isActive = stepIndex === idx;
              return (
                <button
                  key={s.title}
                  onClick={() => setStepIndex(idx)}
                  className={`w-full text-left rounded-2xl border px-5 py-4 transition-all duration-300 ${
                    isActive ? "border-ink-200 bg-white shadow-soft" : "border-black/8 bg-transparent hover:border-black/15"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-medium shrink-0"
                      style={{
                        background: isActive ? accent : "transparent",
                        color: isActive ? "white" : "var(--ink-600)",
                        border: isActive ? "none" : "1px solid rgba(0,0,0,.15)",
                      }}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <span className={`block text-[15px] font-medium ${isActive ? "text-ink-950" : "text-ink-700"}`}>
                        {s.title}
                      </span>
                      <span className="block text-[13px] text-ink-600 mt-0.5">{s.caption}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-4">Flow preview</div>
            <PhoneMock image={step.image} accent={accent} stepIndex={stepIndex} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
