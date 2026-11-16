// Copy dan data publik yang dipakai bersama oleh beberapa halaman.
// Sumber fakta: Company Profile 2026, Pedoman Brand 2026, dan dokumen harga Brifion
// (lihat docs/sumber-konten.md). Jangan menambahkan nama klien, foto tim, atau angka hasil
// tanpa persetujuan publikasi tertulis.

export const company = {
  legalName: "PT Brifion Marden Group",
  name: "Brifion Marden Group",
  statement: "Aplikasi custom untuk distributor dan supplier.",
  url: "https://brifion.com",
  email: "business@brifion.com",
  whatsappUrl: "https://wa.me/6285695102171",
  whatsappDisplay: "+62 856-9510-2171",
  description:
    "Brifion membangun aplikasi custom untuk distributor dan supplier. Lihat demo prototype supermarket, kenali pendekatan kami, dan ceritakan kebutuhan Anda sebelum berdiskusi di WhatsApp.",
} as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/brifionmardengr/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/brifion-marden-group/" },
  { label: "Threads", href: "https://www.threads.com/@brifionmardengr" },
  { label: "Facebook", href: "https://www.facebook.com/people/Brifion-Marden-Group/61596302757535/" },
] as const;

// Href memakai "/#..." agar menu tetap berfungsi dari halaman /demo dan /harga.
export const nav = [
  { href: "/#paket", label: "Paket" },
  { href: "/#untuk-siapa", label: "Untuk siapa" },
  { href: "/#cara-kerja", label: "Cara kerja" },
  { href: "/harga", label: "Harga" },
] as const;

export const cta = {
  header: "Konsultasi",
} as const;

// Paket Software Distributor, ClickUp [Miles #14] (revisi 4 Nov 2026, status: in review).
// Status dokumen: usulan bersyarat; harga final menunggu audit reuse MVP dan persetujuan Miles.
// Model biaya, margin, dan vendor pembanding pada review internal TIDAK untuk publik.
// Data termin, maintenance, dan kebutuhan khusus ada di task ClickUp tersebut.
export const distributorPackages = {
  items: [
    {
      id: "stok-tertib",
      name: "Stok Tertib",
      price: "Rp8 juta",
      problem: "Pergerakan barang sulit ditelusuri dan saldo stok sulit diperiksa.",
      base: null,
      scope: ["Penerimaan dan pengeluaran barang", "Kartu dan saldo stok", "Ekspor laporan ke CSV"],
      gudang: "1 gudang",
      peran: "2 peran pengguna",
      laporan: "2 laporan",
      duration: "2–3 minggu",
      warranty: "30 hari",
    },
    {
      id: "order-ke-stok",
      name: "Order ke Stok",
      price: "Rp12 juta",
      problem: "Order pelanggan dan pengeluaran stok dicatat terpisah atau diketik berulang.",
      base: "Stok Tertib",
      scope: ["Order pelanggan dan harga per order", "Stok keluar tercatat dari order", "Invoice dan status lunas"],
      gudang: "1 gudang",
      peran: "3 peran pengguna",
      laporan: "4 laporan",
      duration: "3–5 minggu",
      warranty: "60 hari",
    },
    {
      id: "distribusi-terkendali",
      name: "Distribusi Terkendali",
      price: "Rp25 juta",
      problem: "Pembelian, dua gudang, pengiriman, dan kas perlu dipantau bersama.",
      base: "Order ke Stok",
      scope: ["PO dan penerimaan dari supplier", "Surat jalan dan status kirim", "Transfer antar gudang dan kas dasar"],
      gudang: "2 gudang",
      peran: "5 peran pengguna",
      laporan: "6 laporan",
      duration: "6–8 minggu",
      warranty: "90 hari",
    },
  ],
} as const;

export const process = {
  note: "Setiap tahap bisa Anda periksa. Perubahan kebutuhan, biaya, dan jadwal dibicarakan sebelum dikerjakan.",
  steps: [
    {
      title: "Pahami masalah",
      body: "Kami pelajari alur kerja dan pengguna sistem. Hasilnya daftar kebutuhan dan batas pekerjaan yang jelas.",
    },
    {
      title: "Tentukan prioritas",
      body: "Kami sepakati kebutuhan yang didahulukan, ruang lingkup, jadwal, dan anggaran bersama Anda.",
    },
    {
      title: "Bangun bertahap",
      body: "Anda mencoba dan memeriksa hasil setiap tahap. Progres dan hambatan dilaporkan secara berkala.",
    },
    {
      title: "Dampingi pemakaian",
      body: "Kami bantu tim menggunakan sistem lewat pelatihan, dokumentasi, dan perbaikan sesuai kesepakatan.",
    },
  ],
} as const;
