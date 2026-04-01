import type { ReactNode } from "react";
import { LMS_URL } from "@/constants";
import { cn } from "@/lib/utils";

export function LmsButton({
  className,
  children = "Open LMS",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={LMS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-emerald-700 to-emerald-800 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/15 ring-1 ring-white/10 transition hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700",
        className,
      )}
    >
      {children}
    </a>
  );
}
