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
      className="border-t border-stone-100 pb-16 pt-12 md:pb-28 md:pt-16 dark:border-white/5"
    >
      <section id="built-for" className="relative">
      <div className="group relative m-auto max-w-5xl px-4 sm:px-6">
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <a
            href="#lms"
            className="text-foreground block text-sm duration-150 hover:opacity-75"
          >
            <span> {messages.heroExploreLms}</span>
            <ChevronRight className="ms-1 inline-block size-3 rtl:rotate-180" />
          </a>
        </div>
        <p className="text-muted-foreground mb-8 text-center text-sm font-medium uppercase tracking-widest">
          {messages.heroBuiltFor}
        </p>
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 transition-all duration-500 group-hover:opacity-50 group-hover:blur-sm sm:grid-cols-4 sm:gap-x-14 sm:gap-y-10">
          {heroFeatureStrip.map((item) => (
            <div
              key={`${item.label}-${item.src}`}
              className="flex min-w-0 flex-col items-center gap-2"
            >
              <img
                className="h-16 w-full max-w-[6rem] rounded-lg border border-stone-200/60 object-cover object-top shadow-sm transition group-hover:opacity-100"
                src={item.src}
                alt=""
                width={96}
                height={64}
              />
              <span className="text-muted-foreground text-center text-xs font-medium">
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
