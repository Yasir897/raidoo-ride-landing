import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToQR = () => {
    const qrSection = document.getElementById('qr-section');
    qrSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            Raidoo
          </h1>
        </div>
        
        <Button 
          onClick={scrollToQR}
          variant="secondary"
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold rounded-full px-6 md:px-8 transition-all hover:scale-105"
        >
          Get the App
        </Button>
      </div>
    </header>
  );
};

export default Header;
