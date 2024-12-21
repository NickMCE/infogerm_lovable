import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Internships from "@/components/Internships";
import Bootcamps from "@/components/Bootcamps";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Services />
      <Internships />
      <Bootcamps />
      <About />
      <Footer />
    </div>
  );
};

export default Index;