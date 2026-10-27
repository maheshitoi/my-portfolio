import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Mail, MapPin } from "lucide-react";
import { PROFILE, STATS, EXPERIENCE } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import CountUp from "@/components/ui/CountUp";
import RotatingWords from "@/components/ui/RotatingWords";
import { ICONS } from "@/components/ui/iconRegistry";
import styles from "./Hero.module.css";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  const current = EXPERIENCE[0];

  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>

      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={`${styles.status} enter`} style={delay(0)}>
              <span className={styles.dot} aria-hidden="true" />
              {PROFILE.availability}
            </p>

            <h1 className={`${styles.title} enter`} style={delay(100)}>
              {PROFILE.headlineLead}
              <br />
              <RotatingWords words={PROFILE.headlineWords} />
            </h1>
            <p className={`${styles.intro} enter`} style={delay(200)}>
              {PROFILE.intro}
            </p>

            <div className={`${styles.ctas} enter`} style={delay(300)}>
              <a href="#contact" className="btn btn-primary">
                Get in touch
                <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
              </a>
              <Link href="/resume" className="btn btn-secondary">
                <FileText size={16} aria-hidden="true" />
                View resume
              </Link>
            </div>

            <div className={`${styles.meta} enter`} style={delay(400)}>
              <span className={styles.location}>
                <MapPin size={15} aria-hidden="true" />
                {PROFILE.location}
              </span>
              <span className={styles.divider} aria-hidden="true" />
              <div className={styles.socials}>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon size={17} />
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={17} />
                </a>
                <a href={`mailto:${PROFILE.email}`} aria-label="Email">
                  <Mail size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <figure className={`${styles.portrait} enter`} style={delay(250)}>
            <div className={styles.imageWrap}>
              <Image
                src={PROFILE.avatar}
                alt={`Portrait of ${PROFILE.name}`}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 900px) 320px, 420px"
                className={styles.image}
              />
            </div>
            <figcaption className={styles.caption}>
              <span className={styles.captionLabel}>Currently</span>
              <span className={styles.captionValue}>
                {current.role} at {current.company}
              </span>
            </figcaption>
          </figure>
        </div>

        <ul className={styles.stats}>
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.icon];
            return (
              <li key={stat.label} className={`${styles.stat} enter`} style={delay(500 + i * 90)}>
                <span className={styles.statIcon} aria-hidden="true">
                  <Icon size={18} />
                </span>
                <strong className={styles.statValue}>
                  <CountUp value={stat.value} delay={500 + i * 90} />
                </strong>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
