import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/Tahdi-Islam.jpg";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-4 text-xl font-semibold shadow-lg max-w-screen-2xl mx-auto">
      <div className="flex md:w-1/4 items-center">
        <img className="h-12 w-12 rounded-full" src={photo} alt="" />
        <h2 className="ml-6 text-2xl">TAHDI ISLAM</h2>
      </div>
      <div className="relative">
        <button onClick={() => setDropdown((e) => !e)} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ul className={`flex flex-col md:flex-row ml-6 absolute right-0 md:static md:mr-0 bg-white ${!dropdown ? "mr-[-999px]" : "mr-0"}`}>
          <li className="ml-12 hover:text-green-500 py-3 px-6 ">
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
