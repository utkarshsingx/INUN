"use client";

import * as React from "react";
import { Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useVideoLightbox } from "@/components/ui/video-lightbox";

type VideoWithPosterProps = {
  src: string;
  poster: string;
  title: string;
  className?: string;
  /** Larger play control for the LMS spotlight block. */
  variant?: "card" | "hero";
  /** Screen-reader prefix for the open control, e.g. "Play" / "تشغيل". */
  playLabelPrefix?: string;
};

/**
 * Poster thumbnail; opens full video in `VideoLightboxProvider` modal on activate.
 */
export function VideoWithPoster({
  src,
  poster,
  title,
  className,
  variant = "card",
  playLabelPrefix = "Play",
}: VideoWithPosterProps) {
  const { open } = useVideoLightbox();
  const reducedMotion = useReducedMotion() === true;

  const playAria = `${playLabelPrefix}: ${title}`;

  const openLightbox = React.useCallback(() => {
    open({ src, poster, title });
  }, [open, poster, src, title]);

  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "relative isolate h-full w-full overflow-hidden bg-stone-950/20 dark:bg-zinc-950/40",
        isHero && "rounded-2xl",
      )}
    >
      <img
        src={poster}
        alt=""
        width={640}
        height={480}
        decoding="async"
        loading="lazy"
        className={cn(
          "pointer-events-none h-full w-full select-none object-cover object-top",
          className,
        )}
      />
      <button
        type="button"
        onClick={openLightbox}
        aria-label={playAria}
        aria-haspopup="dialog"
        className="absolute inset-0 z-10 flex touch-manipulation items-center justify-center bg-gradient-to-t from-stone-950/55 via-stone-950/15 to-stone-950/25 p-3 transition-colors hover:from-stone-950/60 hover:via-stone-950/20 dark:from-zinc-950/65 dark:via-zinc-950/20 dark:to-zinc-950/30 dark:hover:from-zinc-950/70 sm:p-4"
      >
        <span
          className={cn(
            "flex items-center justify-center rounded-full bg-white/95 text-emerald-800 shadow-lg ring-1 ring-stone-900/10 transition-[transform,box-shadow] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-zinc-800/95 dark:text-emerald-200 dark:ring-white/10",
            reducedMotion ? "" : "active:scale-[0.96]",
            isHero
              ? "size-16 sm:size-20 md:size-[4.5rem]"
              : "size-12 sm:size-14",
          )}
        >
          <Play
            className={cn(
              "text-emerald-700 dark:text-emerald-300",
              isHero
                ? "ms-1 size-7 sm:size-9 md:size-10"
                : "ms-0.5 size-5 sm:size-6",
            )}
            strokeWidth={1.75}
            aria-hidden
          />
        </span>
      </button>
    </div>
  );
}
