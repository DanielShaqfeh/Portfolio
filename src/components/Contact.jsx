import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-6 md:px-12">
      <div className="flex flex-col items-start text-start max-w-xl w-full">
        <h2 className="text-3xl sm:text-4xl font-heading text-white text-start mb-4">
          Get in Touch
        </h2>
        <p className="text-white/70 text-start mb-6 text-sm md:text-xl">
            I'm currently looking for new opportunities and open to work. 
            If you have a project or role in mind, I'd love to hear from you!
        </p>

        <a
          href="mailto:your-email@example.com"
          className="
            inline-flex items-center gap-2 px-6 py-3 
            bg-white/10 backdrop-blur-sm 
            text-white font-medium rounded-lg 
            hover:bg-white/20
            transition-colors duration-300
            justify-start
          "
        >
          <FaEnvelope /> Email Me
        </a>
      </div>
    </div>
  );
}
