import React from "react";
import Stepper from "../../components/Stepper/Stepper";
import { IoBookOutline } from "react-icons/io5";
import { ResumeSection } from "../../utils/constant";
import { education, experience } from "./data";
import Divider from "../../components/Divider/Divider";
import { FaLaptopCode } from "react-icons/fa6";
import Skills from "../../components/Skills/Skills";

const Resume: React.FC = () => {
  return (
    <div className="px-5 md:px-0">
      <h2 className="text-3xl font-semibold mb-6 mt-4 text-center flex flex-col items-center dark:text-themecolor-white">
        Resume
        <div className="w-[120px] h-[3px] bg-themecolor-gold rounded-full" />
      </h2>
      <Stepper
        componentName={ResumeSection.Experience}
        title="Experience"
        headerIcon={<FaLaptopCode color="#ffbf00" size={20} />}
        data={experience}
      />
      <Divider />
      <Stepper
        componentName={ResumeSection.Education}
        title="Education"
        headerIcon={<IoBookOutline color="#ffbf00" size={20} />}
        data={education}
      />
      <Divider />
      <Skills />
      <div className="mb-8" />
    </div>
  );
};

export default Resume;
