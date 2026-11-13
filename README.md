# Website PT Brifion Marden Group

Website profil perusahaan satu halaman untuk `brifion.com`: profil, proyek, layanan, harga, cara kerja, dan kontak. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, dan ESLint. Package manager pnpm 10; Node.js 20.9 atau lebih baru.

## Menjalankan

```powershell
pnpm install --frozen-lockfile
pnpm dev                    # http://localhost:3000
```

## Pemeriksaan dan preview produksi

```powershell
pnpm lint
pnpm build
pnpm start --port 3200      # http://localhost:3200
```

Hentikan server preview sebelum membuat build baru. Font Manrope dan Lora diambil `next/font/google` saat build, jadi build pertama perlu internet. Website tidak memakai environment variable atau database.

## Struktur

| Lokasi | Isi |
| --- | --- |
| `src/content/site.ts` | Semua copy publik per section: perusahaan, navigasi, hero, proyek, tentang, layanan, harga, cara kerja, kontak, sosial media |
| `src/components/sections.tsx` | Hero, Tentang, Layanan, Harga, Cara kerja, Kontak, footer |
| `src/components/projects.tsx` | Section Proyek: proyek utama dan pengalaman tim developer |
| `src/components/pricing-tabs.tsx` | Tab harga (client component); semua panel tetap ada di HTML |
| `src/components/erp-dashboard.tsx` | Ilustrasi dashboard ERP (SVG) di hero |
| `src/components/site-header.tsx` | Header dan menu mobile |
| `src/components/two-lines.tsx` | Judul dua baris |
| `src/app/page.tsx` | Urutan section dan JSON-LD Organization |
| `src/app/layout.tsx`, `robots.ts`, `sitemap.ts` | Metadata, font, robots, sitemap |
| `src/app/globals.css` | Token warna, tipografi, dan gaya per section |
| `public/` | Logo, foto, dan screenshot proyek (sumber di `docs/aset-visual.md`) |

Untuk mengubah teks, cukup edit `site.ts`. Untuk menyembunyikan harga, hapus baris `package-price` di `pricing-tabs.tsx` atau kosongkan grup di `pricing.groups`.

Seluruh teks, termasuk kedua tab harga, dirender sebagai HTML statis sehingga bisa dibaca tanpa JavaScript oleh mesin pencari dan Astra (AI WhatsApp). Sinkronisasi konten ke Astra belum ada di repo ini.

## Materi internal

`_internal/` berada di luar `public/` dan diabaikan Git:

- `_internal/sumber/`: PDF Company Profile dan Pedoman Brand.
- `_internal/review/verify.py`: QA Playwright (lebar 320–1440 px, navigasi, tab harga, keyboard, gambar, HTML tanpa JS, path privat). Jalankan `python _internal/review/verify.py` saat preview aktif di port 3200.

`.env*`, PDF, dan dokumen Office juga diabaikan Git.

## Dokumen

- [Sumber konten](docs/sumber-konten.md)
- [Aset visual](docs/aset-visual.md)
- [Referensi desain](docs/referensi-desain.md)
- [Verifikasi dan daftar persetujuan](docs/verifikasi.md)

## Repo dan deployment

- Repo: [brifion-marden-group/brifion-website](https://github.com/brifion-marden-group/brifion-website) (private).
- Preview produksi: https://brifion-website.vercel.app (Vercel, scope `imam-bahri-alwis-projects`, paket Hobby).
- Deploy ulang dari folder ini: `vercel deploy --prod`. Repo belum terhubung ke Vercel untuk deploy otomatis; paket Hobby tidak bisa memakai repo private milik organisasi.
- Domain `brifion.com` belum diarahkan. Untuk website resmi komersial, pindahkan ke paket Vercel Pro sebelum memasang domain.
