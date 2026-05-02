import type { Metadata } from "next";
import { Spectral, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "../components/shell/footer";
import Header from "../components/shell/header";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "chasephung.dev",
  description:
    "Personal website of Chase Phung, a UCI computer science student and aspiring software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${GeistSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-warm-ash font-sans text-ink">
        <Header />
        <main id="main-content" className="mx-auto w-full max-w-180 flex-1 px-4 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-16">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
