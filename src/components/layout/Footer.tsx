import { PROFILE } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          {PROFILE.name} · {PROFILE.role}
        </p>
        <div className={styles.links}>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
          <a href="#top" className={styles.top}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
