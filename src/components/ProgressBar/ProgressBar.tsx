import { motion } from "framer-motion";
import React from "react";

interface ProgressProp {
  percentage: string;
  title?: string;
}

const ProgressBar: React.FC<ProgressProp> = ({
  percentage = "100%",
  title,
}) => {
  return (
    <div>
      {title && (
        <h2 className="text-lg font-medium dark:text-themecolor-white mb-2">
          {title}
        </h2>
      )}
      <div className="pb-5">
        <div className="bg-color-4 relative h-5 w-full rounded-2xl">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: percentage }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={`bg-color-5 absolute top-0 left-0 h-full rounded-2xl text-xs flex items-center justify-center`}
            style={{ width: percentage }}
          >
            {percentage}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
