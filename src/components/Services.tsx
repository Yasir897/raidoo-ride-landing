import { Zap, DollarSign, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    title: "Fast & Reliable Rides",
    description: "Get matched with nearby drivers in seconds. Reach your destination quickly and safely.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Transparent pricing with no hidden charges. Travel smart without breaking the bank.",
  },
  {
    icon: Shield,
    title: "Safe & Secure Service",
    description: "Verified drivers, GPS tracking, and 24/7 support for your peace of mind.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          What We Offer?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience the convenience and reliability that makes Raidoo the smart choice for your daily travel
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-border bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
