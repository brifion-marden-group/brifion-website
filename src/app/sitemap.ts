import type { MetadataRoute } from "next";
import { company } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "", modified: "2026-11-26" },
    { path: "/portofolio", modified: "2026-11-27" },
    { path: "/p/sentra-baja-nusantara", modified: "2026-11-26" },
    { path: "/p/vektor-logistik-armada", modified: "2026-11-27" },
    { path: "/harga", modified: "2026-11-16" },
    { path: "/demo", modified: "2026-11-16" },
    { path: "/tentang", modified: "2026-11-17" },
    { path: "/privasi", modified: "2026-11-16" },
  ].map(({ path, modified }) => ({ url: new URL(path || "/", company.url).href, lastModified: new Date(modified) }));
}
