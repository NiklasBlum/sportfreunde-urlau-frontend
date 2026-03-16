import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import AbteilungenSection from "@/components/organisms/AbteilungenSection";
import TermineSection from "@/components/organisms/TermineSection";
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

        <TermineSection />

        <NewsSection />
      </main>

      <Footer />
    </>
  );
}
