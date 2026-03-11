import Button from "@/components/atoms/Button";
import StatItem from "@/components/atoms/StatItem";
import SfuLogo from "@/components/atoms/SfuLogo";

const stats = [
  { value: "240", unit: "+", label: "Mitglieder" },
  { value: "10", label: "Abteilungen" },
  { value: "100", unit: "+", label: "Jahre Geschichte" },
  { value: "1", label: "Heimatort Urlau" },
];

export default function HeroSection() {
  return (
    <section
      className="min-h-[95vh] relative flex items-center overflow-hidden"
      aria-label="Willkommen"
    >
      {/* Background: clean diagonal gradient, brand blue → brand red */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-blue) 0%, #3758ba 50%, var(--color-red) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left */}
        <div className="py-20 lg:py-0">
          <h1 className="font-serif text-[clamp(2.8rem,4.5vw,4.2rem)] font-black text-white leading-[1.05] mb-6 animate-[fadeUp_0.8s_0.1s_ease_both]">
            Griaß di und
            <br />
            <span className="text-[#f0c060]">herzlich willkommen!</span>
          </h1>
          <p className="text-[#f0dde0] text-[1.05rem] leading-[1.8] mb-10 max-w-110 animate-[fadeUp_0.8s_0.2s_ease_both]">
            Wir bieten ein umfangreiches Angebot im Breiten- und Freizeitsport
            und fördern aktiv den Sport bei Kindern und Jugendlichen. Bleibe fit
            und gesund mit uns!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-[fadeUp_0.8s_0.3s_ease_both]">
            <Button
              href="#abteilungen"
              variant="outline"
              className="justify-center sm:justify-start"
            >
              Unsere Abteilungen →
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
        <div className="hidden lg:block animate-[fadeLeft_0.9s_0.2s_ease_both]">
          <div className="bg-white/[0.07] border border-white/13 rounded-2xl p-[2.2rem] backdrop-blur-[10px]">
            {/* Logo row */}
            <div className="flex items-center gap-4 pb-[1.4rem] mb-[1.4rem] border-b border-white/10">
              <SfuLogo className="w-20 h-20" />
              <div>
                <div className="font-serif text-[1.1rem] font-bold text-white">
                  Sportfreunde Urlau
                </div>
                <div className="text-[0.67rem] tracking-[0.12em] uppercase text-[#f0c060] mt-0.75">
                  e.V. - Gegründet 1921 - Allgäu
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
            <div className="bg-[rgba(200,151,58,0.1)] border-l-[3px] border-[#a87628] pl-[1.1rem] pr-[1.1rem] py-[0.9rem] rounded-r-lg">
              <p className="text-[#f0dde0] leading-[1.6] italic">
                „Wir animieren Dich zu sportlichen Aktivitäten und freuen uns
                über jedes neue Mitglied."
              </p>
              <cite className="block mt-1.5 text-[#f0c060] text-[0.8rem] not-italic font-semibold">
                Michael Tronsberg, 1. Vorsitzender
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[0.68rem] tracking-[0.15em] uppercase animate-bounce after:content-[''] after:w-px after:h-9 after:bg-gradient-to-b after:from-white/40 after:to-transparent">
        Scroll
      </div>
    </section>
  );
}
