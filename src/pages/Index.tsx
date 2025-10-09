import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import AnimatedDivider from "@/components/AnimatedDivider";
import WhatWeOffer from "@/components/Services";
import RidersDrivers from "@/components/RidersDrivers";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import ComingSoon from "@/components/ComingSoon";
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
        <AboutUs />
        <AnimatedDivider />
        <WhatWeOffer />
        <AnimatedDivider />
        <RidersDrivers />
        <AnimatedDivider />
        <Mission />
        <AnimatedDivider />
        <Vision />
        <AnimatedDivider />
        <ComingSoon />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
