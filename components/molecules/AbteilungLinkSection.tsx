import Link from "next/link";
import Section from "@/components/atoms/Section";

interface BackProps {
  sectionClassName?: string;
}

export default function AbteilungLinkSection({ sectionClassName }: BackProps) {
  return (
    <Section
      className={
        sectionClassName
          ? `${sectionClassName} border-t border-black/6`
          : "bg-surface border-t border-black/6"
      }
    >
      <Link
        href="/#abteilungen"
        className={
          "inline-flex items-center gap-2 text-red-accent font-semibold text-[0.9rem] hover:underline"
        }
      >
        ← Alle Abteilungen
      </Link>
    </Section>
  );
}
