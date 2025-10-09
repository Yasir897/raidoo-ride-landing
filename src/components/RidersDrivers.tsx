import { Card, CardContent } from "@/components/ui/card";

const RidersDrivers = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* I want to Ride */}
          <Card className="group hover:shadow-2xl hover:bg-primary/5 transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-border hover:border-primary/50 animate-slide-up">
            <CardContent className="p-12 text-center space-y-4">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                🚗
              </div>
              <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                I want to Ride
              </h3>
              <p className="text-muted-foreground">
                Book your ride in seconds and travel with comfort
              </p>
            </CardContent>
          </Card>

          {/* I want to Drive */}
          <Card className="group hover:shadow-2xl hover:bg-accent/5 transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-border hover:border-accent/50 animate-slide-up animate-delay-200">
            <CardContent className="p-12 text-center space-y-4">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                🚘
              </div>
              <h3 className="text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                I want to Drive
              </h3>
              <p className="text-muted-foreground">
                Start earning on your own schedule with flexible hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RidersDrivers;
