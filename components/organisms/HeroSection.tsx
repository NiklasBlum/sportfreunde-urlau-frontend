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
      className="h-screen relative flex items-center overflow-hidden"
      aria-label="Willkommen"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,rgba(212,32,48,0.55)_0%,transparent_60%),radial-gradient(ellipse_at_15%_85%,rgba(200,151,58,0.1)_0%,transparent_50%),linear-gradient(140deg,#3d0508_0%,#8f0d17_40%,#c0111f_70%,#6a0910_100%)]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,transparent,transparent 50px,rgba(255,255,255,0.018) 50px,rgba(255,255,255,0.018) 100px)",
        }}
      />
      <div className="absolute top-0 right-0 w-[38%] h-full bg-black/10 [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-12 pt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(200,151,58,0.18)] border border-[rgba(200,151,58,0.45)] text-[#f0c060] px-4 py-1.5 rounded-full text-[0.72rem] tracking-[0.14em] uppercase mb-6 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#a87628] before:rounded-full animate-[fadeUp_0.8s_ease_both]">
            Sportfreunde Urlau e.V.
          </div>
          <h1 className="font-serif text-[clamp(2.8rem,4.5vw,4.2rem)] font-black text-white leading-[1.05] mb-6 animate-[fadeUp_0.8s_0.1s_ease_both]">
            Griaß di und
            <br />
            <span className="text-[#f0c060]">herzlich willkommen!</span>
          </h1>
          <p className="text-[#f0dde0] text-[1.05rem] leading-[1.8] mb-10 max-w-[440px] animate-[fadeUp_0.8s_0.2s_ease_both]">
            Wir bieten ein umfangreiches Angebot im Breiten- und Freizeitsport
            und fördern aktiv den Sport bei Kindern und Jugendlichen. Bleibe fit
            und gesund mit uns!
          </p>
          <div className="flex gap-4 flex-wrap animate-[fadeUp_0.8s_0.3s_ease_both]">
            <Button href="#abteilungen" variant="primary">
              Unsere Abteilungen →
            </Button>
            <Button href="#verein" variant="outline">
              Mehr über uns
            </Button>
          </div>
        </div>

        {/* Right card */}
        <div className="hidden lg:block animate-[fadeLeft_0.9s_0.2s_ease_both]">
          <div className="bg-white/[0.07] border border-white/[0.13] rounded-2xl p-[2.2rem] backdrop-blur-[10px]">
            {/* Logo row */}
            <div className="flex items-center gap-4 pb-[1.4rem] mb-[1.4rem] border-b border-white/10">
              <SfuLogo className="w-[68px] h-[68px]" />
              <div>
                <div className="font-serif text-[1.1rem] font-bold text-white">
                  Sportfreunde Urlau
                </div>
                <div className="text-[0.67rem] tracking-[0.12em] uppercase text-[#f0c060] mt-[3px]">
                  e.V. · Gegründet 1921 · Allgäu
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
              <p className="text-[#f0dde0] text-[0.87rem] leading-[1.6] italic">
                „Wir animieren Dich zu sportlichen Aktivitäten und freuen uns
                über jedes neue Mitglied."
              </p>
              <cite className="block mt-1.5 text-[#f0c060] text-[0.73rem] not-italic font-semibold">
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
