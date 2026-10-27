import { Briefcase, Check, Clock, GraduationCap, MapPin } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/data/portfolioData";
import Eyebrow from "@/components/ui/Eyebrow";
import TechTags from "@/components/ui/TechTags";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <header className="section-header" data-reveal>
          <Eyebrow icon="briefcase">Experience</Eyebrow>
          <h2 className="section-title">Where I&apos;ve been building.</h2>
        </header>

        <ol className={styles.list}>
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.period}`} className={styles.item} data-reveal>
              <div className={styles.aside}>
                <span className={styles.badge}>
                  <Briefcase size={18} aria-hidden="true" />
                </span>
                <p className={styles.period}>{job.period}</p>
                <p className={styles.asideMeta}>
                  <Clock size={13} aria-hidden="true" />
                  {job.type}
                </p>
                <p className={styles.asideMeta}>
                  <MapPin size={13} aria-hidden="true" />
                  {job.location}
                </p>
              </div>

              <div className={styles.main}>
                <h3 className={styles.role}>
                  {job.role} <span className={styles.at}>·</span> {job.company}
                </h3>
                <p className={styles.summary}>{job.summary}</p>
                <ul className={styles.highlights}>
                  {job.highlights.map((point) => (
                    <li key={point}>
                      <span className={styles.check}>
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <TechTags items={job.stack} />
              </div>
            </li>
          ))}

          <li className={styles.item} data-reveal>
            <div className={styles.aside}>
              <span className={styles.badge}>
                <GraduationCap size={18} aria-hidden="true" />
              </span>
              <p className={styles.period}>Education</p>
            </div>
            <div className={styles.main}>
              <h3 className={styles.role}>{EDUCATION.degree}</h3>
              <p className={styles.summary}>
                {EDUCATION.institution}. {EDUCATION.note}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
