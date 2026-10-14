import Image from "next/image";

import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import { ExternalLink, Lock } from "lucide-react";
import { projects } from "@/data/site";

export function ProjectsGrid({ limit }: { limit?: number }) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {visibleProjects.map((project) => (
        <article
          key={project.title}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-panel dark:border-white/10 dark:bg-graphite"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-ink">
            {project.image ? (
              <Image
                src={assetPath(project.image)}
                alt={project.imageAlt ?? `${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top transition duration-700 hover:scale-105"
              />
            ) : (
              <div className="flex h-full flex-col justify-end bg-gradient-to-br from-ink via-graphite to-electric/60 p-6 font-mono text-sm text-slate-200">
                <p className="text-cyanline">$ pytest</p>
                <p className="mt-1">56 passed in 4.2s</p>
                <p className="mt-4 text-cyanline">$ python -m patient_bot.cli</p>
                <p className="mt-1">will dial: receptionist under test</p>
                <p>place this call? [y/N]: y</p>
              </div>
            )}
            <div className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {project.category}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
            <p className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm font-medium text-slate-700 dark:bg-white/5 dark:text-slate-200">
              {project.outcome}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.length > 0 ? (
                project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.label}
                  </Link>
                ))
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300">
                  <Lock className="h-4 w-4" />
                  Private repo
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
