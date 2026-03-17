import { motion } from "framer-motion";
import { HeroWaveform } from "../components/Waveforms";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection({ content }) {
  return (
    <section id="intro" className="min-h-dvh flex items-stretch scroll-mt-20">
      <div className="w-full pt-14 md:pt-18 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="pt-8"
          >
            <motion.div variants={fade} className="text-[12px] uppercase tracking-[0.2em] text-ink-600">
              {content?.subtitle ?? "Design Direction"}
            </motion.div>
            <motion.h1
              variants={fade}
              className="mt-4 text-[44px] md:text-[66px] lg:text-[74px] leading-[0.98] tracking-editorial text-ink-950"
            >
              {content?.title ?? "Sonocea Brand Exploration"}
            </motion.h1>
            <motion.p
              variants={fade}
              className="mt-7 max-w-[74ch] text-[15px] md:text-[16px] leading-7 text-ink-700"
            >
              {content?.body}
            </motion.p>

            <motion.div variants={fade} className="mt-10 flex flex-wrap gap-2">
              {content?.anchors?.map((a) => (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className="rounded-full border border-black/10 bg-paper-100/60 px-4 py-2.5 text-[12px] text-ink-800 hover:bg-paper-100 transition"
                >
                  {a.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:pt-10">
            <div className="relative h-[320px] md:h-[380px] lg:h-[520px]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(60%_65%_at_50%_45%,black,transparent)]">
                  <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-accent-indigo blur-3xl opacity-50" />
                  <div className="absolute left-1/3 -top-28 h-80 w-80 rounded-full bg-accent-teal blur-3xl opacity-40" />
                  <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-accent-clay blur-3xl opacity-35" />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-[55%] md:h-[62%]">
                <HeroWaveform />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" aria-hidden="true" />
            </div>
            <div className="mt-4 text-xs text-ink-600 tracking-tightish">
              Calm waveform study · low amplitude · slow oscillation
            </div>
          </div>
        </div>

        <div className="mt-14 hidden lg:block">
          <div className="h-px bg-black/10" />
        </div>
      </div>
    </section>
  );
}

