import React from "react";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { GrMysql } from "react-icons/gr";
import { SiStreamlit, SiTableau } from "react-icons/si";

import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="skills"
      // className="flex flex-col items-center justify-center gap-10 pt-10 md:pb-20"
      className="flex min-h-screen items-center justify-center w-full flex-col gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className="text-4xl font-light text-white md:text-6xl"
      >
        💻 Technical Proficiencies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-3">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://www.python.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoPython className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://git-scm.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGit className="cursor-pointer text-[80px] text-red-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoTailwindCss className="cursor-pointer text-[80px] text-teal-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoReact className="cursor-pointer text-[80px] text-cyan-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://streamlit.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiStreamlit className="cursor-pointer text-[80px] text-pink-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://www.linux.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FcLinux className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://www.mysql.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrMysql className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://www.tableau.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTableau className="cursor-pointer text-[80px] text-indigo-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-light text-white md:text-6xl"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
