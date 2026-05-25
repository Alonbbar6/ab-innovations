import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio and case study layouts for AB Innovation AI, SaaS, automation, and web application projects."
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Case-study ready project showcases."
        description="Present completed builds with visuals, measurable outcomes, technologies, demos, source links, and client-ready narrative structure."
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectsGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
