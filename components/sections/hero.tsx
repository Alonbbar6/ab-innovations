import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Sparkles } from "lucide-react";
import { stats } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-slate-50 dark:bg-ink">
      <div className="absolute inset-0 bg-grid-light bg-[length:44px_44px] opacity-70 dark:bg-grid-dark dark:opacity-35" />
      <div className="absolute inset-x-0 top-1/4 h-px animate-pulse-line bg-gradient-to-r from-transparent via-cyanline to-transparent" />
      <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-50" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-semibold text-electric">
            <Sparkles className="h-4 w-4" />
            Premium AI and software studio
          </div>
          <h1 className="mt-7 text-balance text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-7xl">
            Build Your Vision with AI.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            AB Innovation designs and develops intelligent web apps, SaaS platforms, automations, and digital
            products that help modern businesses move faster and look premium from day one.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              View portfolio
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            {["AI-first strategy", "Launch-ready code", "Conversion-focused UX"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-electric" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel animate-float overflow-hidden rounded-[2rem] p-5">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-graphite">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    AB Innovation OS
                  </p>
                  <p className="mt-1 text-lg font-semibold">AI product pipeline</p>
                </div>
                <Cpu className="h-6 w-6 text-electric" />
              </div>
              <div className="mt-5 grid gap-4">
                {[
                  ["Discovery", "98% clarity score", "w-11/12"],
                  ["Design system", "Premium UI kit", "w-10/12"],
                  ["AI workflow", "4 automations live", "w-9/12"],
                  ["Launch", "Netlify-ready", "w-full"]
                ].map(([title, label, width]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">{title}</span>
                      <span className="text-slate-500 dark:text-slate-400">{label}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                      <div className={`h-full rounded-full bg-gradient-to-r from-electric to-cyanline ${width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-4 text-center">
                <p className="text-xl font-semibold text-electric">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
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
