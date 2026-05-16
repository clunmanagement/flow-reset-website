"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }, []);
  return null;
}
