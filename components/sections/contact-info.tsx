import { siteConfig } from "@/lib/site-config";

export function ContactInfo() {
  return (
    <div className="grid gap-3 text-sm text-slate-700">
      <div>{siteConfig.contact.address}</div>
      <div>{siteConfig.contact.phone}</div>
      <div>{siteConfig.contact.email}</div>
    </div>
  );
}
