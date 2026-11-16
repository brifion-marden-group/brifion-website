import type { MetadataRoute } from "next";
import { company } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-16");
  return ["", "/harga", "/demo", "/privasi"].map((route) => ({ url: `${company.url}${route}`, lastModified }));
}
