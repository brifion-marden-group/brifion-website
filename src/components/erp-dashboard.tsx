// Ilustrasi dashboard ERP proyek supermarket & distribusi. Dibuat sendiri (bukan screenshot),
// angka di dalamnya contoh. Menu kiri mengikuti delapan modul proyek utama.

const menu = ["Dashboard", "Pembelian", "Gudang & rak", "Kasir", "Pesanan warung", "Pengiriman", "Uang & tagihan", "Laporan pajak"];

const kpis = [
  { label: "Omzet hari ini", value: "Rp24,8 jt", note: "+8% dari kemarin", up: true },
  { label: "Pesanan warung", value: "36", note: "9 siap dikirim", up: true },
  { label: "Nilai stok", value: "Rp412 jt", note: "3 gudang", up: false },
  { label: "Piutang warung", value: "Rp18,2 jt", note: "5 jatuh tempo", up: false },
];

const stock = [
  { name: "Beras 5 kg", qty: "12 dus", fill: 0.22 },
  { name: "Minyak goreng 2 L", qty: "8 dus", fill: 0.15 },
  { name: "Gula pasir 1 kg", qty: "15 dus", fill: 0.3 },
  { name: "Mi instan", qty: "20 dus", fill: 0.38 },
];

// Titik grafik omzet 7 hari (dalam koordinat kartu grafik).
const trend = [62, 88, 74, 110, 98, 132, 150];

export function ErpDashboard() {
  const chartW = 420;
  const chartH = 150;
  const step = chartW / (trend.length - 1);
  const max = 170;
  const points = trend.map((v, i) => [i * step, chartH - (v / max) * chartH] as const);
  const line = points.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${chartW},${chartH} L0,${chartH} Z`;
  const days = ["Jum", "Sab", "Min", "Sen", "Sel", "Rab", "Kam"];

  return (
    <svg viewBox="0 0 960 600" role="img" aria-label="Ilustrasi dashboard pemilik untuk sistem supermarket dan distribusi: omzet, pesanan warung, nilai stok, piutang, tren omzet, dan stok menipis." className="erp-dashboard">
      <defs>
        <linearGradient id="erp-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a8834f" stopOpacity="0.28" />
          <stop offset="1" stopColor="#a8834f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="960" height="600" fill="#f4f5f7" />

      {/* Sidebar */}
      <rect width="196" height="600" fill="#0f1a2b" />
      <rect x="22" y="24" width="30" height="30" rx="8" fill="#d6bb8e" />
      <text x="66" y="44" fill="#f7f5f1" fontSize="14" fontWeight="600">Operasional</text>
      {menu.map((item, i) => (
        <g key={item} transform={`translate(14 ${88 + i * 42})`}>
          {i === 0 && <rect width="168" height="32" rx="8" fill="#d6bb8e" />}
          <rect x="12" y="10" width="12" height="12" rx="3" fill={i === 0 ? "#0f1a2b" : "#3a4a60"} />
          <text x="34" y="21" fontSize="12.5" fill={i === 0 ? "#0f1a2b" : "#b8c1cc"} fontWeight={i === 0 ? 600 : 400}>{item}</text>
        </g>
      ))}

      {/* Header */}
      <text x="228" y="52" fill="#0f1a2b" fontSize="22" fontWeight="600">Dashboard pemilik</text>
      <text x="228" y="74" fill="#7a818a" fontSize="12">Kamis, 13 November · semua lokasi</text>
      <rect x="770" y="36" width="70" height="26" rx="13" fill="#fff" stroke="#e1e3e8" />
      <text x="805" y="53" fill="#8a6a3c" fontSize="11" textAnchor="middle">Ilustrasi</text>
      <circle cx="904" cy="49" r="17" fill="#0f1a2b" />
      <text x="904" y="54" fill="#d6bb8e" fontSize="12" textAnchor="middle" fontWeight="600">PM</text>

      {/* KPI */}
      {kpis.map((k, i) => (
        <g key={k.label} transform={`translate(${228 + i * 180} 98)`}>
          <rect width="166" height="96" rx="12" fill="#fff" />
          <text x="16" y="28" fill="#7a818a" fontSize="11.5">{k.label}</text>
          <text x="16" y="58" fill="#0f1a2b" fontSize="21" fontWeight="600">{k.value}</text>
          <text x="16" y="80" fill={k.up ? "#2f8f5b" : "#8a6a3c"} fontSize="11">{k.note}</text>
        </g>
      ))}

      {/* Grafik omzet */}
      <g transform="translate(228 214)">
        <rect width="472" height="250" rx="12" fill="#fff" />
        <text x="20" y="32" fill="#0f1a2b" fontSize="14" fontWeight="600">Tren omzet 7 hari</text>
        <text x="452" y="32" fill="#7a818a" fontSize="11" textAnchor="end">Supermarket + warung</text>
        <g transform="translate(26 62)">
          {[0, 1, 2, 3].map((r) => <line key={r} x1="0" x2={chartW} y1={(chartH / 3) * r} y2={(chartH / 3) * r} stroke="#eef0f3" />)}
          <path d={area} fill="url(#erp-area)" />
          <path d={line} fill="none" stroke="#a8834f" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          {points.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === points.length - 1 ? 5 : 3} fill={i === points.length - 1 ? "#0f1a2b" : "#a8834f"} />)}
          {days.map((d, i) => <text key={d} x={i * step} y={chartH + 22} fill="#9aa0a8" fontSize="10.5" textAnchor="middle">{d}</text>)}
        </g>
      </g>

      {/* Stok menipis */}
      <g transform="translate(716 214)">
        <rect width="212" height="250" rx="12" fill="#fff" />
        <text x="18" y="32" fill="#0f1a2b" fontSize="14" fontWeight="600">Stok menipis</text>
        {stock.map((s, i) => (
          <g key={s.name} transform={`translate(18 ${58 + i * 46})`}>
            <text y="12" fill="#2b2f36" fontSize="11.5">{s.name}</text>
            <text x="176" y="12" fill="#7a818a" fontSize="11" textAnchor="end">{s.qty}</text>
            <rect y="22" width="176" height="6" rx="3" fill="#f0ece4" />
            <rect y="22" width={176 * s.fill} height="6" rx="3" fill="#a8834f" />
          </g>
        ))}
      </g>

      {/* Pengiriman */}
      <g transform="translate(228 480)">
        <rect width="700" height="92" rx="12" fill="#fff" />
        <text x="20" y="34" fill="#0f1a2b" fontSize="14" fontWeight="600">Pengiriman ke warung hari ini</text>
        <text x="20" y="60" fill="#7a818a" fontSize="11.5">9 dari 12 surat jalan sudah diterima</text>
        <rect x="360" y="42" width="316" height="10" rx="5" fill="#eef0f3" />
        <rect x="360" y="42" width="237" height="10" rx="5" fill="#0f1a2b" />
        <text x="676" y="30" fill="#0f1a2b" fontSize="12" fontWeight="600" textAnchor="end">75%</text>
      </g>
    </svg>
  );
}
