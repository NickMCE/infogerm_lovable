import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Monitor, MessageSquare, Smartphone, Palette } from "lucide-react";

const projects = [
  {
    title: "Website Development",
    description: "Modern responsive websites built with React and Next.js",
    icon: Monitor},
  {
    title: "Chatbot Development",
    description: "AI-powered chatbots for customer service and automation",
    icon: MessageSquare
  },
  {
    title: "App Development",
    description: "Cross-platform mobile applications for iOS and Android",
    icon: Smartphone  },
  {
    title: "UI/UX Designing",
    description: "User-centered design solutions for digital products",
    icon: Palette  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered to clients worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-scale h-full">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                {/* <CardContent>
                  <img
                    src={`https://source.unsplash.com/${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardContent> */}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;