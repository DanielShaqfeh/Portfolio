import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Tech from "./components/Tech.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [displaySection, setDisplaySection] = useState("home");
  const [fade, setFade] = useState("fade-in");

  // Handle fade transition
  const changeSection = (section) => {
    if (section === displaySection) return; 
    setFade("fade-out"); 
    setTimeout(() => {
      setDisplaySection(section); 
      setFade("fade-in"); 
    }, 300); 
  };

  return (
    <div className="min-h-screen">
      <Header setActiveSection={changeSection} />
      <div className={`transition-opacity duration-300 ${fade}  lg:mr-32`}>
        {displaySection === "home" && <Home />}
        {displaySection === "tech" && <Tech />}
        {displaySection === "experience" && <Experience />}
        {displaySection === "projects" && <Projects />}
        {displaySection === "achievements" && <Achievements />}
        {displaySection === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
