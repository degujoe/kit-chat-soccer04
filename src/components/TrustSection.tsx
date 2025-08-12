import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Truck, Camera } from "lucide-react";

const Item = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <Card className="hover-raise">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-md bg-secondary text-secondary-foreground p-2">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TrustSection = () => {
  return (
    <section className="section py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why trust Soccer04</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Item icon={Truck} title="Free tracked shipping" description="Worldwide, typical delivery ~14 days." />
        <Item icon={ShieldCheck} title="Secure checkout" description="Payments handled by Ramp (Apple Pay / Google Pay / Card)." />
        <Item icon={Camera} title="Proof before dispatch" description="We send a photo of your order before it ships." />
      </div>
    </section>
  );
};

export default TrustSection;
