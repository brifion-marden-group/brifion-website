"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  vektorBrand,
  vektorCorridors,
  vektorFleets,
  vektorMetrics,
  vektorReviews,
  vektorSectors,
  vektorStandards,
} from "@/content/vektor";
import styles from "@/app/p/vektor-logistik-armada/vektor.module.css";

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
  { href: "#koridor", label: "Estimasi Koridor" },
  { href: "#solusi", label: "Solusi Sektor" },
  { href: "#standar", label: "Standar Operasi" },
  { href: "#ulasan", label: "Ulasan Mitra" },
  { href: "#penawaran", label: "Kontrak & Kontak" },
] as const;

export function VektorLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [corridorId, setCorridorId] = useState<string>(vektorCorridors[0].id);
  const [fleetId, setFleetId] = useState<string>(vektorFleets[2].id);

  // Contract inquiry form state
  const [picName, setPicName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceMode, setServiceMode] = useState("Kontrak Dedicated Fleet");
  const [frequency, setFrequency] = useState("Rutin Harian / Mingguan");
  const [notes, setNotes] = useState("");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const selectedCorridor =
    vektorCorridors.find((c) => c.id === corridorId) ?? vektorCorridors[0];
  const selectedFleet =
    vektorFleets.find((f) => f.id === fleetId) ?? vektorFleets[0];

  const estimatedHours = Math.round(
    selectedCorridor.baseLeadHours * selectedFleet.leadMultiplier
  );
  const leadTimeLabel =
    estimatedHours >= 48
      ? `${Math.round(estimatedHours / 24)} – ${Math.round(estimatedHours / 24) + 1} Hari Kerja`
      : `${estimatedHours} – ${estimatedHours + 4} Jam`;

  function applyCorridorToForm() {
    setNotes(
      `Koridor: ${selectedCorridor.label}\nArmada: ${selectedFleet.name} (${selectedFleet.capacity})\nEstimasi kebutuhan bulanan: `
    );
    setSubmittedRef(null);
    document.getElementById("penawaran")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const suffix = String(
      2000 + ((picName.length * 97 + companyName.length * 41) % 7999)
    );
    setSubmittedRef(`VLA-2026-${suffix}`);
  }

  return (
    <div className={styles.root}>
      <a href="#konten-vektor" className="skip-link">
        Langsung ke konten
      </a>

      {/* Header */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a href="#beranda" className={styles.brand}>
            <Image
              src="/images/portfolio/vektor/logo-dark.png"
              alt="Logo PT Vektor Logistik Armada"
              width={512}
              height={371}
              className={styles.brandLogo}
              preload
            />
            <span className={styles.brandName}>VEKTOR LOGISTIK ARMADA</span>
          </a>

          <nav aria-label="Navigasi utama" className={styles.nav}>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerCta}>
            <a href="#penawaran" className={styles.btnPillPrimary}>
              Minta Penawaran
            </a>
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="vektor-mobile-nav"
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
            id="vektor-mobile-nav"
            aria-label="Navigasi mobile"
            className={styles.mobileNav}
          >
            <div className={styles.container}>
              <ul>
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#penawaran"
                className={`${styles.btnPillPrimary} ${styles.mobileNavBtn}`}
                onClick={() => setMenuOpen(false)}
              >
                Minta Penawaran Kontrak
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="konten-vektor" tabIndex={-1}>
        {/* Light-First Editorial Hero */}
        <section
          id="beranda"
          className={styles.hero}
          aria-labelledby="vektor-hero-title"
        >
          <div className={styles.container}>
            <div className={styles.heroHeader}>
              <div>
                <span className={styles.heroPill}>
                  <span className={styles.heroPillDot} aria-hidden="true" />
                  Logistik Kargo &amp; Armada Korporat B2B
                </span>
                <h1 id="vektor-hero-title" className={styles.heroTitle}>
                  Distribusi kargo dan armada <span>terdedikasi</span> untuk
                  rantai pasok nasional.
                </h1>
              </div>

              <div className={styles.heroAside}>
                <p className={styles.heroLead}>
                  PT Vektor Logistik Armada mengelola pengiriman FTL, armada
                  berpendingin cold-chain, dan konsolidasi antar-pulau dengan
                  visibilitas GPS 24/7 serta bukti serah terima digital.
                </p>
                <div className={styles.heroActions}>
                  <a href="#koridor" className={styles.btnPillPrimary}>
                    Cek Estimasi Koridor
                  </a>
                  <a href="#penawaran" className={styles.btnPillOutline}>
                    Diskusi Kontrak Armada
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.heroPanorama}>
              <div className={styles.heroMedia}>
                <Image
                  quality={90}
                  src="/images/portfolio/vektor/hero-port.jpg"
                  alt="Jaringan terminal pelabuhan kontainer dan koridor pengiriman kargo PT Vektor Logistik Armada."
                  fill
                  sizes="(max-width: 1260px) 100vw, 1260px"
                  preload
                />
              </div>
              <dl className={styles.heroMetrics}>
                {vektorMetrics.map((metric) => (
                  <div key={metric.label} className={styles.metricCell}>
                    <dt className="sr-only">{metric.label}</dt>
                    <dd style={{ margin: 0 }}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Kalkulator Koridor & Estimasi Armada Interaktif */}
        <section
          id="koridor"
          className={styles.sectionSage}
          aria-labelledby="vektor-koridor-title"
        >
          <div className={styles.container}>
            <div className={styles.secHead}>
              <p className={styles.secEyebrow}>Perencana Koridor &amp; Armada</p>
              <h2 id="vektor-koridor-title" className={styles.secTitle}>
                Periksa estimasi lead time dan spesifikasi unit sebelum mengirim
              </h2>
              <p className={styles.secIntro}>
                Pilih koridor utama dan tipe armada yang sesuai karakter muatan
                perusahaan Anda untuk melihat estimasi waktu tempuh serta
                kapasitas angkut.
              </p>
            </div>

            <div className={styles.estimatorWrap}>
              <div className={styles.estimatorControls}>
                <div>
                  <p className={styles.controlGroupLabel}>
                    1. Pilih Koridor Pengiriman
                  </p>
                  <div
                    className={styles.corridorList}
                    role="radiogroup"
                    aria-label="Koridor pengiriman"
                  >
                    {vektorCorridors.map((corridor) => {
                      const active = corridor.id === selectedCorridor.id;
                      return (
                        <button
                          key={corridor.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          className={`${styles.corridorBtn} ${
                            active ? styles.corridorBtnActive : ""
                          }`}
                          onClick={() => setCorridorId(corridor.id)}
                        >
                          <span>
                            <strong>{corridor.label}</strong>
                            <small>{corridor.distance}</small>
                          </span>
                          <span className={styles.corridorTag}>
                            {active ? "Dipilih" : "Pilih"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className={styles.controlGroupLabel}>
                    2. Pilih Tipe Armada
                  </p>
                  <div
                    className={styles.fleetGrid}
                    role="radiogroup"
                    aria-label="Tipe armada"
                  >
                    {vektorFleets.map((fleet) => {
                      const active = fleet.id === selectedFleet.id;
                      return (
                        <button
                          key={fleet.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          className={`${styles.fleetBtn} ${
                            active ? styles.fleetBtnActive : ""
                          }`}
                          onClick={() => setFleetId(fleet.id)}
                        >
                          <strong>{fleet.name}</strong>
                          <span>
                            {fleet.capacity} &middot; {fleet.volume}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className={styles.estimatorResult}>
                <div>
                  <span className={styles.resultBadge}>
                    {selectedCorridor.mode}
                  </span>
                  <h3 className={styles.resultTitle}>
                    {selectedCorridor.label}
                  </h3>
                  <p className={styles.resultRoute}>{selectedCorridor.route}</p>

                  <dl className={styles.resultSpecs}>
                    <div>
                      <dt>Estimasi Lead Time</dt>
                      <dd>{leadTimeLabel}</dd>
                    </div>
                    <div>
                      <dt>Tipe Armada</dt>
                      <dd>{selectedFleet.name}</dd>
                    </div>
                    <div>
                      <dt>Kapasitas &amp; Volume</dt>
                      <dd>
                        {selectedFleet.capacity} ({selectedFleet.volume})
                      </dd>
                    </div>
                    <div>
                      <dt>Hub Keberangkatan</dt>
                      <dd>{selectedCorridor.hubOrigin}</dd>
                    </div>
                    <div className={styles.resultWide}>
                      <dt>Spesifikasi Muatan &amp; Keamanan</dt>
                      <dd>{selectedFleet.tempSpec}</dd>
                    </div>
                  </dl>

                  <p className={styles.resultNote}>{selectedFleet.bestFor}.</p>
                </div>

                <button
                  type="button"
                  className={styles.btnMint}
                  onClick={applyCorridorToForm}
                >
                  Gunakan Rute Ini di Penawaran <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solusi per Sektor B2B */}
        <section
          id="solusi"
          className={styles.section}
          aria-labelledby="vektor-solusi-title"
        >
          <div className={styles.container}>
            <div className={styles.secHead}>
              <p className={styles.secEyebrow}>Solusi per Sektor</p>
              <h2 id="vektor-solusi-title" className={styles.secTitle}>
                Operasional armada disesuaikan dengan standar industri Anda
              </h2>
              <p className={styles.secIntro}>
                Setiap vertikal bisnis memiliki tuntutan bongkar muat, kontrol
                suhu, dan ritme distribusi tersendiri. Kami menyusun SOP armada
                mengikuti karakteristik rantai pasok Anda.
              </p>
            </div>

            <ul className={styles.sectorGrid}>
              {vektorSectors.map((sector) => (
                <li key={sector.title} className={styles.sectorCard}>
                  <div className={styles.sectorPhoto}>
                    <Image
                      quality={90}
                      src={sector.image}
                      alt={sector.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 48vw"
                    />
                  </div>
                  <div className={styles.sectorBody}>
                    <span className={styles.sectorTag}>{sector.tag}</span>
                    <h3>{sector.title}</h3>
                    <p>{sector.body}</p>
                    <ul className={styles.sectorPoints}>
                      {sector.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Standar Operasional */}
        <section
          id="standar"
          className={styles.sectionPine}
          aria-labelledby="vektor-standar-title"
        >
          <div className={styles.container}>
            <div className={styles.secHead}>
              <p className={styles.secEyebrow}>Standar Operasional &amp; SLA</p>
              <h2 id="vektor-standar-title" className={styles.secTitle}>
                Visibilitas penuh sejak muat hingga dokumen kembali
              </h2>
              <p className={styles.secIntro}>
                Keterbukaan posisi armada, kepastian jam tiba, dan kerapian
                administrasi surat jalan menjadi fondasi kerja sama jangka
                panjang kami dengan tim supply chain klien.
              </p>
            </div>

            <ol className={styles.standardGrid}>
              {vektorStandards.map((item) => (
                <li key={item.code} className={styles.standardCard}>
                  <span className={styles.standardNo}>{item.code}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ulasan Mitra Korporat */}
        <section
          id="ulasan"
          className={styles.section}
          aria-labelledby="vektor-ulasan-title"
        >
          <div className={styles.container}>
            <div className={styles.reviewHeader}>
              <div className={styles.secHead}>
                <p className={styles.secEyebrow}>Ulasan Mitra Korporat</p>
                <h2 id="vektor-ulasan-title" className={styles.secTitle}>
                  Dipercaya pemimpin rantai pasok lintas sektor industri
                </h2>
                <p className={styles.secIntro}>
                  Catatan langsung dari mitra kontrak distribusi harian, armada
                  cold-chain, dan pengiriman antar-kota kami.
                </p>
              </div>
              <div className={styles.ratingPill}>
                <span className={styles.ratingScore}>4,9</span>
                <div className={styles.ratingMeta}>
                  <StarRow />
                  <span>110+ klien kontrak logistik B2B aktif</span>
                </div>
              </div>
            </div>

            <ul className={styles.reviewGrid}>
              {vektorReviews.map((review) => (
                <li key={review.name} className={styles.reviewCard}>
                  <div>
                    <div className={styles.reviewTop}>
                      <StarRow />
                      <span className={styles.reviewScope}>{review.scope}</span>
                    </div>
                    <blockquote className={styles.reviewQuote}>
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className={styles.reviewAuthor}>
                    <span className={styles.reviewAvatar} aria-hidden="true">
                      {review.initials}
                    </span>
                    <div className={styles.reviewAuthorText}>
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

        {/* Formulir Penawaran Kontrak Logistik */}
        <section
          id="penawaran"
          className={styles.sectionSage}
          aria-labelledby="vektor-penawaran-title"
        >
          <div className={styles.container}>
            <div className={styles.rfqGrid}>
              <div>
                <p className={styles.secEyebrow}>Penawaran Kontrak B2B</p>
                <h2 id="vektor-penawaran-title" className={styles.secTitle}>
                  Rancang skema armada dan tarif kontrak untuk rute Anda
                </h2>
                <p className={styles.secIntro}>
                  Tim commercial solutions kami menyiapkan proposal tarif per
                  koridor, alokasi armada dedicated, serta rencana integrasi
                  laporan e-POD sesuai kebutuhan perusahaan Anda.
                </p>

                <dl className={styles.contactStack}>
                  <div className={styles.contactBox}>
                    <dt>Commercial &amp; Tender Desk</dt>
                    <dd>
                      {vektorBrand.phone} &middot; {vektorBrand.whatsapp}
                    </dd>
                    <dd className={styles.contactSub}>{vektorBrand.email}</dd>
                  </div>
                  <div className={styles.contactBox}>
                    <dt>Kantor Pusat &amp; Control Tower</dt>
                    <dd>{vektorBrand.headquarters}</dd>
                  </div>
                  <div className={styles.contactBox}>
                    <dt>Jaringan Hub Regional</dt>
                    <dd>Surabaya, Semarang, Medan &amp; Makassar</dd>
                    <dd className={styles.contactSub}>
                      Operasional pengiriman dan pemantauan 24 jam setiap hari
                    </dd>
                  </div>
                </dl>
              </div>

              <div className={styles.formCard}>
                <div className={styles.formHead}>
                  <h3>Formulir Penawaran Logistik</h3>
                  <p>
                    Sampaikan koridor dan kebutuhan armada Anda. Proposal tarif
                    resmi dikirim maksimal 1 hari kerja.
                  </p>
                </div>

                {submittedRef ? (
                  <div className={styles.successCard} role="status">
                    <span className={styles.successRef}>{submittedRef}</span>
                    <h4>Permintaan penawaran kontrak telah diterima</h4>
                    <p>
                      Terima kasih, <strong>{picName}</strong> ({companyName}).
                      Account manager PT Vektor Logistik Armada sedang menyusun
                      estimasi tarif untuk layanan <strong>{serviceMode}</strong>{" "}
                      ({frequency}) dan akan menghubungi Anda melalui{" "}
                      <strong>{email}</strong> atau {phone}.
                    </p>
                    <button
                      type="button"
                      className={styles.resetBtn}
                      onClick={() => {
                        setSubmittedRef(null);
                        setNotes("");
                      }}
                    >
                      Kirim permintaan lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.fields}>
                    <div className={styles.field}>
                      <label htmlFor="v-pic">Nama PIC / Supply Chain *</label>
                      <input
                        id="v-pic"
                        type="text"
                        required
                        placeholder="Nama lengkap"
                        value={picName}
                        onChange={(e) => setPicName(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="v-company">Nama Perusahaan *</label>
                      <input
                        id="v-company"
                        type="text"
                        required
                        placeholder="Nama perusahaan"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="v-email">Email Bisnis *</label>
                      <input
                        id="v-email"
                        type="email"
                        required
                        placeholder="nama@perusahaan.co.id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="v-phone">Telepon / WhatsApp *</label>
                      <input
                        id="v-phone"
                        type="tel"
                        required
                        placeholder="08xx-xxxx-xxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="v-mode">Skema Layanan *</label>
                      <select
                        id="v-mode"
                        value={serviceMode}
                        onChange={(e) => setServiceMode(e.target.value)}
                      >
                        <option value="Kontrak Dedicated Fleet">
                          Kontrak Dedicated Fleet
                        </option>
                        <option value="Full Truckload (FTL) Antar-Kota">
                          Full Truckload (FTL) Antar-Kota
                        </option>
                        <option value="Distribusi Cold-Chain (Reefer)">
                          Distribusi Cold-Chain (Reefer)
                        </option>
                        <option value="Kontainer Door-to-Door Antar-Pulau">
                          Kontainer Door-to-Door Antar-Pulau
                        </option>
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="v-freq">Frekuensi Pengiriman *</label>
                      <select
                        id="v-freq"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                      >
                        <option value="Rutin Harian / Mingguan">
                          Rutin Harian / Mingguan
                        </option>
                        <option value="Kontrak Bulanan / Tahunan">
                          Kontrak Bulanan / Tahunan
                        </option>
                        <option value="Proyek / Pengiriman Terjadwal">
                          Proyek / Pengiriman Terjadwal
                        </option>
                      </select>
                    </div>

                    <div className={`${styles.field} ${styles.fieldWide}`}>
                      <label htmlFor="v-notes">
                        Rincian Koridor, Armada &amp; Volume *
                      </label>
                      <textarea
                        id="v-notes"
                        required
                        placeholder="Rute, jenis armada, dan estimasi ritase"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>

                    <div className={styles.fieldWide}>
                      <button
                        type="submit"
                        className={`${styles.btnPillPrimary} ${styles.submitBtn}`}
                      >
                        Ajukan Penawaran Kontrak Logistik
                      </button>
                      <p className={styles.formNote}>
                        Untuk dokumen tender atau matriks rute lengkap, kirim ke{" "}
                        {vektorBrand.email}.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerBrand}>
                <Image
                  src="/images/portfolio/vektor/logo-light.png"
                  alt="Logo PT Vektor Logistik Armada"
                  width={512}
                  height={371}
                  className={styles.brandLogo}
                />
                <strong>{vektorBrand.companyName}</strong>
              </div>
              <p className={styles.footerDesc}>
                Mitra logistik kargo B2B, manajemen armada terdedikasi,
                distribusi berpendingin cold-chain, dan konsolidasi antar-pulau
                untuk perusahaan di seluruh Indonesia.
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
              <h3>Hub &amp; Kontak</h3>
              <ul>
                <li>{vektorBrand.headquarters}</li>
                {vektorBrand.hubs.map((hub) => (
                  <li key={hub}>{hub}</li>
                ))}
                <li>
                  <a href={`mailto:${vektorBrand.email}`}>
                    {vektorBrand.email}
                  </a>
                </li>
                <li>{vektorBrand.phone}</li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>
              &copy; 2026 {vektorBrand.companyName}. Seluruh hak cipta
              dilindungi.
            </span>
            <span>Logistik Kargo, Cold-Chain &amp; Manajemen Armada B2B</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
