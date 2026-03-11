import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  dropdown?: DropdownItem[];
}

export default function NavItem({
  label,
  href,
  active = false,
  dropdown,
}: NavItemProps) {
  return (
    <li className="relative group">
      <Link
        href={href}
        className={`flex items-center h-18 px-4 text-[0.82rem] font-medium tracking-[0.06em] uppercase transition-colors duration-200 no-underline focus-visible:outline-[3px] focus-visible:outline-[#f0c060] focus-visible:-outline-offset-[3px] ${
          active
            ? "text-[#f0c060] bg-black/18"
            : "text-white hover:text-[#f0c060] hover:bg-black/18"
        }`}
      >
        {label}
      </Link>
      {dropdown && dropdown.length > 0 && (
        <div className="hidden group-hover:block absolute top-full left-0 bg-[#7a0b14] min-w-52.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] border-t-2 border-[#a87628] z-50">
          {dropdown.map((item, index) => (
            <Link
              key={`${item.href}-${index}`}
              href={item.href}
              className="block px-[1.2rem] py-[0.65rem] text-[#f5d0d3] text-[0.82rem] border-b border-white/6 transition-all duration-150 no-underline hover:bg-black/20 hover:text-[#f0c060] hover:pl-[1.6rem] focus-visible:outline-[3px] focus-visible:outline-[#f0c060]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
