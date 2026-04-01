"use client";

import * as React from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import RotatingText from "@/components/ui/rotating-text";
import { PreferenceControls } from "@/components/ui/preference-controls";
import { useAppPreferences } from "@/contexts/app-preferences-context";
import { cn } from "@/lib/utils";
import { INUN_LOGO_URL, LMS_URL } from "@/constants";
import { SectionSurface } from "@/components/ui/section-surface";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  const { messages, locale } = useAppPreferences();

  return (
    <>
      <HeroHeader />
      <SectionSurface
        variant="hero"
        className="min-h-dvh w-full min-w-0 overflow-x-hidden text-stone-900 dark:text-zinc-50"
      >
        <section className="relative flex min-h-dvh w-full flex-col">
          <div className="flex min-h-0 flex-1 flex-col justify-center px-4 pb-16 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:px-6 md:pb-20 md:pt-[calc(6rem+env(safe-area-inset-top,0px))]">
            <div className="mx-auto w-full max-w-7xl">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <a
                    href="#lms"
                    className="group bg-muted hover:bg-background mx-auto flex w-fit max-w-[min(100%,20rem)] items-center gap-3 rounded-full border border-stone-200/80 p-1 ps-3 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950 sm:max-w-none sm:gap-4 sm:ps-4"
                  >
                    <span className="text-foreground text-start text-sm leading-snug sm:text-sm">
                      {messages.heroBadge}
                    </span>
                    <span className="block h-4 w-0.5 border-s border-stone-200 bg-white dark:border-stone-600 dark:bg-zinc-700" />
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full border border-stone-100 duration-500 dark:border-zinc-700">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0 rtl:translate-x-1/2 rtl:group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 rtl:rotate-180" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 rtl:rotate-180" />
                        </span>
                      </div>
                    </div>
                  </a>

                  <h1 className="font-display mx-auto mt-8 flex max-w-4xl flex-col items-center gap-3 text-balance text-[clamp(1.65rem,5.5vw,2.25rem)] font-semibold tracking-tight sm:gap-2 sm:text-4xl md:text-6xl xl:text-[3.5rem] xl:leading-[1.12]">
                    <span className="block text-stone-900 dark:text-zinc-50">
                      {messages.heroH1Line1}
                    </span>
                    <RotatingText
                      texts={[...messages.heroRotating]}
                      segmentLocale={locale === "ar" ? "ar" : "en"}
                      splitBy="words"
                      mainClassName="inline-flex min-h-[1.2em] max-w-[min(100%,42rem)] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3 py-2 text-emerald-800 sm:px-5 sm:py-2.5 md:px-6 dark:text-emerald-200"
                      staggerFrom="last"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-80%", opacity: 0 }}
                      staggerDuration={0.06}
                      splitLevelClassName="inline-flex flex-wrap justify-center gap-x-1.5"
                      elementLevelClassName="inline-block"
                      transition={{
                        type: "spring",
                        damping: 28,
                        stiffness: 380,
                      }}
                      rotationInterval={2600}
                    />
                    <span className="mt-0.5 block max-w-3xl text-balance text-sm font-normal leading-snug text-stone-600 dark:text-zinc-400 sm:text-base md:text-lg">
                      {messages.heroH1Line3}
                    </span>
                  </h1>
                  <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-balance text-lg">
                    {messages.heroSub}
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-2"
                >
                  <div className="rounded-[14px] border border-stone-200/90 bg-stone-900/5 p-0.5 dark:bg-white/10">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-6 text-base"
                    >
                      <a href={LMS_URL} target="_blank" rel="noopener noreferrer">
                        <span className="text-nowrap">{messages.heroCtaOpenLms}</span>
                      </a>
                    </Button>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-11 rounded-xl px-6"
                  >
                    <a href="#about">
                      <span className="text-nowrap">{messages.heroCtaLearn}</span>
                    </a>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </SectionSurface>
    </>
  );
}

function HeroHeader() {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { messages } = useAppPreferences();

  const menuItems = React.useMemo(
    () => [
      { name: messages.navAbout, href: "#about" },
      { name: messages.navLms, href: "#lms" },
      { name: messages.navQuranArabic, href: "#quran-arabic" },
      { name: messages.navAi, href: "#ai" },
    ],
    [messages],
  );

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const syncBodyScroll = () => {
      const mobile = window.innerWidth < 1024;
      document.body.style.overflow = mobile && menuState ? "hidden" : "";
    };
    syncBodyScroll();
    window.addEventListener("resize", syncBodyScroll);
    return () => {
      window.removeEventListener("resize", syncBodyScroll);
      document.body.style.overflow = "";
    };
  }, [menuState]);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : undefined}
        className="group fixed z-20 w-full max-w-[100vw] px-2 pt-[env(safe-area-inset-top,0px)]"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-4 transition-all duration-300 sm:px-6 lg:px-12",
            isScrolled &&
              "bg-background/80 max-w-4xl rounded-2xl border border-stone-200/80 shadow-sm backdrop-blur-lg dark:border-white/10 lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="/"
                aria-label={messages.navHome}
                className="flex items-center"
              >
                <img
                  src={INUN_LOGO_URL}
                  alt="Inun"
                  width={160}
                  height={48}
                  className="h-11 w-auto md:h-12 dark:invert"
                />
              </a>

              <div className="flex items-center gap-2 lg:hidden">
                <PreferenceControls compact />
                <button
                  type="button"
                  onClick={() => setMenuState(!menuState)}
                  aria-label={
                    menuState ? messages.navCloseMenu : messages.navOpenMenu
                  }
                  className="relative z-20 -m-2.5 -me-2 block min-h-11 min-w-11 cursor-pointer touch-manipulation p-2.5 sm:-me-4"
                >
                  <Menu
                    className={cn(
                      "m-auto size-6 duration-200",
                      menuState && "scale-0 opacity-0",
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 m-auto size-6 duration-200",
                      menuState
                        ? "rotate-0 scale-100 opacity-100"
                        : "rotate-90 scale-0 opacity-0",
                    )}
                  />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "mb-6 hidden max-h-[min(70vh,28rem)] w-full flex-wrap items-center justify-end gap-4 space-y-8 overflow-y-auto overscroll-contain rounded-3xl border border-stone-200/90 bg-white/95 p-6 shadow-2xl shadow-stone-300/25 md:flex-nowrap dark:border-white/10 dark:bg-zinc-900/95 dark:shadow-none",
                "group-data-[state=active]:flex",
                "lg:m-0 lg:max-h-none lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:overflow-visible lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent",
              )}
            >
              <PreferenceControls className="hidden lg:flex" />
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled && "lg:hidden")}
                >
                  <a
                    href={LMS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuState(false)}
                  >
                    <span>{messages.navOpenLms}</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                >
                  <a href={LMS_URL} target="_blank" rel="noopener noreferrer">
                    <span>{messages.navOpenLms}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
