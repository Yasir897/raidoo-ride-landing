const ComingSoon = () => {
  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Coming Soon
            </h2>
            <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-full animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground">
            We're working hard to bring Raidoo to life. Join our waitlist to be the first to know when we launch!
          </p>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground/80">
              Stay tuned for updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
