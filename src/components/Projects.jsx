const projectsData = [
  {
    image: "spotify.png",
    title: "Spotify Homepage",
    description: "Explore a static clone of Spotify's homepage",
    tech: ["Tailwind CSS", "JavaScript", "HTML"],
  },
  {
    image: "madcaps.png",
    title: "MADCAPS",
    description: "MadCaps is an online cap store",
    tech: ["ReactJs", "Tailwind CSS", "JavaScript", "HTML"],
  },
  {
    image: "Book-Store.png",
    title: "Ebook Store",
    description: "Book Store is an application where users can read eBooks",
    tech: ["Tailwind CSS", "JavaScript", "ReactJs"],
  },
  {
    image: "Gear-Suite.png",
    title: "Gear-Suite",
    description: "Product Management Application",
    tech: ["Tailwind CSS", "JavaScript", "ReactJs"],
  },
];

const ProjectCart = ({ project }) => {
  return (
    <div className="bg-white/10 p-6 rounded-lg shadow-lg">
      <img
        src={`/${project.image}`} // Corrected the image path
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
      />
      <div className="flex flex-col gap-5 mt-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-black/30 rounded-lg px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1000px] text-white">
        {projectsData.map((project, index) => (
          <ProjectCart key={index} project={project} /> // Corrected missing return
        ))}
      </div>
    </div>
  );
};

export default Projects;
