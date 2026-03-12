interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="bg-red-accent/10 text-red-dark text-[0.7rem] font-semibold px-[11px] py-1 rounded-full whitespace-nowrap tracking-[0.05em]">
      {children}
    </span>
  );
}
