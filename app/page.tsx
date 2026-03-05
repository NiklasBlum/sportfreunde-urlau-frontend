import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import WelcomeSection from "@/components/organisms/WelcomeSection";
import AbteilungenSection from "@/components/organisms/AbteilungenSection";
import TermineSection from "@/components/organisms/TermineSection";
import VorstandSection from "@/components/organisms/VorstandSection";
import NewsSection from "@/components/organisms/NewsSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <WelcomeSection />
        <AbteilungenSection />
        <TermineSection />
        <VorstandSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
