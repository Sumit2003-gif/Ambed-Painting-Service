import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      id: "01",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12 stroke-[#a87b65] transition-all duration-300 group-hover:stroke-white"
          fill="none"
          strokeWidth="2"
        >
          <rect x="10" y="10" width="30" height="44" rx="2" ry="2" />
          <rect x="28" y="22" width="26" height="32" rx="2" ry="2" />
          <circle
            cx="41"
            cy="38"
            r="2"
            className="fill-[#a87b65] transition-all duration-300 group-hover:fill-white"
          />
        </svg>
      ),
      title: "Best Quality",
      subtitle: "Material Standard",
    },
    {
      id: "02",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12 stroke-[#a87b65] transition-all duration-300 group-hover:stroke-white"
          fill="none"
          strokeWidth="2"
        >
          <circle cx="32" cy="24" r="14" />
          <path d="M32 38 L24 54 H40 Z" />
          <path d="M26 24 L30 28 L38 20" strokeWidth="3" />
        </svg>
      ),
      title: "Smart &",
      subtitle: "Unique WallWork",
    },
    {
      id: "03",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12 stroke-[#a87b65] transition-all duration-300 group-hover:stroke-white"
          fill="none"
          strokeWidth="2"
        >
          <circle cx="32" cy="20" r="10" />
          <path d="M12 54 C12 40 52 40 52 54 Z" />
          <circle cx="32" cy="44" r="4" />
        </svg>
      ),
      title: "Skilled and",
      subtitle: "Trained Experts",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-[#a87b65] mb-[2%] rounded-b-[35%] py-14 px-5 sm:px-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group flex flex-col md:flex-row md:items-center md:justify-center gap-5 relative text-center md:text-left transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            {/* Icon */}
            <motion.div
              className="bg-white p-6 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#3C3531]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.1, duration: 0.4 }}
            >
              {feature.icon}
            </motion.div>

            {/* Text Content */}
            <div>
              <p className="text-sm text-gray-200">{feature.id}</p>
              <h3 className="text-lg font-bold leading-snug">
                {feature.title} <br /> {feature.subtitle}
              </h3>
            </div>

            {/* Divider */}
            {index !== features.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-gray-300"></span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
