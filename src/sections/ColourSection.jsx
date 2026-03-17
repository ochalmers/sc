import { Reveal } from "../components/Motion";

function Swatches({ swatches }) {
  return (
    <div className="flex flex-wrap gap-2">
      {swatches.map((c) => (
        <div key={c} className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full border border-black/10" style={{ background: c }} />
          <span className="text-[12px] text-ink-700">{c.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

function ModePanels({ swatches }) {
  const ink = swatches[0] ?? "#121212";
  const paper = swatches[1] ?? "#F7F6F3";
  const accent = swatches[2] ?? "#3A39FF";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-black/10 bg-paper-100/60 overflow-hidden">
        <div className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-ink-600">Light mode</div>
        <div className="px-5 pb-6">
          <div className="text-[16px] tracking-tightish text-ink-950">A calmer surface.</div>
          <div className="mt-2 text-[13px] leading-6 text-ink-700">
            Neutral base; restrained accents; consistent hierarchy.
          </div>
          <div className="mt-5 h-2 rounded-full bg-black/10 overflow-hidden">
            <div className="h-full w-2/3 rounded-full" style={{ background: accent, opacity: 0.45 }} />
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl border border-black/10 overflow-hidden"
        style={{ background: ink }}
      >
        <div className="px-5 py-4 text-[11px] uppercase tracking-[0.18em]" style={{ color: "rgba(247,246,243,.7)" }}>
          Dark mode
        </div>
        <div className="px-5 pb-6" style={{ color: paper }}>
          <div className="text-[16px] tracking-tightish" style={{ color: paper }}>
            Signal-led focus.
          </div>
          <div className="mt-2 text-[13px] leading-6" style={{ color: "rgba(247,246,243,.72)" }}>
            High legibility; calm contrast; accent used sparingly.
          </div>
          <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-2/3 rounded-full" style={{ background: accent, opacity: 0.7 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PalettePanel({ d, idx }) {
  const bg = d.swatches[1] ?? "#F7F6F3";
  const accentA = d.swatches[2] ?? "#3A39FF";
  const accentB = d.swatches[3] ?? "#4FD6BE";

  return (
    <Reveal delay={0.06 * idx}>
      <section className="relative overflow-hidden rounded-[28px] border border-black/10">
        <div className="absolute inset-0" style={{ background: bg }} />
        <div className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(55%_60%_at_70%_30%,black,transparent)]">
          <div className="absolute right-[-60px] top-[-80px] h-80 w-80 rounded-full blur-3xl" style={{ background: accentA }} />
          <div className="absolute right-[120px] top-[40px] h-72 w-72 rounded-full blur-3xl" style={{ background: accentB }} />
        </div>

        <div className="relative px-7 py-8 md:px-10 md:py-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="max-w-[70ch]">
              <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">Direction {idx + 1}</div>
              <h3 className="mt-3 text-[28px] md:text-[34px] leading-[1.04] tracking-editorial text-ink-950">
                {d.name}
              </h3>
              <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-ink-700">
                {d.rationale}
              </p>
            </div>

            <div className="w-full lg:max-w-[420px]">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">Palette</div>
              <div className="mt-4">
                <Swatches swatches={d.swatches} />
              </div>
              <div className="mt-7">
                <ModePanels swatches={d.swatches} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default function ColourSection({ content }) {
  return (
    <section id="colour" className="scroll-mt-24 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12">
        <Reveal className="md:sticky md:top-28 self-start">
          <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">Colour</div>
          <h2 className="mt-3 text-[28px] md:text-[34px] leading-[1.05] tracking-editorial text-ink-950">
            Colour System Exploration
          </h2>
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <p className="max-w-[80ch] text-[15px] md:text-[16px] leading-7 text-ink-700">
              {content.intro}
            </p>
          </Reveal>

          <div className="mt-14 space-y-10">
            {content.directions.map((d, idx) => (
              <PalettePanel key={d.name} d={d} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

