"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingWords.module.css";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
}

/** Cycles through `words` with a vertical slide. All words share one grid cell, so the width never jumps. */
export default function RotatingWords({ words, interval = 2600 }: RotatingWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={styles.wrap}>
      <span className="sr-only">{words.join(", ")}</span>
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden="true"
          className={`${styles.word} ${i === index ? styles.active : ""} ${
            i === (index - 1 + words.length) % words.length ? styles.leaving : ""
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
