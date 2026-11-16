import { DistributorHero, PackagesSection, BusinessTypes, CustomDevelopment, WorkProcess, Consultation } from "@/components/distributor-home";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { company, socials } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ description: company.description, path: "/" });

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${company.url}/#organization`,
      name: company.name,
      legalName: company.legalName,
      alternateName: [company.shortName, "Brifion Marden"],
      description: company.description,
      url: company.url,
      logo: `${company.url}/brand/brifion-logo-terang.png`,
      email: company.email,
      sameAs: socials.map((s) => s.href),
      areaServed: "ID",
      knowsAbout: ["Aplikasi custom distributor dan supplier", "Sistem stok dan gudang", "Order dan pengiriman", "Dashboard operasional"],
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: company.email, telephone: "+62-856-9510-2171", availableLanguage: ["id"] },
    },
    { "@type": "WebSite", "@id": `${company.url}/#website`, url: company.url, name: company.name, inLanguage: "id", publisher: { "@id": `${company.url}/#organization` } },
  ],
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }} />
    <a href="#konten-utama" className="skip-link">Langsung ke konten</a>
    <SiteHeader />
    <main id="konten-utama" tabIndex={-1} className="distribution-home">
      <DistributorHero /><PackagesSection /><BusinessTypes /><CustomDevelopment /><WorkProcess /><Consultation />
    </main>
    <SiteFooter />
  </>;
}
