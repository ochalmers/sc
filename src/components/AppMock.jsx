import { motion } from "framer-motion";
import { HeroWaveform } from "./Waveforms";

const NOISE =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function AppMock({ mode, size = "default", className = "", showWaveform = false }) {
  const { gradientFrom, gradientTo, accent } = mode;

  const sizes = {
    sm: "min-h-[280px]",
    default: "min-h-[360px]",
    lg: "min-h-[420px]",
    hero: "min-h-[440px] md:min-h-[520px]",
  };

  return (
    <motion.div
      layout
      initial={false}
      className={`relative rounded-2xl md:rounded-3xl border border-black/[0.08] overflow-hidden shadow-[0_24px_64px_-12px_rgba(0,0,0,.12)] ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
      transition={{ type: "spring", damping: 28, stiffness: 300 }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE}")` }}
        aria-hidden="true"
      />

      <div className={`relative flex flex-col ${sizes[size] ?? sizes.default}`}>
        <div className="flex items-center justify-between px-5 pt-5 md:pt-6">
          <img
            src="/Images/Logo.svg"
            alt=""
            className="h-5 md:h-6 w-auto opacity-95"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-4 rounded-full bg-white/60" />
            <span className="h-0.5 w-4 rounded-full bg-white/60" />
            <span className="h-0.5 w-4 rounded-full bg-white/60" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-center px-5 py-6 md:py-10">
          <motion.h3
            key={`heading-${mode.id}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-[20px] md:text-[24px] lg:text-[28px] font-medium tracking-tight text-white"
          >
            Welcome to Sonocea
          </motion.h3>
          <motion.button
            key={`cta-${mode.id}`}
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
            style={{ background: accent }}
          >
            Watch explainer video
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor" className="ml-0.5" aria-hidden="true">
                <path d="M0 0v10l8-5-8-5z" />
              </svg>
            </span>
          </motion.button>

          {showWaveform && (
            <div className="absolute inset-x-0 bottom-0 h-[40%] opacity-50 [mask-image:linear-gradient(to_top,black,transparent)]">
              <HeroWaveform mode={mode.id} />
            </div>
          )}
        </div>

        <div className="bg-white/95 backdrop-blur px-5 py-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-black/60">Our Mission</div>
          <div className="mt-2 h-px w-full bg-black/10" />
          <p className="mt-3 text-[11px] leading-5 text-black/80 line-clamp-2">
            Scientifically engineered sound to help you shift nervous system states — from stress to stillness.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
