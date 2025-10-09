import { Target } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide safe, reliable, and affordable ride-sharing services that empower communities 
              across Pakistan. We're dedicated to creating opportunities for drivers while ensuring 
              riders experience comfort and convenience in every journey.
            </p>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up animate-delay-200">
            <div className="bg-primary/5 rounded-3xl p-8 flex items-center justify-center h-64">
              <Target className="w-32 h-32 text-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
