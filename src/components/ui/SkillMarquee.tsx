import { MARQUEE_SKILLS } from "@/data/portfolioData";
import TechIcon from "@/components/ui/TechIcon";
import styles from "./SkillMarquee.module.css";

export default function SkillMarquee() {
  return (
    <div className={styles.marquee}>
      {MARQUEE_SKILLS.map((row, r) => (
        <div key={r} className={`${styles.row} ${r % 2 ? styles.reverse : ""}`}>
          {/* The track holds the list twice so the -50% loop is seamless; the copy is hidden from screen readers. */}
          <ul className={styles.track}>
            {[...row, ...row].map((skill, i) => (
              <li key={i} className={styles.item} aria-hidden={i >= row.length || undefined}>
                <span className={styles.icon}>
                  <TechIcon name={skill} size={18} />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
