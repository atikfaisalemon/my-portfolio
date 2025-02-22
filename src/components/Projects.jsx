import { motion } from "framer-motion";

const projectsData = [
  {
    image: "spotify.png",
    title: "Spotify Homepage",
    description: "Explore a static clone of Spotify's homepage.",
    tech: ["Tailwind CSS", "JavaScript", "HTML"],
    link: "https://spotify-homepage.vercel.app/",
  },
  {
    image: "madcaps.png",
    title: "MADCAPS",
    description: "MadCaps is an online cap store.",
    tech: ["ReactJs", "Tailwind CSS", "JavaScript", "HTML"],
    link: "https://github.com/atikfaisalemon/mad-caps",
  },
  {
    image: "Book-Store.png",
    title: "Ebook Store",
    description: "Book Store is an application where users can read eBooks.",
    tech: ["Tailwind CSS", "JavaScript", "HTML"],
    link: "https://github.com/atikfaisalemon/book-store",
  },
  {
    image: "Gear-Suite.png",
    title: "Gear-Suite",
    description: "A Product Management Application.",
    tech: ["Tailwind CSS", "JavaScript", "ReactJs"],
    link: "https://github.com/atikfaisalemon/gear-suite-caps",
  },
];

// Scroll Reveal Animation Wrapper (Each project animates separately)
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Project Card Component
const ProjectCart = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mx-auto w-full max-w-[900px]">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={`/${project.image}`}
            alt={project.title}
            className="w-full max-w-[300px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105"
          />
        </a>
        <div className="flex flex-col gap-4 md:text-left w-full md:w-[60%]">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <p className="text-gray-400">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-black/30 rounded-lg px-3 py-1 text-center text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

// Main Projects Component
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white mx-auto justify-center">
        {projectsData.map((project, index) => (
          <ProjectCart key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
