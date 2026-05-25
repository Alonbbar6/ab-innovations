import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AB Innovation, a premium AI and software development studio."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A focused AI and software studio for modern business builders."
        description="AB Innovation exists to help companies turn technical ambition into sharp, useful products with premium design and practical engineering."
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Brand position"
            title="Futuristic when it matters. Trustworthy everywhere."
            description="The studio combines strategy, design, AI integration, and full-stack development to build systems that are polished enough for customers and practical enough for daily operations."
          />
          <div className="grid gap-5">
            {[
              "Premium software should be clear, fast, secure, and easy to use.",
              "AI should remove friction from real workflows, not exist as a gimmick.",
              "Every interface should strengthen the brand while helping users move with confidence.",
              "The best digital products are built with monetization, operations, and growth in mind."
            ].map((value) => (
              <div key={value} className="rounded-3xl border border-slate-200 bg-white p-6 text-lg leading-8 dark:border-white/10 dark:bg-graphite">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
