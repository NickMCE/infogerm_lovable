import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Brain, Code, Terminal, BookOpen } from "lucide-react";

const bootcamps = [
  {
    title: "AI Bootcamp",
    duration: "4 weeks",
    description: "Learn the basics of Artificial Intelligence, including neural networks and AI model creation.",
    projects: ["Chatbots", "Sentiment Analysis Systems"],
    icon: Brain,
  },
  {
    title: "Machine Learning Bootcamp",
    duration: "4 weeks",
    description: "Dive into machine learning with TensorFlow, Scikit-learn, and Keras.",
    projects: ["Predictive Analytics", "Recommender Systems"],
    icon: Terminal,
  },
  {
    title: "Full Stack Development",
    duration: "6 weeks",
    description: "Learn to build scalable web applications using MERN or MEAN stacks.",
    projects: ["Job Boards", "Collaboration Tools"],
    icon: Code,
  },
  {
    title: "Programming Languages",
    duration: "3 weeks",
    description: "Get hands-on experience with Python, JavaScript, and Java.",
    projects: ["Calculators", "Basic Games"],
    icon: BookOpen,
  },
];

const Bootcamps = () => {
  return (
    <section id="bootcamps" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            Bootcamps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master Cutting-Edge Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intensive, hands-on bootcamps designed to accelerate your tech career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bootcamps.map((bootcamp, index) => (
            <motion.div
              key={bootcamp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover-scale">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <bootcamp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{bootcamp.title}</h3>
                    <p className="text-sm text-primary">{bootcamp.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{bootcamp.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Projects you'll build:</p>
                  <div className="flex flex-wrap gap-2">
                    {bootcamp.projects.map((project) => (
                      <span
                        key={project}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full hover-scale">Enroll Now</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bootcamps;