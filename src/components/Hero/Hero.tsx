import React from "react";
import { images } from "../../assets";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { MdAddIcCall } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" md:flex md:justify-between md:w-full sm:ml-0">
      <motion.div
        initial={{ y: 0, x: 300 }}
        animate={{
          y: 30,
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            duration: 1,
          },
        }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 1,
        }}
        className="md:flex-shrink-0 mx-auto md-mx-0 order-3 h-[40%] w-[80%] md:w-[38%] lg:w-[350px]  md:h-[65%] bg-color-3 dark:bg-themecolor-sky rounded-[65%/25%_35%_90%_90%] overflow-hidden drop-shadow-[0_20px_25px_rgba(1,0,0,0.6)] dark:drop-shadow-[0_15px_35px_rgba(255,255,255,0.6)] hover:scale-110 transition-all delay-50 -rotate-[0.6deg]"
      >
        <img
          src={images.profileTransparent}
          alt="profile"
          className="relative -top-8 -left-1"
        />
      </motion.div>
      <div className=" order-2 mt-12 text-center md:text-left md:ml-8 lg:mr-6">
        <h2 className="text-5xl font-semibold text-wrap dark:text-white">
          Hi, I'am
        </h2>
        <h2 className="text-5xl font-semibold text-wrap mt-2 dark:text-white">
          Nithesh Kumar
        </h2>
        <h3 className="text-base mt-3 px-3 py-2 rounded-full bg-slate-300 inline-block dark:text-white dark:bg-themecolor-skydark">
          Software Developer
        </h3>
        <p className="text-base lg:text-lg mt-4 text-wrap w-[400px] text-center md:text-left dark:text-white">
          A passionate software developer, turning lines of code into impactful
          solutions with precision and innovation.
        </p>
      </div>

      <div className="flex space-x-5 mt-[40px] justify-center order-1 md:block md:content-start md:space-x-0 md:mt-[90px] dark:border-[1px] md:dark:border-0 md:dark:p-0 dark:p-2 dark:rounded-full dark:border-themecolor-white">
        <a
          href="https://x.com/Nithesh37989222"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter
            size="25px"
            className="hover:scale-110  dark:text-white md:mb-3"
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=nitheshkumar0612@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail
            size="25px"
            className="hover:scale-110 dark:text-white md:mb-3"
          />
        </a>
        <a
          href="https://github.com/Nithesh06Kumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size="25px"
            className="hover:scale-110 dark:text-white md:mb-3"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nithesh-kumar06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size="25px"
            className="hover:scale-110 dark:text-white md:mb-3"
          />
        </a>
        <a href="">
          <MdAddIcCall
            size="25px"
            className="hover:scale-110 dark:text-white"
            onClick={() => window.open(`tel:${+919895086660}`, "_self")}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
