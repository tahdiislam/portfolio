import React from "react";
import img01 from "../../assets/projectImg/project-01.png";
import img02 from "../../assets/projectImg/project-02.png";
import img03 from "../../assets/projectImg/project-03.png";
import Button from "../Button/Button";

const projects = [
  {
    img: img01,
    name: "Laptop Mart",
    details:
      "Laptop Mart is a multi vendor e-commerce where I seller can sell old laptop, a buyer can buy laptop, and the Admin can manage his user and all product.",
    link: "https://laptop-mart-26.web.app/",
  },
  {
    img: img02,
    name: "Snack Deck",
    details:
      "Snack deck is simple personal cloud kitchen where the seller can sell his food and the user can buy any food and review in food, also can manage his review",
    link: "https://snackdeck-a569c.web.app/",
  },
  {
    img: img03,
    name: "Code Tutor",
    details:
      "Code Tutor is a AdTech platform where the seller can sell their courses. and the user can buy any kind of curses",
    link: "https://code-tutor-255e9.web.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="my-10 p-10">
      <div
        className="mb-20 md:w-1/2 mx-auto"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        <h1 className="text-4xl font-bold text-center mb-10">PROJECTS</h1>
        <p className="text-xl text-center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="mx-4 md:mx-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center mb-8 md:mb-16"
          >
            <img
              className="mb-4 md:mb-0 md:w-1/2"
              src={project.img}
              alt=""
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in"
            />
            <div
              className="md:w-1/2 md:p-16"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="ease-in"
            >
              <h2 className="text-3xl font-bold mb-10">{project.name}</h2>
              <p className="text-xl mb-10">{project.details}</p>
              <a target="_blank" href={project.link}>
                <Button style="py-2 px-6 text-lg md:py-3 md:px-8 md:text-xl">
                  PREVIEW
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
