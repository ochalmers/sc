import { Reveal } from "../components/Motion";

export default function NextStepsSection({ content }) {
  return (
    <section id="next" className="scroll-mt-24 py-22 md:py-30">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(200px,300px)] gap-12 lg:gap-20 items-start">
        <div className="min-w-0">
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">Conclusion</div>
            <h2 className="mt-4 text-[40px] md:text-[56px] leading-[0.98] tracking-editorial text-ink-950">
              {content.headline}
            </h2>
          </Reveal>

          <div className="mt-12 space-y-8">
            {content.statements.map((s, idx) => (
              <Reveal key={s} delay={0.05 * idx}>
                <div className="text-[22px] md:text-[28px] leading-[1.08] tracking-editorial text-ink-950">
                  {s}
                </div>
                <div className="mt-5 h-px bg-black/10" />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="max-w-[90ch] text-[15px] md:text-[16px] leading-7 text-ink-700">
              {content.closing}
            </p>
          </Reveal>

          <Reveal className="mt-18">
            <div className="h-px bg-black/10" />
            <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ink-600">
              <div>© Sonocea · Internal design exploration showcase</div>
              <div>Content + assets are editable via `src/content/siteContent.js` and `Images/`.</div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hidden lg:block">
          <div className="sticky top-28">
            <div className="text-[11px] uppercase tracking-[0.18em] text-ink-600">Share</div>
            <div className="mt-4 text-[13px] leading-6 text-ink-700">
              Designed to be scannable in leadership reviews.
              <div className="mt-4 text-ink-600">
                Tip: open in a wide viewport for the full editorial rhythm.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

