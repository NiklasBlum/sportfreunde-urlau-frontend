"use client";

import Tag from "@/components/atoms/Tag";
import Link from "next/link";

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  info: string;
  tag: string;
  href?: string;
}

export default function EventCard({
  day,
  month,
  title,
  info,
  tag,
  href,
}: EventCardProps) {
  const baseClass =
    "bg-white px-6 py-[1.2rem] grid grid-cols-[65px_1fr_auto] gap-[1.4rem] items-center transition-colors duration-150";
  const interactiveClass = href
    ? "cursor-pointer hover:bg-surface-hover"
    : "hover:bg-surface-hover";

  const content = (
    <>
      <div className="text-center">
        <div className="font-serif text-[2rem] font-bold text-red-accent leading-none">
          {day}
        </div>
        <div className="text-label font-semibold tracking-widest uppercase text-muted">
          {month}
        </div>
      </div>
      <div>
        <div className="font-semibold text-body-sm mb-0.75">{title}</div>
        <div className="text-label text-muted">{info}</div>
      </div>
      <div className="hidden sm:block">
        <Tag>{tag}</Tag>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${interactiveClass}`}>
        {content}
      </Link>
    );
  }

  return <div className={`${baseClass} ${interactiveClass}`}>{content}</div>;
}
