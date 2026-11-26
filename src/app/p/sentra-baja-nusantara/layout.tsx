import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { sbnBrand } from "@/content/sbn";

const displayFont = Space_Grotesk({
  variable: "--font-sbn-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-sbn-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    absolute: `${sbnBrand.companyName} | ${sbnBrand.tagline}`,
  },
  description:
    "Distributor dan supplier material baja struktural, plat, coil, pipa industri, serta layanan pra-fabrikasi B2B bersertifikasi MTC untuk konstruksi, manufaktur, dan proyek EPC di Indonesia.",
};

export default function SbnLayout({
  children,
}: LayoutProps<"/p/sentra-baja-nusantara">) {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable}`}>
      {children}
    </div>
  );
}
