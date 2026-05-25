import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-electric">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Signal not found.</h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
        The page you requested is offline or has moved. Return to the AB Innovation command center.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </section>
  );
}
