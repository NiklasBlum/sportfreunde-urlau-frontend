import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  href: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#a87628] text-white font-semibold hover:bg-[#c8973a] hover:text-[#3d1a00] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,151,58,0.38)]",
  outline:
    "bg-transparent text-white border border-white/70 font-medium hover:border-white hover:bg-white/12",
  ghost: "bg-transparent text-white font-medium hover:underline",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-[26px] py-[13px] rounded-md text-sm transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-[#f0c060] focus-visible:outline-offset-[3px] focus-visible:rounded ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
