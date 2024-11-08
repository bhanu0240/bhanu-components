// Loader.tsx
import React from "react";
import "./Loader.css";

interface LoaderProps {
  text: string;
  className: string;
  color: string;
}

const Loader: React.FC<LoaderProps> = ({ text, className, color }) => {
  return (
    <React.Fragment>
      <div
        className={className ? "text-animation" + className : "text-animation"}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="animated-char"
            style={{ animationDelay: `${index * 0.1}s`, color: color }}
          >
            {char}
          </span>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Loader;
