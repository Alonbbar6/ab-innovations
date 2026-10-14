import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/sections/reveal";
import { processSteps } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Three things I build, and build well."
              description="Voice agents that answer your phone, pipelines that fill your CRM, and assistants that know your business. Each one ships with the tests that prove it holds up."
            />
          </Reveal>
          <Reveal className="mt-10">
            <ServicesGrid />
          </Reveal>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-20 dark:bg-graphite/60 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured work"
              title="Systems that were tested against failure, not just demoed."
              description="Real projects with public source where possible. Each one includes the bugs the tests caught."
            />
            <Link
              href="/portfolio"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-electric hover:text-electric dark:border-white/10"
            >
              View all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Reveal className="mt-10">
            <ProjectsGrid limit={3} />
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="From a problem to a system you can trust."
            description="Four steps, with the permissions and failure cases decided before any code is written."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title}>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-graphite">
                  <p className="text-sm font-semibold text-electric">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-20 dark:bg-graphite/60 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="FAQ" title="Questions before you build." align="center" />
          <div className="mt-10">
            <FAQ />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
