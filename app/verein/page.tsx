import VorstandSection from "@/components/organisms/VorstandSection";
import AusschussSection from "@/components/organisms/AusschussSection";
import VereinSection from "@/components/organisms/VereinSection";

export default function VereinPage() {
  return (
    <main id="main-content">
      <VereinSection />
      <VorstandSection />
      <AusschussSection />
    </main>
  );
}
