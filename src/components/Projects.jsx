import React from "react";
import image1 from "/public/project_1.png";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";

const projectData = [
  {
    image: image1,
    title: "Anibase",
    description:
      "My first project using React and Tailwind CSS. It is a web app that will fetch information about the anime you search for from an API.",
    technologies: ["React", "Tailwind CSS", "DaisyUI", "Vercel"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <a
          href="https://www.anibase.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={project.image}
            alt="Anibase"
            className="w-full  cursor-pointer rounded-2xl  md:w-[50vw]  shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 "
          />
        </a>
        <div className="flex flex-col gap-5">
          <div class name="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((technology, index) => (
              <div key={index} className="rounded-lg bg-black p-3">
                {technology}
              </div>
            ))}
          </div>
          <div class name="flex flex-col gap-3">
            <a
              href="https://github.com/sidharthvinod24/anibase/tree/master"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen items-center justify-center w-full flex-col gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          🚀 Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
