import React from "react";
import brackets from "../assets/svg/Brackets.tsx";

interface taglineProps {
  className?: string;
  children?: string;
}

const Tagline: React.FC<taglineProps> = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className} || ""`}>
      {brackets("left")}
      <div className="mx-3 text-n-3 ">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
