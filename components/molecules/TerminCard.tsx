"use client";

import { useRouter } from "next/navigation";
import Tag from "@/components/atoms/Tag";

interface TerminCardProps {
  day: string;
  month: string;
  title: string;
  info: string;
  tag: string;
  href?: string;
}

export default function TerminCard({
  day,
  month,
  title,
  info,
  tag,
  href,
}: TerminCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white px-6 py-[1.2rem] grid grid-cols-[65px_1fr_auto] gap-[1.4rem] items-center transition-colors duration-150 ${
        href
          ? "cursor-pointer hover:bg-surface-hover"
          : "hover:bg-surface-hover"
      }`}
    >
      <div className="text-center">
        <div className="font-serif text-[2rem] font-bold text-red-accent leading-none">
          {day}
        </div>
        <div className="text-label font-semibold tracking-[0.1em] uppercase text-muted">
          {month}
        </div>
      </div>
      <div>
        <div className="font-semibold text-body-sm mb-[3px]">{title}</div>
        <div className="text-label text-muted">{info}</div>
      </div>
      <div className="hidden sm:block">
        <Tag>{tag}</Tag>
      </div>
    </div>
  );
}
