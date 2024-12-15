import { useEffect } from "react";
import Hero from "@/components/Hero";
import Internships from "@/components/Internships";
import Bootcamps from "@/components/Bootcamps";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Internships />
      <Bootcamps />
      <About />
      <Footer />
    </div>
  );
};

export default Index;