"use client";

import { motion } from "motion/react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useAppPreferences } from "@/contexts/app-preferences-context";

export function ComingSoonSection() {
  const { messages } = useAppPreferences();
  const subjects = messages.soonSubjects;

  return (
    <AnimatedSection
      id="coming-soon"
      surface="calm"
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24"
    >
      <motion.div
        className="mx-auto max-w-3xl rounded-3xl border border-dashed border-stone-300/90 bg-stone-100/40 px-6 py-14 text-center sm:px-10 dark:border-white/20 dark:bg-zinc-900/40"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-900 dark:text-amber-400">
          {messages.soonKicker}
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl dark:text-zinc-50">
          {messages.soonTitle}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-stone-600 dark:text-zinc-400">
          {messages.soonBodyPrefix}
          <strong className="font-semibold text-stone-900 dark:text-zinc-100">
            {messages.soonBodyStrong}
          </strong>
          {messages.soonBodySuffix}
        </p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {subjects.map((name) => (
            <motion.span
              key={name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35 },
                },
              }}
              className="inline-flex items-center rounded-full border border-stone-300/80 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {name}
              <span className="ms-2 rounded-md bg-amber-100 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-950 dark:bg-amber-900/50 dark:text-amber-100">
                {messages.soonBadge}
              </span>
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
