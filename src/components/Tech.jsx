import { motion } from "framer-motion";
import {
  BiLogoBootstrap,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        className="text-4xl font-light text-white md:text-6xl"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        Skills - Tech
      </motion.h1>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-10 p-5"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <div>
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 md:text-[120px]" />
        </div>
        <div>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 md:text-[120px]" />
        </div>
        <div>
          <BiLogoRedux className="cursor-pointer text-[80px] text-purple-600 transition-all duration-300 hover:-translate-y-5 md:text-[120px]" />
        </div>
        <div>
          <BiLogoReact className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 md:text-[120px]" />
        </div>
        <div>
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-400 transition-all duration-300 hover:-translate-y-5 md:text-[120px]" />
        </div>
        <div>
          <BiLogoBootstrap className="cursor-pointer text-[80px] text-purple-600 transition-all duration-300 hover:-translate-y-5 md:text-[120px]" />
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
