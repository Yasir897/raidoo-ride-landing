import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-accent/20" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Intro Animation - Raidoo text with glow */}
          <div className="inline-block animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary relative">
              <span className="relative z-10">Raidoo</span>
              <div className="absolute -inset-6 bg-primary/20 blur-3xl -z-10 rounded-full animate-pulse" />
            </h1>
          </div>
          
          {/* Main Slogan */}
          <div className="animate-fade-in animate-delay-400">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              The Smarter Way to Move
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              Connecting riders and drivers with smarter, safer, and community-driven rides.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in animate-delay-600">
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
