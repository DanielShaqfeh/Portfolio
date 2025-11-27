import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiDocker,
  SiGit,
  SiVercel,
  SiBootstrap,
  SiPostgresql,
  SiGithub,
  SiCplusplus,
  SiPython,
  SiPhp,
} from "react-icons/si";

const technologies = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "SASS", icon: SiSass, color: "#CD6799" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#6E6E6E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#fff" },
  { name: "Vercel", icon: SiVercel, color: "#fff" },
];

export default function Tech() {
  return (
    <section
      id="tech"
      className="relative flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-12 py-32"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 sm:mb-12 text-center w-full max-w-2xl">
        Tech & Tools
      </h2>

      {/* Tech Grid */}
      <div
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 ">
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="
                flex flex-col items-center justify-center
                p-4
                rounded-xl
                bg-white/5 backdrop-blur-md
                hover:bg-white/10
                transition-all duration-300
                cursor-pointer
                shadow-md shadow-black/20
              "
            >
              <div className="text-2xl md:text-4xl lg:text-6xl">
                <Icon color={tech.color} />
              </div>
              <span className="mt-2 text-white text-xs sm:text-sm md:text-base text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
