export const siteConfig = {
  name: "Mahungain Public School",
  shortName: "Bharat PS",
  logoSrc: "/logo.png",
  logoAlt: "Mahungain Public School logo",
  description:
    "A Class X school affiliated with the Jharkhand Academic Council, Ranchi.",
  url: "https://bharatpublicschool.example",
  theme: {
    background: "#ffffff",
    foreground: "#0f172a",
    surface: "#ffffff",
    muted: "#eff6ff",
    border: "#dbeafe",
    primary: "#1d4ed8",
    primaryForeground: "#ffffff",
    accent: "#facc15",
    accentForeground: "#0f172a",
  },
  contact: {
    address: "Mahungain, Koderma, Jharkhand",
    phone: "+91 9431152170",
    email: "info@mahugainpublicschool.example",
  },
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
