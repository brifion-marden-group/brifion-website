import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, distributorPackages } from "@/content/site";
import s from "@/components/ui/sections.module.css";
import { pageMetadata } from "@/lib/seo";
import styles from "./harga.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Harga paket aplikasi distributor",
  description: "Harga paket aplikasi custom untuk distributor dan supplier: Stok Tertib mulai Rp8 juta, Order ke Stok mulai Rp12 juta, dan Distribusi Terkendali mulai Rp25 juta, lengkap dengan cakupan, durasi, dan garansi.",
  path: "/harga",
});

const { items } = distributorPackages;

function whatsappFor(name: string) {
  const text = `Halo Brifion, saya tertarik dengan paket ${name}. Saya ingin konsultasi kebutuhan aplikasi.`;
  return `${company.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export default function PricingPage() {
  return <>
    <a href="#konten-utama" className="skip-link">Langsung ke konten</a>
    <SiteHeader />
    <main id="konten-utama" tabIndex={-1} className="distribution-home">
      <section className={s.section} aria-labelledby="harga-title">
        <div className="page-width">
          <div className={s.head}>
            <p className={s.eyebrow}>Harga paket</p>
            <h1 id="harga-title" className={s.title}>Harga awal yang jelas sejak percakapan pertama</h1>
            <p className={s.intro}>Pilih paket dari masalah yang paling ingin Anda selesaikan. Setiap paket mencakup paket sebelumnya, dan cakupannya bisa disesuaikan setelah konsultasi.</p>
          </div>
          <ol className={s.grid3}>
            {items.map((plan) => (
              <li key={plan.id} id={plan.id} className={`${s.card} ${styles.plan}`}>
                <div className={s.cardHead}><h2 className={s.cardTitle}>{plan.name}</h2></div>
                <div className={s.cardBody}>
                  <p className={s.cardText}>{plan.problem}</p>
                  <p className={styles.price}><small>Mulai dari</small>{plan.price}</p>
                  <p className={styles.duration}>Pengerjaan {plan.duration}</p>
                  <ul className={s.checks}>
                    {plan.base && <li className={s.strong}>Semua cakupan {plan.base}</li>}
                    {plan.scope.map((line) => <li key={line}>{line}</li>)}
                  </ul>
                  <dl className={styles.specs}>
                    <div><dt>Gudang</dt><dd>{plan.gudang}</dd></div>
                    <div><dt>Pengguna</dt><dd>{plan.peran}</dd></div>
                    <div><dt>Laporan</dt><dd>{plan.laporan}</dd></div>
                    <div><dt>Garansi bug</dt><dd>{plan.warranty}</dd></div>
                  </dl>
                </div>
                <div className={s.cardFoot}>
                  <a className={s.btnSolid} href={whatsappFor(plan.name)} target="_blank" rel="noopener noreferrer">Konsultasikan paket ini</a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </main>
    <SiteFooter />
  </>;
}
