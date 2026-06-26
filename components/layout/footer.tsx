import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { footerLinks } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-[#1e3a8a] bg-[#0f172a] text-white">
      <div className="bg-[#1d4ed8]">
        <Container className="flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white shadow-sm sm:h-14 sm:w-14">
              <Image
                src={siteConfig.logoSrc}
                alt={siteConfig.logoAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 48px, 56px"
              />
            </div>
            <div className="min-w-0">
              <div className="text-lg font-black leading-tight sm:text-2xl">{siteConfig.name}</div>
              <div className="text-xs font-medium text-white/90 sm:text-sm">A Class X School Affiliated to JAC, Ranchi</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="tel:+919431152170"
              className="rounded-full border border-white/20 bg-white/15 px-5 py-3 text-center text-sm font-bold transition hover:bg-white/25 sm:px-6"
            >
              Call Us Now
            </Link>
            <Link
              href="#admissions"
              className="rounded-full bg-[#ffd21f] px-5 py-3 text-center text-sm font-black text-[#5c2300] transition hover:bg-[#ffdf5b] sm:px-6"
            >
              Apply Now
            </Link>
          </div>
        </Container>
      </div>

      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.05fr_0.9fr_0.9fr_1fr] lg:py-14">
        <div>
          <h3 className="text-lg font-black sm:text-xl">About School</h3>
          <div className="relative mt-5 h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-24 sm:w-24">
            <Image
              src="/logo.png"
              alt={siteConfig.logoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Mahugain Public School, Markacho is a co-educational English medium school offering quality education from Nursery to Class X.
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
          <h3 className="text-lg font-black sm:text-xl">Quick Links</h3>
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
          <h3 className="text-lg font-black sm:text-xl">Programs Offered</h3>
          <ul className="mt-5 grid gap-3 text-sm text-white/75 sm:text-base">
            <li>✓ Nursery / LKG / UKG</li>
            <li>✓ Class I to V (Primary)</li>
            <li>✓ Class VI to VIII (Middle)</li>
            <li>✓ Class IX to X (Secondary)</li>
            <li>✓ Board Exam Preparation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-black sm:text-xl">Contact Info</h3>
          <div className="mt-5 grid gap-4 text-sm text-white/70 sm:text-base">
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
        <Container className="grid gap-6 py-6 lg:grid-cols-[1fr_340px] lg:py-8">
          <div className="flex flex-col justify-end">
            <div className="flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:text-sm">
              <p>© 2026 {siteConfig.name}. All rights reserved.</p>
              <p>Affiliated to the Jharkhand Academic Council, Ranchi</p>
              <p>
                Developed by{" "}
                <Link
                  href="https://indotech-teal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#ffd86b] transition hover:text-[#ffdf5b]"
                >
                  Indo Tech
                </Link>
              </p>
            </div>
          </div>
          <div className="relative hidden min-h-[180px] overflow-hidden rounded-tl-[28px] rounded-tr-[0] rounded-bl-[0] rounded-br-[0] lg:block">
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
