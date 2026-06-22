"use client";

import Link from "next/link";
import { navigationLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  return (
    <nav className="flex flex-1 items-center justify-between gap-4">
      <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
        {navigationLinks.map((item) => (
          <Link key={item.label} href={item.href} className="text-[17px] font-semibold text-slate-600 hover:text-red-800">
            {item.label}
          </Link>
        ))}
      </div>
      <Button href="#contact" className="hidden rounded-full border-2 border-yellow-400 bg-red-800 px-7 py-3 text-lg font-bold text-white shadow-none hover:bg-red-900 lg:inline-flex">
        Apply Now
      </Button>
      <MobileMenu />
    </nav>
  );
}
