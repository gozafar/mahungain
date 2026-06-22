import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
// import { NoticeBar } from "@/components/layout/notices";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={
        {
          "--color-background": siteConfig.theme.background,
          "--color-foreground": siteConfig.theme.foreground,
          "--color-surface": siteConfig.theme.surface,
          "--color-border": siteConfig.theme.border,
          "--color-primary": siteConfig.theme.primary,
          "--color-accent": siteConfig.theme.accent,
        } as React.CSSProperties
      }
    >
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Header />
        {/* <NoticeBar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
