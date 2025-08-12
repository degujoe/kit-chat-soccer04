import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="section py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">FAQ</h2>
      </div>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto text-left">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is payment safe?</AccordionTrigger>
          <AccordionContent>
            Yes. Ramp handles Apple Pay/Google Pay/Card. We never see or store card details.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long is delivery?</AccordionTrigger>
          <AccordionContent>
            Tracked shipping, usually ~14 days. Express options available on request.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I add name and number?</AccordionTrigger>
          <AccordionContent>
            Yes—optional. We confirm spelling before payment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What if something goes wrong?</AccordionTrigger>
          <AccordionContent>
            You’ll have chat records, a transaction hash linked to your order, and full tracking. We’ll fix issues or refund.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do you ship worldwide?</AccordionTrigger>
          <AccordionContent>
            Yes, most countries. Message us on WhatsApp for specifics.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
