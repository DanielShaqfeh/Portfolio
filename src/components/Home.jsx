import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Home() {
  const fullName = "Daniel Shaqfeh";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="absolute inset-0 flex justify-center items-center px-4 sm:px-6 md:px-12"
    >
      <div className="flex flex-col items-start text-start max-w-xl w-full">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          {typedName}
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </h1>

        {/* Description */}
        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6">
          Full-stack Developer & Competitive Programmer - ACPC Finalist. Loves solving coding problems and exploring new algorithms and technologies.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/DanielShaqfeh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-300 hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-shaqfeh-8021a8253/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-300 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://codeforces.com/profile/An9on"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-300 hover:text-blue-400"
          >
            <SiCodeforces />
          </a>
          <a
            href="mailto:danielshaqfeh@gmail.com"
            className="text-white transition-colors duration-300 hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
