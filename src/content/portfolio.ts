export interface PortfolioProject {
  slug: string;
  clientName: string;
  sector: string;
  category: string;
  year: string;
  location: string;
  domainDisplay: string;
  headline: string;
  summary: string;
  highlights: readonly { label: string; value: string }[];
  liveHref: string;
  previewImage: string;
  previewWidth: number;
  previewHeight: number;
  previewAlt: string;
}

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    slug: "sentra-baja-nusantara",
    clientName: "PT Sentra Baja Nusantara",
    sector: "Distributor & Supplier Material Baja Industri",
    category: "Website Korporat & Katalog B2B",
    year: "2026",
    location: "Cikarang, Bekasi",
    domainDisplay: "sentrabajanusantara.co.id",
    headline:
      "Katalog pengadaan baja struktural dan gerbang RFQ terarah untuk tim procurement manufaktur dan kontraktor.",
    summary:
      "Website korporat B2B yang memetakan spesifikasi teknis baja profil, plat, pipa industri, dan layanan fabrikasi beserta formulir permintaan penawaran langsung ke tim sales korporat.",
    highlights: [
      { label: "Segmen klien", value: "Manufaktur, EPC & Konstruksi" },
      { label: "Lini material", value: "4 kategori utama + fabrikasi" },
      { label: "Akses perangkat", value: "Responsif desktop & mobile" },
    ],
    liveHref: "/p/sentra-baja-nusantara",
    previewImage: "/images/portfolio/sbn/preview-live.png",
    previewWidth: 1008,
    previewHeight: 630,
    previewAlt:
      "Tampilan website korporat PT Sentra Baja Nusantara untuk pengadaan material baja industri.",
  },
  {
    slug: "vektor-logistik-armada",
    clientName: "PT Vektor Logistik Armada",
    sector: "Logistik Kargo, Cold-Chain & Manajemen Armada B2B",
    category: "Website Korporat & Perencana Koridor",
    year: "2026",
    location: "Cikarang Barat, Bekasi",
    domainDisplay: "vektorlogistik.co.id",
    headline:
      "Perencana koridor distribusi dan formulir kontrak armada terdedikasi untuk tim supply chain perusahaan.",
    summary:
      "Website korporat B2B yang mempermudah tim logistik memeriksa estimasi lead time per koridor, memilih spesifikasi armada dry hingga cold-chain, dan mengajukan proposal kontrak distribusi.",
    highlights: [
      { label: "Segmen klien", value: "FMCG, Farmasi & Manufaktur" },
      { label: "Fitur utama", value: "Estimasi koridor & spesifikasi armada" },
      { label: "Akses perangkat", value: "Responsif desktop & mobile" },
    ],
    liveHref: "/p/vektor-logistik-armada",
    previewImage: "/images/portfolio/vektor/preview-live.png",
    previewWidth: 1008,
    previewHeight: 630,
    previewAlt:
      "Tampilan website korporat PT Vektor Logistik Armada untuk layanan logistik kargo dan manajemen armada B2B.",
  },
] as const;
