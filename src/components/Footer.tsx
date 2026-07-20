import Link from "next/link";
import Seal from "./Seal";
import { NAV_ITEMS } from "./nav-items";

export default function Footer() {
  return (
    <footer className="rule-top bg-[var(--color-forest-950)] text-[var(--color-forest-50)] mt-24">
      <div className="mx-auto max-w-[1200px] px-5 py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Seal className="w-8 h-8 text-[var(--color-amber-400)]" />
            <span className="font-display text-lg">Canna-Safe Programs</span>
          </div>
          <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--color-forest-100)]/80 max-w-[38ch]">
            An independently operated Phase 1 consulting and pre-certification
            body for cannabis-infused food manufacturing — edibles,
            tinctures, topicals, and beverages — across Colorado, California,
            Washington, Missouri, and Arkansas.
          </p>
        </div>

        <div>
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--color-amber-400)] mb-3">
            Program
          </div>
          <ul className="space-y-2 text-[13.5px] text-[var(--color-forest-100)]/85">
            {NAV_ITEMS.slice(0, 6).map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-[var(--color-amber-200)]">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--color-amber-400)] mb-3">
            Reference
          </div>
          <ul className="space-y-2 text-[13.5px] text-[var(--color-forest-100)]/85">
            {NAV_ITEMS.slice(6).map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-[var(--color-amber-200)]">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rule-top border-[var(--color-forest-800)]">
        <div className="mx-auto max-w-[1200px] px-5 py-5 text-[11.5px] font-mono text-[var(--color-forest-100)]/60 leading-relaxed">
          Canna-Safe Programs is an independently operated Phase 1 body. It is
          not accredited by, certified by, endorsed by, or affiliated with
          SQFI, GFSI, ISO, or IEC. References to SQF, GFSI-benchmarked
          schemes, and ISO/IEC 17065 describe design patterns this program is
          modeled on — not claims of accreditation. Pursuit of ISO/IEC 17065
          accreditation is a stated Phase 2 goal, not a current status. ©{" "}
          {new Date().getFullYear()} Canna-Safe Programs. 2026 Edition.
        </div>
      </div>
    </footer>
  );
}
