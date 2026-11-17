import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AboutSystemPreview } from "@/components/about-system-preview";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionHead } from "@/components/ui/section-head";
import s from "@/components/ui/sections.module.css";
import { about, company, process } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./tentang.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Tentang Brifion Marden Group",
  description: "Kenali tim Brifion Marden Group, pengalaman pengembang, prototype distribusi, dan cara kami membangun aplikasi custom untuk distributor dan supplier.",
  path: "/tentang",
});

const PESAN = "Halo Brifion, saya ingin konsultasi kebutuhan aplikasi untuk usaha saya.";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${company.url}/tentang#webpage`,
  url: `${company.url}/tentang`,
  name: "Tentang Brifion Marden Group",
  description: "Tim, pengalaman pengembang, prototype distribusi, dan cara kerja Brifion Marden Group.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${company.url}/#website` },
  about: { "@id": `${company.url}/#organization`, "@type": "Organization", name: company.name, url: company.url },
};

export default function AboutPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c") }} />
    <a href="#konten-utama" className="skip-link">Langsung ke konten</a>
    <SiteHeader />
    <main id="konten-utama" tabIndex={-1} className="distribution-home">
      {/* Profil: hero navy dengan foto dan kutipan melayang */}
      <section className={styles.hero} aria-labelledby="tentang-title">
        <div className={`page-width ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Tentang Brifion</p>
            <h1 id="tentang-title" className={styles.heroTitle}>{about.intro.title}</h1>
            {about.intro.body.map((p) => <p key={p} className={styles.heroText}>{p}</p>)}
            <div className={styles.heroFoot}>
              <ul className={styles.avatars} aria-label="Tim Brifion">
                {about.team.map((m) => (
                  <li key={m.name}><Image src={m.avatar} alt={m.name} width={44} height={44} /></li>
                ))}
              </ul>
              <a className={styles.heroLink} href="#tim-title">Kenali timnya <span aria-hidden="true">&darr;</span></a>
            </div>
          </div>
          <figure className={styles.heroVisual}>
            <div className={styles.heroPhoto}>
              <Image src="/images/business-planning.webp" alt="Tangan menyusun catatan rencana bisnis, sebagai ilustrasi pemetaan kebutuhan sebelum membangun sistem." fill sizes="(max-width: 767px) 100vw, 46vw" priority />
            </div>
            <blockquote className={styles.quote}>
              <p>“{about.intro.quote}”</p>
            </blockquote>
          </figure>
        </div>
      </section>

      {/* 01 Tim */}
      <section className={`${s.section} ${s.alt}`} aria-labelledby="tim-title">
        <div className="page-width">
          <SectionHead id="tim-title" eyebrow="01 / Tim" title="Orang di balik pekerjaan" intro="Satu arah bisnis, dua developer full-stack yang saling melengkapi." />
          <ul className={`${s.grid3} ${s.carousel} ${styles.team}`}>
            {about.team.map((m) => (
              <li key={m.name} className={s.card}>
                <div className={s.cardBody}>
                  <Image className={styles.avatar} src={m.avatar} alt={`Foto ${m.name}`} width={88} height={88} />
                  <h3 className={s.cardTitle}>{m.name}</h3>
                  <p className={styles.role}>{m.role}</p>
                  <p className={s.cardText}>{m.body}</p>
                  <ul className={styles.tags} aria-label="Keahlian">
                    {m.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <p className={s.swipeHint} aria-hidden="true">Geser untuk melihat anggota tim lain</p>
          <p className={s.note}>{about.teamNote}</p>
        </div>
      </section>

      {/* 02 Sistem yang kami bangun: screenshot prototype Brifion */}
      <section className={s.section} aria-labelledby="sistem-title">
        <div className="page-width">
          <SectionHead id="sistem-title" eyebrow="02 / Sistem yang kami bangun" title="Lihat bentuk sistemnya" intro="Contoh prototype Brifion untuk operasional distribusi. Seluruh data adalah simulasi." />
          <AboutSystemPreview />

        </div>
      </section>

      {/* 03 Jejak terukur */}
      <section className={`${s.section} ${s.alt}`} aria-labelledby="jejak-title">
        <div className="page-width">
          <SectionHead id="jejak-title" eyebrow="03 / Jejak terukur" title="Pengalaman di sistem yang dipakai banyak orang" />
          <ul className={styles.experience}>
            {about.experience.map((x) => (
              <li key={x.type} className={styles.exp}>
                <h3 className={styles.expType}>{x.type}</h3>
                <p className={styles.expBody}>{x.body}</p>
                <dl className={styles.stats}>
                  {x.stats.map((st) => (
                    <div key={st.label} className={styles.stat}>
                      <dt>{st.value}</dt>
                      <dd>{st.label}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
          <p className={s.note}>{about.metricsNote}</p>
        </div>
      </section>

      {/* 04 Cara kami bekerja */}
      <section className={s.section} aria-labelledby="alur-title">
        <div className="page-width">
          <SectionHead id="alur-title" eyebrow="04 / Cara kami bekerja" title="Dibahas bersama. Dibangun bertahap." intro="Anda ikut menentukan prioritas dan mencoba hasilnya di setiap tahap." />
          <div className={styles.processLayout}>
            <figure className={styles.processVisual}>
              <svg viewBox="0 0 440 380" fill="none" role="img" aria-labelledby="process-visual-title">
                <title id="process-visual-title">Ilustrasi kebutuhan bisnis diterjemahkan menjadi prioritas, prototype, dan sistem yang digunakan tim.</title>
                <path d="M80 85V285H360" stroke="#66768a" strokeWidth="2" strokeDasharray="6 6" />
                <rect x="40" y="35" width="245" height="100" rx="12" fill="#fff" />
                <text x="60" y="65" fill="#59616a" fontSize="12">01 / KEBUTUHAN</text>
                <text x="60" y="92" fill="#0f1a2b" fontSize="17" fontWeight="600">Alur kerja tim Anda</text>
                <path d="M60 111H215" stroke="#d8dde3" strokeWidth="4" strokeLinecap="round" />
                <rect x="115" y="155" width="270" height="120" rx="12" fill="#f1e7d6" />
                <text x="135" y="185" fill="#6b5735" fontSize="12">02 / PRIORITAS</text>
                <path d="m137 210 5 5 9-11m-14 34 5 5 9-11" stroke="#8a6a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="164" y="214" fill="#0f1a2b" fontSize="15">Sepakati lingkup</text>
                <text x="164" y="242" fill="#0f1a2b" fontSize="15">Tentukan tahap pertama</text>
                <rect x="170" y="295" width="230" height="60" rx="12" fill="#d6bb8e" />
                <text x="190" y="320" fill="#0f1a2b" fontSize="12">03 / BANGUN &amp; COBA</text>
                <text x="190" y="342" fill="#0f1a2b" fontSize="15" fontWeight="600">Lanjutkan bersama tim</text>
              </svg>
              <figcaption>Ilustrasi proses, dari kebutuhan ke pemakaian.</figcaption>
            </figure>
            <ol className={styles.workflow}>
              {process.steps.map((w, i) => (
                <li key={w.title}>
                  <span className={s.stepNo}>0{i + 1}</span>
                  <div><h3>{w.title}</h3><p>{w.body}</p></div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* 05 Kolaborasi */}
      <section className={`${s.section} ${s.alt}`} aria-labelledby="kolaborasi-title">
        <div className="page-width">
          <SectionHead id="kolaborasi-title" eyebrow="05 / Kolaborasi" title="Bekerja bersama perusahaan mitra" intro={about.partnersNote} />
          <ul className={styles.partners}>
            {about.partners.map((p) => (
              <li key={p.name}>
                <a className={styles.partner} href={p.url} target="_blank" rel="noopener noreferrer">
                  <Image src={p.logo} alt={`Logo ${p.name}`} width={p.width} height={p.height} sizes="200px" className={styles.partnerLogo} />
                  <span>{p.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ajakan */}
      <section className={styles.cta} aria-labelledby="tentang-cta-title">
        <div className={`page-width ${styles.ctaInner}`}>
          <h2 id="tentang-cta-title" className={styles.ctaTitle}>Ceritakan masalahnya. Kami bantu memetakan solusinya.</h2>
          <p>Langkah pertama selalu sama: memahami kebutuhan, lalu menyepakati prioritas dan lingkup kerja pertama.</p>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaPrimary} href="/#konsultasi">Konsultasikan kebutuhan</Link>
            <a className={styles.ctaSecondary} href={`${company.whatsappUrl}?text=${encodeURIComponent(PESAN)}`} target="_blank" rel="noopener noreferrer">Chat WhatsApp</a>
          </div>
          <a className={styles.ctaEmail} href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </section>
    </main>
    <SiteFooter />
    <MobileCtaBar />
  </>;
}
