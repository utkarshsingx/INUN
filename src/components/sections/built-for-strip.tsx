"use client";

import * as React from "react";
import { useAppPreferences } from "@/contexts/app-preferences-context";
import { SectionSurface } from "@/components/ui/section-surface";
import { VideoWithPoster } from "@/components/ui/video-with-poster";
import {
  INUN_CLOUDINARY_VIDEOS,
  INUN_VIDEO_POSTERS,
} from "@/constants/media";

/** Thumbnail strip + “Built for real programs” — Cloudinary clips with local PNG posters. */
export function BuiltForStrip() {
  const { messages } = useAppPreferences();

  const clips = React.useMemo(
    () =>
      [
        {
          key: "course",
          label: messages.videoCaptionCourse,
          src: INUN_CLOUDINARY_VIDEOS.course,
          poster: INUN_VIDEO_POSTERS.course,
        },
        {
          key: "assessment",
          label: messages.videoCaptionAssessment,
          src: INUN_CLOUDINARY_VIDEOS.assessment,
          poster: INUN_VIDEO_POSTERS.assessment,
        },
        {
          key: "mockInterview",
          label: messages.videoCaptionMockInterview,
          src: INUN_CLOUDINARY_VIDEOS.mockInterview,
          poster: INUN_VIDEO_POSTERS.mockInterview,
        },
        {
          key: "jobPortal",
          label: messages.videoCaptionJobPortal,
          src: INUN_CLOUDINARY_VIDEOS.jobPortal,
          poster: INUN_VIDEO_POSTERS.jobPortal,
        },
      ] as const,
    [messages],
  );

  return (
    <SectionSurface
      variant="stripe"
      className="border-t border-stone-100 pb-14 pt-10 sm:pb-16 sm:pt-12 md:pb-28 md:pt-16 dark:border-white/5"
    >
      <section id="built-for" className="relative">
        <div className="m-auto max-w-6xl px-safe sm:px-6 lg:max-w-7xl">
          <p className="text-muted-foreground mb-7 text-center text-xs font-medium uppercase tracking-widest sm:mb-8 sm:text-sm">
            {messages.heroBuiltFor}
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-4 gap-y-10 sm:max-w-6xl sm:grid-cols-4 sm:gap-x-5 sm:gap-y-12 md:max-w-7xl md:gap-x-6 lg:gap-x-8">
            {clips.map((item) => (
              <article
                key={item.key}
                className="group/card flex min-w-0 flex-col items-center gap-3 sm:gap-3.5"
              >
                <div
                  className="aspect-[4/3] w-full max-w-[min(100%,14rem)] overflow-hidden rounded-2xl border border-stone-200/70 bg-stone-100/80 shadow-md shadow-stone-900/8 ring-1 ring-stone-900/[0.04] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200/80 hover:shadow-xl hover:shadow-emerald-900/10 hover:ring-emerald-500/15 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:border-white/12 dark:bg-zinc-900/80 dark:shadow-black/40 dark:hover:border-emerald-500/30 dark:hover:shadow-emerald-950/30 sm:max-w-[12.5rem] md:max-w-[14rem] lg:max-w-[15.5rem] xl:max-w-[17rem]"
                >
                  <VideoWithPoster
                    src={item.src}
                    poster={item.poster}
                    title={item.label}
                    playLabelPrefix={messages.videoPlayHelp}
                    variant="card"
                    className="object-cover object-top"
                  />
                </div>
                <span className="text-muted-foreground max-w-[17rem] text-center text-[0.8125rem] font-medium leading-snug transition-colors duration-200 group-hover/card:text-stone-700 dark:group-hover/card:text-zinc-200 sm:text-sm">
                  {item.label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionSurface>
  );
}
