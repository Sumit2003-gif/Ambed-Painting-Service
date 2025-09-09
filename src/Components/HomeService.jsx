import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaClipboardList,
  FaPaintBrush,
  FaThLarge,
  FaCouch,
} from "react-icons/fa";

// Card data array
const cardData = [
  {
    image:
      "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/benefits-one-points-img-2.jpg",
    icon: <FaClipboardList className="text-white text-lg" />,
    title: "Room Wallpapers",
    subtitle: "Morbi feugiat porta purus, at eleifend dolor ac.",
  },
  {
    image:
      "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/benefits-one-points-img-1.jpg",
    icon: <FaPaintBrush className="text-white text-lg" />,
    title: "Wall Paintings",
    subtitle: "Morbi feugiat porta purus, at eleifend dolor ac.",
  },
  {
    image:
      "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/project-two-bg-1-3.jpg",
    icon: <FaThLarge className="text-white text-lg" />,
    title: "Wall Sheets",
    subtitle: "Morbi feugiat porta purus, at eleifend dolor ac.",
  },
  {
    image:
      "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/project-two-bg-1-4.jpg",
    icon: <FaCouch className="text-white text-lg" />,
    title: "Interior Designing",
    subtitle: "Morbi feugiat porta purus, at eleifend dolor ac.",
  },
];

// Card component with animation on scroll and hover
const Card = ({ image, icon, title, subtitle, bgColor = "#a07155", index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-transparent rounded-xl overflow-visible max-w-sm mx-auto group cursor-pointer"
    >
      {/* Image wrapper with hover overlay */}
      <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300"
        />
        {/* Black overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-t-xl" />
      </div>

      {/* Floating icon */}
      <div
        className="absolute bottom-[120px] left-6 z-50 w-12 h-12 flex items-center justify-center rounded"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>

      {/* Text box */}
      <div className="relative bg-white w-[90%] ml-3 -mt-6 rounded-b-xl border p-6 pt-10 clip-custom-card z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
          className="text-lg font-bold text-gray-900 leading-tight mb-1"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
          className="text-sm text-gray-500 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Main section component
const HomeService = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#f8f5f2] relative z-10 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <p className="uppercase text-sm tracking-widest text-[#a07155] font-semibold">
          our services
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2 relative inline-block">
          Services We’re Offering
          <span className="block w-12 h-1 bg-[#a07155] mx-auto mt-4 rounded" />
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            index={index}
            image={item.image}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeService;
