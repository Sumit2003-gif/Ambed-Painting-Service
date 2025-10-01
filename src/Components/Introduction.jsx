import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const list = [
    "Nsectetur cing elit.",
    "Suspe ndisse suscipit sagittis leo.",
    "Entum estibulum dignissim posuere.",
    "Donec tristique ante vel sem dictum rhoncus.",
  ];

  // Scroll-triggered animation control
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden border"
      style={{
        backgroundImage:
          "url('https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/feature-two-shape-2.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-sm z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* Left Side - Images with animation */}
        <motion.div
          variants={itemVariants}
          className="relative w-full flex justify-center"
          style={{
            backgroundImage:
              "url('https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/welcome-one-dot.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundSize: "auto",
            animation: "zoomInOut 10s ease-in-out infinite",
          }}
        >
          <div className="relative">
            <img
              src="https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/welcome-one-img-1.jpg"
              alt="Bathroom"
              className="rounded-tl-[50px] rounded-br-[50px] border-4 border-[#2E2824] w-full max-w-md object-cover relative z-10 shadow-xl"
            />

            <img
              src="https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/welcome-one-img-2.jpg"
              alt="Interior"
              className="absolute bottom-[-40px] right-[-40px] w-1/2 rounded-tl-[50px] rounded-br-[50px] shadow-xl z-20 border-4 border-white"
            />

            <div className="absolute bottom-[-50px] left-[-30px] bg-white px-6 py-4 shadow-2xl flex items-center gap-3 rounded-lg z-30 border-l-4 border-[#a87b65]">
              <h2 className="text-4xl font-bold text-[#3C3531]">30</h2>
              <div className="text-gray-600 text-sm leading-tight">
                <p>Years</p>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 text-center lg:text-left"
        >
          <p className="uppercase tracking-widest text-[#a87b65] font-semibold">
            Our Introduction
          </p>

          <h1 className="text-3xl lg:text-4xl font-bold text-[#3C3531] leading-snug">
            Welcome to Ambed Best <br className="hidden lg:inline" />
            Interior Design House
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm
            andhn. Aenean tincidunt id mauris id auctor donec at ligula lacus.
          </p>

          {/* List items with staggered animation */}
          <motion.ul
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {list.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <span className="w-6 h-6 flex items-center justify-center border border-[#a87b65] rounded-full text-[#a87b65] font-bold text-xs">
                  ●
                </span>
                <p className="text-gray-800 text-start font-medium">{item}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Signature */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 mt-8 justify-center lg:justify-start"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#a87b65] shadow-md">
              <img
                src="https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/welcome-one-person-img.jpg"
                alt="Kevin Martin"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/signature_01.png"
                alt="Signature"
                className="h-10 object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animation Keyframes for zooming background */}
      <style>{`
        @keyframes zoomInOut {
          0%, 100% {
            background-size: 30%;
          }
          50% {
            background-size: 40%;
          }
        }
      `}</style>
    </div>
  );
};

export default Introduction;
