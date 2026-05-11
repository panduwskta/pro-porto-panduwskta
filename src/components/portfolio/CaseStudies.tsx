import caseSvo from "@/assets/case-svo.jpg";
import caseAi from "@/assets/case-ai.jpg";
import caseMice from "@/assets/case-mice.jpg";
import { ArrowUpRight } from "lucide-react";
import { useDetailDrawer } from "@/components/portfolio/DetailDrawer";
import { CASE_DRAWERS } from "@/components/portfolio/drawer-content";

const CASES = [
  {
    img: caseSvo,
    tag: "D2C · Beauty & Health",
    client: "PT Anggun Vital Indonesia (SVO)",
    title: "Scaling a beauty D2C with surgical CPA discipline",
    summary:
      "Restrukturisasi full-funnel Meta Ads dengan audience segmentation tajam dan creative testing harian. Hasilnya CPA stabil di bawah target SOP perusahaan, dengan budget tetap efisien.",
    results: [
      { k: "-53%", v: "CPA vs SOP" },
      { k: "3x", v: "ROAS Target" },
      { k: "Full", v: "Funnel coverage" },
    ],
  },
  {
    img: caseAi,
    tag: "Creative Ops · AI Workflow",
    client: "Internal R&D",
    title: "AI-assisted creative pipeline untuk varian iklan 2x lebih cepat",
    summary:
      "Bangun workflow AI voice cloning + generative B-roll buat akselerasi produksi varian iklan. Tim kreatif bisa rilis hook baru tiap minggu tanpa nambah headcount.",
    results: [
      { k: "2x", v: "Iteration speed" },
      { k: "-40%", v: "Production cost" },
      { k: "Weekly", v: "Hook drops" },
    ],
  },
  {
    img: caseMice,
    tag: "Visual Production · MICE",
    client: "Takis Agency & partner brands",
    title: "Visual coverage untuk 20+ corporate event & brand documentation",
    summary:
      "Lead photography & videography untuk MICE, gathering, dan launch event. Output siap pakai untuk recap reels, press kit, sampai aset campaign lanjutan.",
    results: [
      { k: "20+", v: "Event projects" },
      { k: "4K", v: "Video deliverables" },
      { k: "Multi", v: "Brand portfolio" },
    ],
  },
];

export function CaseStudies() {
  const { open } = useDetailDrawer();
  return (
    <div className="space-y-10 md:space-y-16">
      {CASES.map((c, i) => {
        const reverse = i % 2 === 1;
        return (
          <article
            key={i}
            className="reveal group grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all hover:border-primary/40 md:grid-cols-12 md:gap-10 md:p-8"
          >
            <div
              className={`relative md:col-span-6 ${reverse ? "md:order-2" : ""}`}
            >
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
                  Case {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between md:col-span-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {c.tag}
                </div>
                <h3 className="text-display mt-4 text-2xl md:text-4xl">
                  {c.title}
                </h3>
                <div className="mt-3 text-sm font-semibold text-muted-foreground">
                  {c.client}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {c.summary}
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {c.results.map((r, j) => (
                  <div key={j}>
                    <div className="text-display text-2xl gradient-text md:text-3xl">
                      {r.k}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      {r.v}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                Case summary <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
