"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [joined, setJoined] = useState(false);

  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        Newsletter
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
        Get notes on AI products, automation, launches, and monetization.
      </p>
      <form
        className="mt-4 flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          setJoined(true);
        }}
      >
        <input
          type="email"
          required
          placeholder="Email address"
          className="focus-ring min-w-0 flex-1 rounded-full border border-slate-300 bg-transparent px-4 py-3 text-sm dark:border-white/10"
        />
        <button
          type="submit"
          className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full bg-electric text-white"
          aria-label="Subscribe"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      {joined ? <p className="mt-3 text-xs font-semibold text-electric">You are on the launch list.</p> : null}
    </div>
  );
}
