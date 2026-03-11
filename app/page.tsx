import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import WelcomeSection from "@/components/organisms/WelcomeSection";
import AbteilungenSection from "@/components/organisms/AbteilungenSection";
import TermineSection from "@/components/organisms/TermineSection";
import NewsSection from "@/components/organisms/NewsSection";
import Footer from "@/components/organisms/Footer";

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
