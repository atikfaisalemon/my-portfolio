import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [isProfileVisible, setProfileVisible] = useState(false);
  const toggleProfile = () => {
    setProfileVisible((prev) => !prev);
  };
  return (
    <>
      {/* Full-screen background */}
      <div className="fixed top-0 left-0 z-[-1] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Main content */}
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 z-10">
        <Navbar toggleProfile={toggleProfile} />
        <Hero isProfileVisible={isProfileVisible} />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
