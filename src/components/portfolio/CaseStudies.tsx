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
    title: "Meta Ads full-funnel system",
    summary:
      "Built and optimized a full-funnel Meta Ads system handling up to IDR 180M/month in spend across TOFU, MOFU, and BOFU stages. Reworked campaign structure using a mix of CBO and ABO, refined audience segmentation, and executed daily creative optimization based on CPA, ROAS, CTR, and frequency performance. The result was a stable and scalable campaign system that maintained CPA 53% below the company’s SOP target while remaining efficient for long-term iteration by the internal team.",
    keyMetric: { k: "-53%", v: "CPA vs SOP target" },
    results: [
      { k: "3x", v: "ROAS Target" },
      { k: "Full", v: "Funnel coverage" },
      { k: "Daily", v: "Creative ops" },
    ],
  },
  {
    img: caseAi,
    tag: "Creative Testing · AI Workflow",
    client: "Internal R&D · Performance creative",
    title: "AI-assisted creative pipeline for 2x faster ad iteration",
    summary:
      "Developed an AI-assisted creative production workflow to solve increasing demand for weekly ad variations without scaling production cost and headcount at the same rate. By combining voice cloning, generative B-roll, and a structured hook-testing system, the team was able to produce and test new creative angles much faster. The workflow doubled creative iteration speed, reduced production costs by around 40%, and established a sustainable cadence for weekly hook launches.",
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
    summary:
      "Led photography and videography production for 20+ corporate events, brand gatherings, and launch activations with a strong focus on content reusability beyond the event itself. Planned visual coverage strategically to support recap reels, social media assets, press materials, internal presentations, and follow-up campaigns. This production background now directly shapes how I approach creative briefing and visual direction for Meta Ads campaigns.",
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

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {c.summary}
                </p>
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
