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
          : "bg-white border-t border-black/6"
      }
    >
      <Link
        href="/#abteilungen"
        className={
          "inline-flex items-center gap-2 text-red-accent font-semibold text-body-xs hover:underline"
        }
      >
        ← Alle Abteilungen
      </Link>
    </Section>
  );
}
