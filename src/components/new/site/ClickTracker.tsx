"use client";

import { useEffect } from "react";
import { pushEvent } from "./track";

/**
 * One delegated listener for every call and WhatsApp link on the page,
 * so the buttons themselves can stay server components.
 */
export default function ClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const location = link.dataset.ctaLocation || "inline";
      if (href.startsWith("tel:")) {
        pushEvent({ event: "call_click", cta_location: location, phone: href.slice(4) });
      } else if (href.startsWith("https://wa.me/")) {
        pushEvent({ event: "whatsapp_click", cta_location: location });
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
