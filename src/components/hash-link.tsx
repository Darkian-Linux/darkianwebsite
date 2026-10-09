"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type HashLinkProps = ComponentProps<typeof Link>;

/**
 * next/link, but same-page hash links scroll smoothly without writing the
 * hash into the address bar — so clicking "Download" keeps the URL at "/"
 * instead of jumping to "/#download".
 */
export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented || typeof href !== "string") return;

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const targetPath = href.slice(0, hashIndex) || "/";
    const id = href.slice(hashIndex + 1);
    if (!id || targetPath !== window.location.pathname) return;

    event.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", targetPath);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}