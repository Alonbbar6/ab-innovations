import { services } from "@/data/site";

export function ServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <article
          key={service.title}
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-panel transition hover:-translate-y-1 hover:border-electric/50 dark:border-white/10 dark:bg-graphite"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
            <service.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
        </article>
      ))}
    </div>
  );
}
