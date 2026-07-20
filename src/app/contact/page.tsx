import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import { CONTACT_INFO, INQUIRY_TRACKS } from "@/data/contact";

export default function ContactPage() {
  const hasAnyChannel =
    CONTACT_INFO.email || CONTACT_INFO.phone || CONTACT_INFO.address;

  return (
    <>
      <PageHeader
        n="11"
        eyebrow="Contact"
        title="Start a conversation"
        dek="Whether you're a facility considering certification, a candidate auditor, or a state regulator evaluating the program — here's where the pathway begins."
      />

      <Section kicker="Reach us" title="Contact channels">
        {hasAnyChannel ? (
          <ul className="space-y-4">
            {CONTACT_INFO.email && (
              <li className="flex items-center gap-3 text-[0.98rem]">
                <Mail size={16} className="text-[var(--color-amber-600)]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="underline decoration-[var(--color-amber-500)] underline-offset-4">
                  {CONTACT_INFO.email}
                </a>
              </li>
            )}
            {CONTACT_INFO.phone && (
              <li className="flex items-center gap-3 text-[0.98rem]">
                <Phone size={16} className="text-[var(--color-amber-600)]" />
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
              </li>
            )}
            {CONTACT_INFO.address && (
              <li className="flex items-center gap-3 text-[0.98rem]">
                <MapPin size={16} className="text-[var(--color-amber-600)]" />
                {CONTACT_INFO.address}
              </li>
            )}
            {CONTACT_INFO.linkedin && (
              <li className="flex items-center gap-3 text-[0.98rem]">
                <ExternalLink size={16} className="text-[var(--color-amber-600)]" />
                <a href={CONTACT_INFO.linkedin} className="underline decoration-[var(--color-amber-500)] underline-offset-4">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        ) : (
          <Callout label="Setup needed" tone="amber">
            No contact channels are configured yet. Add an email, phone,
            address, or LinkedIn URL to{" "}
            <code className="font-mono text-[13px]">src/data/contact.ts</code>{" "}
            and this section will populate automatically.
          </Callout>
        )}
      </Section>

      <Section kicker="What to send" title="Route your inquiry" wide>
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-rule)]">
          {INQUIRY_TRACKS.map((t) => (
            <div key={t.title} className="bg-[var(--color-surface)] p-6">
              <div className="font-display text-[1.05rem]">{t.title}</div>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-[var(--color-ink-muted)]">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
