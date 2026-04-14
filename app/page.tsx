import HeroSection from "@/components/organisms/HeroSection";
import AbteilungenSection from "@/components/organisms/AbteilungenSection";
import EventSection from "@/components/organisms/EventSection";
import WelcomeSection from "@/components/organisms/WelcomeSection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />

      <WelcomeSection />

      <AbteilungenSection />

      <EventSection />

      {/* TODO: maybe implement later */}
      {/* <NewsSection /> */}
    </main>
  );
}
