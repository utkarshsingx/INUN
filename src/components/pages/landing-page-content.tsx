"use client";

import { HeroSection } from "@/components/blocks/hero-section-1";
import { BuiltForStrip } from "@/components/sections/built-for-strip";
import { AboutSection } from "@/components/sections/AboutSection";
import { LmsSpotlight } from "@/components/sections/LmsSpotlight";
import { QuranArabicSection } from "@/components/sections/QuranArabicSection";
import { AiOptionsSection } from "@/components/sections/AiOptionsSection";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import InunHoverFooter from "@/components/blocks/InunHoverFooter";

/** Single React tree so locale/theme context is shared (Astro multi-islands break context). */
export function LandingPageContent() {
  return (
    <main className="flex min-h-dvh min-w-0 flex-col overflow-x-hidden pb-safe">
      <HeroSection />
      <BuiltForStrip />
      <AboutSection />
      <LmsSpotlight />
      <QuranArabicSection />
      <AiOptionsSection />
      <ComingSoonSection />
      <div className="w-full px-safe sm:px-6 md:px-8 lg:px-10">
        <InunHoverFooter />
      </div>
    </main>
  );
}
