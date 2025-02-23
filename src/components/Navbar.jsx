import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/10 px-16 py-6 text-white backdrop-blur-md md:justify-evenly transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a
        href="#home"
        className="flex gap-2 items-center bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-2xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        <img
          className="w-10 h-10 rounded-full border-2 border-blue-800 bg-clip-text"
          src="convo.jpg"
          alt=""
        />
        atikfaysalemon
      </a>
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
      <ul className="hidden md:flex gap-5">
        <a href="https://github.com/atikfaisalemon" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 hover:opacity-100">
            <BsGithub />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/atikfaysalemon" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>
        <a href="https://x.com/atikfaisalemon1" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 hover:opacity-100">
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
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start gap-10 border-1 border-gray-800 bg-black/50 p-12">
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 hover:opacity-100"
            >
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
          <ul className="flex gap-5">
            <li className="cursor-pointer text-xl opacity-70 hover:opacity-100">
              <BsGithub />
            </li>
            <li className="cursor-pointer text-xl opacity-70 hover:opacity-100">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 hover:opacity-100">
              <BsTwitterX />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
