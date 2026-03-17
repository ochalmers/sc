import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function AnchorNav() {
  const items = [
    { id: "intro", label: "Intro" },
    { id: "personas", label: "Personas" },
    { id: "colour", label: "Colour" },
    { id: "motion", label: "Motion" },
    { id: "flow", label: "Product flow" },
    { id: "next", label: "Next steps" },
  ];

  return (
    <div className="hidden lg:block">
      <div className="sticky top-6 rounded-xl2 border border-black/10 bg-paper-100/70 backdrop-blur px-3 py-3 shadow-card">
        <div className="text-[11px] tracking-[0.14em] uppercase text-ink-500 px-2 pb-2">
          Sections
        </div>
        <nav className="flex flex-col gap-1">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="rounded-lg px-2.5 py-2 text-[13px] text-ink-700 hover:bg-paper-200/80 hover:text-ink-950 transition"
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function Shell({ children }) {
  return (
    <div className="mx-auto max-w-[1180px] px-5 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
        <div className="min-w-0">{children}</div>
        <AnchorNav />
      </div>
    </div>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper-100/70 backdrop-blur">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/Images/Logo.svg" alt="Sonocea" className="h-6 w-auto opacity-90" />
          <div className="text-sm tracking-tightish text-ink-700 hidden sm:block">
            Brand Exploration
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-black/10 bg-paper-200/70 px-3 py-1 text-xs text-ink-700">
            Internal showcase
          </span>
          <span className="text-xs text-ink-500 hidden md:block">Latest direction · 2026</span>
        </div>
      </div>
    </header>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-18 border-t border-black/10 first:border-t-0">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-10 items-start">
        <div className="md:sticky md:top-28">
          <div className="text-[11px] uppercase tracking-[0.16em] text-ink-500">{eyebrow}</div>
          <div className="mt-2 text-[22px] leading-tight tracking-editorial text-ink-950">{title}</div>
        </div>
        <div className="min-w-0">
          {intro ? (
            <p className="max-w-[72ch] text-[15px] leading-7 text-ink-600">{intro}</p>
          ) : null}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="intro" className="pt-10 md:pt-14 pb-14 md:pb-18">
      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
        <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
          Internal / Stakeholder showcase
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="mt-3 text-[38px] md:text-[54px] leading-[1.02] tracking-editorial text-ink-950"
        >
          Sonocea Brand Exploration
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-5 max-w-[78ch] text-[15px] md:text-[16px] leading-7 text-ink-600">
          This microsite captures the current brand exploration work for Sonocea, bringing together persona thinking,
          colour system refinement, soundwave and motion studies, and an initial product flow concept. The goal is to
          establish clear design directions for the next phase of brand and product development.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
          {[
            { href: "#personas", label: "Personas" },
            { href: "#colour", label: "Colour" },
            { href: "#motion", label: "Soundwave & Motion" },
            { href: "#flow", label: "Product flow" },
            { href: "#next", label: "What this unlocks" },
          ].map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="rounded-full border border-black/10 bg-paper-200/70 px-4 py-2 text-xs text-ink-700 hover:bg-paper-200 transition"
            >
              {a.label}
            </a>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-paper-200/50 shadow-soft">
            <div className="absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(60%_65%_at_52%_42%,black,transparent)]">
              <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent-indigo blur-3xl opacity-60" />
              <div className="absolute left-1/3 -top-24 h-72 w-72 rounded-full bg-accent-teal blur-3xl opacity-45" />
              <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-accent-clay blur-3xl opacity-40" />
            </div>

            <div className="relative p-7 md:p-10">
              <div className="text-xs text-ink-500 tracking-tightish">
                Signal study (minimal) · rhythm · restraint
              </div>
              <div className="mt-5 h-[160px] md:h-[190px]">
                <SignalVisual />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SignalVisual() {
  const lines = new Array(42).fill(0).map((_, i) => {
    const t = i / 41;
    const a = Math.sin(t * Math.PI * 2) * 0.55 + Math.sin(t * Math.PI * 4) * 0.25;
    const amp = 16 + 44 * Math.abs(a);
    return { x: t * 100, amp };
  });

  const pathTop = lines
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${50 - p.amp * 0.22}`)
    .join(" ");
  const pathBot = lines
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${50 + p.amp * 0.22}`)
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id="inkFade" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(8,8,8,.0)" />
          <stop offset="0.12" stopColor="rgba(8,8,8,.35)" />
          <stop offset="0.5" stopColor="rgba(8,8,8,.45)" />
          <stop offset="0.88" stopColor="rgba(8,8,8,.35)" />
          <stop offset="1" stopColor="rgba(8,8,8,.0)" />
        </linearGradient>
      </defs>

      <motion.path
        d={pathTop}
        fill="none"
        stroke="url(#inkFade)"
        strokeWidth="0.8"
        initial={{ pathLength: 0.0, opacity: 0.0 }}
        animate={{ pathLength: 1.0, opacity: 1.0 }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d={pathBot}
        fill="none"
        stroke="url(#inkFade)"
        strokeWidth="0.8"
        initial={{ pathLength: 0.0, opacity: 0.0 }}
        animate={{ pathLength: 1.0, opacity: 1.0 }}
        transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      />

      <motion.circle
        cx="50"
        cy="50"
        r="22"
        fill="none"
        stroke="rgba(8,8,8,.12)"
        strokeWidth="0.55"
        animate={{ opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="rgba(8,8,8,.08)"
        strokeWidth="0.55"
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-paper-200 text-ink-950">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-paper-200"
      >
        Skip to content
      </a>

      <Topbar />
      <Shell>
        <Hero />

        {/* Sections will be implemented next; scaffolding here verifies React+Tailwind plumbing. */}
        <Section
          id="personas"
          eyebrow="Section 2"
          title="Primary Personas"
          intro="Personas guide both the experience architecture and the interpretation of the brand. These are not narrow demographics — they are core contexts of use that shape tone, structure, and interaction design."
        >
          <div className="rounded-2xl border border-black/10 bg-paper-100 p-6 text-sm text-ink-600">
            Placeholder — building persona cards next.
          </div>
        </Section>

        <Section
          id="colour"
          eyebrow="Section 3"
          title="Colour System Exploration"
          intro="The palette is being refined to feel calmer, more balanced, and more adaptable across product, brand and institutional contexts — with restrained accents and a strong neutral base."
        >
          <div className="rounded-2xl border border-black/10 bg-paper-100 p-6 text-sm text-ink-600">
            Placeholder — building palette directions next.
          </div>
        </Section>

        <Section
          id="motion"
          eyebrow="Section 4"
          title="Soundwave & Motion Exploration"
          intro="Soundwave expression is being refined to feel less decorative and more precise: thin line-work, soft rhythm, restrained transparency, and calm looping motion references."
        >
          <div className="rounded-2xl border border-black/10 bg-paper-100 p-6 text-sm text-ink-600">
            Placeholder — building waveform directions + motion loops next.
          </div>
        </Section>

        <Section
          id="flow"
          eyebrow="Section 5"
          title="Key Product Flow Concept"
          intro="This is a directional concept to demonstrate how personas, colour and soundwave language can cohere inside the product experience. It is a prototype for tone, structure and principles — not a final UI."
        >
          <div className="rounded-2xl border border-black/10 bg-paper-100 p-6 text-sm text-ink-600">
            Placeholder — building 4 screen panels next.
          </div>
        </Section>

        <Section
          id="next"
          eyebrow="Section 6"
          title="What This Unlocks"
          intro="These explorations are intended to establish a small number of clear design directions that can be reviewed, refined and expanded into the broader Sonocea brand and product ecosystem."
        >
          <div className="rounded-2xl border border-black/10 bg-paper-100 p-6 text-sm text-ink-600">
            Placeholder — building next-step cards + closing statement next.
          </div>
        </Section>

        <footer className="py-10 text-xs text-ink-500">
          <div className="border-t border-black/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>© Sonocea · Internal design exploration showcase</div>
            <div className="text-ink-500/80">Swap text + assets via `src/content/` (coming next).</div>
          </div>
        </footer>
      </Shell>
    </div>
  );
}

