import Image from "next/image";
import Link from "next/link";
import { company, distributorPackages, process } from "@/content/site";
import { ConsultationForm } from "./consultation-form";
import hero from "./hero-preview.module.css";
import { Icon, type IconName } from "./ui/icons";
import { FlowIllustration } from "./ui/flow-illustration";
import { SectionHead } from "./ui/section-head";
import s from "./ui/sections.module.css";

export function DistributorHero() {
  return <section className="distribution-hero hero-redesign" id="top" aria-labelledby="hero-title">
    <div className="page-width hero-redesign-layout">
      <div className="hero-redesign-copy">
        <p className="eyebrow">APLIKASI CUSTOM / DISTRIBUTOR & SUPPLIER</p>
        <h1 id="hero-title">Bisnis distribusi.<br /><span>Sistem sesuai<br />cara kerja Anda.</span></h1>
        <p className="hero-redesign-description">Kami membangun aplikasi untuk kebutuhan operasional Anda. Lihat contoh sistemnya, lalu ceritakan proses yang ingin dirapikan.</p>
        <div className="distribution-actions"><Link className="button-gold" href="/demo">Lihat & coba demo</Link><Link className="text-link light" href="/#konsultasi">Konsultasikan kebutuhan</Link></div>
      </div>
      <div className={`hero-product-preview ${hero.visual}`}>
        <Link className={hero.browser} href="/demo" aria-label="Lihat dan coba prototype supermarket">
          <span className={hero.bar} aria-hidden="true"><i /><i /><i /><b>Prototype supermarket, data simulasi</b></span>
          <Image quality={90} src="/demo/stock-hd.webp" alt="Tampilan produk Brifion: halaman stok gudang dan rak pada prototype supermarket dengan data simulasi." width={1440} height={960} sizes="(max-width: 767px) 100vw, 58vw" preload />
        </Link>
        <div className={`${hero.float} ${hero.order}`} aria-hidden="true">
          <span className={hero.icon}>SO</span>
          <span><small>Order baru masuk</small><strong>SO-0412, 24 karton</strong></span>
        </div>
        <div className={`${hero.float} ${hero.ship}`} aria-hidden="true">
          <span className={`${hero.icon} ${hero.iconOk}`}>SJ</span>
          <span><small>Surat jalan SJ-0187</small><strong>Terkirim, bukti diterima</strong></span>
        </div>
      </div>
    </div>
    <div className="page-width hero-redesign-bottom"><span>Pengembangan aplikasi custom untuk distributor dan supplier.</span><a href="#paket">Lihat paket aplikasi <span aria-hidden="true">&rarr;</span></a></div>
  </section>;
}

const capabilities: [IconName, string][] = [
  ["stok", "Stok"], ["order", "Order"], ["pembelian", "Pembelian"], ["gudang", "Gudang"], ["kirim", "Pengiriman"],
  ["tagihan", "Tagihan"], ["kas", "Kas"], ["laporan", "Laporan"], ["akses", "Hak akses"], ["dashboard", "Dashboard"],
];

const businesses = [
  {
    title: "Grosir dan distributor",
    body: "Untuk usaha yang membeli dari supplier, menerima order dalam jumlah besar, lalu mengirim barang ke pelanggan.",
    points: ["Pembelian dari supplier", "Order pelanggan dan sales", "Stok per gudang", "Pengiriman barang"],
    src: "/images/contexts/distributor.webp",
    alt: "Ilustrasi aktivitas gudang dan pengiriman barang distributor.",
  },
  {
    title: "Supplier industri dan proyek",
    body: "Untuk supplier yang perlu mencatat transaksi per pelanggan atau pekerjaan, sampai penagihannya.",
    points: ["Data pelanggan", "Pesanan dan pengiriman", "Penagihan dan piutang", "Laporan operasional"],
    src: "/images/contexts/supplier.webp",
    alt: "Ilustrasi supplier, dokumen pesanan, dan pengiriman barang.",
  },
  {
    title: "Distributor bahan dan material",
    body: "Untuk usaha dengan banyak jenis barang yang stoknya perlu diperiksa sebelum dijual atau dikirim.",
    points: ["Stok material per gudang", "Penjualan tunai dan tempo", "Piutang pelanggan", "Surat jalan"],
    src: "/images/contexts/material-stock.webp",
    alt: "Ilustrasi petugas memeriksa persediaan material di rak penyimpanan.",
  },
  {
    title: "Usaha dengan beberapa gudang",
    body: "Untuk usaha yang memantau stok dan aktivitas beberapa lokasi dalam satu sistem.",
    points: ["Stok per lokasi", "Transfer antar gudang", "Hak akses per pengguna", "Pemantauan terpusat"],
    src: "/images/contexts/multi-location.webp",
    alt: "Ilustrasi pemantauan beberapa lokasi usaha yang saling terhubung.",
  },
  {
    title: "Usaha yang butuh kontrol pemilik",
    body: "Untuk pemilik yang ingin melihat kondisi usaha tanpa harus selalu berada di lokasi operasional.",
    points: ["Dashboard pemilik", "Laporan penjualan dan kas", "Status tagihan", "Jejak perubahan data"],
    src: "/images/contexts/owner-reports.webp",
    alt: "Ilustrasi pemilik usaha memeriksa dashboard dan laporan melalui tablet.",
  },
];

export function PackagesSection() {
  return <section id="paket" className={s.section} aria-labelledby="paket-title">
    <div className="page-width">
      <SectionHead id="paket-title" eyebrow="01 / Paket aplikasi" title="Aplikasi untuk operasional distribusi" intro="Pilih dari masalah yang paling terasa. Setiap paket mencakup paket sebelumnya." />
      <ol className={`${s.grid3} ${s.carousel}`}>
        {distributorPackages.items.map((plan) => (
          <li key={plan.id} className={s.card}>
            <div className={s.cardHead}><h3 className={s.cardTitle}>{plan.name}</h3><span className={s.cardTag}>(mulai {plan.price})</span></div>
            <div className={s.cardBody}>
              <p className={s.cardText}>{plan.problem}</p>
              <ul className={s.checks}>
                {plan.base && <li className={s.strong}>Semua cakupan {plan.base}</li>}
                {plan.scope.map((line) => <li key={line}>{line}</li>)}
                <li>{plan.gudang}, {plan.peran}</li>
              </ul>
            </div>
            <div className={s.cardFoot}>
              <Link className={s.arrowLink} href={`/harga#${plan.id}`}>Lihat detail paket <span aria-hidden="true">&rarr;</span></Link>
              <Link className={s.btnOutline} href={`/?paket=${plan.id}#form-konsultasi`}>Konsultasikan paket ini</Link>
            </div>
          </li>
        ))}
      </ol>
      <p className={s.swipeHint} aria-hidden="true">Geser untuk melihat paket lain</p>
      <div className={s.capsWrap}>
        <p className={s.capsLabel}>Bagian yang bisa dihubungkan dalam satu sistem</p>
        <ul className={s.caps}>
          {capabilities.map(([icon, label]) => <li key={label}><span className={s.capIcon}><Icon name={icon} /></span>{label}</li>)}
        </ul>
      </div>
      <div className={s.actions}>
        <Link className={s.btnOutline} href="/harga">Lihat perbandingan harga</Link>
        <Link className={s.btnSolid} href="/#konsultasi">Konsultasikan kebutuhan</Link>
      </div>
    </div>
  </section>;
}

export function BusinessTypes() {
  return <section id="untuk-siapa" className={`${s.section} ${s.alt}`} aria-labelledby="usaha-title">
    <div className="page-width">
      <SectionHead id="usaha-title" eyebrow="02 / Jenis usaha" title="Cocok untuk usaha yang menggerakkan barang" intro="Distributor, grosir, dan supplier memiliki alur yang berbeda. Sistem dibangun mengikuti proses yang Anda jalankan." />
      <ul className={`${s.grid3} ${s.carousel}`}>
        {businesses.map((b) => (
          <li key={b.title} className={`${s.card} ${s.mediaCard}`}>
            <figure className={s.media}><Image quality={90} src={b.src} alt={b.alt} width={2244} height={701} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" /></figure>
            <div className={s.cardBody}>
              <h3 className={s.cardTitle}>{b.title}</h3>
              <p className={s.cardText}>{b.body}</p>
              <ul className={s.checks}>{b.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
        <li className={`${s.card} ${s.ctaCard}`}>
          <FlowIllustration className={s.ctaArt} />
          <div className={s.cardBody}>
            <h3 className={s.cardTitle}>Alur usaha Anda berbeda?</h3>
            <p className={s.cardText}>Ceritakan prosesnya. Kami pelajari alur kerja tim Anda sebelum menentukan fitur.</p>
            <Link className={s.btnSolid} href="/#konsultasi">Ceritakan kebutuhan Anda</Link>
          </div>
        </li>
      </ul>
      <p className={s.swipeHint} aria-hidden="true">Geser untuk melihat jenis usaha lain</p>
    </div>
  </section>;
}

export function CustomDevelopment() {
  return <section id="tentang" className="custom-development about-refined" aria-labelledby="about-title">
    <div className="page-width about-refined-layout">
      <div className="about-refined-copy">
        <p className="eyebrow">TENTANG BRIFION</p>
        <h2 id="about-title">Pahami bisnisnya.<br /><span>Baru bangun sistemnya.</span></h2>
        <p>PT Brifion Marden Group adalah mitra pengembangan sistem digital. Kami membantu distributor dan supplier membangun aplikasi sesuai kebutuhan operasionalnya.</p>
        <p>Kami mempelajari alur kerja tim Anda, menentukan prioritas, lalu membangun sistem secara bertahap. Mulai dari aplikasi web dan mobile hingga integrasi dan dashboard.</p>
        <div className="about-refined-links"><Link className="text-link light" href="/portofolio">Lihat portofolio <span aria-hidden="true">&rarr;</span></Link><Link className="text-link light" href="/tentang">Kenali tim kami <span aria-hidden="true">&rarr;</span></Link><Link className="text-link light" href="/#konsultasi">Ceritakan proses kerja Anda</Link></div>
      </div>
      <figure className="about-refined-visual"><div><Image quality={90} src="/images/distribution-warehouse.webp" alt="Lorong gudang distribusi dengan rak tinggi berisi palet barang dan forklift yang sedang bekerja." fill sizes="(max-width: 767px) 100vw, 45vw" /></div></figure>
    </div>
  </section>;
}

export function WorkProcess() {
  return <section id="cara-kerja" className={s.section} aria-labelledby="process-title">
    <div className="page-width">
      <SectionHead id="process-title" eyebrow="03 / Cara kerja" title="Anda ikut memeriksa di setiap tahap" intro={process.note} />
      <ol className={`${s.grid3} ${s.grid4} ${s.carousel}`}>
        {process.steps.map((step, i) => (
          <li key={step.title} className={`${s.card} ${s.stepCard}`}>
            <div className={s.cardBody}>
              <span className={s.stepNo}>0{i + 1}</span>
              <h3 className={s.cardTitle}>{step.title}</h3>
              <p className={s.cardText}>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className={s.swipeHint} aria-hidden="true">Geser untuk melihat tahap berikutnya</p>
      <p className={s.note}>Ruang lingkup, biaya, dan jadwal disepakati setelah kebutuhan dibahas bersama. <Link href="/harga" className={s.arrowLink}>Lihat harga paket <span aria-hidden="true">&rarr;</span></Link></p>
    </div>
  </section>;
}

export function Consultation() {
  return <section id="konsultasi" className="consultation-split" aria-labelledby="consultation-title">
    <div className="page-width consultation-split-layout">
      <div className="consultation-split-intro">
        <p className={s.eyebrow}>05 / Konsultasi</p>
        <h2 id="consultation-title">Ceritakan kebutuhan Anda.</h2>
        <p>Isi nama, perusahaan, dan kebutuhan singkat. Setelah itu, lanjutkan percakapan di WhatsApp.</p>
        <ol className="consultation-next">
          <li><span>01</span><div><h3>Isi formulir</h3><p>Cukup ceritakan proses yang paling menyita waktu tim Anda.</p></div></li>
          <li><span>02</span><div><h3>Kirim lewat WhatsApp</h3><p>Isian menjadi draf pesan. Periksa dulu, lalu tekan Kirim.</p></div></li>
          <li><span>03</span><div><h3>Bahas bersama tim kami</h3><p>Kami pelajari alur kerja Anda sebelum membicarakan fitur dan biaya.</p></div></li>
        </ol>
        <dl className="consultation-contact">
          <div><dt>WhatsApp</dt><dd><a href={`${company.whatsappUrl}?text=${encodeURIComponent("Halo Brifion, saya ingin konsultasi kebutuhan aplikasi untuk usaha saya.")}`}>{company.whatsappDisplay}</a></dd></div>
          <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
        </dl>
      </div>
      <ConsultationForm />
    </div>
  </section>;
}
