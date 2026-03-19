export const siteContent = {
  meta: {
    title: "Sonocea Brand Exploration",
    subtitle: "Design Direction 2026",
  },
  hero: {
    body:
      "This microsite captures the current brand exploration work for Sonocea, bringing together persona thinking, colour system refinement, soundwave motion studies, and an initial product flow concept. The goal is to establish clear design directions for the next phase of brand and product development.",
    anchors: [
      { id: "personas", label: "Personas" },
      { id: "colour", label: "Colour exploration" },
      { id: "adaptive-colour", label: "Adaptive colour" },
      { id: "motion", label: "Soundwave & motion" },
      { id: "flow", label: "Product flow concept" },
      { id: "next", label: "What this unlocks" },
    ],
  },
  personas: {
    intro:
      "These are not narrow demographics. They’re core contexts of use that guide product experience and brand interpretation.",
    adoptionCallout: {
      title: "Adoption personas (supporting)",
      items: ["Clinical Champion", "Institutional Decision Maker"],
    },
    cards: [
      {
        id: "regulator",
        title: "The Regulator",
        descriptor: "Adults managing stress, emotional overwhelm, or sleep disruption.",
        examples: [
          "Professionals under sustained pressure",
          "Parents balancing family demands",
          "Individuals experiencing anxiety",
          "People seeking improved sleep and emotional balance",
        ],
        brand: "Calm, grounded, quietly reassuring.",
        product: "Simple entry points, intuitive navigation, reassurance and clarity.",
        image: "/Images/Component 21.jpg",
      },
      {
        id: "sensitive-system",
        title: "The Sensitive System",
        descriptor: "Users with sensory sensitivity or neurodivergent conditions.",
        examples: [
          "ADHD",
          "Autistic users",
          "Highly sensitive individuals",
          "People experiencing sensory overload or burnout",
        ],
        brand: "Gentle, stable, predictable.",
        product: "Sensory-safe design, minimal stimulation, clear structure.",
        image: "/Images/Component 13.jpg",
      },
      {
        id: "supported-user",
        title: "The Supported User",
        descriptor: "Users supported by caregivers or practitioners.",
        examples: ["Children", "Elderly users", "People recovering from illness", "Individuals in therapy"],
        brand: "Safe, warm, trustworthy.",
        product: "Clear guidance, structured sessions, reassurance.",
        image: "/Images/Component 24.jpg",
      },
      {
        id: "performance-seeker",
        title: "The Performance Seeker",
        descriptor: "Focus, recovery, and performance optimisation.",
        examples: ["Athletes", "Founders", "Professionals under pressure", "People seeking cognitive clarity"],
        brand: "Modern, precise, science-led.",
        product: "Fast access to sessions, clear outcomes, goal-driven journeys.",
        image: "/Images/Component 10.jpg",
      },
    ],
  },
  colour: {
    intro:
      "The system is being refined to feel calmer, more balanced, and more adaptable across clinical, institutional and performance contexts — while maintaining recognisable Sonocea DNA.",
    directions: [
      {
        name: "Refined Current",
        rationale:
          "A calmer evolution of the current Sonocea palette retaining recognisable DNA while reducing saturation and visual intensity.",
        swatches: ["#121212", "#F7F6F3", "#3A39FF", "#4FD6BE", "#6B7785"],
      },
      {
        name: "Clinical Calm",
        rationale:
          "A restrained palette designed to feel credible and suitable for clinical or institutional environments.",
        swatches: ["#121212", "#F7F6F3", "#6B7785", "#6C857A", "#D7D7D2"],
      },
      {
        name: "Human Warmth",
        rationale:
          "A softer palette designed to support reassurance, accessibility and emotional comfort.",
        swatches: ["#121212", "#F7F6F3", "#B9856E", "#6C857A", "#E6E4DE"],
      },
    ],
  },
  motion: {
    intro:
      "Soundwave expression is being refined to feel less decorative and more precise — thin line work, restrained transparency, and calm looping motion.",
    waves: [
      {
        name: "Scientific Waveform",
        description: "Precise, signal-like waveform inspired by measured data.",
        variant: "scientific",
      },
      {
        name: "Organic Rhythm",
        description: "Softer, breathing-like forms with gentle curvature.",
        variant: "organic",
      },
      {
        name: "Minimal Pulse",
        description: "Highly reduced rhythmic pulses for subtle product integration.",
        variant: "pulse",
      },
    ],
  },
  flow: {
    intro:
      "This concept flow demonstrates how personas, colour and soundwave language come together in the app experience. It is a directional prototype rather than a final product design.",
    screens: [
      {
        title: "Onboarding",
        caption: "A calm entry that frames intent and sets the tone.",
        image: "/Images/App screens/AppScreens1.jpg",
      },
      {
        title: "Session discovery",
        caption: "Structured paths that reduce choice overload.",
        image: "/Images/App screens/AppScreens2.jpg",
      },
      {
        title: "Session detail",
        caption: "Clear outcomes and scientific reassurance.",
        image: "/Images/App screens/AppScreens3.jpg",
      },
      {
        title: "Listening screen",
        caption: "Minimal UI; signal-led motion as the anchor.",
        image: "/Images/App screens/AppScreens4.jpg",
      },
    ],
  },
  adaptiveColour: {
    intro:
      "Rather than locking Sonocea into a single static palette, we are exploring colour as a flexible system that can support different users, nervous system states, and environments of use. This creates a more accessible and adaptive experience across clinical, personal, and performance contexts.",
    microcopy:
      "This moves colour from a static brand choice into a more adaptive product experience.",
    modes: [
      {
        id: "clinical",
        name: "Clinical Calm",
        rationale:
          "A restrained, low-stimulation palette designed for clinical credibility, calm environments, and reduced visual intensity.",
        bestFor: "Clinical settings, therapy environments, institutional use, sensory-sensitive contexts.",
        swatches: ["#121212", "#F7F6F3", "#6B7785", "#6C857A", "#D7D7D2", "#9B9B97"],
        previewBg: "#F7F6F3",
        accent: "#6C857A",
        gradientFrom: "#7A8A96",
        gradientTo: "#6C857A",
      },
      {
        id: "warmth",
        name: "Human Warmth",
        rationale:
          "A softer, more reassuring palette designed to feel supportive, approachable, and emotionally accessible.",
        bestFor: "Home use, personal wellness, caregiving contexts, emotional support.",
        swatches: ["#121212", "#F7F6F3", "#B9856E", "#6C857A", "#E6E4DE", "#D4C4B8"],
        previewBg: "#F5F2EF",
        accent: "#B9856E",
        gradientFrom: "#C99B82",
        gradientTo: "#7A9B8E",
      },
      {
        id: "performance",
        name: "Performance Focus",
        rationale:
          "A sharper, more defined palette designed to support clarity, energy, and performance-oriented environments.",
        bestFor: "Performance contexts, focus sessions, athletic recovery, professional use.",
        swatches: ["#121212", "#F7F6F3", "#3A39FF", "#4FD6BE", "#6B7785", "#E8E8E6"],
        previewBg: "#F4F5F2",
        accent: "#3A39FF",
        gradientFrom: "#5B5AFF",
        gradientTo: "#2B59FF",
      },
    ],
  },
  next: {
    headline: "What This Unlocks",
    statements: [
      "A calmer product language",
      "A credible science-led identity",
      "A flexible system for healthcare and performance",
      "A foundation for the next phase of product design",
    ],
    closing:
      "These explorations are intended to establish a small number of clear design directions that can be reviewed, refined, and expanded into the broader Sonocea brand and product ecosystem.",
  },
};

