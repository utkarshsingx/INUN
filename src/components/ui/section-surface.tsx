"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type SectionSurfaceVariant =
  | "hero"
  | "stripe"
  | "prose"
  | "feature"
  | "tinted"
  | "calm";

const rootClass: Record<SectionSurfaceVariant, string> = {
  hero:
    "bg-gradient-to-br from-stone-50 via-white to-emerald-50/40 dark:from-zinc-950 dark:via-zinc-950 dark:to-emerald-950/25",
  stripe:
    "bg-gradient-to-b from-stone-100/70 via-stone-50/90 to-stone-50 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-950",
  prose: "bg-background dark:bg-background",
  feature:
    "bg-gradient-to-b from-white via-stone-50/90 to-emerald-50/25 dark:from-zinc-950 dark:via-zinc-900/90 dark:to-emerald-950/15",
  tinted:
    "bg-gradient-to-b from-stone-50 via-emerald-50/30 to-stone-50 dark:from-zinc-950 dark:via-emerald-950/15 dark:to-zinc-950",
  calm:
    "bg-gradient-to-b from-stone-50/95 to-stone-100/40 dark:from-zinc-950 dark:to-zinc-900/50",
};

function GridOverlay({
  className,
  opacity = 0.06,
  size = 56,
}: {
  className?: string;
  opacity?: number;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.12) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.12) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

function RadialBlob({
  className,
  style,
}: {
  className?: string;
  style: CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={style}
    />
  );
}

function SectionDecor({ variant }: { variant: SectionSurfaceVariant }) {
  const reduceMotion = useReducedMotion();

  switch (variant) {
    case "hero":
      return (
        <>
          <RadialBlob
            className="-right-40 -top-40 h-[22rem] w-[22rem] opacity-40 sm:h-96 sm:w-96"
            style={{
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(20, 184, 166, 0.1) 45%, transparent 70%)",
            }}
          />
          <RadialBlob
            className="-bottom-28 -left-28 h-72 w-72 opacity-35 sm:-bottom-32 sm:-left-32 sm:h-80 sm:w-80"
            style={{
              background:
                "radial-gradient(circle, rgba(120, 113, 108, 0.12) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 70%)",
            }}
          />
          <RadialBlob
            className="left-8 top-24 h-36 w-36 opacity-30 sm:left-20 sm:top-28"
            style={{
              background:
                "radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%)",
            }}
          />
          <GridOverlay opacity={0.07} size={60} />
          {reduceMotion ? (
            <>
              <div className="absolute right-[20%] top-[22%] h-5 w-5 rounded-full bg-emerald-400/35" />
              <div className="absolute bottom-[28%] left-[18%] h-3 w-3 rotate-45 bg-teal-400/30" />
              <div className="absolute left-[12%] top-[45%] h-7 w-7 rounded-full border-2 border-emerald-300/25" />
            </>
          ) : (
            <>
              <motion.div
                className="absolute right-[20%] top-[22%] h-5 w-5 rounded-full bg-emerald-400/35"
                animate={{ y: [0, -16, 0], rotate: [0, 180, 360] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-[28%] left-[18%] h-3 w-3 rotate-45 bg-teal-400/30"
                animate={{ y: [0, 14, 0], rotate: [0, 90, 180] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute left-[12%] top-[45%] h-7 w-7 rounded-full border-2 border-emerald-300/25"
                animate={{ scale: [1, 1.12, 1], rotate: [0, -180, -360] }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          )}
        </>
      );
    case "stripe":
      return (
        <>
          <RadialBlob
            className="-right-24 top-1/2 h-64 w-64 -translate-y-1/2 opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 65%)",
            }}
          />
          <GridOverlay opacity={0.045} size={48} />
        </>
      );
    case "prose":
      return (
        <>
          <RadialBlob
            className="-left-32 top-0 h-72 w-72 opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
            }}
          />
          <GridOverlay opacity={0.035} size={64} />
        </>
      );
    case "feature":
      return (
        <>
          <RadialBlob
            className="-right-32 top-0 h-80 w-80 opacity-35"
            style={{
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(45, 212, 191, 0.08) 50%, transparent 70%)",
            }}
          />
          <RadialBlob
            className="-bottom-24 -left-24 h-72 w-72 opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(120, 113, 108, 0.1) 0%, transparent 70%)",
            }}
          />
          <GridOverlay opacity={0.055} size={56} />
        </>
      );
    case "tinted":
      return (
        <>
          <RadialBlob
            className="right-0 top-1/4 h-96 w-96 translate-x-1/3 opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            }}
          />
          <GridOverlay opacity={0.05} size={52} />
        </>
      );
    case "calm":
      return (
        <>
          <RadialBlob
            className="left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(251, 191, 36, 0.08) 0%, transparent 60%)",
            }}
          />
          <GridOverlay opacity={0.03} size={72} />
        </>
      );
    default:
      return null;
  }
}

type SectionSurfaceProps = {
  variant: SectionSurfaceVariant;
  className?: string;
  children: ReactNode;
};

/** Section-local decorative layers (ailinc-style) + base surface tint; content stays in z-10. */
export function SectionSurface({
  variant,
  className,
  children,
}: SectionSurfaceProps) {
  return (
    <div
      className={cn("relative overflow-hidden", rootClass[variant], className)}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <SectionDecor variant={variant} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Decorative layers only — use when the outer element already sets background (e.g. motion.section). */
export function SectionSurfaceLayers({ variant }: { variant: SectionSurfaceVariant }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <SectionDecor variant={variant} />
    </div>
  );
}

export function sectionSurfaceRootClass(variant: SectionSurfaceVariant): string {
  return cn("relative overflow-hidden", rootClass[variant]);
}
