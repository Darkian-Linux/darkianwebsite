"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Layers,
  Menu,
  MessageCircle,
  Terminal,
  Users,
} from "lucide-react";

import { GithubIcon } from "@/components/icons/github";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { LINKS } from "@/lib/site";

const NAV_LINKS = [
  { href: "/#features", label: "Features", Icon: Layers },
  { href: "/#specs", label: "Specs", Icon: Terminal },
  { href: "/#download", label: "Download", Icon: Download },
  { href: "/credits", label: "Credits", Icon: Users },
] as const;

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-80"
    >
      <Image
        src="/darkian.png"
        alt=""
        width={26}
        height={26}
        className="rounded-md"
        priority
      />
      <span className="text-sm sm:text-base">Darkian Linux</span>
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-lg">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-3.5" />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden rounded-full sm:inline-flex"
          >
            <a href={LINKS.discord} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Discord
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-red-600 text-white hover:bg-red-700 sm:inline-flex"
          >
            <Link href="/#download">
              <Download />
              Download
            </Link>
          </Button>

          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-4/5 sm:max-w-xs">
              <SheetHeader className="border-b border-border/70 pb-4">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation links
                </SheetDescription>
                <Logo />
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-1 px-4">
                {NAV_LINKS.map(({ href, label, Icon }) => (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Icon className="size-4" />
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="flex flex-col gap-2 border-t border-border/70 px-4 pt-4 pb-6">
                <Button
                  asChild
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  <Link href="/#download">
                    <Download />
                    Download Darkian
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle />
                    Discord
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="size-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
