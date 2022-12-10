import React from "react";
import img01 from "../../assets/projectImg/project-01.png";
import Button from "../Button/Button";

const projects = [
  {
    img: img01,
    name: "Laptop Mart",
    details:
      "Laptop Mart is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.",
  },
  {
    img: img01,
    name: "Laptop Mart",
    details:
      "Laptop Mart is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.",
  },
  {
    img: img01,
    name: "Laptop Mart",
    details:
      "Laptop Mart is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="my-10 p-10">
      <div className="mb-20">
        <h1 className="text-4xl font-bold text-center mb-10">PROJECTS</h1>
        <p className="w-1/2 mx-auto text-xl text-center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="mx-20">
        {projects.map((project, i) => (
          <div key={i} className="flex items-center mb-16">
            <img className="w-1/2" src={project.img} alt="" />
            <div className="w-1/2 p-16">
              <h2 className="text-3xl font-bold mb-10">{project.name}</h2>
              <p className="text-xl mb-10">{project.details}</p>
              <Button>PREVIEW</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
