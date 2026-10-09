"use client";

import { useSyncExternalStore } from "react";
import { Cookie } from "lucide-react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "darkian-cookie-consent";
const CONSENT_EVENT = "darkian-cookie-consent-change";

type Consent = "allowed" | "denied" | null;

function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "allowed" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  return () => window.removeEventListener(CONSENT_EVENT, onStoreChange);
}

function getServerSnapshot(): Consent {
  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribe,
    readConsent,
    getServerSnapshot
  );

  function decide(choice: Exclude<Consent, null>) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Storage can be unavailable (private mode); just dismiss.
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur"
    >
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
          <Cookie className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold">Cookies</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            We only store essential data locally to remember your preferences —
            no tracking, no ads.
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <Button
          size="sm"
          className="h-8 flex-1 bg-red-600 text-white hover:bg-red-700"
          onClick={() => decide("allowed")}
        >
          Allow
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-8 flex-1"
          onClick={() => decide("denied")}
        >
          Deny
        </Button>
      </div>
    </div>
  );
}