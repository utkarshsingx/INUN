"use client";

import {
  AnimatedSection,
  StaggeredBlock,
} from "@/components/ui/animated-section";
import { useAppPreferences } from "@/contexts/app-preferences-context";

export function AboutSection() {
  const { messages } = useAppPreferences();

  return (
    <AnimatedSection
      id="about"
      surface="prose"
      className="scroll-mt-24 border-b border-stone-200/80 px-4 py-20 sm:px-6 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-3xl">
        <StaggeredBlock>
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
          {messages.aboutKicker}
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl dark:text-zinc-50">
          {messages.aboutTitle}
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600 dark:text-zinc-400">
          <p>
            {messages.aboutP1Prefix}
            <strong className="font-semibold text-stone-900 dark:text-zinc-100">
              {messages.aboutP1Strong}
            </strong>
            {messages.aboutP1Suffix}
          </p>
          <p>{messages.aboutP2}</p>
          <p>{messages.aboutP3}</p>
        </div>
        </StaggeredBlock>
      </div>
    </AnimatedSection>
  );
}
