import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import WelcomeSection from "@/components/organisms/WelcomeSection";
import AbteilungenSection from "@/components/organisms/AbteilungenSection";
import TermineSection from "@/components/organisms/TermineSection";
import NewsSection from "@/components/organisms/NewsSection";
import Footer from "@/components/organisms/Footer";
import Section from "@/components/atoms/Section";
import SectionLabel from "@/components/atoms/SectionLabel";
import VorstandCard from "@/components/molecules/VorstandCard";
import { vorstand } from "@/components/organisms/VorstandSection";

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
