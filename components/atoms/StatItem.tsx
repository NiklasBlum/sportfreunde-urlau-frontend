interface StatItemProps {
  value: string | number;
  unit?: string;
  label: string;
}

export default function StatItem({ value, unit, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="font-serif text-[2.3rem] font-bold text-white leading-none">
        {value}

        {unit && (
          <span className="ml-1 text-[1.5rem] font-sans text-gold-highlight">
            {unit}
          </span>
        )}
      </div>

      <div className="text-red-tint text-[0.72rem] tracking-[0.08em] uppercase mt-0.75">
        {label}
      </div>
    </div>
  );
}
