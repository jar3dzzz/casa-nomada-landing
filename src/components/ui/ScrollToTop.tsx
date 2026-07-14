"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent browser from restoring scroll position on refresh
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
