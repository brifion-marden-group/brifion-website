import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { vektorBrand } from "@/content/vektor";

const displayFont = Outfit({
  variable: "--font-vektor-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = DM_Sans({
  variable: "--font-vektor-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    absolute: `${vektorBrand.companyName} | ${vektorBrand.tagline}`,
  },
  description:
    "Layanan logistik kargo B2B, manajemen armada terdedikasi, cold-chain, dan distribusi kontainer antar-pulau dengan pelacakan GPS 24/7 serta e-POD digital untuk perusahaan di Indonesia.",
};

export default function VektorLayout({
  children,
}: LayoutProps<"/p/vektor-logistik-armada">) {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable}`}>
      {children}
    </div>
  );
}
