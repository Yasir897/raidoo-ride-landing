import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import AnimatedDivider from "@/components/AnimatedDivider";
import Services from "@/components/Services";
import RidersDrivers from "@/components/RidersDrivers";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <AnimatedDivider />
        <Services />
        <AnimatedDivider />
        <RidersDrivers />
        <AnimatedDivider />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
