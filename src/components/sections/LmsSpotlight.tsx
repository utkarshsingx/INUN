"use client";

import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggeredBlock,
} from "@/components/ui/animated-section";
import { FeatureIcon, type FeatureIconName } from "@/components/ui/feature-icon";
import { LmsButton } from "@/components/ui/lms-button";
import { useAppPreferences } from "@/contexts/app-preferences-context";

const icons: FeatureIconName[] = [
  "book",
  "clipboard",
  "mic",
  "briefcase",
  "video",
  "check",
  "chat",
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function LmsSpotlight() {
  const { messages } = useAppPreferences();
  const lmsFeatures = messages.lmsFeatures;

  return (
    <AnimatedSection
      id="lms"
      surface="feature"
      className="scroll-mt-24 border-b border-stone-200/80 px-safe py-16 sm:px-6 sm:py-20 md:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        <StaggeredBlock className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
            {messages.lmsKicker}
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl dark:text-zinc-50">
            {messages.lmsTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:mt-5 sm:text-lg dark:text-zinc-400">
            {messages.lmsIntro}
          </p>
        </StaggeredBlock>

        <motion.ul
          className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px", amount: "some" }}
        >
          {lmsFeatures.map((item, idx) => (
            <motion.li
              key={item.title}
              variants={cardVariants}
              className="group card-surface card-surface-hover flex flex-col p-5 active:bg-stone-50/90 sm:p-6 dark:active:bg-white/10"
            >
              <span
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition group-hover:bg-emerald-100/80 dark:bg-emerald-950/50 dark:ring-emerald-900"
                aria-hidden
              >
                <FeatureIcon name={icons[idx]!} />
              </span>
              <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-zinc-400">
                {item.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-12 grid gap-8 rounded-3xl border border-stone-200/80 bg-stone-50/50 p-5 shadow-inner sm:mt-16 sm:gap-12 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 dark:border-white/10 dark:bg-zinc-900/50"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: "some" }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-lg ring-1 ring-stone-900/5 sm:aspect-auto sm:h-auto dark:border-white/10 dark:bg-zinc-900">
            <img
              src="/images/course.png"
              alt={messages.lmsCourseImgAlt}
              width={1920}
              height={1080}
              className="h-full w-full object-cover object-top sm:h-auto sm:max-h-[min(70vh,560px)] sm:w-full"
              sizes="(max-width: 1024px) 100vw, 560px"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-stone-600 dark:text-zinc-400">
              {messages.lmsSpotlight}
            </p>
            <div className="mt-8">
              <LmsButton className="px-10 py-3.5 text-base">
                {messages.lmsOpenLms}
              </LmsButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
