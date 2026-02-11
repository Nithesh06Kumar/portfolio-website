import { images } from "../../../assets";
import { motion } from "framer-motion";
const Profilepicture = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="md:flex-shrink-0 mx-auto md-mx-0 order-3 h-[40%] w-[80%] md:w-[38%] lg:w-[350px]  md:h-[75%] bg-color-3 dark:bg-themecolor-sky rounded-full overflow-hidden drop-shadow-[0_20px_25px_rgba(1,0,0,0.6)] dark:drop-shadow-[0_15px_35px_rgba(255,255,255,0.6)] hover:scale-110 transition-all delay-50 "
    >
      <img
        src={images.profileTransparent}
        alt="profile image"
        className="relative -top-8 left-3"
      />
    </motion.div>
  );
};

export default Profilepicture;
