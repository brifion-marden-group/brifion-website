# Verifikasi

## Navbar dikembalikan dan konsultasi dipusatkan, 16 November 2026

Navbar kembali ke tampilan sebelum peringkasan: Demo, Solusi, Untuk siapa, Cara kerja, dan tautan Konsultasi pada desktop; hamburger dan CTA dalam menu pada mobile. Section konsultasi kini memakai pengantar center di atas formulir dengan lebar maksimum 720px. Formulir tetap satu langkah, tiga kolom, dan langsung menuju draf WhatsApp. Catatan navbar versi sebelumnya di bawah merupakan riwayat.

## Penyederhanaan formulir dan navbar, 16 November 2026

Formulir saat ini satu langkah dengan tiga kolom: nama, perusahaan, kebutuhan singkat. Tombol langsung membuka draf `wa.me`, tanpa layar sukses/konfirmasi tambahan. Email, telepon, jabatan, bidang, skala, anggaran, dan waktu tidak ditanyakan di website. Detail dilanjutkan pada percakapan. Navbar desktop: Demo sistem, Solusi, Tentang Brifion, Konsultasi; tombol konsultasi tetap terlihat pada mobile. Script QA formulir dua langkah di bawah merupakan riwayat dan perlu diganti untuk alur baru. Tidak menambahkan AI WhatsApp atau mengirim pesan saat QA.

`pnpm lint` dan `pnpm build`: PASS. `_internal/review/simple-funnel-qa.py`: PASS pada 320, 390, 768, 1024, 1440; navbar, menu dan Escape, tiga kolom, validasi native, navigasi langsung ke draf WA dengan hanya query `text`, encoding perusahaan `PT A & B`, tanpa POST ke server. Navigasi WA dicegat lokal; tidak mengirim pesan. Submit dinonaktifkan tanpa JS agar nilai state yang belum dihidrasi tidak terkirim. Audit kontras teks: tidak ada temuan.

## Redesign, 15 November 2026 (hasil terkini)

Preview: http://localhost:3200. Prototype: http://127.0.0.1:3214/login. Domain dan deployment ditunda.

- Homepage fokus distributor/supplier; proyek lintas bidang dan harga lama tidak dirender. Demo memakai prototype supermarket dengan data simulasi.
- Formulir hanya menyusun draf `wa.me`. Tanpa database, API pengajuan, localStorage, atau pengiriman otomatis. Reload menghapus isian.
- `_internal/review/redesign-qa.py` lulus pada 320, 390, 768, 1024, 1440: tanpa overflow, gambar termuat, navigasi, form maju/mundur dan Ubah isian, encoding perusahaan dengan `&`, reload, tanpa POST atau error JavaScript.
- HTML tanpa JS menyediakan profil/solusi/cara kerja dan alternatif email. Demo, privasi, sitemap, robots: HTTP 200.
- Audit kontras teks DOM homepage tidak menemukan rasio di bawah AA.
- `pnpm lint` dan `pnpm build`: PASS pada hasil akhir; sembilan route statis dihasilkan. QA lima lebar dan kontras juga PASS pada preview produksi hasil build ini.
- Tautan aplikasi demo menuju `http://127.0.0.1:3214/login`; halaman akun uji berhasil dibuka. Skip link keyboard PASS. Path internal, environment, dan API pengajuan yang tidak digunakan mengembalikan 404.
- Screenshot: `_internal/review/redesign-hero-{390,1440}.png` dan `redesign-full-{390,1440}.png`.

Batas: belum perangkat fisik/Safari. QA tidak mengirim WhatsApp. Mock prototype hanya development; akses publik belum diatur. Foto stok bukan fasilitas/karyawan Brifion atau klien.

Bagian berikut adalah riwayat versi lama dan tidak seluruhnya berlaku pada homepage baru.

Diperbarui 13 November 2026. Preview produksi: http://localhost:3200.

## Pemeriksaan terakhir

| Pemeriksaan | Hasil |
| --- | --- |
| `pnpm lint`, `tsc --noEmit`, `pnpm build` | PASS; semua route statis |
| `_internal/review/verify.py` pada 320, 390, 768, 1024, 1440 px | PASS: navigasi ke semua section, menu mobile, tidak ada overflow horizontal, skip link dan fokus keyboard, tab harga (klik dan tombol panah), semua gambar termuat |
| HTML tanpa JavaScript | PASS: 6 layanan, 8 modul proyek utama, 6 paket harga di kedua tab, 4 tahap kerja |
| Metadata | PASS: canonical `https://brifion.com`, JSON-LD Organization dengan `sameAs` sosial media dan katalog paket |
| Tautan kontak | WhatsApp `https://wa.me/6285695102171`, email `business@brifion.com`, 4 sosial media dengan `noopener noreferrer` |
| Path privat | PDF di `_internal/` dan `.env` mengembalikan 404 |

Belum diuji di perangkat fisik atau Safari.

## Perlu disetujui sebelum publikasi

1. Harga "Software operasional": ClickUp #14 masih berstatus usulan bersyarat (menunggu persetujuan Mas Miles).
2. Harga "Website & aplikasi": berasal dari draf internal 29 Okt yang menyebut angkanya belum resmi.
3. Proyek supermarket & distribusi: pastikan klien tidak keberatan proyeknya disebut, walau namanya tidak ditampilkan.
4. Pengalaman tim developer tampil tanpa keterangan bahwa itu proyek pribadi (catatan dihapus atas permintaan pengguna). Pengantar section masih menyebut "pengalaman tim developer kami".
5. Aset Magnific untuk hero: menunggu file dari pengguna, lalu pasang kredit "Designed by Magnific".
6. Link LinkedIn perlu dibuka manual; pemeriksaan otomatis diblokir LinkedIn.
7. Keamanan: deskripsi ClickUp #2 berisi email dan kata sandi akun sosial media dalam teks biasa. Sebaiknya dihapus dan kata sandi diganti.
