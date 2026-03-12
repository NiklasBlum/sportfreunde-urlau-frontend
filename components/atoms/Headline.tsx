import React from "react";

interface HeadlineProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

export const Headline: React.FC<HeadlineProps> = ({
  level = "h1",
  children,
  className = "",
}) => {
  const Tag = level;

  if (level === "h1")
    return (
      <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold text-white leading-[1.1] mb-4">
        {children}
      </h1>
    );

  if (level === "h2")
    return (
      <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold text-foreground leading-[1.15] mb-[0.9rem]">
        {children}
      </h2>
    );

  return <Tag className={className}>{children}</Tag>;
};
