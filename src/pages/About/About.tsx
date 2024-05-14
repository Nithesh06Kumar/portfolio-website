import React from "react";
import { images } from "../../assets";
import Button from "../../components/Button/Button";
import { MdOutlineFileDownload } from "react-icons/md";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="-mt-24 flex flex-col pb-16 dark:bg-themecolor-black"
    >
      <div className="border-t-2 mb-8" />
      <h2 className="text-3xl  font-semibold text-center mb-10 dark:text-themecolor-white">
        About Me
      </h2>
      <div className="flex justify-between space-x-4 items-center px-12 md:px-0">
        <img
          src={images.mobiledev}
          alt="mobile-dev"
          className="hidden md:flex"
          width={320}
          height={420}
        />
        <p className="text-lg text-center md:text-left dark:text-themecolor-white">
          As a seasoned software developer with three years of industry
          experience, I specialize in crafting user-centric mobile applications
          using React Native and dynamic websites with ReactJS. Passionate about
          creating seamless user experiences, I prioritize functionality and
          aesthetics in my work. I thrive on challenges and constantly seek to
          expand my skill set by staying updated with emerging technologies and
          industry trends. Beyond coding, I find joy in traveling, which
          inspires my creativity and fuels my curiosity for new experiences.
        </p>
      </div>
      <div className="flex md:hidden justify-between px-16 mt-10 space-x-2">
        <div className="block text-center">
          <h2 className="text-3xl font-semibold dark:text-themecolor-white">
            3+
          </h2>
          <p className="dark:text-themecolor-white">Years Experience</p>
        </div>
        <div className="block text-center">
          <h2 className="text-3xl font-semibold dark:text-themecolor-white">
            2+
          </h2>
          <p className="dark:text-themecolor-white">Completed Certifications</p>
        </div>
        <div className="block text-center">
          <h2 className="text-3xl font-semibold dark:text-themecolor-white">
            1+
          </h2>
          <p className="dark:text-themecolor-white">Companies Worked</p>
        </div>
      </div>
      <div className="mx-auto mt-8 ">
        <Button onClick={() => {}} className="flex items-center">
          Download Resume
          <MdOutlineFileDownload className="ml-2" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default About;
