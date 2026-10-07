"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Download, MessageCircle } from "lucide-react";

import { GithubIcon } from "@/components/icons/github";

import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const reducedMotion = useReducedMotion();

  const item = (delay: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE_OUT },
        };

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20 text-center sm:px-6">
      {/* Background: drifting glows + fading grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-red-600/25 blur-[120px]"
          animate={
            reducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full bg-red-500/10 blur-[110px]"
          animate={
            reducedMotion ? undefined : { y: [0, -30, 0], x: [0, 20, 0] }
          }
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-24 -right-20 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[110px]"
          animate={
            reducedMotion ? undefined : { y: [0, 26, 0], x: [0, -18, 0] }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero-grid absolute inset-0" />
      </div>

      {/* Badge */}
      <motion.span
        {...item(0)}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-600 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-red-600" />
        </span>
        Darkian 13 Snake &middot; Debian 13 Trixie
      </motion.span>

      {/* Headline */}
      <motion.h1
        {...item(0.08)}
        className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
      >
        A Linux distro for{" "}
        <span className="bg-gradient-to-br from-red-500 to-red-700 bg-clip-text text-transparent">
          true gamers
        </span>
        .
      </motion.h1>

      {/* Description */}
      <motion.p
        {...item(0.16)}
        className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        KDE Plasma, a Calamares installer and a full gaming stack — Steam and
        Proton ready out of the box. Built on Debian stable. No telemetry, no
        tracking.
      </motion.p>

      {/* Buttons */}
      <motion.div
        {...item(0.24)}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <Button
          asChild
          size="lg"
          className="h-11 rounded-full bg-red-600 px-6 text-white hover:bg-red-700"
        >
          <a href="#download">
            <Download />
            Download
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 rounded-full px-6"
        >
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            GitHub
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 rounded-full px-6"
        >
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer">
            <MessageCircle />
            Discord
          </a>
        </Button>
      </motion.div>

      {/* Logo */}
      <motion.div
        {...item(0.34)}
        className="mt-12 flex items-center gap-2 text-xs text-muted-foreground/70"
      >
        <Image
          src="/darkian.png"
          alt="Darkian Linux logo"
          width={20}
          height={20}
          className="rounded opacity-80"
        />
        Free &middot; Open &middot; Yours
      </motion.div>
    </section>
  );
}
