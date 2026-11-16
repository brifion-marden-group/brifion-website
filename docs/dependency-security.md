# Perbaikan dependensi

## 16 November 2026: minimatch

Dependabot #1 melaporkan GHSA-g3hv-75wg-m249 pada minimatch 10.2.6, dependensi transitif tooling @typescript-eslint/typescript-estree 8.72.2. Advisory menetapkan 11.0.1 sebagai versi perbaikan:
https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249

Versi typescript-estree terbaru saat pemeriksaan masih meminta ^10.2.2. package.json memakai override khusus @typescript-eslint/typescript-estree>minimatch ke 11.0.1; dependensi ESLint lain pada minimatch 3.1.5 tidak diubah. Hapus override ketika upstream sudah memakai versi aman.

Verifikasi: pnpm install --frozen-lockfile --ignore-scripts, pnpm lint, dan pnpm build lulus. pnpm audit melaporkan nol kerentanan. Alert GitHub baru dapat dievaluasi ulang setelah lockfile perbaikan masuk ke branch default.
