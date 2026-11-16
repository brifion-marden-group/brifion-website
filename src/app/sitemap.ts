import type { MetadataRoute } from "next";
import { company } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/demo", "/harga", "/privasi"].map((route) => ({ url: `${company.url}${route}` }));
}
