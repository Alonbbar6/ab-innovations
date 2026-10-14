import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.founder}, the Miami-based AI engineer behind ${siteConfig.name}.`
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`I'm ${siteConfig.founder}. I build AI systems that fail safely.`}
        description={`${siteConfig.name} is a one-person AI engineering practice in ${siteConfig.location}. You work directly with me, from the first call to the handoff.`}
        primaryCta="Book a 20-minute call"
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Background"
            title="Agents in production, apps in the App Store."
            description="I design AI agents for a fintech company by day and ship my own systems on the side: a robot control runtime with fault-injection testing, a voice bot that stress-tests phone receptionists, a lead pipeline tracking thousands of businesses, and two iOS apps on the App Store. I'm finishing a B.S. in Applied AI at Miami Dade College."
          />
          <div className="grid gap-5">
            {[
              "An AI agent that touches real systems needs permission gates, audit logs, and a way to recover on its own. I build those in first.",
              "A safety check you have never watched fail is a safety check you cannot claim works. Every build ships with the tests that tried to break it.",
              "Small businesses hire people, not studios. You get one engineer who knows your whole system and answers the phone.",
              "You own the code. Source, documentation, and tests are handed over at the end of every project."
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
