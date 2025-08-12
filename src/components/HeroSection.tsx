import heroKit from "@/assets/hero-kit.jpg";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  whatsappLink: string;
}

const HeroSection = ({ whatsappLink }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero pointer-events-none" aria-hidden="true" />
      <div className="section relative grid gap-8 md:grid-cols-2 items-center py-12 sm:py-16 lg:py-20">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Soccer04 football kits made simple.
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl mb-6">
            Order on WhatsApp, pay securely, free tracked shipping, ~14-day delivery.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="hover-raise">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp Store">
                Open WhatsApp Store
              </a>
            </Button>
            <a href="#how-it-works" className="text-primary underline-offset-4 hover:underline" aria-label="How it works">
              How it works
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroKit}
            alt="Premium football kit on clean background"
            className="w-full rounded-lg shadow-elevated"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
