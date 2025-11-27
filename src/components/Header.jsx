import { useState } from "react";
import { FiHome, FiCode, FiBriefcase, FiFolder, FiAward, FiMail, FiFileText, FiMenu, FiX } from "react-icons/fi";
import ResumePDF from "../assets/docs/Daniel_Shaqfeh_Resume.pdf";

export default function VerticalSidebar({ setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home"); // Track selected section

  const navItems = [
    { icon: FiHome, label: "Home", section: "home" },
    { icon: FiCode, label: "Tech", section: "tech" },
    { icon: FiBriefcase, label: "Experience", section: "experience" },
    { icon: FiFolder, label: "Projects", section: "projects" },
    { icon: FiAward, label: "Achievements", section: "achievements" },
    { icon: FiMail, label: "Contact", section: "contact" }
  ];

  const handleClick = (section) => {
    setActiveSection(section);
    setSelectedSection(section);
    setIsOpen(false); 
  };

  return (
    <div>
      {/* Resume button */}
      <a
        href={ResumePDF}
        download
        className="fixed top-4 left-4 lg:right-6 lg:left-auto flex items-center gap-2 text-white px-4 py-2 hover:text-blue-400 transition-colors duration-300 text-xs md:text-sm z-50"
      >
        <FiFileText className="text-lg md:text-xl" />
        <span>Resume</span>
      </a>

      {/* Burger menu button */}
      <button
        className="fixed top-4 right-4 lg:hidden flex items-center justify-center z-50 text-white text-2xl p-2 bg-black/80 rounded-lg border border-white/50 shadow-lg transition-transform duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
          }`}
        >
          <FiMenu className={`${isOpen ? "opacity-0" : "opacity-100"} transition-opacity duration-200`} />
        </span>
        <span
          className={`block transform transition-transform duration-300 ease-in-out absolute ${
            isOpen ? "rotate-0 scale-100" : "-rotate-45 scale-110"
          }`}
        >
          <FiX className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-200`} />
        </span>
      </button>

      {/* Vertical sidebar */}
      <nav
        className={`
          fixed right-0 top-20 lg:top-1/2 lg:-translate-y-1/2 flex flex-col w-auto
          bg-black/80 rounded-lg border border-white/50 py-4 px-2 sm:py-6 sm:px-4 shadow-lg z-50
          ${isOpen ? "flex" : "hidden"} lg:flex
          mr-6
        `}
      >


        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = selectedSection === item.section;

            return (
              <li key={item.label} className="flex flex-col items-center">
                <button
                  onClick={() => handleClick(item.section)}
                  className="flex flex-col items-center group bg-transparent border-none"
                >
                  <Icon
                    className={`text-2xl mb-1 transition-colors duration-200 group-hover:text-blue-400 ${
                      isActive ? "text-blue-400" : "text-white"
                    }`}
                  />
                  <span className="text-sm text-center text-white/90">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
