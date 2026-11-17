// Ikon garis sederhana (24x24, stroke currentColor) untuk baris kemampuan.
const paths: Record<string, React.ReactNode> = {
  stok: <><path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></>,
  order: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" /><path d="M9 8h6M9 12h6" /></>,
  pembelian: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.5 12h11L21 7H6.2" /></>,
  gudang: <><path d="M3 21V9l9-6 9 6v12" /><path d="M7 21v-8h10v8M7 17h10" /></>,
  kirim: <><path d="M2 6h11v10H2z" /><path d="M13 9h4l4 4v3h-8" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
  tagihan: <><path d="M5 3h14v18H5z" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
  kas: <><rect x="2" y="6" width="20" height="13" rx="2" /><path d="M16 12.5h2M2 10h20" /></>,
  laporan: <><path d="M4 20V4M4 20h16" /><path d="M8 16l4-5 3 3 5-6" /></>,
  akses: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" /><path d="M17 4.5a3.5 3.5 0 010 7M19 14.5c1.4.8 2.2 2.5 2.5 5" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" /><circle cx="17.5" cy="9" r="2.5" /><path d="M17 14.6c2.2.3 3.8 2 4.5 5" /></>,
  payment: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
  api: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
  speed: <><path d="M4 18a8 8 0 1116 0" /><path d="M12 18l4-6" /><circle cx="12" cy="18" r="1.3" /></>,
  web: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 9h20M6 6.5h.01M9 6.5h.01" /><path d="M6 13h7M6 16h5" /></>,
  team: <><circle cx="12" cy="7" r="3" /><circle cx="5" cy="10" r="2.2" /><circle cx="19" cy="10" r="2.2" /><path d="M7 20c.6-3.2 2.6-5 5-5s4.4 1.8 5 5M1.5 19c.4-2.2 1.7-3.6 3.5-3.6M22.5 19c-.4-2.2-1.7-3.6-3.5-3.6" /></>,
  dashboard: <><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></>,
};

export type IconName = keyof typeof paths;

export function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
