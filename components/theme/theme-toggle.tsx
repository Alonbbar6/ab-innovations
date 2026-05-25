"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
      aria-label="Toggle dark mode"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
