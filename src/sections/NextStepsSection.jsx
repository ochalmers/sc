import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function NextStepsSection({ content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px", amount: 0.3 });

  return (
    <section ref={ref} id="next" className="scroll-mt-24 py-24 md:py-32">
      <div className="max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Conclusion</div>
          <h2 className="mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[0.96] tracking-editorial text-ink-950">
            {content.headline}
          </h2>
        </motion.div>

        <div className="mt-16 space-y-10">
          {content.statements.map((s, idx) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="text-[22px] md:text-[28px] lg:text-[32px] leading-[1.12] tracking-editorial text-ink-950">
                {s}
              </div>
              <div className="mt-6 h-px bg-black/10" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 max-w-[65ch] text-[15px] md:text-[16px] leading-7 text-ink-600"
        >
          {content.closing}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-black/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[12px] text-ink-500">
            <div>© Sonocea · Design exploration showcase</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
