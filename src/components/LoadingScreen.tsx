import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <img
            src="/lovable-uploads/081bb799-d873-45d3-ba53-30b4653d2edc.png"
            alt="InfoGerm Logo"
            className="w-32 h-32 mx-auto"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-bold"
        >
          INFOGERM
        </motion.h1>
      </div>
    </div>
  );
};

export default LoadingScreen;