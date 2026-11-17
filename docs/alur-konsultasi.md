# Alur konsultasi WhatsApp

Diperbarui 17 November 2026. Perubahan hanya pada website; tidak mengubah Astra atau konfigurasi WhatsApp.

## Jalur

| CTA | Tujuan | Konteks draf |
| --- | --- | --- |
| Konsultasi umum ke formulir | /#konsultasi | Tidak ada label paket/demo |
| Kartu Stok Tertib di beranda | /?paket=stok-tertib#konsultasi | Paket Stok Tertib |
| Kartu Order ke Stok di beranda | /?paket=order-ke-stok#konsultasi | Paket Order ke Stok |
| Kartu Distribusi Terkendali di beranda | /?paket=distribusi-terkendali#konsultasi | Paket Distribusi Terkendali |
| Konsultasikan kebutuhan pada /demo | /?demo=supermarket-distribusi#konsultasi | Demo supermarket dan distribusi |
| Tiga tombol paket pada /harga | WhatsApp langsung | Nama paket masing-masing |
| CTA WhatsApp umum | WhatsApp langsung | Pesan umum, tanpa konteks formulir |

Konteks dibaca dari URL saat ini dan dicocokkan dengan ID paket yang dikenal. Tidak ada session/local storage untuk konteks. Tautan umum memakai /#konsultasi agar parameter konteks sebelumnya dihapus. Konteks tidak dikenal atau paket dan demo yang bersamaan diperlakukan sebagai umum.

Formulir tetap hanya meminta nama, perusahaan, dan kebutuhan. Hanya parameter text dikirim melalui GET ke nomor dari company.whatsappUrl. Browser melakukan URL encoding, termasuk ampersand, plus, pagar dan baris baru. Tautan membuka draf; pengunjung tetap memeriksa, mengedit dan menekan Kirim sendiri. Tidak ada database baru.

## Contoh draf

Umum:

```text
Halo Brifion, saya Imam dari Galaxy Distributor.
Kebutuhan saya: Pencatatan order dan stok keluar masih terpisah.
```

Paket beranda (nama paket mengikuti kartu yang dipilih):

```text
Halo Brifion, saya Imam dari Galaxy Distributor.
Saya tertarik dengan paket Order ke Stok.
Kebutuhan saya: Pencatatan order dan stok keluar masih terpisah.
```

Demo:

```text
Halo Brifion, saya Imam dari Galaxy Distributor.
Saya ingin konsultasi terkait demo supermarket dan distribusi.
Kebutuhan saya: Pencatatan order dan stok keluar masih terpisah.
```

Paket pada /harga tetap langsung, tanpa meminta identitas lewat formulir:

```text
Halo Brifion, saya tertarik dengan paket Stok Tertib. Saya ingin konsultasi kebutuhan aplikasi.
```

Nama pada draf /harga berganti menjadi Order ke Stok atau Distribusi Terkendali sesuai tombol. CTA WhatsApp umum tetap memakai pesan umum yang sudah disiapkan pada masing-masing CTA.

## Verifikasi lokal

Lint dan production build lulus. Browser QA pada lebar 390 dan 1440 menguji jalur umum, ketiga paket beranda, demo, perpindahan konteks paket/demo ke umum, ketiga CTA /harga, konteks tidak dikenal, dan konteks bertentangan. Setiap draf formulir diuji memakai nama/perusahaan/kebutuhan dengan karakter &, +, # serta kebutuhan dua baris. Nomor tujuan, metode GET dan tiga isian diperiksa. Tidak ada pesan WhatsApp yang dikirim; permintaan ke wa.me diintersep lokal.

Skrip dan hasil QA lokal tersedia di _internal/review/consultation-qa.py dan consultation-qa-results.json (diabaikan Git).
