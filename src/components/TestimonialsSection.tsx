import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "Super easy from WhatsApp to delivery. Kit quality surprised me!", name: "A. M.", location: "London" },
  { quote: "Fast replies, clear price, tracking sent. Would buy again.", name: "J. K.", location: "Dublin" },
  { quote: "Apple Pay was smooth via Ramp. Shirt fits great.", name: "S. R.", location: "Berlin" },
  { quote: "Love the name & number option. Came in ~2 weeks.", name: "P. T.", location: "Toronto" },
];

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 star rating">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 text-primary" fill="currentColor" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="section py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">What customers say</h2>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((t, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full hover-raise">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <Stars />
                  <p className="mt-3 text-sm text-muted-foreground">“{t.quote}”</p>
                  <p className="mt-4 font-medium">{t.name} · {t.location}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center gap-2 mt-4 justify-center">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;
