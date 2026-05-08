import React from "react";

interface HeadlineProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const Headline: React.FC<HeadlineProps> = ({
  level = "h1",
  children,
  className = "",
  light = false,
}) => {
  const Tag = level;

  if (level === "h1")
    return (
      <h1
        className={`font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold leading-[1.1] mb-4 whitespace-normal hyphens-auto  ${light ? "text-white" : "text-black"} ${className}`}
      >
        {children}
      </h1>
    );

  if (level === "h2")
    return (
      <h2
        className={`font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold leading-[1.15] mb-4 whitespace-normal hyphens-auto ${light ? "text-white" : "text-black"} ${className}`}
      >
        {children}
      </h2>
    );

  if (level === "h3")
    return (
      <h3
        className={`font-serif text-[clamp(1.25rem,2.1vw,1.6rem)] font-bold leading-[1.2] mb-3 whitespace-normal hyphens-auto ${light ? "text-white" : "text-black"} ${className}`}
      >
        {children}
      </h3>
    );

  if (level === "h4")
    return (
      <h4
        className={`font-serif text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold leading-tight mb-3 whitespace-normal hyphens-auto ${light ? "text-white" : "text-black"} ${className}`}
      >
        {children}
      </h4>
    );

  if (level === "h5")
    return (
      <h5
        className={`font-serif text-[clamp(1rem,1.5vw,1.15rem)] font-bold leading-[1.3] mb-2 whitespace-normal hyphens-auto ${light ? "text-white" : "text-black"} ${className}`}
      >
        {children}
      </h5>
    );

  if (level === "h6")
    return (
      <h6
        className={`font-serif text-[clamp(0.9rem,1.2vw,1rem)] font-bold leading-[1.35] mb-2 whitespace-normal hyphens-auto ${light ? "text-white" : "text-black"} ${className}`}
      >
        {children}
      </h6>
    );

  return <Tag className={className}>{children}</Tag>;
};
