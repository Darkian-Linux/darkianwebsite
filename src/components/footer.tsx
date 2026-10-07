import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";

import { GithubIcon } from "@/components/icons/github";

import { LINKS } from "@/lib/site";

const COLUMNS = [
  {
    title: "Project",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Specs", href: "/#specs" },
      { label: "Download", href: "/#download" },
      { label: "Credits", href: "/credits" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: LINKS.github, Icon: GithubIcon },
      { label: "Discord", href: LINKS.discord, Icon: MessageCircle },
      { label: "Donate", href: LINKS.kofi, Icon: Heart },
      { label: "Credits", href: "/credits", Icon: Users },
    ],
  },
  {
    title: "Upstream",
    links: [
      { label: "Debian", href: "https://www.debian.org/", Icon: ExternalLink },
      { label: "KDE", href: "https://kde.org/", Icon: ExternalLink },
      {
        label: "Calamares",
        href: "https://calamares.io/",
        Icon: ExternalLink,
      },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex w-fit items-center gap-2 text-sm font-semibold tracking-tight transition-opacity hover:opacity-80"
            >
              <Image
                src="/darkian.png"
                alt=""
                width={22}
                height={22}
                className="rounded"
              />
              Darkian Linux
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A Linux distro for true gamers. Based on Debian 13 Trixie with
              KDE Plasma 6.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => {
                  const Icon = "Icon" in link ? link.Icon : undefined;
                  const content = (
                    <>
                      {Icon ? <Icon className="size-3.5 shrink-0" /> : null}
                      <span>{link.label}</span>
                    </>
                  );

                  return (
                    <li key={link.label + link.href}>
                      {link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {content}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {content}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Darkian Linux</span>
          <span>Debian 13 Trixie &middot; KDE Plasma 6 &middot; amd64</span>
        </div>
      </div>
    </footer>
  );
}
