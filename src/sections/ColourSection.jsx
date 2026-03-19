import { Reveal } from "../components/Motion";

function Swatches({ swatches }) {
  return (
    <div className="flex flex-wrap gap-2">
      {swatches.map((c) => (
        <div key={c} className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full border border-black/10 shrink-0" style={{ background: c }} />
          <span className="text-[12px] text-ink-600 tabular-nums">{c}</span>
        </div>
      ))}
    </div>
  );
}

export default function ColourSection({ content }) {
  return (
    <section id="colour" className="scroll-mt-24 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12">
        <Reveal className="md:sticky md:top-28 self-start">
          <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Colour</div>
          <h2 className="mt-3 text-[24px] md:text-[28px] leading-[1.08] tracking-editorial text-ink-950">
            Palette directions
          </h2>
        </Reveal>
        <div className="min-w-0">
          <Reveal>
            <p className="max-w-[70ch] text-[14px] md:text-[15px] leading-7 text-ink-600">{content.intro}</p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            {content.directions.map((d, idx) => (
              <Reveal key={d.name} delay={0.04 * idx}>
                <div className="rounded-2xl border border-black/8 bg-paper-100/60 px-5 py-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-ink-500">{d.name}</div>
                  <div className="mt-3">
                    <Swatches swatches={d.swatches} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
