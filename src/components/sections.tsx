import Image from "next/image";
import { about, company, contact, cta, hero, nav, pricing, process, services, socials } from "@/content/site";
import { ErpDashboard } from "./erp-dashboard";
import { PricingTabs } from "./pricing-tabs";
import { TwoLines } from "./two-lines";

export { Projects } from "./projects";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;
const pad = (index: number) => String(index + 1).padStart(2, "0");

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-section">
      <div className="page-width hero-layout">
        <div className="hero-message">
          <p className="hero-positioning">{company.tagline}</p>
          <h1 id="hero-title">
            Sistem digital yang dibangun dari <span>pemahaman bisnis.</span>
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a className="primary-link" href={company.whatsappUrl} {...external}>
              {cta.primary}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="hero-work-link" href="#karya">
              {hero.secondary} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-project-stage" aria-label="Pilihan tampilan proyek Brifion dan tim">
          <figure className="hero-web-shot">
            <Image
              src="/projects/jaecoo-web.webp"
              alt="Tampilan website otomotif Jaecoo GCP Sunter yang dikembangkan Imam Bahri Alwi."
              width={1440}
              height={1000}
              sizes="(max-width: 767px) 90vw, 43vw"
              preload
            />
          </figure>
          <figure className="hero-planner-shot">
            <ErpDashboard />
          </figure>
          <figure className="hero-mobile-shot">
            <Image
              src="/projects/knect-home.webp"
              alt="Layar beranda aplikasi HRIS Knect dengan jadwal kerja dan akses kehadiran."
              width={390}
              height={844}
              sizes="(max-width: 767px) 30vw, 14vw"
              preload
            />
          </figure>
          <p className="hero-project-links">
            <a href="#proyek-knect">Knect HRIS</a>
            <span aria-hidden="true">/</span>
            <a href="#proyek-jaecoo">Jaecoo</a>
            <span aria-hidden="true">/</span>
            <a href="#proyek-utama">Supermarket & distribusi</a>
          </p>
        </div>
      </div>
      <div className="page-width hero-bottom">
        {hero.bottom.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="tentang" aria-labelledby="tentang-title" className="page-width about-section">
      <div className="about-visual">
        <p className="section-name">{about.label}</p>
        <figure>
          <div className="operations-photo">
            <Image src={about.photo.src} alt={about.photo.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), 40vw" />
          </div>
          <figcaption>{about.photo.caption}</figcaption>
        </figure>
      </div>
      <div className="about-copy">
        <h2 id="tentang-title">
          <TwoLines lines={about.title} />
        </h2>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="audience-note">
          <span>{about.audienceLabel}</span>
          <p>{about.audience}</p>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="layanan" aria-labelledby="layanan-title" className="services-section">
      <div className="page-width services-layout">
        <div className="services-heading">
          <p className="section-name">{services.label}</p>
          <h2 id="layanan-title">
            <TwoLines lines={services.title} />
          </h2>
          <p>{services.intro}</p>
        </div>
        <div className="service-list">
          {services.items.map((service, index) => (
            <details key={service.name} open={index === 0}>
              <summary>
                <span className="service-index">{pad(index)}</span>
                <h3>{service.name}</h3>
                <span className="detail-toggle" aria-hidden="true" />
              </summary>
              <div className="service-description">
                <p>{service.scope}</p>
                <p>
                  <span>Misalnya,</span> {service.example}
                </p>
              </div>
            </details>
          ))}
          <p className="collaboration-note">{services.collaboration}</p>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="harga" aria-labelledby="harga-title" className="page-width packages-section">
      <div className="packages-intro">
        <div>
          <p className="section-name">{pricing.label}</p>
          <h2 id="harga-title">{pricing.title}</h2>
        </div>
        <p>{pricing.note}</p>
      </div>
      <PricingTabs />
    </section>
  );
}

export function Process() {
  return (
    <section id="cara-kerja" aria-labelledby="cara-kerja-title" className="process-section">
      <div className="page-width">
        <div className="process-intro">
          <p className="section-name">{process.label}</p>
          <h2 id="cara-kerja-title">
            <TwoLines lines={process.title} />
          </h2>
        </div>
        <ol className="process-list">
          {process.steps.map((step, index) => (
            <li key={step.title}>
              <span className="process-number">{pad(index)}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="process-note">{process.note}</p>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="kontak" aria-labelledby="kontak-title" className="page-width contact-section">
      <p className="section-name">{contact.label}</p>
      <div className="contact-layout">
        <h2 id="kontak-title">
          <TwoLines lines={contact.title} />
        </h2>
        <div>
          <p>{contact.intro}</p>
          <a className="primary-link" href={company.whatsappUrl} {...external}>
            {cta.primary}
            <span aria-hidden="true">↗</span>
          </a>
          <a className="email-link" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer page-width">
      <div className="footer-top">
        <a href="#top" aria-label="Brifion, kembali ke atas">
          <Image src="/brand/brifion-logo-terang.png" alt={company.name} width={1683} height={552} className="footer-logo" />
        </a>
        <nav aria-label="Navigasi footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <ul className="footer-socials" aria-label="Media sosial">
        {socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} {...external}>
              {social.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="footer-bottom">
        <p>© 2026 {company.legalName}</p>
        <p>{company.tagline}</p>
        <a href={company.whatsappUrl} {...external}>
          {company.whatsappDisplay}
        </a>
      </div>
    </footer>
  );
}
