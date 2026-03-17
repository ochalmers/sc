import { Reveal } from "../components/Motion";

function PersonaCard({ p }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl bg-black/5">
        <div className="relative aspect-[4/5]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />
          <img
            src={p.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover grayscale-[10%] contrast-[1.02] saturate-[0.9]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-7">
        <div className="text-[18px] md:text-[20px] tracking-editorial text-ink-950">{p.title}</div>
        <div className="mt-2 text-[13px] md:text-[14px] leading-6 text-ink-700 max-w-[58ch]">
          {p.descriptor}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 text-[13px] leading-6 text-ink-700">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">Examples include</div>
            <ul className="mt-2 space-y-1">
              {p.examples.map((e) => (
                <li key={e} className="text-ink-700">
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">Brand interpretation</div>
              <div className="mt-2">{p.brand}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">Product implications</div>
              <div className="mt-2">{p.product}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PersonaSection({ content }) {
  return (
    <section id="personas" className="scroll-mt-24 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12">
        <Reveal className="md:sticky md:top-28 self-start">
          <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">Personas</div>
          <h2 className="mt-3 text-[28px] md:text-[34px] leading-[1.05] tracking-editorial text-ink-950">
            Primary Personas
          </h2>
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <p className="max-w-[78ch] text-[15px] md:text-[16px] leading-7 text-ink-700">
              {content.intro}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {content.cards.map((p, idx) => (
              <Reveal key={p.title} delay={0.04 * idx}>
                <PersonaCard p={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-18 md:mt-22">
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

