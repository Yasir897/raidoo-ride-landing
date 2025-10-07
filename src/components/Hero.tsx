import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToQR = () => {
    const qrSection = document.getElementById('qr-section');
    qrSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ride with Comfort and Ease
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Raidoo – your reliable partner for smarter travel in Pakistan. 
              Book rides, connect with drivers, and enjoy convenience every day.
            </p>
            <Button 
              onClick={scrollToQR}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg"
            >
              Get the App
            </Button>
          </div>
          
          {/* Right Content - QR Code Box */}
          <div className="flex justify-center lg:justify-end animate-fade-in animate-delay-400">
            <div id="qr-section" className="bg-card rounded-3xl p-8 shadow-2xl max-w-sm w-full text-center space-y-4">
              <h3 className="text-xl font-semibold text-card-foreground">
                Scan & Download the Raidoo App
              </h3>
              <div className="bg-background p-4 rounded-xl inline-block">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store" 
                  alt="Download Raidoo App QR Code"
                  className="w-48 h-48 mx-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Available on Google Play
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
