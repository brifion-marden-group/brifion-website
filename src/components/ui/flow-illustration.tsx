// Ilustrasi buatan sendiri: alur Order → Gudang → Kirim → Tagih,
// dengan satu cabang "alur Anda" yang dirancang sesuai kebutuhan. Untuk latar navy.
export function FlowIllustration({ className }: { className?: string }) {
  const nodes = [
    { x: 30, label: "Order", icon: <path d="M-6 -8h12v16l-3-2-3 2-3-2-3 2z M-3 -3h6 M-3 1h6" /> },
    { x: 110, label: "Gudang", icon: <path d="M-8 8V-2l8-6 8 6v10 M-4 8V2h8v6" /> },
    { x: 190, label: "Kirim", icon: <path d="M-9 -5h9v9h-9z M0 -2h4l4 4v2H0 M-5 7a1.5 1.5 0 100-.1 M5 7a1.5 1.5 0 100-.1" /> },
    { x: 270, label: "Tagih", icon: <path d="M-6 -8h12v16h-12z M-3 -3h6 M-3 1h6 M-3 5h3" /> },
  ];
  return (
    <svg className={className} viewBox="0 0 300 152" fill="none" role="img" aria-label="Ilustrasi alur order, gudang, pengiriman, dan tagihan yang terhubung, dengan satu tahap tambahan sesuai alur usaha Anda.">
      {/* jalur utama */}
      <path d="M30 52H270" stroke="#3a4a60" strokeWidth="2" />
      <path d="M30 52H190" stroke="#d6bb8e" strokeWidth="2" strokeDasharray="5 6" />
      {/* cabang alur khusus */}
      <path d="M150 52v46a12 12 0 0012 12h46" stroke="#d6bb8e" strokeWidth="2" />
      {nodes.map((n) => (
        <g key={n.label} transform={`translate(${n.x} 52)`}>
          <rect x="-20" y="-20" width="40" height="40" rx="11" fill="#18263b" stroke="#3a4a60" />
          <g stroke="#f7f5f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{n.icon}</g>
          <text y="36" textAnchor="middle" fill="#ccd3dc" fontSize="11" fontFamily="inherit">{n.label}</text>
        </g>
      ))}
      <g transform="translate(230 110)">
        <rect x="-22" y="-16" width="44" height="32" rx="10" fill="#d6bb8e" />
        <path d="M-6 0h12M0 -6v12" stroke="#0f1a2b" strokeWidth="2" strokeLinecap="round" />
      </g>
      <text x="230" y="143" textAnchor="middle" fill="#d6bb8e" fontSize="11" fontFamily="inherit">Alur Anda</text>
    </svg>
  );
}
