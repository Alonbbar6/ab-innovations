import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CTA } from "@/components/sections/cta";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "AI voice and phone agents, lead generation and CRM automation, and custom AI assistants with RAG."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three services, each one tested before it goes live."
        description="I keep the offer narrow on purpose. Voice agents, lead pipelines, and AI assistants are what I build every week, so you get depth instead of a menu."
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
            title="A build process that decides the failure cases first."
            description="Permissions, handoffs, and logging are designed before the first line of code."
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
