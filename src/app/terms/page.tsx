import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Darkian Linux and darkian.xyz.",
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

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-2 text-muted-foreground">Last updated: October 10, 2026</p>
      </Reveal>

      <Reveal className="mt-8 flex flex-col gap-8">
        <Section title="Acceptance of terms">
          <p>
            By using this website or downloading, installing, or running Darkian
            Linux, you agree to these terms. If you do not agree, please do not
            use the project.
          </p>
        </Section>

        <Section title="The software">
          <p>
            Darkian Linux is provided free of charge, &ldquo;as is&rdquo;,
            without warranty of any kind — express or implied — including
            warranties of merchantability or fitness for a particular purpose.
            You use it entirely at your own risk.
          </p>
          <p>
            This is a community project. It may change, be updated, or be
            discontinued at any time without notice.
          </p>
        </Section>

        <Section title="Your use">
          <p>
            You are free to download, install, and use Darkian Linux, including
            for gaming and everyday use. Please do not misrepresent the project,
            its maintainers, or its community.
          </p>
        </Section>

        <Section title="Website content">
          <p>
            Content on this site is provided for informational purposes. We work
            to keep it accurate, but we make no guarantees about its
            completeness or correctness.
          </p>
        </Section>

        <Section title="Third-party services">
          <p>
            Links to external services — such as GitHub, Discord, Ko-fi, Google
            Drive, Debian, KDE, and Calamares — are governed by their own terms.
            We are not responsible for those services or their content.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, Darkian Linux and its
            maintainers are not liable for any damages — direct, indirect, or
            incidental — arising from the use of the software or this website.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may revise these terms at any time. Revised terms take effect
            when they are published on this page.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms? Email{" "}
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