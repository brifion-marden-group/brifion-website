"use client";

import { useRef, useState } from "react";
import { pricing } from "@/content/site";

const { groups } = pricing;

// Semua panel selalu ada di HTML (panel nonaktif memakai `hidden`),
// jadi seluruh harga tetap terbaca crawler dan Astra tanpa JavaScript.
export function PricingTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (index + (event.key === "ArrowRight" ? 1 : -1) + groups.length) % groups.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="pricing-tabs">
      <div role="tablist" aria-label="Kategori harga" className="pricing-tablist">
        {groups.map((group, index) => (
          <button
            key={group.id}
            ref={(el) => {
              tabs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${group.id}`}
            aria-selected={active === index}
            aria-controls={`panel-${group.id}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {group.tab}
          </button>
        ))}
      </div>

      {groups.map((group, index) => (
        <div
          key={group.id}
          role="tabpanel"
          id={`panel-${group.id}`}
          aria-labelledby={`tab-${group.id}`}
          hidden={active !== index}
          className="pricing-panel"
        >
          <p className="pricing-intro">{group.intro}</p>
          <ol className="package-list">
            {group.items.map((item) => (
              <li key={item.name}>
                <h3>{item.name}</h3>
                <p className="package-problem">{item.problem}</p>
                <p className="package-price">
                  <span>Mulai dari</span>
                  {item.price}
                </p>
                <ul>
                  {item.scope.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="package-meta">
                  {item.duration} · {item.warranty}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
