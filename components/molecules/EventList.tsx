import Link from "next/link";

export interface EventListItem {
  id: string;
  href: string;
  date: string;
  headline: string;
  description?: string | null;
}

interface EventListProps {
  items: EventListItem[];
}

function formatEventDate(isoDate: string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(new Date(isoDate));
}

export default function EventList({ items }: EventListProps) {
  return (
    <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8">
      {items.map(({ id, href, date, headline, description }) => (
        <Link
          key={id}
          href={href}
          className="bg-white px-6 py-5 flex gap-6 items-start hover:bg-surface-hover transition-colors duration-150"
        >
          <div className="shrink-0 w-20 self-center text-center">
            <span className="inline-flex min-w-16 items-center justify-center rounded-full border border-red-accent/30 bg-linear-to-b from-red-accent/16 to-red-accent/7 px-3 py-1.5 text-caption font-bold tracking-[0.12em] text-red-dark shadow-[0_1px_0_rgba(0,0,0,0.06)]">
              {formatEventDate(date)}
            </span>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-body-sm text-foreground mb-1">
              {headline}
            </div>
            {description && (
              <p className="text-muted text-body-xs line-clamp-1">
                {description}
              </p>
            )}
          </div>
          <span aria-hidden="true" className="text-muted self-center text-2xl">
            {">"}
          </span>
        </Link>
      ))}
    </div>
  );
}
