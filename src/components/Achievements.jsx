import cert1 from "../assets/images/jcpc-2025.jpg";
import cert2 from "../assets/images/full-stack-udemy-by-angela.jpg";

const certificates = [
  { id: 1, img: cert1, title: "Certificate 1" },
  { id: 2, img: cert2, title: "Certificate 2" },
];

export default function Achievements() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-32 py-32">
      <h2 className="text-3xl sm:text-4xl font-heading text-white text-center mb-12">
        Achievements
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 justify-center max-w-4xl">

        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="
                relative
                overflow-hidden
                rounded-xl
                transition-all duration-500
                transform
                flex items-center justify-center
                mx-auto 
                w-[90%]        
                sm:w-[85%]   
                md:w-[80%]     
                lg:w-full     
                h-full
            "
          >
            <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-fill transition-transform duration-500 transform hover:scale-110"
            />
            </div>

        ))}
      </div>
    </div>
  );
}
