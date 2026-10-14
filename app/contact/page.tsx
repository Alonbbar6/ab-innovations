import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ClientQuestionnaire } from "@/components/sections/client-questionnaire";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} about AI voice agents, lead generation automation, and custom AI assistants.`
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell me what you want to automate."
        description="Use the form for voice agents, lead pipelines, CRM automation, and AI assistants. I reply personally within one business day."
        primaryCta="Email me"
        primaryHref={`mailto:${siteConfig.email}`}
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Book a 20-minute call</h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              Share the goal, the tools you already use, and your timeline. If the idea is still early, I can help define
              the scope on the call.
            </p>
            <div className="mt-8 grid gap-4">
              <Link href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-graphite">
                <Mail className="h-5 w-5 text-electric" />
                {siteConfig.email}
              </Link>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: siteConfig.linkedin },
                { icon: Github, label: "GitHub", href: siteConfig.github }
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-electric hover:text-electric dark:border-white/10 dark:text-slate-200"
                  aria-label={item.label}
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <ClientQuestionnaire />
        </div>
      </section>
    </>
  );
}
