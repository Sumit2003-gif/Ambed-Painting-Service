import React, { useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const AboutKnow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-20 bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto border-b pb-10 flex flex-col lg:flex-row items-center gap-12">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p className="uppercase text-sm text-[#B8A894] font-medium tracking-widest mb-2">
            Get to Know Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3C3531] leading-tight mb-4">
            We Make Difference
            <br />
            in Your Homes
          </h1>
          <div className="w-16 h-1 bg-[#B0AEB6] mb-6"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#A47C68] font-semibold mb-4"
          >
            We have 30+ years of experiences for give you better quality results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#8B82A3] mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua lonm andhn.
          </motion.p>

          {/* ICONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.2 }}
                className="flex items-start gap-4"
              >
                <FaCheckCircle className="text-[#3C3531] text-xl mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-[#3C3531]">
                    Quality Material
                  </h4>
                  <p className="text-sm text-[#8B82A3]">
                    Lorem ipsum dolor sit ame ed consectetur nod.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1 relative flex justify-center items-center mt-10 lg:mt-0"
        >
          {/* Gradient Blob */}
          <div className="absolute -top-20 -left-20 w-[380px] h-[380px] bg-gradient-to-tr from-[#F3ECE7] to-[#E4D6CC] rounded-full blur-3xl opacity-40 z-0"></div>

          {/* Collage Images */}
          <div className="relative grid grid-cols-2 gap-6 w-full max-w-lg z-10">
            {/* Tall Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="row-span-2 rounded-[30px] overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img
                src="https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg"
                alt="Interior 1"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            {/* Small Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="rounded-[30px] overflow-hidden shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Interior 2"
                className="w-full h-[240px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-[30px] overflow-hidden shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img
                src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg"
                alt="Interior 3"
                className="w-full h-[240px] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutKnow;
