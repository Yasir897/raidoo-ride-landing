const ComingSoon = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground animate-pulse">
              Coming Soon
            </h2>
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Something exciting is on the way. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
