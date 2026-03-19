import { SystemProvider, useSystem } from "./context/SystemContext";
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
  const { selectedPersona, selectedColourMode } = useSystem();
  const persona = siteContent.personas.cards.find((p) => p.id === selectedPersona);
  const colourMode = siteContent.adaptiveColour.modes.find((m) => m.id === selectedColourMode);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-paper-100/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-site px-5 sm:px-6 md:px-10 lg:px-12 py-3 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="/Images/Logo.svg" alt="Sonocea" className="h-5 w-auto opacity-90" />
          <span className="text-[12px] text-ink-600 hidden sm:inline tracking-tight">
            {siteContent.meta.subtitle}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {persona && (
            <span className="rounded-full border border-black/8 bg-paper-200/80 px-3 py-1 text-[11px] text-ink-600 hidden md:inline">
              {persona.title.replace("The ", "")}
            </span>
          )}
          {colourMode && (
            <span
              className="rounded-full px-3 py-1 text-[11px] font-medium text-white hidden md:inline"
              style={{ background: colourMode.accent }}
            >
              {colourMode.name}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

const navItems = [
  { id: "personas", label: "Personas" },
  { id: "adaptive-colour", label: "Colour system" },
  { id: "motion", label: "Soundwave & motion" },
  { id: "flow", label: "Product flow" },
  { id: "next", label: "What this unlocks" },
];

export default function App() {
  const colourModes = siteContent.adaptiveColour.modes;
  const personas = siteContent.personas.cards;

  return (
    <SystemProvider>
      <div className="min-h-dvh bg-paper-200 text-ink-950">
        <a
          href="#intro"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-paper-200"
        >
          Skip to content
        </a>

        <Topbar />
        <div className="mx-auto w-full max-w-site px-5 sm:px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16 xl:gap-20">
            <SectionNav items={navItems} />
            <main className="min-w-0">
              <HeroSection
                content={{
                  ...siteContent.hero,
                  anchors: navItems.map((i) => ({ id: i.id, label: i.label })),
                }}
                colourModes={colourModes}
                personas={personas}
              />
              <PersonaSection content={{ ...siteContent.personas, colourModes }} />
              <ColourSection content={siteContent.colour} />
              <AdaptiveColourSection content={siteContent.adaptiveColour} />
              <WaveformSection content={siteContent.motion} />
              <ProductFlowSection content={siteContent.flow} />
              <NextStepsSection content={siteContent.next} />
            </main>
          </div>
        </div>
      </div>
    </SystemProvider>
  );
}
