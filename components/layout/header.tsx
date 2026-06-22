import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e7e2d8] bg-white text-slate-800 backdrop-blur">
      <Container className="flex items-center gap-6 py-3">
        <div className="flex min-w-fit items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-yellow-400 bg-yellow-200">
            <Image
              src={siteConfig.logoSrc}
              alt={siteConfig.logoAlt}
              fill
              className="object-cover"
              sizes="80px"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-2xl font-black text-red-800">{siteConfig.name}</div>
            <div className="text-lg font-medium text-amber-500">Class X School | JAC, Ranchi</div>
          </div>
        </div>
        <Navbar />
      </Container>
    </header>
  );
}
