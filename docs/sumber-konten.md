# Sumber konten publik

## Pembaruan arah, 15 November 2026

Instruksi terbaru: fokus aplikasi custom distributor/supplier; gunakan prototype supermarket yang sudah ada sebagai demo, tanpa membangun demo distributor baru. Formulir hanya menyimpan isian sementara di browser untuk draf WhatsApp. Domain/subdomain ditunda.

Prototype diverifikasi dari `Desktop/prototype`: DEMO_SCOPE, DEMO_SCRIPT, SessionGate, FormLogin, klien-mock. Aplikasi dijalankan dan dipotret dengan akun fixture. Panduan akses mengikuti kode terkini yang memakai login. Sumber prototype tidak diubah.

Homepage mengutamakan demo, kebutuhan operasional, konteks distributor/supplier, profil, empat tahap kerja, konsultasi. Contoh masalah bukan jaminan fitur produk. Layanan mengikuti Company Profile. Harga draf tidak dirender atau dimasukkan ke JSON-LD. Copy baru ada pada distributor-home.tsx dan consultation-form.tsx; materi berikut merupakan riwayat versi sebelumnya.

Diperbarui 13 November 2026. Semua copy ada di `src/content/site.ts`.

## Dokumen sumber

| Salinan di `_internal/sumber/` | Asal | SHA-256 |
| --- | --- | --- |
| `Brifion_Marden_Group_Company_Profile.pdf` | `Downloads/Brifion_Marden_Group_Company_Profile (1).pdf` | `fe58024c88db9d94de7c2a0d715897e097f89f9a90d6c86a72e2626f879f1881` |
| `Pedoman_Brand_Brifion_Marden_Group.pdf` | `Downloads/Pedoman_Brand_Brifion_Marden_Group.pdf` | `56cf9d613f5b669d3a5688e4c5ccc25d85cd6fdc01ac162aacdc5b3e9bd914c0` |

Nama file yang disebut di brief awal (`... (1)(2).pdf` dan `... (2).pdf`) tidak ditemukan; versi di atas adalah yang terbaru di workspace.

## Pemetaan

| Bagian website | Dasar |
| --- | --- |
| Headline, profil, pendekatan kerja | Company Profile hlm. 1–2; headline ditetapkan di brief |
| Proyek utama: supermarket & distribusi (Maluku), ringkasan dan 8 modul | Company Profile hlm. 8; dijadikan proyek utama atas arahan pengguna. Nama klien tidak ditampilkan |
| Pengalaman tim developer (Knect HRIS, Tradoxes, Jaecoo, Galaxy POS) | Izin pengguna dan Mas Miles untuk menampilkan proyek pribadi developer; Tradoxes dari Company Profile hlm. 7 |
| Enam layanan dan bentuk kerja sama | Company Profile hlm. 2 dan 10 |
| Empat tahap cara kerja | Company Profile hlm. 2 dan 9 |
| Harga, tab "Software operasional" (Rp8/12/25 juta) | `Brifion_Paket_Software_Distributor.pdf` dan ClickUp #14 (4 Nov 2026), status usulan bersyarat |
| Harga, tab "Website & aplikasi" (Rp5/8/12 juta) | `Brifion_Pricing_Proposal_Draft_2026.pdf` (29 Okt 2026); dokumen menyebutnya draf, belum harga resmi |
| Sosial media | ClickUp #2 |
| Email dan WhatsApp bisnis, nama legal | Brief pengguna |
| Gaya bahasa (kami/Anda), warna navy dan emas, tipografi sans + serif italic | Pedoman Brand hlm. 2, 5, dan 6 |

Catatan: dokumen harga Brifion punya beberapa versi (29 Okt: Rp15/32/58 juta; 30 Okt: Rp8/15/25 juta; 4 Nov: Rp8/12/25 juta). Website memakai versi 4 Nov.
