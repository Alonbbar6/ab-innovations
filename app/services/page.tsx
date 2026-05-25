import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CTA } from "@/components/sections/cta";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "AI app development, web applications, automation, SaaS, mobile apps, consulting, and UI/UX design."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Build the software layer your business needs next."
        description="From AI-powered apps to automation systems and premium web platforms, AB Innovation helps convert business ideas into working digital infrastructure."
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ServicesGrid />
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-20 dark:bg-graphite/60 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Delivery model"
            title="A practical build process for serious products."
            description="Clear strategy, polished UX, scalable engineering, and launch support."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-graphite">
                <p className="text-sm font-semibold text-electric">Phase {index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
