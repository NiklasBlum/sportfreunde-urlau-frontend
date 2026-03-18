interface NewsCardProps {
  icon: string;
  meta: string;
  title: string;
  text: string;
}

export default function NewsCard({ icon, meta, title, text }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-black/[0.07] transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(192,17,31,0.1)]">
      <div className="h-42.5 bg-linear-to-br from-red-dark to-red-accent flex items-center justify-center text-[2.8rem]">
        {icon}
      </div>
      <div className="p-[1.3rem]">
        <div className="text-label text-muted uppercase tracking-[0.08em] mb-2">
          {meta}
        </div>
        <div className="font-serif text-[1rem] font-bold text-foreground leading-[1.3] mb-2">
          {title}
        </div>
        <div className="text-caption text-muted leading-relaxed">{text}</div>
      </div>
    </div>
  );
}
