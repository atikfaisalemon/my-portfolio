import { div } from "framer-motion/client";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <div>
          <img
            src="./profile.jpg"
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-950 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </div>
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light transition-all duration-300 hover:opacity-100 md:text-7xl">
            Atik Faysal Emon
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
