import { Eye } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image - Left side */}
          <div className="animate-slide-up order-2 md:order-1">
            <div className="w-full h-80 bg-accent/10 rounded-3xl flex items-center justify-center">
              <Eye className="w-32 h-32 text-accent/30" />
            </div>
          </div>
          
          {/* Text Content - Right side */}
          <div className="space-y-6 animate-slide-up animate-delay-200 order-1 md:order-2">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become Pakistan's most trusted and innovative ride-sharing platform, setting new standards for safety, reliability, and customer satisfaction while fostering economic opportunities for thousands of drivers nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
