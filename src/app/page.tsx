import { DistributorHero, PackagesSection, BusinessTypes, CustomDevelopment, WorkProcess, Consultation } from "@/components/distributor-home";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, socials } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Organization",
  name: company.name, legalName: company.legalName, description: company.description,
  url: company.url, logo: `${company.url}/brand/brifion-logo-terang.png`, email: company.email,
  sameAs: socials.map(s => s.href), knowsAbout: ["Aplikasi custom distributor dan supplier", "Integrasi sistem", "Dashboard operasional"],
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
