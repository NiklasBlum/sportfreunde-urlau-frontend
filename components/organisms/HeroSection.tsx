import Button from "@/components/atoms/Button";
import StatItem from "@/components/atoms/StatItem";
import SfuLogo from "@/components/atoms/SfuLogo";

const stats = [
  { value: "290", unit: "+", label: "Mitglieder" },
  { value: "10", unit: "+", label: "Abteilungen" },
  { value: "50", unit: "+", label: "Jahre Geschichte" },
  { value: "1", label: "Heimatort Urlau" },
];

export default function HeroSection() {
  return (
    <section
      className="min-h-screen md:min-h-[95vh] relative flex items-center overflow-hidden pt-20 pb-25 md:py-0"
      aria-label="Willkommen"
    >
      {/* Background: clean diagonal gradient, brand blue → brand red */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-blue) 0%, var(--color-blue-mid) 50%, var(--color-red) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left */}
        <div className="justify-items-center lg:justify-items-start">
          <h1 className="font-serif text-[clamp(2.8rem,4.5vw,4.2rem)] font-black text-white leading-[1.05] mb-6 animate-[fadeUp_0.8s_0.1s_ease_both]">
            Griaß di und
            <br />
            <span className="text-gold-highlight">herzlich willkommen!</span>
          </h1>
          <p className="text-red-tint text-body mb-10 w-full md:max-w-110 animate-[fadeUp_0.8s_0.2s_ease_both]">
            Wir bieten ein umfangreiches Angebot im Breiten- und Freizeitsport
            und fördern aktiv den Sport bei Kindern und Jugendlichen. Bleibe fit
            und gesund mit uns!
          </p>
          <div className="flex gap-3 sm:gap-4 animate-[fadeUp_0.8s_0.3s_ease_both]">
            <Button href="#abteilungen" variant="red">
              Unsere Abteilungen
              <span className="ml-1 text-lg sm:text-md">→</span>
            </Button>

            <Button
              href="#verein"
              variant="outline"
              className="justify-center sm:justify-start"
            >
              Mehr über uns
            </Button>
          </div>
        </div>

        {/* Right card */}
        <div className="animate-[fadeLeft_0.9s_0.2s_ease_both]">
          <div className="bg-white/[0.07] border border-white/13 rounded-2xl p-[2.2rem] backdrop-blur-[10px]">
            {/* Logo row */}
            <div className="flex items-center gap-4 pb-[1.4rem] mb-[1.4rem] border-b border-white/10">
              <SfuLogo className="w-20 h-20" />
              <div>
                <div className="font-serif text-[1.1rem] font-bold text-white">
                  Sportfreunde Urlau
                </div>
                <div className="text-micro tracking-[0.12em] uppercase text-gold-highlight mt-0.75">
                  e.V. - Gegründet 1972 - Allgäu
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-[1.3rem] mb-[1.7rem]">
              {stats.map((s) => (
                <StatItem
                  key={s.label}
                  value={s.value}
                  unit={s.unit}
                  label={s.label}
                />
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gold-light/10 border-l-[3px] border-gold pl-[1.1rem] pr-[1.1rem] py-[0.9rem] rounded-r-lg">
              <p className="text-red-tint leading-[1.6] italic">
                &bdquo;Wir animieren Dich zu sportlichen Aktivitäten und freuen
                uns über jedes neue Mitglied.&ldquo;
              </p>
              <cite className="block mt-1.5 text-gold-highlight text-label not-italic font-semibold">
                Michael Tronsberg, 1. Vorsitzender
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-micro tracking-[0.15em] uppercase animate-bounce after:content-[''] after:w-px after:h-9 after:bg-linear-to-b after:from-white/40 after:to-transparent">
        Scroll
      </div>
    </section>
  );
}
