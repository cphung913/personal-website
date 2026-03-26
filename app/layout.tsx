import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "../components/shell/footer";
import Header from "../components/shell/header";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "chasephung.dev",
  description:
    "Homepage of Chase Phung, a UCI computer science student and aspiring software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#F7F5F0] font-sans text-[#0D0D0D]">
        <Header />
        <main className="mx-auto w-full max-w-180 flex-1 px-4 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-16">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
