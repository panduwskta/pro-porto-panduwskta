// =============================================================
// LogoMarquee
// Two-row animated logo strip with alternating scroll directions,
// edge fade masks, hover-to-slow, and a reduced-motion static grid.
//
// HOW TO REPLACE PLACEHOLDERS WITH REAL LOGOS:
// 1. Drop logo files (SVG/PNG, transparent bg) into /public or src/assets.
// 2. In the `logoItems` array below:
//    - Update `name`  → // Update client/company name here
//    - Update `image` → // Update logo image path here (e.g. "/logos/acme.svg")
//    - Update `alt`   → // Update alt text for accessibility
// 3. Add or remove items in the array as needed.
//    // Add or remove logo items in this array
// 4. The two rendered rows automatically duplicate the array for a
//    seamless marquee loop — you do NOT need to duplicate items manually.
//    // Duplicate logo arrays are used only to create a seamless marquee loop
// =============================================================

type LogoItem = {
  name: string;
  image?: string; // optional — when undefined, a styled text placeholder renders
  alt: string;
};

// Replace these placeholders with actual client/company logos.
// Update logo image path here when real assets are ready.
const logoItems: LogoItem[] = [
  { name: "Client Logo 01", alt: "Client Logo 01 placeholder" },
  { name: "Agency Logo 01", alt: "Agency Logo 01 placeholder" },
  { name: "Brand Logo 01", alt: "Brand Logo 01 placeholder" },
  { name: "Project Logo 01", alt: "Project Logo 01 placeholder" },
  { name: "Client Logo 02", alt: "Client Logo 02 placeholder" },
  { name: "Brand Logo 02", alt: "Brand Logo 02 placeholder" },
  { name: "Agency Logo 02", alt: "Agency Logo 02 placeholder" },
  { name: "Project Logo 02", alt: "Project Logo 02 placeholder" },
  { name: "Client Logo 03", alt: "Client Logo 03 placeholder" },
  { name: "Brand Logo 03", alt: "Brand Logo 03 placeholder" },
];

// Split into two rows for visual variety
const rowOne = logoItems.slice(0, 5);
const rowTwo = logoItems.slice(5);

function LogoCard({ item }: { item: LogoItem }) {
  return (
    <div
      className="group/logo flex h-16 w-[180px] shrink-0 items-center justify-center rounded-2xl border border-border bg-card/60 px-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card sm:h-20 sm:w-[220px] md:w-[240px]"
      aria-label={item.alt}
    >
      {item.image ? (
        // Replace this placeholder with actual client/company logo
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="max-h-10 w-auto opacity-60 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
        />
      ) : (
        <span className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover/logo:text-foreground">
          {item.name}
        </span>
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 40,
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
      {/* Edge fade masks — left/right gradients so logos enter/exit smoothly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-card to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-card to-transparent sm:w-24"
      />

      {/* Animated marquee — hidden when user prefers reduced motion */}
      <div
        className="space-y-4 motion-reduce:hidden [&_.group\\/row:hover_[style*='animation']]:[animation-play-state:paused]"
      >
        <MarqueeRow items={rowOne} duration={45} />
        <MarqueeRow items={rowTwo} reverse duration={50} />
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
