import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Darkian Linux handles privacy on darkian.xyz.",
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 pt-28 pb-20 sm:px-6">
      <Reveal>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-muted-foreground">Last updated: October 10, 2026</p>
      </Reveal>

      <Reveal className="mt-8 flex flex-col gap-8">
        <Section title="The short version">
          <p>
            Darkian Linux collects no telemetry and no personal data. The
            operating system is yours, and this website keeps tracking to a
            minimum.
          </p>
        </Section>

        <Section title="The operating system">
          <p>
            Darkian Linux ships without telemetry, analytics, or phone-home
            services. Installing and using the distro never sends us any
            information about you or your machine.
          </p>
        </Section>

        <Section title="This website">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              We do not set tracking or advertising cookies.
            </li>
            <li>
              Your theme choice and cookie preference are stored locally in your
              browser and are never sent to us.
            </li>
            <li>
              Like most websites, our hosting provider may keep standard server
              logs (IP address, browser type, pages requested, timestamps) for
              security and reliability. We do not use them to identify you.
            </li>
            <li>
              Downloads are served from <span className="text-foreground">cdn.darkian.xyz</span>{" "}
              and a Google Drive mirror; those providers may keep their own logs
              under their own policies.
            </li>
          </ul>
        </Section>

        <Section title="Third-party services">
          <p>
            Links to third-party services — such as GitHub, Discord, Ko-fi,
            Debian, KDE, and Calamares — are governed by their own privacy
            policies. We are not responsible for their practices.
          </p>
        </Section>

        <Section title="Children">
          <p>
            This project is not directed at children, and we do not knowingly
            collect information from anyone under the age of 13.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update this policy from time to time. Any changes take effect
            when they are published on this page.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy? Email{" "}
            <a
              href="mailto:lordpipon@gmail.com"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-red-600"
            >
              lordpipon@gmail.com
            </a>
            .
          </p>
        </Section>
      </Reveal>
    </div>
  );
}