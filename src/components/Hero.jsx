import image from "/public/image.png";
import { motion } from "framer-motion";
import { use } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Aspiring Machine Learning Engineer",
      "AI Enthusiast",
      "Web Developer",
    ],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });
  return (
    <div
      id="aboutme"
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 top-0 w-full h-screen"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative"
      >
        <img
          className="relative  rounded-full lg:max-w-[70%] max-w-[60%] mx-auto cursor-pointer shadow-xl shadow-red-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-red-600  "
          src={image}
          alt="My Image"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white md:mt-0 sm:mt-8 mt-4"
      >
        <h1 className="text-4xl font-bold md:text-6xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent opacity-80">
            Sidharth Vinod
          </span>
        </h1>
        <h3 className="text-2xl md:text-3xl">
          I'm a{" "}
          <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent opacity-80">
            {text}
          </span>
          <span className="text-red-500">
            <Cursor />
          </span>
        </h3>

        <p className="md:text-lg text-pretty ">
          Passionate first-year Applied AI student with a strong foundation in
          machine learning, NLP, and data-driven problem-solving. Excited to
          explore innovative AI applications and build impactful solutions.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
