import Link from "next/link";

export interface EventListItem {
  id: string;
  href: string;
  dateLabel: string;
  headline: string;
  description?: string | null;
}

interface EventListProps {
  items: EventListItem[];
}

export default function EventList({ items }: EventListProps) {
  return (
    <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8">
      {items.map(({ id, href, dateLabel, headline, description }) => (
        <Link
          key={id}
          href={href}
          className="bg-white px-6 py-5 flex gap-6 items-start hover:bg-surface transition-colors"
        >
          <div className="shrink-0 w-18 self-center text-center pt-0.5">
            <span className="inline-block text-label font-semibold tracking-widest uppercase text-red-accent bg-red-accent/8 rounded-md px-2 py-1 leading-none">
              {dateLabel}
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
