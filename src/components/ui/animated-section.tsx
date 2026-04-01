"use client";

import type { ReactNode } from "react";
import { Children, isValidElement } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  SectionSurfaceLayers,
  sectionSurfaceRootClass,
  type SectionSurfaceVariant,
} from "@/components/ui/section-surface";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Per-section decorative backdrop (ailinc-style layers). */
  surface?: SectionSurfaceVariant;
};

export function AnimatedSection({
  id,
  children,
  className,
  delay = 0,
  surface,
}: Props) {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {
        initial: { opacity: 0 } as const,
        whileInView: { opacity: 1 } as const,
        transition: { duration: 0.35, delay, ease: "easeOut" as const },
      }
    : {
        initial: { opacity: 0, y: 40 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        transition: {
          duration: 0.55,
          delay,
          ease: [0.25, 0.1, 0.25, 1] as const,
        },
      };

  return (
    <motion.section
      id={id}
      className={cn(
        surface ? sectionSurfaceRootClass(surface) : undefined,
        className,
      )}
      {...motionProps}
      viewport={{
        once: true,
        margin: "0px",
        amount: "some",
      }}
    >
      {surface ? (
        <>
          <SectionSurfaceLayers variant={surface} />
          <div className="relative z-10">{children}</div>
        </>
      ) : (
        children
      )}
    </motion.section>
  );
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerItemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
};

type StaggeredBlockProps = {
  children: ReactNode;
  className?: string;
};

/** Staggered kicker + title + lead (wrap 2–4 block-level children). */
export function StaggeredBlock({ children, className }: StaggeredBlockProps) {
  const reduceMotion = useReducedMotion();
  const container = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer;
  const item = reduceMotion ? staggerItemReduced : staggerItem;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: "some" }}
      variants={container}
    >
      {Children.map(children, (child, i) =>
        isValidElement(child) ? (
          <motion.div key={child.key ?? i} variants={item}>
            {child}
          </motion.div>
        ) : (
          <motion.div key={i} variants={item}>
            {child}
          </motion.div>
        ),
      )}
    </motion.div>
  );
}
