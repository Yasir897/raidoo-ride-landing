import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RidersDrivers from "@/components/RidersDrivers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <RidersDrivers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
