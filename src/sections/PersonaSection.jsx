import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../components/Motion";

function PersonaPanel({ p }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.5, 0.88, 1], [0, 1, 1, 1, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      className="min-h-screen w-full flex items-center justify-center py-16 px-5 md:px-12"
    >
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] max-h-[75vh] rounded-2xl overflow-hidden bg-black/5">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50" />
          <img
            src={p.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center grayscale-[10%] contrast-[1.02] saturate-[0.9]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">Persona</div>
          <h3 className="mt-3 text-[36px] md:text-[48px] leading-[0.98] tracking-editorial text-ink-950">
            {p.title}
          </h3>
          <p className="mt-5 text-[16px] md:text-[18px] leading-7 text-ink-700 max-w-[52ch]">
            {p.descriptor}
          </p>

          <div className="mt-10 space-y-8 text-[14px] md:text-[15px] leading-7 text-ink-700">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">Examples include</div>
              <ul className="mt-3 space-y-1.5">
                {p.examples.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">Brand interpretation</div>
                <p className="mt-2">{p.brand}</p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">Product implications</div>
                <p className="mt-2">{p.product}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function PersonaSection({ content }) {
  return (
    <section id="personas" className="scroll-mt-24 overflow-x-hidden">
      {/* Intro block */}
      <div className="py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12">
          <Reveal className="md:sticky md:top-28 self-start">
            <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">Personas</div>
            <h2 className="mt-3 text-[28px] md:text-[34px] leading-[1.05] tracking-editorial text-ink-950">
              Primary Personas
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-[78ch] text-[15px] md:text-[16px] leading-7 text-ink-700">
              {content.intro}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-viewport persona panels */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        {content.cards.map((p) => (
          <PersonaPanel key={p.title} p={p} />
        ))}
      </div>

      {/* Adoption callout */}
      <div className="py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12">
          <div />
          <Reveal>
            <div className="pt-10 border-t border-black/10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">
                    {content.adoptionCallout.title}
                  </div>
                  <div className="mt-3 text-[16px] md:text-[18px] tracking-tightish text-ink-950">
                    Supporting adoption contexts
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.adoptionCallout.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-black/10 bg-paper-100/60 px-4 py-2 text-[12px] text-ink-800"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

