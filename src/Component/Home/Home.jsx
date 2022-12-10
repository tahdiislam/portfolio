import React from "react";
import Button from "../Button/Button";

const Home = () => {
  return (
    <div
      className="bg-white py-12 px-4 md:py-48"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%2380877f' fill-opacity='0.11'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "auto"
      }}
    >
      <div className="w-full md:w-1/2 mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-10 text-center">HEY, I'M TAHDI ISLAM_</h1>
        <p className="text-xl mb-10 text-center">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <a target="_blank" href="https://drive.google.com/file/d/1z5teT-C-_e8VP0rCh_cA61xK9pvc_GzW/view?usp=share_link">
            <Button>
                RESUME
            </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
