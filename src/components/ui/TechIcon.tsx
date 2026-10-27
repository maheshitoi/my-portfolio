import type { SimpleIcon } from "simple-icons";
import {
  siFirebase,
  siGit,
  siGithub,
  siJavascript,
  siJsonwebtokens,
  siNestjs,
  siNodedotjs,
  siOpenapiinitiative,
  siPostgresql,
  siPrisma,
  siRazorpay,
  siSocketdotio,
  siSwagger,
  siTypescript,
  siWhatsapp,
} from "simple-icons";
import {
  ArrowLeftRight,
  Braces,
  Gauge,
  Kanban,
  KeyRound,
  ListChecks,
  Radio,
  ShieldCheck,
  Table2,
  type LucideIcon,
} from "lucide-react";
import styles from "./TechIcon.module.css";

/** First matching rule wins, so more specific patterns come first. */
const RULES: [RegExp, SimpleIcon | LucideIcon][] = [
  [/node/, siNodedotjs],
  [/nest/, siNestjs],
  [/typescript/, siTypescript],
  [/javascript/, siJavascript],
  [/postgres/, siPostgresql],
  [/prisma transaction|^transactions/, ArrowLeftRight],
  [/prisma/, siPrisma],
  [/socket\.io/, siSocketdotio],
  [/websocket|real-time/, Radio],
  [/swagger/, siSwagger],
  [/openapi/, siOpenapiinitiative],
  [/jwt/, siJsonwebtokens],
  [/razorpay/, siRazorpay],
  [/firebase|fcm/, siFirebase],
  [/whatsapp/, siWhatsapp],
  [/^git\b/, siGit],
  [/github/, siGithub],
  [/rest/, Braces],
  [/dto|validation/, ListChecks],
  [/schema/, Table2],
  [/index|query/, Gauge],
  [/agile|scrum/, Kanban],
  [/passport/, KeyRound],
  [/guard|rbac/, ShieldCheck],
];

const isSimpleIcon = (icon: SimpleIcon | LucideIcon): icon is SimpleIcon => "path" in icon;

/** Near-black brand colors (GitHub, Prisma…) would vanish in dark mode, so those follow the text color instead. */
function brandColor(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.3 ? "currentColor" : `#${hex}`;
}

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function TechIcon({ name, size = 16, className = "" }: TechIconProps) {
  const match = RULES.find(([pattern]) => pattern.test(name.toLowerCase()));
  if (!match) return null;
  const icon = match[1];

  if (isSimpleIcon(icon)) {
    return (
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={brandColor(icon.hex)}
        className={`${styles.icon} ${className}`}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  const Icon = icon;
  return <Icon size={size} aria-hidden="true" className={`${styles.icon} ${styles.generic} ${className}`} />;
}
