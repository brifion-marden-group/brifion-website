import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { company } from "@/content/site";
import "./globals.css";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { template: `%s | ${company.shortName}`, default: `${company.name} | ${company.statement}` },
  description: company.description,
  applicationName: company.name,
  // Isi GOOGLE_SITE_VERIFICATION di environment Vercel jika verifikasi Search Console memakai tag HTML.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0f1a2b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
