const projectsData = [
  {
    image: "spotify.png",
    title: "Spotify Homepage",
    description: "Explore a static clone of Spotify's homepage",
    tech: ["Tailwind CSS", "JavaScript", "HTML"],
    link: "https://spotify-homepage.vercel.app/",
  },
  {
    image: "madcaps.png",
    title: "MADCAPS",
    description: "MadCaps is an online cap store",
    tech: ["ReactJs", "Tailwind CSS", "JavaScript", "HTML"],
    link: "https://github.com/atikfaisalemon/mad-caps",
  },
  {
    image: "Book-Store.png",
    title: "Ebook Store",
    description: "Book Store is an application where users can read eBooks",
    tech: ["Tailwind CSS", "JavaScript", "HTML"],
    link: "https://github.com/atikfaisalemon/book-store",
  },
  {
    image: "Gear-Suite.png",
    title: "Gear-Suite",
    description: "Product Management Application",
    tech: ["Tailwind CSS", "JavaScript", "ReactJs"],
    link: "https://github.com/atikfaisalemon/gear-suite-caps",
  },
];

const ProjectCart = ({ project }) => {
  return (
    <div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={`/${project.image}`} // Image from public folder
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:[w-300px]"
        />
      </a>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p>{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-black/30 rounded-lg p-3">
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
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCart key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
