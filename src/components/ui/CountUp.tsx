"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
}

/** Counts the leading number of `value` up from zero once it scrolls into view, keeping any suffix ("2+"). */
export default function CountUp({ value, duration = 1400, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    const el = ref.current;
    if (!match || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = Number(match[1]);
    const suffix = match[2];
    let frame = 0;
    let timeout = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${Math.round(target * eased)}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      timeout = window.setTimeout(run, delay);
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [value, duration, delay]);

  return (
    <span ref={ref} aria-label={value}>
      {display}
    </span>
  );
}
