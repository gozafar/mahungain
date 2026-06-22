"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative lg:hidden">
      <button aria-label="Open menu" className="rounded-md border border-[var(--color-border)] p-2 text-slate-700" onClick={() => setOpen((v) => !v)}>
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-3 rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-xl">
          <div className="grid gap-3">
            {navigationLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button href="#contact">Enquire</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
