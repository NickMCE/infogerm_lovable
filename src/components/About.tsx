import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  {
    number: "100+",
    label: "Students Enrolled",
    icon: Users,
  },
  {
    number: "20+",
    label: "Successful Projects",
    icon: Briefcase,
  },
  {
    number: "15+",
    label: "Bootcamps Conducted",
    icon: GraduationCap,
  },
];

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose InfoGerm?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing high-quality education and practical experience in the tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-lg bg-secondary/30 hover-scale"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;