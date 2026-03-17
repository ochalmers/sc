import { useScrollSpy } from "./useScrollSpy";

export default function SectionNav({ items }) {
  const ids = items.map((i) => i.id);
  const active = useScrollSpy(ids);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-7">
        <div className="rounded-2xl border border-black/10 bg-paper-100/70 backdrop-blur px-3 py-3">
          <div className="px-2 pb-2 text-[11px] uppercase tracking-[0.18em] text-ink-600">
            Chapters
          </div>
          <nav className="flex flex-col gap-1">
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "group rounded-xl px-2.5 py-2.5 text-[13px] transition",
                    isActive
                      ? "bg-paper-200 text-ink-950"
                      : "text-ink-700 hover:bg-paper-200/70 hover:text-ink-950",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="tracking-tightish">{it.label}</span>
                    <span
                      className={[
                        "h-[6px] w-[6px] rounded-full transition",
                        isActive ? "bg-ink-950" : "bg-black/15 group-hover:bg-black/25",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </div>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}

