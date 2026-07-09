import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 text-slate-800 shadow-[0_12px_32px_rgba(15,23,42,0.05)] backdrop-blur-xl">
      <div className="border-b border-sky-100 bg-[linear-gradient(90deg,#eff6ff,#ffffff,#f8fafc)]">
        <Container className="flex flex-wrap items-center justify-between gap-2 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
          <span>Admissions Open 2026-27</span>
          <span className="text-blue-700">Nursery to Class X | JAC, Ranchi</span>
          <span className="hidden md:inline text-slate-500">Call: +91 94311 52170</span>
        </Container>
      </div>

      <Container className="flex flex-col gap-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm sm:h-16 sm:w-16">
            <Image
              src={siteConfig.logoSrc}
              alt={siteConfig.logoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 56px, 64px"
              priority
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="text-lg font-black leading-tight text-slate-900 sm:text-2xl">{siteConfig.name}</div>
            <div className="mt-1 text-sm font-semibold text-sky-700 sm:text-base">English Medium • Co-educational • Modern Learning</div>
          </div>
        </div>
        <Navbar />
      </Container>
    </header>
  );
}
