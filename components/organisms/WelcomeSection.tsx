import Button from "@/components/atoms/Button";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "../atoms/Headline";
import ImageUrlau from "../atoms/ImageUrlau";

export default function WelcomeSection() {
  return (
    <Section id="verein">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <SectionLabel>Unser Verein</SectionLabel>
          <Headline level="h2">Die Heimat der SFU</Headline>

          <p className="text-muted text-body mb-4">
            Der Sportverein Sportfreunde Urlau e.V. ist fest in der Gemeinschaft
            von Urlau verwurzelt. Mit rund 240 aktiven Mitgliedern bieten wir
            für jeden etwas – von Kinder-Turnen bis Radsport, von Tischtennis bis
            Langlauf.
          </p>
          <p className="text-muted text-body mb-8">
            Unser Verein hat es sich zur Aufgabe gemacht, ein möglichst
            umfangreiches Angebot im Breiten- und Freizeitsport zu bieten. Zudem
            liegt uns die Förderung des Sports bei Kindern und Jugendlichen
            besonders am Herzen.
          </p>
          <Button href="/verein" variant="red">
            Mehr über den Verein →
          </Button>
        </div>

        <ImageUrlau />
      </div>
    </Section>
  );
}
