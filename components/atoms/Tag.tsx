interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="bg-[rgba(176,14,27,0.1)] text-[#7a0b14] text-[0.7rem] font-semibold px-[11px] py-1 rounded-full whitespace-nowrap tracking-[0.05em]">
      {children}
    </span>
  );
}
