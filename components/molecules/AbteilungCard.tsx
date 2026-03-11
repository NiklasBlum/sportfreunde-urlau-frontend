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
      className="bg-white rounded-xl px-[1.2rem] py-6 text-center border border-black/[0.07] transition-all duration-200 cursor-pointer no-underline text-inherit block hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(192,17,31,0.12)] hover:border-[#d42030] group focus-visible:outline-[3px] focus-visible:outline-[#b00e1b] focus-visible:outline-offset-[3px]"
    >
      <div className="w-20 h-20 bg-[#f2eeeb] rounded-full flex items-center justify-center text-[1.5rem] mx-auto mb-[0.85rem] transition-colors duration-200 group-hover:bg-[rgba(192,17,31,0.08)]">
        {icon}
      </div>
      <div className="font-semibold text-[0.87rem] text-[#1a1a1a]">{name}</div>
    </a>
  );
}
