import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darkian.xyz"),
  title: {
    default: "Darkian Linux",
    template: "%s — Darkian Linux",
  },
  description:
    "Darkian Linux is a Debian 13 Trixie based Linux distro for gamers. KDE Plasma 6, Calamares installer. No telemetry, no tracking.",
  icons: { icon: "/darkian.png" },
  openGraph: {
    title: "Darkian Linux — A Linux distro for true gamers",
    description:
      "A Debian 13 Trixie based distro for gamers. KDE Plasma 6, no telemetry.",
    url: "https://darkian.xyz",
    siteName: "Darkian Linux",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
