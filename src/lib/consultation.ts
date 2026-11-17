import { distributorPackages } from "@/content/site";

export type ConsultationContext = { type: "package"; name: string } | { type: "demo"; name: "Demo supermarket dan distribusi" } | null;

export function initialConsultationProblem(context: ConsultationContext): string {
  if (context?.type === "demo") return "Saya ingin membahas bagaimana demo supermarket dan distribusi dapat disesuaikan dengan alur usaha saya.";
  if (context?.type !== "package") return "";
  const suggestions: Record<string, string> = {
    "Stok Tertib": "Saya ingin merapikan pencatatan barang masuk dan keluar, memantau saldo stok, serta melihat laporan stok.",
    "Order ke Stok": "Saya ingin menghubungkan pencatatan order pelanggan dengan stok keluar, invoice, dan status pembayaran.",
    "Distribusi Terkendali": "Saya ingin menghubungkan pembelian supplier, stok antar gudang, pengiriman, dan pencatatan kas usaha.",
  };
  return suggestions[context.name] ?? "";
}

export function consultationContext(params: Pick<URLSearchParams, "get">): ConsultationContext {
  const packageId = params.get("paket");
  const demo = params.get("demo");
  if (packageId && !demo) {
    const plan = distributorPackages.items.find((item) => item.id === packageId);
    return plan ? { type: "package", name: plan.name } : null;
  }
  return !packageId && demo === "supermarket-distribusi" ? { type: "demo", name: "Demo supermarket dan distribusi" } : null;
}

export function consultationMessage(fields: { name: string; company: string; problem: string }, context: ConsultationContext): string {
  const lines = [`Halo Brifion, saya ${fields.name.trim()} dari ${fields.company.trim()}.`];
  if (context?.type === "package") lines.push(`Saya tertarik dengan paket ${context.name}.`);
  if (context?.type === "demo") lines.push("Saya ingin konsultasi terkait demo supermarket dan distribusi.");
  lines.push(`Kebutuhan saya: ${fields.problem.trim()}`);
  return lines.join("\n");
}
