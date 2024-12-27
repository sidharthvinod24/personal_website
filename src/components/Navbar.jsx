import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY && currentScrollY > 100) {
        setVisible(false); // Hide navbar when scrolling down
      } else if (currentScrollY < scrollY) {
        setVisible(true); // Show navbar when scrolling up
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const menuOpened = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/90 px-16 py-6 text-white backdrop-blur-md md:justify-evenly"
    >
      <a className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
        Sidharth
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#aboutme"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>

        <a
          href="#skills"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Skills</li>
        </a>

        <a
          href="#education"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Education</li>
        </a>

        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl  opacity-70 transition-all duration-300 hover:opacity-100 hover:text-red-500">
          <BsLinkedin />
        </li>

        <li className="cursor-pointer text-xl  opacity-70 transition-all duration-300 hover:opacity-100 hover:text-red-500">
          <BsGithub />
        </li>
      </ul>
      {isOpen ? (
        <BiX className="block md:hidden text-3xl" onClick={menuOpened} />
      ) : (
        <BiMenu className="block md:hidden text-3xl" onClick={menuOpened} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/40
        p-12 md:hidden ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#aboutme"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>

            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>

            <a
              href="#education"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Education</li>
            </a>

            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>

            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          {/* Allows to wrap inside the unorderd list */}
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl  opacity-70 transition-all duration-300 hover:opacity-100 hover:text-red-500">
              <BsLinkedin />
            </li>

            <li className="cursor-pointer text-xl  opacity-70 transition-all duration-300 hover:opacity-100 hover:text-red-500">
              <BsGithub />
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
