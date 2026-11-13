import type { MetadataRoute } from "next";
import { company } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: company.url }];
}
