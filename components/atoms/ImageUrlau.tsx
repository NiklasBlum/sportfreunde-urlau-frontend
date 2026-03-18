import Image from "next/image";

export default function ImageUrlau() {
  return (
    <div className="relative">
      <div className="w-full aspect-video rounded-2xl overflow-hidden relative">
        <Image
          src="/urlau.webp"
          alt="Urlau, Allgäu"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="block absolute bottom-0 right-0 bg-red text-white rounded-tl-xl  px-[1.4rem] py-[1.1rem] text-center ">
        <div className="font-serif text-[1.9rem] font-bold leading-none">
          240
        </div>
        <div className="text-[0.68rem] font-semibold tracking-[0.08em] uppercase mt-0.5">
          Mitglieder
        </div>
      </div>
    </div>
  );
}
