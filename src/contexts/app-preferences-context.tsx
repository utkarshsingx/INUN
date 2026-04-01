"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getMessages, type Locale } from "@/i18n/messages";

const STORAGE_THEME = "inun-theme";
const STORAGE_LOCALE = "inun-locale";

export type ThemeMode = "light" | "dark";

type AppPreferencesContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  messages: Messages;
};

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(
  null,
);

function readStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const s = localStorage.getItem(STORAGE_THEME);
  if (s === "dark" || s === "light") return s;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const s = localStorage.getItem(STORAGE_LOCALE);
  if (s === "ar" || s === "en") return s;
  return "en";
}

export function AppPreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setThemeState(readStoredTheme());
    setLocaleState(readStoredLocale());
  }, []);

  const setTheme = useCallback((next: ThemeMode) => {
    setThemeState(next);
    localStorage.setItem(STORAGE_THEME, next);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_LOCALE, next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_THEME, next);
      return next;
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.lang = locale === "ar" ? "ar" : "en";
    root.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale, mounted]);

  const messages = useMemo(() => getMessages(locale), [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      theme,
      setTheme,
      toggleTheme,
      messages,
    }),
    [locale, setLocale, theme, setTheme, toggleTheme, messages],
  );

  return (
    <AppPreferencesContext.Provider value={value}>
      {children}
    </AppPreferencesContext.Provider>
  );
}

export function useAppPreferences() {
  const ctx = useContext(AppPreferencesContext);
  if (!ctx) {
    throw new Error("useAppPreferences must be used within AppPreferencesProvider");
  }
  return ctx;
}

