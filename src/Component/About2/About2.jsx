import React from "react";
import Button from "../Button/Button";
import Contact from "../Contact/Contact";
import Footers from "../Footers/Footers";
import Header from "../Header/Header";
import Tahdi_Islam from "../../assets/Tahdi-Islam.jpg";


const About2 = () => {
  return (
    <div>
      <Header />
      <div id="about" className="bg-gray-100 pt-20">
        <div className="w-3/4 md:w-1/2 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">ABOUT ME</h1>
          <p className="text-xl text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse md:justify-center">
          <div className="md:w-1/2 p-8 md:p-20 md:pl-10">
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
              to the success of the overall product. Check out some of my work
              in the <span className="font-bold">Projects</span> section.
              <br />I also like sharing content related to the stuff that I have
              learned over the years in{" "}
              <span className="font-bold">Web Development</span> so it can help
              other people of the Dev Community. Feel free to Connect or Follow
              me on my{" "}
              <a
                className="font-bold text-green-400 underline hover:no-underline hover:text-green-500"
                target="_blank"
                href="https://www.linkedin.com/in/tahdiislam/"
              >
                Linkedin
              </a>{" "}
              where I post useful content related to Web Development and
              Programming I'm open to <span className="font-bold">Job</span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to <span className="font-bold">contact</span> me.
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
          <div className="px-6 md:w-2/5 md:py-20 md:p-20 md:pr-10">
            <div
              className=""
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="ease-in"
            >
              <img className="w-full rounded-full" src={Tahdi_Islam} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footers />
    </div>
  );
};

export default About2;