import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    title: "Exterior Design",
    subtitle: "Room Wallpaper",
    hoverImage:
      "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/project-two-bg-1-1.jpg",
    description:
      "There are many new variations of available but majority is simple free text or random words which don't look.",
  },
  {
    title: "Modern Wall Design",
    subtitle: "Room Wallpaper",
    hoverImage:
      "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/project-two-bg-1-2.jpg",
    description:
      "We provide fresh & modern wall designs for all types of interiors that elevate your space beautifully.",
  },
  {
    title: "Wall Paintings",
    subtitle: "Room Wallpaper",
    hoverImage:
      "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/project-two-bg-1-3.jpg",
    description:
      "From minimalistic to abstract wall paintings, we help add charm to your living spaces with elegant designs.",
  },
  {
    title: "Room Interior",
    subtitle: "Room Wallpaper",
    hoverImage:
      "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/project-two-bg-1-4.jpg",
    description:
      "Give your rooms a cozy, luxurious makeover with our interior design expertise and creativity.",
  },
];

const FeaturedProjects = () => {
  const defaultBg =
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/project-two-bg-1-1.jpg";

  const [hoverBg, setHoverBg] = useState(null);
  const [hoverTitle, setHoverTitle] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center bg-no-repeat py-24 transition-all duration-700"
      style={{
        backgroundImage: `url('${hoverBg || defaultBg}')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0 transition-all duration-700" />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center bg-black/70 w-fit px-6 py-2 mx-auto text-2xl sm:text-3xl md:text-4xl font-bold mb-16 text-white relative z-10 rounded-md"
      >
        Featured Projects
      </motion.h2>

      

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {projectData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group relative h-[400px] bg-black/50 rounded overflow-hidden cursor-pointer transition-all duration-500"
            onMouseEnter={() => {
              setHoverBg(item.hoverImage);
              setHoverTitle(item.title);
            }}
            onMouseLeave={() => {
              setHoverBg(null);
              setHoverTitle(null);
            }}
          >
            {/* Hover Overlay Content */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-center text-white z-10">
              <p className="text-sm uppercase tracking-wide">{item.subtitle}</p>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm mb-4">{item.description}</p>
              <button className="bg-white text-black text-sm px-4 py-2 font-semibold w-max hover:bg-gray-200 transition">
                View More
              </button>
            </div>

            {/* Always-visible bottom label */}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 text-center z-20 group-hover:opacity-0 transition-opacity duration-500">
              <p className="text-xs">{item.subtitle}</p>
              <h4 className="font-bold text-base">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
