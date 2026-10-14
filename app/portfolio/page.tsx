import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies from Bardales Labs: a fault-tested robot control runtime, a voice agent stress tester, a lead generation pipeline, and two iOS apps."
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that was tested against failure."
        description="Real systems with public source where possible, the numbers they produced, and the bugs the tests caught along the way."
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
