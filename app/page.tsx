import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProjects from "./components/FeaturedProjects";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <FeaturedProjects />
      <CTASection />
      <Footer />
    </main>
  );
}
