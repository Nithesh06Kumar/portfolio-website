import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { ResumeSection } from "../../utils/constant";
interface StepperProp {
  headerIcon: any;
  title: string;
  componentName: ResumeSection;
  data: Array<any>;
}

const Stepper: React.FC<StepperProp> = ({
  componentName,
  headerIcon,
  title,
  data,
}) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="p-3  rounded-lg bg-color-4">
          {headerIcon ? (
            headerIcon
          ) : (
            <IoBookOutline color="#ffbf00" size={20} />
          )}
        </div>
        <h2 className="text-3xl font-semibold dark:text-themecolor-white">
          {title}
        </h2>
      </div>
      <div className="relative w-[1.5px] bg-color-4 h-[50px] ml-[21px] dark:bg-themecolor-gold" />
      {/* stepper section */}

      {data.map((element: any, index: number) => (
        <section className="ml-[21px]" key={element?.title}>
          <div className="h-[100%] ">
            <div className="w-3 h-3 rounded-full bg-color-4 -ml-[5px] -mt-[1px] dark:bg-themecolor-gold shadow-[0_0_4px_4px_rgba(255,191,0)] dark:shadow-[0_0_4px_4px_rgba(255,255,255,0.6)]"></div>
            <div className="flex ">
              {data?.length !== index + 1 && (
                <div className="flex relative w-[1.5px] bg-color-4 -mt-[1px] dark:bg-themecolor-gold" />
              )}
              <div
                className={`ml-10 -mt-[22px] w-full pb-6 ${
                  data?.length === index + 1 && "ml-11"
                }`}
              >
                <p className="text-xl capitalize font-semibold flex dark:text-themecolor-white mb-[2px]">
                  {element?.title}
                </p>
                {componentName === ResumeSection.Experience && (
                  <p className="text-lg capitalize font-[430] dark:text-themecolor-white mb-[4px]">
                    {element?.company}
                  </p>
                )}
                <p className="text-lg uppercase text-color-5 font-normal flex mb-[6px]">
                  {element?.subtitle}
                </p>
                <p className="text-base dark:text-themecolor-white mb-[2px]">
                  {element?.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Stepper;
