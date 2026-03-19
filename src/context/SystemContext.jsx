import { createContext, useContext, useState, useCallback } from "react";

const SystemContext = createContext(null);

const PERSONA_DEFAULT_COLOUR = {
  regulator: "clinical",
  "sensitive-system": "clinical",
  "supported-user": "warmth",
  "performance-seeker": "performance",
};

export function SystemProvider({ children }) {
  const [selectedPersona, setSelectedPersona] = useState("regulator");
  const [selectedColourMode, setSelectedColourMode] = useState("clinical");

  const selectPersona = useCallback((id) => {
    setSelectedPersona(id);
    setSelectedColourMode((prev) => {
      const suggested = PERSONA_DEFAULT_COLOUR[id];
      return suggested ?? prev;
    });
  }, []);

  const selectColourMode = useCallback((id) => {
    setSelectedColourMode(id);
  }, []);

  return (
    <SystemContext.Provider
      value={{
        selectedPersona,
        selectedColourMode,
        selectPersona,
        selectColourMode,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
}

export function useSystem() {
  const ctx = useContext(SystemContext);
  if (!ctx) throw new Error("useSystem must be used within SystemProvider");
  return ctx;
}
