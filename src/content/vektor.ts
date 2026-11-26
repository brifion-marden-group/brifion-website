export interface VektorCorridor {
  id: string;
  label: string;
  route: string;
  distance: string;
  baseLeadHours: number;
  mode: string;
  hubOrigin: string;
  hubDest: string;
}

export interface VektorFleet {
  id: string;
  name: string;
  capacity: string;
  volume: string;
  tempSpec: string;
  leadMultiplier: number;
  bestFor: string;
}

export const vektorBrand = {
  companyName: "PT Vektor Logistik Armada",
  shortName: "Vektor Logistik Armada",
  tagline: "Layanan Logistik Kargo & Manajemen Armada B2B",
  email: "commercial@vektorlogistik.co.id",
  phone: "(021) 8998-4420",
  whatsapp: "+62 812-8840-5190",
  headquarters:
    "Jl. Kalimantan Blok E-08, Kawasan Industri MM2100, Cikarang Barat, Bekasi 17530",
  hubs: [
    "Hub Jawa Timur: Kawasan Pergudangan Margomulyo, Surabaya",
    "Hub Sumatera & Timur: Belawan (Medan) & Kawasan Industri Makassar",
  ],
} as const;

export const vektorMetrics = [
  { value: "480+ Unit", label: "Armada milik sendiri & terdedikasi" },
  { value: "28 Hub", label: "Titik cross-dock Jawa, Sumatera & Kalimantan" },
  { value: "99,1%", label: "Capaian On-Time Delivery kontrak B2B" },
  { value: "24/7 GPS", label: "Pemantauan rute, suhu & e-POD digital" },
] as const;

export const vektorCorridors: readonly VektorCorridor[] = [
  {
    id: "jkt-sby",
    label: "Jakarta – Surabaya (Trans-Jawa)",
    route: "Cikarang / Jabodetabek → Gresik / Surabaya",
    distance: "±780 km via Tol Trans-Jawa",
    baseLeadHours: 22,
    mode: "Full Truckload (FTL) & Dedicated Fleet",
    hubOrigin: "Hub MM2100 Cikarang",
    hubDest: "Hub Margomulyo Surabaya",
  },
  {
    id: "jkt-smg",
    label: "Jakarta – Semarang / Solo",
    route: "Cikarang / Karawang → Semarang / Boyolali",
    distance: "±460 km via Tol Trans-Jawa",
    baseLeadHours: 14,
    mode: "FTL Terjadwal & Milk-Run Regional",
    hubOrigin: "Hub MM2100 Cikarang",
    hubDest: "Hub Wijayakusuma Semarang",
  },
  {
    id: "jabodetabek-milkrun",
    label: "Jabodetabek – Karawang – Cilegon",
    route: "Distribusi Multi-Drop Kawasan Industri & DC",
    distance: "40 – 160 km koridor industri barat–timur",
    baseLeadHours: 6,
    mode: "Dedicated Milk-Run Harian",
    hubOrigin: "Hub MM2100 Cikarang",
    hubDest: "DC & Pabrik Jabodetabek–Banten",
  },
  {
    id: "jkt-sumatera",
    label: "Jakarta – Palembang / Medan",
    route: "Cikarang → Bakauheni → Palembang / Medan",
    distance: "±1.900 km lintas Tol Trans-Sumatera",
    baseLeadHours: 68,
    mode: "Long-Haul FTL & Kontrak Distribusi",
    hubOrigin: "Hub MM2100 Cikarang",
    hubDest: "Hub Palembang & Belawan Medan",
  },
  {
    id: "sby-kalimantan-sulawesi",
    label: "Surabaya – Balikpapan / Makassar",
    route: "Pelabuhan Tanjung Perak → Semayang / Soekarno-Hatta",
    distance: "Koridor Kontainer Laut 20ft / 40ft",
    baseLeadHours: 96,
    mode: "Door-to-Door Sea Freight & Reefer Container",
    hubOrigin: "Hub Margomulyo Surabaya",
    hubDest: "Hub Balikpapan & Makassar",
  },
] as const;

export const vektorFleets: readonly VektorFleet[] = [
  {
    id: "cdd-box",
    name: "CDD Box / Long",
    capacity: "4 – 5 Ton",
    volume: "18 – 24 CBM",
    tempSpec: "Dry Cargo · Segel Keamanan",
    leadMultiplier: 1.0,
    bestFor: "Distribusi ritel modern, DC kota, dan multi-drop harian",
  },
  {
    id: "fuso-tronton",
    name: "Fuso / Tronton Box",
    capacity: "10 – 15 Ton",
    volume: "36 – 45 CBM",
    tempSpec: "Dry Cargo · Kunci Ganda GPS",
    leadMultiplier: 1.05,
    bestFor: "Pasokan bahan baku pabrik dan pengiriman antar-kota volume menengah",
  },
  {
    id: "wingbox",
    name: "Tronton Wingbox",
    capacity: "20 – 25 Ton",
    volume: "52 – 58 CBM",
    tempSpec: "Akses Bongkar 3 Sisi · Forklift Ready",
    leadMultiplier: 1.1,
    bestFor: "Paletisasi FMCG, manufaktur cepat, dan kontrak dedicated antar-hub",
  },
  {
    id: "reefer",
    name: "Armada Reefer (Cold-Chain)",
    capacity: "4 – 18 Ton",
    volume: "18 – 48 CBM",
    tempSpec: "Suhu Terkendali -20°C s/d +8°C · Sensor IoT",
    leadMultiplier: 1.0,
    bestFor: "Farmasi, makanan beku, minuman dingin, dan bahan baku sensitif suhu",
  },
] as const;

export const vektorSectors = [
  {
    tag: "Distribusi Cepat",
    title: "FMCG & Ritel Modern",
    body: "Pengiriman terjadwal dari pabrik ke distribution center dan hub regional dengan disiplin slot unloading dan akurasi surat jalan tinggi.",
    points: [
      "Skema wingbox paletisasi bongkar cepat",
      "Cross-docking & konsolidasi multi-tujuan",
      "Rekonsiliasi surat jalan balik terukur",
    ],
    image: "/images/portfolio/vektor/modern-dc.jpg",
    imageAlt:
      "Pusat distribusi logistik modern dengan rak palet tinggi dan armada forklift.",
  },
  {
    tag: "Suhu Terkendali",
    title: "Farmasi & Cold-Chain",
    body: "Armada reefer terkalibrasi dilengkapi sensor suhu real-time dan notifikasi deviasi otomatis untuk menjaga integritas produk sensitif.",
    points: [
      "Rentang suhu -20°C hingga +8°C terpantau",
      "Laporan grafik suhu per ritase pengiriman",
      "Penanganan sesuai standar CDOB & higienitas",
    ],
    image: "/images/portfolio/vektor/warehouse-racks.jpg",
    imageAlt:
      "Lorong gudang penyimpanan berstandar tinggi dengan sistem rak palet tertata rapi.",
  },
  {
    tag: "Dedicated Fleet",
    title: "Manufaktur & Bahan Baku",
    body: "Kontrak armada terdedikasi untuk menjaga ritme pasokan lini produksi antar-kawasan industri Cikarang, Karawang, Semarang, hingga Gresik.",
    points: [
      "Alokasi unit tetap dengan pengemudi terlatih",
      "Skema milk-run berulang sesuai jadwal shift",
      "Armada cadangan siaga untuk kontinuitas pasok",
    ],
    image: "/images/portfolio/vektor/cold-storage.jpg",
    imageAlt:
      "Area pemuatan kargo palet bahan baku industri dan forklift operasional.",
  },
  {
    tag: "Antar-Pulau",
    title: "Kargo Kontainer & Pelabuhan",
    body: "Layanan door-to-door FCL 20ft/40ft dan trucking pelabuhan untuk menghubungkan pabrik di Jawa ke distributor Sumatera, Kalimantan, dan Sulawesi.",
    points: [
      "Pengurusan jadwal kapal & trucking pelabuhan",
      "Kontainer dry maupun reefer door-to-door",
      "Pembaruan status manifest dari muat hingga tiba",
    ],
    image: "/images/portfolio/vektor/terminal-cranes.jpg",
    imageAlt:
      "Deretan crane bongkar muat kontainer di terminal pelabuhan kargo.",
  },
] as const;

export const vektorStandards = [
  {
    code: "01",
    title: "GPS Telematics & Control Tower 24/7",
    body: "Setiap unit dilengkapi pelacakan lokasi, geofencing titik bongkar, serta pemantauan anomali berhenti oleh tim control tower selama 24 jam.",
  },
  {
    code: "02",
    title: "Digital Proof of Delivery (e-POD)",
    body: "Bukti serah terima, foto kondisi muatan, dan tanda tangan penerima tercatat digital secara langsung sehingga mempercepat siklus penagihan Anda.",
  },
  {
    code: "03",
    title: "SLA Ketepatan & Evaluasi Bulanan",
    body: "Setiap kontrak dilengkapi laporan performa bulanan (OTIF, waktu tunggu bongkar, dan tingkat klaim) bersama dedicated account manager.",
  },
  {
    code: "04",
    title: "Keamanan Muatan & Asuransi All-Risk",
    body: "Penerapan segel bernomor seri, verifikasi identitas pengemudi, serta opsi perlindungan asuransi kargo all-risk untuk muatan bernilai tinggi.",
  },
] as const;

export const vektorReviews = [
  {
    quote:
      "Transisi armada distribusi Jawa–Sumatera kami ke Vektor Logistik Armada meningkatkan ketepatan jadwal masuk DC hingga di atas 99%. Laporan e-POD harian membuat rekonsiliasi tim finance jauh lebih cepat.",
    name: "Hendrawan Susilo",
    role: "Head of Logistics",
    company: "PT SNF",
    scope: "FMCG · Dedicated Wingbox",
    initials: "HS",
  },
  {
    quote:
      "Untuk distribusi produk farmasi berpendingin, kestabilan suhu dan catatan logger di setiap ritase sangat krusial. Armada reefer Vektor konsisten lolos audit QA internal kami tanpa catatan penyimpangan.",
    name: "dr. Ratna Wulandari",
    role: "Supply Chain & QA Lead",
    company: "PT BMP",
    scope: "Farmasi · Cold-Chain 2°C–8°C",
    initials: "RW",
  },
  {
    quote:
      "Skema milk-run harian antara supplier kami di Cikarang dan pabrik perakitan di Karawang berjalan disiplin mengikuti jadwal shift. Tim control tower mereka sangat responsif ketika ada penyesuaian volume mendadak.",
    name: "Agus Setiawan",
    role: "Plant Operations Manager",
    company: "PT KIM",
    scope: "Manufaktur · Milk-Run Harian",
    initials: "AS",
  },
] as const;
