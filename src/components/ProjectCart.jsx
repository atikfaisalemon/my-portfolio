const ProjectCart = ({ project }) => {
  return (
    <div>
      <img
        src="project.image"
        alt=""
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:[w-300px]"
      />
      <div
        className="flex flex-col
         gap-5"
      >
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p>{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.tech.map((tech, index) => {
            <span key={index} className="bg-black/30 rounded-lg p-3">
              tech
            </span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
