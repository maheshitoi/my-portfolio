"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/data/portfolioData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty("--progress", String(max > 0 ? window.scrollY / max : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const link of NAV_LINKS) {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark} aria-hidden="true">
            MK
          </span>
          <span>{PROFILE.name}</span>
        </Link>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.link} ${active === link.href ? styles.active : ""}`}
                aria-current={active === link.href ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/resume" className="btn btn-primary btn-sm">
            <FileText size={15} aria-hidden="true" />
            Resume
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className={styles.mobileMenu}>
          <ul className="container">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div ref={progressRef} className={styles.progress} aria-hidden="true" />
    </header>
  );
}
