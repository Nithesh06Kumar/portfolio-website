import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { skills } from "./skillsData";
const Skills: React.FC = () => {
  return (
    <div id="skill-section">
      <h2 className="text-3xl font-semibold mb-6 mt-4 text-center flex flex-col items-center dark:text-themecolor-white">
        Skills
        <div className="w-[80px] h-[3px] bg-themecolor-gold rounded-full" />
      </h2>
      {skills.map((item) => {
        return (
          <ProgressBar percentage={`${item.percentage}%`} title={item.name} />
        );
      })}
    </div>
  );
};

export default Skills;
