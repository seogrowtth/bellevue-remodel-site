import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            BLC Remodeling
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              HOME
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              SERVICES
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              ABOUT US
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              CONTACT US
            </a>
          </div>
          <Button className="hidden md:block">
            Get Free Quote
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;