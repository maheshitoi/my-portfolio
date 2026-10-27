"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message")).trim();

    const subject = `Portfolio inquiry from ${name}${company ? ` (${company})` : ""}`;
    const body = `${message}\n\n—\n${name}\n${email}${company ? `\n${company}` : ""}`;

    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} data-spotlight>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" type="text" required minLength={2} autoComplete="name" placeholder="Your name" />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </label>
      </div>

      <label className={styles.field}>
        <span>
          Company <em>(optional)</em>
        </span>
        <input name="company" type="text" autoComplete="organization" placeholder="Where you work" />
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" required minLength={10} rows={5} placeholder="Tell me about the role or project…" />
      </label>

      <button type="submit" className={`btn btn-primary ${styles.submit}`}>
        {sent ? <Check size={16} aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
        {sent ? "Opened in your email app" : "Send message"}
      </button>
      <p className={styles.note}>
        This opens your email app with the message ready to send. Prefer to write directly?{" "}
        <a href={`mailto:${PROFILE.email}`} className="link">
          {PROFILE.email}
        </a>
      </p>
    </form>
  );
}
