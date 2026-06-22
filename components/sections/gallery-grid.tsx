import Image from "next/image";
import { galleryImages } from "@/lib/constants";

export function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {galleryImages.map((img) => (
        <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--color-border)]">
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
