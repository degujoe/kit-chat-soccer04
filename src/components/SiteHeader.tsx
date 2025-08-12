import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  whatsappLink: string;
}

const SiteHeader = ({ whatsappLink }: SiteHeaderProps) => {
  return (
    <header className="border-b bg-background/80 supports-[backdrop-filter]:backdrop-blur-md sticky top-0 z-40">
      <nav className={cn("section flex items-center justify-between h-16")}
        aria-label="Main">
        <a href="#" className="font-semibold text-lg tracking-tight" aria-label="Soccer04 Home">
          Soccer04
        </a>
        <Button asChild className="hover-raise">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp Store">
            Open WhatsApp Store
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default SiteHeader;
