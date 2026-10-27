import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EDUCATION, EXPERIENCE, PROFILE, PROJECT, SKILLS } from "@/data/portfolioData";
import PrintButton from "@/components/ui/PrintButton";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${PROFILE.name}, ${PROFILE.role}.`,
};

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/" className="btn btn-secondary btn-sm">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <article className={styles.paper}>
        <header className={styles.header}>
          <h1 className={styles.name}>{PROFILE.name}</h1>
          <p className={styles.role}>{PROFILE.role} · Node.js / NestJS</p>
          <p className={styles.contact}>
            <span>{PROFILE.location}</span>
            <a href={PROFILE.phoneHref}>{PROFILE.phone}</a>
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <a href={PROFILE.linkedin}>{PROFILE.linkedinLabel}</a>
            <a href={PROFILE.github}>{PROFILE.githubLabel}</a>
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.heading}>Summary</h2>
          <p>{PROFILE.summary.slice(0, 2).join(" ")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Technical skills</h2>
          <dl className={styles.skills}>
            {SKILLS.map((group) => (
              <div key={group.category}>
                <dt>{group.category}</dt>
                <dd>{group.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Experience</h2>
          {EXPERIENCE.map((job) => (
            <div key={job.company} className={styles.entry}>
              <div className={styles.entryHead}>
                <h3>
                  {job.role}, {job.company}
                </h3>
                <span>{job.period}</span>
              </div>
              <p className={styles.entrySub}>{job.location}</p>
              <ul className={styles.bullets}>
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Key project</h2>
          <div className={styles.entry}>
            <div className={styles.entryHead}>
              <h3>
                {PROJECT.name}: {PROJECT.subtitle}
              </h3>
              <span>{PROJECT.period}</span>
            </div>
            <p className={styles.entrySub}>{PROJECT.stack.join(", ")}</p>
            <ul className={styles.bullets}>
              {PROJECT.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Education</h2>
          <div className={styles.entryHead}>
            <h3>{EDUCATION.degree}</h3>
          </div>
          <p className={styles.entrySub}>{EDUCATION.institution}</p>
        </section>
      </article>
    </div>
  );
}
