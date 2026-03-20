import Image from "next/image";

export default function SfuLogo({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/logo.webp"
      alt="Sportfreunde Urlau Vereinswappen"
      width={100}
      height={100}
      className={className}
      priority
    />
  );
}
