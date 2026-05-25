"use client";

import { useMemo, useState } from "react";
import { Search, ShoppingCart, Star } from "lucide-react";
import { products } from "@/data/site";

const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];

export function ProductBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery = `${product.name} ${product.description} ${product.tags.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="glass-panel rounded-3xl p-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search AI tools, templates, SaaS products..."
              className="focus-ring h-14 w-full rounded-full border border-slate-300 bg-white py-4 pl-12 pr-4 text-sm dark:border-white/10 dark:bg-graphite"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-electric text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-electric dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <article
            key={product.name}
            className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-panel transition hover:-translate-y-1 hover:border-electric/50 dark:border-white/10 dark:bg-graphite"
          >
            {product.featured ? (
              <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </div>
            ) : null}
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              {product.category}
            </p>
            <h3 className="mt-4 pr-24 text-xl font-semibold">{product.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{product.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-white/10">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex items-center justify-between gap-4">
              <p className="text-2xl font-semibold">{product.price}</p>
              <button className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-electric dark:bg-white dark:text-ink">
                <ShoppingCart className="h-4 w-4" />
                Buy
              </button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-600 dark:border-white/15 dark:text-slate-300">
          No products match your search yet.
        </div>
      ) : null}
    </div>
  );
}
