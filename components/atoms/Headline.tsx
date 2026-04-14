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

  return <Tag className={className}>{children}</Tag>;
};
