import { Reveal } from "../components/Motion";
import { ExplorationWave } from "../components/Waveforms";

function WaveCard({ w, idx }) {
  return (
    <Reveal delay={0.06 * idx}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 md:gap-12 items-center">
        <div>
          <div className="text-[12px] uppercase tracking-[0.2em] text-white/70">
            Waveform direction {idx + 1}
          </div>
          <h3 className="mt-3 text-[30px] md:text-[36px] leading-[1.04] tracking-editorial text-paper-200">
            {w.name}
          </h3>
          <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-white/70 max-w-[75ch]">
            {w.description}
          </p>
        </div>

        <div className="h-[180px] md:h-[220px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="h-full w-full px-3 py-3">
            <ExplorationWave variant={w.variant} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function WaveformSection({ content }) {
  return (
    <section
      id="motion"
      className="scroll-mt-24 py-24 md:py-32 bg-ink-950 text-paper-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-10 md:gap-12 lg:gap-16">
        <Reveal className="md:sticky md:top-28 self-start">
          <div className="text-[12px] uppercase tracking-[0.2em] text-white/70">Soundwave & Motion</div>
          <h2 className="mt-3 text-[30px] md:text-[38px] leading-[1.02] tracking-editorial text-paper-200">
            Refined visual language for sound
          </h2>
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <p className="max-w-[85ch] text-[15px] md:text-[16px] leading-7 text-white/70">
              {content.intro}
            </p>
          </Reveal>

          <div className="mt-16 space-y-18 md:space-y-22">
            {content.waves.map((w, idx) => (
              <WaveCard key={w.name} w={w} idx={idx} />
            ))}
          </div>

          <Reveal className="mt-18 md:mt-22">
            <div className="pt-10 border-t border-white/10">
              <div className="text-[12px] uppercase tracking-[0.2em] text-white/70">Motion references</div>
              <div className="mt-4 text-[14px] leading-7 text-white/70 max-w-[90ch]">
                Slow loops, low amplitude, thin strokes. The intent is a scientific signal language that can scale
                from brand moments to subtle product integration without becoming decorative.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

