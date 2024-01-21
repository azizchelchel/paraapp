import { Seo } from "@/ui/components/seo/seo";
import { RiSendPlaneFill } from "react-icons/ri";
import Navigation from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";
export default function Home() {
  let deltaPlaneIcon = <RiSendPlaneFill />;
  return (
    <>
      <Seo title="Design System" description="description..." />
      <Navigation />
      <Footer />
    </>
  );
}
