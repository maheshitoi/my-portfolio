import type { IconName } from "@/components/ui/iconRegistry";

export interface Stat {
  value: string;
  label: string;
  icon: IconName;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: IconName;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectModule {
  name: string;
  icon: IconName;
  description: string;
  stack: string[];
}

export interface Workflow {
  name: string;
  icon: IconName;
  description: string;
  steps: { title: string; detail: string }[];
}

export interface SkillGroup {
  category: string;
  icon: IconName;
  skills: string[];
}

export const PROFILE = {
  name: "Mahesh K",
  role: "Backend Developer",
  headlineLead: "Backend developer building reliable",
  headlineWords: ["APIs.", "real‑time systems.", "payment flows.", "integrations."],
  intro:
    "I design and ship production backends with Node.js, NestJS, TypeScript, Prisma and PostgreSQL — from clean REST APIs and WebSocket events to payment flows and third-party integrations.",
  availability: "Open to backend developer roles",
  location: "Nagercoil, Tamil Nadu, India",
  email: "maheshk13122000@gmail.com",
  phone: "+91 78068 16116",
  phoneHref: "tel:+917806816116",
  whatsapp: "https://wa.me/917806816116",
  linkedin: "https://linkedin.com/in/mahesh-kannan-0355a8243",
  linkedinLabel: "linkedin.com/in/mahesh-kannan-0355a8243",
  github: "https://github.com/maheshk13122000/my-portfolio",
  githubLabel: "github.com/maheshk13122000/my-portfolio",
  avatar: "/portrait.jpg",
  summary: [
    "I'm a backend developer with 2 years of professional experience building scalable RESTful APIs using Node.js, NestJS, TypeScript, Prisma ORM and PostgreSQL.",
    "Most of my work has been on a production healthcare consultation platform, where I own core modules end to end: real-time consultation events over WebSockets, secure authentication and role-based access, Razorpay payments and wallets, and notifications through FCM and the WhatsApp Business API.",
    "I care about clean, well-documented code, careful database design, and APIs that frontend and mobile teams find easy to integrate with.",
  ],
};

export const STATS: Stat[] = [
  { value: "2+", label: "Years of production backend experience", icon: "briefcase" },
  { value: "7", label: "Core API modules designed and maintained", icon: "boxes" },
  { value: "3", label: "Third-party services integrated in production", icon: "puzzle" },
  { value: "4", label: "User roles served by one platform", icon: "users" },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    icon: "database",
    title: "API design & data modeling",
    description:
      "RESTful APIs with DTO validation, consistent error handling, Swagger docs, and normalized PostgreSQL schemas tuned with Prisma.",
  },
  {
    icon: "radio",
    title: "Real-time systems",
    description:
      "WebSocket gateways for live consultation events, queue updates, and room-scoped messaging between patients and doctors.",
  },
  {
    icon: "creditCard",
    title: "Payments & integrations",
    description:
      "Razorpay checkout, webhook verification, refunds and wallet accounting, plus FCM push and WhatsApp Business messaging.",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Backend Developer",
    company: "ITOI",
    location: "Nagercoil, Tamil Nadu",
    period: "Nov 2024 — Present",
    type: "Full-time",
    summary:
      "Backend developer on TeleDoctor, a healthcare consultation platform connecting patients, doctors and Telemedicine Facilitation Centers.",
    highlights: [
      "Built and maintain RESTful APIs across 7 core modules — user, doctor, patient, consultation, queue, payment and admin — using Node.js, NestJS and TypeScript.",
      "Designed relational schemas and optimized PostgreSQL queries with Prisma ORM, including relations, filtering and pagination.",
      "Implemented DTO validation, centralized exception handling, JWT authentication with role-based authorization, and Swagger/OpenAPI documentation.",
      "Built real-time consultation and queue events between doctors and patients using WebSockets.",
      "Integrated Razorpay (payments and refunds), Firebase Cloud Messaging (push) and WhatsApp Business API (patient messaging) into production workflows.",
      "Delivered wallet, coupon, consultation fee and commission modules, and debugged production issues without changing existing behavior.",
      "Worked with frontend and mobile teams in an Agile setup to integrate and troubleshoot APIs.",
    ],
    stack: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "WebSockets", "Razorpay", "FCM"],
  },
];

export const PROJECT = {
  name: "TeleDoctor",
  subtitle: "Healthcare consultation platform",
  role: "Backend Developer",
  period: "Nov 2024 — Present",
  description:
    "A platform connecting patients, certified doctors and Telemedicine Facilitation Centers (TFCs) for online consultations, with live queues, in-app payments and automated notifications.",
  stack: [
    "Node.js",
    "NestJS",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "WebSockets",
    "Razorpay",
    "Firebase FCM",
    "WhatsApp Business API",
    "Swagger",
  ],
  highlights: [
    "Developed REST APIs for patients, doctors and TFCs, plus admin, consultation, queue and profile management.",
    "Implemented end-to-end consultation workflows: queue management, doctor availability, consultation rooms and call events.",
    "Built real-time notifications and consultation events using WebSockets.",
    "Integrated Razorpay payments and refunds, plus wallet workflows for TFC transactions.",
    "Implemented coupon validation and discount calculation logic.",
    "Delivered call notifications via FCM and automated patient messaging via WhatsApp Business API.",
    "Built reusable pagination, filtering, search and sorting used across all API modules.",
  ],
  facts: [
    { label: "Role", value: "Backend Developer", icon: "user" },
    { label: "User roles", value: "Patients, doctors, TFCs, admins", icon: "users" },
    { label: "Real-time", value: "WebSocket gateway", icon: "radio" },
    { label: "Payments", value: "Razorpay + TFC wallets", icon: "wallet" },
    { label: "API surface", value: "7 documented modules", icon: "layers" },
  ] satisfies { label: string; value: string; icon: IconName }[],
  modules: [
    {
      name: "Consultation & queue",
      icon: "calendar",
      description:
        "Patient queue placement and position tracking, doctor availability with slot conflict prevention, and consultation room states.",
      stack: ["NestJS", "WebSockets", "Prisma"],
    },
    {
      name: "Payments & wallet",
      icon: "wallet",
      description:
        "Razorpay orders, HMAC signature verification, refunds for cancelled sessions, and atomic wallet balance updates for TFCs.",
      stack: ["Razorpay", "Prisma transactions"],
    },
    {
      name: "Coupons & pricing",
      icon: "ticket",
      description:
        "Percentage and flat discounts with expiry and usage limits, plus a full checkout breakdown shared by web and mobile clients.",
      stack: ["TypeScript", "DTO validation"],
    },
    {
      name: "Notifications",
      icon: "bell",
      description:
        "Incoming-call and turn alerts via FCM, and template-based WhatsApp messages with delivery webhooks and retries.",
      stack: ["Firebase FCM", "WhatsApp API"],
    },
    {
      name: "Auth & access control",
      icon: "lock",
      description:
        "JWT access and refresh tokens, role guards for patients, doctors, TFCs and admins, and whitelisted DTO validation on every request.",
      stack: ["JWT", "Passport", "Guards"],
    },
    {
      name: "Data layer",
      icon: "database",
      description:
        "Normalized schemas, composite indexes, reusable pagination, filtering, search and sorting helpers, and N+1 query elimination.",
      stack: ["PostgreSQL", "Prisma"],
    },
    {
      name: "Admin & reporting",
      icon: "chart",
      description:
        "Doctor verification and onboarding, platform activity metrics, audit logs for billing changes, and interactive Swagger docs.",
      stack: ["NestJS", "Swagger"],
    },
  ] satisfies ProjectModule[],
  workflows: [
    {
      name: "Booking a consultation",
      icon: "route",
      description: "From a patient joining the queue to the doctor being notified.",
      steps: [
        { title: "Request", detail: "Patient calls POST /consultations/queue with symptoms and specialty." },
        { title: "Validate", detail: "Auth guard checks the JWT; DTO pipes validate the payload." },
        { title: "Assign", detail: "Queue service locks an available doctor slot and issues a ticket." },
        { title: "Broadcast", detail: "WebSocket gateway emits queue updates to doctor and patient rooms." },
        { title: "Notify", detail: "FCM push and a WhatsApp message go out to the assigned doctor." },
      ],
    },
    {
      name: "Payment & settlement",
      icon: "creditCard",
      description: "Checkout, webhook verification and fee distribution.",
      steps: [
        { title: "Checkout", detail: "Client creates an order with the consultation ID and optional coupon." },
        { title: "Price", detail: "Pricing service applies the coupon and splits doctor payout and platform fee." },
        { title: "Order", detail: "A Razorpay order is created in INR with a receipt reference." },
        { title: "Verify", detail: "The payment.captured webhook is verified with HMAC-SHA256." },
        { title: "Settle", detail: "Wallet and consultation status update inside one database transaction." },
      ],
    },
  ] satisfies Workflow[],
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages & frameworks",
    icon: "code",
    skills: ["TypeScript", "JavaScript (ES6+)", "Node.js", "NestJS"],
  },
  {
    category: "APIs & real-time",
    icon: "network",
    skills: ["REST API design", "WebSockets / Socket.IO", "Swagger / OpenAPI", "DTOs & validation", "JWT & RBAC"],
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "Prisma ORM", "Schema design", "Indexing & query optimization", "Transactions"],
  },
  {
    category: "Integrations & tools",
    icon: "puzzle",
    skills: ["Razorpay", "Firebase Cloud Messaging", "WhatsApp Business API", "Git & GitHub", "Agile / Scrum"],
  },
];

export const MARQUEE_SKILLS: string[][] = [
  ["Node.js", "NestJS", "TypeScript", "JavaScript", "PostgreSQL", "Prisma ORM", "WebSockets", "Socket.IO"],
  [
    "REST APIs",
    "Swagger / OpenAPI",
    "JWT & RBAC",
    "Razorpay",
    "Firebase FCM",
    "WhatsApp Business API",
    "Git & GitHub",
    "Query optimization",
  ],
];

export const EDUCATION = {
  degree: "Diploma in Mechanical Engineering",
  institution: "Government Polytechnic College",
  note: "An engineering foundation in structured problem solving that I carried into backend software development.",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
