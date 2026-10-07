import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, MessageCircle } from "lucide-react";

import { GithubIcon } from "@/components/icons/github";

import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Credits",
  description: "The people behind Darkian Linux.",
};

const TEAM = [
  {
    name: "LordPipon",
    role: "Lead Developer",
    avatar: "https://avatars.githubusercontent.com/u/114651592?v=4&s=128",
    links: [
      { label: "GitHub", href: "https://github.com/lordpipon", Icon: GithubIcon },
      {
        label: "Discord",
        href: "https://discord.com/users/piponidlo",
        Icon: MessageCircle,
      },
    ],
  },
  {
    name: "rm13",
    role: "Logo Designer",
    avatar: "https://avatars.githubusercontent.com/u/112984422?v=4&s=128",
    links: [
      { label: "GitHub", href: "https://github.com/rm1300", Icon: GithubIcon },
      {
        label: "Organization",
        href: "https://github.com/martin-Corporation",
        Icon: Building2,
      },
    ],
  },
] as const;

export default function CreditsPage() {
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
          Credits
        </h1>
        <p className="mt-2 text-muted-foreground">
          The people behind Darkian Linux.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-3">
        {TEAM.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.08}>
            <Card className="p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-600/40 sm:p-5">
              <div className="flex items-center gap-4">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-full bg-muted object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold sm:text-base">
                    {member.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {member.role}
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  {member.links.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-red-600/40 hover:text-foreground"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
