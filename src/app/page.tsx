import {
  Boxes,
  Check,
  Cloud,
  Coffee,
  Download,
  EyeOff,
  Gamepad2,
  MessageCircle,
  Monitor,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { LINKS } from "@/lib/site";

const FEATURES = [
  {
    Icon: Gamepad2,
    title: "Gaming out of the box",
    text: "GPU drivers configured and ready to go. Install, boot, play — no setup marathons.",
  },
  {
    Icon: Monitor,
    title: "Your desktop, your way",
    text: "The live system runs KDE Plasma — pick MATE, Cinnamon, KDE, GNOME, Xfce, or LXQt during installation.",
  },
  {
    Icon: Boxes,
    title: "Debian 13 Trixie",
    text: "A rock-solid stable base with access to Debian's massive package repository.",
  },
  {
    Icon: EyeOff,
    title: "No telemetry",
    text: "No tracking, no phone-home, no bloat. Your system, your rules — and it's 100% free.",
  },
  {
    Icon: MessageCircle,
    title: "Community driven",
    text: "Open development on GitHub and an active Discord. Suggestions become features.",
  },
] as const;

const SPEC_LIST = [
  "Based on Debian 13 Trixie",
  "KDE Plasma 6 on the live system",
  "Pick your desktop: MATE, Cinnamon, KDE, GNOME, Xfce, LXQt",
  "Calamares graphical installer",
  "GPU drivers configured",
  "100% free, no telemetry",
] as const;

const SPEC_TABLE = [
  { key: "Codename", value: "Darkian 13 Snake", accent: true },
  { key: "Based on", value: "Debian 13 Trixie", accent: false },
  { key: "Desktop", value: "KDE Plasma 6 live — your pick at install", accent: false },
  { key: "Installer", value: "Calamares", accent: false },
  { key: "Architecture", value: "amd64, soon arm64", accent: false },
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <Badge
        variant="outline"
        className="mb-4 gap-1.5 border-red-600/30 text-red-600"
      >
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Hero />

      {/* ---- Features ---- */}
      <section
        id="features"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="What you get"
            description="Everything a gaming desktop needs, pre-configured on top of a Debian stable base."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.07} className="h-full">
              <Card className="group h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/40 hover:shadow-lg hover:shadow-red-600/5">
                <CardHeader className="gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-red-600/10 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Details ---- */}
      <section
        id="details"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
      >
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Details"
                title="What's inside"
                description="Purpose-built for gaming on top of a Debian stable base."
              />
              <ul className="mt-6 flex flex-col gap-3">
                {SPEC_LIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-600/10">
                      <Check className="size-3 text-red-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-2">
              <table className="w-full overflow-hidden rounded-xl border border-border text-sm">
                <tbody>
                  {SPEC_TABLE.map(({ key, value, accent }) => (
                    <tr
                      key={key}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="w-2/5 bg-muted/50 px-4 py-3 font-medium text-muted-foreground">
                        {key}
                      </td>
                      <td className="px-4 py-3 font-semibold">
                        {accent ? (
                          <>
                            <span className="text-red-600">Darkian 13</span>{" "}
                            Snake
                          </>
                        ) : (
                          value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---- Download ---- */}
      <section
        id="download"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
      >
        <Reveal>
          <Card className="p-5 sm:p-10">
            <div className="text-center">
              <Badge
                variant="outline"
                className="mb-4 gap-1.5 border-red-600/30 text-red-600"
              >
                <Download className="size-3" />
                Free download
              </Badge>
              <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                Download Darkian Linux
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Free, based on Debian. Pick a mirror:
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {/* Mirror 1 — main */}
              <div className="flex flex-col rounded-xl border border-border bg-background p-5 transition-colors hover:border-red-600/40">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                    <Download className="size-5" />
                  </span>
                  <Badge className="bg-red-600 text-white hover:bg-red-700">
                    Recommended
                  </Badge>
                </div>
                <h3 className="mt-4 text-base font-semibold">
                  Mirror 1 &mdash; Main download
                </h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Official Darkian CDN. Fast and always available.
                  <span className="mt-1 block font-mono text-xs text-muted-foreground/70">
                    cdn.darkian.xyz
                  </span>
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-5 h-11 w-full bg-red-600 text-white hover:bg-red-700"
                >
                  <a
                    href={LINKS.downloadMain}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download />
                    Download now
                  </a>
                </Button>
              </div>

              {/* Mirror 2 — Google Drive */}
              <div className="flex flex-col rounded-xl border border-border bg-background p-5 transition-colors hover:border-red-600/40">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Cloud className="size-5" />
                  </span>
                  <Badge variant="secondary">Alternative</Badge>
                </div>
                <h3 className="mt-4 text-base font-semibold">
                  Mirror 2 &mdash; Google Drive
                </h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Backup mirror hosted on Google Drive.
                  <span className="mt-1 block font-mono text-xs text-muted-foreground/70">
                    drive.google.com
                  </span>
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="mt-5 h-11 w-full"
                >
                  <a
                    href={LINKS.downloadMirror2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Cloud />
                    Open Google Drive
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <span>amd64, soon arm64</span>
              <span>&middot;</span>
              <span>Free</span>
              <span>&middot;</span>
              <span>Debian 13 Trixie</span>
              <span>&middot;</span>
              <span>DE chooser: MATE, Cinnamon, KDE, GNOME, Xfce, LXQt</span>
            </div>
          </Card>

          <div className="mx-auto mt-4 max-w-2xl rounded-lg border border-dashed border-border bg-muted/40 px-4 py-3 text-center text-sm text-muted-foreground">
            Live system credentials &mdash; user:{" "}
            <code className="rounded bg-background px-1.5 py-0.5 font-mono text-xs font-semibold text-foreground">
              darkian
            </code>{" "}
            &middot; password:{" "}
            <code className="rounded bg-background px-1.5 py-0.5 font-mono text-xs font-semibold text-foreground">
              live
            </code>
          </div>
        </Reveal>
      </section>

      {/* ---- Donate ---- */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 text-center sm:px-6">
        <Reveal>
          <p className="text-sm text-muted-foreground">
            Like Darkian? Consider supporting the project.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-3 rounded-full"
          >
            <a href={LINKS.kofi} target="_blank" rel="noopener noreferrer">
              <Coffee />
              Donate on Ko-fi
            </a>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
