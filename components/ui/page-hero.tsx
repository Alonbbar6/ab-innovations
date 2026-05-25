import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
};

export function PageHero({ eyebrow, title, description, primaryCta = "Start a project", primaryHref = "/contact" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-ink">
      <div className="absolute inset-0 bg-grid-light bg-[length:42px_42px] opacity-60 dark:bg-grid-dark dark:opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-electric">{eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
          <Link
            href={primaryHref}
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            {primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
