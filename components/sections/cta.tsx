import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-glow dark:bg-white dark:text-ink sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyanline dark:text-electric">
              Start with a call
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Tell me what eats your team’s time. I’ll tell you what I would automate first.
            </h2>
          </div>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Book a 20-minute call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
