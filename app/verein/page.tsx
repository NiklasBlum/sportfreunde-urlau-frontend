import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import VorstandSection from "@/components/organisms/VorstandSection";
import AusschussSection from "@/components/organisms/AusschussSection";

export default function VereinPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <VorstandSection />
        <AusschussSection />
      </main>
      <Footer />
    </>
  );
}
