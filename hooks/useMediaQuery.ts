"use client";

import { useSyncExternalStore } from "react";

/**
 * Hydration-safe media query hook using React 18/19 useSyncExternalStore.
 * Defaults to `false` on the server to prevent hydration mismatches.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") {
        return () => {};
      }
      const media = window.matchMedia(query);
      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    () => (typeof window !== "undefined" ? window.matchMedia(query).matches : false),
    () => false
  );
}
