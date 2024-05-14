import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
const Skills: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 mt-4 text-center flex flex-col items-center dark:text-themecolor-white">
        Skills
        <div className="w-[80px] h-[3px] bg-themecolor-gold rounded-full" />
      </h2>
      <ProgressBar percentage={"90%"} title={"React Native"} />
      <ProgressBar percentage={"82%"} title={"React Js"} />
      <ProgressBar
        percentage={"75%"}
        title={"Redux, Routing And Other Libraries"}
      />
      <ProgressBar percentage={"70%"} title={"Material UI and Tailwind CSS"} />
      <ProgressBar percentage={"90%"} title={"Javascript"} />
    </>
  );
};

export default Skills;
