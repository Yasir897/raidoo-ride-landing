import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import phoneMockup from "@/assets/phone-mockup.png";

const Hero = () => {
  const scrollToQR = () => {
    const qrSection = document.getElementById('qr-section');
    qrSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
      </div>
      
      {/* Content */}
      <div className="w-full px-4 py-20 relative z-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Ride with Comfort and Ease
                </span>
                <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
              </h2>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
              <span className="text-primary font-semibold">Raidoo</span> – your trusted ride partner for daily travel in Pakistan. 
              Book rides, connect with drivers, and enjoy convenience every day.
            </p>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="flex justify-end items-start animate-fade-in animate-delay-200 -mt-12 lg:-mt-20">
            {/* Phone Mockup */}
            <div className="relative animate-float">
              <img 
                src={phoneMockup}
                alt="Raidoo App Interface"
                className="w-48 md:w-64 lg:w-80 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
