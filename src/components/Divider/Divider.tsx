import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={`border-t-2 mb-8 ${className}`} />;
};

export default Divider;
