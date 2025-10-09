import { Target } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To revolutionize urban transportation by creating a seamless, affordable, and safe mobility platform that connects communities, empowers drivers, and transforms the way people travel across Pakistan.
            </p>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up animate-delay-200">
            <div className="w-full h-80 bg-primary/10 rounded-3xl flex items-center justify-center">
              <Target className="w-32 h-32 text-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
