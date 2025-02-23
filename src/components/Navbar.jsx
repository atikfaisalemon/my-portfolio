import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

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
        atikfaysalemon
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        {["home", "tech", "projects", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <ul className="hidden md:flex gap-5">
        {[
          { icon: <BsGithub />, link: "https://github.com/atikfaisalemon" },
          {
            icon: <BsLinkedin />,
            link: "https://www.linkedin.com/in/atikfaysalemon",
          },
          { icon: <BsTwitterX />, link: "https://x.com/atikfaisalemon1" },
        ].map(({ icon, link }, index) => (
          <li key={index}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {icon}
            </a>
          </li>
        ))}
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
        <div className="fixed right-0 top-[84px] flex h-screen w-2/3 flex-col items-start gap-10 border-l border-gray-800 bg-black/90 p-8 transition-all duration-300 md:hidden">
          <ul className="flex flex-col gap-6 text-lg">
            {["home", "tech", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="opacity-70 transition-all duration-300 hover:opacity-100"
                  onClick={menuOpen}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-5">
            {[<BsGithub />, <BsLinkedin />, <BsTwitterX />].map(
              (icon, index) => (
                <li
                  key={index}
                  className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
                >
                  {icon}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
