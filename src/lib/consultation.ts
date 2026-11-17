import { distributorPackages } from "@/content/site";

export type ConsultationContext = { type: "package"; name: string } | { type: "demo"; name: "Demo supermarket dan distribusi" } | null;

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
