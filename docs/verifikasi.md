# Verifikasi

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
