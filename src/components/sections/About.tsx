import type { CSSProperties } from "react";
import { FOCUS_AREAS, PROFILE } from "@/data/portfolioData";
import Eyebrow from "@/components/ui/Eyebrow";
import { ICONS } from "@/components/ui/iconRegistry";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div data-reveal>
            <Eyebrow icon="user">About</Eyebrow>
            <h2 className="section-title">Backends that product teams can build on.</h2>
          </div>
          <div className={styles.body} data-reveal style={{ "--delay": "120ms" } as CSSProperties}>
            {PROFILE.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul className={styles.focus}>
          {FOCUS_AREAS.map((area, i) => {
            const Icon = ICONS[area.icon];
            return (
              <li
                key={area.title}
                className={`${styles.card} lift`}
                data-reveal
                data-spotlight
                style={{ "--delay": `${i * 110}ms` } as CSSProperties}
              >
                <span className={styles.icon}>
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardText}>{area.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
