import { useEffect } from "react";

/**
 * Lightweight client-side <head> updater for the SPA build.
 * Sets document.title and the meta description on mount.
 * Falls back gracefully if the meta tag does not yet exist.
 */
export function useSeo(title: string, description?: string) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const previousTitle = document.title;
    document.title = title;

    let cleanupDescription: (() => void) | undefined;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      const created = !meta;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      const previous = meta.getAttribute("content");
      meta.setAttribute("content", description);
      cleanupDescription = () => {
        if (created) meta?.parentNode?.removeChild(meta);
        else if (previous !== null) meta?.setAttribute("content", previous);
      };
    }

    return () => {
      document.title = previousTitle;
      cleanupDescription?.();
    };
  }, [title, description]);
}