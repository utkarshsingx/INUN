"use client";

import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggeredBlock,
} from "@/components/ui/animated-section";
import { FeatureIcon } from "@/components/ui/feature-icon";
import TiltedCard from "@/components/ui/tilted-card";
import { useAppPreferences } from "@/contexts/app-preferences-context";
import { cn } from "@/lib/utils";

const cardIcons = ["graduation", "book", "sparkles"] as const;

const layout = [
  {
    className: "min-h-[18rem] sm:min-h-[11rem]",
    tiltHeight: "clamp(288px,78vw,320px)",
  },
  {
    className: "min-h-[18rem] sm:min-h-[11rem]",
    tiltHeight: "clamp(288px,78vw,320px)",
  },
  {
    className: "min-h-[20rem] sm:col-span-2 sm:min-h-0",
    tiltHeight: "clamp(320px,85vw,360px)",
  },
] as const;

export function QuranArabicSection() {
  const { messages } = useAppPreferences();
  const cards = messages.quranCards;

  return (
    <AnimatedSection
      id="quran-arabic"
      surface="tinted"
      className="scroll-mt-24 border-b border-stone-200/80 px-safe py-16 sm:px-6 sm:py-20 md:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-3xl">
        <StaggeredBlock>
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
          {messages.quranKicker}
        </p>
        <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl dark:text-zinc-50">
          {messages.quranTitle}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-stone-600 sm:mt-6 sm:text-lg dark:text-zinc-400">
          {messages.quranIntro}
          <strong className="font-semibold text-stone-900 dark:text-zinc-100">
            {messages.quranIntroStrong}
          </strong>
          {messages.quranIntroSuffix}
        </p>
        </StaggeredBlock>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className={cn(layout[i]!.className)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: "some" }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <TiltedCard
                containerWidth="100%"
                containerHeight={layout[i]!.tiltHeight}
                imageWidth="100%"
                imageHeight="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                captionText={c.title}
                displayOverlayContent={false}
                className="cursor-default"
              >
                <div className="flex h-full flex-col p-5 sm:p-7">
                  <span
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 dark:bg-emerald-950/50 dark:ring-emerald-900"
                    aria-hidden
                  >
                    <FeatureIcon name={cardIcons[i]!} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-zinc-50">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-zinc-400">
                    {c.body}
                  </p>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
