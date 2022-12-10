import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/Tahdi-Islam.jpg";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 text-xl font-semibold shadow-lg max-w-screen-2xl mx-auto">
      <div className="flex w-1/4 items-center">
        <img className="h-16 w-16 rounded-full" src={photo} alt="" />
        <h2 className="ml-4">TAHDI ISLAM</h2>
      </div>
      <div className="relative">
        <ul className="md:flex ml-6">
          <li className="ml-12 hover:text-green-500">
            <a href="/">HOME</a>
          </li>
          <li className="ml-12 hover:text-green-500">
            <a href="#about">ABOUT</a>
          </li>
          <li className="ml-12 hover:text-green-500">
            <a href="#projects">PROJECT</a>
          </li>
          <li className="ml-12 hover:text-green-500">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
