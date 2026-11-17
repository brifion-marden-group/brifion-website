# Redeploy manual dari GitHub

Workflow `.github/workflows/redeploy.yml` menyediakan Actions > Redeploy Website > Run workflow. Pilih branch main. Tidak ada deploy otomatis tambahan pada push sehingga tidak menggandakan integrasi Git Vercel.

## Pengaturan sekali

1. Login ke akun Vercel Brifion, buka project brifion-website > Settings > Git > Deploy Hooks.
2. Buat hook bernama GitHub manual redeploy dengan branch main. Pastikan repository terhubung ke brifion-marden-group/brifion-website dan Production Branch adalah main.
3. Salin URL hook ke GitHub repository > Settings > Secrets and variables > Actions > New repository secret. Nama: VERCEL_DEPLOY_HOOK. Jangan masukkan URL hook ke kode, issue, chat, atau log karena URL tersebut memberi akses untuk memicu deploy.
4. Buka Actions > Redeploy Website > Run workflow, pilih main.
5. Di Vercel, periksa deployment baru: commit sumber sesuai HEAD main dan status Ready. Hook mengikuti branch yang dipilih saat hook dibuat, bukan branch dropdown Actions. Workflow membatasi pemicu ke main untuk menghindari kesalahpahaman tersebut.

Workflow hijau hanya membuktikan Vercel menerima permintaan, bukan bahwa build/deploy sukses. Tidak ada retry POST otomatis untuk menghindari duplikasi bila respons terputus. Concurrency membatasi workflow pemicu, bukan antrean build Vercel.

## Status integrasi saat pemeriksaan

Pada 17 November 2026, status Vercel pada commit main melaporkan penolakan private organization repository pada Hobby. API GitHub menunjukkan repo sekarang public. Penyebab perbedaan belum terverifikasi; Deploy Hook tidak menjamin mengatasi konfigurasi atau pembatasan akun. CLI lokal login sebagai alwi2022 dan tidak memiliki akses akun Brifion, jadi jangan memakai konfigurasi .vercel lokal lama untuk deployment ini.

Referensi: https://vercel.com/docs/deploy-hooks dan https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow
