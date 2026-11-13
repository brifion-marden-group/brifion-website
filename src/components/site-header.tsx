"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { company, cta, nav } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);
  // Close before the browser follows an anchor so the menu height cannot shift its target.
  const followAnchor = () => flushSync(() => setOpen(false));

  return (
    <header
      className="site-header sticky top-0 z-50"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          close();
          menuButton.current?.focus();
        }
      }}
    >
      <div className="page-width flex h-18 items-center justify-between">
        <a href="#top" onClick={followAnchor} aria-label={`${company.name}, kembali ke atas`}>
          <Image
            src="/brand/brifion-logo-terang.png"
            alt={company.name}
            width={1683}
            height={552}
            priority
            className="h-10 w-auto"
          />
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-normal text-ink transition-colors hover:text-gold-deep"
            >
              {item.label}
            </a>
          ))}
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-contact"
          >
            {cta.header} <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          ref={menuButton}
          type="button"
          className="-mr-2 flex size-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6" aria-hidden>
            <span
              className={`absolute left-0 h-px w-6 bg-navy transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-navy transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navigasi utama"
        hidden={!open}
        className="border-t border-line bg-white px-6 pb-8 md:hidden"
      >
        <ul>
          {nav.map((item) => (
            <li key={item.href} className="border-b border-line">
              <a href={item.href} onClick={followAnchor} className="block py-4 text-lg font-normal text-navy">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={company.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-6 block bg-navy px-5 py-4 text-center font-medium text-white"
        >
          {cta.primary}
        </a>
      </nav>
    </header>
  );
}
