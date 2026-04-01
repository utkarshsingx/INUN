"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { useAppPreferences } from "@/contexts/app-preferences-context";
import { INUN_LOGO_URL } from "@/constants";

const barVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: { duration: 2.2, ease: "easeInOut" as const },
  },
};

type Props = {
  onFinish: () => void;
};

/** Full-screen intro splash (ailinc-style): logo, dots, progress — Inun palette */
export function InunLoadingScreen({ onFinish }: Props) {
  const { messages } = useAppPreferences();

  useEffect(() => {
    const t = setTimeout(onFinish, 2400);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600"
              animate={{
                scale: [1, 1.45, 1],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <div className="h-12 w-12 rounded-full border-2 border-dashed border-emerald-600/35">
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"
              animate={{
                scale: [1, 1.45, 1],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (2 - i) * 0.15,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
        className="mb-4 flex flex-col items-center gap-3"
      >
        <img
          src={INUN_LOGO_URL}
          alt=""
          width={140}
          height={42}
          className="h-10 w-auto brightness-0"
        />
        <h1 className="font-display text-4xl font-semibold tracking-tight text-transparent md:text-5xl bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600 bg-clip-text">
          Inun
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.45 }}
        className="flex items-center gap-1 text-stone-600"
      >
        <span className="text-lg">{messages.loaderPreparing}</span>
        <span className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="text-lg font-bold text-emerald-700"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.28,
                ease: "easeInOut",
              }}
            >
              .
            </motion.span>
          ))}
        </span>
      </motion.div>

      <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-stone-200/90">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600"
          variants={barVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </div>
  );
}
