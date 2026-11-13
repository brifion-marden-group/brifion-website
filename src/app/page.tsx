import { About, Contact, Hero, Pricing, Process, Projects, Services, SiteFooter } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { company, pricing, services, socials } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.legalName,
  alternateName: company.shortName,
  slogan: company.tagline,
  description: company.description,
  url: company.url,
  logo: `${company.url}/brand/brifion-logo-terang.png`,
  email: company.email,
  sameAs: socials.map((social) => social.href),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: company.email,
    telephone: "+6285695102171",
    url: company.whatsappUrl,
    availableLanguage: ["id"],
  },
  knowsAbout: services.items.map((s) => s.name),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Brifion",
    itemListElement: pricing.groups.flatMap((group) => group.items).map((item) => ({
      "@type": "Offer",
      name: item.name,
      description: item.problem,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "IDR",
        minPrice: Number(item.price.replace(/\D/g, "")) * 1_000_000,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a href="#konten-utama" className="skip-link">Langsung ke konten</a>
      <SiteHeader />
      <main id="konten-utama" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Pricing />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
