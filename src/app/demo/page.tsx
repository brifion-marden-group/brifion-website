import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import s from "@/components/ui/sections.module.css";
import { pageMetadata } from "@/lib/seo";
import styles from "./demo.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Demo prototype supermarket",
  description: "Coba prototype sistem supermarket dan distribusi buatan Brifion dengan data simulasi: dashboard, stok gudang dan rak, serta akses per peran pengguna.",
  path: "/demo",
});

const steps = [
  ["Masuk dengan akun uji", "Tersedia delapan akun: Owner, Supervisor, Kepala Gudang, Petugas Gudang, Kasir, Sales, Sopir, dan Keuangan. Pilih akun yang ingin Anda coba."],
  ["Jelajahi tampilannya", "Owner melihat Dashboard dan Stok. Peran lain melihat menu sesuai tugasnya."],
  ["Ceritakan kebutuhan Anda", "Setelah mencoba, ceritakan proses yang berbeda di perusahaan Anda."],
];

function demoAddress() {
  try {
    const url = new URL(process.env.BRIFION_DEMO_URL ?? "");
    if (url.protocol === "https:" || (url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname))) return url;
  } catch { /* Akses tetap tidak tersedia sampai alamat demo dikonfigurasi. */ }
  return null;
}

export default function DemoPage() {
  const demoUrl = demoAddress();
  return <>
    <a href="#konten-utama" className="skip-link">Langsung ke konten</a>
    <SiteHeader />
    <main id="konten-utama" tabIndex={-1} className="distribution-home">
      <section className={s.section} aria-labelledby="demo-title">
        <div className="page-width">
          <div className={s.head}>
            <p className={s.eyebrow}>Prototype / data simulasi</p>
            <h1 id="demo-title" className={s.title}>Coba prototype yang sudah kami bangun</h1>
            <p className={s.intro}>Prototype supermarket dan distribusi dengan data contoh. Lihat tampilan dan alurnya sebelum membicarakan sistem Anda.</p>
            <div className={styles.actions}>
              {demoUrl
                ? <a className={s.btnSolid} href={demoUrl.toString()} target="_blank" rel="noopener noreferrer">Buka aplikasi demo <span aria-hidden="true">↗</span></a>
                : <p className={styles.notice}>Akses aplikasi demo sedang disiapkan.</p>}
              <Link className={s.btnOutline} href="/#konsultasi">Konsultasikan kebutuhan</Link>
            </div>
          </div>

          <div className={styles.frame}>
            <span className={styles.bar} aria-hidden="true"><i /><i /><i /><b>Prototype supermarket, data simulasi</b></span>
            <div className={styles.shot}>
              <Image quality={90} src="/demo/stock-hd.webp" alt="Halaman stok gudang dan rak pada prototype supermarket dengan data simulasi." width={1440} height={960} sizes="(max-width: 1100px) 100vw, 1000px" preload />
            </div>
          </div>

          <ol className={`${s.grid3} ${styles.steps}`}>
            {steps.map(([title, body], i) => (
              <li key={title} className={`${s.card} ${styles.step}`}>
                <span className={s.stepNo}>0{i + 1}</span>
                <div>
                  <h2 className={`${s.cardTitle} ${styles.stepTitle}`}>{title}</h2>
                  <p className={s.cardText}>{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={s.note}>Semua data di demo adalah simulasi. Akun uji tidak berlaku untuk sistem produksi.</p>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
