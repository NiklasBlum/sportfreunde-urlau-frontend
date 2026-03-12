import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant =
  | "primary"
  | "red"
  | "blue"
  | "outline"
  | "outline-dark"
  | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  href: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-white font-semibold hover:bg-gold-light hover:text-gold-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,151,58,0.38)]",
  red: "bg-red text-white font-semibold hover-animation hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(143,13,23,0.28)]",
  blue: "bg-blue text-white font-semibold hover-animation hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,38,102,0.35)]",
  outline:
    "bg-transparent text-white border border-white/70 font-medium hover:border-white hover:bg-white/12",
  "outline-dark":
    "bg-transparent text-foreground border border-black/20 font-medium hover:border-black/40 hover:bg-black/[0.03]",
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
      className={`inline-flex items-center gap-2 px-6.5 py-3.25 rounded-md text-sm transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-gold-highlight focus-visible:outline-offset-[3px] focus-visible:rounded ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
