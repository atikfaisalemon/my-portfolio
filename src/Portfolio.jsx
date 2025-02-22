import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="text-center py-20">
        <h1 className="text-4xl font-bold">Atik Faisal Emon</h1>
        <p className="text-xl text-gray-400 mt-2">
          Frontend Developer | React Enthusiast
        </p>
      </header>

      {/* Projects Section */}
      <section className="px-6 md:px-24">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Mad Caps</h3>
            <p className="text-gray-400">
              An e-commerce cap brand built with React and Firebase.
            </p>
            <a
              href="https://github.com/atikfaisalemon/mad-caps"
              target="_blank"
              className="text-blue-400"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-24 mt-16">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {["React", "JavaScript", "Tailwind CSS", "Firebase", "Node.js"].map(
            (skill) => (
              <span key={skill} className="bg-gray-700 px-4 py-2 rounded-lg">
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="text-center py-12 mt-16">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/atikfaisalemon" className="text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
