"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { useAppPreferences } from "@/contexts/app-preferences-context";
import { SectionSurface } from "@/components/ui/section-surface";

const IMG = {
  courseList: "/images/courselist.png",
  course: "/images/course.png",
  quiz: "/images/quiz.png",
  assessment: "/images/assessmentresult.png",
  community: "/images/community.png",
} as const;

/** Thumbnail strip + “Built for real programs” — sits below the full-viewport hero. */
export function BuiltForStrip() {
  const { messages } = useAppPreferences();

  const heroFeatureStrip = React.useMemo(
    () =>
      [
        { label: messages.heroStrip[0], src: IMG.courseList },
        { label: messages.heroStrip[1], src: IMG.quiz },
        { label: messages.heroStrip[2], src: IMG.assessment },
        { label: messages.heroStrip[3], src: IMG.community },
        { label: messages.heroStrip[4], src: IMG.course },
        { label: messages.heroStrip[5], src: IMG.course },
        { label: messages.heroStrip[6], src: IMG.assessment },
        { label: messages.heroStrip[7], src: IMG.courseList },
      ] as const,
    [messages],
  );

  return (
    <SectionSurface
      variant="stripe"
      className="border-t border-stone-100 pb-14 pt-10 sm:pb-16 sm:pt-12 md:pb-28 md:pt-16 dark:border-white/5"
    >
      <section id="built-for" className="relative">
      <div className="group relative m-auto max-w-6xl px-safe sm:px-6 lg:max-w-7xl">
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100 max-[1023px]:pointer-events-none max-[1023px]:hidden">
          <a
            href="#lms"
            className="text-foreground block text-sm duration-150 hover:opacity-75"
          >
            <span> {messages.heroExploreLms}</span>
            <ChevronRight className="ms-1 inline-block size-3 rtl:rotate-180" />
          </a>
        </div>
        <p className="text-muted-foreground mb-7 text-center text-xs font-medium uppercase tracking-widest sm:mb-8 sm:text-sm">
          {messages.heroBuiltFor}
        </p>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-3 gap-y-11 transition-all duration-500 group-hover:opacity-50 group-hover:blur-sm max-lg:group-hover:opacity-100 max-lg:group-hover:blur-none sm:max-w-6xl sm:grid-cols-4 sm:gap-x-6 sm:gap-y-14 md:max-w-7xl md:gap-x-8 lg:gap-x-10">
          {heroFeatureStrip.map((item) => (
            <div
              key={`${item.label}-${item.src}`}
              className="flex min-w-0 flex-col items-center gap-3 sm:gap-3.5"
            >
              <img
                className="aspect-[4/3] w-full max-w-[min(100%,14rem)] rounded-xl border border-stone-200/60 object-cover object-top shadow-md shadow-stone-900/5 transition group-hover:opacity-100 dark:border-white/10 sm:max-w-[12.5rem] md:max-w-[14rem] lg:max-w-[15.5rem] xl:max-w-[17rem]"
                src={item.src}
                alt=""
                width={272}
                height={204}
                sizes="(max-width: 639px) 46vw, (max-width: 1023px) 24vw, 272px"
                decoding="async"
                loading="lazy"
              />
              <span className="text-muted-foreground max-w-[17rem] text-center text-[0.8125rem] font-medium leading-snug sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      </section>
    </SectionSurface>
  );
}
