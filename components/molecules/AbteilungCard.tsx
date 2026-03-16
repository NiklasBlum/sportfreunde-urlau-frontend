interface AbteilungCardProps {
  icon: string;
  name: string;
  href: string;
}

export default function AbteilungCard({
  icon,
  name,
  href,
}: AbteilungCardProps) {
  return (
    <a
      href={href}
      className="group block rounded-xl border border-white/12 bg-blue px-5 py-6 text-center no-underline transition-all duration-200 hover:-translate-y-1 hover:border-gold-highlight/45 hover:shadow-[0_16px_34px_rgba(0,0,70,0.34)] focus-visible:-translate-y-1 focus-visible:border-gold-highlight/60"
    >
      <div className="mx-auto mb-3 flex h-18 w-18 items-center justify-center rounded-full bg-linear-to-br from-red-dark to-red-accent text-[1.85rem] shadow-[0_10px_24px_rgba(122,11,20,0.28)] transition-transform duration-200 group-hover:scale-105">
        {icon}
      </div>
      <div className="min-h-11 text-[0.92rem] font-semibold leading-tight text-white">
        {name}
      </div>
      <div className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/75 transition-colors duration-200 group-hover:text-gold-highlight">
        Zur Abteilung <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}
