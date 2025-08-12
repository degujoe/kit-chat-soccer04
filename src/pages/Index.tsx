import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SiteFooter from "@/components/SiteFooter";
import StickyCtaBar from "@/components/StickyCtaBar";

const WHATSAPP_LINK =
  "https://wa.me/447476031168?text=Hi%20I%20want%20to%20browse%20kits";

const Index = () => {
  return (
    <div>
      <SiteHeader whatsappLink={WHATSAPP_LINK} />
      <main>
        <HeroSection whatsappLink={WHATSAPP_LINK} />
        <StepsSection whatsappLink={WHATSAPP_LINK} />
        <TrustSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <SiteFooter whatsappLink={WHATSAPP_LINK} />
      <StickyCtaBar whatsappLink={WHATSAPP_LINK} />
    </div>
  );
};

export default Index;
