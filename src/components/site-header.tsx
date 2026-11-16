"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { company, cta, nav } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const followAnchor = () => flushSync(() => setOpen(false));

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-md" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="page-width flex h-16 items-center justify-between md:h-18">
        <Link href="/#top" onClick={followAnchor} aria-label={`${company.name}, kembali ke atas`}>
          <Image src="/brand/brifion-logo-terang.png" alt={company.name} width={1683} height={552} preload className="h-9 w-auto md:h-10" />
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-ink transition-colors hover:text-gold-deep">{item.label}</Link>)}
        </nav>
        <div className="ml-auto mr-2 hidden items-center gap-2 md:flex lg:ml-0 lg:mr-0">
          <Link href="/demo" className="rounded-[10px] px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-cream">Coba demo</Link>
          <Link href="/#konsultasi" className="rounded-[10px] bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft">{cta.header}</Link>
        </div>
        <button ref={menuButton} type="button" className="-mr-2 flex size-11 items-center justify-center lg:hidden" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen(!open)}>
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span className={`absolute left-0 h-0.5 w-6 rounded bg-navy transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-6 rounded bg-navy transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>
      <nav id="menu-mobile" aria-label="Navigasi mobile" hidden={!open} className="border-t border-line bg-white px-5 pb-6 lg:hidden">
        <ul>{nav.map((item) => <li key={item.href} className="border-b border-line"><Link href={item.href} onClick={followAnchor} className="block py-4 text-lg font-medium text-navy">{item.label}</Link></li>)}</ul>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link href="/demo" className="rounded-[10px] border border-line px-4 py-3.5 text-center font-semibold text-navy">Coba demo</Link>
          <Link href="/#konsultasi" onClick={followAnchor} className="rounded-[10px] bg-navy px-4 py-3.5 text-center font-semibold text-white">{cta.header}</Link>
        </div>
      </nav>
    </header>
  );
}
