import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { navItems } from "@/data/site";
import { NewsletterForm } from "@/components/sections/newsletter-form";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-sm font-black text-white dark:bg-white dark:text-ink">
              AB
            </span>
            <div>
              <p className="text-sm font-bold tracking-[0.18em]">AB Innovation</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                AI and software studio
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            Premium AI applications, SaaS products, automation systems, and software experiences for ambitious
            businesses.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@abinnovation.com" }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-electric hover:text-electric dark:border-white/10 dark:text-slate-300"
                aria-label={item.label}
              >
                <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Explore
          </h2>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition hover:text-electric dark:text-slate-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <NewsletterForm />
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
        © {new Date().getFullYear()} AB Innovation. All rights reserved.
      </div>
    </footer>
  );
}
