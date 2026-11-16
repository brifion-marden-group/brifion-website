"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { company } from "@/content/site";

const subscribe = () => () => {};

export function ConsultationForm() {
  const [fields, setFields] = useState({ name: "", company: "", problem: "" });
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  const message = `Halo Brifion, saya ${fields.name.trim()} dari ${fields.company.trim()}.\n\nSaya ingin konsultasi kebutuhan aplikasi.\n${fields.problem.trim()}`;

  return (
    <form className="consultation-form" action={company.whatsappUrl} method="get">
      <input type="hidden" name="text" value={message} />
      <div className="consultation-form-head">
        <h3>Formulir konsultasi</h3>
        <p>Tiga isian singkat, lalu lanjut di WhatsApp.</p>
      </div>
      <div className="consultation-form-body">
        <div className="form-fields">
          <label htmlFor="name">Nama Anda<input id="name" autoComplete="name" required minLength={2} maxLength={100} pattern=".*\S.*" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} /></label>
          <label htmlFor="company">Nama perusahaan<input id="company" autoComplete="organization" required minLength={2} maxLength={160} pattern=".*\S.*" value={fields.company} onChange={(e) => setFields({ ...fields, company: e.target.value })} /></label>
          <label className="form-wide" htmlFor="problem">Apa yang ingin Anda bantu rapikan?<textarea id="problem" rows={3} required minLength={10} maxLength={1200} placeholder="Contoh: pencatatan stok dan pesanan masih terpisah." value={fields.problem} onChange={(e) => setFields({ ...fields, problem: e.target.value })} /></label>
        </div>
        <button className="button-navy consultation-submit" type="submit" disabled={!ready}>Lanjut ke WhatsApp <span aria-hidden="true">&rarr;</span></button>
        <p className="small-note">WhatsApp akan membuka draf dari isian Anda. Periksa lalu tekan Kirim. Isian tidak disimpan di database. <Link href="/privasi">Informasi privasi</Link>.</p>
      </div>
      <noscript><p>Aktifkan JavaScript untuk melanjutkan, atau hubungi business@brifion.com.</p></noscript>
    </form>
  );
}
