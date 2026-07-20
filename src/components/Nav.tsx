"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Seal from "./Seal";
import { NAV_ITEMS } from "./nav-items";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)]/95 backdrop-blur">
      {/* Accreditation status strip — always visible, never buried */}
      <div className="bg-[var(--color-forest-950)] text-[var(--color-amber-200)]">
        <div className="mx-auto max-w-[1200px] px-5 py-1.5 text-[11px] font-mono tracking-wide text-center">
          Phase 1 — Independent Consulting &amp; Pre-Certification Body. Not
          accredited by, affiliated with, or endorsed by ISO, IEC, GFSI, or
          SQFI.
        </div>
      </div>

      <div className="rule-bottom">
        <div className="mx-auto max-w-[1200px] px-5 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Seal className="w-9 h-9 text-[var(--color-forest-800)]" />
            <div className="leading-tight">
              <div className="font-display text-[1.15rem] text-[var(--color-forest-950)]">
                Canna-Safe Programs
              </div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--color-ink-muted)]">
                Cannabis Food Safety Certification
              </div>
            </div>
          </Link>

          <button
            className="lg:hidden p-2 -mr-2 text-[var(--color-forest-900)]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Desktop tab bar */}
      <nav
        className="hidden lg:block rule-bottom bg-[var(--color-surface)]"
        aria-label="Program sections"
      >
        <div className="mx-auto max-w-[1200px] px-5 overflow-x-auto no-scrollbar">
          <ul className="flex gap-0.5 min-w-max">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-1.5 px-3.5 py-3 text-[13px] tracking-wide border-b-2 transition-colors whitespace-nowrap ${
                      active
                        ? "border-[var(--color-amber-600)] text-[var(--color-forest-950)]"
                        : "border-transparent text-[var(--color-ink-muted)] hover:text-[var(--color-forest-800)] hover:border-[var(--color-rule-strong)]"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[var(--color-amber-600)]">
                      §{item.n}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav
          className="lg:hidden bg-[var(--color-surface)] rule-bottom"
          aria-label="Program sections"
        >
          <ul className="px-5 py-2">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <li
                  key={item.href}
                  className="border-b border-[var(--color-rule)] last:border-none"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 py-3 text-[15px] ${
                      active
                        ? "text-[var(--color-forest-950)] font-medium"
                        : "text-[var(--color-ink-muted)]"
                    }`}
                  >
                    <span className="font-mono text-[11px] text-[var(--color-amber-600)] w-6">
                      §{item.n}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
