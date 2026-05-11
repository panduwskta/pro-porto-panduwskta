import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { X, ArrowRight, Check } from "lucide-react";

export type DrawerContent = {
  eyebrow: string;
  title: string;
  client?: string;
  sections: { label: string; body: string }[];
  highlights: string[];
  ctaLabel?: string;
};

type Ctx = { open: (c: DrawerContent) => void; close: () => void };
const DrawerCtx = createContext<Ctx | null>(null);

export function useDetailDrawer() {
  const ctx = useContext(DrawerCtx);
  if (!ctx) throw new Error("useDetailDrawer must be used within DetailDrawerProvider");
  return ctx;
}

export function DetailDrawerProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<DrawerContent | null>(null);
  const [visible, setVisible] = useState(false);

  const open = useCallback((c: DrawerContent) => {
    setContent(c);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setContent(null), 320);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [visible, close]);

  const handleCta = () => {
    close();
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  };

  return (
    <DrawerCtx.Provider value={{ open, close }}>
      {children}
      {content && (
        <div
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label={content.title}
        >
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close drawer"
            onClick={close}
            className={`absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Panel */}
          <div
            className={`absolute right-0 left-0 bottom-0 max-h-[85vh] rounded-t-3xl border border-border glass shadow-2xl transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)]
              md:left-auto md:top-0 md:bottom-0 md:h-full md:max-h-none md:w-[460px] md:rounded-none md:rounded-l-3xl md:border-l
              ${visible
                ? "translate-y-0 md:translate-x-0"
                : "translate-y-full md:translate-y-0 md:translate-x-full"}
            `}
          >
            <div className="flex h-full max-h-[85vh] flex-col md:max-h-none">
              <div className="flex items-start justify-between gap-4 px-6 pt-6 md:px-8 md:pt-8">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {content.eyebrow}
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-6 pt-4 md:px-8 md:pb-8">
                <h3 className="text-display text-2xl md:text-3xl">{content.title}</h3>
                {content.client && (
                  <div className="mt-3 text-sm font-semibold text-muted-foreground">
                    {content.client}
                  </div>
                )}

                <div className="mt-6 space-y-5">
                  {content.sections.map((s, i) => (
                    <div key={i}>
                      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                        {s.label}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>

                {content.highlights.length > 0 && (
                  <div className="mt-7 rounded-2xl border border-border bg-card/60 p-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                      Highlights
                    </div>
                    <ul className="mt-3 space-y-2.5">
                      {content.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t border-border px-6 py-5 md:px-8">
                <button
                  type="button"
                  onClick={handleCta}
                  className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.02]"
                >
                  {content.ctaLabel ?? "Let's talk"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DrawerCtx.Provider>
  );
}
