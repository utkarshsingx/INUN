"use client";

import { useEffect } from "react";
import { useAppPreferences } from "@/contexts/app-preferences-context";

/** Syncs document title + meta description with active locale */
export function DocumentMeta() {
  const { messages } = useAppPreferences();

  useEffect(() => {
    document.title = messages.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", messages.metaDescription);
  }, [messages]);

  return null;
}
