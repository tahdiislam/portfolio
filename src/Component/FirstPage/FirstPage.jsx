import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footers from "../Footers/Footers";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

const FirstPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footers />
    </div>
  );
};

export default FirstPage;
