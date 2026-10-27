import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Mahesh K — Backend Developer",
    template: "%s — Mahesh K",
  },
  description:
    "Backend developer with 2+ years building production APIs, real-time WebSocket systems and payment integrations with Node.js, NestJS, TypeScript, Prisma and PostgreSQL.",
  keywords: [
    "Mahesh K",
    "Backend Developer",
    "NestJS Developer",
    "Node.js",
    "TypeScript",
    "Prisma ORM",
    "PostgreSQL",
    "WebSockets",
    "REST API",
  ],
  authors: [{ name: "Mahesh K" }],
  openGraph: {
    title: "Mahesh K — Backend Developer",
    description:
      "Production APIs, real-time systems and payment integrations with Node.js, NestJS and PostgreSQL.",
    type: "website",
    locale: "en_US",
    siteName: "Mahesh K",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
