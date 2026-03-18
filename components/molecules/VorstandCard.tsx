import Image from "next/image";

interface VorstandCardProps {
  role: string;
  name: string;
  avatar?: string;
}

export default function VorstandCard({
  role,
  name,
  avatar,
}: VorstandCardProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <article
      className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-black/8 bg-red p-[1.8rem] text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.75 hover:shadow-[0_14px_36px_rgba(192,17,31,0.18)]"
      aria-label={`Vorstand: ${role} ${name}`}
    >
      <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gold/50 bg-surface text-[1.1rem] font-semibold text-red">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={60}
            height={60}
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <span aria-hidden="true">{initials || "?"}</span>
            <span className="sr-only">Kein Profilbild für {name}</span>
          </>
        )}
      </div>
      <div className="mb-1 text-micro font-semibold tracking-widest text-white uppercase">
        {role}
      </div>
      <div className="font-serif text-[1.1rem] font-bold text-white">
        {name}
      </div>
    </article>
  );
}
