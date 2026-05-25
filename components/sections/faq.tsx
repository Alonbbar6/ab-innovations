import { faqs } from "@/data/site";

export function FAQ() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {faqs.map((faq) => (
        <article key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-graphite">
          <h3 className="text-lg font-semibold">{faq.question}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
        </article>
      ))}
    </div>
  );
}
