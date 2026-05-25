import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FAQ } from "@/components/sections/faq";
import { pricingPlans } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flexible pricing for AB Innovation AI, software, SaaS, automation, and consulting engagements."
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Engagements for premium builds and serious launches."
        description="Transparent starting points for websites, MVPs, automations, SaaS products, and enterprise AI systems."
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-panel ${
                plan.highlighted
                  ? "border-electric bg-ink text-white dark:bg-white dark:text-ink"
                  : "border-slate-200 bg-white dark:border-white/10 dark:bg-graphite"
              }`}
            >
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className={`mt-3 text-sm leading-7 ${plan.highlighted ? "text-slate-200 dark:text-slate-700" : "text-slate-600 dark:text-slate-300"}`}>
                {plan.description}
              </p>
              <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
              <div className="mt-8 grid gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-electric" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className={`focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                  plan.highlighted ? "bg-electric text-white" : "bg-ink text-white dark:bg-white dark:text-ink"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-20 dark:bg-graphite/60 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FAQ />
        </div>
      </section>
    </>
  );
}
