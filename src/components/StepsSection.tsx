import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import openWhatsapp from "@/assets/step-open-whatsapp.png";
import browseStock from "@/assets/step-browse-stock.png";
import nameNumber from "@/assets/step-name-number.png";
import confirmTotal from "@/assets/step-confirm-total.png";
import securePay from "@/assets/step-secure-pay.png";
import photoTracking from "@/assets/step-photo-tracking.png";

interface StepsSectionProps {
  whatsappLink: string;
}

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  { id: 1, title: "Open WhatsApp", description: "Tap to chat and browse our latest stock.", image: openWhatsapp },
  { id: 2, title: "Request kits", description: "Send screenshots of kits you want and we'll have them made for you.", image: browseStock },
  { id: 3, title: "Add name & number (optional)", description: "Personalize your shirt. We confirm spelling before payment.", image: nameNumber },
  { id: 4, title: "Confirm total", description: "We send a clear all-in price including free tracked shipping.", image: confirmTotal },
  { id: 5, title: "Pay securely", description: "Apple Pay / Google Pay / Card via Ramp. We never handle card data.", image: securePay },
  { id: 6, title: "Photo & tracking", description: "You get a packing photo, the transaction hash stored with your order, and tracking (~14 days).", image: photoTracking },
];

const StepTile = ({ step }: { step: Step }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <img
            src={step.image}
            alt={`${step.title} illustration`}
            className="w-16 h-16 rounded-md object-cover"
            loading="lazy"
          />
          <div>
            <h3 className="font-semibold">{step.title}</h3>
            <div className="mt-1 text-sm text-muted-foreground">
              <p>{step.description}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StepsSection = ({ whatsappLink }: StepsSectionProps) => {
  return (
    <section id="how-it-works" className="section py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">How it works</h2>
        <p className="text-muted-foreground mt-2">Six quick steps from chat to delivery</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((s) => (
          <StepTile key={s.id} step={s} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild size="lg" className="hover-raise">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp Store (How it works)">
            Open WhatsApp Store
          </a>
        </Button>
      </div>
    </section>
  );
};

export default StepsSection;