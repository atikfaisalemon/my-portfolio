import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";

const Navbar = ({ toggleProfile }) => {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuOpen = () => setOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 flex w-full items-center justify-between border-b border-gray-700 bg-black/10 px-6 py-4 text-white backdrop-blur-md md:px-16 md:py-6 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo & Name */}
      <a
        href="#home"
        onClick={toggleProfile}
        className="flex items-center gap-2 text-2xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer"
      >
        <img
          className="w-10 h-10 rounded-full border-2 border-blue-800"
          src="convo.jpg"
          alt="logo"
        />
        atikfaisalemon
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 hover:opacity-100">
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      {/* Social Links */}
      <ul className="hidden md:flex gap-5">
        <li className="relative group">
          <a
            href="/Atik_Faisal_Emon_CV.pdf"
            download
            className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <TbFileCv />
          </a>
          <span className="absolute -top-5 -left-8 -translate-x-1/2 scale-0 bg-gray-800 text-white text-[10px] px-2 py-1 rounded-md transition-all group-hover:scale-100">
            Download CV
          </span>
        </li>
        <li>
          <a
            href="https://github.com/atikfaisalemon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/atikfaysalemon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/atikfaisalemon1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <BsTwitterX />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      {isOpen ? (
        <BiX
          className="block md:hidden text-4xl cursor-pointer"
          onClick={menuOpen}
        />
      ) : (
        <BiMenu
          className="block md:hidden text-4xl cursor-pointer"
          onClick={menuOpen}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[73px] flex h-screen w-2/3 flex-col items-center gap-10 border-l border-gray-800 bg-black/90 p-8 transition-all duration-300 md:hidden">
          <ul className="flex flex-col gap-6 text-lg ">
            <li>
              <a
                href="#home"
                className="opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={menuOpen}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={menuOpen}
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={menuOpen}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={menuOpen}
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex gap-5">
            <li>
              <a
                href="https://github.com/atikfaisalemon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/atikfaysalemon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/atikfaisalemon1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a
                href="/Atik_Faisal_Emon_CV.pdf"
                download
                className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <TbFileCv />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
