"use client";

import { AppPreferencesProvider } from "@/contexts/app-preferences-context";
import { DocumentMeta } from "@/components/ui/document-meta";
import { PageLoadGate } from "@/components/effects/page-load-gate";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { LandingPageContent } from "@/components/pages/landing-page-content";

/** Single client island: locale/theme, meta, splash, full page, scroll control */
export function ClientShell() {
  return (
    <AppPreferencesProvider>
      <DocumentMeta />
      <PageLoadGate>
        <LandingPageContent />
      </PageLoadGate>
      <ScrollToTop />
    </AppPreferencesProvider>
  );
}
