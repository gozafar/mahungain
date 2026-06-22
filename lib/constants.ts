import { siteConfig } from "@/lib/site-config";

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Admissions", href: "#admissions" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

// export const notices = [
//   "Admissions Open for Session 2026-27 — Apply Now!",
//   "Outstanding Board Exam Results 2025",
//   "Academic Excellence and Board Preparation Support",
// ] as const;

export const facilities = [
  "JAC Affiliated",
  "English Medium",
  "Co-Educational",
  "Digital School",
  "ISO 9001:2015 Certified",
  "Modern Infrastructure",
] as const;

export const stats = [
  { value: 98, suffix: "%", label: "Board Pass Rate" },
  { value:300, suffix: "+", label: "Happy Students" },
  { value: 80, suffix: "+", label: "Qualified Teachers" },
  { value: 100, suffix: "%", label: "Placement Support" },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Students collaborating in a bright classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Teacher guiding a classroom discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80",
    alt: "School hallway with students walking between classes",
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    alt: "Library shelves and study seating",
  },
] as const;

export const footerLinks = {
  school: [
    { label: "About", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
  ],
  admissions: [
    { label: "Process", href: "#admissions" },
    { label: "Documents", href: "#contact" },
    { label: "Fees", href: "#admissions" },
  ],
} as const;

export const admissionInfo = {
  title: "Admission Process 2026-27",
  items: [
    "Obtain Application Form",
    "Fill & Submit Form",
    "Entrance Assessment",
    "Fee Payment & Enrollment",
  ],
} as const;

export const heroHighlights = [
  "Excellence in Education",
  "Nursery to Class X",
  "Apply for Admission",
] as const;

export const school = {
  ...siteConfig,
  // notices,
  facilities,
  stats,
  galleryImages,
  footerLinks,
  admissionInfo,
  heroHighlights,
  navigationLinks,
} as const;
