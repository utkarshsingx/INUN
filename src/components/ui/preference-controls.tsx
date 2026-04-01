"use client";

import { Moon, Sun } from "lucide-react";
import { useAppPreferences } from "@/contexts/app-preferences-context";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Compact segment for nav bar */
  compact?: boolean;
};

export function PreferenceControls({ className, compact }: Props) {
  const { theme, toggleTheme, locale, setLocale, messages } = useAppPreferences();

  return (
    <div
      className={cn(
        "flex items-center gap-1.5",
        compact ? "text-xs" : "text-sm",
        className,
      )}
      role="group"
      aria-label="Display preferences"
    >
      <div className="flex rounded-lg border border-stone-200/90 bg-stone-50/80 p-0.5 shadow-sm dark:border-white/10 dark:bg-zinc-900/80">
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={cn(
            "min-h-9 min-w-9 rounded-md px-2 py-1.5 font-medium transition-colors sm:min-h-0 sm:min-w-0",
            locale === "en"
              ? "bg-emerald-100 text-emerald-950 dark:bg-emerald-900/50 dark:text-emerald-50"
              : "text-stone-600 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-white",
          )}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLocale("ar")}
          className={cn(
            "min-h-9 min-w-9 rounded-md px-2 py-1.5 font-medium transition-colors sm:min-h-0 sm:min-w-0",
            locale === "ar"
              ? "bg-emerald-100 text-emerald-950 dark:bg-emerald-900/50 dark:text-emerald-50"
              : "text-stone-600 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-white",
          )}
        >
          عربي
        </button>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          theme === "dark" ? messages.prefThemeLight : messages.prefThemeDark
        }
        className="inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-lg border border-stone-200/90 bg-stone-50/80 text-stone-700 shadow-sm transition-colors hover:bg-stone-100 dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:size-9 sm:min-h-9 sm:min-w-9"
      >
        {theme === "dark" ? (
          <Sun className="size-4" aria-hidden />
        ) : (
          <Moon className="size-4" aria-hidden />
        )}
      </button>
    </div>
  );
}
