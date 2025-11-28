export default function Experience() {
  const experience = [
    {
      year: "06/2024 – 09/2024",
      role: "Full-Stack Software Developer Intern",
      company: "Vardot Enterprise Drupal Solutions",
      location: "Amman, Jordan",
      description:
        "Built user-friendly interfaces with Bootstrap, designed database structures using MySQL, and helped develop scalable back-end systems using PHP (OOP MVC) and Drupal CMS."
    }
  ];

  const stack = [
  
    "React.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Git"
 ];



  return (
    <section
      id="experience"
      className="absolute inset-0 flex justify-center items-center px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Experience
        </h2>
        
        {/* Primary Stack */}
        <div className="space-y-2 mb-16">
          <p className="text-lg text-white/70 text-start">Primary Stack</p>
          <div className="flex flex-wrap justify-start gap-2">
            {stack.map((item, i) => (
              <span
                key={i}
                className="
                  bg-white/5 
                  backdrop-blur-sm
                  border border-white/50
                  rounded 
                  text-blue-400 text-sm
                  shadow-sm shadow-black/40
                  hover:bg-white/10 transition
                  px-2 py-1 rounded 
                  cursor-pointer
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-20">
          {experience.map((item, i) => (
            <div
              key={i}
              className="
                relative pl-8 
                border-l border-white/40
              "
            >
              {/* Dot */}
              <span className="
                absolute -left-[7px] top-1
                w-3 h-3 
                rounded-full 
                bg-white
                shadow-[0_0_10px_rgba(255,255,255,0.8)]
              ">
              </span>

              <p className="text-sm text-white/60 mb-1">{item.year}</p>

              <h3 className="ont-bold text-white text-sm sm:text-base md:text-xl">{item.role}</h3>
              <p className="text-white/80 text-sm sm:text-base">{item.company}</p>
              <p className="text-white/50 text-sm italic">{item.location}</p>

              <p className="text-white/80 leading-relaxed mt-3 max-w-md lg:max-w-2xl text-sm sm:text-base md:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
