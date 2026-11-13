// Semua copy publik website ada di file ini, dikelompokkan per section.
// Sumber fakta: Company Profile 2026, Pedoman Brand 2026, dan dokumen harga Brifion
// (lihat docs/sumber-konten.md). Jangan menambahkan nama klien, foto tim, atau angka hasil
// tanpa persetujuan publikasi tertulis.

export const company = {
  legalName: "PT Brifion Marden Group",
  name: "Brifion Marden Group",
  shortName: "Brifion",
  tagline: "AI & Digital Transformation Partner",
  statement: "Sistem digital yang dibangun dari pemahaman bisnis.",
  url: "https://brifion.com",
  email: "business@brifion.com",
  whatsappUrl: "https://wa.me/6285695102171",
  whatsappDisplay: "+62 856-9510-2171",
  description:
    "Brifion Marden Group adalah mitra transformasi digital dan AI. Kami membantu organisasi memahami masalah operasionalnya, menentukan prioritas, lalu membangun sistem yang sesuai dengan cara kerja mereka: website, aplikasi, backend, integrasi, otomasi, dan dashboard.",
} as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/brifionmardengr/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/brifion-marden-group/" },
  { label: "Threads", href: "https://www.threads.com/@brifionmardengr" },
  { label: "Facebook", href: "https://www.facebook.com/people/Brifion-Marden-Group/61596302757535/" },
] as const;

export const nav = [
  { href: "#karya", label: "Proyek" },
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#harga", label: "Harga" },
  { href: "#cara-kerja", label: "Cara kerja" },
  { href: "#kontak", label: "Kontak" },
] as const;

export const cta = {
  primary: "Diskusikan kebutuhan Anda",
  header: "Mari berdiskusi",
} as const;

export const hero = {
  description:
    "Dari operasional tim sampai pengalaman pelanggan. Kami membangun website, aplikasi, dan sistem sesuai cara bisnis Anda bekerja.",
  secondary: "Lihat proyek",
  bottom: ["Website. Aplikasi. Sistem operasional.", "Berangkat dari kebutuhan, terlihat dalam karya."],
} as const;

export const projects = {
  label: "Proyek",
  title: ["Sistem untuk", "kebutuhan bisnis nyata."],
  intro:
    "Proyek utama Brifion saat ini, ditambah pengalaman tim developer kami: Imam Bahri Alwi dan Abdee Alamsyah Noer Siyam.",
  teamTitle: "Pengalaman tim developer",
  swipeHint: "Geser untuk melihat proyek lain",
  // Proyek Brifion sendiri, dari Company Profile hlm. 8. Nama klien tidak dipublikasikan.
  main: {
    label: "Proyek Brifion · Maluku · Dalam pengembangan",
    name: "Sistem terpadu supermarket & distribusi",
    summary:
      "Klien kami menjalankan supermarket sekaligus distribusi barang ke warung-warung. Pemilik sulit meninggalkan lokasi karena hampir semua pekerjaan harus melewatinya. Kami merancang satu sistem yang menghubungkan pembelian, gudang, kasir, pesanan warung, pengiriman, uang, dan laporan.",
    modulesTitle: "Modul yang kami rancang",
    modules: [
      { name: "Pembelian", detail: "Barang yang benar-benar datang." },
      { name: "Gudang & rak", detail: "Stok per lokasi, opname, selisih." },
      { name: "Kasir baru", detail: "Barcode, tutup kas, tetap jalan offline." },
      { name: "Pesanan warung", detail: "Diinput sales, harga grosir." },
      { name: "Pengiriman", detail: "Surat jalan, foto bukti terima." },
      { name: "Uang & tagihan", detail: "Kas, supplier, piutang warung." },
      { name: "Laporan pajak", detail: "Rekap dan bukti yang belum lengkap." },
      { name: "Dashboard pemilik", detail: "Omzet, tren, stok, laba." },
    ],
    // Foto Unsplash (Unsplash License), bukan lokasi klien.
    photo: { src: "/images/proyek-supermarket.webp", alt: "Lorong supermarket dengan rak penuh barang kemasan." },
  },
  // Pengalaman pribadi developer, dipublikasikan dengan izin pengguna.
  team: [
    {
      id: "knect",
      name: "Knect HRIS",
      category: "Aplikasi mobile & web / HRIS",
      description:
        "Presensi, cuti, lembur, reimbursement, payroll, penilaian kinerja, dan rekrutmen melalui aplikasi karyawan serta panel HR.",
      contributor: "Imam Bahri Alwi",
      contribution: "Pengembangan mobile, API, dan panel admin",
      images: [
        { src: "/projects/knect-home.webp", alt: "Beranda aplikasi Knect HRIS dengan jadwal shift dan menu kehadiran.", width: 390, height: 844 },
        { src: "/projects/knect-announcement.webp", alt: "Halaman pengumuman Knect HRIS menggunakan data pengujian.", width: 390, height: 844 },
      ],
    },
    {
      id: "tradoxes",
      name: "Tradoxes",
      category: "Aplikasi web / Jurnal & analitik",
      description: "Jurnal transaksi, kalender, dan analitik untuk mengevaluasi aktivitas trading.",
      contributor: "Abdee Alamsyah Noer Siyam",
      contribution: "Pendiri dan pengembang end-to-end",
      images: [
        { src: "/projects/tradoxes-dashboard.webp", alt: "Dashboard Tradoxes dengan jurnal transaksi dan analitik, dari halaman produk publik.", width: 1674, height: 940 },
      ],
    },
    {
      id: "jaecoo",
      name: "Jaecoo GCP",
      category: "Website / CMS",
      description:
        "Katalog kendaraan, artikel, galeri, formulir test drive dan layanan, serta CMS untuk mengelola konten dan inquiry pelanggan.",
      contributor: "Imam Bahri Alwi",
      contribution: "Pengembangan website dan panel admin",
      images: [{ src: "/projects/jaecoo-web.webp", alt: "Homepage Jaecoo GCP dengan katalog kendaraan.", width: 1440, height: 1000 }],
    },
    {
      id: "galaxy",
      name: "Galaxy POS",
      category: "Aplikasi web & desktop / POS dan akuntansi",
      description:
        "Penjualan, pembelian, stok, servis dan sparepart, kas, bank, serta laporan akuntansi lintas cabang. Tersedia versi Windows dengan database lokal untuk operasional offline.",
      contributor: "Imam Bahri Alwi",
      contribution: "Pengembangan full-stack dan modul operasional",
      images: [
        { src: "/projects/galaxy-dashboard.webp", alt: "Buku besar dan tutup buku Galaxy POS, ditangkap dari aplikasi lokal dengan database demo.", width: 1440, height: 900 },
      ],
    },
  ],
} as const;

export const about = {
  label: "Tentang Brifion",
  title: ["Pahami bisnisnya.", "Baru bangun sistemnya."],
  photo: {
    src: "/images/business-planning.webp",
    alt: "Tangan menyusun catatan rencana bisnis di atas kertas, sebagai ilustrasi pemetaan kebutuhan dan prioritas.",
    caption: "Memetakan kebutuhan dan prioritas sebelum membangun sistem.",
  },
  paragraphs: [
    "Brifion Marden Group adalah mitra transformasi digital dan AI. Kami membantu organisasi memahami masalah operasionalnya, menentukan prioritas, lalu membangun solusi digital yang sesuai dengan cara kerja mereka.",
    "Kami melihat alur kerja tim Anda, menentukan prioritas, lalu memilih teknologi yang sesuai. Yang kami bangun harus berguna dalam pekerjaan sehari-hari.",
  ],
  audienceLabel: "Kami bekerja bersama",
  audience: "Usaha dagang dan distribusi, perusahaan berkembang, institusi, serta perusahaan teknologi mitra.",
} as const;

export const services = {
  label: "Yang kami kerjakan",
  title: ["Kebutuhan Anda.", "Titik berangkat kami."],
  intro: "Dari website hingga sistem operasional yang saling terhubung. AI dieksplorasi ketika data dan kebutuhannya siap.",
  collaboration: "Kami bisa menjadi tim pelaksana, bagian dari tim Anda, atau mengerjakan modul tertentu.",
  items: [
    {
      name: "Website & portal",
      scope: "Profil korporat, portal informasi, dan CMS.",
      example: "website yang jarang diperbarui karena setiap perubahan konten harus menunggu developer.",
    },
    {
      name: "Aplikasi web & mobile",
      scope: "Untuk pelanggan, staf, atau tim lapangan.",
      example: "pesanan dari sales lapangan dikirim lewat chat, lalu diketik ulang di kantor.",
    },
    {
      name: "Backend & API",
      scope: "Database, migrasi data, dan hak akses.",
      example: "stok di sistem berbeda dengan stok di gudang, dan tidak ada catatan siapa yang mengubahnya.",
    },
    {
      name: "Integrasi",
      scope: "Pembayaran, autentikasi, dan layanan pihak ketiga.",
      example: "status pembayaran dicek satu per satu sebelum pesanan boleh diproses.",
    },
    {
      name: "Otomasi & dashboard",
      scope: "Laporan otomatis dan analitik untuk pemilik.",
      example: "laporan penjualan dan kas disusun dari beberapa file setiap akhir bulan.",
    },
    {
      name: "Eksplorasi AI",
      scope: "Sesuai kebutuhan dan kesiapan data.",
      example: "penyusunan dokumen atau analisis berulang, diterapkan ketika data siap dan manfaatnya dapat diukur.",
    },
  ],
} as const;

type PricingItem = {
  name: string;
  price: string;
  problem: string;
  scope: readonly string[];
  duration: string;
  warranty: string;
};

type PricingGroup = { id: string; tab: string; intro: string; items: readonly PricingItem[] };

export const pricing: { label: string; title: string; note: string; swipeHint: string; groups: readonly PricingGroup[] } = {
  label: "Harga",
  title: "Harga awal yang jelas sejak percakapan pertama.",
  note: "Harga belum termasuk pajak. Ruang lingkup dan jadwal final disepakati setelah kami memahami kebutuhan Anda.",
  swipeHint: "Geser untuk melihat paket lain",
  groups: [
    {
      // Paket Software Distributor, ClickUp #14 (4 Nov 2026). Status: usulan bersyarat.
      id: "operasional",
      tab: "Software operasional",
      intro:
        "Untuk usaha dagang dan distribusi: stok, order, dan pengiriman. Pilih dari masalah yang paling ingin Anda selesaikan.",
      items: [
        {
          name: "Stok Tertib",
          price: "Rp8 juta",
          problem: "Saat pergerakan barang sulit ditelusuri dan saldo stok tidak mudah diperiksa.",
          scope: ["Penerimaan dan pengeluaran barang", "Kartu dan saldo stok", "1 gudang, 2 peran pengguna", "2 laporan dan ekspor CSV"],
          duration: "2–3 minggu",
          warranty: "Garansi bug 30 hari",
        },
        {
          name: "Order ke Stok",
          price: "Rp12 juta",
          problem: "Saat order pelanggan dan pengeluaran stok dicatat terpisah atau berulang.",
          scope: ["Semua cakupan Stok Tertib", "Order pelanggan dan harga per order", "Invoice dan status lunas", "1 gudang, 3 peran, 4 laporan"],
          duration: "3–5 minggu",
          warranty: "Garansi bug 60 hari",
        },
        {
          name: "Distribusi Terkendali",
          price: "Rp25 juta",
          problem: "Saat pembelian, dua gudang, pengiriman, dan kas perlu dipantau bersama.",
          scope: ["Semua cakupan Order ke Stok", "PO dan penerimaan supplier", "Surat jalan, status kirim, kas dasar", "2 gudang dan transfer, 5 peran, 6 laporan"],
          duration: "6–8 minggu",
          warranty: "Garansi bug 90 hari",
        },
      ],
    },
    {
      // Brifion_Pricing_Proposal_Draft_2026.pdf (29 Okt 2026). Dokumen menyebutnya draf, belum harga resmi.
      id: "umum",
      tab: "Website & aplikasi",
      intro:
        "Untuk website perusahaan atau aplikasi internal sederhana. Setiap paket memilih satu jalur: website atau aplikasi.",
      items: [
        {
          name: "Digital Foundation",
          price: "Rp5 juta",
          problem: "Kehadiran digital pertama atau satu alat kerja internal yang sederhana.",
          scope: ["Website hingga 5 halaman", "Atau aplikasi 1 alur kerja, 1 peran", "Domain dan hosting tahun pertama", "Dukungan 1 bulan setelah serah terima"],
          duration: "1–2 minggu",
          warranty: "Garansi bug 30 hari",
        },
        {
          name: "Business Workflow",
          price: "Rp8 juta",
          problem: "Website yang bisa dikelola sendiri, atau aplikasi untuk satu proses kerja.",
          scope: ["Website hingga 8 halaman dengan CMS", "Atau aplikasi 1 alur kerja, 2 peran, laporan", "Domain dan hosting tahun pertama", "Dukungan 2 bulan setelah serah terima"],
          duration: "2–4 minggu",
          warranty: "Garansi bug 45 hari",
        },
        {
          name: "Connected Operations",
          price: "Rp12 juta",
          problem: "Website lebih lengkap, atau aplikasi internal dengan dashboard.",
          scope: ["Website hingga 10 halaman dengan CMS", "Atau aplikasi 2 alur kerja, 3 peran, dashboard", "Domain dan hosting tahun pertama", "Dukungan 3 bulan setelah serah terima"],
          duration: "4–6 minggu",
          warranty: "Garansi bug 60 hari",
        },
      ],
    },
  ],
};

export const process = {
  label: "Cara kerja",
  title: ["Jelas sejak awal.", "Dibangun bertahap."],
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

export const contact = {
  label: "Percakapan pertama",
  title: ["Apa yang ingin", "Anda rapikan?"],
  intro: "Ceritakan alur yang masih menyita waktu tim Anda. Kami bantu memetakan langkah berikutnya.",
} as const;
