import HeroSection from "@/components/organisms/HeroSection";
import AbteilungenSection from "@/components/organisms/AbteilungenSection";
import EventSection from "@/components/organisms/EventSection";
import NewsSection from "@/components/organisms/NewsSection";
import WelcomeSection from "@/components/organisms/WelcomeSection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />

      <WelcomeSection />

      <AbteilungenSection />

      <EventSection limit={6} />

      <NewsSection />
    </main>
  );
}
