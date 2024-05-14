import React from "react";
import useWindowDimensions from "../../hooks/useWindowDiamention";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaHandPointDown } from "react-icons/fa";
const Portfolio: React.FC = () => {
  const { height } = useWindowDimensions();
  return (
    <div
      className="flex flex-col items-center"
      style={{ height: height - 150 }}
    >
      <h2 className="text-3xl font-semibold mb-6 mt-4 text-center flex flex-col items-center dark:text-themecolor-white">
        Portfolio
        <div className="w-[120px] h-[3px] bg-themecolor-gold rounded-full" />
      </h2>
      <p className="flex items-end dark:text-themecolor-white">
        Please visit my GitHub{" "}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeIn",
            duration: 1,
          }}
        >
          <FaHandPointDown
            size={20}
            className="mx-1  dark:text-themecolor-white"
          />
        </motion.div>
        page for more details.
      </p>
      <div className="flex justify-center mt-10">
        <motion.div
          initial={{
            scale: 0.9,
            boxShadow: "0px 0px 0px 0px rgba(252, 186, 3,0.9)",
          }}
          animate={{
            scale: 1,
            boxShadow: "0px 0px 30px 8px rgba(252, 186, 3,0.9)",
            transition: {
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              duration: 1,
            },
          }}
          className=" rounded-full"
        >
          <a
            href="https://github.com/Nithesh06Kumar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={50} className="dark:text-themecolor-white" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
