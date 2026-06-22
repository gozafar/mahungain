import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e7e2d8] bg-white text-slate-800 backdrop-blur">
      <Container className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-4 border-yellow-400 bg-yellow-200 sm:h-20 sm:w-20">
            <Image
              src={siteConfig.logoSrc}
              alt={siteConfig.logoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 56px, 80px"
              priority
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="text-lg font-black leading-tight text-red-800 sm:text-2xl">{siteConfig.name}</div>
            <div className="text-sm font-medium text-amber-500 sm:text-lg">Class X School | JAC, Ranchi</div>
          </div>
        </div>
        <Navbar />
      </Container>
    </header>
  );
}
