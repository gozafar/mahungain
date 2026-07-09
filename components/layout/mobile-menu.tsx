"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
        <div className="fixed inset-0 z-50 bg-slate-950/25 backdrop-blur-[2px]">
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-[100dvh] w-[86vw] max-w-[340px] overflow-hidden rounded-l-[28px] border-l border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
            <div className="bg-[linear-gradient(135deg,#eff6ff,#ffffff)] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">Mahungain Public School</p>
                  <p className="mt-1 text-xs text-slate-500">Quick Navigation</p>
                </div>
                <button
                  aria-label="Close menu"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>

            <div className="h-[calc(100dvh-72px)] overflow-y-auto p-4">
              <div className="grid gap-3">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={activeHref === item.href ? "page" : undefined}
                    className={[
                      "rounded-2xl border px-4 py-4 text-sm font-semibold transition-colors",
                      activeHref === item.href
                        ? "border-sky-200 bg-sky-50 text-sky-700"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-[24px] bg-[linear-gradient(135deg,#0ea5e9,#2563eb)] p-4 text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Need help?</p>
                <p className="mt-2 text-sm leading-6 text-white/90">Tap enquire if you want admission guidance or school contact details.</p>
                <Button
                  href="#contact"
                  className="mt-4 w-full rounded-full bg-white py-3 text-sm font-bold text-blue-700 shadow-none hover:bg-slate-50"
                >
                  Enquire <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
