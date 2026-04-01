"use client";

import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggeredBlock,
} from "@/components/ui/animated-section";
import { useAppPreferences } from "@/contexts/app-preferences-context";

export function AiOptionsSection() {
  const { messages } = useAppPreferences();
  const options = messages.aiOptions;

  return (
    <AnimatedSection
      id="ai"
      surface="tinted"
      className="scroll-mt-24 border-b border-stone-200/80 px-4 py-20 sm:px-6 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-5xl">
        <StaggeredBlock className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
            {messages.aiKicker}
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl dark:text-zinc-50">
            {messages.aiTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-stone-600 dark:text-zinc-400">
            {messages.aiIntro}
          </p>
        </StaggeredBlock>
        <motion.ul
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.07, delayChildren: 0.05 },
            },
          }}
        >
          {options.map((item) => (
            <motion.li
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
              className="card-surface card-surface-hover flex flex-col p-6"
            >
              <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 dark:text-zinc-400">
                {item.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </AnimatedSection>
  );
}
