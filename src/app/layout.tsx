import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { company } from "@/content/site";
import "./globals.css";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = `${company.name} | ${company.statement}`;

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title,
  description: company.description,
  applicationName: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: company.name,
    title,
    description: company.description,
  },
  twitter: { card: "summary", title, description: company.description },
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
