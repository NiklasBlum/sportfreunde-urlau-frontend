import Image from "next/image";

export default function SfuLogo({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Sportfreunde Urlau Vereinswappen"
      width={100}
      height={110}
      className={className}
    />
  );
}
