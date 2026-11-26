"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  sbnBrand,
  sbnCategories,
  sbnPillars,
  sbnProcess,
  sbnReviews,
  sbnSectors,
  sbnStats,
} from "@/content/sbn";
import styles from "@/app/p/sentra-baja-nusantara/sbn.module.css";

function PillarIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V9l7-4 7 4v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M1 16V6h13v10H1z" />
        <path d="M14 9h4l4 4v3h-8V9z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9h10M7 13h6M7 17h4" />
    </svg>
  );
}

function StarRow() {
  return (
    <span className={styles.stars} aria-label="Rating 5 dari 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.6l2.55 5.17 5.7.83-4.12 4.02.97 5.68L10 14.62 4.9 17.3l.97-5.68L1.75 7.6l5.7-.83L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

const navLinks = [
  { href: "#sektor", label: "Sektor Industri" },
  { href: "#katalog", label: "Katalog Material" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#ulasan", label: "Ulasan Mitra" },
  { href: "#rfq", label: "Kontak & RFQ" },
] as const;

export function SbnLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    sbnCategories[0].id
  );

  // RFQ form state
  const [picName, setPicName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    sbnCategories[0].label
  );
  const [deliveryCity, setDeliveryCity] = useState("");
  const [specs, setSpecs] = useState("");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const activeCategory =
    sbnCategories.find((cat) => cat.id === activeCategoryId) ??
    sbnCategories[0];

  function handleSelectMaterial(categoryLabel: string, materialName: string) {
    setSelectedCategory(categoryLabel);
    setSpecs((prev) => {
      const line = `Material: ${materialName} — Estimasi volume: `;
      return prev.trim() ? `${prev.trim()}\n${line}` : line;
    });
    setSubmittedRef(null);
    const target = document.getElementById("rfq");
    target?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const suffix = String(1000 + ((picName.length * 137 + companyName.length * 53) % 8999));
    setSubmittedRef(`RFQ-SBN-2026-${suffix}`);
  }

  return (
    <div className={styles.root}>
      <a href="#konten-sbn" className="skip-link">
        Langsung ke konten
      </a>

      {/* Header */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a href="#beranda" className={styles.brand}>
            <Image
              src="/images/portfolio/sbn/logo-dark.png"
              alt="Logo PT Sentra Baja Nusantara"
              width={512}
              height={441}
              className={styles.brandLogo}
              preload
            />
            <span className={styles.brandText}>
              <strong>SENTRA BAJA NUSANTARA</strong>
            </span>
          </a>

          <nav aria-label="Navigasi utama" className={styles.nav}>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a href="#rfq" className={styles.btnPrimary}>
              Ajukan RFQ
            </a>
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="sbn-mobile-nav"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="sbn-mobile-nav"
            aria-label="Navigasi mobile"
            className={styles.mobileNav}
          >
            <div className={styles.container}>
              <ul className={styles.mobileNavList}>
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#rfq"
                className={`${styles.btnPrimary} ${styles.mobileNavCta}`}
                onClick={() => setMenuOpen(false)}
              >
                Ajukan Permintaan Penawaran (RFQ)
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="konten-sbn" tabIndex={-1}>
        {/* Hero */}
        <section id="beranda" className={styles.hero} aria-labelledby="sbn-hero-title">
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.heroEyebrow}>
                  Distributor Baja &amp; Material Industri B2B
                </p>
                <h1 id="sbn-hero-title" className={styles.heroTitle}>
                  Pasokan baja struktural <span>presisi</span> untuk proyek dan
                  manufaktur Anda.
                </h1>
                <p className={styles.heroDesc}>
                  PT Sentra Baja Nusantara memasok baja profil, plat, coil, dan
                  pipa industri bersertifikasi SNI, JIS, dan ASTM lengkap dengan
                  Mill Test Certificate serta jadwal kirim terukur ke lokasi
                  pabrik dan proyek Anda.
                </p>
                <div className={styles.heroActions}>
                  <a href="#rfq" className={styles.btnPrimary}>
                    Ajukan Permintaan Penawaran
                  </a>
                  <a href="#katalog" className={styles.btnGhostDark}>
                    Lihat Katalog Material
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroPhoto}>
                  <Image
                    quality={90}
                    src="/images/portfolio/sbn/hero-beams.jpg"
                    alt="Fasilitas penyimpanan baja profil struktural, hollow, dan crane overhead di gudang PT Sentra Baja Nusantara."
                    fill
                    sizes="(max-width: 1023px) 100vw, 48vw"
                    preload
                  />
                </div>
                <div className={styles.heroCaption}>
                  <span>
                    <strong>Hub Cikarang · Jababeka II</strong> — Siap muat crane
                    overhead
                  </span>
                  <span className={styles.specPill}>SNI · JIS · ASTM</span>
                </div>
              </div>
            </div>

            <dl className={styles.statsBar}>
              {sbnStats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd style={{ margin: 0 }}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Sektor Industri */}
        <section
          id="sektor"
          className={styles.sectionMuted}
          aria-labelledby="sbn-sektor-title"
        >
          <div className={styles.container}>
            <div className={styles.secHead}>
              <p className={styles.secEyebrow}>Sektor yang Kami Layani</p>
              <h2 id="sbn-sektor-title" className={styles.secTitle}>
                Dirancang untuk rantai pasok industri berstandar ketat
              </h2>
              <p className={styles.secIntro}>
                Kami bekerja langsung bersama tim procurement, kontraktor utama,
                dan perencana produksi yang membutuhkan konsistensi grade
                material serta ketepatan jadwal kirim.
              </p>
            </div>

            <ul className={styles.sectorGrid}>
              {sbnSectors.map((sector) => (
                <li key={sector.code} className={styles.sectorCard}>
                  <span className={styles.sectorCode}>SEKTOR {sector.code}</span>
                  <h3>{sector.title}</h3>
                  <p>{sector.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Katalog Interaktif */}
        <section
          id="katalog"
          className={styles.section}
          aria-labelledby="sbn-katalog-title"
        >
          <div className={styles.container}>
            <div className={styles.secHead}>
              <p className={styles.secEyebrow}>Katalog Material &amp; Layanan</p>
              <h2 id="sbn-katalog-title" className={styles.secTitle}>
                Spesifikasi lengkap, siap dialokasikan sesuai BoQ
              </h2>
              <p className={styles.secIntro}>
                Pilih lini material di bawah untuk memeriksa standar grade dan
                dimensi yang tersedia, lalu masukkan langsung ke formulir
                permintaan penawaran.
              </p>
            </div>

            <div
              className={styles.tabs}
              role="tablist"
              aria-label="Kategori material baja"
            >
              {sbnCategories.map((category) => {
                const isActive = category.id === activeCategory.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.tabBtn} ${
                      isActive ? styles.tabBtnActive : ""
                    }`}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className={styles.catalogBox} role="tabpanel">
              <div className={styles.catalogMedia}>
                <div className={styles.catalogPhoto}>
                  <Image
                    quality={90}
                    src={activeCategory.image}
                    alt={activeCategory.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 42vw"
                  />
                </div>
                <div className={styles.catalogOverview}>
                  <span className={styles.catalogBadge}>
                    {activeCategory.badge}
                  </span>
                  <h3>{activeCategory.label}</h3>
                  <p>{activeCategory.summary}</p>
                </div>
              </div>

              <div className={styles.catalogItems}>
                {activeCategory.items.map((item) => (
                  <article key={item.name} className={styles.materialRow}>
                    <div className={styles.materialInfo}>
                      <h4>{item.name}</h4>
                      <div className={styles.materialMeta}>
                        <span>
                          <strong>Standar:</strong> {item.standard}
                        </span>
                        <span>
                          <strong>Dimensi:</strong> {item.dimensions}
                        </span>
                      </div>
                      <span className={styles.materialStock}>
                        {item.availability}
                      </span>
                    </div>
                    <button
                      type="button"
                      className={styles.selectBtn}
                      onClick={() =>
                        handleSelectMaterial(activeCategory.label, item.name)
                      }
                    >
                      Pilih untuk RFQ <span aria-hidden="true">&rarr;</span>
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Operasional */}
        <section
          id="keunggulan"
          className={styles.sectionDark}
          aria-labelledby="sbn-keunggulan-title"
        >
          <div className={styles.container}>
            <div className={styles.secHead}>
              <p className={styles.secEyebrow}>Keunggulan Operasional</p>
              <h2 id="sbn-keunggulan-title" className={styles.secTitle}>
                Kontrol mutu dari pabrik hingga serah terima di lokasi proyek
              </h2>
              <p className={styles.secIntro}>
                Infrastruktur pergudangan, sertifikasi dokumen, dan armada
                internal kami disiapkan untuk mengurangi risiko keterlambatan
                material pada jadwal konstruksi maupun produksi.
              </p>
            </div>

            <ul className={styles.pillarGrid}>
              {sbnPillars.map((pillar, idx) => (
                <li key={pillar.title} className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>
                    <PillarIcon index={idx} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Alur Pengadaan */}
        <section
          id="alur-pengadaan"
          className={styles.sectionMuted}
          aria-labelledby="sbn-alur-title"
        >
          <div className={styles.container}>
            <div className={styles.secHead}>
              <p className={styles.secEyebrow}>Alur Pengadaan B2B</p>
              <h2 id="sbn-alur-title" className={styles.secTitle}>
                Proses pemesanan terstruktur untuk tim purchasing
              </h2>
              <p className={styles.secIntro}>
                Setiap tahap dilengkapi dokumen administrasi resmi agar selaras
                dengan standar audit pengadaan perusahaan Anda.
              </p>
            </div>

            <ol className={styles.processGrid}>
              {sbnProcess.map((item) => (
                <li key={item.step} className={styles.processCard}>
                  <span className={styles.processNo}>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ulasan Mitra B2B */}
        <section
          id="ulasan"
          className={styles.section}
          aria-labelledby="sbn-ulasan-title"
        >
          <div className={styles.container}>
            <div className={styles.reviewHeadRow}>
              <div className={styles.secHead}>
                <p className={styles.secEyebrow}>Ulasan Mitra Pengadaan</p>
                <h2 id="sbn-ulasan-title" className={styles.secTitle}>
                  Dipercaya tim procurement dan manajemen proyek industri
                </h2>
                <p className={styles.secIntro}>
                  Pengalaman mitra korporat yang menjalankan pengadaan material
                  konstruksi, manufaktur, dan proyek EPC bersama PT Sentra Baja
                  Nusantara.
                </p>
              </div>
              <div className={styles.ratingSummary}>
                <span className={styles.ratingScore}>4,9</span>
                <div className={styles.ratingMeta}>
                  <StarRow />
                  <span>140+ mitra pengadaan korporat aktif</span>
                </div>
              </div>
            </div>

            <ul className={styles.reviewGrid}>
              {sbnReviews.map((review) => (
                <li key={review.name} className={styles.reviewCard}>
                  <div>
                    <div className={styles.reviewTop}>
                      <StarRow />
                      <span className={styles.reviewTag}>{review.project}</span>
                    </div>
                    <blockquote className={styles.reviewQuote}>
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className={styles.reviewAuthor}>
                    <span className={styles.reviewAvatar} aria-hidden="true">
                      {review.initials}
                    </span>
                    <div className={styles.reviewAuthorInfo}>
                      <strong>{review.name}</strong>
                      <span>
                        {review.role} &middot; {review.company}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Formulir RFQ */}
        <section
          id="rfq"
          className={styles.sectionMuted}
          aria-labelledby="sbn-rfq-title"
        >
          <div className={styles.container}>
            <div className={styles.rfqLayout}>
              <div>
                <p className={styles.secEyebrow}>
                  Permintaan Penawaran (RFQ)
                </p>
                <h2 id="sbn-rfq-title" className={styles.secTitle}>
                  Dapatkan penawaran harga dan ketersediaan stok resmi
                </h2>
                <p className={styles.secIntro}>
                  Tim sales engineer kami siap membantu perhitungan tonase,
                  rekomendasi grade alternatif, serta estimasi jadwal kirim dari
                  gudang terdekat.
                </p>

                <dl className={styles.rfqInfoList}>
                  <div className={styles.rfqInfoItem}>
                    <dt>Sales Desk Korporat</dt>
                    <dd>{sbnBrand.phone} &middot; {sbnBrand.whatsapp}</dd>
                    <dd className={styles.rfqInfoSub}>{sbnBrand.email}</dd>
                  </div>
                  <div className={styles.rfqInfoItem}>
                    <dt>Kantor Pusat &amp; Gudang Utama</dt>
                    <dd>{sbnBrand.headquarters}</dd>
                  </div>
                  <div className={styles.rfqInfoItem}>
                    <dt>Jaringan Gudang Distribusi</dt>
                    <dd>Semarang (KIW) &amp; Gresik (KIG)</dd>
                    <dd className={styles.rfqInfoSub}>
                      Melayani pengiriman seluruh Jawa, Sumatera, Kalimantan,
                      dan Sulawesi
                    </dd>
                  </div>
                </dl>
              </div>

              <div className={styles.rfqCard}>
                <div className={styles.rfqCardHead}>
                  <h3>Formulir Permintaan Penawaran</h3>
                  <p>
                    Isi kebutuhan material perusahaan Anda. Penawaran resmi
                    dikirim maksimal 4 jam kerja.
                  </p>
                </div>

                {submittedRef ? (
                  <div className={styles.successBox} role="status">
                    <span className={styles.successCode}>{submittedRef}</span>
                    <h4>Permintaan penawaran Anda telah tercatat</h4>
                    <p>
                      Terima kasih, <strong>{picName}</strong> ({companyName}).
                      Sales engineer PT Sentra Baja Nusantara sedang memverifikasi
                      ketersediaan stok untuk kategori{" "}
                      <strong>{selectedCategory}</strong> dan akan mengirimkan
                      penawaran resmi ke <strong>{email}</strong> serta menghubungi
                      nomor {phone}.
                    </p>
                    <button
                      type="button"
                      className={styles.resetBtn}
                      onClick={() => {
                        setSubmittedRef(null);
                        setSpecs("");
                      }}
                    >
                      Buat permintaan penawaran baru
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.formGrid}>
                    <div className={styles.field}>
                      <label htmlFor="sbn-pic">Nama PIC / Purchasing *</label>
                      <input
                        id="sbn-pic"
                        type="text"
                        required
                        placeholder="Nama lengkap"
                        value={picName}
                        onChange={(e) => setPicName(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="sbn-company">Nama Perusahaan *</label>
                      <input
                        id="sbn-company"
                        type="text"
                        required
                        placeholder="Nama perusahaan"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="sbn-email">Email Bisnis *</label>
                      <input
                        id="sbn-email"
                        type="email"
                        required
                        placeholder="nama@perusahaan.co.id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="sbn-phone">Telepon / WhatsApp *</label>
                      <input
                        id="sbn-phone"
                        type="tel"
                        required
                        placeholder="08xx-xxxx-xxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="sbn-category">Kategori Material *</label>
                      <select
                        id="sbn-category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        {sbnCategories.map((cat) => (
                          <option key={cat.id} value={cat.label}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="sbn-city">Kota Tujuan Pengiriman *</label>
                      <input
                        id="sbn-city"
                        type="text"
                        required
                        placeholder="Kota tujuan"
                        value={deliveryCity}
                        onChange={(e) => setDeliveryCity(e.target.value)}
                      />
                    </div>

                    <div className={`${styles.field} ${styles.fieldWide}`}>
                      <label htmlFor="sbn-specs">
                        Rincian Spesifikasi, Grade &amp; Estimasi Tonase *
                      </label>
                      <textarea
                        id="sbn-specs"
                        required
                        placeholder="Material, ukuran, dan estimasi tonase"
                        value={specs}
                        onChange={(e) => setSpecs(e.target.value)}
                      />
                    </div>

                    <div className={styles.fieldWide}>
                      <button
                        type="submit"
                        className={`${styles.btnPrimary} ${styles.submitBtn}`}
                      >
                        Kirim Permintaan Penawaran Resmi
                      </button>
                      <p className={styles.formNote}>
                        Untuk lampiran BoQ berkapasitas besar (Excel/PDF/CAD),
                        kirim langsung ke {sbnBrand.email}.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Korporat */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerBrand}>
                <Image
                  src="/images/portfolio/sbn/logo-light.png"
                  alt="Logo PT Sentra Baja Nusantara"
                  width={512}
                  height={441}
                  className={styles.brandLogo}
                />
                <strong>{sbnBrand.companyName}</strong>
              </div>
              <p className={styles.footerDesc}>
                Mitra distribusi material baja struktural, plat industri, pipa
                karbon, dan layanan pra-fabrikasi untuk sektor manufaktur,
                konstruksi, dan energi di Indonesia.
              </p>
            </div>

            <div className={styles.footerCol}>
              <h3>Navigasi</h3>
              <ul>
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h3>Lokasi &amp; Kontak</h3>
              <ul>
                <li>{sbnBrand.headquarters}</li>
                {sbnBrand.branches.map((branch) => (
                  <li key={branch}>{branch}</li>
                ))}
                <li>
                  <a href={`mailto:${sbnBrand.email}`}>{sbnBrand.email}</a>
                </li>
                <li>{sbnBrand.phone}</li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>
              &copy; 2026 {sbnBrand.companyName}. Seluruh hak cipta dilindungi.
            </span>
            <span>Distribusi Baja Industri &amp; Layanan Pra-Fabrikasi B2B</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
