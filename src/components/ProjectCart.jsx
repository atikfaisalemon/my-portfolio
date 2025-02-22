const ProjectCart = ({ project }) => {
  return (
    <div className="flex flex-col items-center  gap-8 md:flex-row md:gap-24">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={`/${project.image}`} // Image from public folder
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
      </a>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold ">{project.title}</div>
          <div>
            <p className="text-gray-400">{project.description}</p>
          </div>
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

export default ProjectCart;
