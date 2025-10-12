import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import phoneMockup from "@/assets/phone-mockup.png";

const Hero = () => {
  const scrollToQR = () => {
    const qrSection = document.getElementById('qr-section');
    qrSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-accent/30" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 relative">
                <span className="relative z-10">Ride with Comfort and Ease</span>
                <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
              </h2>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/95 max-w-xl leading-relaxed">
              Raidoo – your trusted ride partner for daily travel in Pakistan. 
              Book rides, connect with drivers, and enjoy convenience every day.
            </p>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="flex justify-end animate-fade-in animate-delay-200">
            {/* Phone Mockup */}
            <div className="relative animate-float">
              <img 
                src={phoneMockup}
                alt="Raidoo App Interface"
                className="w-64 md:w-80 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
