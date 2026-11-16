"use client";

import { useEffect, useState } from "react";
import { company } from "@/content/site";
import styles from "./mobile-cta-bar.module.css";

const PESAN = "Halo Brifion, saya ingin konsultasi kebutuhan aplikasi untuk usaha saya.";

// Tombol WhatsApp ringkas di pojok kanan bawah layar HP (disembunyikan mulai 768px lewat CSS).
// Ikut disembunyikan saat section formulir konsultasi terlihat agar tidak dobel dengan tombol form.
export function MobileCtaBar() {
  const [tersembunyi, setTersembunyi] = useState(false);

  useEffect(() => {
    const target = document.getElementById("konsultasi");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setTersembunyi(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.bar} data-hidden={tersembunyi} aria-hidden={tersembunyi}>
      <a
        className={styles.button}
        href={`${company.whatsappUrl}?text=${encodeURIComponent(PESAN)}`}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={tersembunyi ? -1 : undefined}
        aria-label="Konsultasi via WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z" />
        </svg>
        Konsultasi
      </a>
    </div>
  );
}
