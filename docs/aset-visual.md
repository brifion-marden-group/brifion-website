# Aset visual

## Aset aktif (16 November 2026)

| Berkas | Dipakai di | Sumber |
| --- | --- | --- |
| `brand/brifion-logo-terang.png` | Header, footer | Logo resmi Brifion |
| `demo/stock-hd.webp` | Hero, `/demo` | Screenshot prototype supermarket Brifion, data simulasi |
| `images/distribution-warehouse.webp` | Tentang Brifion | Maor Attias, [Pexels 5156696](https://www.pexels.com/photo/boxes-on-shelves-inside-a-warehouse-5156696/), lisensi Pexels |
| `images/contexts/*.webp` (5 berkas) | Kartu Jenis usaha | Ilustrasi dari ESIACC (esiacc.com), dipakai atas arahan pengguna; bukan karya Brifion dan lisensinya belum diverifikasi |
| `src/components/ui/flow-illustration.tsx` | Kartu "Alur usaha Anda berbeda?" | SVG buatan sendiri |
| `src/components/ui/icons.tsx` | Baris kemampuan paket | Ikon garis buatan sendiri |

Dihapus pada pembersihan 16 November 2026 karena tidak lagi dirender: `images/references/*` (cuplikan SimpliDOTS, Choco, Aras Pro), `projects/*`, `images/business-planning.webp`, `images/proyek-supermarket.webp`, `images/warehouse-operations.webp`, `demo/dashboard*.webp`, `demo/stock.webp`, dan `src/components/erp-dashboard.tsx`. Catatan di bawah adalah riwayat dan dapat menyebut berkas yang sudah dihapus.

## Tentang Brifion dan kartu ajakan, 16 November 2026

- Tentang Brifion kini memakai `images/distribution-warehouse.webp` (Maor Attias, [Pexels 5156696](https://www.pexels.com/photo/boxes-on-shelves-inside-a-warehouse-5156696/), lisensi Pexels). Ilustrasi `contexts/distributor.webp` tetap dipakai sekali di kartu Jenis usaha, sehingga tidak ada gambar ganda.
- Kartu "Alur usaha Anda berbeda?" memakai ilustrasi SVG buatan sendiri di `src/components/ui/flow-illustration.tsx` (alur Order, Gudang, Kirim, Tagih dengan cabang "Alur Anda"). Tidak memakai aset pihak ketiga.

## Kualitas HD, 16 November 2026

Screenshot prototype diambil ulang langsung pada viewport 1440 x 960 dengan device scale factor 2, menghasilkan `demo/stock-hd.webp` dan `dashboard-hd.webp` berukuran 2880 x 1920. Sumber screenshot dikodekan WebP lossless agar teks tetap tajam; ini render ulang, bukan pembesaran bitmap lama. Nama file baru menghindari cache gambar versi lama. Image homepage dan halaman demo meminta quality 90 yang diizinkan pada next.config.ts. Ilustrasi Tentang meminta ukuran lebih besar sesuai rasio pemotongan object-fit: cover, sehingga browser tidak meregangkan gambar kecil untuk memenuhi tinggi bidang. Ilustrasi tetap memakai sumber aslinya 2244 x 701; tidak mengklaim detail baru atau membuat ulang kontennya.

## Hero, Tentang, dan footer, 16 November 2026

Hero kini hanya menampilkan screenshot asli stok pada prototype Brifion, tanpa ilustrasi vendor di belakangnya. Ilustrasi distributor yang sebelumnya ada pada hero dipindah ke Tentang Brifion, dipakai sekali dan tetap berkredit ESIACC. Footer ditata menjadi identitas, navigasi, kontak, lalu baris legal/privasi. Screenshot dashboard di bagian demo tetap berbeda dari screenshot hero; tidak menambah pengulangan gambar konten.

## Penghapusan pengulangan pada homepage, 16 November 2026

Setiap gambar konten kini dipakai sekali per homepage: hero memakai ilustrasi distributor + screenshot stok; demo memakai screenshot dashboard; tiga kebutuhan memakai material-stock, supplier, dan owner-reports; fokus usaha memakai satu ilustrasi multi-location dengan daftar audiens. `material-stock.webp` berasal dari `https://esiacc.com/_img/banners_usaha/Toko%20Bangunan%20H.jpg`, proporsi asli 2244 x 701. Ilustrasi material dipakai untuk konteks persediaan, bukan menambah sektor penawaran. Logo header/footer tidak dihitung sebagai duplikasi konten.

## Kebutuhan operasional, 16 November 2026

Sesuai arahan terbaru, ketiga visual kebutuhan diganti menjadi ilustrasi ESIACC dengan gaya yang konsisten: `contexts/distributor.webp` untuk stok, `contexts/supplier.webp` untuk pesanan, dan `contexts/owner-reports.webp` untuk laporan. Aset terakhir diunduh dari `https://esiacc.com/_img/banners_usaha/Usaha%20yang%20Membutuhkan%20Kontrol%20Owner%20H.jpg`, dimensi asli 2244 x 701. Proporsi dipertahankan; kredit berbunyi Ilustrasi dari ESIACC. Visual SimpliDOTS, Choco, dan Aras Pro tidak lagi dirender pada bagian ini. Copy, CTA, dan formulir tidak diubah.

## Hero dan visual kebutuhan: empat referensi, 15 November 2026

Sesuai instruksi pengguna, aset dari empat referensi digunakan sementara dengan kredit sumber. Hero memakai ilustrasi ESIACC dan screenshot asli demo Brifion di bidang depan. Bagian kebutuhan memakai:

- `references/simplidots-inventory.webp`: https://www.simplidots.com/wp-content/uploads/2024/07/sd_tab_product_2-min.png (648 x 502).
- `references/choco-orders.webp`: https://choco.com/assets/_1200xAUTO_crop_center-center_90_none/433692/OrderAgent-v02-3.webp (1200 x 916).
- `references/araspro-dashboard.webp`: screenshot bagian dashboard pada homepage https://araspro.id/, bukan pengambilan akun aplikasi privat.

Semua berada di `public/images/`. Cuplikan vendor diberi label Referensi visual sementara, bukan screenshot produk Brifion, dan tidak dipakai sebagai bukti fitur atau hasil Brifion. Tidak mengklaim memiliki lisensi Pexels untuk aset referensi. Penempatan ini untuk review lokal; tidak ada deploy. Formulir dan fungsi demo tidak diubah.

## Koreksi aset sesuai arahan pengguna

Pengguna secara eksplisit meminta ilustrasi kartu ESIACC dipakai, bukan foto pengganti. Bagian fokus usaha kini memakai tiga aset dari `https://esiacc.com/_img/banners_usaha/`: `Grosir dan Distributor H.jpg`, `Supplier dan Usaha Proyek H.jpg`, dan `Usaha Multi-Outlet H.jpg`. Disimpan sebagai WebP lokal di `public/images/contexts/`, dengan proporsi asli 2244 x 701 dan kredit sumber ESIACC. Status sebagai buatan AI berasal dari keterangan pengguna, bukan verifikasi pembuat atau lisensi. Tidak mengklaim karya asli Brifion atau lisensi Pexels untuk ketiga aset ini. Foto hero tetap memakai Pexels; foto lama pada fokus usaha digantikan.

## Redesign, 15 November 2026

- `public/demo/dashboard.webp` dan `stock.webp`: screenshot langsung `Desktop/prototype`, 1440 x 960, akun fixture Owner dalam development mock. Data simulasi. Toolbar development disembunyikan untuk screenshot; UI aplikasi tidak diubah.
- `public/images/distribution-warehouse.webp`: Maor Attias, [Pexels 5156696](https://www.pexels.com/photo/boxes-on-shelves-inside-a-warehouse-5156696/), konteks gudang hero.
- `public/images/warehouse-operations.webp`: Tiger Lily, [Pexels 4481260](https://www.pexels.com/photo/men-working-in-a-warehouse-4481260/), aktivitas gudang bagian fokus usaha.

Halaman sumber dan [lisensi Pexels](https://www.pexels.com/license/) diperiksa: penggunaan website/modifikasi diizinkan tanpa menyiratkan endorsement. Foto adalah ilustrasi, bukan lokasi/karyawan Brifion atau klien. WebP disajikan lokal. Tidak mengambil aset ESIACC atau memakai gambar generatif. Materi berikut mencatat versi sebelumnya.

Diperbarui 13 November 2026. Semua aset disajikan lokal dari `public/`.

| Berkas | Dipakai di | Sumber dan lisensi |
| --- | --- | --- |
| `brand/brifion-logo-terang.png` | Header, footer | Logo resmi dari `Desktop/Brand Brifion/_src/`; hanya area transparan yang dipangkas |
| `images/business-planning.webp` | Tentang | Alena Darmel, [Pexels](https://www.pexels.com/photo/a-person-sticking-sticky-notes-on-a-paper-7706977/); lisensi Pexels, atribusi tidak wajib |
| `images/proyek-supermarket.webp` | Proyek utama | Franki Chamaki, [Unsplash](https://unsplash.com/photos/grocery-store-aisle-with-stocked-shelves-ivfp_yxZuYQ); Unsplash License, atribusi tidak wajib. Ilustrasi, bukan lokasi klien |
| `projects/jaecoo-web.webp` | Hero, Proyek | Screenshot website Jaecoo GCP yang dikembangkan Imam Bahri Alwi |
| `projects/knect-home.webp`, `knect-announcement.webp` | Hero, Proyek | Render widget test Knect HRIS dengan data fixture |
| `projects/tradoxes-dashboard.webp` | Proyek | Gambar dashboard dari halaman produk publik tradoxes.com (Abdee Alamsyah Noer Siyam) |
| `projects/galaxy-dashboard.webp` | Proyek | Screenshot Galaxy POS lokal dengan database demo |
| `src/components/erp-dashboard.tsx` | Kartu tengah hero | Ilustrasi dashboard ERP buatan sendiri (SVG). Menu mengikuti 8 modul proyek utama, angka contoh, berlabel "Ilustrasi" |
| `src/app/icon.png`, `apple-icon.png` | Favicon | Dibuat dari monogram resmi |

Kredit foto tidak ditampilkan di halaman atas permintaan pengguna; lisensi Unsplash dan Pexels mengizinkannya.

## Rencana penggantian

Pengguna ingin kartu tengah hero memakai aset "ERP dashboard" dari [Magnific](https://www.magnific.com/free-photos-vectors/erp-dashboard) (dulu Freepik). Situsnya memblokir akses otomatis, jadi file perlu diunduh manual. Lisensi gratis Magnific mewajibkan kredit "Designed by Magnific" dengan tautan ke magnific.com, misalnya di bawah gambar atau di footer.

## Yang tidak dipakai dan alasannya

- Screenshot ERP vendor lain: hak cipta dan merek, serta bisa terkesan sebagai karya Brifion.
- Template MIT `tchiphuong/dashboard-tailwind`: seluruh antarmuka dan data berbahasa Vietnam.
- Foto lorong Superindo dan foto forklift dengan truk berlogo: menampilkan merek atau kontak perusahaan nyata.
- Screenshot prototipe Brifion: ditolak pengguna karena tampilannya kurang menarik untuk website.
