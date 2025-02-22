import { div } from "framer-motion/client";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/10 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-2xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        atikfaysalemon
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
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
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contract"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contract</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <a href="https://github.com/atikfaisalemon" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
            <BsGithub />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/atikfaysalemon" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>
        <a href="https://x.com/atikfaisalemon1" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
            <BsTwitterX />
          </li>
        </a>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/50 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className=" flex flex-col gap-8">
            <a
              href="home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="contract"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contract</li>
            </a>
          </ul>
          <ul className=" flex gap-5 flex-wrap">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
              <BsGithub />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
              <BsTwitterX />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
