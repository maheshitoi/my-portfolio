import type { CSSProperties } from "react";
import { SKILLS } from "@/data/portfolioData";
import SkillMarquee from "@/components/ui/SkillMarquee";
import Eyebrow from "@/components/ui/Eyebrow";
import TechIcon from "@/components/ui/TechIcon";
import { ICONS } from "@/components/ui/iconRegistry";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <header className="section-header" data-reveal>
          <Eyebrow icon="wrench">Skills</Eyebrow>
          <h2 className="section-title">Tools I use every day.</h2>
        </header>
      </div>

      <div data-reveal>
        <SkillMarquee />
      </div>

      <div className="container">
        <div className={styles.grid}>
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <div
                key={group.category}
                className={styles.group}
                data-reveal
                data-spotlight
                style={{ "--delay": `${i * 80}ms` } as CSSProperties}
              >
                <h3 className={styles.category}>
                  <span className={styles.categoryIcon}>
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  {group.category}
                </h3>
                <ul className={styles.list}>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className={styles.skillIcon}>
                        <TechIcon name={skill} size={15} />
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
