import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ClientQuestionnaire } from "@/components/sections/client-questionnaire";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AB Innovation for AI development, software builds, automation, SaaS, and digital products."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell AB Innovation what you want to build."
        description="Use the inquiry form for AI apps, software projects, automation systems, SaaS builds, storefronts, and consulting."
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Business inquiries</h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              Share the goal, timeline, and business context. AB Innovation can help define scope if the idea is still early.
            </p>
            <div className="mt-8 grid gap-4">
              <Link href="mailto:hello@abinnovation.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-graphite">
                <Mail className="h-5 w-5 text-electric" />
                hello@abinnovation.com
              </Link>
              <Link href="#" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-graphite">
                <CalendarDays className="h-5 w-5 text-electric" />
                Calendly strategy call placeholder
              </Link>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" }
              ].map((item) => (
                <Link key={item.label} href="#" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-electric hover:text-electric dark:border-white/10 dark:text-slate-200" aria-label={item.label}>
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
