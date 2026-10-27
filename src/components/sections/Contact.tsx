import type { CSSProperties } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import ContactForm from "@/components/ui/ContactForm";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./Contact.module.css";

const CHANNELS = [
  {
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: <Mail size={17} aria-hidden="true" />,
  },
  { label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref, icon: <Phone size={17} aria-hidden="true" /> },
  {
    label: "WhatsApp",
    value: "Message me",
    href: PROFILE.whatsapp,
    icon: <MessageCircle size={17} aria-hidden="true" />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: PROFILE.linkedinLabel,
    href: PROFILE.linkedin,
    icon: <LinkedinIcon size={17} />,
    external: true,
  },
  { label: "GitHub", value: PROFILE.githubLabel, href: PROFILE.github, icon: <GithubIcon size={17} />, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div data-reveal>
            <Eyebrow icon="send">Contact</Eyebrow>
            <h2 className="section-title">Let&apos;s talk about your backend.</h2>
            <p className="section-lead">
              I&apos;m open to full-time backend roles. If you&apos;re hiring or have a project in mind, I&apos;d be
              glad to hear from you — I usually reply within a day.
            </p>

            <ul className={styles.channels}>
              {CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    className={styles.channel}
                    {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className={styles.channelIcon}>{channel.icon}</span>
                    <span className={styles.channelText}>
                      <span className={styles.channelLabel}>{channel.label}</span>
                      <span className={styles.channelValue}>{channel.value}</span>
                    </span>
                    <ArrowUpRight size={16} className={styles.arrow} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <p className={styles.location}>
              <MapPin size={15} aria-hidden="true" />
              Based in {PROFILE.location}
            </p>
          </div>

          <div data-reveal style={{ "--delay": "120ms" } as CSSProperties}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
