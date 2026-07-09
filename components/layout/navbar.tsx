"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
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
    <nav className="flex flex-1 items-center justify-between gap-4">
      <div className="hidden flex-1 items-center justify-center rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur md:gap-2 lg:flex">
        {navigationLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={activeHref === item.href ? "page" : undefined}
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
              activeHref === item.href
                ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
            ].join(" ")}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Button
        href="#contact"
        className="hidden rounded-full bg-[linear-gradient(135deg,#1d4ed8,#2563eb)] px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_10px_22px_rgba(37,99,235,0.2)] transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_28px_rgba(37,99,235,0.24)] lg:inline-flex"
      >
        Apply Now <span aria-hidden="true">→</span>
      </Button>
      <MobileMenu />
    </nav>
  );
}
