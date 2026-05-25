import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { ProductBrowser } from "@/components/sections/product-browser";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/sections/reveal";
import { blogPosts, processSteps, testimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="AI and software services built for revenue, speed, and trust."
              description="AB Innovation helps you launch polished digital systems that do real work: selling, supporting, automating, analyzing, and scaling."
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
              title="Portfolio concepts designed to show premium execution."
              description="Use these placeholders as case study templates for completed apps, automation builds, SaaS dashboards, and AI products."
            />
            <Link
              href="/portfolio"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-electric hover:text-electric dark:border-white/10"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Reveal className="mt-10">
            <ProjectsGrid limit={2} />
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Products"
            title="A storefront foundation for apps, AI tools, templates, and digital services."
            description="Searchable product cards, categories, featured offers, and buy actions are ready for checkout integration."
            align="center"
          />
          <Reveal className="mt-10">
            <ProductBrowser />
          </Reveal>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-20 dark:bg-graphite/60 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="From idea to launch-ready system."
            description="A clear product process keeps the work focused, premium, and useful."
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
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Client signal"
            title="Built to feel like a senior product team."
            description="Use these testimonial placeholders until real client quotes are ready."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name}>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-panel dark:border-white/10 dark:bg-graphite">
                  <p className="text-lg leading-8">"{testimonial.quote}"</p>
                  <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                  </div>
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
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Blog"
            title="Insights placeholder for future content marketing."
            description="Add founder notes, case studies, AI guides, and monetization playbooks here."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-graphite">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric">{post.category}</p>
                <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
                <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
