// Copy dan data publik yang dipakai bersama oleh beberapa halaman.
// Sumber fakta: Company Profile 2026, Pedoman Brand 2026, dan dokumen harga Brifion
// (lihat docs/sumber-konten.md). Jangan menambahkan nama klien, foto tim, atau angka hasil
// tanpa persetujuan publikasi tertulis.

export const company = {
  legalName: "PT Brifion Marden Group",
  name: "Brifion Marden Group",
  shortName: "Brifion",
  statement: "Aplikasi custom untuk distributor dan supplier",
  // Domain utama: Vercel me-redirect brifion.com ke www.brifion.com, jadi canonical memakai www.
  url: "https://www.brifion.com",
  email: "business@brifion.com",
  whatsappUrl: "https://wa.me/6285695102171",
  whatsappDisplay: "+62 856-9510-2171",
  description:
    "Brifion membangun aplikasi custom untuk distributor dan supplier. Lihat demo prototype supermarket, kenali pendekatan kami, dan ceritakan kebutuhan Anda sebelum berdiskusi di WhatsApp.",
} as const;

// Identitas legal. Sumber: NIB (OSS, 29 Juli 2026) dan SK Menkum AHU (3 Juli 2026).
// NPWP serta email/telepon pada NIB sengaja tidak dipublikasikan; kontak resmi memakai `company`.
export const legal = {
  name: "PT Brifion Marden Group",
  entity: "Perseroan Perorangan",
  nib: "2907260133385",
  sk: "AHU-A101638.AH.01.30.Tahun 2026",
  skDate: "3 Juli 2026",
  kbli: "62199 · Aktivitas Pemrograman Komputer Lainnya",
  address: {
    street: "Kp. Sadang, Desa Cikarageman, Kec. Setu",
    city: "Kabupaten Bekasi",
    region: "Jawa Barat",
    postalCode: "17320",
  },
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
  { href: "/portofolio", label: "Portofolio" },
  { href: "/harga", label: "Harga" },
  { href: "/tentang", label: "Tentang" },
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

// Halaman /tentang. Sumber: Company Profile 2026 (hlm. 2, 3, 9). Penampilan nama tim, angka
// pengalaman individu, dan nama perusahaan mitra disetujui untuk publik (17 November 2026).
// Foto tim: pas foto asli masing-masing (17 Nov 2026); logo mitra dari situs resmi mitra. Lihat docs/aset-visual.md.
export const about = {
  intro: {
    title: "Kami mulai dari masalah bisnis, lalu membangun sistem yang benar-benar dipakai",
    body: [
      "Brifion Marden Group adalah mitra transformasi digital dan AI. Kami membantu organisasi memahami masalah operasionalnya, menentukan prioritas, lalu membangun solusi digital yang sesuai dengan cara kerja mereka.",
      "Brifion didirikan oleh Muhammad Syamil Alfarizi dan digerakkan oleh developer full-stack yang sudah menangani produk digital di lingkungan production: platform dengan ratusan ribu akun, sistem pembayaran, aplikasi mobile, hingga situs lembaga pemerintah daerah.",
    ],
    quote: "Sistem yang baik tidak diukur dari banyaknya fitur, tetapi dari seberapa jelas uang, data, dan pekerjaan dapat ditelusuri setelah sistem itu dipakai setiap hari.",
  },
  // Pengalaman individu tim, dikelompokkan per jenis proyek (Company Profile hlm. 3-10).
  // Pengguna aktif 100rb+ dikonfirmasi pengguna (17 Nov 2026). Nama proyek asli sengaja tidak ditampilkan.
  experience: [
    {
      type: "Platform edukasi berbayar",
      body: "Kelas berbayar di atas akun pengguna yang sudah ada: tagihan, akses materi, dan sertifikat berjalan otomatis.",
      stats: [
        { value: "100rb+", label: "pengguna aktif, langsung pakai tanpa daftar ulang" },
        { value: "76", label: "endpoint API dibangun dalam ±1 minggu" },
      ],
    },
    {
      type: "Platform akademik",
      body: "Mata kuliah, tugas, presensi, dan analitik mahasiswa dalam satu platform.",
      stats: [
        { value: "130+", label: "pengguna terdaftar" },
        { value: "5 orang", label: "tim produk yang dipimpin" },
      ],
    },
    {
      type: "Situs perusahaan garmen",
      body: "Optimasi performa situs dan layanan backend perusahaan.",
      stats: [{ value: "80–90", label: "skor kecepatan situs, naik dari 50–60" }],
    },
    {
      type: "Situs lembaga pemerintah",
      body: "Redesain website resmi dengan CMS yang bisa dikelola staf non-teknis.",
      stats: [{ value: "±29", label: "halaman didesain ulang" }],
    },
  ],
  metricsNote: "Sumber: pengalaman individu anggota tim sebelum dan selama di Brifion.",
  // Screenshot prototype Brifion sendiri (demo.brifion.com, data simulasi).
  showcase: [
    { src: "/images/showcase/dashboard.webp", width: 1440, height: 900, title: "Dashboard pemilik", body: "Omzet, transaksi, nilai stok, dan hal yang perlu perhatian dalam satu layar.", role: "Owner" },
    { src: "/images/showcase/stok.webp", width: 1440, height: 900, title: "Stok gudang & rak", body: "Stok per lokasi beserta status menipis, untuk dicek sebelum barang habis.", role: "Kepala Gudang" },
    { src: "/images/showcase/pesanan-warung.webp", width: 1440, height: 900, title: "Pesanan warung", body: "Status pesanan dari dibuat sampai diterima, lengkap dengan surat jalan dan jejak.", role: "Sales" },
  ],
  showcaseMobile: { src: "/images/showcase/pengiriman-hp.webp", width: 585, height: 1266, title: "Pengiriman di HP", body: "Sopir melihat pesanan yang perlu diantar dan menandai barang diterima.", role: "Sopir" },
  principles: [
    { title: "Bisnis dulu, teknologi kemudian", body: "Teknologi dipilih karena sesuai kebutuhan, bukan karena tren." },
    { title: "Ikuti alur kerja nyata", body: "Modul saling terhubung sesuai cara organisasi bekerja." },
    { title: "Otomasi dengan kontrol", body: "Proses berulang diotomasi; persetujuan tetap di tangan yang berwenang." },
    { title: "Semua bisa ditelusuri", body: "Perubahan angka penting punya catatan petugas, waktu, dan alasan." },
    { title: "Siap diteruskan", body: "Dokumentasi dan teknologi umum agar sistem bisa dilanjutkan tim lain." },
  ],
  team: [
    {
      initials: "MS",
      avatar: "/images/team/syamil.webp",
      name: "Muhammad Syamil Alfarizi",
      role: "Founder · Business & Systems Strategy",
      body: "Menerjemahkan kebutuhan bisnis menjadi alur kerja dan sistem operasional yang terhubung: manajemen, keuangan, penawaran, dan pencatatan transaksi. Memimpin hubungan mitra, scope, anggaran, dan prioritas.",
      tags: ["Analisis bisnis", "Perancangan sistem", "Scope & anggaran"],
    },
    {
      initials: "IA",
      avatar: "/images/team/alwi.webp",
      name: "Imam Bahri Alwi",
      role: "Full-Stack Developer",
      body: "±2 tahun di sistem production. Titik berat: backend, database, autentikasi, pembayaran, optimasi, dan penanganan masalah production.",
      tags: ["Next.js", "React Native", "NestJS", "Express", "PostgreSQL", "Supabase"],
    },
    {
      initials: "AA",
      avatar: "/images/team/abdee.webp",
      name: "Abdee Alamsyah Noer Siyam",
      role: "Full-Stack Developer",
      body: "S1 Informatika, Telkom University Purwokerto. Titik berat: produk, antarmuka, arsitektur end-to-end, dan koordinasi tim.",
      tags: ["Next.js", "React", "Prisma", "PostgreSQL", "AWS"],
    },
  ],
  teamNote: "Alwi dan Abdee sama-sama full-stack, sehingga bisa saling menggantikan dan saling meninjau. Pekerjaan tidak berhenti pada satu orang.",
  workflow: [
    { title: "Penggalian kebutuhan & scope", body: "Diskusi bisnis dan observasi alur kerja. Hasilnya: daftar kebutuhan, prioritas, batas pekerjaan, dan hal yang tidak termasuk." },
    { title: "Pembagian tugas & penanggung jawab", body: "Setiap modul punya satu penanggung jawab utama dan satu peninjau. Mitra memiliki satu PIC sebagai jalur keputusan." },
    { title: "Koordinasi frontend, backend, data & integrasi", body: "Kontrak API dan struktur data disepakati sebelum antarmuka dibangun. Integrasi pihak ketiga diuji di lingkungan terpisah." },
    { title: "Review pekerjaan & pengujian", body: "Setiap tahap diperiksa silang, diuji di staging, lalu diperagakan kepada mitra berdasarkan daftar periksa." },
    { title: "Pelaporan progres & hambatan", body: "Laporan berkala berisi yang selesai, yang tertunda, risiko, dan keputusan yang dibutuhkan dari mitra." },
    { title: "Penanganan perubahan kebutuhan", body: "Perubahan diajukan tertulis; dampaknya pada biaya dan jadwal disampaikan sebelum dikerjakan." },
    { title: "Dokumentasi & serah terima", body: "Panduan pengguna, dokumentasi teknis, akun administrator, dan kode sumber diserahkan. Data tetap milik mitra." },
  ],
  partners: [
    { name: "PT DryFix Solusi Indonesia", logo: "/images/partners/dryfix.webp", width: 618, height: 560, url: "https://dryfixwaterproofing.com/" },
    { name: "CHADPRO (PT Cahaya Haka)", logo: "/images/partners/chadpro.webp", width: 500, height: 97, url: "https://chadpro.co.id/" },
  ],
  partnersNote: "Kolaborasi pengembangan sistem internal.",
} as const;

// FAQ beranda (juga dipakai untuk structured data FAQPage). Fakta mengikuti halaman harga,
// demo, dan keputusan 17 November 2026: layanan seluruh Indonesia; data dan kode milik klien.
export const faq = [
  {
    q: "Berapa biaya membuat aplikasi?",
    a: "Paket aplikasi distributor mulai dari Rp8 juta (Stok Tertib), Rp12 juta (Order ke Stok), dan Rp25 juta (Distribusi Terkendali). Harga belum termasuk pajak, domain, dan hosting. Ruang lingkup dan biaya final disepakati setelah kebutuhan dibahas bersama.",
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Sekitar 2–3 minggu untuk Stok Tertib, 3–5 minggu untuk Order ke Stok, dan 6–8 minggu untuk Distribusi Terkendali. Jadwal final mengikuti ruang lingkup yang disepakati.",
  },
  {
    q: "Apakah aplikasinya bisa disesuaikan dengan alur usaha kami?",
    a: "Bisa. Kami mulai dari memahami alur kerja dan pengguna di usaha Anda, lalu menentukan fitur yang perlu dibangun. Kebutuhan di luar paket dihitung terpisah.",
  },
  {
    q: "Apakah bisa dicoba dulu sebelum memutuskan?",
    a: "Bisa. Prototype supermarket dan distribusi kami dapat dicoba di demo.brifion.com dengan delapan akun uji dan data simulasi.",
  },
  {
    q: "Bagaimana setelah sistem selesai dibuat?",
    a: "Setiap paket mendapat garansi bug 30, 60, atau 90 hari sesuai paket. Kami juga mendampingi pemakaian lewat pelatihan, dokumentasi, dan perbaikan sesuai kesepakatan.",
  },
  {
    q: "Siapa pemilik data dan kode aplikasinya?",
    a: "Data dan kode program milik Anda. Saat serah terima, kami menyerahkan kode sumber, dokumentasi, dan akun administrator.",
  },
  {
    q: "Melayani wilayah mana saja?",
    a: "Kami melayani usaha di seluruh Indonesia.",
  },
  {
    q: "Bagaimana cara memulai?",
    a: "Isi formulir konsultasi atau chat kami di WhatsApp. Kita bahas kebutuhan dan alur kerja Anda dulu sebelum membicarakan fitur dan biaya.",
  },
] as const;
