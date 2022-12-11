import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/Tahdi-Islam.jpg";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-4 text-xl font-semibold w-full max-w-screen-2xl mx-auto fixed">
      <Link to="/" className="flex md:w-1/4 items-center">
        <img className="h-12 w-12 rounded-full" src={photo} alt="" />
        <h2 className="ml-6 text-2xl">TAHDI ISLAM</h2>
      </Link>
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
        <ul
          className={`flex flex-col md:flex-row ml-6 absolute right-0 md:static md:mr-0 bg-white md:bg-inherit ease-out duration-500 ${
            !dropdown ? "-top-96 -right-8" : "-right-8 top-16"
          }`}
        >
          <li className="md:ml-12 py-3 md:py-0 px-16 md:px-0 hover:bg-gray-200 md:hover:bg-inherit hover:text-green-500">
            <Link to="/">HOME</Link>
          </li>
          <li className="md:ml-12 py-3 md:py-0 px-16 md:px-0 hover:bg-gray-200 md:hover:bg-inherit hover:text-green-500">
            <a href="#about">ABOUT</a>
          </li>
          <li className="md:ml-12 py-3 md:py-0 px-16 md:px-0 hover:bg-gray-200 md:hover:bg-inherit hover:text-green-500">
            <Link to="/blogs">BLOGS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
