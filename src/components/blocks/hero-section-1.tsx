"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
          <div className="flex min-h-0 flex-1 flex-col justify-center pb-20 pe-[max(1rem,env(safe-area-inset-right,0px))] ps-[max(1rem,env(safe-area-inset-left,0px))] pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:px-6 md:pb-20 md:pt-[calc(6rem+env(safe-area-inset-top,0px))]">
            <div className="mx-auto w-full max-w-7xl">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <a
                    href="#lms"
                    className="group bg-muted hover:bg-background mx-auto flex min-h-11 w-fit max-w-[min(100%,20rem)] items-center gap-3 rounded-full border border-stone-200/80 p-1 ps-3 shadow-md shadow-black/5 transition-all duration-300 active:scale-[0.99] dark:border-t-white/5 dark:shadow-zinc-950 sm:max-w-none sm:gap-4 sm:ps-4"
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
                  <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed sm:mt-8 sm:text-lg">
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
                  className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:mt-12 sm:max-w-none sm:flex-row sm:items-center md:gap-2"
                >
                  <div className="rounded-[14px] border border-stone-200/90 bg-stone-900/5 p-0.5 dark:bg-white/10">
                    <Button
                      asChild
                      size="lg"
                      className="min-h-12 w-full rounded-xl px-6 text-base sm:min-h-11 sm:w-auto"
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
                    className="min-h-12 w-full rounded-xl px-6 sm:min-h-11 sm:w-auto"
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
  const { messages, locale } = useAppPreferences();
  const reducedMotion = useReducedMotion() === true;

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

  React.useEffect(() => {
    if (!menuState) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuState(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuState]);

  const closeMenu = React.useCallback(() => setMenuState(false), []);

  const linkStaggerX = locale === "ar" ? 8 : -8;

  return (
    <header>
      <AnimatePresence>
        {menuState && (
          <motion.div
            key="nav-backdrop"
            role="presentation"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reducedMotion ? 0.12 : 0.22,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-[19] cursor-default bg-stone-950/40 backdrop-blur-[3px] lg:hidden"
            onClick={() => setMenuState(false)}
          />
        )}
      </AnimatePresence>

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
                  id="mobile-nav-toggle"
                  aria-expanded={menuState}
                  aria-controls={menuState ? "mobile-nav-panel" : undefined}
                  onClick={() => setMenuState(!menuState)}
                  aria-label={
                    menuState ? messages.navCloseMenu : messages.navOpenMenu
                  }
                  className={cn(
                    "relative z-[21] flex min-h-11 min-w-11 cursor-pointer touch-manipulation items-center justify-center rounded-2xl border p-0 shadow-sm transition-[transform,box-shadow,background-color,border-color] duration-200 active:scale-[0.96]",
                    "border-stone-200/90 bg-white/95 text-stone-800 backdrop-blur-md dark:border-white/12 dark:bg-zinc-900/95 dark:text-zinc-100",
                    menuState &&
                      "border-emerald-500/40 bg-emerald-50/90 shadow-[0_0_0_1px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/20 dark:border-emerald-500/35 dark:bg-emerald-950/50 dark:shadow-[0_0_0_1px_rgba(16,185,129,0.2)] dark:ring-emerald-500/25",
                  )}
                >
                  <span className="relative block size-6">
                    <Menu
                      className={cn(
                        "absolute inset-0 m-auto size-6 transition-all duration-200",
                        menuState
                          ? "rotate-90 scale-0 opacity-0"
                          : "rotate-0 scale-100 opacity-100",
                      )}
                      aria-hidden
                    />
                    <X
                      className={cn(
                        "absolute inset-0 m-auto size-6 transition-all duration-200",
                        menuState
                          ? "rotate-0 scale-100 opacity-100"
                          : "-rotate-90 scale-0 opacity-0",
                      )}
                      aria-hidden
                    />
                  </span>
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

            <AnimatePresence>
              {menuState && (
                <motion.div
                  key="mobile-nav-panel"
                  id="mobile-nav-panel"
                  role="region"
                  aria-label={messages.navMobileNavLabel}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: reducedMotion ? 0 : -8, scale: 0.98 }}
                  transition={
                    reducedMotion
                      ? { duration: 0.18, ease: "easeOut" }
                      : {
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                          mass: 0.85,
                        }
                  }
                  className="relative z-[21] mb-6 flex w-full max-h-[min(70vh,28rem)] flex-col flex-wrap items-stretch justify-end gap-4 space-y-6 overflow-y-auto overscroll-contain rounded-3xl border border-stone-200/90 bg-white/98 p-5 pb-safe shadow-[0_24px_60px_-12px_rgba(15,23,42,0.18)] ring-1 ring-stone-900/[0.04] md:flex-nowrap dark:border-white/10 dark:bg-zinc-900/98 dark:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.55)] dark:ring-white/[0.06] lg:hidden"
                >
                  <ul className="space-y-0.5 text-base">
                    {menuItems.map((item, i) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: reducedMotion ? 0 : linkStaggerX }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={
                          reducedMotion
                            ? { duration: 0.12, ease: "easeOut" }
                            : {
                                delay: 0.04 + i * 0.05,
                                type: "spring" as const,
                                stiffness: 380,
                                damping: 28,
                              }
                        }
                      >
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground flex min-h-12 items-center rounded-xl px-3 py-2.5 text-[0.9375rem] font-medium transition-colors duration-150 hover:bg-stone-100/90 active:bg-stone-200/80 dark:hover:bg-white/[0.07] dark:active:bg-white/10"
                          onClick={closeMenu}
                        >
                          <span>{item.name}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex w-full flex-col gap-3 border-t border-stone-200/80 pt-4 dark:border-white/10 sm:flex-row sm:items-center">
                    <Button
                      asChild
                      size="sm"
                      className="min-h-11 w-full rounded-xl sm:min-h-9 sm:w-auto"
                    >
                      <a
                        href={LMS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                      >
                        <span>{messages.navOpenLms}</span>
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              className={cn(
                "mb-6 hidden w-full flex-wrap items-center justify-end gap-4 space-y-8 md:flex-nowrap",
                "lg:m-0 lg:ml-auto lg:flex lg:w-fit lg:gap-6 lg:space-y-0",
              )}
            >
              <PreferenceControls className="hidden lg:flex" />
              <div className="hidden w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:flex">
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "min-h-11 w-full sm:min-h-9 sm:w-auto",
                    isScrolled && "lg:hidden",
                  )}
                >
                  <a href={LMS_URL} target="_blank" rel="noopener noreferrer">
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
