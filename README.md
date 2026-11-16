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

`/demo` membaca alamat prototype dari `BRIFION_DEMO_URL` saat build. Produksi: `https://demo.brifion.com` (diisi di environment Vercel). Preview lokal memakai `http://127.0.0.1:3214/login`. Tanpa alamat valid, halaman menampilkan "akses sedang disiapkan". Alamat publik harus HTTPS.

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

- Repo: [brifion-marden-group/brifion-website](https://github.com/brifion-marden-group/brifion-website).
- Vercel (akun `brifionmardengr`, project `brifion-website`) terhubung ke repo ini: setiap push ke `main` memicu deploy produksi. Paket Hobby menolak deploy dari repo private milik organisasi GitHub, jadi repo perlu public atau akun Vercel perlu paket Pro.
- Domain: `brifion.com` di-redirect ke `www.brifion.com` (domain utama). DNS dikelola di Hostinger.
- Ketentuan Vercel membatasi paket Hobby untuk penggunaan non-komersial; untuk website resmi perusahaan, pertimbangkan paket Pro.

## SEO, Search Console, dan domain (status 16 November 2026)

**Sudah**

- Domain utama `https://www.brifion.com`; canonical, `robots.txt`, dan sitemap (4 halaman: `/`, `/harga`, `/demo`, `/privasi`) memakai www. Metadata per halaman lewat `src/lib/seo.ts`, gambar pratinjau dari `src/app/opengraph-image.tsx`, structured data Organization + WebSite di beranda.
- Google Search Console: properti diverifikasi lewat DNS, sitemap `https://www.brifion.com/sitemap.xml` sudah dikirim dan diproses (4 halaman ditemukan), dan permintaan pengindeksan sudah diajukan.
- Deploy Vercel untuk commit terakhir di kedua repo sudah berhasil; `demo.brifion.com` live dan tautan dari `/demo` website berfungsi.
- Alert Dependabot `minimatch` sudah ditangani (override `minimatch` 11.0.1 di `package.json`).
- Prototype: typecheck, lint, 418 test, dan build lulus.
- DNS di Hostinger: `brifion.com` (A ke Vercel, redirect ke www), `www` (CNAME ke Vercel), `demo` (subdomain demo ke project Vercel prototype).
- Demo publik `demo.brifion.com`: repo [brifion-marden-group/prototype](https://github.com/brifion-marden-group/prototype), Next.js tanpa backend dengan `NEXT_PUBLIC_DEMO_MODE=true`, `NEXT_PUBLIC_AUTH_MOCK=true`, `NEXT_PUBLIC_API_MOCK=true`; dipasang `noindex`. Website mengarah ke sana lewat `BRIFION_DEMO_URL`.

**Dipantau**

- Hasil pengindeksan Google (beberapa hari sampai beberapa minggu); cek Search Console > Pages.

**Belum**

- Pengaturan AI WhatsApp dan pengalihan percakapan ke tim.
- Paket Vercel Pro untuk penggunaan komersial.
