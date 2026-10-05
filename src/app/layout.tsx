import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Chen | Full-Stack Software Engineer Portfolio",
  description:
    "Portfolio of Alex Chen - Full-Stack Engineer & UI/UX Specialist building modern web applications with Next.js, React, Node.js, and TypeScript.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Engineer",
    "TypeScript Developer",
    "UI/UX Specialist",
  ],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen | Full-Stack Software Engineer Portfolio",
    description:
      "Full-Stack Engineer & UI/UX Specialist building modern web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
