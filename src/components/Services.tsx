import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Layout, MessageSquare, BarChart, Database, Palette, Globe } from "lucide-react";

const services = [
  {
    title: "UI/UX Development",
    description: "Creating intuitive and engaging user interfaces",
    icon: Palette
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web application development",
    icon: Layout
  },
  {
    title: "Chatbot Development",
    description: "AI-powered conversational interfaces",
    icon: MessageSquare
  },
  {
    title: "Data Analytics",
    description: "Transforming data into actionable insights",
    icon: BarChart
  },
  {
    title: "Data Science",
    description: "Advanced analytics and machine learning solutions",
    icon: Database
  },
  {
    title: "Digital Marketing",
    description: "Strategic online marketing campaigns",
    icon: Globe
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services We Provide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your digital transformation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-scale h-full">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Professional consultation</li>
                    <li>Custom solutions</li>
                    <li>Ongoing support</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;