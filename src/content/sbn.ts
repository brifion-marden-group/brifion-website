export interface SbnMaterialItem {
  name: string;
  standard: string;
  dimensions: string;
  availability: string;
}

export interface SbnCategory {
  id: string;
  label: string;
  shortLabel: string;
  summary: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  badge: string;
  items: readonly SbnMaterialItem[];
}

export const sbnBrand = {
  companyName: "PT Sentra Baja Nusantara",
  shortName: "Sentra Baja Nusantara",
  code: "SBN",
  tagline: "Distributor Material Baja & Komponen Industri",
  email: "sales@sentrabajanusantara.co.id",
  phone: "(021) 8984-2710",
  whatsapp: "+62 811-9420-8810",
  headquarters:
    "Jl. Industri Selatan Blok KK-12, Kawasan Industri Jababeka II, Cikarang, Bekasi 17530",
  branches: [
    "Gudang Jawa Tengah: Kawasan Industri Wijayakusuma, Semarang",
    "Gudang Jawa Timur: Kawasan Industri Gresik (KIG), Gresik",
  ],
  hours: "Senin – Jumat 08.00–17.00 WIB · Sabtu 08.00–13.00 WIB",
} as const;

export const sbnStats = [
  { value: "18.500+ Ton", label: "Kapasitas stok siap kirim di 3 gudang" },
  { value: "100% MTC", label: "Dokumen Mill Test Certificate resmi" },
  { value: "< 4 Jam", label: "Respons penawaran resmi hari kerja" },
  { value: "98,4%", label: "Ketepatan pengiriman proyek terjadwal" },
] as const;

export const sbnSectors = [
  {
    code: "01",
    title: "Konstruksi & Struktur Baja",
    body: "Pasokan H-Beam, Wide Flange, dan plat sambungan untuk gedung bertingkat, pabrik bentang lebar, serta proyek jembatan.",
  },
  {
    code: "02",
    title: "Manufaktur & Otomotif",
    body: "Material lembaran HRC, CRC, dan galvanized coil dengan toleransi ketebalan konsisten untuk lini stamping dan perakitan.",
  },
  {
    code: "03",
    title: "Energi, Migas & EPC",
    body: "Pipa industri seamless, pipa karbon bertekanan, dan baja struktur bersertifikasi penuh untuk kebutuhan tender EPC.",
  },
  {
    code: "04",
    title: "Galangan & Alat Berat",
    body: "Plat tebal marine grade, wear plate, dan layanan pemotongan CNC untuk fabrikasi chasis, bucket, dan struktur berat.",
  },
] as const;

export const sbnCategories: readonly SbnCategory[] = [
  {
    id: "profil-struktur",
    label: "Baja Profil & Struktur",
    shortLabel: "Baja Profil",
    summary:
      "Stok lengkap profil baja struktural untuk konstruksi gudang, pabrik, jembatan, dan rangka berat dengan panjang standar 6m hingga 12m.",
    image: "/images/portfolio/sbn/ibeam-stock.jpg",
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt:
      "Stok baja profil H-Beam dan Wide Flange bersertifikasi di fasilitas PT Sentra Baja Nusantara.",
    badge: "Standar SNI 07-7178 / JIS G3101 SS400",
    items: [
      {
        name: "Wide Flange (WF Beam)",
        standard: "JIS G3101 SS400 / ASTM A36",
        dimensions: "150x75 mm s/d 600x200 mm · Panjang 12 m",
        availability: "Ready Stock — Cikarang & Gresik",
      },
      {
        name: "H-Beam Struktural",
        standard: "JIS G3101 SS400 / SM490YB",
        dimensions: "100x100 mm s/d 400x400 mm · Panjang 12 m",
        availability: "Ready Stock — Cikarang & Gresik",
      },
      {
        name: "Kanal UNP & CNP",
        standard: "SNI / JIS G3101 SS400",
        dimensions: "UNP 50–250 · CNP 75–200 · Panjang 6 m",
        availability: "Ready Stock — 3 Gudang",
      },
      {
        name: "Besi Siku (Equal Angle)",
        standard: "SNI 07-2054 / SS400",
        dimensions: "L40x40 s/d L150x150 · Tebal 4–15 mm",
        availability: "Ready Stock — 3 Gudang",
      },
    ],
  },
  {
    id: "plat-coil",
    label: "Plat & Coil Industri",
    shortLabel: "Plat & Coil",
    summary:
      "Pasokan lembaran baja canai panas, canai dingin, hingga galvanis untuk manufaktur komponen, tangki, panel, dan konstruksi berat.",
    image: "/images/portfolio/sbn/steel-coils.jpg",
    imageWidth: 1280,
    imageHeight: 960,
    imageAlt:
      "Gulungan coil baja galvanis tersusun rapi di gudang distribusi PT Sentra Baja Nusantara.",
    badge: "Standar JIS G3131 / JIS G3141 / ASTM A283",
    items: [
      {
        name: "Hot Rolled Coil & Sheet (HRC / SPHC)",
        standard: "JIS G3131 SPHC / SS400",
        dimensions: "Tebal 1,8–25 mm · Lebar 1.219 / 1.500 mm",
        availability: "Ready Stock — Cikarang & Semarang",
      },
      {
        name: "Cold Rolled Coil & Sheet (CRC / SPCC)",
        standard: "JIS G3141 SPCC-SD",
        dimensions: "Tebal 0,5–3,0 mm · Lebar 1.219 mm",
        availability: "Ready Stock — Cikarang",
      },
      {
        name: "Hot-Dip Galvanized Coil (SGCC)",
        standard: "JIS G3302 SGCC · Coating Z120–Z275",
        dimensions: "Tebal 0,4–3,2 mm · Coil & Cut Sheet",
        availability: "Ready Stock — Cikarang & Gresik",
      },
      {
        name: "Plat Kapal & Boiler (Marine / Pressure Plate)",
        standard: "BKI Grade A / ASTM A516 Gr. 70",
        dimensions: "Tebal 6–50 mm · Ukuran 5x20 ft & 6x20 ft",
        availability: "Ready Stock & Indent Terjadwal",
      },
    ],
  },
  {
    id: "pipa-hollow",
    label: "Pipa & Hollow Struktural",
    shortLabel: "Pipa & Hollow",
    summary:
      "Pipa baja hitam, galvanis, seamless bertekanan, dan pipa kotak struktural untuk utilitas pabrik, hydrant, rangka atap, dan proyek EPC.",
    image: "/images/portfolio/sbn/steel-yard.jpg",
    imageWidth: 1280,
    imageHeight: 853,
    imageAlt:
      "Tumpukan ikatan baja hollow kotak struktural siap kirim di area gudang.",
    badge: "Standar ASTM A53 / API 5L / STK400",
    items: [
      {
        name: "Hollow Struktural (SHS / RHS)",
        standard: "JIS G3466 STKR400 / ASTM A500",
        dimensions: "40x40 mm s/d 200x200 mm · Tebal 2,0–9,0 mm",
        availability: "Ready Stock — 3 Gudang",
      },
      {
        name: "Pipa Seamless Carbon Steel",
        standard: "ASTM A106 Gr. B / API 5L Gr. B",
        dimensions: "DN 25 s/d DN 400 · SCH 40 / SCH 80",
        availability: "Ready Stock — Cikarang",
      },
      {
        name: "Pipa ERW Hitam & Galvanis",
        standard: "SNI 0039 / ASTM A53",
        dimensions: "1/2 inch s/d 12 inch · Medium & Heavy",
        availability: "Ready Stock — 3 Gudang",
      },
      {
        name: "Pipa Spiral & Tiang Pancang",
        standard: "ASTM A252 Gr. 2 / Gr. 3",
        dimensions: "Diameter 300–1.000 mm · Panjang 6–12 m",
        availability: "Produksi & Pengiriman Proyek",
      },
    ],
  },
  {
    id: "fabrikasi-potong",
    label: "Layanan Potong & Pra-Fabrikasi",
    shortLabel: "Pra-Fabrikasi",
    summary:
      "Mengurangi limbah material dan waktu pengerjaan di lokasi proyek melalui pemotongan presisi, slitting, dan persiapan sambungan di workshop kami.",
    image: "/images/portfolio/sbn/welding-fab.jpg",
    imageWidth: 1023,
    imageHeight: 681,
    imageAlt:
      "Teknisi melakukan pengerjaan pemotongan dan persiapan komponen baja di fasilitas workshop.",
    badge: "Toleransi Presisi CNC · QC Dimensi Terdokumentasi",
    items: [
      {
        name: "Cut-to-Length & Slitting Coil",
        standard: "Toleransi ±0,5 mm · Packing Palet Kayu",
        dimensions: "Ketebalan 0,4–6,0 mm · Lebar sesuai BoQ",
        availability: "Lead Time 2–4 Hari Kerja",
      },
      {
        name: "CNC Plasma & Oxy-Fuel Cutting",
        standard: "Base Plate, Gusset, Stiffener & Flange",
        dimensions: "Ketebalan plat 6–80 mm · Format CAD/DXF",
        availability: "Lead Time 3–5 Hari Kerja",
      },
      {
        name: "Band Saw & Drilling Profil Baja",
        standard: "Potong sudut 45°–90° & lubang baut presisi",
        dimensions: "WF / H-Beam hingga 600 mm · UNP / Siku",
        availability: "Lead Time 2–5 Hari Kerja",
      },
      {
        name: "Sandblasting & Primer Coating",
        standard: "Standar SA 2.5 · Zinc Chromate / Epoxy",
        dimensions: "Untuk profil struktural dan plat proyek",
        availability: "Sesuai Jadwal Proyek",
      },
    ],
  },
] as const;

export const sbnPillars = [
  {
    title: "Mill Test Certificate (MTC) Lengkap",
    body: "Setiap batch pengiriman disertai dokumen MTC asli pabrik dan catatan komposisi kimia serta uji tarik guna memperlancar verifikasi QC proyek.",
  },
  {
    title: "Distribusi 3 Hub Strategis",
    body: "Gudang operasional di Cikarang, Semarang, dan Gresik mempercepat pemenuhan pesanan lintas Jawa serta konsolidasi kontainer ke luar pulau.",
  },
  {
    title: "Armada Berat & Tracking Kirim",
    body: "Didukung unit tronton, trailer flat-bed 40ft, dan surat jalan ber-timbangan jembatan resmi agar tonase serah terima transparan.",
  },
  {
    title: "Skema Pengadaan Korporat",
    body: "Mendukung kontrak harga berkala (blanket order), termin pembayaran korporat bagi mitra terverifikasi, serta kelengkapan faktur pajak resmi.",
  },
] as const;

export const sbnProcess = [
  {
    step: "01",
    title: "Kirim RFQ atau BoQ",
    body: "Sampaikan daftar material, standar grade, estimasi tonase, dan lokasi proyek melalui formulir RFQ atau email sales desk.",
  },
  {
    step: "02",
    title: "Konfirmasi Stok & Penawaran",
    body: "Sales engineer kami memeriksa alokasi stok gudang terdekat dan mengirimkan penawaran resmi maksimal 4 jam kerja.",
  },
  {
    step: "03",
    title: "PO, QC & Persiapan Material",
    body: "Setelah Purchase Order diterbitkan, tim gudang menyiapkan material, dokumen MTC, serta pemotongan khusus bila diperlukan.",
  },
  {
    step: "04",
    title: "Pengiriman & Serah Terima",
    body: "Armada mengirim material sesuai jadwal site proyek lengkap dengan surat jalan, tiket timbang, dan berita acara penerimaan.",
  },
] as const;

export const sbnReviews = [
  {
    quote:
      "Pengiriman 420 ton WF dan H-Beam untuk proyek gudang kami di Karawang berjalan sesuai jadwal ereksi. Seluruh dokumen Mill Test Certificate dan tiket timbang langsung rapi sejak ritase pertama sehingga verifikasi QC konsultan tidak pernah tertunda.",
    name: "Ir. Bambang Prasetyo",
    role: "Head of Procurement",
    company: "PT GKP",
    project: "Struktur Baja · 420 Ton",
    initials: "BP",
  },
  {
    quote:
      "Layanan slitting dan cut-to-length plat CRC sangat membantu efisiensi lini stamping kami. Toleransi ketebalan konsisten antar batch dan jadwal pasokan bulanan terjaga tanpa mengganggu target produksi pabrik.",
    name: "Rina Kusumawati",
    role: "Supply Chain Manager",
    company: "PT MPJ",
    project: "Manufaktur · Kontrak Berkala",
    initials: "RK",
  },
  {
    quote:
      "Respons quotation cepat dan teknisnya jelas. Pipa seamless ASTM A106 serta pemotongan CNC base plate yang dikirim ke site kami di Gresik sesuai gambar kerja dan langsung lolos inspeksi tim QA.",
    name: "Dedi Kurniawan",
    role: "Project Manager EPC",
    company: "PT EKI",
    project: "Proyek EPC · Pipa & CNC Plate",
    initials: "DK",
  },
] as const;
