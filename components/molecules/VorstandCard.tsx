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
  return (
    <div className="bg-white/[0.07] border border-white/10 rounded-xl p-[1.8rem] transition-all duration-200 hover:bg-white/[0.11] hover:-translate-y-[3px]">
      <div className="w-20 h-20 rounded-full bg-white/10 border-[3px] border-[rgba(200,151,58,0.5)] flex items-center justify-center text-[1.5rem] mb-4 overflow-hidden">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={60}
            height={60}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>👤</span>
        )}
      </div>
      <div className="text-[#f0c060] text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-1">
        {role}
      </div>
      <div className="font-serif text-[1.1rem] text-white font-bold">
        {name}
      </div>
    </div>
  );
}
