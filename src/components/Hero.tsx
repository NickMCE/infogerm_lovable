import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Brain, Network, Laptop } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : prev));
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 animate-float">
          <Code size={40} className="text-primary/20" />
        </div>
        <div className="absolute top-40 right-40 animate-float" style={{ animationDelay: "1s" }}>
          <Brain size={40} className="text-primary/20" />
        </div>
        <div className="absolute bottom-40 left-40 animate-float" style={{ animationDelay: "1.5s" }}>
          <Network size={40} className="text-primary/20" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: "2s" }}>
          <Laptop size={40} className="text-primary/20" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-6">
            Welcome to InfoGerm
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Learn, Build, and Grow with InfoGerm
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Internships, Bootcamps, and IT Solutions for Tomorrow's Leaders
        </motion.p>

        <motion.div
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {count}+ Students Enrolled
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="hover-scale"
            onClick={() => document.getElementById("internships")?.scrollIntoView({ behavior: "smooth" })}
          >
            Browse Internships
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hover-scale"
            onClick={() => document.getElementById("bootcamps")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Bootcamps
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;