import { Button } from "@/components/ui/button";

interface SiteFooterProps {
  whatsappLink: string;
}

const SiteFooter = ({ whatsappLink }: SiteFooterProps) => {
  return (
    <footer className="border-t mt-12">
      <div className="section py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-semibold text-lg">Ready?</h3>
            <p className="text-muted-foreground">Open our WhatsApp store and start browsing.</p>
          </div>
          <Button asChild size="lg" className="hover-raise">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp Store (Footer)">
              Open WhatsApp Store
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8 max-w-3xl">
          Soccer04 makes ordering football kits simple: WhatsApp browsing, secure Ramp payments, free tracked shipping, and ~14-day delivery. If you’re looking for soccer04 style convenience, you’re in the right place.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
          <a href="#" className="hover:underline underline-offset-4">Shipping Info</a>
          <a href="#" className="hover:underline underline-offset-4">Returns</a>
          <a href="#" className="hover:underline underline-offset-4">Privacy</a>
          <a href="#" className="hover:underline underline-offset-4">Contact</a>
        </div>

        <div className="mt-6 text-xs text-muted-foreground">© Soccer04. soccer04.xyz</div>
      </div>
    </footer>
  );
};

export default SiteFooter;
