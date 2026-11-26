import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionHead } from "@/components/ui/section-head";
import s from "@/components/ui/sections.module.css";
import { portfolioProjects } from "@/content/portfolio";
import { company } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./portofolio.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Portofolio website & sistem B2B",
  description:
    "Karya pengembangan website korporat, katalog produk industri, dan sistem digital B2B yang dibangun oleh Brifion Marden Group untuk perusahaan distributor, supplier, dan manufaktur.",
  path: "/portofolio",
});

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${company.url}/portofolio#webpage`,
  url: `${company.url}/portofolio`,
  name: "Portofolio B2B | Brifion Marden Group",
  description:
    "Daftar karya pengembangan website korporat dan solusi digital B2B oleh Brifion Marden Group.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${company.url}/#website` },
  about: { "@id": `${company.url}/#organization` },
};

export default function PortfolioPage() {
  const waHref = `${company.whatsappUrl}?text=${encodeURIComponent(
    "Halo Brifion, saya sudah melihat halaman portofolio dan ingin berdiskusi tentang pengembangan website atau sistem B2B untuk perusahaan kami."
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#konten-utama" className="skip-link">
        Langsung ke konten
      </a>
      <SiteHeader />
      <main id="konten-utama" tabIndex={-1} className="distribution-home">
        <section className={styles.hero} aria-labelledby="portofolio-title">
          <div className="page-width">
            <div className={styles.heroInner}>
              <p className={styles.heroEyebrow}>Portofolio B2B</p>
              <h1 id="portofolio-title" className={styles.heroTitle}>
                Website dan sistem digital untuk <span>bisnis B2B.</span>
              </h1>
              <p className={styles.heroIntro}>
                Setiap proyek dirancang mengikuti alur pengadaan, karakter
                produk, dan kebutuhan tim operasional klien—dari website
                korporat dengan katalog teknis hingga gerbang permintaan
                penawaran.
              </p>
              <div className={styles.heroMeta}>
                <span>
                  <strong>Fokus sektor:</strong> Distribusi, Supplier &amp;
                  Industri
                </span>
                <span>
                  <strong>Standar pengerjaan:</strong> Responsif, cepat, dan
                  terukur
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${s.section} ${s.alt}`}
          aria-labelledby="karya-title"
        >
          <div className="page-width">
            <SectionHead
              id="karya-title"
              eyebrow="Karya pilihan"
              title="Proyek yang dibangun untuk kebutuhan bisnis"
              intro="Buka langsung setiap website untuk meninjau struktur informasi, navigasi, katalog, dan alur permintaan penawaran yang kami bangun."
            />

            <ul className={styles.list}>
              {portfolioProjects.map((project) => (
                <li key={project.slug} className={styles.projectCard}>
                  <div className={styles.previewWrap}>
                    <Link
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.browser}
                      aria-label={`Buka website ${project.clientName}`}
                    >
                      <span className={styles.browserBar} aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <span>{project.domainDisplay}</span>
                      </span>
                      <div className={styles.browserMedia}>
                        <Image
                          quality={90}
                          src={project.previewImage}
                          alt={project.previewAlt}
                          width={project.previewWidth}
                          height={project.previewHeight}
                          sizes="(max-width: 1023px) 100vw, 50vw"
                          preload
                        />
                      </div>
                    </Link>
                  </div>

                  <div className={styles.details}>
                    <div className={styles.topMeta}>
                      <span className={styles.badge}>{project.category}</span>
                      <span className={styles.yearLoc}>
                        {project.location} &middot; {project.year}
                      </span>
                    </div>

                    <h3 className={styles.clientName}>{project.clientName}</h3>
                    <p className={styles.sector}>{project.sector}</p>
                    <p className={styles.headline}>{project.headline}</p>
                    <p className={styles.summary}>{project.summary}</p>

                    <dl className={styles.highlights}>
                      {project.highlights.map((item) => (
                        <div key={item.label}>
                          <dt>{item.label}</dt>
                          <dd>{item.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className={styles.actions}>
                      <Link
                        href={project.liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.btnSolid}
                      >
                        Lihat website <span aria-hidden="true">↗</span>
                      </Link>
                      <Link
                        href={`/?proyek=${project.slug}#form-konsultasi`}
                        className={s.btnOutline}
                      >
                        Diskusikan kebutuhan serupa
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={s.section} aria-labelledby="cta-portofolio-title">
          <div className="page-width">
            <div className={styles.ctaBand}>
              <div>
                <h2 id="cta-portofolio-title">
                  Ingin membangun kehadiran digital B2B yang rapi untuk
                  perusahaan Anda?
                </h2>
                <p>
                  Ceritakan lini produk, target pelanggan korporat, dan alur
                  penawaran yang ingin dipermudah. Kami bantu memetakan struktur
                  halaman hingga sistem pendukungnya.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/#konsultasi" className={styles.ctaBtnGold}>
                  Jadwalkan konsultasi
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaBtnGhost}
                >
                  Chat WhatsApp <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
