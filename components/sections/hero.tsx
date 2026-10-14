import Image from "next/image";

import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { siteConfig, stats } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-slate-50 dark:bg-ink">
      <div className="absolute inset-0 bg-grid-light bg-[length:44px_44px] opacity-70 dark:bg-grid-dark dark:opacity-35" />
      <div className="absolute inset-x-0 top-1/4 h-px animate-pulse-line bg-gradient-to-r from-transparent via-cyanline to-transparent" />
      <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-50" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-semibold text-electric">
            <MapPin className="h-4 w-4" />
            {siteConfig.location}
          </div>
          <h1 className="mt-7 text-balance text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            AI agents and automations for small businesses, built to not break.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I&apos;m {siteConfig.founder}, a Miami-based AI engineer. I build voice agents, lead pipelines, and workflow
            automations, and I test them against failure before they touch your customers.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Book a 20-minute call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              See the work
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            {["Permission-gated actions", "Audit logs on every run", "Automatic recovery"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-electric" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel animate-float overflow-hidden rounded-[2rem] p-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-graphite">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">VibeLeads</p>
                  <p className="mt-1 text-lg font-semibold">The pipeline I use to find my own clients</p>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={assetPath("/images/vibeleads-lead-console.png")}
                  alt="VibeLeads lead console showing tracked local businesses with status filters"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-4 text-center">
                <p className="text-xl font-semibold text-electric">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
