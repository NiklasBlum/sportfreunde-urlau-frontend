import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import AbteilungenSection from "@/components/organisms/AbteilungenSection";
import EventSection from "@/components/organisms/EventSection";
import NewsSection from "@/components/organisms/NewsSection";
import Footer from "@/components/organisms/Footer";
import WelcomeSection from "@/components/organisms/WelcomeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />

        <WelcomeSection />

        <AbteilungenSection />

        <EventSection />

        {/* TODO: maybe implement later */}
        {/* <NewsSection /> */}
      </main>

      <Footer />
    </>
  );
}
