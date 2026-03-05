import Tag from "@/components/atoms/Tag";

interface TerminCardProps {
  day: string;
  month: string;
  title: string;
  info: string;
  tag: string;
}

export default function TerminCard({
  day,
  month,
  title,
  info,
  tag,
}: TerminCardProps) {
  return (
    <div className="bg-white px-6 py-[1.2rem] grid grid-cols-[65px_1fr_auto] gap-[1.4rem] items-center transition-colors duration-150 hover:bg-[#fdf8f8]">
      <div className="text-center">
        <div className="font-serif text-[2rem] font-bold text-[#b00e1b] leading-none">
          {day}
        </div>
        <div className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[#4a5260]">
          {month}
        </div>
      </div>
      <div>
        <div className="font-semibold text-[0.93rem] text-[#1a1a1a] mb-[3px]">
          {title}
        </div>
        <div className="text-[0.78rem] text-[#4a5260]">{info}</div>
      </div>
      <div className="hidden sm:block">
        <Tag>{tag}</Tag>
      </div>
    </div>
  );
}
