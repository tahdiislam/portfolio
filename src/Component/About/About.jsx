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
  "TailwindCSS",
  "Bootstrap",
  "GitHub",
  "Netlify",
  "Vercel",
  "Chrome Dev Tool",
  "Material UI",
  "VS Code",
];

const About = () => {
  return (
    <div id="about" className="bg-gray-100 pt-16">
      <div className="w-3/4 md:w-1/2 mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">ABOUT ME</h1>
        <p className="text-xl text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="md:w-1/2 p-8 md:p-20">
          <h3
            className="text-3xl font-bold mb-10"
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-duration="700"
          >
            Get to know me!
          </h3>
          <p
            className="text-xl text-justify mb-10"
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="500"
          >
            I'm a <span className="font-bold">Frontend Web Developer</span>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <span className="font-bold">Projects</span> section.
            <br />I also like sharing content related to the stuff that I have
            learned over the years in{" "}
            <span className="font-bold">Web Development</span> so it can help
            other people of the Dev Community. Feel free to Connect or Follow me
            on my{" "}
            <a
              className="font-bold text-green-400 underline hover:no-underline hover:text-green-500"
              target="_blank"
              href="https://www.linkedin.com/in/tahdiislam/"
            >
              Linkedin
            </a>{" "}
            where I post useful content related to Web Development and
            Programming I'm open to <span className="font-bold">Job</span>{" "}
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to <span className="font-bold">contact</span> me.
          </p>
          <a
            href="#contact"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in"
          >
            <Button style="py-3 px-10">CONTACT</Button>
          </a>
        </div>
        <div className="px-6 md:w-1/2 md:py-20 md:pr-20">
          <h3
            className="text-2xl font-bold mb-10"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-easing="ease-in"
          >
            My Skills
          </h3>
          <div
            className="flex flex-wrap"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in"
          >
            {skills.map((skill, i) => (
              <span
                key={i}
                className="p-4 bg-gray-300 m-3 rounded-md text-gray-700 font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
