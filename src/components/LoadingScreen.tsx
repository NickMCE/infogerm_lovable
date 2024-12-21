import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* Rotating Logo */}
        <motion.div
          initial={{ scale: 5, opacity: 0, rotate: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-4"
        >
          <img
            src="/lovable-uploads/081bb799-d873-45d3-ba53-30b4653d2edc.png"
            alt="InfoGerm Logo"
            className="w-52 h-52 mx-auto"
          />
        </motion.div>

        {/* Fade-in/Fade-out Text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }} // Fade in and fade out
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl font-bold"
        >
          INFOGERM
        </motion.h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
