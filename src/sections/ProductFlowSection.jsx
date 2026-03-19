import { Reveal } from "../components/Motion";

function PhoneMock({ title, image, accent = "#3A39FF" }) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      <div className="rounded-[34px] border border-black/10 bg-paper-100/70 p-3 shadow-card">
        <div className="rounded-[28px] border border-black/10 overflow-hidden bg-paper-200">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="h-1.5 w-8 rounded-full bg-black/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-black/10" />
          </div>
          <div className="aspect-[9/19] overflow-hidden">
            {image ? (
              <img
                src={encodeURI(image)}
                alt=""
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full bg-black/5" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ step, idx }) {
  const isEven = idx % 2 === 0;
  const accent = idx === 0 ? "#3A39FF" : idx === 1 ? "#4FD6BE" : idx === 2 ? "#B9856E" : "#6C857A";

  return (
    <Reveal delay={0.05 * idx}>
      <div className={["grid grid-cols-1 lg:grid-cols-12 gap-10 items-center", isEven ? "" : ""].join(" ")}>
        <div className={["lg:col-span-5", isEven ? "lg:order-1" : "lg:order-2 lg:col-start-8"].join(" ")}>
          <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">Flow step {idx + 1}</div>
          <h3 className="mt-3 text-[30px] md:text-[38px] leading-[1.02] tracking-editorial text-ink-950">
            {step.title}
          </h3>
          <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-ink-700 max-w-[70ch]">
            {step.caption}
          </p>
          <div className="mt-7 h-px bg-black/10" />
          <p className="mt-6 text-[13px] leading-7 text-ink-600 max-w-[78ch]">
            Directional intent: test tone, structure and experience principles. Not a final UI.
          </p>
        </div>

        <div className={["lg:col-span-7", isEven ? "lg:order-2" : "lg:order-1 lg:col-span-6"].join(" ")}>
          <PhoneMock title={step.title} image={step.image} accent={accent} />
        </div>
      </div>
    </Reveal>
  );
}

export default function ProductFlowSection({ content }) {
  return (
    <section id="flow" className="scroll-mt-24 py-22 md:py-30">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 md:gap-12 lg:gap-16">
        <Reveal className="md:sticky md:top-28 self-start">
          <div className="text-[12px] uppercase tracking-[0.2em] text-ink-600">Product</div>
          <h2 className="mt-3 text-[28px] md:text-[34px] leading-[1.05] tracking-editorial text-ink-950">
            Key Product Flow Concept
          </h2>
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <p className="max-w-[85ch] text-[15px] md:text-[16px] leading-7 text-ink-700">
              {content.intro}
            </p>
          </Reveal>

          <div className="mt-16 space-y-18 md:space-y-22">
            {content.screens.map((s, idx) => (
              <Step key={s.title} step={s} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

