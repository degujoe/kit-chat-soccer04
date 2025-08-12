import { Button } from "@/components/ui/button";

interface StickyCtaBarProps {
  whatsappLink: string;
}

const StickyCtaBar = ({ whatsappLink }: StickyCtaBarProps) => {
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden z-50 border-t bg-background/95 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="section py-3 flex items-center justify-between gap-3">
        <span className="font-medium">Open WhatsApp Store</span>
        <Button asChild size="sm" className="hover-raise">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp Store (Sticky)">
            Open
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCtaBar;
