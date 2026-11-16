import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Gambar pratinjau saat tautan dibagikan (WhatsApp, LinkedIn, dll.). Dibuat saat build.
export const alt = "Brifion Marden Group: aplikasi custom untuk distributor dan supplier.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/brifion-logo-terang.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#faf9f6", color: "#0f1a2b", borderTop: "14px solid #0f1a2b" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={244} height={80} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 4, color: "#8a6a3c" }}>APLIKASI CUSTOM</div>
          <div style={{ marginTop: 16, fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2, maxWidth: 900 }}>Sistem untuk distributor dan supplier.</div>
          <div style={{ marginTop: 20, fontSize: 28, color: "#59616a" }}>Stok, order, pengiriman, dan tagihan dalam satu sistem.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, color: "#59616a" }}>
          <span>Paket mulai Rp8 juta</span>
          <span style={{ color: "#0f1a2b", fontWeight: 700 }}>brifion.com</span>
        </div>
      </div>
    ),
    size,
  );
}
