import Link from "next/link";
import SfuLogo from "@/components/atoms/SfuLogo";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 no-underline focus-visible:outline-[3px] focus-visible:outline-gold-highlight focus-visible:outline-offset-[3px] rounded"
      aria-label="Sportfreunde Urlau – Startseite"
    >
      <SfuLogo className="w-12 h-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]" />

      <div className="text-white font-serif text-[1.05rem] leading-[1.2]">
        Sportfreunde Urlau
        <span className="block text-[0.7rem] mt-1 font-sans font-normal tracking-[0.12em] text-red-subtle uppercase">
          e.V. · Gegr. 1971
        </span>
      </div>
    </Link>
  );
}
