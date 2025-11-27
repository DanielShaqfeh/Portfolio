import { FaGithub, FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiEjs, SiPostgresql } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import zakiShaqfehArtAppImg from "../assets/images/zaki-shaqfeh-art-app-img.png";
import bookNodeAppImg from "../assets/images/book-node-app-img.png";
import blogNodeAppImg from "../assets/images/blog-node-app-img.png";

const projects = [
  {
    title: "Zaki Shaqfeh Art",
    description: "A responsive web showcase of my grandfather Zaki Shaqfeh's artworks with interactive UI.",
    image: zakiShaqfehArtAppImg,
    github: "https://github.com/DanielShaqfeh/zaki-shaqfeh-art.git",
    tech: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "EJS", icon: <SiEjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ]
  },
  {
    title: "Book Notes App",
    description: "Track and manage your books with add, edit, and note features.",
    image: bookNodeAppImg,
    github: "https://github.com/DanielShaqfeh/Book-Node-Web-App.git",
    tech: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "EJS", icon: <SiEjs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ]
  },
  {
    title: "DanBlog",
    description: "A Node.js & Express blog platform to create, view, and manage posts.",
    image: blogNodeAppImg,
    github: "https://github.com/DanielShaqfeh/Blog-Node-Web-App.git",
    tech: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "EJS", icon: <SiEjs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ]
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-12 py-32"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 sm:mb-12 text-center w-full max-w-2xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 justify-center max-w-4xl">
        {projects.map((project, i) => (
          <div
            key={i}
            className="
              rounded-xl 
              shadow-lg shadow-black/50 
              overflow-hidden 
              bg-white/5 backdrop-blur-md
              hover:bg-white/10
              transition-all duration-300
              flex flex-col
              border border-white/25
              w-full sm:w-[90%] md:w-[70%] lg:w-full
              mx-auto
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-72 lg:h-64 object-contain"
            />

            <div className="p-4 sm:p-3 flex flex-col flex-1">

              <h3 className="text-xl sm:text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-white/70 mb-4 flex-1 text-sm sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((techItem, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md text-white text-sm"
                  >
                    {techItem.icon}
                    <span>{techItem.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center justify-center gap-2 flex-1
                    px-4 py-2 
                    bg-gray-700 
                    text-white 
                    rounded-lg 
                    font-medium
                    shadow-md shadow-black/30
                    hover:shadow-lg
                    transition-all duration-300
                  "
                >
                  <AiFillGithub className="transition-transform duration-300 group-hover:translate-x-1" />
                  GitHub
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
