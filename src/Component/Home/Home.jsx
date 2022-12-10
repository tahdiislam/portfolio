import React from "react";
import Button from "../Button/Button";

const Home = () => {
  return (
    <div
      className="bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%2380877f' fill-opacity='0.11'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="w-1/2 mx-auto my-48 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-10">HEY, I'M TAHDI ISLAM</h1>
        <p className="text-xl mb-10 text-center">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <Button>PROJECTS</Button>
      </div>
    </div>
  );
};

export default Home;
