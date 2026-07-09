"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    const sections = navigationLinks
      .filter((item) => item.href.startsWith("#"))
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const updateActive = () => {
      const hash = window.location.hash;
      if (!hash) {
        setActiveHref("/");
        return;
      }

      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });

      setActiveHref(activeSection ? `#${activeSection.id}` : hash);
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("hashchange", updateActive);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <div className="relative lg:hidden">
      <button
        aria-label="Open menu"
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          <div className="grid gap-3">
            {navigationLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={[
                  "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                  activeHref === item.href ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="#contact"
              className="rounded-full bg-[linear-gradient(135deg,#1d4ed8,#2563eb)] py-2.5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(37,99,235,0.2)] hover:translate-y-[-1px] hover:shadow-[0_14px_28px_rgba(37,99,235,0.24)]"
            >
              Enquire <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
