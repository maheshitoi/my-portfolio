"use client";

import { useEffect } from "react";

/**
 * Page-wide motion controller:
 * - reveals `[data-reveal]` elements as they scroll into view
 * - feeds the cursor position to `[data-spotlight]` cards as --mx / --my
 */
export default function Motion() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    const onPointerMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>("[data-spotlight]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return null;
}
