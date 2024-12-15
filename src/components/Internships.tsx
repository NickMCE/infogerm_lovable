import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const internships = [
  {
    title: "MERN Stack Development",
    duration: "12 weeks",
    description: "Master MongoDB, Express.js, React.js, and Node.js to build full-stack web applications.",
    tools: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "MEAN Stack Development",
    duration: "12 weeks",
    description: "Learn Angular for front-end, Node.js for server-side logic, and MongoDB for databases.",
    tools: ["MongoDB", "Express.js", "Angular", "Node.js"],
  },
  {
    title: "Node.js Development",
    duration: "8 weeks",
    description: "Focus solely on back-end development, building scalable REST APIs and managing databases.",
    tools: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "React.js Development",
    duration: "8 weeks",
    description: "Specialize in front-end development using React.js. Build modern web applications.",
    tools: ["React.js", "Redux", "TypeScript", "Tailwind CSS"],
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            Internships
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Real-World Skills with InfoGerm's Internships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our hands-on internship programs and gain practical experience in the latest technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover-scale">
                <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
                <p className="text-sm text-primary mb-4">{internship.duration}</p>
                <p className="text-muted-foreground mb-4">{internship.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {internship.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Button className="w-full hover-scale">Register Now</Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-lg bg-primary/5 text-center"
        >
          <p className="text-lg font-medium">
            Over 100+ students have already started their internship journey with InfoGerm.
            <br />
            What are you waiting for?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;