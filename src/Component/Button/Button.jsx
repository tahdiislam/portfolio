import React from "react";

const Button = ({ children, style }) => {
  return (
    <button
      className={`bg-green-400 hover:bg-green-500 py-4 px-16 rounded-md font-bold text-xl shadow-lg ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
