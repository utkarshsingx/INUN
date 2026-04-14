"use client";

import { AppPreferencesProvider } from "@/contexts/app-preferences-context";
import { DocumentMeta } from "@/components/ui/document-meta";
import { PageLoadGate } from "@/components/effects/page-load-gate";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { LandingPageContent } from "@/components/pages/landing-page-content";
import { VideoLightboxProvider } from "@/components/ui/video-lightbox";

/** Single client island: locale/theme, meta, splash, full page, scroll control */
export function ClientShell() {
  return (
    <AppPreferencesProvider>
      <VideoLightboxProvider>
        <DocumentMeta />
        <PageLoadGate>
          <LandingPageContent />
        </PageLoadGate>
        <ScrollToTop />
      </VideoLightboxProvider>
    </AppPreferencesProvider>
  );
}
