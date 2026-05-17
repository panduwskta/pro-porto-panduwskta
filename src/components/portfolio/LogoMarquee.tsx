// =============================================================
// LogoMarquee
// Two-row animated logo strip with alternating scroll directions,
// edge fade masks, hover-to-slow, and a reduced-motion static grid.
//
// HOW TO REPLACE PLACEHOLDERS WITH REAL LOGOS:
// 1. Drop logo files (SVG/PNG, transparent bg) into /public or src/assets.
// 2. In the `logoItems` array below:
//    - Update `name`     → // Update client/company name here
//    - Update `image`    → // Update logo image path here (e.g. "/logos/acme.svg")
//    - Update `alt`      → // Update alt text for accessibility
//    - Optional `kind`   → "circle" | "block" | "diamond" | "ring" (mark shape)
//    - Optional `mono`   → monogram override (defaults to first letters of name)
// 3. Add or remove items in this array as needed.
//    // Add or remove logo items in this array
// 4. Two rows are rendered automatically; the array is duplicated inside each
//    row only to create a seamless marquee loop.
//    // Duplicate logo arrays are used only to create a seamless marquee loop
// =============================================================

type MarkKind = "circle" | "block" | "diamond" | "ring";

type LogoItem = {
  name: string;
  image?: string; // when undefined, an abstract mark + label renders
  alt: string;
  kind?: MarkKind;
  mono?: string;
};

// Replace these placeholders with actual client/company logos.
// Update logo image path here when real assets are ready.
const logoItems: LogoItem[] = [
  // Row 1 — brands & clients
  { name: "Aurora D2C",    alt: "Aurora D2C logo placeholder",    kind: "circle",  mono: "AD" },
  { name: "Northwind Co.", alt: "Northwind Co. logo placeholder", kind: "block",   mono: "NW" },
  { name: "Lumen Beauty",  alt: "Lumen Beauty logo placeholder",  kind: "ring",    mono: "LB" },
  { name: "Halcyon Labs",  alt: "Halcyon Labs logo placeholder",  kind: "diamond", mono: "HL" },
  { name: "Verdant Goods", alt: "Verdant Goods logo placeholder", kind: "circle",  mono: "VG" },
  // Row 2 — agencies & project types
  { name: "Atlas Agency",  alt: "Atlas Agency logo placeholder",      kind: "block",   mono: "AA" },
  { name: "Pixel & Pulse", alt: "Pixel & Pulse studio placeholder",   kind: "ring",    mono: "PP" },
  { name: "Studio Kavya",  alt: "Studio Kavya logo placeholder",      kind: "diamond", mono: "SK" },
  { name: "Meridian Ads",  alt: "Meridian Ads logo placeholder",      kind: "circle",  mono: "MA" },
  { name: "Foundry Group", alt: "Foundry Group logo placeholder",     kind: "block",   mono: "FG" },
];

const rowOne = logoItems.slice(0, 5);
const rowTwo = logoItems.slice(5);

// Abstract mark — renders a small geometric shape next to the label so each
// placeholder card looks like a logo lockup rather than plain text.
function LogoMark({ kind = "circle", mono }: { kind?: MarkKind; mono: string }) {
  const base =
    "grid h-8 w-8 shrink-0 place-items-center text-[10px] font-black uppercase tracking-tight text-foreground/80 transition-colors duration-300 group-hover/logo:text-foreground";
  if (kind === "block") {
    return (
      <span className={`${base} rounded-md bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-inset ring-foreground/10`}>
        {mono}
      </span>
    );
  }
  if (kind === "diamond") {
    return (
      <span className={`${base} relative`}>
        <span aria-hidden className="absolute inset-0 rotate-45 rounded-sm bg-gradient-to-br from-accent/30 to-primary/10 ring-1 ring-inset ring-foreground/10" />
        <span className="relative">{mono}</span>
      </span>
    );
  }
  if (kind === "ring") {
    return (
      <span className={`${base} rounded-full ring-2 ring-inset ring-foreground/20`}>
        {mono}
      </span>
    );
  }
  return (
    <span className={`${base} rounded-full bg-gradient-to-br from-primary/30 to-accent/15 ring-1 ring-inset ring-foreground/10`}>
      {mono}
    </span>
  );
}

function LogoCard({ item }: { item: LogoItem }) {
  const mono = item.mono ?? item.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div
      className="group/logo flex h-16 w-[160px] shrink-0 items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-[0_10px_30px_-15px_color-mix(in_oklch,var(--burnt)_60%,transparent)] sm:h-20 sm:w-[210px] sm:px-5 md:w-[230px]"
      aria-label={item.alt}
    >
      {item.image ? (
        // Replace this placeholder with actual client/company logo
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="max-h-10 w-auto opacity-70 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
        />
      ) : (
        <>
          <LogoMark kind={item.kind} mono={mono} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[11px] font-bold uppercase tracking-[0.16em] text-foreground/80 transition-colors duration-300 group-hover/logo:text-foreground">
              {item.name}
            </span>
            <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Placeholder
            </span>
          </span>
        </>
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 50,
}: {
  items: LogoItem[];
  reverse?: boolean;
  duration?: number;
}) {
  // Duplicate logo arrays are used only to create a seamless marquee loop
  const looped = [...items, ...items];
  return (
    <div className="group/row flex overflow-hidden">
      <div
        className="flex shrink-0 gap-4 pr-4 motion-reduce:!animate-none sm:gap-5 sm:pr-5"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {looped.map((it, i) => (
          <LogoCard key={`${it.name}-${i}`} item={it} />
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div className="relative">
      {/* Edge fade masks — stronger left/right gradients so logos enter/exit smoothly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-card via-card/80 to-transparent sm:w-32 md:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-card via-card/80 to-transparent sm:w-32 md:w-40"
      />

      {/* Animated marquee — pauses on hover; hidden when user prefers reduced motion */}
      <div className="space-y-4 motion-reduce:hidden [&_.group\\/row:hover_[style*='animation']]:[animation-play-state:paused]">
        {/* Row 1 → moves left */}
        <MarqueeRow items={rowOne} duration={55} />
        {/* Row 2 → moves right (reverse) */}
        <MarqueeRow items={rowTwo} reverse duration={65} />
      </div>

      {/* Reduced-motion fallback: clean static grid */}
      <div className="hidden grid-cols-2 gap-3 motion-reduce:grid sm:grid-cols-3 md:grid-cols-5">
        {logoItems.map((it) => (
          <LogoCard key={it.name} item={it} />
        ))}
      </div>
    </div>
  );
}
