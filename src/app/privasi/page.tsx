import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Informasi privasi",
  description: "Informasi penggunaan data formulir konsultasi dan Brifion Social Publishing, pencabutan akses Meta, serta permintaan penghapusan data.",
  path: "/privasi",
});

export default function PrivacyPage() {
  return <main className="page-width standalone-page privacy-page"><Link className="back-link" href="/">← Kembali ke Brifion</Link><p className="eyebrow">INFORMASI PRIVASI</p><h1>Bagaimana data<br />Anda digunakan.</h1><p>Diperbarui 16 November 2026.</p><h2>Tidak disimpan di database</h2><p>Formulir meminta nama, nama perusahaan, dan kebutuhan singkat Anda. Isian ini tidak dikirim ke server Brifion dan tidak disimpan di database. Isian hanya ada sementara di browser Anda selama halaman terbuka, lalu hilang saat halaman dimuat ulang atau ditutup.</p><h2>Melanjutkan ke WhatsApp</h2><p>Setelah formulir lengkap, website menyusun tautan WhatsApp berisi ringkasan isian. Membuka tautan meneruskan teks ke WhatsApp sebagai draf. Pesan baru diterima Brifion setelah Anda menekan Kirim di WhatsApp. Penggunaan WhatsApp mengikuti kebijakan layanan tersebut.</p><h2>Isi secukupnya</h2><p>Jangan masukkan kata sandi, dokumen identitas, informasi rekening, atau data rahasia pelanggan ke kolom kebutuhan. Cukup jelaskan proses kerja dan kendala secara umum.</p><section aria-labelledby="social-publishing-title">
      <h2 id="social-publishing-title">Brifion Social Publishing</h2>
      <p>PT Brifion Marden Group menggunakan Brifion Social Publishing sebagai alat internal untuk mengunggah dan menerbitkan konten yang disiapkan dengan bantuan AI ke Facebook Page dan akun Instagram bisnis Brifion.</p>
      <h3>Data yang digunakan</h3>
      <p>Aplikasi menggunakan ID Facebook Page dan ID akun Instagram bisnis untuk menentukan akun tujuan. Saat penerbitan, aplikasi mengirimkan media dan caption ke Meta. Meta mengembalikan ID konten dan status penerbitan agar Brifion dapat memeriksa hasil unggahan.</p>
      <h3>Penyimpanan data</h3>
      <p>Untuk menjalankan otomatisasi, Brifion mengonfigurasi token akses pengguna dan App Secret melalui file konfigurasi lokal.</p>
      <h3>Mencabut akses dan meminta penghapusan data</h3>
      <p>Pengelola akun dapat mencabut akses Brifion Social Publishing melalui pengaturan integrasi bisnis Meta. Untuk meminta penghapusan data yang dikelola Brifion melalui aplikasi ini, hubungi <a href="mailto:business@brifion.com">business@brifion.com</a> dan sebutkan akun atau Halaman serta data yang ingin dihapus.</p>
    </section><h2>Kontak</h2><p>Untuk pertanyaan mengenai informasi yang sudah Anda kirim, hubungi PT Brifion Marden Group melalui <a href="mailto:business@brifion.com">business@brifion.com</a>.</p></main>;
}
