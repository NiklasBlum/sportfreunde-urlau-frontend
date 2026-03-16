import Image from "next/image";
import Button from "@/components/atoms/Button";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "../atoms/Headline";

export default function VereinSection() {
  return (
    <Section id="verein" className="bg-blue text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <SectionLabel light>Unser Verein</SectionLabel>
          <Headline level="h2" light={true}>
            Die Heimat der SFU
          </Headline>

          <p className="text-[0.98rem] leading-[1.75] mb-[1rem]">
            Der Sportverein Sportfreunde Urlau e.V. ist fest in der Gemeinschaft
            von Urlau verwurzelt. Mit rund 240 aktiven Mitgliedern bieten wir
            für jeden etwas – von Kinderturnen bis Radsport, von Tischtennis bis
            Langlauf.
          </p>
          <p className="text-[0.98rem] leading-[1.8] mb-8">
            Unser Verein hat es sich zur Aufgabe gemacht, ein möglichst
            umfangreiches Angebot im Breiten- und Freizeitsport zu bieten. Zudem
            liegt uns die Förderung des Sports bei Kindern und Jugendlichen
            besonders am Herzen.
          </p>
        </div>

        {/* Image of Urlau */}
        <div className="relative">
          <div className="w-full aspect-video rounded-2xl overflow-hidden relative">
            <Image
              src="/urlau.webp"
              alt="Urlau, Allgäu"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="block absolute -bottom-6 -right-6 bg-red text-white rounded-xl px-[1.4rem] py-[1.1rem] text-center shadow-[0_8px_24px_rgba(200,151,58,0.4)]">
            <div className="font-serif text-[1.9rem] font-bold leading-none">
              240
            </div>
            <div className="text-[0.68rem] font-semibold tracking-[0.08em] uppercase mt-0.5">
              Mitglieder
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
