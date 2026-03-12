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
      className={`inline-flex items-center  gap-2.5 text-[0.72rem] md:text-[0.75rem] lg:text-[0.78rem] font-semibold tracking-[0.18em] uppercase mb-[0.9rem] before:content-[''] before:w-[22px] before:h-[2px] before:bg-gold ${
        light ? "text-gold-highlight" : "text-red-accent"
      }`}
    >
      {children}
    </div>
  );
}
