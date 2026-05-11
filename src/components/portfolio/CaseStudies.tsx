import caseSvo from "@/assets/case-svo.jpg";
import caseAi from "@/assets/case-ai.jpg";
import caseMice from "@/assets/case-mice.jpg";
import { ArrowUpRight } from "lucide-react";
import { useDetailDrawer } from "@/components/portfolio/DetailDrawer";
import { CASE_DRAWERS } from "@/components/portfolio/drawer-content";

const CASES = [
  {
    img: caseSvo,
    tag: "D2C · Beauty & Health · Meta Ads",
    client: "PT Anggun Vital Indonesia (SVO)",
    title: "Meta Ads full-funnel system with CPA 53% below SOP",
    problem:
      "Brand needed disciplined CPA control while scaling Meta Ads spend up to IDR 180M / month across a full TOFU/MOFU/BOFU funnel.",
    approach:
      "Restructured campaign architecture (CBO + ABO), sharpened audience segmentation per funnel stage, and ran daily creative-level optimization based on CPA, ROAS, CTR, and frequency.",
    result:
      "CPA stabilized 53% below the company SOP target with a clean, scalable structure the internal team can keep iterating on.",
    keyMetric: { k: "-53%", v: "CPA vs SOP target" },
    results: [
      { k: "180Jt", v: "IDR / mo budget" },
      { k: "Full", v: "Funnel coverage" },
      { k: "Daily", v: "Creative ops" },
    ],
  },
  {
    img: caseAi,
    tag: "Creative Testing · AI Workflow",
    client: "Internal R&D · Performance creative",
    title: "AI-assisted creative pipeline for 2x faster ad iteration",
    problem:
      "Creative testing demanded more hooks and ad variants every week, but production headcount and budget could not scale at the same pace.",
    approach:
      "Built an AI-assisted workflow with voice cloning, generative B-roll, and a repeatable hook-testing matrix so the team could push fresh angles without rebuilding from scratch.",
    result:
      "Doubled creative iteration speed, lowered production cost ~40%, and made weekly hook drops a normal cadence.",
    keyMetric: { k: "2x", v: "Iteration speed" },
    results: [
      { k: "-40%", v: "Production cost" },
      { k: "Weekly", v: "Hook drops" },
      { k: "AI", v: "Assisted ops" },
    ],
  },
  {
    img: caseMice,
    tag: "Supporting · Visual Production",
    client: "Takis Agency & corporate event partners",
    title: "Visual production background that strengthens creative direction",
    problem:
      "Brands needed event documentation that could be reused beyond the day itself — for recap reels, press kits, and follow-up campaigns.",
    approach:
      "Led photography and videography for 20+ corporate events, gatherings, and launch activities, planning shot lists with downstream content reuse in mind.",
    result:
      "Multi-format visual assets ready for social, internal decks, and brand communication — a foundation that now informs the creative briefs I write for Meta Ads.",
    keyMetric: { k: "20+", v: "Event projects" },
    results: [
      { k: "4K", v: "Video deliverables" },
      { k: "Multi", v: "Brand portfolio" },
      { k: "Brief", v: "Informs ad creative" },
    ],
  },
];

export function CaseStudies() {
  const { open } = useDetailDrawer();
  return (
    <div className="space-y-10 md:space-y-16">
      {CASES.map((c, i) => {
        const reverse = i % 2 === 1;
        const isSecondary = i === 2;
        return (
          <article
            key={i}
            className="reveal group grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all hover:border-primary/40 md:grid-cols-12 md:gap-10 md:p-8"
          >
            <div className={`relative md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur">
                  {isSecondary ? "Supporting" : `Case ${String(i + 1).padStart(2, "0")}`}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                  {c.keyMetric.k} · {c.keyMetric.v}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between md:col-span-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {c.tag}
                </div>
                <h3 className="text-display mt-4 text-2xl md:text-4xl">{c.title}</h3>
                <div className="mt-3 text-sm font-semibold text-muted-foreground">{c.client}</div>

                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                      Problem
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                      {c.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                      Approach
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                      {c.approach}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                      Result
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground md:text-[15px]">
                      {c.result}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {c.results.map((r, j) => (
                  <div key={j}>
                    <div className="text-display text-2xl gradient-text md:text-3xl">{r.k}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      {r.v}
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => open(CASE_DRAWERS[i])}
                aria-label={`Open case summary: ${c.title}`}
                className="group/btn mt-6 inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-transparent px-0 py-1 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-foreground"
              >
                Case summary
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:rotate-45" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
