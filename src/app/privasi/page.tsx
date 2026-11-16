import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Informasi formulir konsultasi | Brifion", alternates: { canonical: "/privasi" } };

export default function PrivacyPage() {
  return <main className="page-width standalone-page privacy-page"><Link className="back-link" href="/">← Kembali ke Brifion</Link><p className="eyebrow">FORMULIR KONSULTASI</p><h1>Bagaimana isian<br />Anda digunakan.</h1><p>Diperbarui 16 November 2026.</p><h2>Tidak disimpan di database</h2><p>Formulir meminta nama, nama perusahaan, dan kebutuhan singkat Anda. Isian ini tidak dikirim ke server Brifion dan tidak disimpan di database. Isian hanya ada sementara di browser Anda selama halaman terbuka, lalu hilang saat halaman dimuat ulang atau ditutup.</p><h2>Melanjutkan ke WhatsApp</h2><p>Setelah formulir lengkap, website menyusun tautan WhatsApp berisi ringkasan isian. Membuka tautan meneruskan teks ke WhatsApp sebagai draf. Pesan baru diterima Brifion setelah Anda menekan Kirim di WhatsApp. Penggunaan WhatsApp mengikuti kebijakan layanan tersebut.</p><h2>Isi secukupnya</h2><p>Jangan masukkan kata sandi, dokumen identitas, informasi rekening, atau data rahasia pelanggan ke kolom kebutuhan. Cukup jelaskan proses kerja dan kendala secara umum.</p><h2>Kontak</h2><p>Untuk pertanyaan mengenai informasi yang sudah Anda kirim, hubungi PT Brifion Marden Group melalui <a href="mailto:business@brifion.com">business@brifion.com</a>.</p></main>;
}
