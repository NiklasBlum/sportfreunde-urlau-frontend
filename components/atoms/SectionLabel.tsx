interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({
  children,
  light = false,
}: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-label md:text-body-xs font-semibold tracking-[0.18em] uppercase mb-4 before:content-[''] before:w-5 before:h-0.5 before:bg-gold ${
        light ? "text-gold-highlight" : "text-red-accent"
      }`}
    >
      {children}
    </div>
  );
}
