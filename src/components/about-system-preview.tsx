"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/content/site";
import styles from "@/app/tentang/tentang.module.css";
import s from "@/components/ui/sections.module.css";

export function AboutSystemPreview() {
  const [selected, setSelected] = useState(0);
  const shot = about.showcase[selected];

  return <div className={styles.systemPreview}>
    <div className={styles.previewChoices} role="group" aria-label="Pilih tampilan prototype">
      {about.showcase.map((item, i) => <button key={item.title} type="button" aria-pressed={selected === i} aria-controls="system-preview" onClick={() => setSelected(i)}>{item.role}</button>)}
    </div>
    <figure id="system-preview" className={styles.previewFigure}>
      <div className={styles.frame}>
        <Image src={shot.src} alt={`Tampilan ${shot.title} pada prototype Brifion. Data simulasi.`} width={shot.width} height={shot.height} sizes="(max-width: 1040px) 100vw, 1000px" />
      </div>
      <figcaption aria-live="polite"><strong>{shot.title}</strong><span>{shot.body}</span></figcaption>
    </figure>
    <Link className={s.btnSolid} href="/demo">Coba demo interaktif</Link>
  </div>;
}
