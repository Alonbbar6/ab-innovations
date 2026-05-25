import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { CTA } from "@/components/sections/cta";
import { aiSolutionCards } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Solutions",
  description: "AI solutions landing page for customer assistants, knowledge engines, revenue automation, and product copilots."
};

export default function AiSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title="Deploy AI where it creates measurable business leverage."
        description="AB Innovation designs AI workflows that connect to your data, tools, customers, and team so automation becomes a practical advantage."
        primaryCta="Design my AI system"
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {aiSolutionCards.map((solution) => (
            <article key={solution.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-panel dark:border-white/10 dark:bg-graphite">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                <solution.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold">{solution.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{solution.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-20 dark:bg-graphite/60 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-electric">AI readiness</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Strategy, security, and UX before automation goes live.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              The right AI system needs clean inputs, clear handoffs, careful permissions, and measurable outcomes. AB Innovation plans the workflow before adding intelligence.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-graphite">
            {["Data and document audit", "Workflow mapping", "Prompt and retrieval design", "Human review controls", "Analytics and improvement loop"].map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-slate-200 py-4 last:border-0 dark:border-white/10">
                <ShieldCheck className="h-5 w-5 text-electric" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
            <Link href="/contact" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white">
              Start AI discovery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
