import { Eye } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image (on left for desktop) */}
          <div className="animate-slide-up order-2 md:order-1">
            <div className="bg-accent/5 rounded-3xl p-8 flex items-center justify-center h-64">
              <Eye className="w-32 h-32 text-primary/20" />
            </div>
          </div>
          
          {/* Text Content (on right for desktop) */}
          <div className="space-y-4 animate-slide-up animate-delay-200 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become Pakistan's most trusted mobility platform, leading the way in innovation, 
              sustainability, and customer satisfaction. We envision a future where every Pakistani 
              has access to smart, efficient transportation at their fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
