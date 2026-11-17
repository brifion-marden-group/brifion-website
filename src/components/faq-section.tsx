import { company, faq } from "@/content/site";
import { SectionHead } from "./ui/section-head";
import s from "./ui/sections.module.css";
import styles from "./faq-section.module.css";

const PESAN = "Halo Brifion, saya punya pertanyaan tentang pembuatan aplikasi untuk usaha saya.";

// FAQ beranda: pertanyaan buka-tutup (<details>), ditutup ajakan WhatsApp.
// Data yang sama dipakai untuk structured data FAQPage di src/app/page.tsx.
export function FaqSection() {
  return (
    <section id="faq" className={`${s.section} ${styles.section}`} aria-labelledby="faq-title">
      <div className="page-width">
        <SectionHead id="faq-title" eyebrow="04 / FAQ" title="Pertanyaan yang sering diajukan" intro="Jawaban singkat sebelum Anda berkonsultasi." />
        <div className={styles.list}>
          {faq.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary className={styles.question}>
                <span>{item.q}</span>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </div>
        <div className={styles.more}>
          <div>
            <p className={styles.moreTitle}>Masih ada pertanyaan?</p>
            <p className={styles.moreText}>Tanyakan langsung ke tim kami lewat WhatsApp.</p>
          </div>
          <a className={s.btnSolid} href={`${company.whatsappUrl}?text=${encodeURIComponent(PESAN)}`} target="_blank" rel="noopener noreferrer">
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
