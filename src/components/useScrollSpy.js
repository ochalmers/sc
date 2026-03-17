import { useEffect, useMemo, useState } from "react";

export function useScrollSpy(sectionIds, { rootMargin = "-25% 0px -60% 0px" } = {}) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        setActiveId(visible[0].target.id);
      },
      { root: null, threshold: [0.12, 0.2, 0.35], rootMargin },
    );

    for (const t of targets) obs.observe(t);
    return () => obs.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}

