import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-border shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-primary leading-tight">
              Above & Beyond
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              Construction & Remodeling
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              SERVICES
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              ABOUT
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              CONTACT
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+12534567890" className="flex items-center text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="font-medium">(253) 456-7890</span>
              </a>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span className="text-xs">Gig Harbor, WA</span>
              </div>
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Free Estimate
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;