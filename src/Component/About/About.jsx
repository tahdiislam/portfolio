import React from "react";
import Button from "../Button/Button";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Firebase",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const About = () => {
  return (
    <div id="about" className="bg-gray-100 pt-16">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">ABOUT ME</h1>
        <p className="text-xl w-1/2 mx-auto text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="flex justify-center">
        <div className="md:w-1/2 p-20">
          <h3 className="text-3xl font-bold mb-10">Get to know me!</h3>
          <p className="text-xl text-justify mb-10">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section. I also like
            sharing content related to the stuff that I have learned over the
            years in Web Development so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my Linkedin where I
            post useful content related to Web Development and Programming I'm
            open to Job opportunities where I can contribute, learn and grow. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
          <Button style="py-3 px-10">CONTACT</Button>
        </div>
        <div className="md:w-1/2 py-20 pr-20">
          <h3 className="text-2xl font-bold">My Skills</h3>
          <div className="flex flex-wrap">
            {skills.map((skill, i) => (
              <span key={i} className="p-4 bg-gray-300 m-3 rounded-md text-gray-700 font-semibold">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
