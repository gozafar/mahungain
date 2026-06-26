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
      <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
        {navigationLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={activeHref === item.href ? "page" : undefined}
            className={[
              "rounded-full px-3 py-2 text-[17px] font-semibold transition-all duration-200",
              activeHref === item.href
                ? "bg-red-800 text-white shadow-md shadow-red-200"
                : "text-slate-600 hover:bg-red-50 hover:text-red-800",
            ].join(" ")}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Button
        href="#contact"
        className="hidden rounded-full border border-yellow-300 bg-[linear-gradient(135deg,#b91c1c,#7f1d1d)] px-4 py-2 text-xs font-bold tracking-wide text-white shadow-[0_8px_18px_rgba(127,29,29,0.24)] transition-all duration-200 hover:translate-y-[-1px] hover:border-yellow-200 hover:shadow-[0_12px_24px_rgba(127,29,29,0.3)] lg:inline-flex"
      >
        Apply Now <span aria-hidden="true">→</span>
      </Button>
      <MobileMenu />
    </nav>
  );
}
