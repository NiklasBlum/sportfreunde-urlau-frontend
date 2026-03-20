import { ComponentPropsWithoutRef, ReactNode } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  type?: "default" | "hint" | "warning";
  children?: ReactNode;
}

export function Card({
  type = "default",
  className = "",
  children,
}: CardProps) {
  const typeStyles = {
    default: "rounded-xl p-6 border border-black/6 text-body-xs",
    hint: "bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-body-xs text-amber-900",
    warning: "bg-yellow-50 border border-yellow-200",
  };

  return (
    <div className={`rounded-lg p-4 ${typeStyles[type]} ${className}`}>
      {children}
    </div>
  );
}
