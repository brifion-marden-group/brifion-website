import Image from "next/image";
import Link from "next/link";
import { company, nav, socials } from "@/content/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`page-width ${styles.grid}`}>
        <div>
          <Link href="/#top" aria-label={`${company.name}, ke beranda`}><Image quality={90} src="/brand/brifion-logo-terang.png" alt={company.name} width={1683} height={552} className={styles.logo} /></Link>
          <p>Aplikasi custom untuk operasional distributor dan supplier.</p>
        </div>
        <nav aria-label="Navigasi footer">
          <h2>Jelajahi</h2>
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <nav aria-label="Media sosial">
          <h2>Ikuti kami</h2>
          {socials.map((x) => <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer">{x.label}</a>)}
        </nav>
      </div>
      <div className={`page-width ${styles.bottom}`}>
        <p>&copy; 2026 {company.legalName}</p>
        <Link href="/privasi">Informasi privasi</Link>
      </div>
    </footer>
  );
}
