"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { LOCATIONS, SERVICES, type NavLink } from "./nav-data";

type MenuKey = "services" | "locations";

const MENUS: { key: MenuKey; label: string; links: NavLink[] }[] = [
  { key: "services", label: "Services", links: SERVICES },
  { key: "locations", label: "Locations", links: LOCATIONS },
];

/**
 * Services / Locations disclosure menus (button + panel of links, not an ARIA
 * menu). Closes on Escape, outside click and when focus leaves. One open at a time.
 * desktop: inline triggers in the header. mobile: full-width two-button row.
 */
export default function NavMenus({ variant }: { variant: "desktop" | "mobile" }) {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Partial<Record<MenuKey, HTMLButtonElement | null>>>({});
  const uid = useId();
  const pathname = usePathname();

  const openRef = useRef(open);
  openRef.current = open;

  const close = useCallback((returnFocus = false) => {
    const current = openRef.current;
    setOpen(null);
    if (returnFocus && current) triggerRefs.current[current]?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close();
  };

  const mobile = variant === "mobile";

  return (
    <div
      ref={rootRef}
      onBlur={onBlur}
      className={mobile ? "relative grid grid-cols-2 divide-x divide-line" : "relative flex items-center gap-1"}
    >
      {MENUS.map((menu) => {
        const isOpen = open === menu.key;
        const panelId = `${uid}-${menu.key}`;
        const current = menu.links.some((l) => l.href === pathname);
        return (
          <div key={menu.key} className={mobile ? "" : "relative"}>
            <button
              ref={(el) => {
                triggerRefs.current[menu.key] = el;
              }}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : menu.key)}
              className={[
                "inline-flex min-h-[44px] items-center gap-1.5 font-bold text-ink transition-colors",
                mobile ? "w-full justify-center py-1 text-[16px]" : "rounded-btn px-3 text-[16px] hover:bg-elevated",
                isOpen ? "bg-elevated" : "",
              ].join(" ")}
            >
              <span className={current ? "underline decoration-brand decoration-[3px] underline-offset-[6px]" : ""}>
                {menu.label}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                strokeWidth={2.5}
              />
            </button>

            <div
              id={panelId}
              hidden={!isOpen}
              className={[
                "absolute z-50 overflow-hidden rounded-card border border-line bg-white shadow-soft",
                mobile ? "inset-x-3 top-[calc(100%+6px)]" : "left-0 top-[calc(100%+10px)] w-[300px]",
              ].join(" ")}
            >
              <span aria-hidden="true" className="lp-tape block h-[5px]" />
              <ul className={`p-2 ${mobile ? "grid grid-cols-2 gap-1" : ""}`}>
                {menu.links.map((link) => {
                  const active = link.href === pathname;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => close()}
                        className={[
                          "flex min-h-[44px] items-center gap-2.5 rounded-[6px] px-3 py-2 text-[15px] font-semibold text-ink",
                          active ? "bg-brand" : "hover:bg-elevated",
                        ].join(" ")}
                      >
                        {menu.key === "locations" ? (
                          <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2.25} />
                        ) : (
                          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-ink" />
                        )}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
