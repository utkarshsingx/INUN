"use client";

import { useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { InunLoadingScreen } from "@/components/effects/inun-loading-screen";
import { cn } from "@/lib/utils";

type Props = { children: ReactNode };

/**
 * Splash first: document bg matches loader; main content hidden until ready.
 * Section-level surfaces replace the old global fixed PageBackground.
 */
export function PageLoadGate({ children }: Props) {
  const [showLoader, setShowLoader] = useState(true);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("inun-splash-active");
  }, []);

  const onLoaderTimerDone = useCallback(() => {
    setShowLoader(false);
  }, []);

  const onSplashExitComplete = useCallback(() => {
    document.documentElement.classList.remove("inun-splash-active");
    setAppReady(true);
  }, []);

  return (
    <>
      <div
        className={cn(
          "relative min-h-dvh transition-opacity duration-500 ease-out",
          appReady
            ? "opacity-100"
            : "pointer-events-none select-none opacity-0",
        )}
        aria-hidden={!appReady}
      >
        {children}
      </div>

      <AnimatePresence onExitComplete={onSplashExitComplete}>
        {showLoader && (
          <motion.div
            key="inun-splash"
            className="fixed inset-0 z-[100] bg-gradient-to-br from-stone-100 via-emerald-50/40 to-teal-100/50"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            <InunLoadingScreen onFinish={onLoaderTimerDone} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
