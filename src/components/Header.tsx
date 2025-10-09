import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary shadow-md transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1
            className={`font-bold text-primary-foreground transition-all duration-300 ${
              isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            }`}
          >
            Raidoo
          </h1>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-all duration-200 hover:scale-105"
          >
            Home
          </a>
          <a 
            href="#what-we-offer" 
            onClick={(e) => { e.preventDefault(); scrollToSection('what-we-offer'); }}
            className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-all duration-200 hover:scale-105"
          >
            What We Offer
          </a>
          <a 
            href="#mission" 
            onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}
            className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-all duration-200 hover:scale-105"
          >
            Our Mission
          </a>
          <a 
            href="#vision" 
            onClick={(e) => { e.preventDefault(); scrollToSection('vision'); }}
            className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-all duration-200 hover:scale-105"
          >
            Our Vision
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-all duration-200 hover:scale-105"
          >
            About Us
          </a>
          <Button 
            onClick={() => scrollToSection('waitlist')}
            variant="secondary"
            size={isScrolled ? "default" : "lg"}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold rounded-full px-6 md:px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Join the Waitlist
          </Button>
        </nav>

        {/* Mobile Button */}
        <Button 
          onClick={() => scrollToSection('waitlist')}
          variant="secondary"
          size={isScrolled ? "sm" : "default"}
          className="lg:hidden bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold rounded-full px-4 md:px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;
