import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import VorstandSection from "@/components/organisms/VorstandSection";

export default function VereinPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <VorstandSection />
        {/* Weitere Vereins-Inhalte (Termine, Satzung, Downloads, Chronik) können hier ergänzt werden */}
      </main>
      <Footer />
    </>
  );
}
