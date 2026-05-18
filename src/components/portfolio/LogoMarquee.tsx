// =============================================================
// LogoMarquee
// Two-row borderless logo wall with alternating scroll directions.
// Logos appear white/monochrome by default and reveal their original
// colors on hover. Hover pauses only the hovered row.
//
// HOW TO REPLACE PLACEHOLDERS WITH REAL LOGOS:
// 1. Drop colored logo files (SVG/PNG, transparent bg) into /public/logos.
//    // Upload colored original logos here; CSS will make them white by default and reveal color on hover
// 2. In the `logoItems` array below:
//    - Update `image` → // Update logo image path here (e.g. "/logos/acme.svg")
//    - Update `name`  → // Update client/company name here (used for alt + internal only)
//    - Update `alt`   → accessible alt text
// 3. // Add or remove logo items in this array
// 4. // Duplicate logo arrays are used only to create a seamless marquee loop
// 5. // Hover pauses only the current marquee row, not both rows
// 6. // Keep logo containers borderless for a cleaner client-logo wall look
// =============================================================

type LogoItem = {
  name: string;
  image: string;
  alt: string;
};

// Inline SVG placeholders so the visual reads as a logo mark, not a text label.
// Replace these with real colored logo files when ready.
const ph = (mono: string, color: string, shape: "circle" | "square" | "diamond" | "ring" = "circle") => {
  const shapeEl =
    shape === "square"
      ? `<rect x="20" y="20" width="160" height="160" rx="24" fill="${color}"/>`
      : shape === "diamond"
        ? `<rect x="40" y="40" width="120" height="120" rx="12" transform="rotate(45 100 100)" fill="${color}"/>`
        : shape === "ring"
          ? `<circle cx="100" cy="100" r="78" fill="none" stroke="${color}" stroke-width="14"/>`
          : `<circle cx="100" cy="100" r="80" fill="${color}"/>`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>${shapeEl}<text x='100' y='118' text-anchor='middle' font-family='Inter,Arial,sans-serif' font-weight='900' font-size='64' fill='white'>${mono}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const logoItems: LogoItem[] = [
  // Replace this placeholder with the actual client/company logo
  { name: "Aurora D2C",    image: ph("AD", "#e85d3a", "circle"),  alt: "Aurora D2C logo" },
  { name: "Northwind Co.", image: ph("NW", "#3b82f6", "square"),  alt: "Northwind Co. logo" },
  { name: "Lumen Beauty",  image: ph("LB", "#c9a84c", "ring"),    alt: "Lumen Beauty logo" },
  { name: "Halcyon Labs",  image: ph("HL", "#7c3aed", "diamond"), alt: "Halcyon Labs logo" },
  { name: "Verdant Goods", image: ph("VG", "#10b981", "circle"),  alt: "Verdant Goods logo" },
  { name: "Atlas Agency",  image: ph("AA", "#0ea5e9", "square"),  alt: "Atlas Agency logo" },
  { name: "Pixel & Pulse", image: ph("PP", "#ef4444", "ring"),    alt: "Pixel & Pulse logo" },
  { name: "Studio Kavya",  image: ph("SK", "#f59e0b", "diamond"), alt: "Studio Kavya logo" },
  { name: "Meridian Ads",  image: ph("MA", "#6366f1", "circle"),  alt: "Meridian Ads logo" },
  { name: "Foundry Group", image: ph("FG", "#14b8a6", "square"),  alt: "Foundry Group logo" },
];

const rowOne = logoItems.slice(0, 5);
const rowTwo = logoItems.slice(5);

function LogoCard({ item }: { item: LogoItem }) {
  return (
    <div
      className="group/logo flex h-20 w-[180px] shrink-0 items-center justify-center px-4 sm:h-24 sm:w-[220px] sm:px-6 md:h-28 md:w-[260px] md:px-8"
      aria-label={item.alt}
    >
      {/* Replace this placeholder with the actual client/company logo */}
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        className="max-h-8 w-auto opacity-70 brightness-0 invert transition-all duration-300 ease-out group-hover/logo:max-h-12 group-hover/logo:opacity-100 group-hover/logo:[filter:none] sm:max-h-10 sm:group-hover/logo:max-h-[52px] md:max-h-12 md:group-hover/logo:max-h-16"
      />
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
    // Hover pauses only the current marquee row, not both rows
    <div className="marquee-row group/row flex overflow-hidden">
      <div
        className="marquee-track flex shrink-0 gap-6 pr-6 transition-[animation-play-state] motion-reduce:!animate-none sm:gap-10 sm:pr-10 md:gap-14 md:pr-14 group-hover/row:[animation-play-state:paused]"
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
      {/* Edge fade masks blending with the surrounding dark card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card via-card/85 to-transparent sm:w-40 md:w-56"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card via-card/85 to-transparent sm:w-40 md:w-56"
      />

      {/* Animated marquee — per-row hover pause; hidden when reduced motion */}
      <div className="space-y-2 motion-reduce:hidden sm:space-y-4">
        <MarqueeRow items={rowOne} duration={55} />
        <MarqueeRow items={rowTwo} reverse duration={65} />
      </div>

      {/* Reduced-motion fallback: clean static grid */}
      <div className="hidden grid-cols-2 place-items-center gap-6 motion-reduce:grid sm:grid-cols-3 md:grid-cols-5">
        {logoItems.map((it) => (
          <LogoCard key={it.name} item={it} />
        ))}
      </div>
    </div>
  );
}
