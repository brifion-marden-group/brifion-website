# Website PT Brifion Marden Group

Website `brifion.com`: aplikasi custom untuk distributor dan supplier. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, ESLint. Package manager pnpm 10; Node.js 20.9 atau lebih baru.

## Halaman

| Rute | Isi |
| --- | --- |
| `/` | Hero dengan preview prototype, 01 Paket aplikasi, 02 Jenis usaha, Tentang Brifion, 03 Cara kerja, 04 Konsultasi |
| `/harga` | Tiga kartu paket distributor (Stok Tertib, Order ke Stok, Distribusi Terkendali) |
| `/demo` | Screenshot dan panduan singkat prototype supermarket |
| `/privasi` | Penggunaan isian formulir konsultasi |

Harga paket berasal dari ClickUp [Miles #14] dan masih berstatus usulan bersyarat; perlu persetujuan sebelum deploy.

## Menjalankan

```powershell
pnpm install --frozen-lockfile
pnpm dev                    # http://localhost:3000
pnpm lint
pnpm build
pnpm start --port 3200      # preview produksi
```

Hentikan server preview sebelum build ulang. Font Manrope diambil `next/font/google` saat build, jadi build pertama perlu internet.

`/demo` membaca alamat prototype dari `BRIFION_DEMO_URL` (environment lokal, diabaikan Git) saat build. Preview lokal memakai `http://127.0.0.1:3214/login`; prototype dijalankan dengan `NEXT_PUBLIC_AUTH_MOCK=true` dan `NEXT_PUBLIC_API_MOCK=true`. Tanpa alamat valid, halaman menampilkan "akses sedang disiapkan". Alamat publik harus HTTPS.

Formulir konsultasi tidak menyimpan data: isian disusun menjadi draf pesan `wa.me`, lalu pengunjung menekan Kirim di WhatsApp.

## Struktur

| Lokasi | Isi |
| --- | --- |
| `src/content/site.ts` | Data bersama: perusahaan, sosial media, navigasi, paket harga, cara kerja |
| `src/components/distributor-home.tsx` | Section homepage |
| `src/components/ui/` | Pola bersama: `sections.module.css` (judul bernomor, kartu, centang), `section-head.tsx`, `icons.tsx`, `flow-illustration.tsx` |
| `src/components/site-header.tsx`, `site-footer.tsx` | Header dan footer semua halaman |
| `src/components/consultation-form.tsx` | Formulir menuju WhatsApp |
| `src/components/hero-preview.module.css` | Frame browser dan kartu status di hero |
| `src/app/globals.css` | Token Tailwind, dasar layout, hero, Tentang, konsultasi, privasi (mobile first) |
| `src/app/harga/`, `src/app/demo/` | Halaman beserta CSS Module-nya |
| `public/` | Logo, screenshot prototype, ilustrasi, foto (sumber di `docs/aset-visual.md`) |

`next.config.ts` mengecualikan `*.module.css` dari loader Tailwind agar CSS Module tetap diproses sebagai module.

## Materi internal

`_internal/` berada di luar `public/` dan diabaikan Git: PDF sumber (`_internal/sumber/`) dan skrip QA Playwright (`_internal/review/`). `.env*`, PDF, dan dokumen Office juga diabaikan Git.

## Dokumen

- [Sumber konten](docs/sumber-konten.md)
- [Aset visual](docs/aset-visual.md)
- [Referensi desain](docs/referensi-desain.md)
- [Verifikasi dan daftar persetujuan](docs/verifikasi.md)

## Repo dan deployment

- Repo: [brifion-marden-group/brifion-website](https://github.com/brifion-marden-group/brifion-website) (private).
- Project Vercel pribadi sebelumnya telah dihapus; `.vercel` lokal dapat masih menunjuk project lama. Belum ada deploy untuk versi ini.
- Domain `brifion.com` belum diarahkan. Untuk website resmi komersial, gunakan paket Vercel Pro sebelum memasang domain.
