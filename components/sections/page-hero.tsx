import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PageHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,118,110,0.08),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <Badge>Admissions open</Badge>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-6xl">{siteConfig.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#admissions">Explore admissions</Button>
            <Button href="#contact" variant="secondary">Contact school</Button>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-md border border-[var(--color-border)]">
          <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80" alt="School campus" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
