import type { Metadata } from "next";
import { company } from "@/content/site";

// Metadata standar per halaman: judul, deskripsi, canonical, Open Graph, dan Twitter card.
// Gambar Open Graph diambil otomatis dari src/app/opengraph-image.tsx.
export function pageMetadata({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const fullTitle = title ? `${title} | ${company.shortName}` : `${company.name} | ${company.statement}`;
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: company.name,
      url: path,
      title: fullTitle,
      description,
      // Beranda memakai opengraph-image di segmen yang sama; halaman lain perlu menyebutnya
      // eksplisit karena openGraph milik halaman menggantikan milik root.
      ...(path === "/" ? {} : { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Brifion Marden Group: aplikasi custom untuk distributor dan supplier." }] }),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
