import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { DetailDrawerProvider, useDetailDrawer } from "@/components/portfolio/DetailDrawer";
import { CAPABILITY_DRAWERS } from "@/components/portfolio/drawer-content";
import { useReveal } from "@/hooks/use-reveal";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  Sparkles,
  TrendingUp,
  Camera,
  Megaphone,
  Layers,
  Wand2,
  Download,
  FileText,
  Search,
  Target,
  FlaskConical,
  LineChart,
  Quote,
  MessageCircle,
} from "lucide-react";

// === Editable links (update these as needed) ===
const LINKS = {
  cv: "#", // TODO: replace with public CV URL when ready
  linkedin: "https://www.linkedin.com/in/panduwskta",
  email: "mailto:waskitopandu600@gmail.com",
  whatsapp: "https://wa.me/6285899122508",
  phone: "tel:+6285899122508",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pandu W. Aji — Meta Ads & Creative Strategist for D2C Brands" },
      {
        name: "description",
        content:
          "Meta Ads performance marketer and creative strategist helping D2C and content-led brands improve ad performance through data analysis, creative testing, and scalable content workflows.",
      },
      { property: "og:title", content: "Pandu W. Aji — Meta Ads & Creative Strategist for D2C Brands" },
      {
        property: "og:description",
        content:
          "Meta Ads, creative testing, and content production systems for D2C and content-led brands. Backed by a visual production background.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Why me", href: "#why" },
  { label: "Proof", href: "#proof" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

const IMPACT = [
  {
    metric: "53%",
    title: "More efficient CPA",
    body: "CPA tembus 53% di bawah target SOP perusahaan lewat audience segmentation dan creative-level optimization.",
    icon: TrendingUp,
  },
  {
    metric: "2x",
    title: "Faster creative iteration",
    body: "Implementasi AI voice cloning dan generative B-roll workflow buat ngebut produksi varian iklan tanpa kehilangan brand voice.",
    icon: Wand2,
  },
  {
    metric: "20+",
    title: "MICE & event projects",
    body: "Pengalaman photography & videography untuk corporate event, gathering, dan brand documentation berskala nasional.",
    icon: Camera,
  },
];

const CAPABILITIES = [
  {
    icon: Megaphone,
    title: "Meta Ads Performance Strategy",
    body: "Campaign structure, audience segmentation, budget allocation, and daily performance monitoring for D2C and lead-generation campaigns.",
  },
  {
    icon: Sparkles,
    title: "Creative Testing & Direction",
    body: "Turning performance data into sharper hooks, angles, ad copy, and visual briefs that creative teams can execute faster.",
  },
  {
    icon: Layers,
    title: "Content Production System",
    body: "Building content calendars, creative trackers, and repeatable workflows so brands can produce more testable assets consistently.",
  },
];

const EXPERIENCE = [
  {
    role: "Meta Ads Specialist / Performance Marketer",
    org: "PT Anggun Vital Indonesia (SVO)",
    period: "Aug 2025 — Dec 2025",
    body: "Handled Meta Ads campaigns end-to-end for a D2C beauty & health brand. Budget up to IDR 180M / month with full-funnel structure (TOFU/MOFU/BOFU) and AI-assisted creative production to accelerate ad output.",
  },
  {
    role: "Digital Marketing Consultant",
    org: "Independent",
    period: "Sep 2024 — Present",
    body: "Strategic consulting for active clients across fine dining (lead gen) and wellness / health D2C — performance advisor diagnosing campaign issues and shaping recovery action plans.",
  },
  {
    role: "Head of Digital & Creative",
    org: "PT Karya Cipta Salira (JPO)",
    period: "Dec 2023 — Present",
    body: "Lead digital and creative strategy for a corporate event organizer. Manage writers, designers, and content producers across EN/ID copywriting and brand campaigns.",
  },
  {
    role: "Freelance Photographer & Videographer",
    org: "Independent",
    period: "2021 — 2026",
    body: "Documented 20+ corporate events — RAKERNAS KEMNAKER RI, BPJSTK Jakarta, UIN SH Jakarta, PT Kino Indonesia, PT Linfox IDN, and more. This visual background informs the creative briefs and hook strategy I write for Meta Ads campaigns.",
  },
];

const SKILLS = [
  "Meta Ads Manager", "Business Manager", "Meta Pixel", "CAPI",
  "Audience Segmentation", "CBO/ABO", "Creative Testing", "A/B Testing",
  "Scaling Strategy", "Google Sheets", "ROAS", "CPL", "CPA", "CTR",
  "Frequency", "Copywriting EN/ID", "Creative Briefing",
  "AI Content Workflows", "Photography", "Videography",
  "Adobe Creative Suite", "Notion",
];

const MARQUEE = [
  "Meta Ads", "D2C Growth", "Creative Testing",
  "Photography", "Video Production", "Content System",
];

const CREDIBILITY = [
  { k: "180Jt", v: "IDR / mo ad budget handled" },
  { k: "-53%", v: "CPA vs internal SOP target" },
  { k: "20+", v: "Production / event projects" },
  { k: "D2C", v: "& content-led brand focus" },
];

const WHY = [
  {
    icon: LineChart,
    title: "Performance-first thinking",
    body: "I read campaign performance through metrics like CPA, ROAS, CTR, CPL, frequency, and creative fatigue — then turn those signals into practical optimization decisions.",
  },
  {
    icon: FlaskConical,
    title: "Creative that responds to data",
    body: "I don't treat creative as guesswork. I use ad performance, hooks, angles, and audience behavior to shape creative briefs that are easier to test and improve.",
  },
  {
    icon: Camera,
    title: "Production-aware execution",
    body: "My background in photography, videography, and content systems helps me create ideas that are not only strategic, but also realistic to produce consistently.",
  },
];

const PROCESS = [
  { icon: Search, title: "Diagnose", body: "Review campaign structure, metrics, creative assets, and funnel issues." },
  { icon: Target, title: "Prioritize", body: "Identify the biggest bottleneck: audience, offer, creative, landing page, or tracking." },
  { icon: FlaskConical, title: "Test", body: "Build creative angles, campaign experiments, and iteration plans." },
  { icon: TrendingUp, title: "Improve", body: "Monitor results, document learnings, and scale what works." },
];

const TESTIMONIALS = [
  {
    quote: "Pandu helped us connect performance insights with clearer creative direction. The workflow became easier to execute and improve.",
    name: "Client / Brand Owner",
    role: "D2C beauty & health",
  },
  {
    quote: "His strength is not only reading Meta Ads numbers, but translating them into practical creative actions.",
    name: "Creative Team Lead",
    role: "In-house creative",
  },
  {
    quote: "Reliable across planning, creative direction, and production execution.",
    name: "Project Collaborator",
    role: "Corporate event production",
  },
];

const WORKED_WITH = [
  "PT Anggun Vital Indonesia (SVO)",
  "Takis Agency",
  "Independent Consulting",
  "Corporate Event Projects",
  "D2C Beauty & Health",
  "MICE / Brand Documentation",
];

function Index() {
  return (
    <DetailDrawerProvider>
      <IndexInner />
    </DetailDrawerProvider>
  );
}

function IndexInner() {
  const { open: openDrawer } = useDetailDrawer();
  useReveal();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const a = t.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 px-3 sm:px-4">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between gap-3 rounded-full glass px-4 py-3 md:px-7">
          <a href="#top" className="flex items-center gap-2 font-black tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full gradient-warm text-cream">
              P
            </span>
            <span className="text-sm md:text-base">Pandu W. Aji</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="relative transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider text-background transition-transform hover:scale-105 sm:inline-flex"
            >
              Let's Talk
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 md:pt-24 md:pb-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ animation: "fade-in 0.6s ease-out both" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Available for projects · 2026
              </div>
              <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Meta Ads · Creative Testing · D2C Growth
              </div>
            </div>
             <h1
                className="mt-6 max-w-full text-[clamp(2.2rem,8vw,4.8rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] lg:max-w-[680px] xl:max-w-[760px] 2xl:max-w-[840px]"
              style={{ animation: "fade-up 0.9s cubic-bezier(.16,1,.3,1) both", animationDelay: "0.1s" }}
            >
              <span className="block lg:whitespace-nowrap">Performance</span>
              <span className="block lg:whitespace-nowrap"> meets <span className="gradient-text italic">visual</span></span>
              <span className="block md:whitespace-nowrap">storytelling.</span>
            </h1>
            <p
              className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animation: "fade-up 0.9s cubic-bezier(.16,1,.3,1) both", animationDelay: "0.25s" }}
            >
              I'm Pandu — a <strong className="text-foreground">Meta Ads performance marketer
              and creative strategist</strong> helping D2C and content-led brands improve
              ad performance through data analysis, creative testing, and scalable
              content workflows. Backed by a visual production background.
            </p>
            <div
              className="mt-9 flex flex-wrap gap-3"
              style={{ animation: "fade-up 0.9s cubic-bezier(.16,1,.3,1) both", animationDelay: "0.4s" }}
            >
              <a
                href="#work"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[0_18px_40px_-12px_color-mix(in_oklch,var(--burnt)_70%,transparent)]"
              >
                View My Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#contact"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-foreground/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Start a Project
              </a>
            </div>
            <div
              className="mt-4 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              style={{ animation: "fade-up 0.9s cubic-bezier(.16,1,.3,1) both", animationDelay: "0.5s" }}
            >
              <a
                href={LINKS.cv}
                target="_blank"
                rel="noreferrer"
                aria-label="Download CV"
                className="group inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Download className="h-3.5 w-3.5" /> Download CV
              </a>
              <span className="text-border">/</span>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="group inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" /> Open LinkedIn
              </a>
            </div>

            <div
              className="mt-12 grid grid-cols-3 items-center gap-3 border-t border-border pt-8 sm:flex sm:flex-wrap sm:gap-8"
              style={{ animation: "fade-up 0.9s cubic-bezier(.16,1,.3,1) both", animationDelay: "0.55s" }}
            >
              <div>
                <div className="text-display text-2xl gradient-text sm:text-4xl">2+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
                  Years experience
                </div>
              </div>
              <div className="hidden h-12 w-px bg-border sm:block" />
              <div>
                <div className="text-display text-2xl gradient-text sm:text-4xl">180Jt</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
                  IDR / mo Ads
                </div>
              </div>
              <div className="hidden h-12 w-px bg-border sm:block" />
              <div>
                <div className="text-display text-2xl gradient-text sm:text-4xl">D2C</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
                  Growth focus
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative md:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div
                className="absolute inset-0 rounded-[2.5rem] gradient-warm blur-2xl opacity-70"
                style={{ animation: "orb 14s ease-in-out infinite" }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] glass p-6 sm:p-8">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                    <span>// Monogram</span>
                    <span>2026</span>
                  </div>
                  <div className="relative grid place-items-center">
                    <div
                      className="absolute h-40 w-40 rounded-full gradient-warm opacity-90 blur-xl sm:h-56 sm:w-56"
                      style={{ animation: "orb 12s ease-in-out infinite reverse" }}
                    />
                    <span
                      className="relative font-black leading-none gradient-text text-[clamp(7rem,28vw,14rem)]"
                      style={{ letterSpacing: "-0.08em" }}
                    >
                      P
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                        Now playing
                      </div>
                      <div className="mt-1 text-sm font-bold">Meta Ads × Creative Studio</div>
                    </div>
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="h-2 w-2 rounded-full bg-sage" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative border-y border-border bg-foreground py-6 text-background">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 gap-12 pr-12 text-display text-3xl md:text-5xl" style={{ animation: "marquee 30s linear infinite" }}>
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                {m}
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Credibility strip */}
      <section aria-label="Credibility highlights" className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 md:pt-20">
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {CREDIBILITY.map((c, i) => (
            <div key={i} className="bg-card p-6 md:p-8">
              <div className="text-display text-3xl gradient-text md:text-5xl">{c.k}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground md:text-xs">
                {c.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work / Impact */}
      <section id="work" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="reveal mb-14 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            01 — Selected Impact
          </div>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            Numbers that <span className="gradient-text italic">moved</span> the needle.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {IMPACT.map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={i}
                className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 ring-glow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full gradient-warm opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-50" />
                <div className="relative">
                  <Icon className="h-7 w-7 text-primary" />
                  <div className="text-display mt-8 text-6xl gradient-text">{item.metric}</div>
                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-24 mb-12 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Case Studies
          </div>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            Selected <span className="gradient-text italic">work</span>.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            These are selected examples of how I combine campaign structure,
            creative testing, and production systems to improve performance.
            Each case is broken down into problem, approach, and result so brands
            and recruiters can read it quickly.
          </p>
        </div>
        <CaseStudies />
      </section>

      {/* Why work with me + Process */}
      <section id="why" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Why work with me?
            </div>
            <h2 className="text-display mt-4 text-4xl md:text-6xl">
              Where data and <span className="gradient-text italic">creative</span> meet.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            I'm not just a media buyer and not just a creative person. My strength is
            connecting performance data with creative execution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {WHY.map((w, i) => {
            const Icon = w.icon;
            return (
              <article
                key={i}
                className="reveal group relative flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-500 ring-glow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/40">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-extrabold md:text-xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </article>
            );
          })}
        </div>

        {/* Process */}
        <div className="reveal mt-24 mb-12 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            How I usually work
          </div>
          <h2 className="text-display mt-4 text-3xl md:text-5xl">
            A simple <span className="gradient-text italic">four-step</span> loop.
          </h2>
        </div>
        <ol className="grid gap-4 md:grid-cols-4">
          {PROCESS.map((p, i) => {
            const Icon = p.icon;
            return (
              <li
                key={i}
                className="reveal relative rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/40 md:p-7"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    Step 0{i + 1}
                  </div>
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-display mt-5 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Proof & references */}
      <section id="proof" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="reveal mb-14 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Proof & references
          </div>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            What collaborators <span className="gradient-text italic">say</span>.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            Selected notes from clients, creative leads, and project collaborators.
            Full references available on request.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="reveal relative flex flex-col rounded-3xl border border-border glass p-7 transition-all hover:border-primary/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground md:text-[15px]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-bold">{t.name}</div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Worked with */}
        <div className="reveal mt-20 rounded-3xl border border-border bg-card p-7 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Worked with / projects across
              </div>
              <h3 className="text-display mt-3 text-2xl md:text-3xl">
                Brands, agencies, and <span className="gradient-text italic">independent</span> work.
              </h3>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              A snapshot of brands, partners, and project types I've collaborated with.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {WORKED_WITH.map((w, i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold text-foreground/80"
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* Work samples on request */}
        <div className="reveal mt-10 grid gap-6 rounded-3xl border border-border bg-card p-7 md:grid-cols-12 md:items-center md:p-10">
          <div className="md:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Work samples available on request
            </div>
            <h3 className="text-display mt-3 text-2xl md:text-3xl">
              Private case decks, briefs, and <span className="gradient-text italic">reporting</span>.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Selected campaign breakdowns, creative briefs, production samples, and
              reporting snapshots can be shared privately when relevant. Some campaign
              data is sensitive, so this lives outside the public site.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="#contact"
              aria-label="Request work samples"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.03]"
            >
              <FileText className="h-4 w-4" /> Request work samples
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              02 — Capabilities
            </div>
            <h2 className="text-display mt-4 text-4xl md:text-6xl">
              What I bring <br />
              to the <span className="gradient-text italic">table</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Tiga area utama yang sering jadi titik temu antara performance, kreatif,
            dan operasional brand.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <article
                key={i}
                className="reveal group relative flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-500 ring-glow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-warm">
                  <Icon className="h-6 w-6 text-cream" />
                </div>
                <h3 className="text-display mt-8 text-2xl">{c.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <button
                  type="button"
                  onClick={() => openDrawer(CAPABILITY_DRAWERS[i])}
                  aria-label={`Read more about ${c.title}`}
                  className="group/btn mt-8 inline-flex cursor-pointer items-center gap-2 self-start text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-foreground"
                >
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:rotate-45" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="reveal mb-14 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            03 — Experience
          </div>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            A timeline of <span className="gradient-text italic">craft</span>.
          </h2>
        </div>

        <ol className="relative space-y-3 border-l-2 border-dashed border-border pl-6 md:pl-10">
          {EXPERIENCE.map((e, i) => (
            <li
              key={i}
              className="reveal group relative rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/40 md:p-8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="absolute -left-[30px] top-9 grid h-4 w-4 place-items-center rounded-full bg-background md:-left-[44px]">
                <span className="h-3 w-3 rounded-full gradient-warm" />
              </span>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold md:text-xl">{e.role}</h3>
                  <div className="mt-1 text-sm font-semibold text-primary">{e.org}</div>
                </div>
                <div className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {e.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="reveal mb-12 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            04 — Skills & Tools
          </div>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            The <span className="gradient-text italic">stack</span>.
          </h2>
        </div>
        <div className="reveal flex flex-wrap gap-3">
          {SKILLS.map((s, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 md:pb-36">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-border bg-foreground p-6 text-background sm:rounded-[2.5rem] sm:p-10 md:p-16">
          <div
            className="absolute -right-20 -top-20 h-96 w-96 rounded-full gradient-warm opacity-60 blur-3xl"
            style={{ animation: "orb 16s ease-in-out infinite" }}
          />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full gradient-warm opacity-40 blur-3xl" />
          <div className="relative grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                05 — Contact
              </div>
              <h2 className="text-display mt-5 text-3xl sm:text-4xl md:text-7xl">
                Let's <span className="gradient-text italic">talk</span>.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-background/70 md:text-lg">
                Available for freelance projects, consulting, and performance marketing roles.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/60 md:text-base">
                Best for D2C and content-led brands that want sharper Meta Ads performance,
                a stronger creative testing system, or a more reliable content workflow.
                Recruiters welcome — happy to walk through campaign structure and results live.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={LINKS.email}
                  aria-label="Email Pandu"
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
                >
                  Email Me
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Message on WhatsApp"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-background hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-background hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
                <a
                  href={LINKS.cv}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download CV"
                  className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-background"
                >
                  <Download className="h-3.5 w-3.5" /> Download CV
                </a>
                <span className="text-background/30">/</span>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-background"
                >
                  <Linkedin className="h-3.5 w-3.5" /> Open LinkedIn
                </a>
              </div>
            </div>
            <div className="space-y-4 md:col-span-5">
              <ContactRow icon={Mail} label="Email" value="waskitopandu600@gmail.com" href={LINKS.email} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value="+62 858 9912 2508" href={LINKS.whatsapp} />
              <ContactRow icon={Phone} label="Phone" value="+62 858 9912 2508" href={LINKS.phone} />
              <ContactRow icon={Linkedin} label="LinkedIn" value="/in/panduwskta" href={LINKS.linkedin} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span>© 2026 Pandu W. Aji</span>
          <span>Performance · Creative · Production</span>
          <span>Crafted with intention.</span>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between gap-3 rounded-2xl border border-background/15 bg-background/5 p-4 backdrop-blur transition-all hover:border-accent/60 hover:bg-background/10 sm:p-5"
    >
      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background/10">
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-background/60">
            {label}
          </div>
          <div className="mt-0.5 truncate text-sm font-semibold">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-45" />
    </a>
  );
}
