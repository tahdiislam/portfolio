import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/Tahdi-Islam.jpg";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 text-xl font-semibold shadow-lg">
      <div className="flex w-1/4 items-center">
        <img className="h-16 w-16 rounded-full" src={photo} alt="" />
        <h2 className="ml-4">TAHDI ISLAM</h2>
      </div>
      <div>
        <ul className="md:flex ml-6">
          <li className="ml-12">
            <a href="/">HOME</a>
          </li>
          <li className="ml-12">
            <a href="/">ABOUT</a>
          </li>
          <li className="ml-12">
            <a href="/">PROJECT</a>
          </li>
          <li className="ml-12">
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
