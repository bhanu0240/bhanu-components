// Loader.tsx
import React from "react";
import "./Loader.css";

interface LoaderProps {
  text: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <React.Fragment>
      <div className="text-animation">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="animated-char"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Loader;
