import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { footerLinks } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-[#1e3a8a] bg-[#0f172a] text-white">
      <div className="bg-[#1d4ed8]">
        <Container className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-sm">
              <Image
                src={siteConfig.logoSrc}
                alt={siteConfig.logoAlt}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <div className="text-2xl font-black leading-tight">{siteConfig.name}</div>
              <div className="text-sm font-medium text-white/90">A Class X School Affiliated to JAC, Ranchi</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="tel:+919431152170"
            className="rounded-full border border-white/20 bg-white/15 px-6 py-3 text-sm font-bold transition hover:bg-white/25"
            >
              Call Us Now
            </Link>
            <Link
              href="#admissions"
            className="rounded-full bg-[#ffd21f] px-6 py-3 text-sm font-black text-[#5c2300] transition hover:bg-[#ffdf5b]"
            >
              Apply Now
            </Link>
          </div>
        </Container>
      </div>

      <Container className="grid gap-8 py-14 lg:grid-cols-[1.05fr_0.9fr_0.9fr_1fr]">
        <div>
          <h3 className="text-xl font-black">About School</h3>
          <div className="relative mt-5 h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/logo.png"
              alt={siteConfig.logoAlt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <p className="mt-5 max-w-sm leading-8 text-white/65">
            Mahugain Public School, Parsabad is a co-educational English medium school offering quality education from Nursery to Class X.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["JAC Affiliated", "English Medium", "Co-Educational"].map((item) => (
              <span key={item} className="rounded-full bg-[#1d4ed8] px-4 py-2 text-xs font-bold text-[#dbeafe]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-white/70">
            {footerLinks.school.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-[#ffd86b]">
                <span className="mr-2 text-[#ff6b6b]">›</span>
                {item.label}
              </Link>
            ))}
            {footerLinks.admissions.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-[#ffd86b]">
                <span className="mr-2 text-[#ff6b6b]">›</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black">Programs Offered</h3>
          <ul className="mt-5 grid gap-3 text-white/75">
            <li>✓ Nursery / LKG / UKG</li>
            <li>✓ Class I to V (Primary)</li>
            <li>✓ Class VI to VIII (Middle)</li>
            <li>✓ Class IX to X (Secondary)</li>
            <li>✓ Board Exam Preparation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-black">Contact Info</h3>
          <div className="mt-5 grid gap-4 text-white/70">
            <p>📍 {siteConfig.contact.address}</p>
            <p>📞 +91 94311 52170</p>
            <p>📞 +91 77392 06148</p>
            <p>🌐 Our Website</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="grid gap-8 py-8 lg:grid-cols-[1fr_340px]">
          <div className="flex flex-col justify-end">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/45">
              <p>© 2026 {siteConfig.name}. All rights reserved.</p>
              <p>Affiliated to the Jharkhand Academic Council, Ranchi</p>
              <p>Developed by FN-Concepts</p>
            </div>
          </div>
          <div className="relative min-h-[180px] overflow-hidden rounded-tl-[28px] rounded-tr-[0] rounded-bl-[0] rounded-br-[0]">
            <Image
              src="/student.png"
              alt="Students"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 340px"
            />
          </div>
        </Container>
      </div>
    </footer>
  );
}
