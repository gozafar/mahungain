import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 text-slate-800 shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <Container className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
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
            <div className="text-base font-black leading-tight text-slate-900 sm:text-2xl">{siteConfig.name}</div>
            <div className="mt-1 text-xs font-semibold text-sky-700 sm:text-sm">Class X School | JAC, Ranchi</div>
          </div>
        </div>
        <Navbar />
      </Container>
    </header>
  );
}
