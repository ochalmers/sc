import SectionNav from "./components/SectionNav";
import { siteContent } from "./content/siteContent";
import HeroSection from "./sections/HeroSection";
import PersonaSection from "./sections/PersonaSection";
import ColourSection from "./sections/ColourSection";
import AdaptiveColourSection from "./sections/AdaptiveColourSection";
import WaveformSection from "./sections/WaveformSection";
import ProductFlowSection from "./sections/ProductFlowSection";
import NextStepsSection from "./sections/NextStepsSection";

function Topbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper-100/70 backdrop-blur">
        <div className="mx-auto w-full max-w-site px-5 sm:px-6 md:px-10 lg:px-12 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/Images/Logo.svg" alt="Sonocea" className="h-6 w-auto opacity-90" />
          <div className="text-sm tracking-tightish text-ink-700 hidden sm:block">
            {siteContent.meta.title}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-black/10 bg-paper-100/70 px-3 py-1 text-xs text-ink-700">
            Internal showcase
          </span>
          <span className="text-xs text-ink-600 hidden md:block">{siteContent.meta.subtitle}</span>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const navItems = [
    { id: "personas", label: "Personas" },
    { id: "colour", label: "Colour exploration" },
    { id: "adaptive-colour", label: "Adaptive colour" },
    { id: "motion", label: "Soundwave & motion" },
    { id: "flow", label: "Product flow concept" },
    { id: "next", label: "What this unlocks" },
  ];

  return (
    <div className="min-h-dvh bg-paper-200 text-ink-950">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-paper-200"
      >
        Skip to content
      </a>

      <Topbar />
      <div className="mx-auto w-full max-w-site px-5 sm:px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-14 lg:gap-20 xl:gap-24">
          <SectionNav items={navItems} />
          <main className="min-w-0">
            <HeroSection
              content={{
                title: siteContent.meta.title,
                subtitle: siteContent.meta.subtitle,
                body: siteContent.hero.body,
                anchors: siteContent.hero.anchors,
              }}
            />
            <PersonaSection content={siteContent.personas} />
            <ColourSection content={siteContent.colour} />
            <AdaptiveColourSection content={siteContent.adaptiveColour} />
            <WaveformSection content={siteContent.motion} />
            <ProductFlowSection content={siteContent.flow} />
            <NextStepsSection content={siteContent.next} />
          </main>
        </div>
      </div>
    </div>
  );
}

