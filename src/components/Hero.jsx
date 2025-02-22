import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-24 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="./profile.jpg"
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-950 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-light transition-all duration-300 hover:opacity-100 md:text-7xl">
            Hi, There I'm Emon
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500  to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl font-light transition-all duration-300 hover:opacity-100 md:text-5xl">
            A frontend web developer. I write your ideas in codes
          </h3>
          <p className="md:text-base text-pretty text-sm">
            Passionate about web development. I build create beautiful &
            functional websites for small businesses. Besides coding, I own a
            cap brand called Mad Caps. I also share my budgie breeding journey
            on YouTube and Facebook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
