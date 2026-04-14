"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useAppPreferences } from "@/contexts/app-preferences-context";
import { cn } from "@/lib/utils";

export type VideoLightboxPayload = {
  src: string;
  poster: string;
  title: string;
};

type Ctx = {
  open: (p: VideoLightboxPayload) => void;
};

const VideoLightboxContext = React.createContext<Ctx | null>(null);

export function useVideoLightbox(): Ctx {
  const ctx = React.useContext(VideoLightboxContext);
  if (!ctx) {
    throw new Error("useVideoLightbox must be used within VideoLightboxProvider");
  }
  return ctx;
}

export function VideoLightboxProvider({ children }: { children: React.ReactNode }) {
  const { messages } = useAppPreferences();
  const [active, setActive] = React.useState<VideoLightboxPayload | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const closeRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => setMounted(true), []);

  const close = React.useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setActive(null);
  }, []);

  const open = React.useCallback((p: VideoLightboxPayload) => {
    setActive(p);
  }, []);

  React.useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  React.useEffect(() => {
    if (!active) return;
    const id = requestAnimationFrame(() => {
      closeRef.current?.focus();
      void videoRef.current?.play().catch(() => {
        /* autoplay may require user gesture; controls still work */
      });
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  const ctxValue = React.useMemo(() => ({ open }), [open]);

  const modal =
    mounted &&
    active &&
    createPortal(
      <div className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6">
        <button
          type="button"
          aria-label={messages.videoLightboxClose}
          className="absolute inset-0 bg-stone-950/80 backdrop-blur-md transition-opacity dark:bg-black/85"
          onClick={close}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-lightbox-title"
          className={cn(
            "relative z-10 flex max-h-[min(92dvh,900px)] w-full max-w-5xl flex-col gap-3 rounded-t-2xl border border-stone-200/90 bg-stone-50 p-4 shadow-2xl sm:rounded-2xl sm:p-5 dark:border-white/10 dark:bg-zinc-900",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex min-h-0 items-start justify-between gap-3">
            <h2
              id="video-lightbox-title"
              className="min-w-0 flex-1 text-balance text-base font-semibold leading-snug text-stone-900 sm:text-lg dark:text-zinc-50"
            >
              {active.title}
            </h2>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={messages.videoLightboxClose}
              className="shrink-0 rounded-xl border border-stone-200/90 bg-white p-2.5 text-stone-700 shadow-sm transition hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              <X className="size-5" strokeWidth={2} aria-hidden />
            </button>
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-black ring-1 ring-stone-900/10 dark:ring-white/10">
            <video
              ref={videoRef}
              key={active.src}
              className="max-h-[min(72dvh,680px)] w-full object-contain sm:max-h-[min(75vh,720px)]"
              controls
              controlsList="nodownload"
              playsInline
              preload="metadata"
              poster={active.poster}
            >
              <source src={active.src} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <VideoLightboxContext.Provider value={ctxValue}>
      {children}
      {modal}
    </VideoLightboxContext.Provider>
  );
}
